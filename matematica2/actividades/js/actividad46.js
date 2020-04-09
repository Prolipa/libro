    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=7,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var a46dcon1=$('#a46dcon1').val();
            var a46dcon2=$('#a46dcon2').val();
            var a46dcon3=$('#a46dcon3').val();
            var a46dcon4=$('#a46dcon4').val();
            var a46dcon5=$('#a46dcon5').val();
            var a46dcon6=$('#a46dcon6').val();
            var a46dcon7=$('#a46dcon7').val();
            if (a46dcon1=='2') {
                cor++;
                f_ok($('#a46dcon1'));
            }else {
                inc++;
                f_no($('#a46dcon1'));
            }
            if (a46dcon2=='3') {
                cor++;
                f_ok($('#a46dcon2'));
            }else {
                inc++;
                f_no($('#a46dcon2'));
            }
            if (a46dcon3=='suma' || a46dcon3=='adición' || a46dcon3=='adicion') {
                cor++;
                f_ok($('#a46dcon3'));
            }else {
                inc++;
                f_no($('#a46dcon3'));
            }
            if (a46dcon4=='2') {
                cor++;
                f_ok($('#a46dcon4'));
            }else {
                inc++;
                f_no($('#a46dcon4'));
            }
            if (a46dcon5=='3') {
                cor++;
                f_ok($('#a46dcon5'));
            }else {
                inc++;
                f_no($('#a46dcon5'));
            }
            if (a46dcon6=='5') {
                cor++;
                f_ok($('#a46dcon6'));
            }else {
                inc++;
                f_no($('#a46dcon6'));
            }
            if (a46dcon7=='5') {
                cor++;
                f_ok($('#a46dcon7'));
            }else {
                inc++;
                f_no($('#a46dcon7'));
            }
            Calculo_nota()
            
        }
        
    }