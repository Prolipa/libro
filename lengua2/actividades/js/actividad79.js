var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
for (var i = 0; i < 10; i++) {
    $('.p1enc' + (i + 1)).click(function() {
        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')


        } else {
            $(this).addClass('encierra')

        }
    })
}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 p4im1':
            $('.p4im1').addClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            break;
        case '1 p4im2':
            $('.p4im2').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            break;
        case '1 p4im3':
            $('.p4im3').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            break;
        case '1 p4im4':
            $('.p4im4').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p41im1':
            $('.p41im1').addClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im2':
            $('.p41im2').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im3':
            $('.p41im3').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im4':
            $('.p41im4').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im5':
            $('.p41im5').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im6':
            $('.p41im6').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im7':
            $('.p41im7').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im8':
            $('.p41im8').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 p42im1':
            $('.p42im1').addClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im2':
            $('.p42im2').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im3':
            $('.p42im3').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im4':
            $('.p42im4').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im5':
            $('.p42im5').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im6':
            $('.p42im6').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im7':
            $('.p42im7').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im8':
            $('.p42im8').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 p43im1':
            $('.p43im1').addClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            $('.p43im5').removeClass('pintar');
            $('.p43im6').removeClass('pintar');
            break;
        case '4 p43im2':
            $('.p43im2').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            $('.p43im5').removeClass('pintar');
            $('.p43im6').removeClass('pintar');
            break;
        case '4 p43im3':
            $('.p43im3').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            $('.p43im5').removeClass('pintar');
            $('.p43im6').removeClass('pintar');
            break;
        case '4 p43im4':
            $('.p43im4').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im5').removeClass('pintar');
            $('.p43im6').removeClass('pintar');
            break;
        case '4 p43im5':
            $('.p43im5').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            $('.p43im6').removeClass('pintar');
            break;
        case '4 p43im6':
            $('.p43im6').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im5').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            break;
    }
});
$('.5').click(function() {
    switch ($(this).attr('class')) {
        case '5 p44im1':
            $('.p44im1').addClass('pintar');
            $('.p44im2').removeClass('pintar');
            $('.p44im3').removeClass('pintar');
            $('.p44im4').removeClass('pintar');
            break;
        case '5 p44im2':
            $('.p44im2').addClass('pintar');
            $('.p44im1').removeClass('pintar');
            $('.p44im3').removeClass('pintar');
            $('.p44im4').removeClass('pintar');
            break;
        case '5 p44im3':
            $('.p44im3').addClass('pintar');
            $('.p44im1').removeClass('pintar');
            $('.p44im2').removeClass('pintar');
            $('.p44im4').removeClass('pintar');
            break;
        case '5 p44im4':
            $('.p44im4').addClass('pintar');
            $('.p44im1').removeClass('pintar');
            $('.p44im2').removeClass('pintar');
            $('.p44im3').removeClass('pintar');
            break;
    }
});

$('.6').click(function() {
    switch ($(this).attr('class')) {
        case '6 p45im1':
            $('.p45im1').addClass('pintar');
            $('.p45im2').removeClass('pintar');
            $('.p45im3').removeClass('pintar');
            $('.p45im4').removeClass('pintar');
            break;
        case '6 p45im2':
            $('.p45im2').addClass('pintar');
            $('.p45im1').removeClass('pintar');
            $('.p45im3').removeClass('pintar');
            $('.p45im4').removeClass('pintar');
            break;
        case '6 p45im3':
            $('.p45im3').addClass('pintar');
            $('.p45im1').removeClass('pintar');
            $('.p45im2').removeClass('pintar');
            $('.p45im4').removeClass('pintar');
            break;
        case '6 p45im4':
            $('.p45im4').addClass('pintar');
            $('.p45im1').removeClass('pintar');
            $('.p45im2').removeClass('pintar');
            $('.p45im3').removeClass('pintar');
            break;
    }
});


