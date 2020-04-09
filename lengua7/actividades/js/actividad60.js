
$('.enc').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }

     if ($("#R1").hasClass("subrayar")) {
       resp1 = 1;

    }
    if ($("#R2").hasClass("subrayar")) {

         resp2 = 1;

    }
    if ($("#R3").hasClass("subrayar")) {

        resp3 = 1;
    }
     if ($("#R4").hasClass("subrayar")) {

        resp4 = 1;
    }
     if ($("#R5").hasClass("subrayar")) {

        resp5 = 1;
    }



});
document.getElementById('nt1').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nt1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nt1'), 2)
});
document.getElementById('nt3').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nt3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nt3'), 2)
});
document.getElementById('nt4').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nt4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nt4'), 2)
});
document.getElementById('nt5').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nt5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nt5'), 2)
});
function validNumero(num1, num2, allowFloat = 0) {
    if (allowFloat == 1) {
        var regex = new RegExp("^.|[" + num1 + "-" + num2 + "]+$");
    } else {
        var regex = new RegExp("^[" + num1 + "-" + num2 + "]+$");
    }

    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

function validMaxIngreso(elemento, num) {
    if (elemento.value > num) {
        alert('La calificación no puede ser mayor a ' + num)
        elemento.value = "";
        return 1;
    } else {

        return 0;

    }
}
var resp1=0,resp2=0,resp3=0,resp4=0,resp5=0;

function cal() {
     if($("#R1").hasClass("subrayar")){
        $("#R1").css({"background-color": "#00FF00"});
    }
     if($("#R2").hasClass("subrayar")){
        $("#R2").css({"background-color": "#00FF00"});
    }
    if($("#R4").hasClass("subrayar")){
        $("#R4").css({"background-color": "#00FF00"});
    }

     if ($("#R3").hasClass("subrayar")){
        $("#R3").css({"background-color": "#ff0000"});
    }
    if ($("#R5").hasClass("subrayar")){
        $("#R5").css({"background-color": "#ff0000"});
    }


     var subtotal1= parseInt(resp1)+parseInt(resp2)+parseInt(resp4);
    var subtotal2= parseInt(resp3)+parseInt(resp5);
    var total = subtotal1 - subtotal2;
    var totales = (total*1)/3;




    var txt1 = document.getElementById('txt1').value;
    var txt2 = document.getElementById('txt2').value;
    var txt3 = document.getElementById('txt3').value;
    var txtr1 = 0,txtr2 = 0,txtr3 = 0;
    if ((txt1 == "estética o poética")||(txt1 == "estética")||(txt1 == "poética")) {
        txtr1 = 10;
         $("#txt1").css({"background-color": "#00FF00"});

    }else{
         $("#txt1").css({"background-color": "#ff0000"});

    }
     if (txt2 == "informativa") {
        txtr2 = 10;
        $("#txt2").css({"background-color": "#00FF00"});

    }else{
         $("#txt2").css({"background-color": "#ff0000"});

    }
    if ((txt3 == "apelativa o persuasiva")||(txt3 == "apelativa")||(txt3 == "persuasiva")) {
        txtr3 = 10;
        $("#txt3").css({"background-color": "#00FF00"});

    }else{
         $("#txt3").css({"background-color": "#ff0000"});

    }
    var totaltxt = (parseInt(txtr1)+parseInt(txtr2)+parseInt(txtr3))/30;
    var calculo = parseFloat(totaltxt) +parseFloat(totales);
    $("#nt2").val(calculo);

}


function calificaTST() {

    cal();
    var listNts = document.getElementsByClassName('nota-abierta');
    nt = 0;
    band = true;
    for (var i = 0; i < listNts.length; i++) {
        if ($(listNts[i]).val() == '') {
            band = false;
            $(listNts[i]).addClass('no-valid')
            $('.form-control').attr('disabled', true);
        } else {
            nt += parseFloat($(listNts[i]).val());
            $(listNts[i]).addClass('valid')
        }
    }
    if (band == false) {
        alert('Hay preguntas sin calificar.\n\Verifica que todas las preguntas estan calificadas.')
    } else {
        $('.respuesta').attr('desabled', true);
        $('.btnCalificar').addClass('disabled');
        $('.btnGuardar').removeClass('disabled');
        var notafinal= nt.toFixed(2)
        $('#txtNota').html(notafinal);
    }

}

function guardar() {
    $('.collapse').collapse('show')
    save_open_activity_to_local('txtAlumno')
};
