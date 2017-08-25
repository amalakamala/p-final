$(document).ready(function() {

	$('.carousel.carousel-slider').carousel({fullWidth: true});

	$('.carousel').carousel();
		setInterval(function() {
		$('.carousel').carousel('next');
	}, 3000);

	$('.button-collapse').sideNav({
    	menuWidth: 230,
    	edge: 'left', 
    	closeOnClick: true,
    	draggable: true,
    }); 
    //scroll spy
    $('.scrollspy').scrollSpy();    
    //smoove transition
    $('.mov').smoove({opacity:'0', moveY: '30px',});

    $(function(){
    	$('a[href*="#"]').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	            if ($target.length) {
	                var targetOffset = $target.offset().top;
	                $('html,body').animate({scrollTop: targetOffset}, 1000);
	                return false;
	            }
       		}
   		});
	});
});