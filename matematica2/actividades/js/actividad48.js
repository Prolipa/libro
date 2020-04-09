    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=14,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        var a47cimg1=[];
        var a47cimg2=[];
        var a47cimg3=[];
        var numero = parseInt((Math.random() * 5) + 1);
        var numero1 = parseInt((Math.random() * 4) + 1);
        var res1=numero+numero1;
        for (var i = 0; i < numero; i++) {
            a47cimg1.push('<img src="img/i1_p59_act48.jpg" alt="" style="mix-blend-mode: multiply;">');
        }
        for (var i = 0; i < numero1; i++) {
            a47cimg2.push('<img src="img/i1_p59_act48.jpg" alt="" style="mix-blend-mode: multiply;">');
        }
        for (var i = 0; i < res1; i++) {
            a47cimg3.push('<img src="img/i1_p59_act48.jpg" alt="" style="mix-blend-mode: multiply;">');
        }
        $('#a48im1').html(a47cimg1);
        $('#a48im2').html(a47cimg2);
        $('#a48im3').html(a47cimg3);
        var a47cimg6=[];
        var a47cimg4=[];
        var a47cimg5=[];
        var numero2 = parseInt((Math.random() * 5) + 1);
        var numero3 = parseInt((Math.random() * 4) + 1);
        var res2=numero2+numero3;
        for (var i = 0; i < numero2; i++) {
            a47cimg4.push('<img src="img/i2_p59_act48.jpg" alt="" style="mix-blend-mode: multiply;">');
        }
        for (var i = 0; i < numero3; i++) {
            a47cimg5.push('<img src="img/i2_p59_act48.jpg" alt="" style="mix-blend-mode: multiply;">');
        }
        for (var i = 0; i < res2; i++) {
            a47cimg6.push('<img src="img/i2_p59_act48.jpg" alt="" style="mix-blend-mode: multiply;">');
        }
        $('#a48im11').html(a47cimg4);
        $('#a48im12').html(a47cimg5);
        $('#a48im13').html(a47cimg6);

        var a47cimg7=[];
        var a47cimg8=[];
        var numero4 = parseInt((Math.random() * 5) + 1);
        var numero5 = parseInt((Math.random() * 4) + 1);
        
        for (var i = 0; i < numero4; i++) {
            a47cimg7.push('<img src="img/i3_p59_act48.jpg" alt="" style="mix-blend-mode: multiply;" width = "25px">');
        }
        for (var i = 0; i < numero5; i++) {
            a47cimg8.push('<img src="img/i4_p59_act48.jpg" alt="" style="mix-blend-mode: multiply;" width = "25px">');
        }
        $('#a48im21').html(a47cimg7);
        $('#a48im22').html(a47cimg8);
        var a47cimg9=[];
        var a47cimg10=[];
        var numero6 = parseInt((Math.random() * 5) + 1);
        var numero7 = parseInt((Math.random() * 4) + 1);
        
        for (var i = 0; i < numero6; i++) {
            a47cimg9.push('<img src="img/i5_p59_act48.jpg" alt="" style="mix-blend-mode: multiply;" width = "25px">');
        }
        for (var i = 0; i < numero7; i++) {
            a47cimg10.push('<img src="img/i6_p59_act48.jpg" alt="" style="mix-blend-mode: multiply;" width = "25px">');
        }
        $('#a48im31').html(a47cimg9);
        $('#a48im32').html(a47cimg10);
        $('#a47dcon21').val(numero4);
        $('#a47dcon22').val(numero5);
        $('#a47dcon24').val(numero4);
        $('#a47dcon25').val(numero5);
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var a47dcon1=$('#a47dcon1').val();
            var a47dcon2=$('#a47dcon2').val();
            var a47dcon3=$('#a47dcon3').val();
            var a47dcon11=$('#a47dcon11').val();
            var a47dcon12=$('#a47dcon12').val();
            var a47dcon13=$('#a47dcon13').val();
            if (a47dcon1==numero) {
                cor++;
                f_ok($('#a47dcon1'));
            }else {
                inc++;
                f_no($('#a47dcon1'));
            }
            if (a47dcon2==numero1) {
                cor++;
                f_ok($('#a47dcon2'));
            }else {
                inc++;
                f_no($('#a47dcon2'));
            }
            if (a47dcon3==res1) {
                cor++;
                f_ok($('#a47dcon3'));
            }else {
                inc++;
                f_no($('#a47dcon3'));
            }
            if (a47dcon11==numero2) {
                cor++;
                f_ok($('#a47dcon11'));
            }else {
                inc++;
                f_no($('#a47dcon11'));
            }
            if (a47dcon12==numero3) {
                cor++;
                f_ok($('#a47dcon12'));
            }else {
                inc++;
                f_no($('#a47dcon12'));
            }
            if (a47dcon13==res2) {
                cor++;
                f_ok($('#a47dcon13'));
            }else {
                inc++;
                f_no($('#a47dcon13'));
            }

            var a47dcon23=$('#a47dcon23').val();
            var a47dcon26=$('#a47dcon26').val();
            if (a47dcon23==(numero4+numero5)) {
                cor++;
                f_ok($('#a47dcon23'));
            }else {
                inc++;
                f_no($('#a47dcon23'));
            }
            if (a47dcon26==(numero4+numero5)) {
                cor++;
                f_ok($('#a47dcon26'));
            }else {
                inc++;
                f_no($('#a47dcon26'));
            }
            var a47dcon31=$('#a47dcon31').val();
            var a47dcon32=$('#a47dcon32').val();
            var a47dcon33=$('#a47dcon33').val();
            var a47dcon34=$('#a47dcon34').val();
            var a47dcon35=$('#a47dcon35').val();
            var a47dcon36=$('#a47dcon36').val();
            if (a47dcon31==(numero6)) {
                cor++;
                f_ok($('#a47dcon31'));
            }else {
                inc++;
                f_no($('#a47dcon31'));
            }
            if (a47dcon32==(numero7)) {
                cor++;
                f_ok($('#a47dcon32'));
            }else {
                inc++;
                f_no($('#a47dcon32'));
            }
            if (a47dcon33==(numero6+numero7)) {
                cor++;
                f_ok($('#a47dcon33'));
            }else {
                inc++;
                f_no($('#a47dcon33'));
            }
            if (a47dcon34==(numero6)) {
                cor++;
                f_ok($('#a47dcon34'));
            }else {
                inc++;
                f_no($('#a47dcon34'));
            }
            if (a47dcon35==(numero7)) {
                cor++;
                f_ok($('#a47dcon35'));
            }else {
                inc++;
                f_no($('#a47dcon35'));
            }
            if (a47dcon36==(numero6+numero7)) {
                cor++;
                f_ok($('#a47dcon36'));
            }else {
                inc++;
                f_no($('#a47dcon36'));
            }
            Calculo_nota()
            
        }
    }
