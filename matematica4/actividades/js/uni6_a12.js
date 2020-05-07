var titulos = "aplico";
f_titulos();
numero_pagina(249);

var tpre1 = 0;

// #region Pregunta1
var p5vec1 = [
    ['img/i1_p249_act1.jpg', 0],
    ['img/i2_p249_act1.jpg', 1],
    ['img/i3_p249_act1.jpg', 2],
    ['img/i4_p249_act1.jpg', 3],
    ['img/i5_p249_act1.jpg', 4],
    ['img/i6_p249_act1.jpg', 5],
    ['img/i7_p249_act1.jpg', 6],
    ['img/i8_p249_act1.jpg', 7],
    ['img/i9_p249_act1.jpg', 8],
    ['img/i10_p249_act1.jpg', 9]

];
var p5vec2 = [
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint1">30 cl</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint2">1 l</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint11">1 dl</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint12">1 l</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint21">1 ml</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint22">4 dl</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint31">350 ml</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint32">350 l</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="5 pint41">1 dl</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="5 pint42">1 ml</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="6 pint51">10 l</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="6 pint52">20 cl</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="7 pint61">8 dl</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="7 pint62">6 ml</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="8 pint71">1 cl</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="8 pint72">1l</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="9 pint81">50 ml</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="9 pint82">1 l</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="10 pint91">1 cl</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="10 pint92">1 dl</div>'
    ],
];

p5vec1.sort(f_randomico);
for (var i = 0; i < 10; i++) {
    $('#p5im' + (i + 1)).html('<img  src="' + p5vec1[i][0] + '">')
    p5vec2[i].sort(f_randomico);
}
for (var i = 0; i < 10; i++) {
    $('#p5cim' + (i + 1)).html(p5vec2[p5vec1[i][1]]);
}

$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 pint1':
            $('.pint1').addClass('pinta');
            $('.pint2').removeClass('pinta');
            break;
        case '1 pint2':
            $('.pint2').addClass('pinta');
            $('.pint1').removeClass('pinta');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 pint11':
            $('.pint11').addClass('pinta');
            $('.pint12').removeClass('pinta');
            break;
        case '2 pint12':
            $('.pint12').addClass('pinta');
            $('.pint11').removeClass('pinta');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 pint21':
            $('.pint21').addClass('pinta');
            $('.pint22').removeClass('pinta');
            break;
        case '3 pint22':
            $('.pint22').addClass('pinta');
            $('.pint21').removeClass('pinta');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 pint31':
            $('.pint31').addClass('pinta');
            $('.pint32').removeClass('pinta');
            break;
        case '4 pint32':
            $('.pint32').addClass('pinta');
            $('.pint31').removeClass('pinta');
            break;
    }
});
$('.5').click(function() {
    switch ($(this).attr('class')) {
        case '5 pint41':
            $('.pint41').addClass('pinta');
            $('.pint42').removeClass('pinta');
            break;
        case '5 pint42':
            $('.pint42').addClass('pinta');
            $('.pint41').removeClass('pinta');
            break;

    }
});
$('.6').click(function() {
    switch ($(this).attr('class')) {
        case '6 pint51':
            $('.pint51').addClass('pinta');
            $('.pint52').removeClass('pinta');
            break;
        case '6 pint52':
            $('.pint52').addClass('pinta');
            $('.pint51').removeClass('pinta');
            break;
    }
});
$('.7').click(function() {
    switch ($(this).attr('class')) {
        case '7 pint61':
            $('.pint61').addClass('pinta');
            $('.pint62').removeClass('pinta');
            break;
        case '7 pint62':
            $('.pint62').addClass('pinta');
            $('.pint61').removeClass('pinta');
            break;
    }
});
$('.8').click(function() {
    switch ($(this).attr('class')) {
        case '8 pint71':
            $('.pint71').addClass('pinta');
            $('.pint72').removeClass('pinta');
            break;
        case '8 pint72':
            $('.pint72').addClass('pinta');
            $('.pint71').removeClass('pinta');
            break;
    }
});
$('.9').click(function() {
    switch ($(this).attr('class')) {
        case '9 pint81':
            $('.pint81').addClass('pinta');
            $('.pint82').removeClass('pinta');
            break;
        case '9 pint82':
            $('.pint82').addClass('pinta');
            $('.pint81').removeClass('pinta');
            break;
    }
});
$('.10').click(function() {
    switch ($(this).attr('class')) {
        case '10 pint91':
            $('.pint91').addClass('pinta');
            $('.pint92').removeClass('pinta');
            break;
        case '10 pint92':
            $('.pint92').addClass('pinta');
            $('.pint91').removeClass('pinta');
            break;
    }
});


function pregunta1() {
    var p5cont1 = 0;
    var p5vec3 = ['30 cl', '1 l', '4 dl', '350 ml', '1 ml', '10 l', '6 ml', '1 cl', '1 l', '1 cl'];
    for (var i = 0; i < 10; i++) {
        var p5cim1 = $('#p5cim' + (i + 1) + ' .pinta').html();
        if (!p5cim1) {
            p5cont1;
            f_no($('.' + (p5vec1[i][1] + 1)));
        } else {
            if (p5cim1 == p5vec3[p5vec1[i][1]]) {
                p5cont1++;
                f_ok($('#p5cim' + (i + 1) + ' .pinta'));
                $('#p5cim' + (i + 1) + ' .pinta').removeClass('pinta');
            } else {
                p5cont1;
                f_no($('#p5cim' + (i + 1) + ' .pinta'));
                $('#p5cim' + (i + 1) + ' .pinta').removeClass('pinta');
            }
        }
    }
    tpre1 = ((p5cont1 * 10) / 10);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    var Nf =
        parseFloat(tpre1);

    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}


// #endregion