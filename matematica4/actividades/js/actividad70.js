    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=7,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var reci1=$('#reci1').val();
            var reci2=$('#reci2').val();
            var reci3=$('#reci3').val();
            var reci4=$('#reci4').val();
            var reci5=$('#reci5').val();
            var reci6=$('#reci6').val();
            var reci7=$('#reci7').val();
            if (reci1=='3950') {
                cor++;
                f_ok($('#reci1'));
            }else {
                inc++;
                f_no($('#reci1'));
            }
            if (reci2=='3648') {
                cor++;
                f_ok($('#reci2'));
            }else {
                inc++;
                f_no($('#reci2'));
            }
            var rv=reci3.split(' ');
            var c=0;
            for (var i = 0 ; i < rv.length; i++) {
                if (rv[i]=='sustracción.' || rv[i]=='sustracción' || rv[i]=='sustraccion' || rv[i]=='resta.' || rv[i]=='resta') {
                    c++;
                }
            }
            if (c=='1') {
                cor++;
                f_ok($('#reci3'));
            }else {
                inc++;
                f_no($('#reci3'));
            }
            if (reci4=='3950') {
                cor++;
                f_ok($('#reci4'));
            }else {
                inc++;
                f_no($('#reci4'));
            }
            if (reci5=='3648') {
                cor++;
                f_ok($('#reci5'));
            }else {
                inc++;
                f_no($('#reci5'));
            }
            if (reci6=='302') {
                cor++;
                f_ok($('#reci6'));
            }else {
                inc++;
                f_no($('#reci6'));
            }
            if (reci7=='302') {
                cor++;
                f_ok($('#reci7'));
            }else {
                inc++;
                f_no($('#reci7'));
            }
            Calculo_nota()
            
        }
        
    }