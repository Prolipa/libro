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
document.getElementById('nota1_9').addEventListener('keypress', () => {
    validNumero(0, 5, 1);
});
document.getElementById('nota1_9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_9'), 5)
});

function f_iniciar() {
    var pal1 = ['<img alt="1" class="drag" src="img/i3_p216_u5a16.jpg" class="img-responsive" style="mix-blend-mode:multiply; display:inline-block;">',
        '<img alt="2" class="drag" src="img/i4_p216_u5a16.jpg" class="img-responsive" style="mix-blend-mode:multiply; display:inline-block;">',
        '<img alt="3" class="drag" src="img/i5_p216_u5a16.jpg" class="img-responsive" style="mix-blend-mode:multiply; display:inline-block;">'
    ];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    var pal2 = [
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim11" ><h4>La llama come repollo.</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim12"><h4>La llama consume la leña.</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim13"><h4>El señor Llerena llama a su amigo.</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal2.sort(f_randomico);
    $("#datos").html(pal2);
    $(".drag").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p3act1",
        scroll: false,
    });

    $(".drop").droppable({
        accept: ".drag",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag");
            ui.draggable.attr("style", "mix-blend-mode:multiply;");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", preg9);
    function preg9() {
        cor = 0;
        var nota1_9 = $('#nota1_9').val();
        if (!nota1_9) {
            alert('Ingrese la calificación en la pregunta 9.')
        } else {
            cor = cor + parseFloat(nota1_9);
            inc = inc + (5 - parseFloat(nota1_9));
            $('#nota1_9').val(parseFloat(nota1_9).toFixed(2));
            $('#nota1_9').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg9);
        var p31im1 = $('.p31im1 img').attr('alt');
        var p31im2 = $('.p31im2 img').attr('alt');
        var p31im3 = $('.p31im3 img').attr('alt');
        var p3cont1 = 0;
        if (p31im1 == '1') {
            p3cont1++;
            f_ok($('.p31im1'));
        } else {
            p3cont1;
            f_no($('.p31im1'));
        }
        if (p31im2 == '2') {
            p3cont1++;
            f_ok($('.p31im2'));
        } else {
            p3cont1;
            f_no($('.p31im2'));
        }
        if ((p31im3 == '3')) {
            p3cont1++;
            f_ok($('.p31im3'));
        } else {
            p3cont1;
            f_no($('.p31im3'));
        }
        var result3 = (p3cont1 * 5) / 3;
        cor = cor + result3;
        inc = inc + (5 - result3);
        $('#nota1_11').val(result3.toFixed(2));
        $('#nota1_11').css('display', '');
        Calculo_nota();
    }
}