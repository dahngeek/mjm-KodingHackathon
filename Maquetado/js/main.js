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
		geolocalizar(valor);
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
	$('.saveandnotify').click(function(){
		var categoria = $(this).parent().parent().find($("input[name='categoria']")).val();
		var pregunta = $(this).parent().parent().find($("input[name='pregunta']")).val();
		var area = $(this).parent().parent().find($("input[name='area']")).val();
		var id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
		PUBNUB.publish({
            channel: 'mjmNotifications',
            message: [categoria,pregunta,area,Date.now(),id]
        });
        $("#cleardata").click(function(){
        	
        });
	});
function pizza(comida) {
	var categ = comida[0];
	var pregunta = comida[1];
	var area = comida[2];
	var hora = comida[3];
	var date = new Date(hora * 1000);
	var numero = floor(10*Math.random());
	if (numero%2) {var autor = 'col8bitt.jpg'} else {var autor = 'dahngeek.png'};
	var id = comida[4];
	var notificacion = '<div class="notification"><div class="author"><p class="researchername"><img src="img/'+autor+'" width="50" class="authorimage" alt=""><span> <b>Researcher Name</b><br>'+date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' </span></p>        </div>        <div class="idpregunta" style="display:none">'+numero+'</div>        <div class="preguntaresearch">            <p>'+pregunta+'</p>            <span>'+catego+','+area+'</span>        </div>        <div class="mjm">MJM</div>        <div class="clearfix"></div></div>';
	$("#contenidoListar").append(notificacion);
	$('#contenidoResearcher').fadeOut();
	$('#contenidoListar').fadeIn();
}

PUBNUB.subscribe({
    channel  : 'mjmNotifications',
    callback : function pizza(comida) {
	var categ = comida[0];
	var pregunta = comida[1];
	var area = comida[2];
	var hora = comida[3];
	var date = new Date(hora);
	var numero = Math.floor(10*Math.random());
	if (numero%2) {var autor = 'col8bitt.jpg'} else {var autor = 'dahngeek.png'};
	var id = comida[4];
	var notificacion = '<div class="notification"><div class="author"><p class="researchername"><img src="img/'+autor+'" width="50" class="authorimage" alt=""><span> <b>Researcher Name</b><br>'+date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' </span></p>        </div>        <div class="idpregunta" style="display:none">'+numero+'</div>        <div class="preguntaresearch">            <p>'+pregunta+'</p>            <span>'+categ+','+area+'</span>        </div>        <div class="mjm">MJM</div>        <div class="clearfix"></div></div>';
	$("#contenidoListar").append(notificacion);
	$('#contenidoResearcher').fadeOut();
	$('#contenidoListar').fadeIn();
}
});

});
