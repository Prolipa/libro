var n1=0,sum_total=0,cont=0,ejer=1,itemsT=24,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
 function f_iniciar() {
    var numero = parseInt((Math.random() * 9) + 1);
    var numero1 = parseInt((Math.random() * 9) + 1);
    var auxr1=0;
    var auxr2=0;
    var auxr3=0;
    var a51cim1=[];
    if (numero>numero1) {
        auxr1=numero;
        auxr2=numero1;
        auxr3=numero-numero1;
    }else{
        auxr1=numero1;
        auxr2=numero;
        auxr3=numero1-numero;
    }
    for (var i = 0; i < auxr3; i++) {
        a51cim1.push('<img  src="img/i1_p61_act51.jpg" alt="">');
    }
    for (var i = 0; i < auxr2; i++) {
        a51cim1.push('<img  src="img/i2_p61_act51.jpg" alt="">');
    }
    $('#a51im1').html(a51cim1);

    var numero2 = parseInt((Math.random() * 9) + 1);
    var numero3 = parseInt((Math.random() * 9) + 1);
    var auxr4=0;
    var auxr5=0;
    var auxr6=0;
    var a51cim2=[];
    if (numero2>numero3) {
        auxr4=numero2;
        auxr5=numero3;
        auxr6=numero2-numero3;
    }else{
        auxr4=numero3;
        auxr5=numero2;
        auxr6=numero3-numero2;
    }
    for (var i = 0; i < auxr6; i++) {
        a51cim2.push('<img  src="img/i3_p61_act51.jpg" alt="">');
    }
    for (var i = 0; i < auxr5; i++) {
        a51cim2.push('<img  src="img/i4_p61_act51.jpg" alt="">');
    }
    $('#a51im2').html(a51cim2);

    var numero4 = parseInt((Math.random() * 9) + 1);
    var numero5 = parseInt((Math.random() * 9) + 1);
    var auxr7=0;
    var auxr8=0;
    var auxr9=0;
    var a51cim3=[];
    if (numero4>numero5) {
        auxr7=numero4;
        auxr8=numero5;
        auxr9=numero4-numero5;
    }else{
        auxr7=numero5;
        auxr8=numero4;
        auxr9=numero5-numero4;
    }
    for (var i = 0; i < auxr9; i++) {
        a51cim3.push('<img  src="img/i5_p61_act51.jpg" alt="">');
    }
    for (var i = 0; i < auxr8; i++) {
        a51cim3.push('<img  src="img/i6_p61_act51.jpg" alt="">');
    }
    $('#a51im3').html(a51cim3);

    var numero6 = parseInt((Math.random() * 9) + 1);
    var numero7 = parseInt((Math.random() * 9) + 1);
    var auxr10=0;
    var auxr11=0;
    var auxr12=0;
    var a51cim4=[];
    if (numero6>numero7) {
        auxr10=numero6;
        auxr11=numero7;
        auxr12=numero6-numero7;
    }else{
        auxr10=numero7;
        auxr11=numero6;
        auxr12=numero7-numero6;
    }
    for (var i = 0; i < auxr12; i++) {
        a51cim4.push('<img  src="img/i7_p61_act51.jpg" alt="">');
    }
    for (var i = 0; i < auxr11; i++) {
        a51cim4.push('<img  src="img/i8_p61_act51.jpg" alt="">');
    }
    $('#a51im4').html(a51cim4);

    var numero8 = parseInt((Math.random() * 9) + 1);
    var numero9 = parseInt((Math.random() * 9) + 1);
    var auxr13=0;
    var auxr14=0;
    var auxr15=0;
    var a51cim5=[];
    if (numero8>numero9) {
        auxr13=numero8;
        auxr14=numero9;
        auxr15=numero8-numero9;
    }else{
        auxr13=numero9;
        auxr14=numero8;
        auxr15=numero9-numero8;
    }
    for (var i = 0; i < auxr15; i++) {
        a51cim5.push('<img  src="img/i9_p61_act51.jpg" alt="">');
    }
    for (var i = 0; i < auxr14; i++) {
        a51cim5.push('<img  src="img/i10_p61_act51.jpg" alt="">');
    }
    $('#a51im5').html(a51cim5);
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a51dcon1 =$('#a51dcon1').val();
        var a51dcon2 =$('#a51dcon2').val();
        var a51dcon3 =$('#a51dcon3').val();
        var a51dcon4 =$('#a51dcon4').val();
        var a51dcon5 =$('#a51dcon5').val();
        var a51dcon6 =$('#a51dcon6').val();
        if (a51dcon1==auxr1) {
            cor++;
            f_ok($('#a51dcon1'));
        }else {
            inc++;
            f_no($('#a51dcon1'));
        }
        if (a51dcon2==auxr2) {
            cor++;
            f_ok($('#a51dcon2'));
        }else {
            inc++;
            f_no($('#a51dcon2'));
        }
        if (parseInt(a51dcon3)==auxr3) {
            cor++;
            f_ok($('#a51dcon3'));
        }else {
            inc++;
            f_no($('#a51dcon3'));
        }
        if (a51dcon4==auxr4) {
            cor++;
            f_ok($('#a51dcon4'));
        }else {
            inc++;
            f_no($('#a51dcon4'));
        }
        if (a51dcon5==auxr5) {
            cor++;
            f_ok($('#a51dcon5'));
        }else {
            inc++;
            f_no($('#a51dcon5'));
        }
        if (parseInt(a51dcon6) ==auxr6) {
            cor++;
            f_ok($('#a51dcon6'));
        }else {
            inc++;
            f_no($('#a51dcon6'));
        }

        var a51dcon11 =$('#a51dcon11').val();
        var a51dcon12 =$('#a51dcon12').val();
        var a51dcon13 =$('#a51dcon13').val();
        var a51dcon14 =$('#a51dcon14').val();
        var a51dcon15 =$('#a51dcon15').val();
        var a51dcon16 =$('#a51dcon16').val();
        if (parseInt(a51dcon11) ==auxr7) {
            cor++;
            f_ok($('#a51dcon11'));
        }else {
            inc++;
            f_no($('#a51dcon11'));
        }
        if (parseInt(a51dcon12) ==auxr8) {
            cor++;
            f_ok($('#a51dcon12'));
        }else {
            inc++;
            f_no($('#a51dcon12'));
        }
        if (parseInt(a51dcon13) ==auxr9) {
            cor++;
            f_ok($('#a51dcon13'));
        }else {
            inc++;
            f_no($('#a51dcon13'));
        }
        if (parseInt(a51dcon14) ==auxr7) {
            cor++;
            f_ok($('#a51dcon14'));
        }else {
            inc++;
            f_no($('#a51dcon14'));
        }
        if (parseInt(a51dcon15) ==auxr8) {
            cor++;
            f_ok($('#a51dcon15'));
        }else {
            inc++;
            f_no($('#a51dcon15'));
        }
        if (parseInt(a51dcon16) ==auxr9) {
            cor++;
            f_ok($('#a51dcon16'));
        }else {
            inc++;
            f_no($('#a51dcon16'));
        }

        var a51dcon21 =$('#a51dcon21').val();
        var a51dcon22 =$('#a51dcon22').val();
        var a51dcon23 =$('#a51dcon23').val();
        var a51dcon24 =$('#a51dcon24').val();
        var a51dcon25 =$('#a51dcon25').val();
        var a51dcon26 =$('#a51dcon26').val();
        if (parseInt(a51dcon21) ==auxr10) {
            cor++;
            f_ok($('#a51dcon21'));
        }else {
            inc++;
            f_no($('#a51dcon21'));
        }
        if (parseInt(a51dcon22) ==auxr11) {
            cor++;
            f_ok($('#a51dcon22'));
        }else {
            inc++;
            f_no($('#a51dcon22'));
        }
        if (parseInt(a51dcon23) ==auxr12) {
            cor++;
            f_ok($('#a51dcon23'));
        }else {
            inc++;
            f_no($('#a51dcon23'));
        }
        if (parseInt(a51dcon24) ==auxr10) {
            cor++;
            f_ok($('#a51dcon24'));
        }else {
            inc++;
            f_no($('#a51dcon24'));
        }
        if (parseInt(a51dcon25) ==auxr11) {
            cor++;
            f_ok($('#a51dcon25'));
        }else {
            inc++;
            f_no($('#a51dcon25'));
        }
        if (parseInt(a51dcon26) ==auxr12) {
            cor++;
            f_ok($('#a51dcon26'));
        }else {
            inc++;
            f_no($('#a51dcon26'));
        }

        var a51dcon31 =$('#a51dcon31').val();
        var a51dcon32 =$('#a51dcon32').val();
        var a51dcon33 =$('#a51dcon33').val();
        var a51dcon34 =$('#a51dcon34').val();
        var a51dcon35 =$('#a51dcon35').val();
        var a51dcon36 =$('#a51dcon36').val();
        if (parseInt(a51dcon31) ==auxr13) {
            cor++;
            f_ok($('#a51dcon31'));
        }else {
            inc++;
            f_no($('#a51dcon31'));
        }
        if (parseInt(a51dcon32) ==auxr14) {
            cor++;
            f_ok($('#a51dcon32'));
        }else {
            inc++;
            f_no($('#a51dcon32'));
        }
        if (parseInt(a51dcon33) ==auxr15) {
            cor++;
            f_ok($('#a51dcon33'));
        }else {
            inc++;
            f_no($('#a51dcon33'));
        }
        if (parseInt(a51dcon34) ==auxr13) {
            cor++;
            f_ok($('#a51dcon34'));
        }else {
            inc++;
            f_no($('#a51dcon34'));
        }
        if (parseInt(a51dcon35) ==auxr14) {
            cor++;
            f_ok($('#a51dcon35'));
        }else {
            inc++;
            f_no($('#a51dcon35'));
        }
        if (parseInt(a51dcon36) ==auxr15) {
            cor++;
            f_ok($('#a51dcon36'));
        }else {
            inc++;
            f_no($('#a51dcon36'));
        }
        Calculo_nota();
   }
}