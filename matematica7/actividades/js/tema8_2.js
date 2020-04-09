$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    if ($(".panel-collapse").hasClass('in')) {
        $(".panel-collapse").removeClass('in');
    } else {
        $(".panel-collapse").addClass('in');
    }
});
var num1act1 = [];
for (var i = 0; i < 4; i++) {
    var num = Math.floor((Math.random() * 15) + 2);
    num1act1[i] = num;
}
$('#num0').html('' + num1act1[0] + ' cm');
$('#num1').html('' + num1act1[1] + ' cm');
$('#num2').html('h = ' + num1act1[2] + '');
$('#num3').html('' + num1act1[3] + ' cm');

function pregunta1() {
    var arectan = num1act1[0] * num1act1[1];
    var atrapec = ((num1act1[0] + num1act1[3]) / 2) * num1act1[2]
    var atotal = arectan + atrapec;
    var respact2 = [arectan, atrapec, atotal];
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
    var total = (cont * 4) / 3;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

function pregunta2() {

    var respact2 = ['52', '26', '13', '507', '126750', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act2num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 4) / 5;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
var random3 = [
    ['<span class="1 enc1">133 dm2</span>'],
    ['<span class="1 enc2">133 cm2</span>'],
    ['<span class="1 enc3">266 dm2</span>'],
    ['<span class="1 enc4">266 cm2</span>'],
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
            $('.enc4').removeClass('pintar1');
            break;
        case '1 enc2':
            $('.enc2').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');
            $('.enc4').removeClass('pintar1');
            break;
        case '1 enc3':
            $('.enc3').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc2').removeClass('pintar1');
            $('.enc4').removeClass('pintar1');
            break;
        case '1 enc4':
            $('.enc4').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc2').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');
            break;
    }
});

function pregunta3() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;

    if ($('.enc3').hasClass('pintar1') == true) {
        nt1 = 2;
        $('.enc3').addClass('correcto');
    } else if ($('.enc3').hasClass('pintar1') == true) {
        $('.enc3').addClass('incorrecto');
    } else if ($('.enc2').hasClass('pintar1') == true) {
        $('.enc2').addClass('incorrecto');
    } else if ($('.enc1').hasClass('pintar1') == true) {
        $('.enc1').addClass('incorrecto');
    }else if ($('.enc4').hasClass('pintar1') == true) {
        $('.enc4').addClass('incorrecto');
    }

    $('.1').off('click');

    // var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    //var total = (subtotal * 1) / 4;
    $('#nota3').val(parseFloat(nt1).toFixed(2));


}

function NotaFinal() {

    /*var nota10 = document.getElementById('nota10').value;
    if ((nota8 == "") || (nota9 == "") || (nota10 == "")) {
        alert("Debe ingresar la nota de la pregunta 8, 9 o 10.")
    } else {*/
    if ($('.1').hasClass('pintar1') == false) {
        alert("Debe seleccionar la respuesta en la pregunta 3")
    } else {
        pregunta1();
        pregunta2();
        pregunta3();

        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;

        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}
