var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
for (var i = 0; i < 27; i++) {
    $('.enc' + (i + 1)).click(function() {
        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')
        } else {
            $(this).addClass('encierra')
        }
    })
}

function f_iniciar() {
    var p5vec3 = [
        '<div style="display: inline-block; padding: 5px;">cisne</div>',
        '<div style="display: inline-block; padding: 5px;">cine</div>',
        '<div style="display: inline-block; padding: 5px;">cemento</div>',
        '<div style="display: inline-block; padding: 5px;">maceta</div>',
        '<div style="display: inline-block; padding: 5px;">aceite</div>',
        '<div style="display: inline-block; padding: 5px;">cédula</div>',
        '<div style="display: inline-block; padding: 5px;">cielo</div>',
        '<div style="display: inline-block; padding: 5px;">ciudad</div>',
        '<div style="display: inline-block; padding: 5px;">palacio</div>',
        '<div style="display: inline-block; padding: 5px;">pincel</div>',
    ];
    p5vec3.sort(f_randomico);
    $('#p5im1').html(p5vec3);

}

function pregunta1() {
    var p3vec1 = ['Leticia', 'doce', 'Cecilia', 'cinco', 'nueces', 'ciruelas', 'cien', 'dulces', 'recibió', 'centro', 'pecera', 'pececitos'];
    var p3cont1 = 0;
    var p3cont3 = 0;
    var p3cont4 = 0;
    if ($('.encierra').length == 0) {
        f_no($('.1'));
        p3cont1 = 0;
    } else {
        for (var i = 0; i < 27; i++) {
            if ($('.enc' + (i + 1)).hasClass('encierra')) {
                var p3res1 = $('.enc' + (i + 1)).text();
                var p3cont2 = 0;
                for (var j = 0; j < p3vec1.length; j++) {
                    if (p3res1 == p3vec1[j]) {
                        p3cont2++;
                    }
                }
                if (p3cont2 == '1') {
                    p3cont3++;
                    f_ok($('.enc' + (i + 1)));
                } else if (p3cont2 == '0') {
                    p3cont4++;
                    f_no($('.enc' + (i + 1)));
                }
            }
        }
    }
    if (p3cont3 < p3cont4) {
        p3cont1 = 0;
    } else {
        p3cont1 = p3cont3 - p3cont4;
    }
    var result3 = (p3cont1 * 4) / 14;
    $('#nota1_3').val(parseFloat(result3).toFixed(2));
}

function pregunta2() {
    cont++;
    result4 = (sopa * (calificacions / itemsTs)).toFixed(2); //suma de calificacion cerrada
    $('#nota1_4').val(parseFloat(result4).toFixed(2));
}

function pregunta3() {
    var p5vec1 = ['cemento', 'aceite', 'maceta', 'cédula', 'pincel'];
    var p5cont1 = 0;
    for (var i = 0; i < p5vec1.length; i++) {
        var p5res1 = $('#p5dcon' + (i + 1)).val();
        var p5cont2 = 0;
        for (var j = 0; j < p5vec1.length; j++) {
            if (p5res1 == p5vec1[j]) {
                p5cont2++;
                p5vec1[j] = 5555;
            }
        }
        if (p5cont2 == '1') {
            p5cont1++;
            f_ok($('#p5dcon' + (i + 1)));
        } else if (p5cont2 == '0') {
            p5cont1;
            f_no($('#p5dcon' + (i + 1)));
        }
    }
    var p5vec2 = ['cisne', 'cielo', 'palacio', 'cine', 'ciudad'];
    for (var i = 0; i < p5vec2.length; i++) {
        var p5res2 = $('#p51dcon' + (i + 1)).val();
        var p5cont3 = 0;
        for (var j = 0; j < p5vec2.length; j++) {
            if (p5res2 == p5vec2[j]) {
                p5cont3++;
                p5vec2[j] = 5555;
            }
        }
        if (p5cont3 == '1') {
            p5cont1++;
            f_ok($('#p51dcon' + (i + 1)));
        } else if (p5cont3 == '0') {
            p5cont1;
            f_no($('#p51dcon' + (i + 1)));
        }
    }
    var result5 = (p5cont1 * 3) / 10;
    $('#nota1_5').val(parseFloat(result5).toFixed(2));
    $('#nota1_5').css('display', '');
}