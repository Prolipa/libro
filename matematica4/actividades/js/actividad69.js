    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=37,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
        var adic1=[parseInt((Math.random() * 5000)+1000),parseInt((Math.random() * 3000)+1000),parseInt((Math.random() * 2000)+1000)];
        for (var i = 0; i < adic1.length; i++) {
            $('#adgra'+(i+1)).html(adic1[i]);
        }
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var sum1=$('#sum1').val();
            var sum2=$('#sum2').val();
            var sum3=$('#sum3').val();
            var sum4=$('#sum4').val();
            var sum5=$('#sum5').val();
            var sum6=$('#sum6').val();
            var sumt1=$('#sumt1').val();
            var sumt2=$('#sumt2').val();
            var corec1=[];
            var corec2=[];
            if (sum1==adic1[0] || sum1==adic1[1] || sum1==adic1[2]) {
                corec1.push(parseInt(sum1));
                if (sum1==sum2 || sum1==sum3) {
                    inc++;
                    f_no($('#sum1'));
                }else {
                    cor++;
                    f_ok($('#sum1'));    
                }
                
            }else {
                inc++;
                f_no($('#sum1'));
            }
            if (sum2==adic1[0] || sum2==adic1[1] || sum2==adic1[2]) {
                corec1.push(parseInt(sum2));
                if (sum1==sum2 || sum2==sum3) {
                    inc++;
                    f_no($('#sum2'));
                }else {
                    cor++;
                    f_ok($('#sum2'));
                }
            }else {
                inc++;
                f_no($('#sum2'));
            }
            if (sum3==adic1[0] || sum3==adic1[1] || sum3==adic1[2]) {
                corec1.push(parseInt(sum3));
                if (sum3==sum2 || sum1==sum3) {
                    inc++;
                    f_no($('#sum3'));
                }else {
                    cor++;
                    f_ok($('#sum3'));
                }
            }else {
                inc++;
                f_no($('#sum3'));
            }
            if (sumt1==(adic1[0]+adic1[1]+adic1[2])) {
                cor++;
                f_ok($('#sumt1'));
            }else {
                inc++;
                f_no($('#sumt1'));
            }

            if (sum4==adic1[0] || sum4==adic1[1] || sum4==adic1[2]) {
                corec2.push(parseInt(sum4));
                if (sum4==sum5 || sum4==sum6) {
                    inc++;
                    f_no($('#sum4'));
                }else {
                    cor++;
                    f_ok($('#sum4'));    
                }
                
            }else {
                inc++;
                f_no($('#sum4'));
            }
            if (sum5==adic1[0] || sum5==adic1[1] || sum5==adic1[2]) {
                corec2.push(parseInt(sum5));
                if (sum4==sum5 || sum5==sum6) {
                    inc++;
                    f_no($('#sum5'));
                }else {
                    cor++;
                    f_ok($('#sum5'));
                }
            }else {
                inc++;
                f_no($('#sum5'));
            }
            if (sum6==adic1[0] || sum6==adic1[1] || sum6==adic1[2]) {
                corec2.push(parseInt(sum6));
                if (sum6==sum5 || sum4==sum6) {
                    inc++;
                    f_no($('#sum6'));
                }else {
                    cor++;
                    f_ok($('#sum6'));
                }
            }else {
                inc++;
                f_no($('#sum6'));
            }
            if (sumt2==(adic1[0]+adic1[1]+adic1[2])) {
                cor++;
                f_ok($('#sumt2'));
            }else {
                inc++;
                f_no($('#sumt2'));
            }
            var resc1=[2, 6, 9, 3];
            var resc2=[4, 8, 7, 7];
            var resc3=[7, 5, 7, '0'];
            var resc4=[4, 8, 7, 7];
            var resc5=[2, 6, 9, 3];
           
            var probl1=[$('#probl1').val(),$('#probl2').val(),$('#probl3').val(),$('#probl4').val()];
            var probl12=[$('#probl9').val(),$('#probl10').val(),$('#probl11').val(),$('#probl12').val()];
            var probl2=[$('#probl5').val(),$('#probl6').val(),$('#probl7').val(),$('#probl8').val()];
            var probl21=[$('#probl13').val(),$('#probl14').val(),$('#probl15').val(),$('#probl16').val()];
            var probl3=[$('#probl17').val(),$('#probl18').val(),$('#probl19').val(),$('#probl20').val()];
            var probl31=[$('#probl21').val(),$('#probl22').val(),$('#probl23').val(),$('#probl24').val()];

            for (var i = 0; i < resc1.length; i++) {
                if (resc1[i]==probl1[i]) {
                    cor++;
                    f_ok($('#probl'+(i+1)));
                }else {
                    inc++;
                    f_no($('#probl'+(i+1)));
                }
            }
            for (var i = 0; i < resc2.length; i++) {
                if (resc2[i]==probl12[i]) {
                    cor++;
                    f_ok($('#probl'+(i+9)));
                }else {
                    inc++;
                    f_no($('#probl'+(i+9)));
                }
            }
            for (var i = 0; i < resc3.length; i++) {
                if (resc3[i]==probl3[i]) {
                    cor++;
                    f_ok($('#probl'+(i+17)));
                }else {
                    inc++;
                    f_no($('#probl'+(i+17)));
                }
            }

            for (var i = 0; i < resc4.length; i++) {
                if (resc4[i]==probl2[i]) {
                    cor++;
                    f_ok($('#probl'+(i+5)));
                }else {
                    inc++;
                    f_no($('#probl'+(i+5)));
                }
            }
            for (var i = 0; i < resc5.length; i++) {
                if (resc5[i]==probl21[i]) {
                    cor++;
                    f_ok($('#probl'+(i+13)));
                }else {
                    inc++;
                    f_no($('#probl'+(i+13)));
                }
            }
            for (var i = 0; i < resc3.length; i++) {
                if (resc3[i]==probl31[i]) {
                    cor++;
                    f_ok($('#probl'+(i+21)));
                }else {
                    inc++;
                    f_no($('#probl'+(i+21)));
                }
            }
            var prob1=$('#prob1').val();
            var prob2=$('#prob2').val();
            var prob3=$('#prob3').val();
            var prob4=$('#prob4').val();
            var prob5=$('#prob5').val();
            var prob6=$('#prob6').val();
            if ((parseInt(prob1)+parseInt(prob2)+parseInt(prob3))=='1580') {
                cor++;
                f_ok($('#prob1'));
                f_ok($('#prob2'));
                f_ok($('#prob3'));
            }else {
                inc++;
                f_no($('#prob1'));
                f_no($('#prob2'));
                f_no($('#prob3'));
            }
            if ((parseInt(prob4)+parseInt(prob5))=='1580') {
                cor++;
                f_ok($('#prob4'));
                f_ok($('#prob5'));
                
            }else {
                inc++;
                f_no($('#prob4'));
                f_no($('#prob5'));
                
            }
            if (prob6=='1580') {
                cor++;
                f_ok($('#prob6'));
                
                
            }else {
                inc++;
                f_no($('#prob6'));
                
                
            }
            var prol1=$('#prol1').val();
            var prol2=$('#prol2').val();
            var pl1= prol1.split(" ");
            var pl2= prol2.split(" ");
            var c=0,d=0;
            for (var i = 0; i < pl1.length; i++) {
                if (pl1[i]=='igual' || pl1[i]=='misma') {
                    c++;
                }
            }
            if (c=='1') {
                cor++;
                f_ok($('#prol1'));
            }else {
                inc++;
                f_no($('#prol1'));
            }
            for (var i = 0; i < pl2.length; i++) {
                if (pl2[i]=='1580') {
                    d++;
                }
            }
            if (d=='1') {
                cor++;
                f_ok($('#prol2'));
            }else {
                inc++;
                f_no($('#prol2'));
            }
            Calculo_nota()
            
        }
        
    }