    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=6,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
        var umil1= parseInt((Math.random() * 5) + 1);
        var cent1= parseInt((Math.random() * 8) + 1);
        var decen1= parseInt((Math.random() * 8) + 1);
        var uni1= parseInt((Math.random() * 8) + 1);
        for (var i = 0; i < umil1; i++) {
            v_ids.push('<img class=" um1 c_imagenes" src="img/i1_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < cent1; i++) {
            v_ids.push('<img class=" c1 c_imagenes" src="img/i2_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < decen1; i++) {
            v_ids.push('<img class=" d1 c_imagenes" src="img/i3_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < uni1; i++) {
            v_ids.push('<img class=" u1 c_imagenes" src="img/i4_p71_act76.jpg" alt="">');
        }
        $('#UM').html('').append(v_ids);
        var umil2= parseInt((Math.random() * 5) + 1);
        var cent2= parseInt((Math.random() * 8) + 1);
        var decen2= parseInt((Math.random() * 8) + 1);
        var uni2= parseInt((Math.random() * 8) + 1);
        for (var i = 0; i < umil2; i++) {
            r_ids.push('<img class=" um1 c_imagenes" src="img/i1_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < cent2; i++) {
            r_ids.push('<img class=" c1 c_imagenes" src="img/i2_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < decen2; i++) {
            r_ids.push('<img class=" d1 c_imagenes" src="img/i3_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < uni2; i++) {
            r_ids.push('<img class=" u1 c_imagenes" src="img/i4_p71_act76.jpg" alt="">');
        }
        $('#UM1').html('').append(r_ids);
        var umil3= parseInt((Math.random() * 5) + 1);
        var cent3= parseInt((Math.random() * 8) + 1);
        var decen3= parseInt((Math.random() * 8) + 1);
        var uni3= parseInt((Math.random() * 8) + 1);
        for (var i = 0; i < umil3; i++) {
            r_ids1.push('<img class=" um1 c_imagenes" src="img/i1_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < cent3; i++) {
            r_ids1.push('<img class=" c1 c_imagenes" src="img/i2_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < decen3; i++) {
            r_ids1.push('<img class=" d1 c_imagenes" src="img/i3_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < uni3; i++) {
            r_ids1.push('<img class=" u1 c_imagenes" src="img/i4_p71_act76.jpg" alt="">');
        }
        $('#UM2').html('').append(r_ids1);
        var umr1=umil1*1000;
        var umr2=umil2*1000;
        var umr3=umil3*1000;
        var cenr1=cent1*100;
        var cenr2=cent2*100;
        var cenr3=cent3*100;
        var decr1=decen1*10;
        var decr2=decen2*10;
        var decr3=decen3*10;
        var famis1=umr1+cenr1+decr1+uni1;
        var famis2=umr2+cenr2+decr2+uni2;
        var famis3=umr3+cenr3+decr3+uni3;
        $('#f1').html(famis1);
        $('#f2').html(famis2);
        $('#f3').html((famis1+famis2));
        $('#f11').html(famis1);
        $('#f12').html(famis3);
        $('#f13').html((famis1+famis3));
        if (famis1>famis2) {
            $('#f21').html(famis1);
            $('#f22').html(famis2);
            $('#f23').html((famis1-famis2));
        }else {
            $('#f21').html(famis2);
            $('#f22').html(famis1);
            $('#f23').html((famis2-famis1));
        }
        if (famis3>famis2) {
            $('#f31').html(famis3);
            $('#f32').html(famis2);
            $('#f33').html((famis3-famis2));
        }else {
            $('#f31').html(famis2);
            $('#f32').html(famis3);
            $('#f33').html((famis2-famis3));
        }
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var fam1=$('#fam1').val();
            var fam2=$('#fam2').val();
            var fam3=$('#fam3').val();
            var fams=[$('#fam4').val(),$('#fam5').val(),$('#fam6').val()];
            var fams1=[famis1,famis2,famis3];
            if (fam1==famis1) {
                cor++;
                f_ok($('#fam1'));
            }else {
                inc++;
                f_no($('#fam1'));
            }
            if (fam2==famis2) {
                cor++;
                f_ok($('#fam2'));
            }else {
                inc++;
                f_no($('#fam2'));
            }
            if (fam3==famis3) {
                cor++;
                f_ok($('#fam3'));
            }else {
                inc++;
                f_no($('#fam3'));
            }
            var c1=0;
            var c2=0;
            var c3=0;
            if (fams[0]==famis1 || fams[0]==famis2 || fams[0]==famis3) {
                c1++;
            }
            if (fams[1]==famis1 || fams[1]==famis2 || fams[1]==famis3) {
                c2++;
            }
            if (fams[2]==famis1 || fams[2]==famis2 || fams[2]==famis3) {
                c3++;
            }
            if (c1==1) {
                cor++;
                f_ok($('#fam4'));
            }else {
                inc++;
                f_no($('#fam4'));
            }
            if (c2==1) {
                cor++;
                f_ok($('#fam5'));
            }else {
                inc++;
                f_no($('#fam5'));
            }
            if (c3==1) {
                cor++;
                f_ok($('#fam6'));
            }else {
                inc++;
                f_no($('#fam6'));
            }
            Calculo_nota()
            
        }
        
    }