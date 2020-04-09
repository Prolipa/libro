    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=2,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var a87pr1=$('#a87pr1').val();
            var a87pr2=$('#a87pr2').val();
                a87pr1=a87pr1.split(' ');
                a87pr2=a87pr2.split(' ');
            var a87cont1=0;
            for (var i = 0; i < a87pr1.length; i++) {
                if (a87pr1[i]=='cuadrada.' || a87pr1[i]=='cuadrada' ||a87pr1[i]=='cuadrado' || a87pr1[i]=='cuadrado.') {
                    a87cont1++;
                    
                }
            }
            if (a87cont1=='1') {
                cor++;
                f_ok($('#a87pr1'));
            }else {
                inc++;
                f_no($('#a87pr1'));
            }
            var a87cont2=0;
            for (var i = 0; i < a87pr2.length; i++) {
                if (a87pr2[i]=='lados' || a87pr2[i]=='iguales.' ||a87pr2[i]=='iguales') {
                    a87cont2++;
                    
                }
            }
            if (a87cont2=='2') {
                cor++;
                f_ok($('#a87pr2'));
            }else {
                inc++;
                f_no($('#a87pr2'));
            }
            Calculo_nota()
            
        }
        
    }