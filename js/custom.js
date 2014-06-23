$(document).ready(function(){
	$('#btn-view').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 800);
	})
})