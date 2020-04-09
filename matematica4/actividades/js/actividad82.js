    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=3,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
       bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var angu1=$('#angu1').val();
            var angu2=$('#angu2').val();
            var angu3=$('#angu3').val();
            
            if (angu1=='ángulo agudo' || angu1=='angulo agudo') {
                cor++;
                f_ok($('#angu1'));
            }else {
                inc++;
                f_no($('#angu1'));
            }
            if (angu2=='ángulo recto' || angu2=='angulo recto') {
                cor++;
                f_ok($('#angu2'));
            }else {
                inc++;
                f_no($('#angu2'));
            }
            if (angu3=='ángulo obtuso' || angu3=='angulo obtuso') {
                cor++;
                f_ok($('#angu3'));
            }else {
                inc++;
                f_no($('#angu3'));
            }
            Calculo_nota()
            
        }
        
    }