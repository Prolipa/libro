    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=41,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
        
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var prolde1=$('#prolde1').val();
            var prolde2=$('#prolde2').val();
            var prolde3=$('#prolde3').val();
            var prolde4=$('#prolde4').val();
            var prolde5=$('#prolde5').val();
            var prolde6=$('#prolde6').val();
            var prolde7=$('#prolde7').val();
            var prolde8=$('#prolde8').val();
            var prolde9=$('#prolde9').val();
            var prolde10=$('#prolde10').val();
            var prolde11=$('#prolde11').val();
            var prolde12=$('#prolde12').val();
            var prolde13=$('#prolde13').val();
            var prolde14=$('#prolde14').val();
            var prolde15=$('#prolde15').val();
            var prolde16=$('#prolde16').val();
            var prolde17=$('#prolde17').val();
            var prolde18=$('#prolde18').val();
            var prolde19=$('#prolde19').val();
            var prolde20=$('#prolde20').val();
            if (prolde1=='200') {
                cor++;
                f_ok($('#prolde1'));
            }else {
                inc++;
                f_no($('#prolde1'));
            }
            if (prolde2=='100') {
                cor++;
                f_ok($('#prolde2'));
            }else {
                inc++;
                f_no($('#prolde2'));
            }
            if (prolde3=='10') {
                cor++;
                f_ok($('#prolde3'));
            }else {
                inc++;
                f_no($('#prolde3'));
            }
            if (prolde4=='10') {
                cor++;
                f_ok($('#prolde4'));
            }else {
                inc++;
                f_no($('#prolde4'));
            }
            if (prolde5=='5') {
                cor++;
                f_ok($('#prolde5'));
            }else {
                inc++;
                f_no($('#prolde5'));
            }
            if (prolde6=='1') {
                cor++;
                f_ok($('#prolde6'));
            }else {
                inc++;
                f_no($('#prolde6'));
            }
            if (prolde7=='300') {
                cor++;
                f_ok($('#prolde7'));
            }else {
                inc++;
                f_no($('#prolde7'));
            }
            if (prolde8=='20') {
                cor++;
                f_ok($('#prolde8'));
            }else {
                inc++;
                f_no($('#prolde8'));
            }
            if (prolde9=='6') {
                cor++;
                f_ok($('#prolde9'));
            }else {
                inc++;
                f_no($('#prolde9'));
            }
            if (prolde10=='326') {
                cor++;
                f_ok($('#prolde10'));
            }else {
                inc++;
                f_no($('#prolde10'));
            }

            if (prolde11=='100') {
                cor++;
                f_ok($('#prolde11'));
            }else {
                inc++;
                f_no($('#prolde11'));
            }
            if (prolde12=='200') {
                cor++;
                f_ok($('#prolde12'));
            }else {
                inc++;
                f_no($('#prolde12'));
            }
            if (prolde13=='20') {
                cor++;
                f_ok($('#prolde13'));
            }else {
                inc++;
                f_no($('#prolde13'));
            }
            if (prolde14=='10') {
                cor++;
                f_ok($('#prolde14'));
            }else {
                inc++;
                f_no($('#prolde14'));
            }
            if (prolde15=='5') {
                cor++;
                f_ok($('#prolde15'));
            }else {
                inc++;
                f_no($('#prolde15'));
            }
            if (prolde16=='3') {
                cor++;
                f_ok($('#prolde16'));
            }else {
                inc++;
                f_no($('#prolde16'));
            }
            if (prolde17=='300') {
                cor++;
                f_ok($('#prolde17'));
            }else {
                inc++;
                f_no($('#prolde17'));
            }
            if (prolde18=='30') {
                cor++;
                f_ok($('#prolde18'));
            }else {
                inc++;
                f_no($('#prolde18'));
            }
            if (prolde19=='8') {
                cor++;
                f_ok($('#prolde19'));
            }else {
                inc++;
                f_no($('#prolde19'));
            }
            if (prolde20=='338') {
                cor++;
                f_ok($('#prolde20'));
            }else {
                inc++;
                f_no($('#prolde20'));
            }
            var prolrs1=$('#prolrs1').val();
            var prolrs2=$('#prolrs2').val();
            var prolrs3=$('#prolrs3').val();
            prolrs3=prolrs3.split(' ');
            if (prolrs1=='326') {
                cor++;
                f_ok($('#prolrs1'));
            }else {
                inc++;
                f_no($('#prolrs1'));
            }
            if (prolrs2=='338') {
                cor++;
                f_ok($('#prolrs2'));
            }else {
                inc++;
                f_no($('#prolrs2'));
            }
            var cont6=0;
            for (var i = 0 ; i < prolrs3.length; i++) {
                if (prolrs3[i]=='Efraín') {
                    cont6++;
                }        
                
            }
            if (cont6==1) {
                cor++;
                f_ok($('#prolrs3'));
            }else {
                inc++;
                f_no($('#prolrs3'));
            }   
            var pros1=$('#pros1').val();
            var pros2=$('#pros2').val();
            var pros3=$('#pros3').val();
            var pros4=$('#pros4').val();
            var pros5=$('#pros5').val();
            var pros6=$('#pros6').val();
            var pros7=$('#pros7').val();
            var pros8=$('#pros8').val();
            var pros9=$('#pros9').val();
            var pros11=$('#pros11').val();
            var pros12=$('#pros12').val();
            var pros13=$('#pros13').val();
            var pros14=$('#pros14').val();
            var pros15=$('#pros15').val();
            var pros16=$('#pros16').val();
            var pros17=$('#pros17').val();
            var pros18=$('#pros18').val();
            var pros19=$('#pros19').val();
            if (pros1=='4') {
                cor++;
                f_ok($('#pros1'));
            }else {
                inc++;
                f_no($('#pros1'));
            }
            if (pros2=='0') {
                cor++;
                f_ok($('#pros2'));
            }else {
                inc++;
                f_no($('#pros2'));
            }
            if (pros3=='0') {
                cor++;
                f_ok($('#pros3'));
            }else {
                inc++;
                f_no($('#pros3'));
            }
            if (pros4=='3') {
                cor++;
                f_ok($('#pros4'));
            }else {
                inc++;
                f_no($('#pros4'));
            }
            if (pros5=='2') {
                cor++;
                f_ok($('#pros5'));
            }else {
                inc++;
                f_no($('#pros5'));
            }
            if (pros6=='6') {
                cor++;
                f_ok($('#pros6'));
            }else {
                inc++;
                f_no($('#pros6'));
            }
            if (pros7=='0') {
                cor++;
                f_ok($('#pros7'));
            }else {
                inc++;
                f_no($('#pros7'));
            }
            if (pros8=='7') {
                cor++;
                f_ok($('#pros8'));
            }else {
                inc++;
                f_no($('#pros8'));
            }
            if (pros9=='4') {
                cor++;
                f_ok($('#pros9'));
            }else {
                inc++;
                f_no($('#pros9'));
            }
            if (pros11=='4') {
                cor++;
                f_ok($('#pros11'));
            }else {
                inc++;
                f_no($('#pros11'));
            }
            if (pros12=='0') {
                cor++;
                f_ok($('#pros12'));
            }else {
                inc++;
                f_no($('#pros12'));
            }
            if (pros13=='0') {
                cor++;
                f_ok($('#pros13'));
            }else {
                inc++;
                f_no($('#pros13'));
            }
            if (pros14=='3') {
                cor++;
                f_ok($('#pros14'));
            }else {
                inc++;
                f_no($('#pros14'));
            }
            if (pros15=='3') {
                cor++;
                f_ok($('#pros15'));
            }else {
                inc++;
                f_no($('#pros15'));
            }
            if (pros16=='8') {
                cor++;
                f_ok($('#pros16'));
            }else {
                inc++;
                f_no($('#pros16'));
            }
            if (pros17=='0') {
                cor++;
                f_ok($('#pros17'));
            }else {
                inc++;
                f_no($('#pros17'));
            }
            if (pros18=='6') {
                cor++;
                f_ok($('#pros18'));
            }else {
                inc++;
                f_no($('#pros18'));
            }
            if (pros19=='2') {
                cor++;
                f_ok($('#pros19'));
            }else {
                inc++;
                f_no($('#pros19'));
            }
            Calculo_nota()
            
        }
        
    }