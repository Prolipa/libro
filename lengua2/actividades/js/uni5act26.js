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
document.getElementById('nota1_1').addEventListener('keypress', () => {
        validNumero(0, 1, 1);
    });
    document.getElementById('nota1_1').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('nota1_1'), 1)
    });
document.getElementById('nota1_2').addEventListener('keypress', () => {
        validNumero(0, 2, 1);
    });
    document.getElementById('nota1_2').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('nota1_2'), 2)
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
document.getElementById('nota1_6').addEventListener('keypress', () => {
        validNumero(0, 2, 1);
    });
    document.getElementById('nota1_6').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('nota1_6'), 2)
    });
function f_iniciar() {
    var pal1 = [
        '<span class="bg_palabra drag1">gallo</span>',
        '<span class="bg_palabra drag1">El</span>',
        '<span class="bg_palabra drag1">canta</span>',
        '<span class="bg_palabra drag1">mañana.</span>',
        '<span class="bg_palabra drag1">en</span>',
        '<span class="bg_palabra drag1">la</span>'
    ];
    pal1.sort(f_randomico);
    $('.textos').html(pal1);
    $(".drag1").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: "#p5act1",
            scroll: false,
        });
        $(".drop1").droppable({
            accept: ".drag1",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag1");
                $(ui.draggable).removeClass("bg_palabra");
                ui.draggable.attr("style", "padding: 5px;");
                $(this).append(ui.draggable);

            }
        });
    var pal2 = [
        '<span class="bg_palabra drag2">come</span>',
        '<span class="bg_palabra drag2">Cecilia</span>',
        '<span class="bg_palabra drag2">de</span>',
        '<span class="bg_palabra drag2">helado</span>',
        '<span class="bg_palabra drag2">cereza.</span>'
    ];
    pal2.sort(f_randomico);
    $('.textos1').html(pal2);
    $(".drag2").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: "#p5act2",
            scroll: false,
        });
        $(".drop2").droppable({
            accept: ".drag2",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag2");
                $(ui.draggable).removeClass("bg_palabra");
                ui.draggable.attr("style", "padding: 5px;");
                $(this).append(ui.draggable);

            }
        });
    var pal3 = [
        '<span class="bg_palabra drag3">cena</span>',
        '<span class="bg_palabra drag3">con</span>',
        '<span class="bg_palabra drag3">Guillermo</span>',
        '<span class="bg_palabra drag3">pollo.</span>',
        '<span class="bg_palabra drag3">arroz</span>'
    ];
    pal3.sort(f_randomico);
    $('.textos2').html(pal3);
    $(".drag3").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: "#p5act3",
            scroll: false,
        });
        $(".drop3").droppable({
            accept: ".drag3",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag3");
                $(ui.draggable).removeClass("bg_palabra");
                ui.draggable.attr("style", "padding: 5px;");
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
            inc = inc + (1 - parseFloat(nota1_1));
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
            inc = inc + (2 - parseFloat(nota1_2));
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
            preg6();
        }
    }
    function preg6() {
        var nota1_6 = $('#nota1_6').val();
        if (!nota1_6) {
            alert('Ingrese la calificación en la pregunta 6.')
        } else {
            cor = cor + parseFloat(nota1_6);
            inc = inc + (2 - parseFloat(nota1_6));
            $('#nota1_6').val(parseFloat(nota1_6).toFixed(2));
            $('#nota1_6').attr('disabled', 'true');
            f_comprobar();
        }
    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p5a1=$('#p5a1 span').text();
        var p5a2=$('#p5a2 span').text();
        var p5a3=$('#p5a3 span').text();
        var p5cont1=0;
        if (p5a1=='Elgallocantaenlamañana.') {
            p5cont1++;
            f_ok($('#p5a1'));
        }else {
            p5cont1;
            f_no($('#p5a1'));
        }
        if (p5a2=='Ceciliacomeheladodecereza.') {
            p5cont1++;
            f_ok($('#p5a2'));
        }else {
            p5cont1;
            f_no($('#p5a2'));
        }
        if (p5a3=='Guillermocenaarrozconpollo.') {
            p5cont1++;
            f_ok($('#p5a3'));
        }else {
            p5cont1;
            f_no($('#p5a3'));
        }
        var result2 = (p5cont1 * 3) / 3;
        cor = cor + result2;
        inc = inc + (3 - result2);
        $('#nota1_5').val(result2.toFixed(2));
        $('#nota1_5').css('display', '');
        Calculo_nota();
    }
}