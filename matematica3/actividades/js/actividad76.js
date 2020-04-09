var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 17,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 10, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 10)
});
$('.enc1').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc2').removeClass('encierra');
        $('.enc3').removeClass('encierra');

    }

})
$('.enc2').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc1').removeClass('encierra');
        $('.enc3').removeClass('encierra');

    }

})
$('.enc3').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc2').removeClass('encierra');
        $('.enc1').removeClass('encierra');

    }

})
$('.enc4').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc5').removeClass('encierra');
        $('.enc6').removeClass('encierra');

    }

})
$('.enc5').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc4').removeClass('encierra');
        $('.enc6').removeClass('encierra');

    }

})
$('.enc6').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc5').removeClass('encierra');
        $('.enc4').removeClass('encierra');

    }

})
$('.enc7').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc8').removeClass('encierra');
        $('.enc9').removeClass('encierra');

    }

})
$('.enc8').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc7').removeClass('encierra');
        $('.enc9').removeClass('encierra');

    }

})
$('.enc9').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc8').removeClass('encierra');
        $('.enc7').removeClass('encierra');

    }

})
$('.enc10').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc11').removeClass('encierra');
        $('.enc12').removeClass('encierra');

    }

})
$('.enc11').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc10').removeClass('encierra');
        $('.enc12').removeClass('encierra');

    }

})
$('.enc12').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc11').removeClass('encierra');
        $('.enc10').removeClass('encierra');

    }

})

function f_iniciar() {
    var a75vec1 = ['<span style="color: #449FD6;">275</span> cromos son de <input id="p2dcon1" type="text" style="width: 120px; text-align: center; border:2px solid #449FD6; border-radius: 10px;">',
        '<span style="color: #60AE29;">286</span> cromos son de <input id="p2dcon2" type="text" style="width: 120px; text-align: center; border:2px solid #60AE29; border-radius: 10px;">',
        '<span style="color: #DC005E;">206</span> cromos son de <input id="p2dcon3" type="text" style="width: 120px; text-align: center; border:2px solid #DC005E; border-radius: 10px;">',
        '<span style="color: #F7B400;">196</span> cromos son de <input id="p2dcon4" type="text" style="width: 120px; text-align: center; border:2px solid #F7B400; border-radius: 10px;">',
        '<span style="color: #5A1281;">186</span> cromos son de <input id="p2dcon5" type="text" style="width: 120px; text-align: center; border:2px solid #5A1281; border-radius: 10px;">'
    ];
    var myArray1 = ['0', '1', '2', '3', '4'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c = myArray1[i - 1];
        $("#a75im" + i).html(a75vec1[c]);

    };

}