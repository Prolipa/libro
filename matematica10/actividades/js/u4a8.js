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
var titulos = "evaluacion";
numero_pagina(180);
document.getElementById("pre1a2").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a2").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a2"), 1);
});
document.getElementById("pre1a4").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a4").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a4"), 1);
});
document.getElementById("pre1a5").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a5").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a5"), 1);
});
document.getElementById("pre1a6").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a6").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a6"), 1);
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
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 p7en1':
            $('.p7en1').addClass('encierra1');
            $('.p7en2').removeClass('encierra1');
            $('.p7en3').removeClass('encierra1');
            break;
        case '1 p7en2':
            $('.p7en2').addClass('encierra1');
            $('.p7en1').removeClass('encierra1');
            $('.p7en3').removeClass('encierra1');
            break;
        case '1 p7en3':
            $('.p7en3').addClass('encierra1');
            $('.p7en1').removeClass('encierra1');
            $('.p7en2').removeClass('encierra1');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p8en1':
            $('.p8en1').addClass('encierra1');
            $('.p8en2').removeClass('encierra1');
            $('.p8en3').removeClass('encierra1');
            break;
        case '2 p8en2':
            $('.p8en2').addClass('encierra1');
            $('.p8en1').removeClass('encierra1');
            $('.p8en3').removeClass('encierra1');
            break;
        case '2 p8en3':
            $('.p8en3').addClass('encierra1');
            $('.p8en1').removeClass('encierra1');
            $('.p8en2').removeClass('encierra1');
            break;
    }
});
function f_iniciar() {
    var p1vec1 = [
        '<table class="table">' +
        '<tr>' +
        '<td rowspan="2" style="vertical-align: middle;"><b style="color: #005CA4;" id="p1lt1">a)</b></td>' +
        '<td style="vertical-align: middle;">2m-5n=14</td>' +
        '<td rowspan="2" style="vertical-align: middle;">(-3, -4)</td>' +
        '<td rowspan="2" style="vertical-align: middle;"><img src="img/i1_p170_u4a4.jpg"></td>' +
        '<td rowspan="2" style="vertical-align: middle;">' +
        '<select id="p1sel1">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="S">Sí son solución</option>' +
        '<option value="N">No son solución</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="vertical-align: middle;">5m+2n=-23</td>' +
        '</tr>' +
        '</table>',
        '<table class="table">' +
        '<tr>' +
        '<td rowspan="2" style="vertical-align: middle;"><b style="color: #005CA4;" id="p1lt2">b)</b></td>' +
        '<td style="vertical-align: middle;">9a-2b=-3</td>' +
        '<td rowspan="2" style="vertical-align: middle;">(3, <div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>)</td>' +
        '<td rowspan="2" style="vertical-align: middle;"><img src="img/i1_p170_u4a4.jpg"></td>' +
        '<td rowspan="2" style="vertical-align: middle;">' +
        '<select id="p1sel2">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="S">Sí son solución</option>' +
        '<option value="N">No son solución</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="vertical-align: middle;">7b-12a=17</td>' +
        '</tr>' +
        '</table>',
        '<table class="table">' +
        '<tr>' +
        '<td rowspan="2" style="vertical-align: middle;"><b style="color: #005CA4;" id="p1lt3">c)</b></td>' +
        '<td style="vertical-align: middle;">-5x+15y=-5</td>' +
        '<td rowspan="2" style="vertical-align: middle;">(4, 1)</td>' +
        '<td rowspan="2" style="vertical-align: middle;"><img src="img/i1_p170_u4a4.jpg"></td>' +
        '<td rowspan="2" style="vertical-align: middle;">' +
        '<select id="p1sel3">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="S">Sí son solución</option>' +
        '<option value="N">No son solución</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="vertical-align: middle;">x+3y=7</td>' +
        '</tr>' +
        '</table>',
        '<table class="table">' +
        '<tr>' +
        '<td rowspan="2" style="vertical-align: middle;"><b style="color: #005CA4;" id="p1lt4">d)</b></td>' +
        '<td style="vertical-align: middle;">-2x+y=9</td>' +
        '<td rowspan="2" style="vertical-align: middle;">(0, 9)</td>' +
        '<td rowspan="2" style="vertical-align: middle;"><img src="img/i1_p170_u4a4.jpg"></td>' +
        '<td rowspan="2" style="vertical-align: middle;">' +
        '<select id="p1sel4">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="S">Sí son solución</option>' +
        '<option value="N">No son solución</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="vertical-align: middle;">8x+4y=36</td>' +
        '</tr>' +
        '</table>',
        '<table class="table">' +
        '<tr>' +
        '<td rowspan="2" style="vertical-align: middle;"><b style="color: #005CA4;" id="p1lt5">e)</b></td>' +
        '<td style="vertical-align: middle;">7x-5y=-3</td>' +
        '<td rowspan="2" style="vertical-align: middle;">(1, 2)</td>' +
        '<td rowspan="2" style="vertical-align: middle;"><img src="img/i1_p170_u4a4.jpg"></td>' +
        '<td rowspan="2" style="vertical-align: middle;">' +
        '<select id="p1sel5">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="S">Sí son solución</option>' +
        '<option value="N">No son solución</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="vertical-align: middle;">3x-y=4</td>' +
        '</tr>' +
        '</table>'
    ];
    var p1vec2 = ['a)', 'b)', 'c)', 'd)', 'e)'];
    var myArray1 = ["0", "1", "2", "3", "4"];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c1 = myArray1[i - 1];
        $("#p1im" + i).html(p1vec1[c1]);
        $("#p1lt" + (parseInt(c1) + 1)).html(p1vec2[(i - 1)])
    }

    var p3vec1 = [
        '<table class="table">' +
        '<tr>' +
        '<td rowspan="2" style="vertical-align: middle;"><b style="color: #005CA4;" id="p3lt1">a)</b></td>' +
        '<td rowspan="2" style="vertical-align: middle;">El sistema</td>' +
        '<td style="vertical-align: middle;">2x+7y=0</td>' +
        '<td rowspan="2" style="vertical-align: middle;">es consistente con una solución.</td>' +
        '<td rowspan="2" style="vertical-align: middle;">' +
        '<select id="p3sel1">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="V">Verdadero</option>' +
        '<option value="F">Falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="vertical-align: middle;">7x+2y=0</td>' +
        '</tr>' +
        '</table>',
        '<table class="table">' +
        '<tr>' +
        '<td rowspan="2" style="vertical-align: middle;"><b style="color: #005CA4;" id="p3lt2">b)</b></td>' +
        '<td rowspan="2" style="vertical-align: middle;">El sistema</td>' +
        '<td style="vertical-align: middle;">5x-2y=3</td>' +
        '<td rowspan="2" style="vertical-align: middle;">es consistente con infinitas soluciones</td>' +
        '<td rowspan="2" style="vertical-align: middle;">' +
        '<select id="p3sel2">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="V">Verdadero</option>' +
        '<option value="F">Falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="vertical-align: middle;">10x+4y=6</td>' +
        '</tr>' +
        '</table>',
        '<table class="table">' +
        '<tr>' +
        '<td rowspan="2" style="vertical-align: middle;"><b style="color: #005CA4;" id="p3lt3">c)</b></td>' +
        '<td rowspan="2" style="vertical-align: middle;">El sistema</td>' +
        '<td style="vertical-align: middle;">-x+4y=5</td>' +
        '<td rowspan="2" style="vertical-align: middle;">es inconsistente.</td>' +
        '<td rowspan="2" style="vertical-align: middle;">' +
        '<select id="p3sel3">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="V">Verdadero</option>' +
        '<option value="F">Falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="vertical-align: middle;">x-4y=8</td>' +
        '</tr>' +
        '</table>',
        '<table class="table">' +
        '<tr>' +
        '<td rowspan="2" style="vertical-align: middle;"><b style="color: #005CA4;" id="p3lt4">d)</b></td>' +
        '<td rowspan="2" style="vertical-align: middle;">El sistema</td>' +
        '<td style="vertical-align: middle;">-x-0.5y=4</td>' +
        '<td rowspan="2" style="vertical-align: middle;">es consistente con infinitas soluciones.</td>' +
        '<td rowspan="2" style="vertical-align: middle;">' +
        '<select id="p3sel4">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="V">Verdadero</option>' +
        '<option value="F">Falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="vertical-align: middle;">2x-y=8</td>' +
        '</tr>' +
        '</table>'
    ];
    var p3vec2 = ['a)', 'b)', 'c)', 'd)'];
    var myArray2 = ["0", "1", "2", "3"];
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c2 = myArray2[i - 1];
        $("#p3im" + i).html(p3vec1[c2]);
        $("#p3lt" + (parseInt(c2) + 1)).html(p3vec2[(i - 1)])
    }

    p7vec1=['VFV','VFF','FFV'];
    p7vec1.sort(f_randomico);
    for (var i = 0; i < p7vec1.length; i++) {
        $('#p7im'+(i+1)).html(p7vec1[i]);
    }

    p8vec1=['∼p','∼q','p ∧ q'];
    p8vec1.sort(f_randomico);
    for (var i = 0; i < p8vec1.length; i++) {
        $('#p8im'+(i+1)).html(p8vec1[i]);
    }
    bt_comprobar.addEventListener("click", preg2);

    function preg2() {
        cor = 0;
        var pre1a2 = $('#pre1a2').val();
        if (!pre1a2) {
            alert('Ingrese la calificación en la Pregunta 2.')
        } else {
            cor = cor + parseFloat(pre1a2);
            inc = inc + (1 - parseFloat(pre1a2));
            $('#pre1a2').val(parseFloat(pre1a2).toFixed(2));
            $('#pre1a2').attr('disabled', 'true');
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
            preg5();
        }

    }
    function preg5() {
        var pre1a5 = $('#pre1a5').val();
        if (!pre1a5) {
            alert('Ingrese la calificación en la Pregunta 5.')
        } else {
            cor = cor + parseFloat(pre1a5);
            inc = inc + (1 - parseFloat(pre1a5));
            $('#pre1a5').val(parseFloat(pre1a5).toFixed(2));
            $('#pre1a5').attr('disabled', 'true');
            preg6();
        }

    }
    function preg6() {
        var pre1a6 = $('#pre1a6').val();
        if (!pre1a6) {
            alert('Ingrese la calificación en la Pregunta 6.')
        } else {
            cor = cor + parseFloat(pre1a6);
            inc = inc + (1 - parseFloat(pre1a6));
            $('#pre1a6').val(parseFloat(pre1a6).toFixed(2));
            $('#pre1a6').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg2);
        var p1vec3 = ['S', 'N', 'S', 'S', 'N'];
        var p1cont1 = 0;
        for (var i = 0; i < p1vec3.length; i++) {
            var p1rs1 = $('#p1sel' + (i + 1)).val();
            if (p1rs1 == p1vec3[i]) {
                p1cont1++;
                f_ok($('#p1sel' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p1sel' + (i + 1)));
            }
        }
        var result1 = (p1cont1 * 1) / 5;
        cor = cor + result1;
        inc = inc + (1 - result1);
        $('#pre1a1').val(result1.toFixed(2));

        var p3vec3 = ['V', 'F', 'V', 'V'];
        var p3cont1 = 0;
        for (var i = 0; i < p3vec3.length; i++) {
            var p3rs1 = $('#p3sel' + (i + 1)).val();
            if (p3rs1 == p3vec3[i]) {
                p3cont1++;
                f_ok($('#p3sel' + (i + 1)));
            } else {
                p3cont1;
                f_no($('#p3sel' + (i + 1)));
            }
        }
        var result3 = (p3cont1 * 1) / 4;
        cor = cor + result3;
        inc = inc + (1 - result3);
        $('#pre1a3').val(result3.toFixed(2));

        var p7dcon1 = $('#p7rs1 .encierra1 span').text();
        var p7cont1 = 0;
        if (!p7dcon1) {
            p7cont1;
            f_no($('.1'));
        } else {
            if (p7dcon1 == 'FFV') {
                p7cont1++;
                f_ok($('#p7rs1 .encierra1'));
            } else {
                p7cont1;
                f_no($('#p7rs1 .encierra1'));
            }
        }
        var result7 = (p7cont1 * 1) / 1;
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#pre1a7').val(result7.toFixed(2));

        var p8dcon1 = $('#p8rs1 .encierra1 span').text();
        var p8cont1 = 0;
        if (!p8dcon1) {
            p8cont1;
            f_no($('.2'));
        } else {
            if (p8dcon1 == '∼p') {
                p8cont1++;
                f_ok($('#p8rs1 .encierra1'));
            } else {
                p8cont1;
                f_no($('#p8rs1 .encierra1'));
            }
        }
        var result8 = (p8cont1 * 1) / 1;
        cor = cor + result8;
        inc = inc + (1 - result8);
        $('#pre1a8').val(result8.toFixed(2));

        var p9vec1=['V','V','V','F'];
        var p9vec2=['F','F','V','V'];
        var p9vec3=['F','F','V','F'];
        var p9vec4=['F','V','F','V'];
        var p9vec5=['V','V','F','V'];
        var p9vec6=['V','V','V','V'];
        var p9vec7=['F','F','V','F'];
        var p9cont1=0;
        for (var i = 0; i < p9vec1.length; i++) {
            var p9rs1=$('#p92dcon'+(i+1)).val();
            if (p9rs1==p9vec1[i]) {
                p9cont1++;
                f_ok($('#p92dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p92dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec2.length; i++) {
            var p9rs2=$('#p93dcon'+(i+1)).val();
            if (p9rs2==p9vec2[i]) {
                p9cont1++;
                f_ok($('#p93dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p93dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec3.length; i++) {
            var p9rs3=$('#p94dcon'+(i+1)).val();
            if (p9rs3==p9vec3[i]) {
                p9cont1++;
                f_ok($('#p94dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p94dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec4.length; i++) {
            var p9rs4=$('#p95dcon'+(i+1)).val();
            if (p9rs4==p9vec4[i]) {
                p9cont1++;
                f_ok($('#p95dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p95dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec5.length; i++) {
            var p9rs5=$('#p96dcon'+(i+1)).val();
            if (p9rs5==p9vec5[i]) {
                p9cont1++;
                f_ok($('#p96dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p96dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec6.length; i++) {
            var p9rs6=$('#p97dcon'+(i+1)).val();
            if (p9rs6==p9vec6[i]) {
                p9cont1++;
                f_ok($('#p97dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p97dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec7.length; i++) {
            var p9rs7=$('#p98dcon'+(i+1)).val();
            if (p9rs7==p9vec7[i]) {
                p9cont1++;
                f_ok($('#p98dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p98dcon'+(i+1)));
            }
        }
        var result9 = (p9cont1 * 1) / 28;
        cor = cor + result9;
        inc = inc + (1 - result9);
        $('#pre1a9').val(result9.toFixed(2));

        var p10dcon1=parseFloat($('#p10dcon1').val()).toFixed(1);
        var p10dcon2=parseFloat($('#p10dcon2').val()).toFixed(1);
        var p10cont1=0;
        if (p10dcon1=='7.5') {
            p10cont1++;
            f_ok($('#p10dcon1'));
        }else{
            p10cont1;
            f_no($('#p10dcon1'));
        }
        if (p10dcon2=='8.6') {
            p10cont1++;
            f_ok($('#p10dcon2'));
        }else{
            p10cont1;
            f_no($('#p10dcon2'));
        }
        var result10 = (p10cont1 * 1) / 2;
        cor = cor + result10;
        inc = inc + (1 - result10);
        $('#pre1a10').val(result10.toFixed(2));
        Calculo_nota();
    }
}