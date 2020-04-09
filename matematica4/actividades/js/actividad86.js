    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=9,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var a86ca1=$('#a86ca1').val();
            var a86ca2=$('#a86ca2').val();
            var a86ca3=$('#a86ca3').val();
            if (a86ca1=='4') {
                cor++
                f_ok($('#a86ca1'));
            }else {
                inc++;
                f_no($('#a86ca1'));
            }
            if (a86ca2=='0') {
                cor++
                f_ok($('#a86ca2'));
            }else {
                inc++;
                f_no($('#a86ca2'));
            }
            if (a86ca3=='4') {
                cor++
                f_ok($('#a86ca3'));
            }else {
                inc++;
                f_no($('#a86ca3'));
            }
            var a86ca11=$('#a86ca11').val();
            var a86ca12=$('#a86ca12').val();
            var a86ca13=$('#a86ca13').val();
            if (a86ca11=='4') {
                cor++
                f_ok($('#a86ca11'));
            }else {
                inc++;
                f_no($('#a86ca11'));
            }
            if (a86ca12=='3') {
                cor++
                f_ok($('#a86ca12'));
            }else {
                inc++;
                f_no($('#a86ca12'));
            }
            if (a86ca13=='4') {
                cor++
                f_ok($('#a86ca13'));
            }else {
                inc++;
                f_no($('#a86ca13'));
            }
            var a86ca21=$('#a86ca21').val();
            var a86ca22=$('#a86ca22').val();
            var a86ca23=$('#a86ca23').val();
            if (a86ca21=='4') {
                cor++
                f_ok($('#a86ca21'));
            }else {
                inc++;
                f_no($('#a86ca21'));
            }
            if (a86ca22=='3') {
                cor++
                f_ok($('#a86ca22'));
            }else {
                inc++;
                f_no($('#a86ca22'));
            }
            if (a86ca23=='4') {
                cor++
                f_ok($('#a86ca23'));
            }else {
                inc++;
                f_no($('#a86ca23'));
            }
            Calculo_nota()
            
        }
        
    }