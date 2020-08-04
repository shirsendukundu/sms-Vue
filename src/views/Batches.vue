<template>
  <div class="container-fluid">
	<b-card class="mt-3  text-primary" header="Available Batches">
    <b-table striped hover responsive head-variant="white" :items="items" :fields="fields">
       <!-- //add button on action column -->
      <template v-slot:cell(Action)="row">
        <b-button size="sm" @click="studentsinbatch(row)"  variant="outline-primary" class="mr-2">
           Students
        </b-button>
        <b-button size="sm"  @click="edit(row)" variant="outline-warning" class="mr-2">
           Edit
        </b-button>
      </template>
    </b-table>
	</b-card>
  
   <!-- modal for update record -->
  <b-modal id="modal-1" title="Edit Batch Details" @ok="formsubmit">
    <body>
    <form ref="form" v-if="formshow" >
        <b-form-group id="input-group-1" label= "On Day:" label-for="input-1">
              <b-form-select
                id="input-1"
                v-model="form.day"
                :options="days"
                required
              >
            </b-form-select>
      </b-form-group> 
     
      <b-form-group id="input-group-2" label="Batch Time:" label-for="input-2">
        <b-form-timepicker 
        v-model="form.time"
        locale="en">

        </b-form-timepicker>
      </b-form-group>
    </form>
     <!-- student in batch -->
      <b-table striped hover responsive head-variant="white" :items="students" v-if="studentshow" ></b-table>
    </body>
  </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
            {
            key: 'bid',
            label: 'Batch Id',
            sortable: true
            },
            {
            key: 'day',
            sortable: true
            },
            {
            key:"time",
             sortable: true
            },
            {
            key:"course_name",
             sortable: true,
             label:'Course'
            }, 
            {
            key:"Action",
             sortable: false,
             label:"Actions"
            }
            
        ],
        // studentfields: [
        //     {
        //     key: 'stu_id',
        //     label: 'Student Id',
        //     sortable: true
        //     },
        //     {
        //     key: 'stu_name',
        //     label:'Name',
        //     sortable: true
        //     },
        //     {
        //       key:'mobile',
        //       lable:'Mobile'
        //     },
        //     {
        //       key:'address',
        //       lable:'Address'
        //     },
            
        // ],
        items: [],
        //form data store
         form: {
          day:'',
          time:'',
          bid:'',
         
        },
        days:[{text: 'Select One', value: null},'Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'],
        courses:[],
        students:[],
        studentshow:false,
        formshow:false
      }
    },
    
    methods:{
      edit(row){
        this.$bvModal.show("modal-1")
        this.form.time=row.item.time
        this.form.day=row.item.day
        this.form.bid=row.item.bid
        this.formshow=true
        this.studentshow=false
      },
      //run the modal and fetch the all students of the perticular batch
      studentsinbatch(row){
        this.$bvModal.show("modal-1")
        this.studentshow=true
        this.formshow=false
        this.fetchstudents(row.item.bid)
      },
        //fecth all available batches
      fetchbatch(){ const baseURI = 'http://localhost/ci/index.php/api/batch/'
        //axios obj initated on this.$http that declare on main .js
          this.$http.get(baseURI)
          .then((result) => {
          this.items = result.data
         })
         },
       //fetch all coureses 
       //for course dropdown
       fetchstudents(bid){
         const baseURI = 'http://localhost/ci/index.php/api/student/studentsinbatch/'+bid
        //axios obj initated on this.$http that declare on main .js
          this.$http.get(baseURI)
          .then((result) => {
                if(result.status!=200){
                  this.students= 'no students are found'
                }else{
                  this.students = result.data
                }
               
             })
             .catch((error) => {
              this.students=error.message
             
         })
       },
       formsubmit(){
         const data=JSON.stringify(this.form)
         const baseURI = 'http://localhost/ci/index.php/api/batch/'+this.form.bid
        //axios obj initated on this.$http that declare on main .js
          this.$http.put(baseURI,data)
          .then((result) => {
            console.log(result.data.message)
          })
          .catch((error)=>{
           console.log(error)
         })
       }
       //
    },
    
      mounted(){
        this.fetchbatch()
       
      }  
    
  }
</script>