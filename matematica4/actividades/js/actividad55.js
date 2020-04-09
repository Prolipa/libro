    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=9,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
       
       bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var obs1=$('#obs1').val();
            var obs2=$('#obs2').val();
            var obs3=$('#obs3').val();
            var obs4=$('#obs4').val();
            if (obs1=="P") {
                cor++;
                f_ok($('#obs1'));
            }else {
                inc++;
                f_no($('#obs1'));
            }
            if (obs2=="U") {
                cor++;
                f_ok($('#obs2'));
            }else {
                inc++;
                f_no($('#obs2'));
            }
            if (obs3=="G") {
                cor++;
                f_ok($('#obs3'));
            }else {
                inc++;
                f_no($('#obs3'));
            }
            if (obs4=="F") {
                cor++;
                f_ok($('#obs4'));
            }else {
                inc++;
                f_no($('#obs4'));
            }
            var calre1=$('#calre1').val();
            if (calre1>0 && calre1<=5) {
                cor=cor+parseFloat(calre1);
                if (Number.isInteger(cor)) {
                    Calculo_nota();    
                }else {
                    cor=parseInt(cor);
                    Calculo_nota();    
                }
                
                
                f_ok($('#calre1'));
            }else {
                
                if(calre1>5){
                    $("#trace").show(500);
                    $("#trace").html("Verifique su puntaje, excede el limite");
                }else {
                    cor;
                    Calculo_nota();
                        
                }
                f_no($('#calre1'));
            }
        }
        
    }