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
var titulos = "preparo";
numero_pagina(178);
document.getElementById("pre1a1").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a1").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a1"), 1);
});
document.getElementById("pre1a2").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a2").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a2"), 1);
});
document.getElementById("pre1a3").addEventListener("keypress", () => {
    validNumero(0, 1.2, 1);
});
document.getElementById("pre1a3").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a3"), 1.2);
});
document.getElementById("pre1a4").addEventListener("keypress", () => {
    validNumero(0, 1.2, 1);
});
document.getElementById("pre1a4").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a4"), 1.2);
});
document.getElementById("pre1a7").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a7").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a7"), 1);
});
f_iniciar();
$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var p5vec1 = [
        '<li><span style="color: black;">∼p ⇒ q ' +
        '<select id="p5sel1"></select>' +
        '</span></li>',
        '<li><span style="color: black;">p∧∼q ' +
        '<select id="p5sel2"></select>' +
        '</span></li>',
        '<li><span style="color: black;">q⇔p' +
        '<select id="p5sel3"></select>' +
        '</span></li>'
    ];
    p5vec1.sort(f_randomico);
    $('#p5im1').html(p5vec1);
    var p5vec2 = [
        '<option value="Si no comí pizza, entonces bebí gaseosa.">Si no comí pizza, entonces bebí gaseosa.</option>',
        '<option value="Comí pizza y no bebí gaseosa.">Comí pizza y no bebí gaseosa.</option>',
        '<option value="Bebí gaseosa si y solo si comí pizza.">Bebí gaseosa si y solo si comí pizza.</option>',
    ];
    p5vec2.sort(f_randomico);
    for (var i = 0; i < 3; i++) {
        $('#p5sel' + (i + 1)).html('<option value="" disabled selected>Seleccione</option>' + p5vec2);
    }
    bt_comprobar.addEventListener("click", preg1);

    function preg1() {
        cor = 0;
        var pre1a1 = $('#pre1a1').val();
        if (!pre1a1) {
            alert('Ingrese la calificación en la Pregunta 1.')
        } else {
            cor = cor + parseFloat(pre1a1);
            inc = inc + (1 - parseFloat(pre1a1));
            $('#pre1a1').val(parseFloat(pre1a1).toFixed(2));
            $('#pre1a1').attr('disabled', 'true');
            preg2();
        }

    }

    function preg2() {
        var pre1a2 = $('#pre1a2').val();
        if (!pre1a2) {
            alert('Ingrese la calificación en la Pregunta 2.')
        } else {
            cor = cor + parseFloat(pre1a2);
            inc = inc + (1 - parseFloat(pre1a2));
            $('#pre1a2').val(parseFloat(pre1a2).toFixed(2));
            $('#pre1a2').attr('disabled', 'true');
            preg3();
        }

    }

    function preg3() {
        var pre1a3 = $('#pre1a3').val();
        if (!pre1a3) {
            alert('Ingrese la calificación en la Pregunta 3.')
        } else {
            cor = cor + parseFloat(pre1a3);
            inc = inc + (1 - parseFloat(pre1a3));
            $('#pre1a3').val(parseFloat(pre1a3).toFixed(2));
            $('#pre1a3').attr('disabled', 'true');
            preg4();
        }

    }

    function preg4() {
        var pre1a4 = $('#pre1a4').val();
        if (!pre1a4) {
            alert('Ingrese la calificación en la Pregunta 4.')
        } else {
            cor = cor + parseFloat(pre1a4);
            inc = inc + (1 - parseFloat(pre1a4));
            $('#pre1a4').val(parseFloat(pre1a4).toFixed(2));
            $('#pre1a4').attr('disabled', 'true');
            preg7();
        }

    }

    function preg7() {
        var pre1a7 = $('#pre1a7').val();
        if (!pre1a7) {
            alert('Ingrese la calificación en la Pregunta 7.')
        } else {
            cor = cor + parseFloat(pre1a7);
            inc = inc + (1 - parseFloat(pre1a7));
            $('#pre1a7').val(parseFloat(pre1a7).toFixed(2));
            $('#pre1a7').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p5vc1 = ['Si no comí pizza, entonces bebí gaseosa.', 'Comí pizza y no bebí gaseosa.', 'Bebí gaseosa si y solo si comí pizza.'];
        var p5cont1 = 0;
        for (var i = 0; i < p5vc1.length; i++) {
            var p5rs1 = $('#p5sel' + (i + 1)).val();
            if (p5rs1 == p5vc1[i]) {
                p5cont1++;
                f_ok($('#p5sel' + (i + 1)));
            } else {
                p5cont1;
                f_no($('#p5sel' + (i + 1)));
            }
        }
        var result5 = (p5cont1 * 1.2) / 3;
        cor = cor + result5;
        inc = inc + (1.2 - result5);
        $('#pre1a5').val(result5.toFixed(2));

        var p6vec1=['F','F','V','V'];
        var p6vec2=['V','F','V','V'];
        var p6vec3=['V','F','F','F'];
        var p6vec4=['F','V','F','V'];
        var p6vec5=['F','V','F','V'];
        var p6cont1=0;
        for (var i = 0; i < p6vec1.length; i++) {
            var p6rs1=$('#p62dcon'+(i+1)).val();
            if (p6rs1==p6vec1[i]) {
                p6cont1++;
                f_ok($('#p62dcon'+(i+1)));
            }else{
                p6cont1;
                f_no($('#p62dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p6vec2.length; i++) {
            var p6rs2=$('#p63dcon'+(i+1)).val();
            if (p6rs2==p6vec2[i]) {
                p6cont1++;
                f_ok($('#p63dcon'+(i+1)));
            }else{
                p6cont1;
                f_no($('#p63dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p6vec3.length; i++) {
            var p6rs3=$('#p64dcon'+(i+1)).val();
            if (p6rs3==p6vec3[i]) {
                p6cont1++;
                f_ok($('#p64dcon'+(i+1)));
            }else{
                p6cont1;
                f_no($('#p64dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p6vec4.length; i++) {
            var p6rs4=$('#p65dcon'+(i+1)).val();
            if (p6rs4==p6vec4[i]) {
                p6cont1++;
                f_ok($('#p65dcon'+(i+1)));
            }else{
                p6cont1;
                f_no($('#p65dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p6vec5.length; i++) {
            var p6rs5=$('#p66dcon'+(i+1)).val();
            if (p6rs5==p6vec5[i]) {
                p6cont1++;
                f_ok($('#p66dcon'+(i+1)));
            }else{
                p6cont1;
                f_no($('#p66dcon'+(i+1)));
            }
        }
        var result6 = (p6cont1 * 1.2) / 20;
        cor = cor + result6;
        inc = inc + (1.2 - result6);
        $('#pre1a6').val(result6.toFixed(2));

        var p8vec1=['V','V','V','F'];
        var p8vec2=['F','F','V','V'];
        var p8vec3=['F','F','V','F'];
        var p8vec4=['F','V','F','V'];
        var p8vec5=['V','V','F','V'];
        var p8cont1=0;
        for (var i = 0; i < p8vec1.length; i++) {
            var p8rs1=$('#p82dcon'+(i+1)).val();
            if (p8rs1==p8vec1[i]) {
                p8cont1++;
                f_ok($('#p82dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p82dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p8vec2.length; i++) {
            var p8rs2=$('#p83dcon'+(i+1)).val();
            if (p8rs2==p8vec2[i]) {
                p8cont1++;
                f_ok($('#p83dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p83dcon'+(i+1)));
            }
        }

        for (var i = 0; i < p8vec3.length; i++) {
            var p8rs3=$('#p84dcon'+(i+1)).val();
            if (p8rs3==p8vec3[i]) {
                p8cont1++;
                f_ok($('#p84dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p84dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p8vec4.length; i++) {
            var p8rs4=$('#p85dcon'+(i+1)).val();
            if (p8rs4==p8vec4[i]) {
                p8cont1++;
                f_ok($('#p85dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p85dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p8vec5.length; i++) {
            var p8rs5=$('#p86dcon'+(i+1)).val();
            if (p8rs5==p8vec5[i]) {
                p8cont1++;
                f_ok($('#p86dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p86dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p8vec3.length; i++) {
            var p8rs6=$('#p87dcon'+(i+1)).val();
            if (p8rs6==p8vec3[i]) {
                p8cont1++;
                f_ok($('#p87dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p87dcon'+(i+1)));
            }
        }
        var result8 = (p8cont1 * 1) / 24;
        cor = cor + result8;
        inc = inc + (1 - result8);
        $('#pre1a8').val(result8.toFixed(2));

        var p9dcon1=parseFloat($('#p9dcon1').val()).toFixed(1);
        var p9dcon2=parseFloat($('#p9dcon2').val()).toFixed(1);
        var p9dcon3=parseFloat($('#p9dcon3').val()).toFixed(1);
        var p9cont1=0;
        if (p9dcon1=='59.1') {
            p9cont1++;
            f_ok($('#p9dcon1'));
        }else{
            p9cont1;
            f_no($('#p9dcon1'));
        }
        if (p9dcon2=='59.4' || p9dcon2=='59.3') {
            p9cont1++;
            f_ok($('#p9dcon2'));
        }else{
            p9cont1;
            f_no($('#p9dcon2'));
        }
        if (p9dcon3=='59.5') {
            p9cont1++;
            f_ok($('#p9dcon3'));
        }else{
            p9cont1;
            f_no($('#p9dcon3'));
        }
        var result9 = (p9cont1 * 1.2) / 3;
        cor = cor + result9;
        inc = inc + (1.2 - result9);
        $('#pre1a9').val(result9.toFixed(2));
        Calculo_nota();
    }
}