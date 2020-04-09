    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=15,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var a91pa1=$('#a91pa1').val();
            var a91pa2=$('#a91pa2').val();
            var a91pa3=$('#a91pa3').val();
            var a91pb1=$('#a91pb1').val();
            var a91pb2=$('#a91pb2').val();
            var a91pb3=$('#a91pb3').val();
            var a91pc1=$('#a91pc1').val();
            var a91pc2=$('#a91pc2').val();
            var a91pc3=$('#a91pc3').val();
            var a91pc4=$('#a91pc4').val();
            var a91pf4=$('#a91pf4').val();
            var a91cont1=0;
            v_ids=['BÁSQUET','FÚTBOL','NATACIÓN'];
            for (var i = 0; i < v_ids.length; i++) {
                if (a91pa1==v_ids[i]) {
                    a91cont1++;
                    v_ids[i]=a91cont1;
                    
                }
            }
            if (a91cont1==1) {
                cor++;
                f_ok($('#a91pa1'));
            }else {
                inc++;
                f_no($('#a91pa1'));
            }
            var a91cont1=0;
            for (var i = 0; i < v_ids.length; i++) {
                if (a91pa2==v_ids[i]) {
                    a91cont1++;
                    v_ids[i]=a91cont1;
                }    
            }
            if (a91cont1==1) {
                cor++;
                f_ok($('#a91pa2'));
            }else {
                inc++;
                f_no($('#a91pa2'));
            }
            var a91cont1=0;
            for (var i = 0; i < v_ids.length; i++) {
                if (a91pa3==v_ids[i]) {
                    a91cont1++;
                    v_ids[i]=a91cont1;
                }    
            }
            if (a91cont1==1) {
                cor++;
                f_ok($('#a91pa3'));
            }else {
                inc++;
                f_no($('#a91pa3'));
            }
            r_ids=['PEPE','ANITA','RICKY'];
            var a91cont2=0;
            for (var i = 0; i < r_ids.length; i++) {
                if (a91pb1==r_ids[i]) {
                    a91cont2++;
                    r_ids[i]=a91cont2;
                    
                }
            }
            if (a91cont2==1) {
                cor++;
                f_ok($('#a91pb1'));
            }else {
                inc++;
                f_no($('#a91pb1'));
            }
            var a91cont2=0;
            for (var i = 0; i < r_ids.length; i++) {
                if (a91pb2==r_ids[i]) {
                    a91cont2++;
                    r_ids[i]=a91cont2;
                    
                }
            }
            if (a91cont2==1) {
                cor++;
                f_ok($('#a91pb2'));
            }else {
                inc++;
                f_no($('#a91pb2'));
            }
            var a91cont2=0;
            for (var i = 0; i < r_ids.length; i++) {
                if (a91pb3==r_ids[i]) {
                    a91cont2++;
                    r_ids[i]=a91cont2;
                    
                }
            }
            if (a91cont2==1) {
                cor++;
                f_ok($('#a91pb3'));
            }else {
                inc++;
                f_no($('#a91pb3'));
            }
            r_ids1=['FERNANDO','AMÍLCAR','GLADIS','MERCY'];
            var a91cont3=0;
            for (var i = 0; i < r_ids1.length; i++) {
                if (a91pc1==r_ids1[i]) {
                    a91cont3++;
                    r_ids1[i]=a91cont3;
                    
                }
            }
            if (a91cont3==1) {
                cor++;
                f_ok($('#a91pc1'));
            }else {
                inc++;
                f_no($('#a91pc1'));
            }
            var a91cont3=0;
            for (var i = 0; i < r_ids1.length; i++) {
                if (a91pc2==r_ids1[i]) {
                    a91cont3++;
                    r_ids1[i]=a91cont3;
                    
                }
            }
            if (a91cont3==1) {
                cor++;
                f_ok($('#a91pc2'));
            }else {
                inc++;
                f_no($('#a91pc2'));
            }
            var a91cont3=0;
            for (var i = 0; i < r_ids1.length; i++) {
                if (a91pc3==r_ids1[i]) {
                    a91cont3++;
                    r_ids1[i]=a91cont3;
                    
                }
            }
            if (a91cont3==1) {
                cor++;
                f_ok($('#a91pc3'));
            }else {
                inc++;
                f_no($('#a91pc3'));
            }
            var a91cont3=0;
            for (var i = 0; i < r_ids1.length; i++) {
                if (a91pc4==r_ids1[i]) {
                    a91cont3++;
                    r_ids1[i]=a91cont3;
                    
                }
            }
            if (a91cont3==1) {
                cor++;
                f_ok($('#a91pc4'));
            }else {
                inc++;
                f_no($('#a91pc4'));
            }
            if (a91pf4=='NATACIÓN' || a91pf4=='LA NATACIÓN') {
                cor++;
                f_ok($('#a91pf4'));
            }else {
                inc++;
                f_no($('#a91pf4'));
            }
            var a91cl1=$('#a91cl1').val();
            var a91cl2=$('#a91cl2').val();
            if (parseFloat(a91cl1)<=2 && parseFloat(a91cl1) >=0) {
                cor=cor+parseFloat(a91cl1);
                f_ok($('#a91cl1'));
            }else {
                cor;
                inc=inc+2;
                f_no($('#a91cl1'));
            }
            if (parseFloat(a91cl2)<=2 && parseFloat(a91cl2) >=0) {
                cor=cor+parseFloat(a91cl2);
                f_ok($('#a91cl2'));
            }else {
                cor;
                inc=inc+2;
                f_no($('#a91cl2'));
            }
            Calculo_nota()
            
        }
        
    }