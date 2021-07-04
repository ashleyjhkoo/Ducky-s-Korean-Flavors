// $(function(){
//    $("#navbarToggler").blur(function(event){
//      var screenWidth = window.innerWidth;
//      if(screenWidth < 768) {
//      	$("#navbarSupportedContent").collapse('hide');
//      }
//    });
// });

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});