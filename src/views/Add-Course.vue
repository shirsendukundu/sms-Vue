<template>
    <div class="container-fluid">
	<b-card class="mt-3 primary" header="Create New Course">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     
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
          id="input-1"
          v-model="form.duration"
          required
          placeholder="Enter Course Duration"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Course Fees:" label-for="input-3">
        <b-form-input
          id="input-1"
          v-model="form.course_fees"
          required
          placeholder="Enter Amount"
        ></b-form-input>
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
          course_name: '',
          duration:'',
          course_fees:'',
          
        },
        show:true
        }
    },
    methods:{
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
        this.form.course_name = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      //axios call for submit form data 
      formSubmit(data) {
      const baseURI = 'http://localhost/ci/index.php/api/course'
      //axios obj initated on this.$http declare on main .js
      this.$http.post(baseURI,data)
      .then((result) => {
       console.log(result.data.message)
           })
        }
    },

    

}
</script>