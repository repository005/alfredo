$(document).ready(function() {

	//Showing-closing for blocks "services_item"
	$('.services_headline').on('click', function(e) {
		var parentService = $(e.target).closest('.services_item');
		var allServices = $('.services_item');

		if ($(this).hasClass('services_headline__opened')) {
			$(this).removeClass('services_headline__opened');
			$(parentService).find('.services_text').slideUp();
			$(parentService).find('.services_toggler').text('+');
		} else {
			closeAllServices();
			$(this).addClass('services_headline__opened');
			$(parentService).find('.services_text').slideDown();
			$(parentService).find('.services_toggler').text('-');
		}

		function closeAllServices() {
			$(allServices).find('.services_text').slideUp();
			$(allServices).find('.services_toggler').text('+');
			$(allServices).find('.services_headline').removeClass('services_headline__opened');
		}
	});

	//services mobile navigation
	$('.mobile-header_menu').on('click', function(e) {
		$('.mobile-header_arrow').toggleClass('mobile-header_arrow__up');
		$('.mobile-header_nav').toggleClass('mobile-header_nav__opened');


	});

});