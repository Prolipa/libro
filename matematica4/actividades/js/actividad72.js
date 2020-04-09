    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=9,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
       bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var prohis1=$('#prohis1').val();
            var prohis2=$('#prohis2').val();
            var prohis3=$('#prohis3').val();
            var prohis4=$('#prohis4').val();
            var prohis5=$('#prohis5').val();
            var prohis6=$('#prohis6').val();
            var prohis7=$('#prohis7').val();
            var prohis8=$('#prohis8').val();
            var prohis9=$('#prohis9').val();
            if (prohis1=='1926') {
                cor++;
                f_ok($('#prohis1'));
            }else {
                inc++;
                f_no($('#prohis1'));
            }
            if (prohis2=='1876') {
                cor++;
                f_ok($('#prohis2'));
            }else {
                inc++;
                f_no($('#prohis2'));
            }
            if (prohis3=='50') {
                cor++;
                f_ok($('#prohis3'));
            }else {
                inc++;
                f_no($('#prohis3'));
            }
            if (prohis4=='1450' || prohis4=='395') {
                cor++;
                f_ok($('#prohis4'));
            }else {
                inc++;
                f_no($('#prohis4'));
            }
            if (prohis5=='395' || prohis5=='1450') {
                cor++;
                f_ok($('#prohis5'));
            }else {
                inc++;
                f_no($('#prohis5'));
            }
            if (prohis6=='1845') {
                cor++;
                f_ok($('#prohis6'));
            }else {
                inc++;
                f_no($('#prohis6'));
            }
            if (prohis7=='1895') {
                cor++;
                f_ok($('#prohis7'));
            }else {
                inc++;
                f_no($('#prohis7'));
            }
            if (prohis8=='1593') {
                cor++;
                f_ok($('#prohis8'));
            }else {
                inc++;
                f_no($('#prohis8'));
            }
            if (prohis9=='302') {
                cor++;
                f_ok($('#prohis9'));
            }else {
                inc++;
                f_no($('#prohis9'));
            }
            Calculo_nota()
            
        }
        
    }