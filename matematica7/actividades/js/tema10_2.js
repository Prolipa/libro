$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    if ($(".panel-collapse").hasClass('in')) {
        $(".panel-collapse").removeClass('in');
    } else {
        $(".panel-collapse").addClass('in');
    }
});

document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 0.5)
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

var act1 = [];
for (var i = 0; i < 8; i++) {
    var num = Math.floor((Math.random() * 50) + 2);
    act1[i] = num;
}
$('#num0act1').html('' + act1[0] + '° ' + act1[1] + '´ = ');
$('#num1act1').html('' + act1[2] + '° ' + act1[3] + '´ = ');
$('#num2act1').html('' + act1[4] + '´ ' + act1[5] + '" = ');
$('#num3act1').html('' + act1[6] + '´ ' + act1[7] + '" = ');



function pregunta1() {
    var r1 = (act1[0] * 60) + act1[1];
    var r2 = (act1[2] * 60) + act1[3];
    var r3 = (act1[4] * 60) + act1[5];
    var r4 = (act1[6] * 60) + act1[7];
    var respact2_1 = [r1, r2, r3, r4];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2_1[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
///////////////////////////pregunta2/////////////////////////
var act2 = [];
for (var i = 0; i < 8; i++) {
    var num = Math.floor((Math.random() * 10) + 2) * 3600;
    act2[i] = num;
}

$('#num0act2').html('' + act2[0] + '" = ');
$('#num1act2').html('' + act2[2] + '´ = ');
$('#num2act2').html('' + act2[4] + '" = ');
$('#num3act2').html('' + act2[6] + '´ = ');

function pregunta2() {
    var r1 = act2[0] / 3600;
    var r2 = act2[2] / 60;
    var r3 = act2[4] / 3600;
    var r4 = act2[6] / 60;
    var respact2_1 = [r1, r2, r3, r4];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2_1[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
///////////////////pregunta3///////////////
var random3 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td> <span class="1 enc1">1a; 2b; 3c; 4d; 5e</span></td>'],
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td> <span class="1 enc2">1b; 2c; 3a; 4e; 5d</span></td>'],
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td> <span class="1 enc3">1d; 2e; 3a; 4c; 5b</span></td>'],

];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}
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

function pregunta3() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;

    if ($('.enc3').hasClass('pintar1') == true) {
        nt1 = 1;
        $('.enc3').addClass('correcto');
    } else if ($('.enc3').hasClass('pintar1') == true) {
        $('.enc3').addClass('incorrecto');
    } else if ($('.enc2').hasClass('pintar1') == true) {
        $('.enc2').addClass('incorrecto');
    } else if ($('.enc1').hasClass('pintar1') == true) {
        $('.enc1').addClass('incorrecto');
    }

    $('.1').off('click');

    // var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    //var total = (subtotal * 1) / 4;
    $('#nota3').val(parseFloat(nt1).toFixed(2));


}

function pregunta5() {

    var respact2_1 = ['90', '135', '180', '5400', '8100', '10800', '45', '90', '45', '135', '2700', '5400', '2700', '8100', ];
    var cont = 0;
    for (var i = 0; i < 14; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2_1[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 14;
    $('#nota5').val(parseFloat(total).toFixed(2));

}

function pregunta6() {

    var respact2_1 = ['grados', 'convertir', 'dividir', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2_1[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 0.5) / 3;
    $('#nota6').val(parseFloat(total).toFixed(2));

}
/////////////pregunta7//////////////////////////
var act7 = [];
var act7_1 = [];
for (var i = 0; i < 10; i++) {
    var num = Math.floor((Math.random() * 10) + 2) * 60;
    var num1 = Math.floor((Math.random() * 20) + 5);
    act7[i] = num;
    act7_1[i] = num1;
}
$('#num0act7').html('' + act7[0] + '° a minutos');
$('#num1act7').html('' + act7[1] + '° a minutos');
$('#num2act7').html('' + act7[2] + '´ a grados');
$('#num3act7').html('' + act7[3] + '° ' + act7_1[3] + '´ a minutos');
$('#num4act7').html('' + act7[4] + '´ a grados');
$('#num5act7').html('' + act7[5] + '´ a grados');
$('#num6act7').html('' + act7[6] + '° ' + act7_1[6] + '´ a minutos');
$('#num7act7').html('' + act7[7] + '° ' + act7_1[7] + '´ a minutos');
$('#num8act7').html('' + act7[8] + '´ a grados');
$('#num9act7').html('' + act7[9] + '´ a grados');

var r0 = act7[0] * 60;
var r1 = act7[1] * 60;
var r2 = act7[2] / 60;
var r3 = (act7[3] * 60) + act7_1[3];
var r4 = act7[4] / 60;
var r5 = act7[5] / 60;
var r6 = (act7[6] * 60) + act7_1[6];
var r7 = (act7[7] * 60) + act7_1[7];
var r8 = act7[8] / 60;
var r9 = act7[9] / 60;


function pregunta7() {

    var respact2_1 = [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9];
    var cont = 0;
    for (var i = 0; i < 10; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2_1[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 10;
    $('#nota7').val(parseFloat(total).toFixed(2));

}
//////////////////////pregunta8//////////////////////////

var pal1 = ['<p class="bg_palabra drag3 c1">360’</p>',
    '<p class="bg_palabra drag3 c2" >180’</p>',
    '<p class="bg_palabra drag3 c3" >60’</p>',
    '<p class="bg_palabra drag3 c4" >120’</p>',
    '<p class="bg_palabra drag3 c5">480’</p>',
    '<p class="bg_palabra drag3 c6" >1200’</p>',
    '<p class="bg_palabra drag3 c7" >300’</p>',
    '<p class="bg_palabra drag3 c8" >10800’</p>',
];
var pal2 = ['<p>5º</p>',
    '<p>1º</p>',
    '<p>180º</p>',
    '<p>20º</p>',
    '<p>2º</p>',
    '<p>6º</p>',
    '<p>8º</p>',
    '<p>3º</p>',
];
var p4aux1 = ['300’', '60’', '10800’', '1200’', '120’', '360’', '480’', '180’', ];
var p4aux2 = [];

pal1.sort(f_randomico);
$(".textos").append(pal1);
var myArray1 = ['0', '1', '2', '3', '4', '5', '6', '7', ];
var i, j, k;
for (i = myArray1.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray1[i - 1];
    myArray1[i - 1] = myArray1[j];
    myArray1[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 8; i++) {
    var c = myArray1[i - 1];
    $(".p4cim1" + i).html(pal2[c]);
    p4aux2.push(p4aux1[c]);
};
$(".drag3").draggable({
    revert: "invalid",
    zIndex: 5,
    containment: ".actividad17",
    scroll: false,
});

$(".drop3").droppable({
    accept: ".drag3",
    drop: function(e, ui) {
        $(ui.draggable).removeClass("drag3");
        $(ui.draggable).removeClass("bg_palabra");
        ui.draggable.attr("style", "");
        $(this).append(ui.draggable);

    }
});

function pregunta8() {
    var p4im1 = $('.p4im1 p').text();
    var p4im2 = $('.p4im2 p').text();
    var p4im3 = $('.p4im3 p').text();
    var p4im4 = $('.p4im4 p').text();
    var p4im5 = $('.p4im5 p').text();
    var p4im6 = $('.p4im6 p').text();
    var p4im7 = $('.p4im7 p').text();
    var p4im8 = $('.p4im8 p').text();

    var p4cont1 = 0;
    if (p4im1 == p4aux2[0]) {
        p4cont1++;
        f_ok($('.p4im1'));
    } else {
        p4cont1;
        f_no($('.p4im1'));
    }
    if (p4im2 == p4aux2[1]) {
        p4cont1++;
        f_ok($('.p4im2'));
    } else {
        p4cont1;
        f_no($('.p4im2'));
    }
    if (p4im3 == p4aux2[2]) {
        p4cont1++;
        f_ok($('.p4im3'));
    } else {
        p4cont1;
        f_no($('.p4im3'));
    }
    if (p4im4 == p4aux2[3]) {
        p4cont1++;
        f_ok($('.p4im4'));
    } else {
        p4cont1;
        f_no($('.p4im4'));
    }
    if (p4im5 == p4aux2[4]) {
        p4cont1++;
        f_ok($('.p4im5'));
    } else {
        p4cont1;
        f_no($('.p4im5'));
    }
    if (p4im6 == p4aux2[5]) {
        p4cont1++;
        f_ok($('.p4im6'));
    } else {
        p4cont1;
        f_no($('.p4im6'));
    }
    if (p4im7 == p4aux2[6]) {
        p4cont1++;
        f_ok($('.p4im7'));
    } else {
        p4cont1;
        f_no($('.p4im7'));
    }
    if (p4im8 == p4aux2[7]) {
        p4cont1++;
        f_ok($('.p4im8'));
    } else {
        p4cont1;
        f_no($('.p4im8'));
    }
    var result4 = (p4cont1 * 1) / 8;
    $('#nota8').val(parseFloat(result4).toFixed(2));
}
////////////////////pregunta9/////////////////////
var random9 = [
    ['<img src="img/i4_p161_actema10_2.jpg" alt="" class="img-responsive"></img> <b style="color: #005ca4;"><li><span style="color: black;"> 120’ = <input class="inputfraccciones" style="width: 70px;"></input> = <input type="" class="inputfraccciones sinEspacios" name="" id="act9num0">°</span></li></b>'],
    ['<img src="img/i5_p161_actema10_2.jpg" alt="" class="img-responsive"></img> <b style="color: #005ca4;"><li><span style="color: black;"> 1860’ = <input class="inputfraccciones" style="width: 70px;"></input> = <input type="" class="inputfraccciones sinEspacios" name="" id="act9num1">°</span></li></b>'],
    ['<img src="img/i6_p161_actema10_2.jpg" alt="" class="img-responsive"></img> <b style="color: #005ca4;"><li><span style="color: black;"> 7080’ = <input class="inputfraccciones" style="width: 70px;"></input> = <input type="" class="inputfraccciones sinEspacios" name="" id="act9num2">°</span></li></b>'],

];
var act09Txt = document.getElementsByClassName('act9class');

random9.sort(f_randomico);
for (i = 0; i < act09Txt.length; i++) {
    $('#' + act09Txt[i].id).html(random9[i]);
}

function pregunta9() {

    var respact2_1 = [2, 31, 118];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act9num' + [i] + '').val().toLowerCase();
        if (respact2_1[i] == res) {
            cont = cont + 1;
            $('#act9num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act9num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota9').val(parseFloat(total).toFixed(2));

}
//////////////////pregunta10////////////
function pregunta10() {

    var respact2_1 = [3600, 180, 7740];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act10num' + [i] + '').val().toLowerCase();
        if (respact2_1[i] == res) {
            cont = cont + 1;
            $('#act10num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act10num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota10').val(parseFloat(total).toFixed(2));

}
///////////////////////pregunta11//////////////////
var act9 = [];
var ract9 = [];
for (var i = 0; i < 10; i++) {
    var num = Math.floor((Math.random() * 50) + 2);
    act9[i] = num;
    $('#num' + [i] + 'act11').html('' + act9[i] + '° =');
    ract9[i] = act9[i] * 60;

}

function pregunta11() {

    var respact2_1 = [ract9[0], ract9[1], ract9[2], ract9[3], ract9[4], ract9[5], ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act11num' + [i] + '').val().toLowerCase();
        if (respact2_1[i] == res) {
            cont = cont + 1;
            $('#act11num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act11num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota11').val(parseFloat(total).toFixed(2));

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
    var nota11 = document.getElementById('nota11').value;
    if (nota4 == "") {
        alert("Debe ingresar la nota de la pregunta 4.")
    } else {

        pregunta1();
        pregunta2();
        pregunta3();
        //pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        pregunta8();
        pregunta9();
        pregunta10();
        pregunta11();


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
        var nota11 = document.getElementById('nota11').value;


        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}
