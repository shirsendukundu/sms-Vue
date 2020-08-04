//Call the dataTables jQuery plugin
$(document).ready(function() {
  var table = $('#dataTable').DataTable();
  new $.fn.dataTable.Buttons( table, {
    buttons: [
        'copy', 'csv', 'print'
    ]
} );
 //set button display postion
 
//$("#dataTable_wrapper").prepend(table.buttons().container()) ;
$(".card-body").prepend(table.buttons().container());
 


});
