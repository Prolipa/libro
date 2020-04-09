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
document.getElementById('pre2a').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('pre2a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre2a'), 4)
});
document.getElementById('pre3a').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('pre3a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre3a'), 3)
});
function f_iniciar() {
    var p1vec1 = [
        '<input type="radio" class="p1sel1" name="check" style="zoom: 2;">' +
        '<label>Posible</label>',
        '<input type="radio" class="p1sel2" name="check" style="zoom: 2;">' +
        '<label>Imposible</label>',
        '<input type="radio" class="p1sel3" name="check" style="zoom: 2;">' +
        '<label>Seguro</label>' 
    ];
    p1vec1.sort(f_randomico);
    $('#p1im1').html(p1vec1[0]);
    $('#p1im2').html(p1vec1[1]);
    $('#p1im3').html(p1vec1[2]);
    var p1vec2 = [
        '<input type="radio" class="p1sel11" name="check1" style="zoom: 2;">' +
        '<label>Posible</label>',
        '<input type="radio" class="p1sel12" name="check1" style="zoom: 2;">' +
        '<label>Imposible</label>',
        '<input type="radio" class="p1sel13" name="check1" style="zoom: 2;">' +
        '<label>Seguro</label>' 
    ];
    p1vec2.sort(f_randomico);
    $('#p1im11').html(p1vec2[0]);
    $('#p1im12').html(p1vec2[1]);
    $('#p1im13').html(p1vec2[2]);
    var p1vec3 = [
        '<input type="radio" class="p1sel21" name="check2" style="zoom: 2;">' +
        '<label>Posible</label>',
        '<input type="radio" class="p1sel22" name="check2" style="zoom: 2;">' +
        '<label>Imposible</label>',
        '<input type="radio" class="p1sel23" name="check2" style="zoom: 2;">' +
        '<label>Seguro</label>' 
    ];
    p1vec3.sort(f_randomico);
    $('#p1im21').html(p1vec3[0]);
    $('#p1im22').html(p1vec3[1]);
    $('#p1im23').html(p1vec3[2]);
    var p1vec4 = [
        '<input type="radio" class="p1sel31" name="check3" style="zoom: 2;">' +
        '<label>Posible</label>',
        '<input type="radio" class="p1sel32" name="check3" style="zoom: 2;">' +
        '<label>Imposible</label>',
        '<input type="radio" class="p1sel33" name="check3" style="zoom: 2;">' +
        '<label>Seguro</label>' 
    ];
    p1vec4.sort(f_randomico);
    $('#p1im31').html(p1vec4[0]);
    $('#p1im32').html(p1vec4[1]);
    $('#p1im33').html(p1vec4[2]);
    bt_comprobar.addEventListener("click", preg2);
    function preg2() {
        cor = 0;
        var pre2a = $('#pre2a').val();
        if (!pre2a) {
            alert('Ingrese la calificación en la Pregunta 2.')
        } else {
            cor = cor + parseFloat(pre2a);
            inc = inc + (4 - parseFloat(pre2a));
            $('#pre2a').val(parseFloat(pre2a).toFixed(2));
            $('#pre2a').attr('disabled', 'true');
            preg3();
        }

    }
    function preg3() {
        var pre3a = $('#pre3a').val();
        if (!pre3a) {
            alert('Ingrese la calificación en la Pregunta 3.')
        } else {
            cor = cor + parseFloat(pre3a);
            inc = inc + (3 - parseFloat(pre3a));
            $('#pre3a').val(parseFloat(pre3a).toFixed(2));
            $('#pre3a').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg2);
        var p1cont1=0;
        if ($('.p1sel3').is(':checked')) {
            p1cont1++;
            $('.p1sel3').addClass('valid');
        }else{
            p1cont1;
            $('.p1sel3').addClass('no-valid');
            $('.p1sel2').addClass('no-valid');
            $('.p1sel1').addClass('no-valid');
        }
        if ($('.p1sel12').is(':checked')) {
            p1cont1++;
            $('.p1sel12').addClass('valid');
        }else{
            p1cont1;
            $('.p1sel12').addClass('no-valid');
            $('.p1sel13').addClass('no-valid');
            $('.p1sel11').addClass('no-valid');
        }
        if ($('.p1sel21').is(':checked')) {
            p1cont1++;
            $('.p1sel21').addClass('valid');
        }else{
            p1cont1;
            $('.p1sel21').addClass('no-valid');
            $('.p1sel22').addClass('no-valid');
            $('.p1sel23').addClass('no-valid');
        }
        if ($('.p1sel33').is(':checked')) {
            p1cont1++;
            $('.p1sel33').addClass('valid');
        }else{
            p1cont1;
            $('.p1sel33').addClass('no-valid');
            $('.p1sel32').addClass('no-valid');
            $('.p1sel31').addClass('no-valid');
        }
        var result1 = (p1cont1 * 3) / 4;
        cor = cor + result1;
        inc = inc + (3 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');
        Calculo_nota();
    }
}