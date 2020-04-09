var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str2 = '',
    str3 = '',
    str4 = '',
    calificacion = 10;

var t1 = 0;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('pre1a').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('pre1a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre1a'), 2)
});
document.getElementById('pre3a').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('pre3a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre3a'), 4)
});
document.getElementById('pre4a').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('pre4a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre4a'), 2)
});
function f_iniciar() {
    var pal1 = ['<img class="img-responsive drag1" src="img/i2_p203_u5a19.jpg" alt="1" style="mix-blend-mode:multiply; display:inline-block;">',
        '<img class="img-responsive drag1" src="img/i3_p203_u5a19.jpg" alt="2" style="mix-blend-mode:multiply; display:inline-block;">',
        '<img class="img-responsive drag1" src="img/i4_p203_u5a19.jpg" alt="3" style="mix-blend-mode:multiply; display:inline-block;">'
    ];
    pal1.sort(f_randomico);

    $(".textos").append(pal1);
    var pal3 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim11" ><h4>Segmento</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim12"><h4>Semirrecta</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p2im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p2cim13"><h4>Ángulo</h4></div>' +
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
            ui.draggable.attr("style", "mix-blend-mode:multiply");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", preg1);
    function preg1() {
        cor = 0;
        var pre1a = $('#pre1a').val();
        if (!pre1a) {
            alert('Ingrese la calificación en la Pregunta 1.')
        } else {
            cor = cor + parseFloat(pre1a);
            inc = inc + (2 - parseFloat(pre1a));
            $('#pre1a').val(parseFloat(pre1a).toFixed(2));
            $('#pre1a').attr('disabled', 'true');
            preg3();
        }

    }
    function preg3() {
        var pre3a = $('#pre3a').val();
        if (!pre3a) {
            alert('Ingrese la calificación en la Pregunta 3.')
        } else {
            cor = cor + parseFloat(pre3a);
            inc = inc + (4 - parseFloat(pre3a));
            $('#pre3a').val(parseFloat(pre3a).toFixed(2));
            $('#pre3a').attr('disabled', 'true');
            preg4();
        }

    }
    function preg4() {
        var pre4a = $('#pre4a').val();
        if (!pre4a) {
            alert('Ingrese la calificación en la Pregunta 4.')
        } else {
            cor = cor + parseFloat(pre4a);
            inc = inc + (2 - parseFloat(pre4a));
            $('#pre4a').val(parseFloat(pre4a).toFixed(2));
            $('#pre4a').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p2im1=$('.p2im1 img').attr('alt');
        var p2im2=$('.p2im2 img').attr('alt');
        var p2im3=$('.p2im3 img').attr('alt');
        var p2cont1=0;
        if (p2im1=='2') {
            p2cont1++;
            f_ok($('.p2im1'));
        }else{
            p2cont1;
            f_no($('.p2im1'));
        }
        if (p2im2=='3') {
            p2cont1++;
            f_ok($('.p2im2'));
        }else{
            p2cont1;
            f_no($('.p2im2'));
        }
        if (p2im3=='1') {
            p2cont1++;
            f_ok($('.p2im3'));
        }else{
            p2cont1;
            f_no($('.p2im3'));
        }
        var result2 = (p2cont1 * 2) / 3;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}