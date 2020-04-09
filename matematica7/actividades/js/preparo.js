$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    if ($(".panel-collapse").hasClass('in')) {
        $(".panel-collapse").removeClass('in');
    } else {
        $(".panel-collapse").addClass('in');
    }


});
document.getElementById('nota2').addEventListener('keypress', () => {
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
}

function separateString(stringToSeparate) {
    var separator = " ";
    var stringSplited = [];
    stringSplited = stringToSeparate.split(separator);
    return stringSplited;
}

$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    if ($(".panel-collapse").hasClass('in')) {
        $(".panel-collapse").removeClass('in');
    } else {
        $(".panel-collapse").addClass('in');
    }


});
var num1ini1 = Math.floor((Math.random() * 200) + 100);
var num1mul1 = Math.floor((Math.random() * 6) + 2);
var num1sum1 = Math.floor((Math.random() * 100) + 2);
var num2 = num1ini1 * num1mul1;
var num3 = num2 + num1sum1;
var num4 = num3 * num1mul1;
var num5 = num4 + num1sum1;
var num6 = num5 * num1mul1;
var num7 = num6 + num1sum1;
var array1 = [num1ini1, num2, num3, num4, num5, num6, num7, ];
$('#num0act1').html('' + array1[0] + ', ');
$('#num1act1').html('' + array1[1] + ', ');
$('#num2act1').html('' + array1[2] + ', ');
$('#num3act1').html('' + array1[3] + ', ');
$('#num4act1').html('' + array1[4] + ', ');
$('#num5act1').html('' + array1[5] + ', ');
//////////////////////////////


function pregunta1() {
    var respact2 = [num1mul1, num1sum1, num6, num7, 2, 54, 103, 49, ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act1num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
var act2_2 = [2, 3, 4, 5, 6, 7, 8, 9];
var myArray1 = ['0', '1', '2', '3', '4', '5', '6', '7', ];
var i, j, k;
for (i = myArray1.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray1[i - 1];
    myArray1[i - 1] = myArray1[j];
    myArray1[j] = k;
}
//aleatorio literal 1
var act2 = [];
for (var i = 1; i < 5; i++) {
    var c = myArray1[i - 1];
    act2.push(act2_2[c]);

};

$('#nume1').html(act2[0]);
$('#denom1').html(act2[1]);
$('#nume2').html(act2[2]);
$('#denom2').html(act2[3]);
var mcm = act2[1] * act2[3];
var no1 = (mcm / act2[1]) * act2[0];
var no2 = (mcm / act2[3]) * act2[2];


function pregunta3() {
    var respact2 = [no1, mcm, no2, mcm];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act3num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota3').val(parseFloat(total).toFixed(2));

}

function pregunta4() {
    var respact2 = ['329', '24', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act4num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 2;
    $('#nota4').val(parseFloat(total).toFixed(2));

}


function pregunta5() {
    var respact2 = [2086, 2235, 894, 2086, 2235, 894, ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act5num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota5').val(parseFloat(total).toFixed(2));

}
////////////////////////pregunta6///////////////////////////

var random6 = [
    ['<table>' +
        '<tr> <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>Veinticuatro horas</td> </tr> <tr>' +
        '<td colspan="2"><input class="inputfraccciones sinEspacios text-uppercase" style="border-radius: 10px 10px 10px 10px;width: 70px;" id="act6num0"></input> horas</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr> <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>704</td> </tr>' +
        '<tr> <td colspan="2"><input class="inputfraccciones sinEspacios text-uppercase" style="border-radius: 10px 10px 10px 10px;width: 70px;" id="act6num1"></input></td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr> <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>Artículo treinta y cinco</td>' +
        '</tr> <tr>' +
        '<td colspan="2">Artículo <input class="inputfraccciones sinEspacios text-uppercase" style="border-radius: 10px 10px 10px 10px;width: 70px;" id="act6num2"></input></td>' +
        '</tr>' +
        '</table>'
    ],
];
var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}

function pregunta6() {
    var respact2 = ['XXIV', 'DCCIV', 'XXXV', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act6num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota6').val(parseFloat(total).toFixed(2));

}
//////////////////////////////pregunta7/////////////////////////////////////////
var act7 = [];
for (var i = 0; i < 3; i++) {
    var num7 = Math.floor((Math.random() * 50) + 10);
    act7[i] = num7;



}
act7.sort((a, b) => a - b);
$('#num0act7').html('' + act7[0] + ' cm');
$('#num1act7').html('' + act7[1] + ' cm');
$('#num2act7').html('' + act7[2] + ' cm');


function pregunta7() {
    var res7 = ((act7[2] + act7[0]) * act7[1]) / 2;
    var respact2 = [res7, '195', '56', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act7num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota7').val(parseFloat(total).toFixed(2));

}
//////////////////pregunta8/////////////
var act8 = [];
for (var i = 0; i < 6; i++) {
    var num8 = (Math.floor((Math.random() * 8) + 2)) * 36;
    act8[i] = num8;
}
$('#num0act8').html('' + act8[0] + '° ' + act8[1] + '´ ' + act8[2] + '"  =');
$('#num1act8').html('' + act8[3] + '° ' + act8[4] + '´ ' + act8[5] + '"  =');
var act8r1 = (act8[1] / 60) + (act8[2] / 3600) + act8[0];
var act8r2_1 = (act8[3] * 60) + act8[4];
var act8r2_2 = (act8r2_1 * 60) + act8[5];


function pregunta8() {

    var respact2 = [act8r1, act8r2_2, ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act8num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act8num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act8num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 2;
    $('#nota8').val(parseFloat(total).toFixed(2));

}

var act9 = [];
for (var i = 0; i < 2; i++) {
    var n9 = (Math.random() * 99).toFixed(2);
    act9[i] = n9;
    $('#nTGD' + i).html('' + act9[i] + '');
}

function pregunta9() {

    var val = [],
        val2 = [],
        grados, minutos, segundos, resp;
    var a = '';
    var respuesta9 = [];


    for (var i = 0; i < 2; i++) {

        val = ($('#nTGD' + i).text()).split('.');

        grados = val[0];
        var min = ['0.', val[1], ];
        var min1 = parseFloat(min.join(''));

        a = (min1 * 60).toString();
        val2 = a.split('.');
        minutos = val2[0];

        var seg = ['0.', val2[1], ];
        var seg1 = parseFloat(seg.join(''));

        segundos = parseFloat(seg1 * 60).toFixed(0);
        respuesta9.push(grados);
        respuesta9.push(minutos);
        respuesta9.push(segundos);

        val = [];
        val2 = [];
        a = '';
        resp = '';
    }


    var respact2 = [respuesta9[0], respuesta9[1], respuesta9[2], respuesta9[3], respuesta9[4], respuesta9[5], ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act9num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act9num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act9num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota9').val(parseFloat(total).toFixed(2));

}

///////////////////pregunta10////////////////////////////
function pregunta10() {
    var respact2 = [10, ];
    var cont = 0;
    for (var i = 0; i < 1; i++) {
        var res = $('#act10num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act10num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act10num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 1;
    $('#nota10').val(parseFloat(total).toFixed(2));

}

function NotaFinal() {


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
        alert("Debe ingresar la nota de la pregunta 2")
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
