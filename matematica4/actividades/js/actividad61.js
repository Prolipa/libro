  var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=4,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var pnum5=$('#pnum5').val();
            var pnum6=$('#pnum6').val();
            var pnum7=$('#pnum7').val();
            var pnum8=$('#pnum8').val();
            if (pnum5 == "198") {
                cor++;
                f_ok($('#pnum5'));
            }else {
                inc++;
                f_no($('#pnum5'));
            }
            
            if (pnum6 == "219") {
                cor++;
                f_ok($('#pnum6'));
            }else {
                inc++;
                f_no($('#pnum6'));
            }
            if (pnum7 == "215") {
                cor++;
                f_ok($('#pnum7'));
            }else {
                inc++;
                f_no($('#pnum7'));
            }
            if (pnum8 == "160") {
                cor++;
                f_ok($('#pnum8'));
            }else {
                inc++;
                f_no($('#pnum8'));
            }
            Calculo_nota();
        }
        
    }