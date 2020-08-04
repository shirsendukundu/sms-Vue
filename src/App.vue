<template>
      <div id="wrapper">
      
        <Sidebar />
        <Header/>
            <!-- <router-view/> -->
        
      </div>

</template>

<script>
//import $ from 'jquery'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

    import Header from "@/components/Header.vue"
    import Sidebar from "@/components/Sidebar.vue"
      export default {
          name:"wrapper" ,
          components: {
           Sidebar,Header
            }
          }
        
</script>
