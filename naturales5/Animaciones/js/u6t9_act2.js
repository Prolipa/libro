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

document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 5, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 5)
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var pal1 = ['<span class="drag1 bg_palabra">no contamina el aire.</span>',
        '<span class="drag1 bg_palabra">es una actividad divertida.</span>',
        '<span class="drag1 bg_palabra">conoce las reglas de tránsito.</span>',
        '<span class="drag1 bg_palabra">deben llevar casco.</span>'
    ];

    pal1.sort(f_randomico);

    $(".textos").append(pal1);
    var pal3 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p1cim11" ><h4>Todos los ciclistas</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p1im1" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p1cim12"><h4>El ciclismo</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p1im2" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p1cim13"><h4>La bicicleta</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p1im3" align="center"></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_origen p1cim14"><h4>Un buen ciclista</h4></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_destino1 drop1 p1im4" align="center"></div>' +
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
        containment: "#p1act1",
        scroll: false,
    });

    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", f_preg1);

    function f_preg1() {
        var nota1_2 = $('#nota1_2').val();
        cor = 0;
        inc = 0;
        if (!nota1_2) {
            alert('Ingrese la calificación en la pregunta 2')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (5 - parseFloat(nota1_2));
            $('#nota1_2').val(parseFloat(nota1_2).toFixed(2));
            $('#nota1_2').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg1);
        var p1im1 = $('.p1im1 span').text();
        var p1im2 = $('.p1im2 span').text();
        var p1im3 = $('.p1im3 span').text();
        var p1im4 = $('.p1im4 span').text();
        var p1cont1 = 0;
        if (!p1im1) {
            p1cont1;
            f_no($('.p1im1'));
        } else {
            if (p1im1 == 'deben llevar casco.') {
                p1cont1++;
                f_ok($('.p1im1'));
            }else{
                p1cont1;
                f_no($('.p1im1'));
            }
        }
        if (!p1im2) {
            p1cont1;
            f_no($('.p1im2'));
        } else {
            if (p1im2 == 'es una actividad divertida.') {
                p1cont1++;
                f_ok($('.p1im2'));
            }else{
                p1cont1;
                f_no($('.p1im2'));
            }
        }
        if (!p1im3) {
            p1cont1;
            f_no($('.p1im3'));
        } else {
            if (p1im3 == 'no contamina el aire.') {
                p1cont1++;
                f_ok($('.p1im3'));
            }else{
                p1cont1;
                f_no($('.p1im3'));
            }
        }
        if (!p1im4) {
            p1cont1;
            f_no($('.p1im4'));
        } else {
            if (p1im4 == 'conoce las reglas de tránsito.') {
                p1cont1++;
                f_ok($('.p1im4'));
            }else{
                p1cont1;
                f_no($('.p1im4'));
            }
        }
        var result1 = (p1cont1 * 5) / 4;
        cor = cor + result1;
        inc = inc + (5 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');
        Calculo_nota();
    }
}