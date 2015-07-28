function parallax() {
	var scrollPosition = $(window).scrollTop();
	// bg image moves at 30% of scrolling speed
	$('#parallax').css('top',(0 - (scrollPosition * 0.3))+'px' ); 
	// el formulario se desvanece y eñ el último valor 0.01 gestiona su duración.
	// $('#hero').css('opacity',((100 - scrollPosition/2) *0.09)); 
}
$(document).ready(function() {

	/*	Parallax Background
	================================================== */

	$(window).on('scroll', function(e) {
		parallax();
	});
	
	/*	Local Scroll
	================================================== */
	
	jQuery('.navbar').localScroll({
			offset: -80,
			duration: 500
		});
		
	/*	Active Menu
	================================================== */
		
	jQuery(function() {
		var sections = jQuery('section');
		var navigation_links = jQuery('nav a');
		sections.waypoint({
		handler: function(direction) {
			var active_section;
			active_section = jQuery(this);
			if (direction === "up") active_section = active_section.prev();
			var active_link = jQuery('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.parent().removeClass("active");
			active_link.parent().addClass("active");
			active_section.addClass("active-section");
		},
		offset: '35%'
		});
	});
	
	/*	Animation with Waypoints
	================================================== */
	
	jQuery('.animate').waypoint(function() {
	     var animation = jQuery(this).attr("data-animate");
	     jQuery(this).addClass(animation);
	     jQuery(this).addClass('animated');
	}, { offset: '80%' });
	
	/*	Pretty Photo
	================================================== */
	
	jQuery('#gallery a').attr('rel', 'prettyPhoto');
	jQuery("a[rel^='prettyPhoto']").prettyPhoto();
	
	/*	Bootstrap Carousel
	================================================== */
	
	jQuery('.carousel').carousel()
	

});