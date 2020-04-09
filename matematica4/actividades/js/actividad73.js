    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=5,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
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
            compr4=compr4.split(' ');
            if (compr1=='18') {
                cor++;
                f_ok($('#compr1'));
            }else {
                inc++;
                f_no($('#compr1'));
            }
            if (compr2=='21') {
                cor++;
                f_ok($('#compr2'));
            }else {
                inc++;
                f_no($('#compr2'));
            }
            if (compr3=='7') {
                cor++;
                f_ok($('#compr3'));
            }else {
                inc++;
                f_no($('#compr3'));
            }
            var cont2=0;
            for (var i = 0; i < compr4.length; i++) {
                if (compr4[i]=='cantidad' || compr4[i]=='niños' || compr4[i]=='niñas' || compr4[i]=='asistieron') {
                    cont2++;
                }
            }
            if (cont2==4) {
                cor++;
                f_ok($('#compr4'));
            }else {
                inc++;
                f_no($('#compr4'));  
            }
            if (compr5=='32') {
                cor++;
                f_ok($('#compr5'));
            }else {
                inc++;
                f_no($('#compr5'));
            }
            
            Calculo_nota()
            
        }
        
    }