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

document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 5, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 5)
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var pal1 = ['<img class="drag1 img-responsive" src="img/i2_p223_u6t11a8.jpg" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img class="drag1 img-responsive" src="img/i3_p223_u6t11a8.jpg" alt="2" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img class="drag1 img-responsive" src="img/i4_p223_u6t11a8.jpg" alt="3" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img class="drag1 img-responsive" src="img/i5_p223_u6t11a8.jpg" alt="4" style="display:inline-block; mix-blend-mode:multiply;">'
    ];

    pal1.sort(f_randomico);

    $(".textos").append(pal1);
    var pal3 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p2cim11" ><h4>¡Este es mi postre favorito!</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im1" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p2cim12"><h4>¡Gracias por llamarme!</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im2" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p2cim13"><h4>¡Hoy es mi día de suerte!</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im3" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p2cim14"><h4>¡Qué mala puntería tengo!</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im4" align="center"></div>' +
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
        containment: "#p2act1",
        scroll: false,
    });

    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            ui.draggable.attr("style", "mix-blend-mode:multiply;");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", f_preg1);

    function f_preg1() {
        var nota1_1 = $('#nota1_1').val();
        cor = 0;
        inc = 0;
        if (!nota1_1) {
            alert('Ingrese la calificación en la pregunta 1.')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (2.5 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg1);
        var p2im1 = $('.p2im1 img').attr('alt');
        var p2im2 = $('.p2im2 img').attr('alt');
        var p2im3 = $('.p2im3 img').attr('alt');
        var p2im4 = $('.p2im4 img').attr('alt');
        var p2cont1 = 0;
        if (!p2im1) {
            p2cont1;
            f_no($('.p2im1'));
        } else {
            if (p2im1 == '3') {
                p2cont1++;
                f_ok($('.p2im1'));
            } else {
                p2cont1;
                f_no($('.p2im1'));
            }
        }
        if (!p2im2) {
            p2cont1;
            f_no($('.p2im2'));
        } else {
            if (p2im2 == '2') {
                p2cont1++;
                f_ok($('.p2im2'));
            } else {
                p2cont1;
                f_no($('.p2im2'));
            }
        }
        if (!p2im3) {
            p2cont1;
            f_no($('.p2im3'));
        } else {
            if (p2im3 == '4') {
                p2cont1++;
                f_ok($('.p2im3'));
            } else {
                p2cont1;
                f_no($('.p2im3'));
            }
        }
        if (!p2im4) {
            p2cont1;
            f_no($('.p2im4'));
        } else {
            if (p2im4 == '1') {
                p2cont1++;
                f_ok($('.p2im4'));
            } else {
                p2cont1;
                f_no($('.p2im4'));
            }
        }
        var result2 = (p2cont1 * 5) / 4;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        Calculo_nota();
    }
}