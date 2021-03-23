//ANIMACION LOGO PRINCIPAL
$('#logoInicio').fadeOut(2000);
$('#logoInicio').fadeIn(2000);


//ANIMACION BOTON FORMULARIO
$('#send-form').click(function(event) {
    event.preventDefault();
    $('form').fadeOut(2000);
});

$('#send-form').click(function(event) {
    event.preventDefault();
    $('#saludoFade').fadeIn(2000);
});

//ANIMACION BOTON FINALIZAR COMPRA


$('#finalizarCompra').click(function() {
    $('#staticBackdrop').fadeOut(500);
});