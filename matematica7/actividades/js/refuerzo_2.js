/*document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 1)
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
}*/

$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    if ($(".panel-collapse").hasClass('in')) {
        $(".panel-collapse").removeClass('in');
    } else {
        $(".panel-collapse").addClass('in');
    }


});
var act1 = [];
for (var i = 0; i < 10; i++) {
    act1[i] = Math.floor((Math.random() * 200) + 50);

}
$('#num0act1').html('' + act1[0] + ' mm');
$('#num1act1').html('' + act1[1] + ' mm');
////////////////////////////////////////////
$('#num2act1').html('' + act1[2] + ' cm');
$('#num3act1').html('' + act1[3] + ' cm');
$('#num4act1').html('' + act1[3] + ' cm');
$('#num5act1').html('' + act1[2] + ' cm');
////////////////////////////////////////////
$('#num6act1').html('' + act1[6] + ' mm');
$('#num7act1').html('' + act1[7] + ' mm');
$('#num8act1').html('' + act1[7] + ' mm');
$('#num9act1').html('' + act1[6] + ' mm');

var r1 = (act1[0] * act1[1]) / 2;
var r2 = act1[2] * act1[3];
var r3 = act1[6] * act1[7];

function pregunta1() {
    var respact2 = [r1, r2, r3];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act1num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 3;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
///////////////////pregunta2//////////////////////////////////////////
var act2 = [];
for (var i = 0; i < 10; i++) {
    act2[i] = Math.floor((Math.random() * 200) + 50);

}
$('#num0act2').html('' + act2[0] + ' cm');
$('#num1act2').html('' + act2[0] + ' cm');
$('#num2act2').html('' + act2[1] + ' cm');
$('#num3act2').html('' + act2[2] + ' dm');
$('#num4act2').html('' + act2[3] + ' dm');
$('#num5act2').html('' + act2[4] + ' dm');
var re1 = ((act2[1] + act2[0]) * act2[0]) / 2;
var re2 = ((act2[4] + act2[2]) * act2[3]) / 2;

function pregunta2() {
    var respact2 = [re1, re2, ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act2num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 2;
    $('#nota2').val(parseFloat(total).toFixed(2));

}

///////////////////////pregunta3///////////////////////////////
function pregunta3() {
    var respact2 = ['diámetro', 'tangente', 'radio', 'arco', 'secante', 'cuerda', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 6;
    $('#nota3').val(parseFloat(total).toFixed(2));

}
//////////////pregunta4///////////////////
var act4 = [];
for (var i = 0; i < 10; i++) {
    act4[i] = Math.floor((Math.random() * 200) + 50);
    act4.sort((a, b) => a - b);

}
$('#num0act4').html('' + act4[0] + '° a minutos');
$('#num1act4').html('' + act4[1] + '° a segundos');
$('#num2act4').html('' + act4[2] + '° a minutos');
$('#num3act4').html('' + act4[3] + '° a segundos');
$('#num4act4').html('' + act4[4] + '° a minutos');
$('#num5act4').html('' + act4[5] + '° a segundos');
var res1 = act4[0] * 60;
var res2 = (act4[1] * 60) * 60;
var res3 = act4[2] * 60;
var res4 = (act4[3] * 60) * 60;
var res5 = act4[4] * 60;
var res6 = (act4[5] * 60) * 60;

function pregunta4() {
    var respact2 = [res1, res2, res3, res4, res5, res6];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act4num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 6;
    $('#nota4').val(parseFloat(total).toFixed(2));

}

function NotaFinal() {

    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;


    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
    $('#txtNota').html(total.toFixed(2));

    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}


/*function NotaFinal() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    var nota10 = document.getElementById('nota10').value;
    if (nota2 == "") {
        alert("Debe ingresar la nota de la pregunta 2.")
    } else {
        pregunta1();
        //pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        pregunta8();
        pregunta9();
        pregunta10();

        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var nota8 = document.getElementById('nota8').value;
        var nota9 = document.getElementById('nota9').value;
        var nota10 = document.getElementById('nota10').value;

        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}
*/
