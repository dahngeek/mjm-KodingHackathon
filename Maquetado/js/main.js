jQuery(document).ready(function($){
	$("body").backstretch([
	      "/img/flat-design.jpg"
	  ]);
	$('#skip').click(function() {
		$('#lgin').fadeOut();
		$('#contenidoResearcher').fadeIn();
		return false;
	});
	$('.mjm').click(function() {
		$(this).html('<i class="fa fa-check-square"></i>');
		$(this).css('background','red');
		var valor = $(this).parent().find($(".idpregunta")).text();
		geolocalizar();
	});
	$(".clicktobegin").click(function() {
		$('#contenidoPrincipal').fadeOut();
		$('#logobig').fadeOut();
		$('#logosmall').fadeIn();
		$('#contenidoListar').fadeIn();
	});
	$('#researcher').click(function() {
		$('#contenidoPrincipal').fadeOut();
		$('#logobig').fadeOut();
		$('#logosmall').fadeIn();
		$('#lgin').fadeIn();
		return false;
	});

function pizza(comida) {

}

PUBNUB.subscribe({
    channel  : 'mjmNotifications',
    callback : function(m){console.log(m)}
});

});
