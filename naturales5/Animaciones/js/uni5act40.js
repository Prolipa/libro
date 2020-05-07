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
    sopa = 0,
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
    validNumero(0, 2, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 1)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 1)
});
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 1)
});
document.getElementById('nota1_8').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota1_8').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_8'), 0.5)
});
document.getElementById('nota1_9').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota1_9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_9'), 0.5)
});
document.getElementById('nota1_11').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota1_11').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_11'), 0.5)
});
document.getElementById('nota1_12').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota1_12').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_12'), 0.5)
});

function f_iniciar() {
    var pal1 = ['<div class="drag1" style="display:inline-block; mix-blend-mode:multiply;"><img src="img/i1_p191_u5a39.jpg" alt="1" class="img-responsive">amarillo</div>',
        '<div class="drag1" style="display:inline-block; mix-blend-mode:multiply;"><img src="img/i2_p191_u5a39.jpg" alt="2" class="img-responsive">azul</div>',
        '<div class="drag1" style="display:inline-block; mix-blend-mode:multiply;"><img src="img/i3_p191_u5a39.jpg" alt="3" class="img-responsive">rojo</div>'
    ];

    pal1.sort(f_randomico);

    $(".textos").append(pal1);
    var pal3 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p10im1" align="center"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p10cim11" ><h4>killu</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p10im2" align="center"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p10cim12"><h4>ankas</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p10im3" align="center"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p10cim13"><h4>puka</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal3.sort(f_randomico);
    $("#datos").html(pal3);
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p10act1",
        scroll: false,
    });

    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            ui.draggable.attr("style", "mix-blend-mode:multiply");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", preg1);

    function preg1() {
        cor = 0;
        var nota1_1 = $('#nota1_1').val();
        if (!nota1_1) {
            alert('Ingrese la calificación en la pregunta 1.')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (2 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            preg2();
        }
    }

    function preg2() {
        var nota1_2 = $('#nota1_2').val();
        if (!nota1_2) {
            alert('Ingrese la calificación en la pregunta 2.')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (1 - parseFloat(nota1_2));
            $('#nota1_2').val(parseFloat(nota1_2).toFixed(2));
            $('#nota1_2').attr('disabled', 'true');
            preg3();
        }
    }

    function preg3() {
        var nota1_3 = $('#nota1_3').val();
        if (!nota1_3) {
            alert('Ingrese la calificación en la pregunta 3.')
        } else {
            cor = cor + parseFloat(nota1_3);
            inc = inc + (1 - parseFloat(nota1_3));
            $('#nota1_3').val(parseFloat(nota1_3).toFixed(2));
            $('#nota1_3').attr('disabled', 'true');
            preg4();
        }
    }

    function preg4() {
        var nota1_4 = $('#nota1_4').val();
        if (!nota1_4) {
            alert('Ingrese la calificación en la pregunta 4.')
        } else {
            cor = cor + parseFloat(nota1_4);
            inc = inc + (1 - parseFloat(nota1_4));
            $('#nota1_4').val(parseFloat(nota1_4).toFixed(2));
            $('#nota1_4').attr('disabled', 'true');
            preg8();
        }
    }

    function preg8() {
        var nota1_8 = $('#nota1_8').val();
        if (!nota1_8) {
            alert('Ingrese la calificación en la pregunta 8.')
        } else {
            cor = cor + parseFloat(nota1_8);
            inc = inc + (0.5 - parseFloat(nota1_8));
            $('#nota1_8').val(parseFloat(nota1_8).toFixed(2));
            $('#nota1_8').attr('disabled', 'true');
            preg9();
        }
    }

    function preg9() {
        var nota1_9 = $('#nota1_9').val();
        if (!nota1_9) {
            alert('Ingrese la calificación en la pregunta 9.')
        } else {
            cor = cor + parseFloat(nota1_9);
            inc = inc + (0.5 - parseFloat(nota1_9));
            $('#nota1_9').val(parseFloat(nota1_9).toFixed(2));
            $('#nota1_9').attr('disabled', 'true');
            preg11();
        }
    }

    function preg11() {
        var nota1_11 = $('#nota1_11').val();
        if (!nota1_11) {
            alert('Ingrese la calificación en la pregunta 11.')
        } else {
            cor = cor + parseFloat(nota1_11);
            inc = inc + (0.5 - parseFloat(nota1_11));
            $('#nota1_11').val(parseFloat(nota1_11).toFixed(2));
            $('#nota1_11').attr('disabled', 'true');
            preg12();
        }
    }

    function preg12() {
        var nota1_12 = $('#nota1_12').val();
        if (!nota1_12) {
            alert('Ingrese la calificación en la pregunta 12.')
        } else {
            cor = cor + parseFloat(nota1_12);
            inc = inc + (0.5 - parseFloat(nota1_12));
            $('#nota1_12').val(parseFloat(nota1_12).toFixed(2));
            $('#nota1_12').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p5dcon1 = $('#p5dcon1').val();
        var p5dcon2 = $('#p5dcon2').val();
        var p5dcon3 = $('#p5dcon3').val();
        var p5cont1 = 0;
        if (p5dcon1 == 'titular' || p5dcon1 == 'el titular' || p5dcon1 == 'el título' || p5dcon1 == 'título') {
            p5cont1++;
            f_ok($('#p5dcon1'));
        } else {
            p5cont1;
            f_no($('#p5dcon1'));
        }
        if (p5dcon2 == 'cuerpo de la noticia' || p5dcon2 == 'el cuerpo de la noticia') {
            p5cont1++;
            f_ok($('#p5dcon2'));
        } else {
            p5cont1;
            f_no($('#p5dcon2'));
        }
        if (p5dcon3 == 'final' || p5dcon3 == 'el final') {
            p5cont1++;
            f_ok($('#p5dcon3'));
        } else {
            p5cont1;
            f_no($('#p5dcon3'));
        }
        var result5 = (p5cont1 * 1) / 3;
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#nota1_5').val(result5.toFixed(2));
        $('#nota1_5').css('display', '');
        var p6dcon1 = $('#p6dcon1').val();
        var p6dcon2 = $('#p6dcon2').val();
        var p6dcon3 = $('#p6dcon3').val();
        var p6vec1 = ['pasado', 'presente', 'futuro'];
        var p6cont1 = 0;
        for (var i = 0; i < 3; i++) {
            var p6res1 = $('#p6dcon' + (i + 1)).val();
            var p6cont2 = 0;
            for (var j = 0; j < p6vec1.length; j++) {
                if (p6res1 == p6vec1[j]) {
                    p6cont2++;
                    p6vec1[j] = '0000';
                }
            }
            if (p6cont2 == '1') {
                p6cont1++;
                f_ok($('#p6dcon' + (i + 1)));
            } else {
                p6cont1;
                f_no($('#p6dcon' + (i + 1)));
            }
        }
        var result6 = (p6cont1 * 0.5) / 3;
        cor = cor + result6;
        inc = inc + (0.5 - result6);
        $('#nota1_6').val(result6.toFixed(2));
        $('#nota1_6').css('display', '');

        var p7vec1 = ['canté', 'caminé', 'dibujé', 'escribí', 'pinté'];
        var p7vec2 = ['cantaré', 'caminaré', 'dibujaré', 'escribiré', 'pintaré'];
        var p7cont1 = 0;
        for (var i = 0; i < p7vec1.length; i++) {
            var p7res1 = $('#p7dcon' + (i + 1)).val();
            if (p7res1 == p7vec1[i]) {
                p7cont1++;
                f_ok($('#p7dcon' + (i + 1)));
            } else {
                p7cont1;
                f_no($('#p7dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p7vec2.length; i++) {
            var p7res1 = $('#p71dcon' + (i + 1)).val();
            if (p7res1 == p7vec2[i]) {
                p7cont1++;
                f_ok($('#p71dcon' + (i + 1)));
            } else {
                p7cont1;
                f_no($('#p71dcon' + (i + 1)));
            }
        }
        var result7 = (p7cont1 * 1) / 10;
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#nota1_7').val(result7.toFixed(2));
        $('#nota1_7').css('display', '');

        var p10im1 = $('.p10im1 img').attr('alt');
        var p10im2 = $('.p10im2 img').attr('alt');
        var p10im3 = $('.p10im3 img').attr('alt');
        var p10cont1 = 0;
        if (!p10im1) {
            p10cont1;
            f_no($('.p10im1'));
        } else {
            if (p10im1 == '1') {
                p10cont1++;
                f_ok($('.p10im1'));
            }else{
                p10cont1;
                f_no($('.p10im1'));
            }
        }
        if (!p10im2) {
            p10cont1;
            f_no($('.p10im2'));
        } else {
            if (p10im2 == '2') {
                p10cont1++;
                f_ok($('.p10im2'));
            }else{
                p10cont1;
                f_no($('.p10im2'));
            }
        }
        if (!p10im3) {
            p10cont1;
            f_no($('.p10im3'));
        } else {
            if (p10im3 == '3') {
                p10cont1++;
                f_ok($('.p10im3'));
            }else{
                p10cont1;
                f_no($('.p10im3'));
            }
        }
        var result10 = (p10cont1 * 0.5) / 3;
        cor = cor + result10;
        inc = inc + (0.5 - result10);
        $('#nota1_10').val(result10.toFixed(2));
        $('#nota1_10').css('display', '');
        Calculo_nota();
    }
}