$('.7').click(function() {
    switch ($(this).attr('class')) {
        case '7 p5enc1':
            $('.p5enc1').addClass('encierra');
            $('.p5enc2').removeClass('encierra');
            $('.p5enc3').removeClass('encierra');
            $('.p5enc4').removeClass('encierra');
            break;
        case '7 p5enc2':
            $('.p5enc2').addClass('encierra');
            $('.p5enc1').removeClass('encierra');
            $('.p5enc3').removeClass('encierra');
            $('.p5enc4').removeClass('encierra');
            break;
        case '7 p5enc3':
            $('.p5enc3').addClass('encierra');
            $('.p5enc1').removeClass('encierra');
            $('.p5enc2').removeClass('encierra');
            $('.p5enc4').removeClass('encierra');
            break;
        case '7 p5enc4':
            $('.p5enc4').addClass('encierra');
            $('.p5enc1').removeClass('encierra');
            $('.p5enc2').removeClass('encierra');
            $('.p5enc3').removeClass('encierra');
            break;
    }
});
$('.8').click(function() {
    switch ($(this).attr('class')) {
        case '8 p5enc5':
            $('.p5enc5').addClass('encierra');
            $('.p5enc6').removeClass('encierra');
            $('.p5enc7').removeClass('encierra');
            $('.p5enc8').removeClass('encierra');
            break;
        case '8 p5enc6':
            $('.p5enc6').addClass('encierra');
            $('.p5enc5').removeClass('encierra');
            $('.p5enc7').removeClass('encierra');
            $('.p5enc8').removeClass('encierra');
            break;
        case '8 p5enc7':
            $('.p5enc7').addClass('encierra');
            $('.p5enc5').removeClass('encierra');
            $('.p5enc6').removeClass('encierra');
            $('.p5enc8').removeClass('encierra');
            break;
        case '8 p5enc8':
            $('.p5enc8').addClass('encierra');
            $('.p5enc5').removeClass('encierra');
            $('.p5enc6').removeClass('encierra');
            $('.p5enc7').removeClass('encierra');
            break;
    }
});

