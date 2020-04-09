$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    if ($(".panel-collapse").hasClass('in')) {
        $(".panel-collapse").removeClass('in');
    } else {
        $(".panel-collapse").addClass('in');
    }
});

function pregunta1() {

    var respact2 = ['900', ];
    var cont = 0;
    for (var i = 0; i < 1; i++) {
        var res = $('#act1num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 1;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

function pregunta2() {

    var respact2 = ['100', '100', '100', '10000', '16', '625', '6250', '6250', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act2num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 8;
    $('#nota2').val(parseFloat(total).toFixed(2));

}

var numR = [];
for (var i = 0; i < 4; i++) {
    var n = Math.floor((Math.random() * 20) + 2);
    numR[i] = n;
}
$('#num0Ract6').html('' + numR[0] + ' cm');
$('#num1Ract6').html('' + numR[1] + ' cm');
$('#num2Ract6').html('' + numR[2] + ' cm');
$('#num3Ract6').html('' + numR[3] + ' cm');

function pregunta3() {
    var r1 = numR[0] * numR[1];
    var r2 = numR[2] * numR[3];
    var respact2 = [numR[1], numR[0], r1, numR[3], numR[2], r2, ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act3num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 6;
    $('#nota3').val(parseFloat(total).toFixed(2));

}

function pregunta4() {

    var respact2 = ['304', ];
    var cont = 0;
    for (var i = 0; i < 1; i++) {
        var res = $('#act4num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 1;
    $('#nota4').val(parseFloat(total).toFixed(2));

}

function pregunta4() {

    var respact2 = ['304', ];
    var cont = 0;
    for (var i = 0; i < 1; i++) {
        var res = $('#act4num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 1;
    $('#nota4').val(parseFloat(total).toFixed(2));

}

function pregunta5() {

    var respact2 = ['2500', '17500', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act5num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 2;
    $('#nota5').val(parseFloat(total).toFixed(2));

}
/////////////////////pregunta6
var act6 = [];
for (var i = 0; i < 4; i++) {
    var num6 = Math.floor((Math.random() * 20) + 2);
    act6[i] = num6;

}
$('#num0act6').html('' + act6[0] + ' cm');
$('#num1act6').html('' + act6[1] + ' cm');
$('#num2act6').html('' + act6[2] + ' cm');
$('#num3act6').html('' + act6[3] + ' cm');

function pregunta6() {
    var r1 = act6[0] * act6[1];
    var r2 = act6[2] * act6[3];

    var respact2 = ['paralelogramo', act6[0], act6[1], r1, 'paralelogramo', act6[3], act6[2], r2, ];
    var cont = 0;
    for (var i = 0; i < 7; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 7;
    $('#nota6').val(parseFloat(total).toFixed(2));

}

function NotaFinal() {

    /*var nota10 = document.getElementById('nota10').value;
    if ((nota8 == "") || (nota9 == "") || (nota10 == "")) {
        alert("Debe ingresar la nota de la pregunta 8, 9 o 10.")
    } else {*/
    /*if ($('.1').hasClass('pintar1') == false) {
        alert("Debe seleccionar la respuesta en la pregunta 3")
    } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;

    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    ///}
}
