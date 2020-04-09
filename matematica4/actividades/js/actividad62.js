    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=16,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        var numero1 = parseInt((Math.random() * 900) + 500);
        var numero2 = parseInt((Math.random() * 800) + 50);
        var numero3 = parseInt((Math.random() * 600) + 50);
        var numero4 = parseInt((Math.random() * 1000) + 300);
        var numero5 = parseInt((Math.random() * 100) + 60);
        var numero6 = parseInt((Math.random() * 90) + 10);
        var numero7 = parseInt((Math.random() * 80) + 10);
        var numero8 = parseInt((Math.random() * 70) + 10);        
        
        var sucesion1=[numero1];
        var sucesion2=[numero2];
        var sucesion3=[numero3];
        var sucesion4=[numero4];
        for (var i = 0; i < 5; i++) {
            sucesion1.push((sucesion1[i]-numero5));
            if (i<3) {
                $('#sucd'+(i+1)).html(sucesion1[i]);    
            }
            
        }
            
        for (var i = 0; i < 5; i++) {
            sucesion2.push((sucesion2[i]+numero6));
            if (i<3) {
                $('#sucd1'+(i+1)).html(sucesion2[i]);    
            }
            
        }
        
        for (var i = 0; i < 5; i++) {
            sucesion3.push((sucesion3[i]+numero7));
            if (i<3) {
                $('#sucd2'+(i+1)).html(sucesion3[i]);    
            }
            
        }
        
        for (var i = 0; i < 5; i++) {
            sucesion4.push((sucesion4[i]-numero8));
            if (i<3) {
                $('#sucd3'+(i+1)).html(sucesion4[i]);    
            }
            
        }
        
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var ressuc1=[$('#ressuc1').val(),$('#ressuc2').val(),$('#ressuc3').val()];
            var ressuc2=[$('#ressuc5').val(),$('#ressuc6').val(),$('#ressuc7').val()];
            var ressuc3=[$('#ressuc9').val(),$('#ressuc10').val(),$('#ressuc11').val()];
            var ressuc4=[$('#ressuc13').val(),$('#ressuc14').val(),$('#ressuc15').val()];
            var ressuc5=$('#ressuc4').val();
            var ressuc6=$('#ressuc8').val();
            var ressuc7=$('#ressuc12').val();
            var ressuc8=$('#ressuc16').val();
            for (var i = 0; i < 3; i++) {
                if (ressuc1[i]==sucesion1[(i+3)]) {
                    cor++;
                    f_ok($('#ressuc'+(i+1)));    
                }else {
                    inc++;
                    f_no($('#ressuc'+(i+1)));    
                }
            }
            for (var i = 0; i < 3; i++) {
                if (ressuc2[i]==sucesion2[(i+3)]) {
                    cor++;
                    f_ok($('#ressuc'+(i+5)));    
                }else {
                    inc++;
                    f_no($('#ressuc'+(i+5)));    
                }
            }
            for (var i = 0; i < 3; i++) {
                if (ressuc3[i]==sucesion3[(i+3)]) {
                    cor++;
                    f_ok($('#ressuc'+(i+9)));    
                }else {
                    inc++;
                    f_no($('#ressuc'+(i+9)));    
                }
            }
            for (var i = 0; i < 3; i++) {
                if (ressuc4[i]==sucesion4[(i+3)]) {
                    cor++;
                    f_ok($('#ressuc'+(i+13)));    
                }else {
                    inc++;
                    f_no($('#ressuc'+(i+13)));    
                }
            }
            if (ressuc5==('-'+numero5) || ressuc5==numero5) {
                    cor++;
                    f_ok($('#ressuc4'));    
                }else {
                    inc++;
                    f_no($('#ressuc4'));    
                }
            if (ressuc6==numero6 || ressuc6==('+'+numero6)) {
                    cor++;
                    f_ok($('#ressuc8'));    
                }else {
                    inc++;
                    f_no($('#ressuc8'));    
                }
            if (ressuc7==numero7 || ressuc7==('+'+numero7)) {
                    cor++;
                    f_ok($('#ressuc12'));    
                }else {
                    inc++;
                    f_no($('#ressuc12'));    
                }
            if (ressuc8==numero8 || ressuc8==('-'+numero8)) {
                    cor++;
                    f_ok($('#ressuc16'));    
                }else {
                    inc++;
                    f_no($('#ressuc16'));    
                }
            Calculo_nota();
        }
        
    }