function f_iniciar() {
    var p3vec4 = [
        '<div style="display: inline-block; padding: 10px;" class="p1enc1">' +
        '<img src="img/i2_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="1">' +
        '</div>',
        '<div style="display: inline-block; padding: 10px;" class="p1enc2">' +
        '<img src="img/i3_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="2">' +
        '</div>',
        '<div style="display: inline-block; padding: 10px;" class="p1enc3">' +
        '<img src="img/i4_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="3">' +
        '</div>',
        '<div style="display: inline-block; padding: 10px;" class="p1enc4">' +
        '<img src="img/i5_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="4">' +
        '</div>',
        '<div style="display: inline-block; padding: 10px;" class="p1enc5">' +
        '<img src="img/i6_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="5">' +
        '</div>',
        '<div style="display: inline-block; padding: 10px;" class="p1enc6">' +
        '<img src="img/i7_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="6">' +
        '</div>',
        '<div style="display: inline-block; padding: 10px;" class="p1enc7">' +
        '<img src="img/i8_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="7">' +
        '</div>',
        '<div style="display: inline-block; padding: 10px;" class="p1enc8">' +
        '<img src="img/i9_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="8">' +
        '</div>',
        '<div style="display: inline-block; padding: 10px;" class="p1enc9">' +
        '<img src="img/i10_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="9">' +
        '</div>',
        '<div style="display: inline-block; padding: 10px;" class="p1enc10">' +
        '<img src="img/i11_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="10">' +
        '</div>'
    ];
    p3vec4.sort(f_randomico);
    $('.actividad793').html(p3vec4);
    var p4vec1 = [
        '<div class="col-sm-6" align="center">' +
        '<div style="display: inline-block;">' +
        '<img src="img/i12_p160_act79.jpg" class="img-responsive">' +
        '</div>' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim1">' +
        '<td>' +
        '<div class="1 p4im1" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="1">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="1 p4im2" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="2">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="1 p4im3" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="3">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="1 p4im4" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="4">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-6" align="center">' +
        '<div style="display: inline-block;">' +
        '<img src="img/i13_p160_act79.jpg" class="img-responsive">' +
        '</div>' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim2">' +
        '<td>' +
        '<div class="2 p41im1" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="11">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im2" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="12">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im3" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="13">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im4" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="14">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im5" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="15">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im6" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="16">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im7" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="17">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im8" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="18">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-6" align="center">' +
        '<div style="display: inline-block;">' +
        '<img src="img/i14_p160_act79.jpg" class="img-responsive">' +
        '</div>' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim3">' +
        '<td>' +
        '<div class="3 p42im1" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="21">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im2" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="22">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im3" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="23">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im4" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="24">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im5" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="25">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im6" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="26">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im7" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="27">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im8" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="28">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-6" align="center">' +
        '<div style="display: inline-block;">' +
        '<img src="img/i15_p160_act79.jpg" class="img-responsive">' +
        '</div>' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim4">' +
        '<td>' +
        '<div class="4 p43im1" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="31">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="4 p43im2" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="32">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="4 p43im3" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="33">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="4 p43im4" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="34">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="4 p43im5" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="35">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="4 p43im6" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="36">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-6" align="center">' +
        '<div style="display: inline-block;">' +
        '<img src="img/i16_p160_act79.jpg" class="img-responsive">' +
        '</div>' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim5">' +
        '<td>' +
        '<div class="5 p44im1" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="41">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="5 p44im2" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="42">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="5 p44im3" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="43">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="5 p44im4" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="44">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-6" align="center">' +
        '<div style="display: inline-block;">' +
        '<img src="img/i17_p160_act79.jpg" class="img-responsive">' +
        '</div>' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim6">' +
        '<td>' +
        '<div class="6 p45im1" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="51">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="6 p45im2" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="52">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="6 p45im3" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="53">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="6 p45im4" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="54">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>'
    ];
    p4vec1.sort(f_randomico);
    $('.actividad794').html(p4vec1);

    var p5vec1 = [
        '<div style="display: inline-block; padding: 15px;" class="7 p5enc1">' +
        '<img src="img/i18_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="1">' +
        '</div>',
        '<div style="display: inline-block; padding: 15px;" class="7 p5enc2">' +
        '<img src="img/i19_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="2">' +
        '</div>',
        '<div style="display: inline-block; padding: 15px;" class="7 p5enc3">' +
        '<img src="img/i20_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="3">' +
        '</div>',
        '<div style="display: inline-block; padding: 15px;" class="7 p5enc4">' +
        '<img src="img/i21_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="4">' +
        '</div>'
    ];
    p5vec1.sort(f_randomico);
    $('#p5dcon1').html(p5vec1);

    var p5vec2 = [
        '<div style="display: inline-block; padding: 15px;" class="8 p5enc5">' +
        '<img src="img/i22_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="5">' +
        '</div>',
        '<div style="display: inline-block; padding: 15px;" class="8 p5enc6">' +
        '<img src="img/i23_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="6">' +
        '</div>',
        '<div style="display: inline-block; padding: 15px;" class="8 p5enc7">' +
        '<img src="img/i24_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="7">' +
        '</div>',
        '<div style="display: inline-block; padding: 15px;" class="8 p5enc8">' +
        '<img src="img/i25_p160_act79.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="8">' +
        '</div>'
    ];
    p5vec2.sort(f_randomico);
    $('#p5dcon2').html(p5vec2);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p3vec1 = [];
        var p3vec2 = [];
        for (var i = 0; i < 10; i++) {
            if ($('.p1enc' + (i + 1)).hasClass('encierra')) {
                p3vec1.push($('.p1enc' + (i + 1) + ' img').attr('alt'));
                p3vec2.push((i + 1));
            }
        }
        var p3vec3 = ['1', '3', '4', '5', '7', '9', '10'];
        var p3cor = 0;
        var p3inc = 0;
        if (p3vec1.length == 0) {
            for (var i = 0; i < 10; i++) {
                f_no($('.p1enc' + (i + 1)));
            }
        } else {
            for (var i = 0; i < p3vec1.length; i++) {
                var p3cont1 = 0;
                for (var j = 0; j < p3vec3.length; j++) {
                    if (p3vec1[i] == p3vec3[j]) {
                        p3cont1++;
                    }
                }
                if (p3cont1 == '1') {
                    p3cor++;
                    f_ok($('.p1enc' + p3vec2[i]));
                } else {
                    p3inc++;
                    f_no($('.p1enc' + p3vec2[i]));
                }
            }
        }

        if (p3cor > p3inc) {
            var result = ((p3cor - p3inc) * 4) / 7;
        } else {
            var result = 0;
        }
        cor = cor + result;
        inc = inc + (4 - result);

        var p4cim1 = $('#p4cim1 .pintar').attr('id');
        var p4cim2 = $('#p4cim2 .pintar').attr('id');
        var p4cim3 = $('#p4cim3 .pintar').attr('id');
        var p4cim4 = $('#p4cim4 .pintar').attr('id');
        var p4cim5 = $('#p4cim5 .pintar').attr('id');
        var p4cim6 = $('#p4cim6 .pintar').attr('id');
        var p4cont1 = 0;
        if (!p4cim1) {
            p4cont1;
            f_no($('.1'));
        } else {
            if (p4cim1 == '1') {
                p4cont1++;
                $('#p4cim1 .pintar').addClass('valid');
            } else {
                p4cont1;
                $('#p4cim1 .pintar').addClass('no-valid');
            }
        }
        if (!p4cim2) {
            p4cont1;
            f_no($('.2'));
        } else {
            if (p4cim2 == '11') {
                p4cont1++;
                $('#p4cim2 .pintar').addClass('valid');
            } else {
                p4cont1;
                $('#p4cim2 .pintar').addClass('no-valid');
            }
        }
        if (!p4cim3) {
            p4cont1;
            f_no($('.3'));
        } else {
            if (p4cim3 == '21') {
                p4cont1++;
                $('#p4cim3 .pintar').addClass('valid');
            } else {
                p4cont1;
                $('#p4cim3 .pintar').addClass('no-valid');
            }
        }
        if (!p4cim4) {
            p4cont1;
            f_no($('.4'));
        } else {
            if (p4cim4 == '33') {
                p4cont1++;
                $('#p4cim4 .pintar').addClass('valid');
            } else {
                p4cont1;
                $('#p4cim4 .pintar').addClass('no-valid');
            }
        }
        if (!p4cim5) {
            p4cont1;
            f_no($('.5'));
        } else {
            if (p4cim5 == '43') {
                p4cont1++;
                $('#p4cim5 .pintar').addClass('valid');
            } else {
                p4cont1;
                $('#p4cim5 .pintar').addClass('no-valid');
            }
        }
        if (!p4cim6) {
            p4cont1;
            f_no($('.6'));
        } else {
            if (p4cim6 == '53') {
                p4cont1++;
                $('#p4cim6 .pintar').addClass('valid');
            } else {
                p4cont1;
                $('#p4cim6 .pintar').addClass('no-valid');
            }
        }
        var result1 = (p4cont1 * 3) / 6;
        cor = cor + result1;
        inc = inc + (3 - result1);


        var p5dcon1 = $('#p5dcon1 .encierra img').attr('alt');
        var p5dcon2 = $('#p5dcon2 .encierra img').attr('alt');
        var p5cont1 = 0;
        if (!p5dcon1) {
            p5cont1;
            f_no($('.7'));
        } else {
            if (p5dcon1 == '2') {
                p5cont1++;
                f_ok($('#p5dcon1 .encierra'));
            } else {
                p5cont1;
                f_no($('#p5dcon1 .encierra'));
            }
        }
        if (!p5dcon2) {
            p5cont1;
            f_no($('.8'));
        } else {
            if (p5dcon2 == '5') {
                p5cont1++;
                f_ok($('#p5dcon2 .encierra'));
            } else {
                p5cont1;
                f_no($('#p5dcon2 .encierra'));
            }
        }
        var result2 = (p5cont1 * 3) / 2;
        cor = cor + result2;
        inc = inc + (3 - result2);
        Calculo_nota();
    }
}