    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=29,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    
    function f_iniciar(){
        var sumando1=parseInt((Math.random() * 80)+10);
        var sumando2=parseInt((Math.random() * 80)+10);
        var sumando3=parseInt((Math.random() * 80)+10);
        var sumando4=parseInt((Math.random() * 80)+10);
        var sumando5=parseInt((Math.random() * 80)+10);
        var sumando6=parseInt((Math.random() * 80)+10);
        var sumando7=parseInt((Math.random() * 80)+10);
        var sumando8=parseInt((Math.random() * 80)+10);
        var sumandos1=parseInt((Math.random() * 80)+10);
        var sumandos2=parseInt((Math.random() * 80)+10);
        var sumandos3=parseInt((Math.random() * 80)+10);
        var sumandos4=parseInt((Math.random() * 80)+10);
        var sumandos5=parseInt((Math.random() * 80)+10);
        var sumandos6=parseInt((Math.random() * 80)+10);
        var sumandos7=parseInt((Math.random() * 80)+10);
        var sumandos8=parseInt((Math.random() * 80)+10);
        var sumandos9=parseInt((Math.random() * 80)+10);
        var sumandos10=parseInt((Math.random() * 80)+10);
        var sumandos11=parseInt((Math.random() * 80)+10);
        var ran1=[parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1)];
        var ran2=[parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1)];
        var ran3=[parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1)];
        var ran4=[parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1)];
        var ran5=[parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1)];
        var ran6=[parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1),parseInt((Math.random() * 30)+1)];
        var ranp1=[parseInt((Math.random() * 1000)+5),parseInt((Math.random() * 1000)+5),parseInt((Math.random() * 1000)+5)];
        var ranp2=[parseInt((Math.random() * 200)+5),parseInt((Math.random() * 200)+5),parseInt((Math.random() * 200)+5)];
        var ranp3=[parseInt((Math.random() * 100)+5),parseInt((Math.random() * 100)+5),parseInt((Math.random() * 100)+5)];
        var ranp4=[parseInt((Math.random() * 1000)+5),parseInt((Math.random() * 1000)+5),parseInt((Math.random() * 1000)+5)];
        var ranp5=[parseInt((Math.random() * 1000)+5),parseInt((Math.random() * 1000)+5),parseInt((Math.random() * 1000)+5)];
        var ranp6=[parseInt((Math.random() * 100)+5),parseInt((Math.random() * 100)+5),parseInt((Math.random() * 100)+5)];
        var preg=['<p id="suman1"> 63 + 11 = </p>','<p id="suman1"> 41 + 17 = </p>','<p id="suman1"> 23 + 52 = </p>','<p id="suman1"> 17 + 15 = </p>'];
        var respreg=['60+10','40+20','20+50','20+20'];
        var preg1=['<p> '+sumandos1+' + '+sumandos2+' = </p>','<p id="suman1"> '+sumandos3+' + '+sumandos4+' = </p>','<p id="suman1"> '+sumandos5+' + '+sumandos6+' = </p>','<p id="suman1"> '+sumandos7+' + '+sumandos8+' = </p>','<p id="suman1"> '+sumandos9+' + '+sumandos10+' + '+sumandos11+' = </p>'];
        var tot1=[(sumandos1+sumandos2),(sumandos3+sumandos4),(sumandos5+sumandos6),(sumandos7+sumandos8),(sumandos9+sumandos10+sumandos11)];
        var myArray1 = ['0','1','2','3'];
        var myArray2 = ['0','1','2','3','4'];
        var myArray3 = ['0','1','2','3','4'];
        var myArray4 = ['0','1','2','3','4','5','6','7','8','9'];
        var totcorrec=[];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
        for (i = myArray4.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray4[i - 1];
            myArray4[i - 1] = myArray4[j];
            myArray4[j] = k;
        }
        var respuestap1=[];
        var totcorrec1=[];
        //aleatorio literal 1
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray1[i-1];
            $("#redo"+i).html(preg[c]);
            respuestap1.push(respreg[c]);

        };
        //aleatorio literal 2
        for (var i = 1; i <= 5 ; i++) {
            var c=myArray2[i-1];
            $("#ment"+i).html(preg1[c]);
            totcorrec.push(tot1[c]);
        };
        //aleatorio literal 3
        for (var i = 1; i <= 5 ; i++) {
            var c=myArray3[i-1];
            $("#valo"+i).html(tot1[c]);
            totcorrec1.push(tot1[c]);
        };
        $('#asoc1').html('<p>'+ran1[0]+' + '+ran1[1]+' + '+ran1[2]+' = <input type="number" id="total1" style="width: 20%; padding: 0.4px 0.4px;"></p>');
        $('#asoc2').html('<p>'+ran2[0]+' + '+ran2[1]+' + '+ran2[2]+' = <input type="number" id="total4" style="width: 20%; padding: 0.4px 0.4px;"></p>');
        $('#asoc3').html('<p>'+ran3[0]+' + '+ran3[1]+' + '+ran3[2]+' + '+ran3[3]+' = <input type="number" id="total7" style="width: 20%; padding: 0.4px 0.4px;"></p>');
        $('#asoc4').html('<p>'+ran4[0]+' + '+ran4[1]+' + '+ran4[2]+' = <input type="number" id="total10" style="width: 20%; padding: 0.4px 0.4px;"></p>');
        $('#asoc5').html('<p>'+ran5[0]+' + '+ran5[1]+' + '+ran5[2]+' = <input type="number" id="total13" style="width: 20%; padding: 0.4px 0.4px;"></p>');
        $('#asoc6').html('<p>'+ran6[0]+' + '+ran6[1]+' + '+ran6[2]+' = <input type="number" id="total16" style="width: 20%; padding: 0.4px 0.4px;"></p>');
        $('#asocia1').html('<p><b> ( </b>'+ran1[0]+'<b> + </b>'+ran2[0]+'<b> )  + </b>'+ran3[0]+'<b> = </b><input id="assum1" type="number" style="width: 20%; padding: 0.4px 0.4px;"></p>');
        $('#asocia2').html('<p>'+ran1[1]+'<b> +  ( </b>'+ran2[1]+'<b> + </b>'+ran3[1]+'<b> )  = </b><input id="assum5" type="number" style="width: 20%; padding: 0.4px 0.4px;"></p>');
        $('#asocia3').html('<p><b> ( </b>'+ran1[2]+'<b> + </b>'+ran2[2]+'<b> )  + </b>'+ran3[2]+'<b> = </b><input id="assum9" type="number" style="width: 20%; padding: 0.4px 0.4px;"></p>');
        $('#asocia4').html('<p>'+ran4[0]+' + <b> ( </b>'+ran5[0]+' + '+ran6[0]+'<b> )  =</b> <input id="assum13" type="number" style="width: 20%; padding: 0.4px 0.4px;"></p>');
        $('#calmen1').html(ran6[1]+'<b>+</b>'+ran1[0]+'<b>+</b>'+ran2[1]+'<b>=</b>');
        $('#calmen2').html(ran6[2]+'<b>+</b>'+ran3[3]+'<b>=</b>');
        $('#calmen3').html(ran5[2]+'<b>+</b>'+ran1[2]+'<b>+</b>'+ran4[0]+'<b>=</b>');
        $('#calmen4').html(ran4[1]+'<b>+</b>'+ran3[2]+'<b>=</b>');
        $('#pint1').html('<b> ( </b> '+ranp1[0]+'<b> + </b>'+ranp1[1]+'<b>) + </b>'+ranp1[2]);
        $('#pint2').html('<b> ( </b> '+ranp2[0]+'<b> + </b>'+ranp2[1]+'<b>) + </b>'+ranp2[2]);
        $('#pint3').html(ranp3[0]+'<b> + ( </b>'+ranp3[1]+'<b>+</b>'+ranp3[2]+'<b> ) </b>');
        $('#pint4').html(ranp4[0]+'<b> + ( </b>'+ranp4[1]+'<b> + </b>'+ranp4[2]+'<b> ) </b>');
        $('#pint5').html('<b> ( </b> '+ranp5[0]+'<b> + </b>'+ranp5[1]+'<b> ) + </b>'+ranp5[2]);
        $('#pint6').html('<b> ( </b> '+ranp6[0]+'<b> + </b>'+ranp6[1]+'<b> ) + </b>'+ranp6[2]);
        var pintares=[(ranp1[0]+ranp1[1]+ranp1[2]),(ranp2[0]+ranp2[1]+ranp2[2]),(ranp3[0]+ranp3[1]+ranp3[2]),(ranp4[0]+ranp4[1]+ranp4[2]),(ranp5[0]+ranp5[1]+ranp5[2]),(ranp6[0]+ranp6[1]+ranp6[2]),parseInt((Math.random() * 100)+5),parseInt((Math.random() * 1000)+5),parseInt((Math.random() * 5000)+5),parseInt((Math.random() * 70)+5)];
        var pintacorrec=[];
        //aleatorio literal 4
        for (var i = 1; i <= 10 ; i++) {
            var c=myArray4[i-1];
            $("#rgra"+i).html(pintares[c]);
            pintacorrec.push(pintares[c]);
        };
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var resd1=$('#resd1').val();
            var resd2=$('#resd2').val();
            var resd3=$('#resd3').val();
            var resd4=$('#resd4').val();
            var red1=$('#red1').val();
            var red2=$('#red2').val();
            var red3=$('#red3').val();
            var red4=$('#red4').val();
            if (resd1==respuestap1[0]) {
                cor++;
                f_ok($('#resd1'));
            }else {
                inc++;
                f_no($('#resd1'));
            }
            if (resd2==respuestap1[1]) {
                cor++;
                f_ok($('#resd2'));
            }else {
                inc++;
                f_no($('#resd2'));
            }
            if (resd3==respuestap1[2]) {
                cor++;
                f_ok($('#resd3'));
            }else {
                inc++;
                f_no($('#resd3'));
            }
            if (resd4==respuestap1[3]) {
                cor++;
                f_ok($('#resd4'));
            }else {
                inc++;
                f_no($('#resd4'));
            }
            var corecvf=[];
            for (var i = 0; i < 5; i++) {
                if (totcorrec1[i]==totcorrec[i]) {
                    corecvf.push('V');
                }else {
                    corecvf.push('F');
                }       
            }

            for (var i = 0; i < 5; i++) {
                if (corecvf[i]==$('#red'+(i+1)).val()) {
                    cor++;
                    f_ok($('#red'+(i+1)));
                }else {
                    inc++;
                    f_no($('#red'+(i+1)));
                }
            }
            var total1=$('#total1').val();
            var total2=$('#total2').val();
            var total3=$('#total3').val();
            var total4=$('#total4').val();
            var total5=$('#total5').val();
            var total6=$('#total6').val();
            var total7=$('#total7').val();
            var total8=$('#total8').val();
            var total9=$('#total9').val();
            var total10=$('#total10').val();
            var total11=$('#total11').val();
            var total12=$('#total12').val();
            var total13=$('#total13').val();
            var total14=$('#total14').val();
            var total15=$('#total15').val();
            var total16=$('#total16').val();
            var total17=$('#total17').val();
            var total18=$('#total18').val();
            var sumanf1=$('#sumando1').val();
            var sumanf2=$('#sumando2').val();
            var sumanf3=$('#sumando3').val();
            var sumanf4=$('#sumando4').val();
            var sumanf5=$('#sumando5').val();
            var sumanf6=$('#sumando6').val();
            var sumanf7=$('#sumando7').val();
            var sumanf8=$('#sumando8').val();
            var sumanf9=$('#sumando9').val();
            var sumanf10=$('#sumando10').val();
            var sumanf11=$('#sumando11').val();
            var sumanf12=$('#sumando12').val();
            var sumanf13=$('#sumando13').val();
            var sumanf14=$('#sumando14').val();
            var sumanf15=$('#sumando15').val();
            var sumanf16=$('#sumando16').val();
            var sumanf17=$('#sumando17').val();
            var sumanf18=$('#sumando18').val();
            var sumanf19=$('#sumando19').val();
            var sumanf20=$('#sumando20').val();
            var sumanf21=$('#sumando21').val();
            var sumanf22=$('#sumando22').val();
            var sumanf23=$('#sumando23').val();
            var sumanf24=$('#sumando24').val();
            var sumanf25=$('#sumando25').val();
            var sumanf26=$('#sumando26').val();
            var sumanf27=$('#sumando27').val();
            var sumanf28=$('#sumando28').val();
            var sumanf29=$('#sumando29').val();
            var sumanf30=$('#sumando30').val();
            var sumanf31=$('#sumando31').val();
            var cont2=0;
            if ((ran1[0]+ran1[1]+ran1[2])==total1) {
                cont2++;
                f_ok($('#total1'));
            }else {
                cont2;
                f_no($('#total1'));
            }
            if ((ran1[0]+ran1[1]+ran1[2])==total2) {
                cont2++;
                f_ok($('#total2'));
                
            }else {
                cont2;
                f_no($('#total2'));
            }
            if ((parseInt(sumanf1)+parseInt(sumanf2)+parseInt(sumanf3) )==(ran1[0]+ran1[1]+ran1[2])) {
                cont2++;
                f_ok($('#sumando1'));
                f_ok($('#sumando2'));
                f_ok($('#sumando3'));
                
            }else {
                cont2;
                f_no($('#sumando1'));
                f_no($('#sumando2'));
                f_no($('#sumando3'));
                
            }
            if ((ran1[0]+ran1[1]+ran1[2])==total3) {
                cont2++;
                f_ok($('#total3'));
                
            }else {
                cont2;
                f_no($('#total3'));
            }
            if ((parseInt(sumanf4) +parseInt(sumanf5))==(ran1[0]+ran1[1]+ran1[2])) {
                cont2++;
                f_ok($('#sumando4'));
                f_ok($('#sumando5'));
                
            }else {
                cont2;
                f_no($('#sumando4'));
                f_no($('#sumando5'));
            }

            if ((ran2[0]+ran2[1]+ran2[2])==total4) {
                cont2++;
                f_ok($('#total4'));
            }else {
                cont2;
                f_no($('#total4'));
            }
            if ((ran2[0]+ran2[1]+ran2[2])==total5) {
                cont2++;
                f_ok($('#total5'));
                
            }else {
                cont2;
                f_no($('#total5'));
            }
            if ((parseInt(sumanf6)+parseInt(sumanf7)+parseInt(sumanf8) )==(ran2[0]+ran2[1]+ran2[2])) {
                cont2++;
                f_ok($('#sumando6'));
                f_ok($('#sumando7'));
                f_ok($('#sumando8'));
                
            }else {
                cont2;
                f_no($('#sumando6'));
                f_no($('#sumando7'));
                f_no($('#sumando8'));
                
            }
            if ((ran2[0]+ran2[1]+ran2[2])==total6) {
                cont2++;
                f_ok($('#total6'));
                
            }else {
                cont2;
                f_no($('#total6'));
            }
            if ((parseInt(sumanf9) +parseInt(sumanf10))==(ran2[0]+ran2[1]+ran2[2])) {
                cont2++;
                f_ok($('#sumando9'));
                f_ok($('#sumando10'));
                
            }else {
                cont2;
                f_no($('#sumando9'));
                f_no($('#sumando10'));
            }

            if ((ran3[0]+ran3[1]+ran3[2]+ran3[3])==total7) {
                cont2++;
                f_ok($('#total7'));
            }else {
                cont2;
                f_no($('#total7'));
            }
            if ((ran3[0]+ran3[1]+ran3[2]+ran3[3])==total8) {
                cont2++;
                f_ok($('#total8'));
                
            }else {
                cont2;
                f_no($('#total8'));
            }
            if ((parseInt(sumanf11)+parseInt(sumanf12)+parseInt(sumanf13)+ parseInt(sumanf14))==(ran3[0]+ran3[1]+ran3[2]+ran3[3])) {
                cont2++;
                f_ok($('#sumando11'));
                f_ok($('#sumando12'));
                f_ok($('#sumando13'));
                f_ok($('#sumando14'));
                
            }else {
                cont2;
                f_no($('#sumando11'));
                f_no($('#sumando12'));
                f_no($('#sumando13'));
                f_no($('#sumando14'));
                
            }
            if ((ran3[0]+ran3[1]+ran3[2]+ran3[3])==total9) {
                cont2++;
                f_ok($('#total9'));
                
            }else {
                cont2;
                f_no($('#total9'));
            }
            if ((parseInt(sumanf15) +parseInt(sumanf16))==(ran3[0]+ran3[1]+ran3[2]+ran3[3])) {
                cont2++;
                f_ok($('#sumando15'));
                f_ok($('#sumando16'));
                
            }else {
                cont2;
                f_no($('#sumando15'));
                f_no($('#sumando16'));
            }

            if ((ran4[0]+ran4[1]+ran4[2])==total10) {
                cont2++;
                f_ok($('#total10'));
            }else {
                cont2;
                f_no($('#total10'));
            }
            if ((ran4[0]+ran4[1]+ran4[2])==total11) {
                cont2++;
                f_ok($('#total11'));
                
            }else {
                cont2;
                f_no($('#total11'));
            }
            if ((parseInt(sumanf17)+parseInt(sumanf18)+parseInt(sumanf19))==(ran4[0]+ran4[1]+ran4[2])) {
                cont2++;
                f_ok($('#sumando17'));
                f_ok($('#sumando18'));
                f_ok($('#sumando19'));
                
                
            }else {
                cont2;
                f_no($('#sumando17'));
                f_no($('#sumando18'));
                f_no($('#sumando19'));
                
                
            }
            if ((ran4[0]+ran4[1]+ran4[2])==total12) {
                cont2++;
                f_ok($('#total12'));
                
            }else {
                cont2;
                f_no($('#total12'));
            }
            if ((parseInt(sumanf20) +parseInt(sumanf21))==(ran4[0]+ran4[1]+ran4[2])) {
                cont2++;
                f_ok($('#sumando20'));
                f_ok($('#sumando21'));
                
            }else {
                cont2;
                f_no($('#sumando20'));
                f_no($('#sumando21'));
            }

            if ((ran5[0]+ran5[1]+ran5[2])==total13) {
                cont2++;
                f_ok($('#total13'));
            }else {
                cont2;
                f_no($('#total13'));
            }
            if ((ran5[0]+ran5[1]+ran5[2])==total14) {
                cont2++;
                f_ok($('#total14'));
                
            }else {
                cont2;
                f_no($('#total14'));
            }
            if ((parseInt(sumanf22)+parseInt(sumanf23)+parseInt(sumanf24))==(ran5[0]+ran5[1]+ran5[2])) {
                cont2++;
                f_ok($('#sumando22'));
                f_ok($('#sumando23'));
                f_ok($('#sumando24'));
                
                
            }else {
                cont2;
                f_no($('#sumando22'));
                f_no($('#sumando23'));
                f_no($('#sumando24'));
                
                
            }
            if ((ran5[0]+ran5[1]+ran5[2])==total15) {
                cont2++;
                f_ok($('#total15'));
                
            }else {
                cont2;
                f_no($('#total15'));
            }
            if ((parseInt(sumanf25) +parseInt(sumanf26))==(ran5[0]+ran5[1]+ran5[2])) {
                cont2++;
                f_ok($('#sumando25'));
                f_ok($('#sumando26'));
                
            }else {
                cont2;
                f_no($('#sumando25'));
                f_no($('#sumando26'));
            }

            if ((ran6[0]+ran6[1]+ran6[2])==total16) {
                cont2++;
                f_ok($('#total16'));
            }else {
                cont2;
                f_no($('#total16'));
            }
            if ((ran6[0]+ran6[1]+ran6[2])==total17) {
                cont2++;
                f_ok($('#total17'));
                
            }else {
                cont2;
                f_no($('#total17'));
            }
            if ((parseInt(sumanf27)+parseInt(sumanf28)+parseInt(sumanf29))==(ran6[0]+ran6[1]+ran6[2])) {
                cont2++;
                f_ok($('#sumando27'));
                f_ok($('#sumando28'));
                f_ok($('#sumando29'));
                
                
            }else {
                cont2;
                f_no($('#sumando27'));
                f_no($('#sumando28'));
                f_no($('#sumando29'));
                
                
            }
            if ((ran6[0]+ran6[1]+ran6[2])==total18) {
                cont2++;
                f_ok($('#total18'));
                
            }else {
                cont2;
                f_no($('#total18'));
            }
            if ((parseInt(sumanf30) +parseInt(sumanf31))==(ran6[0]+ran6[1]+ran6[2])) {
                cont2++;
                f_ok($('#sumando30'));
                f_ok($('#sumando31'));
                
            }else {
                cont2;
                f_no($('#sumando30'));
                f_no($('#sumando31'));
            }
            var p3tot=(cont2*6)/30;
            cor=parseFloat(p3tot)+cor;
            


            var assum1=$('#assum1').val();
            var assum2=$('#assum2').val();
            var assum3=$('#assum3').val();
            var assum4=$('#assum4').val();
            var assum5=$('#assum5').val();
            var assum6=$('#assum6').val();
            var assum7=$('#assum7').val();
            var assum8=$('#assum8').val();
            var assum9=$('#assum9').val();
            var assum10=$('#assum10').val();
            var assum11=$('#assum11').val();
            var assum12=$('#assum12').val();
            var assum13=$('#assum13').val();
            var assum14=$('#assum14').val();
            var assum15=$('#assum15').val();
            var assum16=$('#assum16').val();
            var cont3=0;
            if ((ran1[0]+ran2[0]+ran3[0])==assum1) {
                cont3++;
                f_ok($('#assum1'));
            }else {
                cont3;
                f_no($('#assum1'));
            }
            if ((ran1[0]+ran2[0])==assum2) {
                cont3++;
                f_ok($('#assum2'));
            }else {
                cont3;
                f_no($('#assum2'));
            }
            if (ran3[0]==assum3) {
                cont3++;
                f_ok($('#assum3'));
            }else {
                cont3;
                f_no($('#assum3'));
            }
            if ((ran1[0]+ran2[0]+ran3[0])==assum4) {
                cont3++;
                f_ok($('#assum4'));
            }else {
                cont3;
                f_no($('#assum4'));
            }

            if ((ran1[1]+ran2[1]+ran3[1])==assum5) {
                cont3++;
                f_ok($('#assum5'));
            }else {
                cont3;
                f_no($('#assum5'));
            }
            if ((ran1[1])==assum6) {
                cont3++;
                f_ok($('#assum6'));
            }else {
                cont3;
                f_no($('#assum6'));
            }
            if ((ran3[1]+ran2[1])==assum7) {
                cont3++;
                f_ok($('#assum7'));
            }else {
                cont3;
                f_no($('#assum7'));
            }
            if ((ran1[1]+ran2[1]+ran3[1])==assum8) {
                cont3++;
                f_ok($('#assum8'));
            }else {
                cont3;
                f_no($('#assum8'));
            }

            if ((ran1[2]+ran2[2]+ran3[2])==assum9) {
                cont3++;
                f_ok($('#assum9'));
            }else {
                cont3;
                f_no($('#assum9'));
            }
            if ((ran1[2]+ran2[2])==assum10) {
                cont3++;
                f_ok($('#assum10'));
            }else {
                cont3;
                f_no($('#assum10'));
            }
            if (ran3[2]==assum11) {
                cont3++;
                f_ok($('#assum11'));
            }else {
                cont3;
                f_no($('#assum11'));
            }
            if ((ran1[2]+ran2[2]+ran3[2])==assum12) {
                cont3++;
                f_ok($('#assum12'));
            }else {
                cont3;
                f_no($('#assum12'));
            }

            if ((ran4[0]+ran5[0]+ran6[0])==assum13) {
                cont3++;
                f_ok($('#assum13'));
            }else {
                cont3;
                f_no($('#assum13'));
            }
            if ((ran4[0])==assum14) {
                cont3++;
                f_ok($('#assum14'));
            }else {
                cont3;
                f_no($('#assum14'));
            }
            if ((ran6[0]+ran5[0])==assum15) {
                cont3++;
                f_ok($('#assum15'));
            }else {
                cont3;
                f_no($('#assum15'));
            }
            if ((ran4[0]+ran5[0]+ran6[0])==assum16) {
                cont3++;
                f_ok($('#assum16'));
            }else {
                cont3;
                f_no($('#assum16'));
            }
            var p4tot=(cont3*4)/16;
            cor=parseFloat(p4tot)+cor;
            

            var clmn1=$('#clmn1').val();
            var clmn2=$('#clmn2').val();
            var clmn3=$('#clmn3').val();
            var clmn4=$('#clmn4').val();
            var propr1=$('#propr1').val();
            var propr2=$('#propr2').val();
            var propr3=$('#propr3').val();
            var propr4=$('#propr4').val();
            
            var cont5=0;
            if (clmn1==(ran6[1]+ran1[0]+ran2[1])) {
                cont5++;
                f_ok($('#clmn1'));
            }else {
                cont5;
                f_no($('#clmn1'));
            }
            if (clmn2==(ran6[2]+ran3[3])) {
                cont5++;
                f_ok($('#clmn2'));
            }else {
                cont5;
                f_no($('#clmn2'));
            }
            if (clmn3==(ran5[2]+ran1[2]+ran4[0])) {
                cont5++;
                f_ok($('#clmn3'));
            }else {
                cont5;
                f_no($('#clmn3'));
            }
            if (clmn4==(ran4[1]+ran3[2])) {
                cont5++;
                f_ok($('#clmn4'));
            }else {
                cont5;
                f_no($('#clmn4'));
            }
            if (propr1=='ASOCIATIVA') {
                cont5++;
                f_ok($('#propr1'));
            }else {
                cont5;
                f_no($('#propr1'));
            }
            if (propr2=='CONMUTATIVA') {
                cont5++;
                f_ok($('#propr2'));
            }else {
                cont5;
                f_no($('#propr2'));
            }
            if (propr3=='ASOCIATIVA') {
                cont5++;
                f_ok($('#propr3'));
            }else {
                cont5;
                f_no($('#propr3'));
            }
            if (propr4=='CONMUTATIVA') {
                cont5++;
                f_ok($('#propr4'));
            }else {
                cont5;
                f_no($('#propr4'));
            }
            var p5tot=(cont5*4)/8;
            cor=parseFloat(p5tot)+cor;
            

            var adpin1=$('#adpin1').val();
            var adpin2=$('#adpin2').val();
            var adpin3=$('#adpin3').val();
            var adpin4=$('#adpin4').val();
            var adpin5=$('#adpin5').val();
            var adpin6=$('#adpin6').val();
            var adpin7=$('#adpin7').val();
            var adpin8=$('#adpin8').val();
            var adpin9=$('#adpin9').val();
            var adpin10=$('#adpin10').val();
            var adpin11=$('#adpin11').val();
            var adpin12=$('#adpin12').val();
            var adpin13=$('#adpin13').val();
            var adpin14=$('#adpin14').val();
            var adpin15=$('#adpin15').val();
            var adpin16=$('#adpin16').val();
            var adpin17=$('#adpin17').val();
            var adpin18=$('#adpin18').val();
            var cont6=0;
            
            if (adpin1==(ranp1[0]+ranp1[1])) {
                cont6++;
                f_ok($('#adpin1'));
            }else {
                cont6;
                f_no($('#adpin1'));
            }
            if (adpin2==(ranp1[2])) {
                cont6++;
                f_ok($('#adpin2'));
            }else {
                cont6;
                f_no($('#adpin2'));
            }
            if (adpin3==(ranp1[0]+ranp1[1]+ranp1[2])) {
                cont6++;
                f_ok($('#adpin3'));
            }else {
                cont6;
                f_no($('#adpin3'));
            }

            if (adpin4==(ranp2[0]+ranp2[1])) {
                cont6++;
                f_ok($('#adpin4'));
            }else {
                cont6;
                f_no($('#adpin4'));
            }
            if (adpin5==(ranp2[2])) {
                cont6++;
                f_ok($('#adpin5'));
            }else {
                cont6;
                f_no($('#adpin5'));
            }
            if (adpin6==(ranp2[0]+ranp2[1]+ranp2[2])) {
                cont6++;
                f_ok($('#adpin6'));
            }else {
                cont6;
                f_no($('#adpin6'));
            }

            if (adpin7==(ranp3[0])) {
                cont6++;
                f_ok($('#adpin7'));
            }else {
                cont6;
                f_no($('#adpin7'));
            }
            if (adpin8==(ranp3[2]+ranp3[1])) {
                cont6++;
                f_ok($('#adpin8'));
            }else {
                cont6;
                f_no($('#adpin8'));
            }
            if (adpin9==(ranp3[0]+ranp3[1]+ranp3[2])) {
                cont6++;
                f_ok($('#adpin9'));
            }else {
                cont6;
                f_no($('#adpin9'));
            }

            if (adpin10==(ranp4[0])) {
                cont6++;
                f_ok($('#adpin10'));
            }else {
                cont6;
                f_no($('#adpin10'));
            }
            if (adpin11==(ranp4[2]+ranp4[1])) {
                cont6++;
                f_ok($('#adpin11'));
            }else {
                cont6;
                f_no($('#adpin11'));
            }
            if (adpin12==(ranp4[0]+ranp4[1]+ranp4[2])) {
                cont6++;
                f_ok($('#adpin12'));
            }else {
                cont6;
                f_no($('#adpin12'));
            }

            if (adpin13==(ranp5[0]+ranp5[1])) {
                cont6++;
                f_ok($('#adpin13'));
            }else {
                cont6;
                f_no($('#adpin13'));
            }
            if (adpin14==(ranp5[2])) {
                cont6++;
                f_ok($('#adpin14'));
            }else {
                cont6;
                f_no($('#adpin14'));
            }
            if (adpin15==(ranp5[0]+ranp5[1]+ranp5[2])) {
                cont6++;
                f_ok($('#adpin15'));
            }else {
                cont6;
                f_no($('#adpin15'));
            }

            if (adpin16==(ranp6[0]+ranp6[1])) {
                cont6++;
                f_ok($('#adpin16'));
            }else {
                cont6;
                f_no($('#adpin16'));
            }
            if (adpin17==(ranp6[2])) {
                cont6++;
                f_ok($('#adpin17'));
            }else {
                cont6;
                f_no($('#adpin17'));
            }
            if (adpin18==(ranp6[0]+ranp6[1]+ranp6[2])) {
                cont6++;
                f_ok($('#adpin18'));
            }else {
                cont6;
                f_no($('#adpin18'));
            }

            var p6tot=(cont6*6)/18;
            cor=parseFloat(p6tot)+cor;
            

            /*var rgra1=$('#rgra1').css('backgroundColor');
            var rgra2=$('#rgra2').css('backgroundColor');
            var rgra3=$('#rgra3').css('backgroundColor');
            var rgra4=$('#rgra4').css('backgroundColor');
            var rgra5=$('#rgra5').css('backgroundColor');
            var rgra6=$('#rgra6').css('backgroundColor');
            var rgra7=$('#rgra7').css('backgroundColor');
            var rgra8=$('#rgra8').css('backgroundColor');
            var rgra9=$('#rgra9').css('backgroundColor');
            var rgra10=$('#rgra10').css('backgroundColor');
            var p=[];
            var pintas=[(ranp1[0]+ranp1[1]+ranp1[2]),(ranp2[0]+ranp2[1]+ranp2[2]),(ranp3[0]+ranp3[1]+ranp3[2]),(ranp4[0]+ranp4[1]+ranp4[2]),(ranp5[0]+ranp5[1]+ranp5[2]),(ranp6[0]+ranp6[1]+ranp6[2])];
            if (rgra1=='rgb(151, 210, 252)') {
                p.push($('#rgra1').html());
            }
            if (rgra2=='rgb(151, 210, 252)') {
                p.push($('#rgra2').html());
            }
            if (rgra3=='rgb(151, 210, 252)') {
                p.push($('#rgra3').html());
            }
            if (rgra4=='rgb(151, 210, 252)') {
                p.push($('#rgra4').html());
            }
            if (rgra5=='rgb(151, 210, 252)') {
                p.push($('#rgra5').html());
            }
            if (rgra6=='rgb(151, 210, 252)') {
                p.push($('#rgra6').html());
            }
            if (rgra7=='rgb(151, 210, 252)') {
                p.push($('#rgra7').html());
            }
            if (rgra8=='rgb(151, 210, 252)') {
                p.push($('#rgra8').html());
            }
            if (rgra9=='rgb(151, 210, 252)') {
                p.push($('#rgra9').html());
            }
            if (rgra10=='rgb(151, 210, 252)') {
                p.push($('#rgra10').html());
            }
            var cont7=0;
            for (var i = 0; i < p.length; i++) {
                for (var j = 0; j < pintas.length; j++) {
                    if (p[i]==pintas[j]) {
                        cont7++;

                    }else {
                        cont7;
                    }
                }
            }
            var p7tot=(cont7*4)/6;
            cor=parseFloat(p7tot)+cor;*/
            Calculo_nota()
            
        }
        
    }