<template>
<div class="container-fluid">
  <!-- Page Heading -->

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Student's Details</h6>
            </div>
            <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-bordered hover" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                   <tr>
                      <th>Photo</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Gurdian</th>
                      <th>Adress</th>
                      <th>Contact</th>
                      <th>DOB</th> 
                      <th>Gender</th>
                      <th>cast</th>
                      <th>Course</th>

                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Photo</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Gurdian</th>
                      <th>Adress</th>
                      <th>Contact</th>
                      <th>DOB</th>
                      <th>Gender</th>
                      <th>Caste</th>
                      <th>Course</th>
                    </tr>
                    
                  </tfoot>
                  <tbody>
                 
                  </tbody>
          </table>
          </div>
            </div>
          </div>

        </div>
        <!-- /.container-fluid -->
</template>
        
<script>
import $ from 'jquery'
// import jQuery from 'jquery'
// global.jQuery = jQuery
//global.$ = jQuery
//require('datatables.net');
require('../../public/vendor/datatables/dataTables.bootstrap4.min.css');
require( 'datatables.net-bs4' );
require( 'datatables.net-buttons-bs4' );
require( 'datatables.net-buttons/js/buttons.flash.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' );
require( 'datatables.net-buttons/js/buttons.print.js' );
require( 'datatables.net-responsive-bs4' );
require( 'datatables.net-select-bs4' );
 
 export default {
    name:"Allstudents",
    mounted(){
     this.$nextTick(()=>{
      var table= $('#dataTable').DataTable( {
          serverSide: true,
          processing: true,
      
      ajax:{
      url:'http://localhost/ci/index.php/api/student/',
      type:"GET",
      dataSrc:"data",
      
    },
      columns: [
          {data:"photo"},
          {data: 'stu_id'},
          {data:'stu_name'},
          {data:'gurdain'},
          {data:'mobile'},
          {data:'address'},
          {data:'dob'},
          {data:'gender'},
          {data:'caste'},
          {data:'course_id'},
          
      ]

});
     new $.fn.dataTable.Buttons( table, {
        buttons: [
            'copy', 'csv', 'print'
        ]
          });
      $(".card-body").prepend(table.buttons().container());
 
    });
 
  }
  
  }
  

  </script>
  
  <style scope>
  /* custom style for table eport button */
  .dt-buttons {
    margin-bottom: 10px;

  }
  
    .dt-buttons .btn {
     background-color:#4e73df;
     border:1px solid #4e73df;
    }
  

  </style>