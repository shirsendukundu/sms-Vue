<template>
  
      <b-form-group id="input-course" label="Course:" label-for="course">
              <b-form-select
                id="input-course"
                v-model="form.cid"
                required
              >
              <option :value="null" >Select One</option>
               <option :value= "course.cid" v-for="course in courses"
                       :key="course.cid">{{course.course_name}}</option>
              </b-form-select>
     
      </b-form-group>
     
</template>
<script>

export default{
    data(){
      return{
        form:{
          cid:null
        },
        courses:[]
      }
    },
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