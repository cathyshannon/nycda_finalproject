// $("#toTop").click(function () {
//    $("html, body").animate({scrollTop: 0}, 1000);
// });


 // $(document).ready(function() {

 // $('#toTop').click = function (){
 //  $(document).scrollTo('#home');
 // } 

 // });

 $('#toTop').click(function() {
    $('html,body').animate({
        scrollTop : $('#top').offset().top
    	},500);
});

