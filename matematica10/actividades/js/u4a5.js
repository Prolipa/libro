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
var titulos = "aplico";
numero_pagina(173);

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
    
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var pavec1=['20','5','100','24','17','288','28','35','504','32','45','320','36','50','180','50','1392'];
        var pacont1=0;
        for (var i = 0; i < pavec1.length; i++) {
            var pars=$('#padcon'+(i+1)).val();
            if (pars==pavec1[i]) {
                pacont1++;
                f_ok($('#padcon'+(i+1)));
            }else{
                pacont1;
                f_no($('#padcon'+(i+1)));
            }
        }
        var padcon18=parseFloat($('#padcon18').val()).toFixed(1);
        var padcon19=parseFloat($('#padcon19').val()).toFixed(1);
        var padcon20=parseFloat($('#padcon20').val()).toFixed(1);
        if (padcon18=='27.8') {
            pacont1++;
            f_ok($('#padcon18'));
        }else{
            pacont1;
            f_no($('#padcon18'));
        }
        if (padcon19=='27.8') {
            pacont1++;
            f_ok($('#padcon19'));
        }else{
            pacont1;
            f_no($('#padcon19'));
        }
        if (padcon20=='27.7') {
            pacont1++;
            f_ok($('#padcon20'));
        }else{
            pacont1;
            f_no($('#padcon20'));
        }
        var resulta = (pacont1 * 2) / 20;
        cor = cor + resulta;
        inc = inc + (2 - resulta);
        $('#pre1a').val(resulta.toFixed(2));

        var p1vec1=['105','10','1050','115','29','2185','125','41','1500','135','49','1080','49','5815'];
        var p1cont1=0;
        for (var i = 0; i < p1vec1.length; i++) {
            var par1=$('#p1dcon'+(i+1)).val();
            if (par1==p1vec1[i]) {
                p1cont1++;
                f_ok($('#p1dcon'+(i+1)));
            }else{
                p1cont1;
                f_no($('#p1dcon'+(i+1)));
            }
        }
        var p1dcon15=parseFloat($('#p1dcon15').val()).toFixed(1);
        var p1dcon16=parseFloat($('#p1dcon16').val()).toFixed(1);
        var p1dcon17=parseFloat($('#p1dcon17').val()).toFixed(1);
        if (p1dcon15=='118.6' || p1dcon15=='118.7') {
            p1cont1++;
            f_ok($('#p1dcon15'));
        }else{
            p1cont1;
            f_no($('#p1dcon15'));
        }
        if (p1dcon16=='117.6' || p1dcon16=='117.7') {
            p1cont1++;
            f_ok($('#p1dcon16'));
        }else{
            p1cont1;
            f_no($('#p1dcon16'));
        }
        if (p1dcon17=='115.6' || p1dcon17=='115.7') {
            p1cont1++;
            f_ok($('#p1dcon17'));
        }else{
            p1cont1;
            f_no($('#p1dcon17'));
        }
        var result1 = (p1cont1 * 2) / 17;
        cor = cor + result1;
        inc = inc + (2 - result1);
        $('#pre1a1').val(result1.toFixed(2));

        var p2vec1 = ['V', 'V'];
        var p2cont1 = 0;
        for (var i = 0; i < p2vec1.length; i++) {
            var p2rs1 = $('#p2sel' + (i + 1)).val();
            if (p2rs1 == p2vec1[i]) {
                p2cont1++;
                f_ok($('#p2sel' + (i + 1)));
            } else {
                p2cont1;
                f_no($('#p2sel' + (i + 1)));
            }
        }
        var result2 = (p2cont1 * 2) / 2;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#pre1a2').val(result2.toFixed(2));

        var p3dcon1=parseFloat($('#p3dcon1').val()).toFixed(1);
        var p3dcon2=parseFloat($('#p3dcon2').val()).toFixed(1);
        var p3dcon3=parseFloat($('#p3dcon3').val()).toFixed(1);
        var p3cont1=0;
        if (p3dcon1=='50.4') {
            p3cont1++;
            f_ok($('#p3dcon1'));
        }else{
            p3cont1;
            f_no($('#p3dcon1'));
        }
        if (p3dcon2=='50.0') {
            p3cont1++;
            f_ok($('#p3dcon2'));
        }else{
            p3cont1;
            f_no($('#p3dcon2'));
        }
        if (p3dcon3=='50.0') {
            p3cont1++;
            f_ok($('#p3dcon3'));
        }else{
            p3cont1;
            f_no($('#p3dcon3'));
        }
        var result3 = (p3cont1 * 2) / 3;
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#pre1a3').val(result3.toFixed(2));

        var p4dcon1=parseFloat($('#p4dcon1').val()).toFixed(1);
        var p4dcon2=parseFloat($('#p4dcon2').val()).toFixed(1);
        var p4cont1=0;
        if (p4dcon1=='252.8') {
            p4cont1++;
            f_ok($('#p4dcon1'));
        }else{
            p4cont1;
            f_no($('#p4dcon1'));
        }
        if (p4dcon2=='294.0') {
            p4cont1++;
            f_ok($('#p4dcon2'));
        }else{
            p4cont1;
            f_no($('#p4dcon2'));
        }
        var result4 = (p4cont1 * 2) / 2;
        cor = cor + result4;
        inc = inc + (2 - result4);
        $('#pre1a4').val(result4.toFixed(2));
        Calculo_nota();
    }
}