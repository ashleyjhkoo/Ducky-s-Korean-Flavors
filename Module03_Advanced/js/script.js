// $(function(){
//    $("#navbarToggler").blur(function(event){
//      var screenWidth = window.innerWidth;
//      if(screenWidth < 768) {
//      	$("#navbarSupportedContent").collapse('hide');
//      }
//    });
// });

// $(document).ready(function () {
//     $(document).click(function (event) {
//         var clickover = $(event.target);
//         var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
//         if (_opened === true && !clickover.hasClass("navbar-toggle")) {
//             $("button.navbar-toggle").click();
//         }
//     });
// });


$(document).ready(function(){
	$('body').click(function(e){
		var clicked_class=e.target.getAttribute("class");
		if(clicked_class==="navbar-toggler"||clicked_class==="navbar-toggler-icon"){
            //$(".navbar-collapse").toggle();
        }
        else if(clicked_class==="nav-link"){
        	$(".navbar-toggler").click();
        }
        else{
        	if($(".navbar-collapse").hasClass("show")==true){
        		$(".navbar-toggler").click();
        	}
        }
        /*
        if(clicked_class==="navbar-collapse"||$(e.target).parents(".navbar-collapse").length>0)
        {
            $(".navbar-collapse").toggle();
        }
        else
        {
            if($(".navbar-collapse").hasClass("show")==true)
            {
                alert("click");
                $(".navbar-collapse").toggle();
            }
        }
        */
    });
});
