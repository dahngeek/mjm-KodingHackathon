jQuery(document).ready(function($){
	$("body").backstretch([
	      "/img/flat-design.jpg"
	  ]);
	$('#skip').click(function() {
		$('#lgin').fadeOut();
		return false;
	});
});
