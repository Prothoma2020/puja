//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#profile');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > (offset.top-50)) {
          $(".navbar-fixed-top").css('background-color', '#000');
		  $(".navbar-fixed-top").css('opacity','0.9');
		  $('.navbar-header *').css('color','#fff');
		  $('.dropdown-menu').css('background-color','#000');

       } else {
          $('.navbar-fixed-top').css('background-color', 'transparent');
		  $('.navbar-header *').css('color','#000');
		  $('.dropdown-menu').css('background-color','#fff');
		  $('.navbar-brand').css('color', '#fff');
		  $('.navbar-brand *').css('color','#fff');
       }
   });
    }
});
$(document).ready(function(){
	$(".menu-items a").on('click', function(event){
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 800, function(){
					window.location.hash = hash;
				});
		}
	})
	$("#btn-contact").on('click', function(event){
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 800, function(){
					window.location.hash = hash;
				});
		}
	})
});