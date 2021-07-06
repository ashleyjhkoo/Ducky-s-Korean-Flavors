// $(function(){
//    $("#navbarToggler").blur(function(event){
//      var screenWidth = window.innerWidth;
//      if(screenWidth < 768) {
//      	$("#navbarSupportedContent").collapse('hide');
//      }
//    });
// });


// jQuery(document.body).on('click', function(ev){
//     if(jQuery(ev.target).closest('.navbar-collapse').length) return; // Not return false

//     jQuery('.navbar-collapse').collapse('hide');
// });

$(document.body).on('click', function(ev){
    if($(ev.target).closest('.navbar-collapse').length) {
       // alert($(ev.target).closest('.navbar-collapse').length);	
       return; // Not return false
    }

    $('.navbar-collapse').collapse('hide');
    // alert($(ev.target).closest('.navbar-collapse').length);	
});