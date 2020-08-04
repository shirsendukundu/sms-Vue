<template>
  <div class="container-fluid">
	<b-card class="mt-3 text-primary" header="Available Courses">
    <b-table striped hover head-variant="white" responsive :items="items" :fields="fields">
      <!-- //add button on action column -->
      <template v-slot:cell(Action)="row">
        <b-button size="sm"  @click="availablebatch(row)" variant="outline-primary" class="mr-2">
           Batches
        </b-button>
        <b-button size="sm"  @click="edit(row)" variant="outline-warning" class="mr-2">
           Edit
        </b-button>
      </template>
        
    </b-table>
	</b-card>
  <!-- modal for update record -->
  <b-modal id="modal-1" title="Edit Course Details" @ok="formsubmit">
    <body>
    <form ref="form" v-if="formshow">
     <b-form-group id="input-group-1" label="Course Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.course_name"
          required
          placeholder="Enter Course Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Duration:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.duration"
          required
          placeholder="Enter Course Duration"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Course Fees:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.course_fees"
          required
          placeholder="Enter Amount"
        ></b-form-input>
      </b-form-group>
     </form>
    <!-- available batches of the course -->
    <b-table striped hover responsive head-variant="white" :items="childitems" v-if="batchshow" ></b-table>
    </body>
  </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // data for course edit
          form: {
          course_name:'',
          duration:'',
          course_fees:'',
          cid:""
        },
          fields: [
            {
            key: 'cid',
            label: 'Course Id',
            sortable: true
            },
            {
            key: 'course_name',
            sortable: true,
            label:"Course"
            },
            {
            key:"duration",
            sortable: false
            },
            {
            key:"course_fees",
            sortable: false
            },
            {
            key:"Action",
             sortable: false,
             label:"Actions"
            }
            
        ],
        
        items: [],
        childitems:[],
        batchshow:false,
        formshow:false
      }
    },
    methods:{
     
       availablebatch(row){
         this.$bvModal.show("modal-1")
          const baseURI = 'http://localhost/ci/index.php/api/batch/batch/'+row.item.cid
        //axios obj initated on this.$http that declare on main .js
          this.$http.get(baseURI)
          .then((result) => {
          this.childitems=result.data
           
          })
          .catch((error)=>{
           console.log(error)
         })
         this.formshow=false
         this.batchshow=true
        
       },
       //update course details
        edit(row){
         this.$bvModal.show("modal-1")
         //console.log(row.item)
         this.form=row.item
         this.batchshow=false
         this.formshow=true
       },
       formsubmit(){
         const data=JSON.stringify(this.form)
         const baseURI = 'http://localhost/ci/index.php/api/course/'+this.form.cid
        //axios obj initated on this.$http that declare on main .js
          this.$http.put(baseURI,data)
          .then((result) => {
            console.log(result.data.message)
          })
          .catch((error)=>{
           console.log(error)
         })
       }
      
    },
    //fecth all available courses
        mounted(){
          const baseURI = 'http://localhost/ci/index.php/api/course'
        //axios obj initated on this.$http that declare on main .js
          this.$http.get(baseURI)
          .then((result) => {
          this.items = result.data

         })
      
     }
      
  }

</script>