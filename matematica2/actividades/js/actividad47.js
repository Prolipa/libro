    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=6,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        var a47cimg1=[];
        var a47cimg2=[];
        var numero = parseInt((Math.random() * 5) + 1);
        var numero1 = parseInt((Math.random() * 4) + 1);
        for (var i = 0; i < numero; i++) {
            a47cimg1.push('<img src="img/i1_p59_act47.jpg" alt="" style="mix-blend-mode: multiply;">');
        }
        for (var i = 0; i < numero1; i++) {
            a47cimg2.push('<img src="img/i1_p59_act47.jpg" alt="" style="mix-blend-mode: multiply;">');
        }
        $('#a47cim1').html(a47cimg1);
        $('#a47cim2').html(a47cimg2);

        var a47cimg3=[];
        var a47cimg4=[];
        var numero2 = parseInt((Math.random() * 5) + 1);
        var numero3 = parseInt((Math.random() * 4) + 1);
        for (var i = 0; i < numero2; i++) {
            a47cimg3.push('<img src="img/i2_p59_act47.jpg" alt="" style="mix-blend-mode: multiply;">');
        }
        for (var i = 0; i < numero3; i++) {
            a47cimg4.push('<img src="img/i2_p59_act47.jpg" alt="" style="mix-blend-mode: multiply;">');
        }
        $('#a47cim11').html(a47cimg3);
        $('#a47cim12').html(a47cimg4);
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var a47dcon1=$('#a47dcon1').val();
            var a47dcon2=$('#a47dcon2').val();
            var a47dcon3=$('#a47dcon3').val();
            var a47dcon4=$('#a47dcon4').val();
            var a47dcon5=$('#a47dcon5').val();
            var a47dcon6=$('#a47dcon6').val();
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
            if (a47dcon3==(numero+numero1)) {
                cor++;
                f_ok($('#a47dcon3'));
            }else {
                inc++;
                f_no($('#a47dcon3'));
            }

            if (a47dcon4==numero2) {
                cor++;
                f_ok($('#a47dcon4'));
            }else {
                inc++;
                f_no($('#a47dcon4'));
            }
            if (a47dcon5==numero3) {
                cor++;
                f_ok($('#a47dcon5'));
            }else {
                inc++;
                f_no($('#a47dcon5'));
            }
            if (a47dcon6==(numero2+numero3)) {
                cor++;
                f_ok($('#a47dcon6'));
            }else {
                inc++;
                f_no($('#a47dcon6'));
            }
            Calculo_nota()
            
        }
        
    }