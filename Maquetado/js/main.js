jQuery(document).ready(function($){
	$("body").backstretch([
	      "/img/flat-design.jpg"
	  ]);
	$('#skip').click(function() {
		$('#lgin').fadeOut();
		$('#contenidoResearcher').fadeIn();
		return false;
	});
	$('#researcher').click(function() {
		$('#contenidoPrincipal').fadeOut();
		$('#logobig').fadeOut();
		$('#logosmall').fadeIn();
		$('#lgin').fadeIn();
		return false;
	});

	// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

});
