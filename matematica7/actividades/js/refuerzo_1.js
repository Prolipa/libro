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


var num1_1 = Math.floor((Math.random() * 50) + 1);
var num1_2 = Math.floor((Math.random() * 50) + 1);
var num1_3 = Math.floor((Math.random() * 5) + 2);
var aux = 0,
    aux2 = 0,
    aux3 = 0,
    aux4 = 0,
    aux5 = 0,
    aux6 = 0;
aux = num1_1 + num1_2;
aux2 = aux * num1_3;
aux3 = aux2 + num1_2;
aux4 = aux3 * num1_3;
aux5 = aux4 + num1_2;
aux6 = aux5 * num1_3;

var vct1 = [num1_1, aux, aux2, aux3, aux4, aux5, aux6];
$('#num0act1').val(vct1[0]);
$('#num1act1').val(vct1[1]);
$('#num2act1').val(vct1[2]);
$('#num4act1').val(vct1[4]);
$('#num6act1').val(vct1[6]);



function pregunta1() {
    var respact2 = [num1_2, num1_3, num1_2, num1_3, num1_2, num1_3, vct1[3], vct1[5], '5', '30', '5', '30', '5', '30', '1780', '320', ];
    var cont = 0;
    for (var i = 0; i < 16; i++) {
        var res = $('#act1num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 16;
    $('#nota1').val(parseFloat(total).toFixed(2));

}


function pregunta3() {
    var respact2 = ['1', '4', '3', '4', '5', '4', '7', '4', '9', '4', '1', '4', '', '', '3', '4', '5', '4', '', '', '7', '4', '9', '4', '5', '3', '7', '3', '4', '3', '10', '3', '8', '3', '4', '3', '5', '3', '7', '3', '8', '3', '10', '3', '', '', '', '', '4', '3', '5', '3', '7', '3', '8', '3', '10', '3', ];
    var cont = 0;
    for (var i = 0; i < 58; i++) {
        var res = $('#act3num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 58;
    $('#nota3').val(parseFloat(total).toFixed(2));

}

///////////////////pregunta 4//////////////////////
var no1 = [];

for (var i = 0; i < 6; i++) {
    var n1 = Math.floor((Math.random() * 5) + 1);
    no1[i] = n1;
}
$('#no1').html(no1[0]);
$('#no2').html(no1[1]);
$('#no3').html(no1[2]);
var d1 = Math.floor((Math.random() * 8) + 5);

$('#d1').html(d1);
$('#d2').html(d1);
$('#d3').html(d1);
var res1act4 = (no1[0] / d1) + (no1[1] / d1) + (no1[2] / d1);
/////////////fraccion2/////////////////////////////////////////
var nom1 = [];
var d2 = [];
for (var i = 0; i < 6; i++) {
    var n1 = Math.floor((Math.random() * 5) + 1);
    nom1[i] = n1;

    var de2 = Math.floor((Math.random() * 8) + 5);
    d2[i] = de2;

}


$('#d4').html(d2[0]);
$('#d5').html(d2[1]);
$('#d6').html(d2[2]);
$('#no4').html(nom1[0]);
$('#no5').html(nom1[1]);
$('#no6').html(nom1[2]);
var res2act4 = (nom1[0] / d2[0]) + (nom1[1] / d2[1]) + (nom1[2] / d2[2]);


///////////////////////fracion4/////////////////

function pregunta4() {
    var cont = 0;
    var act4num0 = document.getElementById('act4num0').value;
    var act4num1 = document.getElementById('act4num1').value;
    var cal1act4 = act4num0 / act4num1;
    if (cal1act4 == res1act4) {
        cont = 1;
        $('#act4num0').css("background", "#00e600");
        $('#act4num1').css("background", "#00e600");
    } else {
        $('#act4num0').css("background", "#ff6666");
        $('#act4num1').css("background", "#ff6666");
    }
    var act4num2 = document.getElementById('act4num2').value;
    var act4num3 = document.getElementById('act4num3').value;

    if ((act4num2 == 2) || (act4num3 == 7)) {
        cont = cont + 1;
        $('#act4num2').css("background", "#00e600");
        $('#act4num3').css("background", "#00e600");
    } else {
        $('#act4num2').css("background", "#ff6666");
        $('#act4num3').css("background", "#ff6666");
    }
    var act4num4 = document.getElementById('act4num4').value;
    var act4num5 = document.getElementById('act4num5').value;
    var cal3act4 = act4num4 / act4num5;
    if (cal3act4 == res2act4) {
        cont = cont + 1;
        $('#act4num4').css("background", "#00e600");
        $('#act4num5').css("background", "#00e600");
    } else {
        $('#act4num4').css("background", "#ff6666");
        $('#act4num5').css("background", "#ff6666");
    }

    var act4num6 = document.getElementById('act4num6').value;
    var act4num7 = document.getElementById('act4num7').value;

    if ((act4num6 == 43) || (act4num7 == 45)) {
        cont = cont + 1;
        $('#act4num6').css("background", "#00e600");
        $('#act4num7').css("background", "#00e600");
    } else {
        $('#act4num6').css("background", "#ff6666");
        $('#act4num7').css("background", "#ff6666");
    }
    /* var respact2 = ['2', '1', '6', '2', '7', '3', '5', '12', '43', '45', ];
     var cont = 0;
     for (var i = 0; i < 10; i++) {
         var res = $('#act4num' + [i] + '').val().toUpperCase();
         if (respact2[i] == res) {
             cont = cont + 1;
             $('#act4num' + [i] + '').css("background", "#00e600");
         } else {
             $('#act4num' + [i] + '').css("background", "#ff6666");
         }

     }*/
    var total = (cont * 1) / 4;
    $('#nota4').val(parseFloat(total).toFixed(2));

}

function pregunta5() {
    var respact2 = ['1', '1', '4', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act5num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota5').val(parseFloat(total).toFixed(2));

}
/////////////////pregunta6///////////////////
var random6 = [
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div> x <div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> x <div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> = </div>' +
        '</td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act6num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act6num1"></input></span>' +
        '</div> </div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> = </div> </td> <td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act6num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act6num3"></input></span>' +
        '</div> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td> <div class="eq-c">2' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> x' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> x <div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div> = </div> </td> <td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act6num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act6num5"></input></span>' +
        '</div> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> = </div> </td> <td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act6num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act6num7"></input></span>' +
        '</div> </div> </td>'
    ],
];
var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}

function pregunta6() {
    var respact2 = ['2', '21', '8', '15', '8', '15', '7', '15', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act6num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;
    $('#nota6').val(parseFloat(total).toFixed(2));

}
/////////////////pregunta7///////////////////////////////////////////////////
var nomi1 = [];
var deno2 = [];
for (var i = 0; i < 6; i++) {
    var n1 = Math.floor((Math.random() * 5) + 1);
    nomi1[i] = n1;

    var de2 = Math.floor((Math.random() * 8) + 5);
    deno2[i] = de2;

}
$('#act7nomi0').html(nomi1[0]);
$('#act7deno0').html(deno2[0]);

$('#act7nomi1').html(nomi1[1]);
$('#act7deno1').html(deno2[1]);
var act7resp1 = (nomi1[0] / deno2[0]) * (nomi1[1] / deno2[1]);
////////////////////////////////
$('#act7nomi2').html(nomi1[2]);
$('#act7deno2').html(deno2[2]);

$('#act7nomi3').html(nomi1[3]);
$('#act7deno3').html(deno2[3]);
var act7resp2 = (nomi1[2] / deno2[2]) * (nomi1[3] / deno2[3]);

function pregunta7() {
    var cont = 0;
    var act7num0 = document.getElementById('act7num0').value;
    var act7num1 = document.getElementById('act7num1').value;
    var cal1act7 = act7num0 / act7num1;
    if (parseFloat(cal1act7).toFixed(4) == parseFloat(act7resp1).toFixed(4)) {
        cont = 1;
        $('#act7num0').css("background", "#00e600");
        $('#act7num1').css("background", "#00e600");
    } else {
        $('#act7num0').css("background", "#ff6666");
        $('#act7num1').css("background", "#ff6666");
    }
    var act7num2 = document.getElementById('act7num2').value;
    var act7num3 = document.getElementById('act7num3').value;
    var cal2act7 = act7num2 / act7num3;

    if (parseFloat(cal2act7).toFixed(4) == parseFloat(act7resp2).toFixed(4)) {
        cont = cont + 1;
        $('#act7num2').css("background", "#00e600");
        $('#act7num3').css("background", "#00e600");
    } else {
        $('#act7num2').css("background", "#ff6666");
        $('#act7num3').css("background", "#ff6666");
    }


    var total = (cont * 1) / 2;
    $('#nota7').val(parseFloat(total).toFixed(2));

}
//////////////pregunta8////////////////////
function pregunta8() {
    var respact2 = ['600', '14', ];
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
/////////////////////pregunta9///////////////////////////////////////
var random9 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td>610 =</td> <td><input class="inputfraccciones sinEspacios text-uppercase" id="act9num0"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>14 =</td> <td><input class="inputfraccciones sinEspacios text-uppercase" id="act9num1"></input></td>'],
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td>108 =</td> <td><input class="inputfraccciones sinEspacios text-uppercase" id="act9num2"></input></td>'],
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td>119 =</td> <td><input class="inputfraccciones sinEspacios text-uppercase" id="act9num3"></input></td>'],
];
var act09Txt = document.getElementsByClassName('act9class');

random9.sort(f_randomico);
for (i = 0; i < act09Txt.length; i++) {
    $('#' + act09Txt[i].id).html(random9[i]);
}

function pregunta9() {
    var respact2 = ['DCX', 'XIV', 'CVIII', 'CXIX', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act9num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act9num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act9num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota9').val(parseFloat(total).toFixed(2));

}
//////////////////////////////////pregunta10/////////////////////////////////
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('pintar1');
            $('.enc2').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');
            break;
        case '1 enc2':
            $('.enc2').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');
            break;
        case '1 enc3':
            $('.enc3').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc2').removeClass('pintar1');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enci1':
            $('.enci1').addClass('pintar1');
            $('.enci2').removeClass('pintar1');
            $('.enci3').removeClass('pintar1');
            break;
        case '2 enci2':
            $('.enci2').addClass('pintar1');
            $('.enci1').removeClass('pintar1');
            $('.enci3').removeClass('pintar1');
            break;
        case '2 enci3':
            $('.enci3').addClass('pintar1');
            $('.enci1').removeClass('pintar1');
            $('.enci2').removeClass('pintar1');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 encie1':
            $('.encie1').addClass('pintar1');
            $('.encie2').removeClass('pintar1');
            $('.encie3').removeClass('pintar1');
            break;
        case '3 encie2':
            $('.encie2').addClass('pintar1');
            $('.encie1').removeClass('pintar1');
            $('.encie3').removeClass('pintar1');
            break;
        case '3 encie3':
            $('.encie3').addClass('pintar1');
            $('.encie1').removeClass('pintar1');
            $('.encie2').removeClass('pintar1');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 encier1':
            $('.encier1').addClass('pintar1');
            $('.encier2').removeClass('pintar1');
            $('.encier3').removeClass('pintar1');
            break;
        case '4 encier2':
            $('.encier2').addClass('pintar1');
            $('.encier1').removeClass('pintar1');
            $('.encier3').removeClass('pintar1');
            break;
        case '4 encier3':
            $('.encier3').addClass('pintar1');
            $('.encier1').removeClass('pintar1');
            $('.encier2').removeClass('pintar1');
    }
});

function pregunta10() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    if ($('.enc1').hasClass('pintar1') == true) {
        nt1 = 1;

        $('.enc1').addClass('correcto');


    } else if ($('.enc3').hasClass('pintar1') == true) {
        $('.enc3').addClass('incorrecto');


    } else if ($('.enc2').hasClass('pintar1') == true) {
        $('.enc2').addClass('incorrecto');
    }
    ////////////////////////////////////////////
    if ($('.enci2').hasClass('pintar1') == true) {
        nt2 = 1;

        $('.enci2').addClass('correcto');


    } else if ($('.enci1').hasClass('pintar1') == true) {
        $('.enci1').addClass('incorrecto');


    } else if ($('.enci3').hasClass('pintar1') == true) {
        $('.enci3').addClass('incorrecto');
    }
    ////////////////////////////////////////////
    if ($('.encie3').hasClass('pintar1') == true) {
        nt3 = 1;

        $('.encie3').addClass('correcto');


    } else if ($('.encie2').hasClass('pintar1') == true) {
        $('.encie2').addClass('incorrecto');


    } else if ($('.encie1').hasClass('pintar1') == true) {
        $('.encie1').addClass('incorrecto');
    }
    ////////////////////////////////////////////
    if ($('.encier1').hasClass('pintar1') == true) {
        nt4 = 1;

        $('.encier1').addClass('correcto');


    } else if ($('.encier2').hasClass('pintar1') == true) {
        $('.encier2').addClass('incorrecto');


    } else if ($('.encier3').hasClass('pintar1') == true) {
        $('.encier3').addClass('incorrecto');
    }
    $('.1').off('click');
    $('.2').off('click');
    $('.3').off('click');
    $('.4').off('click');
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    var total = (subtotal * 1) / 4;
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
