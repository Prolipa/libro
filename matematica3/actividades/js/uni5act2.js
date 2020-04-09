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
    validNumero(0, 3, 1);
});
document.getElementById('pre2a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre2a'), 3)
});

function f_iniciar() {
    $(".drag1").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#p1act1"
    });
    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
        }
    });
    bt_comprobar.addEventListener("click", preg2);
    function preg2() {
        cor = 0;
        var pre2a = $('#pre2a').val();
        if (!pre2a) {
            alert('Ingrese la calificación en la Pregunta 2.')
        } else {
            cor = cor + parseFloat(pre2a);
            inc = inc + (3 - parseFloat(pre2a));
            $('#pre2a').val(parseFloat(pre2a).toFixed(2));
            $('#pre2a').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg2);
        var p1vec1 = ['a', 'e', 'o', 'i', 'u'];
        var p1vec2 =['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
        var p1vec3 =['1','2','3','4'];
        var p1vec4 =['1' , '2' , '3' , '6', '8' , '9'];
        var p1cont1=0;
        for (var i = 0; i < 5; i++) {
            var p1cont2=0;
            for (var j = 0; j < p1vec1.length; j++) {
                var p1res1=$('#p1dcon'+(i+1)).val();
                if (p1res1==p1vec1[j]) {
                    p1cont2++;
                    p1vec1[j]='14';
                }
            }
            if (p1cont2=='1') {
                p1cont1++;
                f_ok($('#p1dcon'+(i+1)));
            }else{
                p1cont1;
                f_no($('#p1dcon'+(i+1)));
            }
        }
        for (var i = 0; i < 5; i++) {
            var p1cont3=0;
            for (var j = 0; j < p1vec2.length; j++) {
                var p1res2=$('#p1dcon1'+(i+1)).val();
                if (p1res2==p1vec2[j]) {
                    p1cont3++;
                    p1vec2[j]='14';
                }
            }
            if (p1cont3=='1') {
                p1cont1++;
                f_ok($('#p1dcon1'+(i+1)));
            }else{
                p1cont1;
                f_no($('#p1dcon1'+(i+1)));
            }
        }
        for (var i = 0; i < 4; i++) {
            var p1cont4=0;
            for (var j = 0; j < p1vec3.length; j++) {
                var p1res3=$('#p1a'+(i+1)+' img').attr('alt');
                if ($('#p1a'+(i+1)+' img').length=='1') {
                    if (p1res3==p1vec3[j]) {
                        p1cont4++;
                        p1vec3[j]='aaa';
                    }
                }else{
                    p1cont4;
                }
                
            }
            if (p1cont4=='1') {
                p1cont1++;
                f_ok($('#p1a'+(i+1)));
            }else{
                p1cont1;
                f_no($('#p1a'+(i+1)));
            }
        }
        for (var i = 0; i < 6; i++) {
            var p1cont5=0;
            for (var j = 0; j < p1vec4.length; j++) {
                var p1res4=$('#p1dcon2'+(i+1)).val();
                if (p1res4==p1vec4[j]) {
                    p1cont5++;
                    p1vec4[j]='14';
                }
            }
            if (p1cont5=='1') {
                p1cont1++;
                f_ok($('#p1dcon2'+(i+1)));
            }else{
                p1cont1;
                f_no($('#p1dcon2'+(i+1)));
            }
        }
        var result1 = (p1cont1 * 7) / 20;
        cor = cor + result1;
        inc = inc + (7 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');
        Calculo_nota();
    }
}