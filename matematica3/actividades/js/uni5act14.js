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

function f_iniciar() {
    var p1vec1 = [(Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 10) + 1)];
    var p1ta1 = [];
    for (var i = 0; i < p1vec1[0]; i++) {
        if ((i + 1) == p1vec1[0]) {
            p1ta1.push('<span id="p1cim' + i + '"></span> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dcon1">');
        } else {
            p1ta1.push('<span id="p1cim' + i + '"></span> + ');
        }

    }
    $('#p1im1').html(p1ta1);
    for (var i = 0; i < p1vec1[0]; i++) {
        $('#p1cim' + i).text(p1vec1[1]);
    }

    var p1ta2 = [];
    for (var i = 0; i < p1vec1[2]; i++) {
        if ((i + 1) == p1vec1[2]) {
            p1ta2.push('<span id="p11cim' + i + '"></span> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dcon11">');
        } else {
            p1ta2.push('<span id="p11cim' + i + '"></span> + ');
        }

    }
    $('#p1im2').html(p1ta2);
    for (var i = 0; i < p1vec1[2]; i++) {
        $('#p11cim' + i).text(p1vec1[3]);
    }

    var p1ta3 = [];
    for (var i = 0; i < p1vec1[4]; i++) {
        if ((i + 1) == p1vec1[4]) {
            p1ta3.push('<span id="p12cim' + i + '"></span> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dcon21">');
        } else {
            p1ta3.push('<span id="p12cim' + i + '"></span> + ');
        }

    }
    $('#p1im3').html(p1ta3);
    for (var i = 0; i < p1vec1[4]; i++) {
        $('#p12cim' + i).text(p1vec1[5]);
    }

    var p1ta4 = [];
    for (var i = 0; i < p1vec1[6]; i++) {
        if ((i + 1) == p1vec1[6]) {
            p1ta4.push('<span id="p13cim' + i + '"></span> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dcon31">');
        } else {
            p1ta4.push('<span id="p13cim' + i + '"></span> + ');
        }

    }
    $('#p1im4').html(p1ta4);
    for (var i = 0; i < p1vec1[6]; i++) {
        $('#p13cim' + i).text(p1vec1[7]);
    }

    var p1ta5 = [];
    for (var i = 0; i < p1vec1[8]; i++) {
        if ((i + 1) == p1vec1[8]) {
            p1ta5.push('<span id="p14cim' + i + '"></span> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dcon41">');
        } else {
            p1ta5.push('<span id="p14cim' + i + '"></span> + ');
        }

    }
    $('#p1im5').html(p1ta5);
    for (var i = 0; i < p1vec1[8]; i++) {
        $('#p14cim' + i).text(p1vec1[9]);
    }

    var p1ta6 = [];
    for (var i = 0; i < p1vec1[10]; i++) {
        if ((i + 1) == p1vec1[10]) {
            p1ta6.push('<span id="p15cim' + i + '"></span> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dcon51">');
        } else {
            p1ta6.push('<span id="p15cim' + i + '"></span> + ');
        }

    }
    $('#p1im6').html(p1ta6);
    for (var i = 0; i < p1vec1[10]; i++) {
        $('#p15cim' + i).text(p1vec1[11]);
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cont1=0;
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val();
        var p1dcon3=$('#p1dcon3').val();
        var p1dcon4=$('#p1dcon4').val();
        var p1dcon5=$('#p1dcon5').val();
        var p1dcon6=$('#p1dcon6').val();
        if (p1dcon1==(p1vec1[0]*p1vec1[1])) {
            p1cont1++;
            f_ok($('#p1dcon1'));
        }else{
            p1cont1;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2==(p1vec1[0])) {
            p1cont1++;
            f_ok($('#p1dcon2'));
        }else{
            p1cont1;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3==(p1vec1[1])) {
            p1cont1++;
            f_ok($('#p1dcon3'));
        }else{
            p1cont1;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4==(p1vec1[0])) {
            p1cont1++;
            f_ok($('#p1dcon4'));
        }else{
            p1cont1;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5==(p1vec1[1])) {
            p1cont1++;
            f_ok($('#p1dcon5'));
        }else{
            p1cont1;
            f_no($('#p1dcon5'));
        }
        if (p1dcon6==(p1vec1[0]*p1vec1[1])) {
            p1cont1++;
            f_ok($('#p1dcon6'));
        }else{
            p1cont1;
            f_no($('#p1dcon6'));
        }

        var p1dcon11=$('#p1dcon11').val();
        var p1dcon12=$('#p1dcon12').val();
        var p1dcon13=$('#p1dcon13').val();
        var p1dcon14=$('#p1dcon14').val();
        var p1dcon15=$('#p1dcon15').val();
        var p1dcon16=$('#p1dcon16').val();
        if (p1dcon11==(p1vec1[2]*p1vec1[3])) {
            p1cont1++;
            f_ok($('#p1dcon11'));
        }else{
            p1cont1;
            f_no($('#p1dcon11'));
        }
        if (p1dcon12==(p1vec1[2])) {
            p1cont1++;
            f_ok($('#p1dcon12'));
        }else{
            p1cont1;
            f_no($('#p1dcon12'));
        }
        if (p1dcon13==(p1vec1[3])) {
            p1cont1++;
            f_ok($('#p1dcon13'));
        }else{
            p1cont1;
            f_no($('#p1dcon13'));
        }
        if (p1dcon14==(p1vec1[2])) {
            p1cont1++;
            f_ok($('#p1dcon14'));
        }else{
            p1cont1;
            f_no($('#p1dcon14'));
        }
        if (p1dcon15==(p1vec1[3])) {
            p1cont1++;
            f_ok($('#p1dcon15'));
        }else{
            p1cont1;
            f_no($('#p1dcon15'));
        }
        if (p1dcon16==(p1vec1[2]*p1vec1[3])) {
            p1cont1++;
            f_ok($('#p1dcon16'));
        }else{
            p1cont1;
            f_no($('#p1dcon16'));
        }

        var p1dcon21=$('#p1dcon21').val();
        var p1dcon22=$('#p1dcon22').val();
        var p1dcon23=$('#p1dcon23').val();
        var p1dcon24=$('#p1dcon24').val();
        var p1dcon25=$('#p1dcon25').val();
        var p1dcon26=$('#p1dcon26').val();
        if (p1dcon21==(p1vec1[4]*p1vec1[5])) {
            p1cont1++;
            f_ok($('#p1dcon21'));
        }else{
            p1cont1;
            f_no($('#p1dcon21'));
        }
        if (p1dcon22==(p1vec1[4])) {
            p1cont1++;
            f_ok($('#p1dcon22'));
        }else{
            p1cont1;
            f_no($('#p1dcon22'));
        }
        if (p1dcon23==(p1vec1[5])) {
            p1cont1++;
            f_ok($('#p1dcon23'));
        }else{
            p1cont1;
            f_no($('#p1dcon23'));
        }
        if (p1dcon24==(p1vec1[4])) {
            p1cont1++;
            f_ok($('#p1dcon24'));
        }else{
            p1cont1;
            f_no($('#p1dcon24'));
        }
        if (p1dcon25==(p1vec1[5])) {
            p1cont1++;
            f_ok($('#p1dcon25'));
        }else{
            p1cont1;
            f_no($('#p1dcon25'));
        }
        if (p1dcon26==(p1vec1[4]*p1vec1[5])) {
            p1cont1++;
            f_ok($('#p1dcon26'));
        }else{
            p1cont1;
            f_no($('#p1dcon26'));
        }

        var p1dcon31=$('#p1dcon31').val();
        var p1dcon32=$('#p1dcon32').val();
        var p1dcon33=$('#p1dcon33').val();
        var p1dcon34=$('#p1dcon34').val();
        var p1dcon35=$('#p1dcon35').val();
        var p1dcon36=$('#p1dcon36').val();
        if (p1dcon31==(p1vec1[6]*p1vec1[7])) {
            p1cont1++;
            f_ok($('#p1dcon31'));
        }else{
            p1cont1;
            f_no($('#p1dcon31'));
        }
        if (p1dcon32==(p1vec1[6])) {
            p1cont1++;
            f_ok($('#p1dcon32'));
        }else{
            p1cont1;
            f_no($('#p1dcon32'));
        }
        if (p1dcon33==(p1vec1[7])) {
            p1cont1++;
            f_ok($('#p1dcon33'));
        }else{
            p1cont1;
            f_no($('#p1dcon33'));
        }
        if (p1dcon34==(p1vec1[6])) {
            p1cont1++;
            f_ok($('#p1dcon34'));
        }else{
            p1cont1;
            f_no($('#p1dcon34'));
        }
        if (p1dcon35==(p1vec1[7])) {
            p1cont1++;
            f_ok($('#p1dcon35'));
        }else{
            p1cont1;
            f_no($('#p1dcon35'));
        }
        if (p1dcon36==(p1vec1[6]*p1vec1[7])) {
            p1cont1++;
            f_ok($('#p1dcon36'));
        }else{
            p1cont1;
            f_no($('#p1dcon36'));
        }

        var p1dcon41=$('#p1dcon41').val();
        var p1dcon42=$('#p1dcon42').val();
        var p1dcon43=$('#p1dcon43').val();
        var p1dcon44=$('#p1dcon44').val();
        var p1dcon45=$('#p1dcon45').val();
        var p1dcon46=$('#p1dcon46').val();
        if (p1dcon41==(p1vec1[8]*p1vec1[9])) {
            p1cont1++;
            f_ok($('#p1dcon41'));
        }else{
            p1cont1;
            f_no($('#p1dcon41'));
        }
        if (p1dcon42==(p1vec1[8])) {
            p1cont1++;
            f_ok($('#p1dcon42'));
        }else{
            p1cont1;
            f_no($('#p1dcon42'));
        }
        if (p1dcon43==(p1vec1[9])) {
            p1cont1++;
            f_ok($('#p1dcon43'));
        }else{
            p1cont1;
            f_no($('#p1dcon43'));
        }
        if (p1dcon44==(p1vec1[8])) {
            p1cont1++;
            f_ok($('#p1dcon44'));
        }else{
            p1cont1;
            f_no($('#p1dcon44'));
        }
        if (p1dcon45==(p1vec1[9])) {
            p1cont1++;
            f_ok($('#p1dcon45'));
        }else{
            p1cont1;
            f_no($('#p1dcon45'));
        }
        if (p1dcon46==(p1vec1[8]*p1vec1[9])) {
            p1cont1++;
            f_ok($('#p1dcon46'));
        }else{
            p1cont1;
            f_no($('#p1dcon46'));
        }

        var p1dcon51=$('#p1dcon51').val();
        var p1dcon52=$('#p1dcon52').val();
        var p1dcon53=$('#p1dcon53').val();
        var p1dcon54=$('#p1dcon54').val();
        var p1dcon55=$('#p1dcon55').val();
        var p1dcon56=$('#p1dcon56').val();
        if (p1dcon51==(p1vec1[10]*p1vec1[11])) {
            p1cont1++;
            f_ok($('#p1dcon51'));
        }else{
            p1cont1;
            f_no($('#p1dcon51'));
        }
        if (p1dcon52==(p1vec1[10])) {
            p1cont1++;
            f_ok($('#p1dcon52'));
        }else{
            p1cont1;
            f_no($('#p1dcon52'));
        }
        if (p1dcon53==(p1vec1[11])) {
            p1cont1++;
            f_ok($('#p1dcon53'));
        }else{
            p1cont1;
            f_no($('#p1dcon53'));
        }
        if (p1dcon54==(p1vec1[10])) {
            p1cont1++;
            f_ok($('#p1dcon54'));
        }else{
            p1cont1;
            f_no($('#p1dcon54'));
        }
        if (p1dcon55==(p1vec1[11])) {
            p1cont1++;
            f_ok($('#p1dcon55'));
        }else{
            p1cont1;
            f_no($('#p1dcon55'));
        }
        if (p1dcon56==(p1vec1[10]*p1vec1[11])) {
            p1cont1++;
            f_ok($('#p1dcon56'));
        }else{
            p1cont1;
            f_no($('#p1dcon56'));
        }
        var result1 = (p1cont1 * 7) / 36;
        cor = cor + result1;
        inc = inc + (7 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2dcon1=$('#p2dcon1').val();
        var p2dcon2=$('#p2dcon2').val();
        var p2dcon3=$('#p2dcon3').val();
        var p2dcon4=$('#p2dcon4').val();
        var p2dcon5=$('#p2dcon5').val();
        var p2dcon6=$('#p2dcon6').val();
        var p2dcon7=$('#p2dcon7').val();
        var p2dcon8=$('#p2dcon8').val();
        var p2dcon9=$('#p2dcon9').val();
        var p2dcon10=$('#p2dcon10').val();
        var p2dcon11=$('#p2dcon11').val();
        var p2cont1=0;
        if (p2dcon1=='7') {
            p2cont1++;
            f_ok($('#p2dcon1'));
        }else{
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2=='7') {
            p2cont1++;
            f_ok($('#p2dcon2'));
        }else{
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3=='7') {
            p2cont1++;
            f_ok($('#p2dcon3'));
        }else{
            p2cont1;
            f_no($('#p2dcon3'));
        }
        if (p2dcon4=='7') {
            p2cont1++;
            f_ok($('#p2dcon4'));
        }else{
            p2cont1;
            f_no($('#p2dcon4'));
        }
        if (p2dcon5=='7') {
            p2cont1++;
            f_ok($('#p2dcon5'));
        }else{
            p2cont1;
            f_no($('#p2dcon5'));
        }
        if (p2dcon6=='35') {
            p2cont1++;
            f_ok($('#p2dcon6'));
        }else{
            p2cont1;
            f_no($('#p2dcon6'));
        }
        if (p2dcon7=='5') {
            p2cont1++;
            f_ok($('#p2dcon7'));
        }else{
            p2cont1;
            f_no($('#p2dcon7'));
        }
        if (p2dcon8=='7') {
            p2cont1++;
            f_ok($('#p2dcon8'));
        }else{
            p2cont1;
            f_no($('#p2dcon8'));
        }
        if (p2dcon9=='5') {
            p2cont1++;
            f_ok($('#p2dcon9'));
        }else{
            p2cont1;
            f_no($('#p2dcon9'));
        }
        if (p2dcon10=='7') {
            p2cont1++;
            f_ok($('#p2dcon10'));
        }else{
            p2cont1;
            f_no($('#p2dcon10'));
        }
        if (p2dcon11=='35') {
            p2cont1++;
            f_ok($('#p2dcon11'));
        }else{
            p2cont1;
            f_no($('#p2dcon11'));
        }
        var result2 = (p2cont1 * 3) / 11;
        cor = cor + result2;
        inc = inc + (3 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}