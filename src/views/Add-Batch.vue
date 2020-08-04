<template>
    <div class="container-fluid">
	<b-card class="mt-3 primary" header="Create New Batch">
    <!-- alert on action -->
    <b-row>
      <b-col cols="8">
     <b-alert
      :show="true"
      dismissible
      fade
      variant="success"
        >
    <p> {{this.success}}</p>
    </b-alert>
      </b-col></b-row>
    
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     
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
      <b-form-group id="input-group-3" label="Course:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="form.cid"
                required
              >
              <option :value="null" selected>Select One</option>
               <option :value= "course.cid" v-for="course in courses"
                       :key="course.cid">{{course.course_name}}</option>
              </b-form-select>
      </b-form-group>
    <center>
      <b-button type="submit" class="mr-3" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </center>
    </b-form>
	</b-card>
    <pre class="m-0">{{ form }}</pre>
    
    </div>
</template>

<script> 
export default {
    data() {
      return {
          form: {
          cid:null,
          day:'',
          time:''
          
        },
        days:[{text: 'Select One', value: null},'Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'],
        courses:[],
        show:true,
        error:"",
        success:"",
        
        }
    },
        methods: {
        onSubmit(evt) {
        evt.preventDefault()
        const data=JSON.stringify(this.form)
        //axios method call on form submit
        //pass the form data 
        this.formSubmit(data)
        
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.time = ''
        this.form.day = ''
        this.form.cid = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      //axios call for submit form data 
      formSubmit(data) {
      const baseURI = 'http://localhost/ci/index.php/api/batch'
      //axios obj initated on this.$http declare on main .js
      this.$http.post(baseURI,data)
      .then((result) => {
       this.success=result.data.message
       this.form=""
      })
      }
     },
     //Fetch all available courses on page load
        mounted(){
          const baseURI = 'http://localhost/ci/index.php/api/course'
        //axios obj initated on this.$http that declare on main .js
          this.$http.get(baseURI)
          .then((result) => {
          this.courses = result.data
         })
       
      }
}

</script>