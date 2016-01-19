$( document ).ready(function() {


  $('.carousel').slick({
   	 slidesToShow: 1,
  	 slidesToScroll: 1,
  	 autoplay: true,
  	 autoplaySpeed: 5000
  });


$('.burger').click(function(e) {
	$('.menu').slideToggle('slow'); 
	//console.log('you')
});



});