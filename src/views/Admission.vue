<template>
<div class="container-fluid">
	<b-card class="mt-3 primary" header="Student Registraion">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     <b-row>
       
       <b-col md="10" order="2">
      <b-form-group id="input-group-1" label="Student Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.stu_name"
          required
          placeholder="Enter  Student Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Gurdain Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.gurdain"
          required
          placeholder="Enter Gurdain name"
        ></b-form-input>
      </b-form-group>

      </b-col>
      <b-col md="2">
        <input type="file" @change="selectPhoto" 
        style="display:none"
        ref="inputFile">

        <b-img v-bind="photoProps" v-model="form.photo" order="1"  
              thumbnail fluid id="output" src="https://picsum.photos/250/250/?image=54"
              alt="Profile photo" @click="$refs.inputFile.click()" >
        </b-img>
     </b-col>
     </b-row>
      <b-form-group id="input-group-3" label="Address:" label-for="input-3">
          <b-form-textarea
            id="input-3"
            size="sm"
            v-model="form.address"
            placeholder="Enter Address"
            rows="3"
            max-rows="4"
         ></b-form-textarea>
       </b-form-group>
   
        <b-form-row>
          <b-col md="4">
      <b-form-group id="input-group-5" label="Gender:" label-for="input-5">
              <b-form-select
                id="input-5"
                v-model="form.gender"
                :options="genders"
                required
              ></b-form-select>
      </b-form-group>
          </b-col>
          <b-col md="4">
      <b-form-group id="input-group-9" label="Caste:" label-for="input-9">
              <b-form-select
                id="input-9"
                v-model="form.caste"
                :options="caste"
                required
              ></b-form-select>
      </b-form-group>
          </b-col>
          <b-col md="4">
           <b-form-group id="input-group-8" label="Date Of Birth:" label-for="input-8">
              <b-form-datepicker
              id="input-8" 
              v-model="form.dob" 
              required
              placeholder="Date Of Birth">
              </b-form-datepicker>
           </b-form-group>
          </b-col>
        </b-form-row>
      
     <b-form-group id="input-group-4" label="Contact no:" label-for="input-4">
                <b-form-input
                  id="input-4"
                  type="number"
                  v-model="form.mobile"
                  required
                  placeholder="Enter Contact no"
                ></b-form-input>
              </b-form-group>

       <b-form-group id="input-group-5" label="Aadhar no:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.aadhar"
          placeholder="Enter Aadhar no"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-6" label="Qualification" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.edu_qua"
          placeholder="Educational Qualification"
        ></b-form-input>
      </b-form-group>
      <b-form-row>
          <b-col md="6">
      <b-form-group id="input-group-10" label="Course:" label-for="input-10">
              <b-form-select
                id="input-10"
                v-model="form.course_id"
                @change="fetchBatch"
                required
              >
              <option :value="null" selected>Select One</option>
               <option :value= "course.cid" v-for="course in courses"
                       :key="course.cid">{{course.course_name}}</option>
              </b-form-select>
      </b-form-group>
          </b-col>
          <b-col md="6">
      <b-form-group id="input-group-11" label="Batch:" label-for="input-11">
              <b-form-select
                id="input-9"
                v-model="form.batch"
                multiple
                :select-size="2"
                required
              >
              <option :value="null" selected>Select Any Course First</option>
              <option v-for="batch in batches"
                      :value="batch.bid" :key="batch.bid">{{batch.day}}-{{batch.time}}
                      </option>
              </b-form-select>
              
      </b-form-group>
          </b-col>
     </b-form-row>  
      
      <center>
      <b-button type="submit" class="mr-3" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      </center>
    </b-form>
    <b-card class="mt-3 " header="Form Data Result">
      <pre class="m-0">{{ form}}</pre>
    </b-card>
	</b-card>
  </div>
</template>


<script> 
export default {
    data() {
      return {
        photoProps: { width:170, height:170,class:"mb-2 mt-4" },
        form: {
          photo:null,
          stu_name: '',
          gurdain:'',
          address:'',
          mobile:'',
          aadhar:'',
          edu_qua:'',
          dob:'',
          gender: null,
          caste:null,
          course_id:null,
          batch:[]
        },
        genders: [{ text: 'Select One', value: null }, 'Male', 'Female', 'Others'],
        caste: [{ text: 'Select One', value: null }, 'General', 'SC/ST','OBC', 'Others'],
        courses:[],
        batches:[],
        show: true,
        image_file:null
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
        this.form.email = ''
        this.form.stu_name = ''
        this.form.food = null
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      //axios call for submit form data 
      formSubmit(data) {
      const baseURI = 'http://localhost/ci/index.php/api/student'
      //axios obj initated on this.$http declare on main .js
      this.$http.post(baseURI,data)
      .then((result) => {
          console.log(result)
      })
      //call the image upload method to upload the image on server
       this.onupload(this.image_file)
      },
      fetchBatch(){
        const baseURI = 'http://localhost/ci/index.php/api/batch/batch/'+this.form.course_id
        // console.log(baseURI)
        //axios obj initated on this.$http that declare on main .js
          this.$http.get(baseURI)
          .then((result) => {
          this.batches = result.data
          
         })
      },
      //select the photo and show it 
      selectPhoto(event){
        this.form.photo = event.target.files[0].name
        let reader=new FileReader()
        reader.onload = function(){
        let dataURL = reader.result
        let output = document.getElementById('output')
        output.src = dataURL
         }
        reader.readAsDataURL(event.target.files[0])
        //save the image url 
        this.image_file= event.target.files[0]
      },
      //post the image file on server and store it on there
      onupload(data){
        const fd=new FormData()
        fd.append('image',data,data.name)
        this.$http.post('http://localhost/ci/index.php/api/upload/',fd)
          .then((result) => {
          console.log(result)
         })
         .catch((err) => {
           console.log(err)
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
