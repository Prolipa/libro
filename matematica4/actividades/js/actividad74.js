    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=12,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
       bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var compr1=$('#compr1').val();
            var compr2=$('#compr2').val();
            var compr3=$('#compr3').val();
            var compr4=$('#compr4').val();
            var compr5=$('#compr5').val();
            var compr6=$('#compr6').val();
            var compr7=$('#compr7').val();
            var compr8=$('#compr8').val();
            var compr9=$('#compr9').val();
            var compr10=$('#compr10').val();
            var compr11=$('#compr11').val();
            var compr12=$('#compr12').val();
            if (compr1!==compr2) {
                if (compr1=='2711' || compr1=='1479') {
                    cor++;
                    f_ok($('#compr1'));
                }else {
                    inc++;
                    f_no($('#compr1'));
                }
                if (compr2=='2711' || compr2=='1479') {
                    cor++;
                    f_ok($('#compr2'));
                }else {
                    inc++;
                    f_no($('#compr2'));
                }    
            }else {
                inc=inc+2;
                f_no($('#compr1'));
                f_no($('#compr2'));
            }
            if (compr3=='4190') {
                cor++;
                f_ok($('#compr3'));
            }else {
                inc++;
                f_no($('#compr3'));
            }
            if (compr4=='4190') {
                cor++;
                f_ok($('#compr4'));
            }else {
                inc++;
                f_no($('#compr4'));
            }
            if (compr5=='937') {
                cor++;
                f_ok($('#compr5'));
            }else {
                inc++;
                f_no($('#compr5'));
            }
            if (compr6=='3253') {
                cor++;
                f_ok($('#compr6'));
            }else {
                inc++;
                f_no($('#compr6'));
            }
            if (compr7!==compr8) {
                if (compr7=='1250' || compr7=='1870') {
                    cor++;
                    f_ok($('#compr7'));
                }else {
                    inc++;
                    f_no($('#compr7'));
                }
                if (compr8=='1250' || compr8=='1870') {
                    cor++;
                    f_ok($('#compr8'));
                }else {
                    inc++;
                    f_no($('#compr8'));
                }    
            }else {
                inc=inc+2;
                f_no($('#compr7'));
                f_no($('#compr8'));
            }
            if (compr9=='3120') {
                cor++;
                f_ok($('#compr9'));
            }else {
                inc++;
                f_no($('#compr9'));
            }
            if (compr10=='3120') {
                cor++;
                f_ok($('#compr10'));
            }else {
                inc++;
                f_no($('#compr10'));
            }
            if (compr11=='3080') {
                cor++;
                f_ok($('#compr11'));
            }else {
                inc++;
                f_no($('#compr11'));
            }
            if (compr12=='40') {
                cor++;
                f_ok($('#compr12'));
            }else {
                inc++;
                f_no($('#compr12'));
            }
            Calculo_nota()
            
        }
        
    }