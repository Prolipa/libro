var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 8,
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
    var p1n1 = (Math.floor(Math.random() * 400) + 100);
    var p1n2 = (Math.floor(Math.random() * 400) + 100);
    var p1n3 = (Math.floor(Math.random() * 400) + 100);
    var p1n4 = (Math.floor(Math.random() * 400) + 100);
    var p1n5=(Math.floor(Math.random() * 600) + 100);
    var p1n6=(Math.floor(Math.random() * 600) + 100);
    if (p1n5>p1n6) {
        p1n5;
        p1n6;
    }else{
        var p1c1=p1n5;
        var p1c2=p1n6;
        p1n5=p1c2;
        p1n6=p1c1;
    }
    var p1n7=(Math.floor(Math.random() * 600) + 100);
    var p1n8=(Math.floor(Math.random() * 600) + 100);
    if (p1n7>p1n8) {
        p1n7;
        p1n8;
    }else{
        var p1c3=p1n7;
        var p1c4=p1n8;
        p1n7=p1c4;
        p1n8=p1c3;
    }
    var p1n9 = (Math.floor(Math.random() * 400) + 100);
    var p1n10 = (Math.floor(Math.random() * 400) + 100);
    var p1n11 = (Math.floor(Math.random() * 400) + 100);
    var p1n12 = (Math.floor(Math.random() * 400) + 100);
    var p1n13=(Math.floor(Math.random() * 600) + 100);
    var p1n14=(Math.floor(Math.random() * 600) + 100);
    if (p1n13>p1n14) {
        p1n13;
        p1n14;
    }else{
        var p1c1=p1n13;
        var p1c2=p1n14;
        p1n13=p1c2;
        p1n14=p1c1;
    }
    var p1n15=(Math.floor(Math.random() * 600) + 100);
    var p1n16=(Math.floor(Math.random() * 600) + 100);
    if (p1n15>p1n16) {
        p1n15;
        p1n16;
    }else{
        var p1c3=p1n15;
        var p1c4=p1n16;
        p1n15=p1c4;
        p1n16=p1c3;
    }
    var p1sp1=p1n1.toString().split('');
    $('#nlrd0').val(p1sp1[0]);
    $('#nlrd0').attr('disabled','true');
    $('#nlrd1').val(p1sp1[1]);
    $('#nlrd1').attr('disabled','true');
    $('#nlrd2').val(p1sp1[2]);
    $('#nlrd2').attr('disabled','true');
    var p1sp2=p1n2.toString().split('');
    $('#nlrd3').val(p1sp2[0]);
    $('#nlrd3').attr('disabled','true');
    $('#nlrd4').val(p1sp2[1]);
    $('#nlrd4').attr('disabled','true');
    $('#nlrd5').val(p1sp2[2]);
    $('#nlrd5').attr('disabled','true');
    var p1sp3=p1n3.toString().split('');
    $('#nlrd30').val(p1sp3[0]);
    $('#nlrd30').attr('disabled','true');
    $('#nlrd31').val(p1sp3[1]);
    $('#nlrd31').attr('disabled','true');
    $('#nlrd32').val(p1sp3[2]);
    $('#nlrd32').attr('disabled','true');
    var p1sp4=p1n4.toString().split('');
    $('#nlrd33').val(p1sp4[0]);
    $('#nlrd33').attr('disabled','true');
    $('#nlrd34').val(p1sp4[1]);
    $('#nlrd34').attr('disabled','true');
    $('#nlrd35').val(p1sp4[2]);
    $('#nlrd35').attr('disabled','true');
    var p1sp1=p1n5.toString().split('');
    $('#nlrd10').val(p1sp1[0]);
    $('#nlrd10').attr('disabled','true');
    $('#nlrd11').val(p1sp1[1]);
    $('#nlrd11').attr('disabled','true');
    $('#nlrd12').val(p1sp1[2]);
    $('#nlrd12').attr('disabled','true');
    var p1sp6=p1n6.toString().split('');
    $('#nlrd13').val(p1sp6[0]);
    $('#nlrd13').attr('disabled','true');
    $('#nlrd14').val(p1sp6[1]);
    $('#nlrd14').attr('disabled','true');
    $('#nlrd15').val(p1sp6[2]);
    $('#nlrd15').attr('disabled','true');
    var p1sp7=p1n7.toString().split('');
    $('#nlrd20').val(p1sp7[0]);
    $('#nlrd20').attr('disabled','true');
    $('#nlrd21').val(p1sp7[1]);
    $('#nlrd21').attr('disabled','true');
    $('#nlrd22').val(p1sp7[2]);
    $('#nlrd22').attr('disabled','true');
    var p1sp8=p1n8.toString().split('');
    $('#nlrd23').val(p1sp8[0]);
    $('#nlrd23').attr('disabled','true');
    $('#nlrd24').val(p1sp8[1]);
    $('#nlrd24').attr('disabled','true');
    $('#nlrd25').val(p1sp8[2]);
    $('#nlrd25').attr('disabled','true');
    var p1sp9=p1n9.toString().split('');
    $('#nlrd40').val(p1sp9[0]);
    $('#nlrd40').attr('disabled','true');
    $('#nlrd41').val(p1sp9[1]);
    $('#nlrd41').attr('disabled','true');
    $('#nlrd42').val(p1sp9[2]);
    $('#nlrd42').attr('disabled','true');
    var p1sp10=p1n10.toString().split('');
    $('#nlrd43').val(p1sp10[0]);
    $('#nlrd43').attr('disabled','true');
    $('#nlrd44').val(p1sp10[1]);
    $('#nlrd44').attr('disabled','true');
    $('#nlrd45').val(p1sp10[2]);
    $('#nlrd45').attr('disabled','true');
    var p1sp11=p1n11.toString().split('');
    $('#nlrd70').val(p1sp11[0]);
    $('#nlrd70').attr('disabled','true');
    $('#nlrd71').val(p1sp11[1]);
    $('#nlrd71').attr('disabled','true');
    $('#nlrd72').val(p1sp11[2]);
    $('#nlrd72').attr('disabled','true');
    var p1sp12=p1n12.toString().split('');
    $('#nlrd73').val(p1sp12[0]);
    $('#nlrd73').attr('disabled','true');
    $('#nlrd74').val(p1sp12[1]);
    $('#nlrd74').attr('disabled','true');
    $('#nlrd75').val(p1sp12[2]);
    $('#nlrd75').attr('disabled','true');
    var p1sp13=p1n13.toString().split('');
    $('#nlrd50').val(p1sp13[0]);
    $('#nlrd50').attr('disabled','true');
    $('#nlrd51').val(p1sp13[1]);
    $('#nlrd51').attr('disabled','true');
    $('#nlrd52').val(p1sp13[2]);
    $('#nlrd52').attr('disabled','true');
    var p1sp14=p1n14.toString().split('');
    $('#nlrd53').val(p1sp14[0]);
    $('#nlrd53').attr('disabled','true');
    $('#nlrd54').val(p1sp14[1]);
    $('#nlrd54').attr('disabled','true');
    $('#nlrd55').val(p1sp14[2]);
    $('#nlrd55').attr('disabled','true');
    var p1sp15=p1n15.toString().split('');
    $('#nlrd60').val(p1sp15[0]);
    $('#nlrd60').attr('disabled','true');
    $('#nlrd61').val(p1sp15[1]);
    $('#nlrd61').attr('disabled','true');
    $('#nlrd62').val(p1sp15[2]);
    $('#nlrd62').attr('disabled','true');
    var p1sp16=p1n16.toString().split('');
    $('#nlrd63').val(p1sp16[0]);
    $('#nlrd63').attr('disabled','true');
    $('#nlrd64').val(p1sp16[1]);
    $('#nlrd64').attr('disabled','true');
    $('#nlrd65').val(p1sp16[2]);
    $('#nlrd65').attr('disabled','true');
    bt_comprobar.addEventListener("click", f_comprobar);
    
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var num1 = p1n1;
        var num2 = p1n2;
        var num3 = p1n3;
        var num4 = p1n4;
        var num5 = p1n5;
        var num6 = p1n6;
        var num7 = p1n7;
        var num8 = p1n8;
        var num9 = p1n9;
        var num10 = p1n10;
        var num11 = p1n11;
        var num12 = p1n12;
        var num13 = p1n13;
        var num14 = p1n14;
        var num15 = p1n15;
        var num16 = p1n16;
        var dif = parseInt(num1) + parseInt(num2);
        var res =
            $("#nlrd" + [6] + "").val() +
            $("#nlrd" + [7] + "").val() +
            $("#nlrd" + [8] + "").val();

        if (dif == res) {
            cor++;
            f_ok($("#nlrd6"));
            f_ok($("#nlrd7"));
            f_ok($("#nlrd8"));
        } else {
            inc++
            f_no($("#nlrd6"));
            f_no($("#nlrd7"));
            f_no($("#nlrd8"));
        }
        var dif1 = parseInt(num3) + parseInt(num4);
        var res1 =
            $("#nlrd3" + [6] + "").val() +
            $("#nlrd3" + [7] + "").val() +
            $("#nlrd3" + [8] + "").val();

        if (dif1 == res1) {
            cor++;
            f_ok($("#nlrd36"));
            f_ok($("#nlrd37"));
            f_ok($("#nlrd38"));
        } else {
            inc++
            f_no($("#nlrd36"));
            f_no($("#nlrd37"));
            f_no($("#nlrd38"));
        }
        var dif2 = parseInt(num5) - parseInt(num6);
        var res2 =
            $("#nlrd1" + [6] + "").val() +
            $("#nlrd1" + [7] + "").val() +
            $("#nlrd1" + [8] + "").val();

        if (dif2 == res2) {
            cor++;
            f_ok($("#nlrd16"));
            f_ok($("#nlrd17"));
            f_ok($("#nlrd18"));
        } else {
            inc++
            f_no($("#nlrd16"));
            f_no($("#nlrd17"));
            f_no($("#nlrd18"));
        }
        var dif3 = parseInt(num7) - parseInt(num8);
        var res3 =
            $("#nlrd2" + [6] + "").val() +
            $("#nlrd2" + [7] + "").val() +
            $("#nlrd2" + [8] + "").val();

        if (dif3 == res3) {
            cor++;
            f_ok($("#nlrd26"));
            f_ok($("#nlrd27"));
            f_ok($("#nlrd28"));
        } else {
            inc++
            f_no($("#nlrd26"));
            f_no($("#nlrd27"));
            f_no($("#nlrd28"));
        }
        var dif4 = parseInt(num9) + parseInt(num10);
        var res4 =
            $("#nlrd4" + [6] + "").val() +
            $("#nlrd4" + [7] + "").val() +
            $("#nlrd4" + [8] + "").val();

        if (dif4 == res4) {
            cor++;
            f_ok($("#nlrd46"));
            f_ok($("#nlrd47"));
            f_ok($("#nlrd48"));
        } else {
            inc++
            f_no($("#nlrd46"));
            f_no($("#nlrd47"));
            f_no($("#nlrd48"));
        }
        var dif5 = parseInt(num11) + parseInt(num12);
        var res5 =
            $("#nlrd7" + [6] + "").val() +
            $("#nlrd7" + [7] + "").val() +
            $("#nlrd7" + [8] + "").val();

        if (dif5 == res5) {
            cor++;
            f_ok($("#nlrd76"));
            f_ok($("#nlrd77"));
            f_ok($("#nlrd78"));
        } else {
            inc++
            f_no($("#nlrd76"));
            f_no($("#nlrd77"));
            f_no($("#nlrd78"));
        }
        var dif6 = parseInt(num13) - parseInt(num14);
        var res6 =
            $("#nlrd5" + [6] + "").val() +
            $("#nlrd5" + [7] + "").val() +
            $("#nlrd5" + [8] + "").val();

        if (dif6 == res6) {
            cor++;
            f_ok($("#nlrd56"));
            f_ok($("#nlrd57"));
            f_ok($("#nlrd58"));
        } else {
            inc++
            f_no($("#nlrd56"));
            f_no($("#nlrd57"));
            f_no($("#nlrd58"));
        }
        var dif7 = parseInt(num15) - parseInt(num16);
        var res7 =
            $("#nlrd6" + [6] + "").val() +
            $("#nlrd6" + [7] + "").val() +
            $("#nlrd6" + [8] + "").val();

        if (dif7 == res7) {
            cor++;
            f_ok($("#nlrd66"));
            f_ok($("#nlrd67"));
            f_ok($("#nlrd68"));
        } else {
            inc++
            f_no($("#nlrd66"));
            f_no($("#nlrd67"));
            f_no($("#nlrd68"));
        }
        Calculo_nota();
    }
}