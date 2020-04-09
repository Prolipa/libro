    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=12,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        var preg = [parseInt((Math.random() * 500)+100)];
        var preg1 = [parseInt((Math.random() * 800) + 100)];
        var patr1=parseInt((Math.random() * 70) + 10);
        var patr2=parseInt((Math.random() * 70) + 10);
        
        for (var i = 0; i < 4; i++) {
            preg.push((preg[i]+patr1));
        }
        for (var i = 0; i < 4; i++) {
            preg1.push((preg1[i]-patr2));
        }
        
        var myArray1 = ['0','1','2','3'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        ;
        //aleatorio literal 1
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray1[i-1];
            $("#numos"+i).html(preg[c]);
            
        };
        //aleatorio literal 2
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray1[i-1];
            
            $("#nump"+i).html(preg1[c]);            
        };
        
        
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var menoramayor=preg.sort((a,b)=>a-b);
            var mayoramenor=preg1.sort((a,b)=>b-a);
            
            var menmay1=[$('#menor1').val(),$('#menor2').val(),$('#menor3').val(),$('#menor4').val(),$('#numo1').val()];
            var maymen1=[$('#mayor1').val(),$('#mayor2').val(),$('#mayor3').val(),$('#mayor4').val(),$('#numo2').val()];
            var pa1=$('#pa1').val();
            var pa2=$('#pa2').val();
            
            for (var i = 0; i < 5; i++) {
                if (menoramayor[i]==menmay1[(i)]) {
                    
                    if (i==4) {
                        cor++;
                        f_ok($('#numo1'));
                    }else {
                        cor++;
                        f_ok($('#menor'+(i+1)));
                    }    
                }else {
                    
                    if (i==4) {
                        inc++;
                        f_no($('#numo1'));
                    }else {
                        inc++;
                        f_no($('#menor'+(i+1))); 
                    }    
                }
            }
            for (var i = 0; i < 5; i++) {
                if (mayoramenor[i]==maymen1[(i)]) {
                    if (i==4) {
                        cor++;
                        f_ok($('#numo2'));
                    }else {
                        cor++;
                        f_ok($('#mayor'+(i+1)));
                    }    
                }else {
                    if (i==4) {
                        inc++;
                        f_no($('#numo2'));    
                    }else {
                        inc++;
                        f_no($('#mayor'+(i+1)));    
                    }
                }
            }
            if (pa1==patr1 || pa1==('+'+patr1)) {
                cor++;
                f_ok($('#pa1'));    
            }else {
                inc++;
                f_no($('#pa1'));    
            }
            if (pa2==patr2 || pa2==('-'+patr2)) {
                cor++;
                f_ok($('#pa2'));    
            }else {
                inc++;
                f_no($('#pa2'));    
            }
            Calculo_nota();
        }
        
    }