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
    validNumero(0, 5, 1);
});
document.getElementById('pre1a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre1a'), 5)
});
function f_iniciar() {
    var p1vec1 = [(Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100)];
    p1vec1.push(p1vec1[0] + p1vec1[1]);
    $('#p1im1').html(p1vec1[0]);
    $('#p1im2').html(p1vec1[1]);
    $('#p1im3').html(p1vec1[2]);
    var p1vec2 = [(Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100)];
    p1vec2.push(p1vec2[0] + p1vec2[1]);
    $('#p1im11').html(p1vec2[0]);
    $('#p1im12').html(p1vec2[1]);
    $('#p1im13').html(p1vec2[2]);

    var p2vec2 = [(Math.floor(Math.random() * 40) + 10)];
    for (var i = 0; i < 1; i++) {
        var p2n1 = (Math.floor(Math.random() * 40) + 10);
        if (p2n1 == p2vec2[0]) {
            i--;
        } else {
            p2vec2.push(p2n1);
        }
    }
    p2vec2.sort((a, b) => a - b);
    p2vec2.push(p2vec2[0] + p2vec2[1]);
    p2vec1 = [
        p2vec2[2] + '-' + p2vec2[1] + '' + p2vec2[0],
        p2vec2[0] + '+' + p2vec2[1] + '' + p2vec2[2],
        p2vec2[2] + '-' + p2vec2[0] + '' + p2vec2[1],
        p2vec2[1] + '+' + p2vec2[0] + '' + p2vec2[2]
    ];
    $('#p2im1').text(p2vec2[1]);
    $('#p2im2').text(p2vec2[0]);
    $('#p2im3').text(p2vec2[2]);
    bt_comprobar.addEventListener("click", preg1);
    function preg1() {
        cor = 0;
        var pre1a = $('#pre1a').val();
        if (!pre1a) {
            alert('Ingrese la calificación en la Pregunta 1.')
        } else {
            cor = cor + parseFloat(pre1a);
            inc = inc + (3 - parseFloat(pre1a));
            $('#pre1a').val(parseFloat(pre1a).toFixed(2));
            $('#pre1a').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);

        var p2res1 = [];
        var p2res2 = [];
        var p2res3 = [];
        var p2res4 = [];

        for (var i = 1; i < 5; i++) {
            var n = $("#resa" + [i] + "").val();
            p2res1.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resb" + [i] + "").val();
            p2res2.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resc" + [i] + "").val();
            p2res3.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resd" + [i] + "").val();
            p2res4.push(n);
        }
        var p2vec4=[];
        p2vec4.push(p2res1[0] + p2res1[1] + p2res1[2] + p2res1[3]);
        p2vec4.push(p2res2[0] + p2res2[1] + p2res2[2] + p2res2[3]);
        p2vec4.push(p2res3[0] + p2res3[1] + p2res3[2] + p2res3[3]);
        p2vec4.push(p2res4[0] + p2res4[1] + p2res4[2] + p2res4[3]);
        p2vec3 = ['a', 'b', 'c', 'd'];
        var corr=0;
        for (var i = 0; i < 4; i++) {
            var cont = 0;
            for (var j = 0; j < 4; j++) {
                if (p2vec4[i] == p2vec1[j]) {
                    cont++;
                    p2vec1[j] = 'aa';
                } else {
                    cont;
                }
            }
            if (cont == 1) {

                corr++;
                f_ok($("#res" + p2vec3[i] + "1"));
                f_ok($("#res" + p2vec3[i] + "2"));
                f_ok($("#res" + p2vec3[i] + "3"));
                f_ok($("#res" + p2vec3[i] + "4"));
            } else {
                corr;

                f_no($("#res" + p2vec3[i] + "1"));
                f_no($("#res" + p2vec3[i] + "2"));
                f_no($("#res" + p2vec3[i] + "3"));
                f_no($("#res" + p2vec3[i] + "4"));
            }
        }
        var result2 = (corr * 5) / 4;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}