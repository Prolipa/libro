    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=7,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
       
       bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var ger1=$('#ger1').val();
            var rut1=$('#rut1').val();
            var rut2=$('#rut2').val();
            var rut3=$('#rut3').val();
            var rut4=$('#rut4').val();
            var rut5=$('#rut5').val();
            var rut6=$('#rut6').val();
            var rut7=$('#rut7').val();
            if (ger1 == "5") {
                cor++;
                f_ok($('#ger1'));
            }else {
                inc++;
                f_no($('#ger1'));
            }
            
            if (rut2 == "45") {
                cor++;
                f_ok($('#rut2'));
            }else {
                inc++;
                f_no($('#rut2'));
            }
            if (rut3 == "40") {
                cor++;
                f_ok($('#rut3'));
            }else {
                inc++;
                f_no($('#rut3'));
            }
            if (rut4 == "35") {
                cor++;
                f_ok($('#rut4'));
            }else {
                inc++;
                f_no($('#rut4'));
            }
            if (rut5 == "30") {
                cor++;
                f_ok($('#rut5'));
            }else {
                inc++;
                f_no($('#rut5'));
            }
            if (rut6 == "25") {
                cor++;
                f_ok($('#rut6'));
            }else {
                inc++;
                f_no($('#rut6'));
            }
            if (rut7 == "20") {
                cor++;
                f_ok($('#rut7'));
            }else {
                inc++;
                f_no($('#rut7'));
            }
            Calculo_nota();
        }
        
    }