    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=59,v_ids=[],v_ids1=[],v_ids2=[],v_ids3=[],v_ids4=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        v_ids=['A <select id="conte1" class=""><option value="" disabled selected>Seleccione</option><option value="⊂">⊂</option><option value="⊄">⊄</option></select> U','B <select id="conte2" class=""><option value="" disabled selected>Seleccione</option><option value="⊂">⊂</option><option value="⊄">⊄</option></select> U','D <select id="conte3" class=""><option value="" disabled selected>Seleccione</option><option value="⊂">⊂</option><option value="⊄">⊄</option></select> U','E <select id="conte4" class=""><option value="" disabled selected>Seleccione</option><option value="⊂">⊂</option><option value="⊄">⊄</option></select> U','F <select id="conte5" class=""><option value="" disabled selected>Seleccione</option><option value="⊂">⊂</option><option value="⊄">⊄</option></select> U','G <select id="conte6" class=""><option value="" disabled selected>Seleccione</option><option value="⊂">⊂</option><option value="⊄">⊄</option></select> U'];
        var myArray1 = ['0','1','2','3','4','5'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
         //aleatorio literal 1
        for (var i = 1; i <= 6 ; i++) {
            var c=myArray1[i-1];
            $("#conten"+i).html(v_ids[c]);
            
        };
        var suce1=parseInt((Math.random() * 300)+121);
            v_ids1=[suce1];
        var suce2=parseInt((Math.random() * 50)+10);
            v_ids2=[suce2];
        var suce3=parseInt((Math.random() * 50)+5);
            v_ids3=[suce3];
        var suce4=parseInt((Math.random() * 300)+100);
            v_ids4=[suce4];
        var patr1=parseInt((Math.random() * 16)+3);
        var patr2=parseInt((Math.random() * 6)+1);
        var patr3=parseInt((Math.random() * 25)+10);
        var patr4=parseInt((Math.random() * 50)+10);
        var patr5=parseInt((Math.random() * 16)+3);
        for (var i = 0; i < 7; i++) {
            v_ids1.push((v_ids1[i]-patr1));
        }
        $('#suc1').html(v_ids1[0]+', '+v_ids1[1]+', '+v_ids1[2]+', '+v_ids1[3]+', '+v_ids1[4]+', <input id="sc1" type="number" style="text-align:center; width:  40px; border:none; border-bottom: 1px dashed black"> ,  <input id="sc2" type="number" style="text-align:center; width:  40px; border:none; border-bottom: 1px dashed black">');
        $('#pat1').html(' - '+patr1);

        for (var i = 0; i < 7; i++) {
            if ((i+1)%2==0) {
                v_ids2.push((v_ids2[i]+patr3));    
            }else {
                v_ids2.push((v_ids2[i]+patr2));    
            }
            
        }
        $('#suc2').html(v_ids2[0]+', '+v_ids2[1]+', '+v_ids2[2]+', '+v_ids2[3]+', '+v_ids2[4]+', a , b');

        for (var i = 0; i < 7; i++) {
            v_ids3.push((v_ids3[i]+patr4));
        }
        $('#suc3').html(v_ids3[0]+', '+v_ids3[1]+', '+v_ids3[2]+', '+v_ids3[3]+', '+v_ids3[4]+', a , b');
        for (var i = 0; i < 7; i++) {
            v_ids4.push((v_ids4[i]-patr5));
        }
        $('#suc4').html(v_ids4[0]+', '+v_ids4[1]+', <input id="sc3" type="number" style="text-align:center; width:  40px; border:none; border-bottom: 1px dashed black"> , '+v_ids4[3]+', <input id="sc4" type="number" style="text-align:center; width:  40px; border:none; border-bottom: 1px dashed black">');
        $('#pat2').html(' - '+patr5);
        /////////////////////////////////////////////////////////////////////////////////
        var suman1=parseInt((Math.random() * 4000)+1000);
        var suman2=parseInt((Math.random() * 4000)+1000);
        var suman3=parseInt((Math.random() * 4000)+1000);
        var suman4=parseInt((Math.random() * 4000)+1000);
        var suman5=parseInt((Math.random() * 3000)+1000);
        var suman6=parseInt((Math.random() * 2000)+1000);
        var suman7=parseInt((Math.random() * 3000)+1000);
        var suman8=parseInt((Math.random() * 2000)+1000);
        var suman9=parseInt((Math.random() * 2000)+1000);
        var suman10=parseInt((Math.random() * 2000)+1000);
        $('#sumver1').html(suman1+'<b> + </b>'+suman2);
        $('#sumver2').html(suman3+'<b> + </b>'+suman4);
        $('#sumver3').html( suman5+'<b> + </b>'+suman6+'<b> + </b>'+suman9);
        $('#sumver4').html(suman7+'<b> + </b>'+suman8+'<b> + </b>'+suman10);
        ///////////////////////////////////////////////////////////////////////////////////////////
        var ssac1=parseInt((Math.random() * 90)+10);
        var ssac2=parseInt((Math.random() * 90)+10);
        var ssac3=parseInt((Math.random() * 90)+10);
        var ssac4=parseInt((Math.random() * 90)+10);
        var ssac5=parseInt((Math.random() * 90)+10);
        var ssac6=parseInt((Math.random() * 90)+10);
        var ssac7=parseInt((Math.random() * 90)+10);
        var ssac8=parseInt((Math.random() * 90)+10);
        var ssac9=parseInt((Math.random() * 90)+10);
        $('#oprasoc1').html(ssac1+' <b> + </b> '+ssac2+' <b> + </b> '+ssac3);
        $('#oprasoc2').html(ssac4+' <b> + </b> '+ssac5+' <b> + </b> '+ssac6);
        $('#oprasoc3').html(ssac7+' <b> + </b> '+ssac8+' <b> + </b> '+ssac9);
        ////////////////////////////////////////////////////////////////////////////////////////////////
        var resta1=parseInt((Math.random() * 5000)+1000);
        var resta2=parseInt((Math.random() * 5000)+1000);
        var resta3=parseInt((Math.random() * 5000)+1000);
        var resta4=parseInt((Math.random() * 5000)+1000);
        var resta5=parseInt((Math.random() * 5000)+1000);
        var resta6=parseInt((Math.random() * 5000)+1000);
        var resta7=parseInt((Math.random() * 5000)+1000);
        var resta8=parseInt((Math.random() * 5000)+1000);
        var nresta1=[], nresta2=[],nresta3=[], nresta4=[],nresta5=[],nresta6=[],nresta7=[],nresta8=[];
        if (resta1>resta2) {
            nresta1=resta1.toString().split('');
            nresta2=resta2.toString().split('');
        }else {
            nresta1=resta2.toString().split('');
            nresta2=resta1.toString().split('');
        }
        for (var i = 0; i < nresta1.length; i++) {
            $('#nres'+(i+1)).html(nresta1[i]);
        }
        for (var i = 0; i < nresta2.length; i++) {
            $('#nres'+(i+5)).html(nresta2[i]);
        }
        if (resta3>resta4) {
            nresta3=resta3.toString().split('');
            nresta4=resta4.toString().split('');
        }else {
            nresta3=resta4.toString().split('');
            nresta4=resta3.toString().split('');
        }
        for (var i = 0; i < nresta3.length; i++) {
            $('#nres1'+(i+1)).html(nresta3[i]);
        }
        for (var i = 0; i < nresta4.length; i++) {
            $('#nres1'+(i+5)).html(nresta4[i]);
        }
        if (resta5>resta6) {
            nresta5=resta5.toString().split('');
            nresta6=resta6.toString().split('');
        }else {
            nresta5=resta6.toString().split('');
            nresta6=resta5.toString().split('');
        }
        for (var i = 0; i < nresta5.length; i++) {
            $('#nres2'+(i+1)).html(nresta5[i]);
        }
        for (var i = 0; i < nresta6.length; i++) {
            $('#nres2'+(i+5)).html(nresta6[i]);
        }
        if (resta7>resta8) {
            nresta7=resta7.toString().split('');
            nresta8=resta8.toString().split('');
        }else {
            nresta7=resta8.toString().split('');
            nresta8=resta7.toString().split('');
        }
        for (var i = 0; i < nresta7.length; i++) {
            $('#nres3'+(i+1)).html(nresta7[i]);
        }
        for (var i = 0; i < nresta8.length; i++) {
            $('#nres3'+(i+5)).html(nresta8[i]);
        }
        /////////////////////////////////////////////////////////////////////////////
        var p7oc1=[parseInt((Math.random() * 80)+10),parseInt((Math.random() * 80)+10),parseInt((Math.random() * 80)+10)];
            p7oc1=p7oc1.sort((a,b)=>b-a);
        var p7oc2=[parseInt((Math.random() * 400)+100),parseInt((Math.random() * 400)+100),parseInt((Math.random() * 400)+100)];
            p7oc2=p7oc2.sort((a,b)=>b-a);
        var p7oc3=[parseInt((Math.random() * 80)+10),parseInt((Math.random() * 80)+10),parseInt((Math.random() * 80)+10)];
            p7oc3=p7oc3.sort((a,b)=>b-a);  
        $('#opcomb1').html('<b> ( </b>'+p7oc1[0]+'<b> + </b>'+ p7oc1[2]+'<b> ) - </b>'+p7oc1[1]);      
        $('#opcomb2').html('<b> ( </b>'+p7oc2[0]+'<b> - </b>'+ p7oc2[1]+'<b> ) + </b>'+p7oc2[2]);      
        $('#opcomb3').html(p7oc3[0] + '<b> - ( </b>'+p7oc3[1]+'<b> - </b>'+ p7oc3[2]+'<b> ) </b>');      
        ////////////////////////////////////////////////////////////////////////////////
        var p8od1=[parseInt((Math.random() * 8)+1),parseInt((Math.random() * 8)+1),parseInt((Math.random() * 8)+1)];
        var p8od2=[parseInt((Math.random() * 8)+1),parseInt((Math.random() * 8)+1),parseInt((Math.random() * 8)+1)];
        var p8od3=parseInt((Math.random() * 400)+100);
        var p8od4=parseInt((Math.random() * 400)+100);
        var p8da1=[];
        var p8da2=[];
        
        for (var i = 0; i < p8od1.length; i++) {
            if (p8od1[i]>p8od2[i]) {
                p8da1.push(p8od1[i]);
                p8da2.push(p8od2[i]);
            }else {
                p8da1.push(p8od2[i]);
                p8da2.push(p8od1[i]);
            }    
        }
        
        $('#des8com1').html(p8da1.join('')+'<b> - </b>'+ p8da2.join(''));    
        $('#des8com2').html(p8od3+'<b> + </b>'+ p8od4);    
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            /////////////pregunta1////////////////////
            var conte1=$('#conte1').val();
            var conte2=$('#conte2').val();
            var conte3=$('#conte3').val();
            var conte4=$('#conte4').val();
            var conte5=$('#conte5').val();
            var conte6=$('#conte6').val();
            if (conte1=='⊂') {
                cor++;
                f_ok($('#conte1'));
            }else {
                inc++;
                f_no($('#conte1'));
            }
            if (conte2=='⊂') {
                cor++;
                f_ok($('#conte2'));
            }else {
                inc++;
                f_no($('#conte2'));
            }
            if (conte3=='⊂') {
                cor++;
                f_ok($('#conte3'));
            }else {
                inc++;
                f_no($('#conte3'));
            }
            if (conte4=='⊄') {
                cor++;
                f_ok($('#conte4'));
            }else {
                inc++;
                f_no($('#conte4'));
            }
            if (conte5=='⊂') {
                cor++;
                f_ok($('#conte5'));
            }else {
                inc++;
                f_no($('#conte5'));
            }
            if (conte6=='⊂') {
                cor++;
                f_ok($('#conte6'));
            }else {
                inc++;
                f_no($('#conte6'));
            }
            ///////////////////////////////pregunta2/////////////////////
            r_ids=['naranja, amarillo','naranja, rojo','verde, amarillo','verde, azul'];
            r_ids1=[$('#secup1').val()+', '+$('#secup2').val(),$('#secup3').val()+', '+$('#secup4').val(),$('#secup5').val()+', '+$('#secup6').val(),$('#secup7').val()+', '+$('#secup8').val()];
            var conta1=0,conta2=0,conta3=0,conta4=0;

            for (var i = 0; i < r_ids.length; i++) {
                
                    if (r_ids1[0]==r_ids[i]) {
                        conta1++;
                        r_ids[i]=conta1;
                    }
                
                
            }
            for (var i = 0; i < r_ids.length; i++) {
                
                    if (r_ids1[1]==r_ids[i]) {
                        conta2++;
                        r_ids[i]=conta2;
                    }
                
                
            }
            for (var i = 0; i < r_ids.length; i++) {
                
                    if (r_ids1[2]==r_ids[i]) {
                        conta3++;
                        r_ids[i]=conta3;
                    }
                
                
            }
            for (var i = 0; i < r_ids.length; i++) {
                
                    if (r_ids1[3]==r_ids[i]) {
                        conta4++;
                        r_ids[i]=conta4;
                    }
                
                
            }
            if (conta1=='1') {
                cor++;
                f_ok($('#secup1'));
                f_ok($('#secup2'));
            }else {
                inc++;
                f_no($('#secup1'));
                f_no($('#secup2'));
            }
            if (conta2=='1') {
                cor++;
                f_ok($('#secup3'));
                f_ok($('#secup4'));
            }else {
                inc++;
                f_no($('#secup3'));
                f_no($('#secup4'));
            }
            if (conta3=='1') {
                cor++;
                f_ok($('#secup5'));
                f_ok($('#secup6'));
            }else {
                inc++;
                f_no($('#secup5'));
                f_no($('#secup6'));
            }
            if (conta4=='1') {
                cor++;
                f_ok($('#secup7'));
                f_ok($('#secup8'));
            }else {
                inc++;
                f_no($('#secup7'));
                f_no($('#secup8'));
            }
            //////////////////////pregunta3///////////////////////////////////////
            var sua1=$('#sua1').val();
            var sua2=$('#sua2').val();
            var sua3=$('#sua3').val();
            var sua4=$('#sua4').val();
            var sub1=$('#sub1').val();
            var sub2=$('#sub2').val();
            var sub3=$('#sub3').val();
            var sub4=$('#sub4').val();
            var totab1=$('#totab1').val();
            var totab2=$('#totab2').val();
            var totab3=$('#totab3').val();
            var totab4=$('#totab4').val();
            var pa1=$('#pa1').val();
            var pa2=$('#pa2').val();
            var pa3=$('#pa3').val();
            var sc1=$('#sc1').val();
            var sc2=$('#sc2').val();
            var sc3=$('#sc3').val();
            var sc4=$('#sc4').val();
            if (sua1==v_ids1[5]) {
                cor++;
                f_ok($('#sua1'));
            }else {
                inc++;
                f_no($('#sua1'));
            }
            if (sub1==v_ids1[6]) {
                cor++;
                f_ok($('#sub1'));
            }else {
                inc++;
                f_no($('#sub1'));
            }
            if (totab1==(parseInt(v_ids1[5]) + parseInt(v_ids1[6]))) {
                cor++;
                f_ok($('#totab1'));
            }else {
                inc++;
                f_no($('#totab1'));
            }
            if (sc1==v_ids1[5]) {
                cor++;
                f_ok($('#sc1'));
            }else {
                inc++;
                f_no($('#sc1'));
            }
            if (sc2==v_ids1[6]) {
                cor++;
                f_ok($('#sc2'));
            }else {
                inc++;
                f_no($('#sc2'));
            }
            //////////
            if (sua2==v_ids2[5]) {
                cor++;
                f_ok($('#sua2'));
            }else {
                inc++;
                f_no($('#sua2'));
            }
            if (sub2==v_ids2[6]) {
                cor++;
                f_ok($('#sub2'));
            }else {
                inc++;
                f_no($('#sub2'));
            }
            if (totab2==(parseInt(v_ids2[5]) + parseInt(v_ids2[6]))) {
                cor++;
                f_ok($('#totab2'));
            }else {
                inc++;
                f_no($('#totab2'));
            }
            if (pa1==patr2 || pa1==('+'+patr2)) {
                cor++;
                f_ok($('#pa1'));
            }else {
                inc++;
                f_no($('#pa1'));
            }
            if (pa2==patr3 || pa2==('+'+patr3)) {
                cor++;
                f_ok($('#pa2'));
            }else {
                inc++;
                f_no($('#pa2'));
            }
            /////////////////////////////////
            if (sua3==v_ids3[5]) {
                cor++;
                f_ok($('#sua3'));
            }else {
                inc++;
                f_no($('#sua3'));
            }
            if (sub3==v_ids3[6]) {
                cor++;
                f_ok($('#sub3'));
            }else {
                inc++;
                f_no($('#sub3'));
            }
            if (totab3==(parseInt(v_ids3[5]) + parseInt(v_ids3[6]))) {
                cor++;
                f_ok($('#totab3'));
            }else {
                inc++;
                f_no($('#totab3'));
            }
            if (pa3==patr4 || pa3==('+'+patr4)) {
                cor++;
                f_ok($('#pa3'));
            }else {
                inc++;
                f_no($('#pa3'));
            }
            //////////////////////////////
            if (sua4==v_ids4[2]) {
                cor++;
                f_ok($('#sua4'));
            }else {
                inc++;
                f_no($('#sua4'));
            }
            if (sub4==v_ids4[4]) {
                cor++;
                f_ok($('#sub4'));
            }else {
                inc++;
                f_no($('#sub4'));
            }
            if (totab4==(parseInt(v_ids4[2]) + parseInt(v_ids4[4]))) {
                cor++;
                f_ok($('#totab4'));
            }else {
                inc++;
                f_no($('#totab4'));
            }
            ///////////////////////////////////////
            if (sc3==v_ids4[2]) {
                cor++;
                f_ok($('#sc3'));
            }else {
                inc++;
                f_no($('#sc3'));
            }
            if (sc4==v_ids4[4]) {
                cor++;
                f_ok($('#sc4'));
            }else {
                inc++;
                f_no($('#sc4'));
            }
            ///////////////////////////////////////////////////////////
            var sumando1=[$('#nsum1').val(),$('#nsum2').val(),$('#nsum3').val(),$('#nsum4').val()];
            var sumando2=[$('#nsum5').val(),$('#nsum6').val(),$('#nsum7').val(),$('#nsum8').val()];
            var res4sum1=[$('#res4sum1').val(),$('#res4sum2').val(),$('#res4sum3').val(),$('#res4sum4').val()];
            var contador1=0;
            if (sumando1.join('')==suman1) {
                contador1++;                
                f_ok($('#nsum1'));
                f_ok($('#nsum2'));
                f_ok($('#nsum3'));
                f_ok($('#nsum4'));
            }else {
                contador1;
                f_no($('#nsum1'));
                f_no($('#nsum2'));
                f_no($('#nsum3'));
                f_no($('#nsum4'));
            }
            if (sumando2.join('')==suman2) {
                contador1++;
                f_ok($('#nsum5'));
                f_ok($('#nsum6'));
                f_ok($('#nsum7'));
                f_ok($('#nsum8'));
            }else {
                contador1;
                f_no($('#nsum5'));
                f_no($('#nsum6'));
                f_no($('#nsum7'));
                f_no($('#nsum8'));
            }
            if (res4sum1.join('')==(suman1+suman2)) {
                contador1++;
                f_ok($('#res4sum1'));
                f_ok($('#res4sum2'));
                f_ok($('#res4sum3'));
                f_ok($('#res4sum4'));
            }else {
                contador1;
                f_no($('#res4sum1'));
                f_no($('#res4sum2'));
                f_no($('#res4sum3'));
                f_no($('#res4sum4'));
            }
            if (contador1==3) {
                cor++;
            }else {
                inc++;
            }
            var sumando3=[$('#nsum11').val(),$('#nsum12').val(),$('#nsum13').val(),$('#nsum14').val()];
            var sumando4=[$('#nsum15').val(),$('#nsum16').val(),$('#nsum17').val(),$('#nsum18').val()];
            var res4sum2=[$('#res4sum11').val(),$('#res4sum12').val(),$('#res4sum13').val(),$('#res4sum14').val()];
            var contador2=0;
            if (sumando3.join('')==suman3) {
                contador2++;                
                f_ok($('#nsum11'));
                f_ok($('#nsum12'));
                f_ok($('#nsum13'));
                f_ok($('#nsum14'));
            }else {
                contador2;
                f_no($('#nsum11'));
                f_no($('#nsum12'));
                f_no($('#nsum13'));
                f_no($('#nsum14'));
            }
            if (sumando4.join('')==suman4) {
                contador2++;
                f_ok($('#nsum15'));
                f_ok($('#nsum16'));
                f_ok($('#nsum17'));
                f_ok($('#nsum18'));
            }else {
                contador2;
                f_no($('#nsum15'));
                f_no($('#nsum16'));
                f_no($('#nsum17'));
                f_no($('#nsum18'));
            }
            if (res4sum2.join('')==(suman3+suman4)) {
                contador2++;
                f_ok($('#res4sum11'));
                f_ok($('#res4sum12'));
                f_ok($('#res4sum13'));
                f_ok($('#res4sum14'));
            }else {
                contador2;
                f_no($('#res4sum11'));
                f_no($('#res4sum12'));
                f_no($('#res4sum13'));
                f_no($('#res4sum14'));
            }
            if (contador2==3) {
                cor++;
            }else {
                inc++;
            }
            var sumando5=[$('#nsum21').val(),$('#nsum22').val(),$('#nsum23').val(),$('#nsum24').val()];
            var sumando6=[$('#nsum25').val(),$('#nsum26').val(),$('#nsum27').val(),$('#nsum28').val()];
            var sumando7=[$('#nsum45').val(),$('#nsum46').val(),$('#nsum47').val(),$('#nsum48').val()];
            var res4sum3=[$('#res4sum21').val(),$('#res4sum22').val(),$('#res4sum23').val(),$('#res4sum24').val()];
            var contador3=0;
            if (sumando5.join('')==suman5) {
                contador3++;                
                f_ok($('#nsum21'));
                f_ok($('#nsum22'));
                f_ok($('#nsum23'));
                f_ok($('#nsum24'));
            }else {
                contador3;
                f_no($('#nsum21'));
                f_no($('#nsum22'));
                f_no($('#nsum23'));
                f_no($('#nsum24'));
            }
            if (sumando6.join('')==suman6) {
                contador3++;
                f_ok($('#nsum25'));
                f_ok($('#nsum26'));
                f_ok($('#nsum27'));
                f_ok($('#nsum28'));
            }else {
                contador3;
                f_no($('#nsum25'));
                f_no($('#nsum26'));
                f_no($('#nsum27'));
                f_no($('#nsum28'));
            }
            if (sumando7.join('')==suman9) {
                contador3++;
                f_ok($('#nsum45'));
                f_ok($('#nsum46'));
                f_ok($('#nsum47'));
                f_ok($('#nsum48'));
            }else {
                contador3;
                f_no($('#nsum45'));
                f_no($('#nsum46'));
                f_no($('#nsum47'));
                f_no($('#nsum48'));
            }
            if (res4sum3.join('')==(suman5+suman6+suman9)) {
                contador3++;
                f_ok($('#res4sum21'));
                f_ok($('#res4sum22'));
                f_ok($('#res4sum23'));
                f_ok($('#res4sum24'));
            }else {
                contador3;
                f_no($('#res4sum21'));
                f_no($('#res4sum22'));
                f_no($('#res4sum23'));
                f_no($('#res4sum24'));
            }
            if (contador3==4) {
                cor++;
            }else {
                inc++;
            }
            var sumando8=[$('#nsum31').val(),$('#nsum32').val(),$('#nsum33').val(),$('#nsum34').val()];
            var sumando9=[$('#nsum35').val(),$('#nsum36').val(),$('#nsum37').val(),$('#nsum38').val()];
            var sumando10=[$('#nsum41').val(),$('#nsum42').val(),$('#nsum43').val(),$('#nsum44').val()];
            var res4sum4=[$('#res4sum31').val(),$('#res4sum32').val(),$('#res4sum33').val(),$('#res4sum34').val()];
            var contador4=0;
            if (sumando8.join('')==suman7) {
                contador4++;                
                f_ok($('#nsum31'));
                f_ok($('#nsum32'));
                f_ok($('#nsum33'));
                f_ok($('#nsum34'));
            }else {
                contador4;
                f_no($('#nsum31'));
                f_no($('#nsum32'));
                f_no($('#nsum33'));
                f_no($('#nsum34'));
            }
            if (sumando9.join('')==suman8) {
                contador4++;
                f_ok($('#nsum35'));
                f_ok($('#nsum36'));
                f_ok($('#nsum37'));
                f_ok($('#nsum38'));
            }else {
                contador4;
                f_no($('#nsum35'));
                f_no($('#nsum36'));
                f_no($('#nsum37'));
                f_no($('#nsum38'));
            }
            if (sumando10.join('')==suman10) {
                contador4++;
                f_ok($('#nsum41'));
                f_ok($('#nsum42'));
                f_ok($('#nsum43'));
                f_ok($('#nsum44'));
            }else {
                contador4;
                f_no($('#nsum41'));
                f_no($('#nsum42'));
                f_no($('#nsum43'));
                f_no($('#nsum44'));
            }
            if (res4sum4.join('')==(suman7+suman8+suman10)) {
                contador4++;
                f_ok($('#res4sum31'));
                f_ok($('#res4sum32'));
                f_ok($('#res4sum33'));
                f_ok($('#res4sum34'));
            }else {
                contador4;
                f_no($('#res4sum31'));
                f_no($('#res4sum32'));
                f_no($('#res4sum33'));
                f_no($('#res4sum34'));
            }
            if (contador4==4) {
                cor++;
            }else {
                inc++;
            }
            /////////////////////////////////////////////////////////////////////////////////
            var assoc1=[$('#asc1').val(),$('#asc2').val(),$('#asc3').val()];
            var pasc1=[ssac1,ssac2,ssac3];
            var contador5=0;
            for (var i = 0; i < pasc1.length; i++) {
                
                    if (assoc1[0]==pasc1[i]) {
                        contador5++;
                        pasc1[i]=contador5;
                    }
                
                
            }
            for (var i = 0; i < pasc1.length; i++) {
                
                    if (assoc1[1]==pasc1[i]) {
                        contador5++;
                        pasc1[i]=contador5;

                    }
                
                
            }
            for (var i = 0; i < pasc1.length; i++) {
                
                    if (assoc1[2]==pasc1[i]) {
                        contador5++;
                        pasc1[i]=contador5;
                    }
                
                
            }
            if (contador5==3) {
                f_ok($('#asc1'));
                f_ok($('#asc2'));
                f_ok($('#asc3'));
            }else {
                f_no($('#asc1'));
                f_no($('#asc2'));
                f_no($('#asc3'));
            }
            var asc4=$('#asc4').val();
            var asc5=$('#asc5').val();
            var asc6=$('#asc6').val();
            var contador6=0;
            if (asc4==(ssac1+ssac2)|| asc4==(ssac1+ssac3) || asc4==(ssac3+ssac2)) {
                contador6++;
                f_ok($('#asc4'));
            }else {
                contador6;
                f_no($('#asc4'));
            }
            if (asc5==ssac1 || asc5==ssac2 || asc5==ssac3) {
                contador6++;
                f_ok($('#asc5'));
            }else {
                contador6;
                f_no($('#asc5'));
            }
            if (asc6==(ssac1+ssac2+ssac3)) {
                contador6++;
                f_ok($('#asc6'));
            }else {
                contador6;
                f_no($('#asc6'));
            }
            cor=cor+(((contador5+contador6)*1)/6) ;
            inc=inc+(1-(((contador5+contador6)*1)/6));

            var assoc2=[$('#asc11').val(),$('#asc12').val(),$('#asc13').val()];
            var pasc2=[ssac4,ssac5,ssac6];
            var contador7=0;
            for (var i = 0; i < pasc2.length; i++) {
                
                    if (assoc2[0]==pasc2[i]) {
                        contador7++;
                        pasc2[i]=contador7;
                    }
                
                
            }
            for (var i = 0; i < pasc2.length; i++) {
                
                    if (assoc2[1]==pasc2[i]) {
                        contador7++;
                        pasc2[i]=contador7;

                    }
                
                
            }
            for (var i = 0; i < pasc2.length; i++) {
                
                    if (assoc2[2]==pasc2[i]) {
                        contador7++;
                        pasc2[i]=contador7;
                    }
                
                
            }
            if (contador7==3) {
                f_ok($('#asc11'));
                f_ok($('#asc12'));
                f_ok($('#asc13'));
            }else {
                f_no($('#asc11'));
                f_no($('#asc12'));
                f_no($('#asc13'));
            }
            var asc14=$('#asc14').val();
            var asc15=$('#asc15').val();
            var asc16=$('#asc16').val();
            var contador8=0;
            if (asc15==(ssac4+ssac5)|| asc15==(ssac4+ssac6) || asc15==(ssac6+ssac5)) {
                contador8++;
                f_ok($('#asc15'));
            }else {
                contador8;
                f_no($('#asc15'));
            }
            if (asc14==ssac4 || asc14==ssac5 || asc14==ssac6) {
                contador8++;
                f_ok($('#asc14'));
            }else {
                contador8;
                f_no($('#asc14'));
            }
            if (asc16==(ssac4+ssac5+ssac6)) {
                contador8++;
                f_ok($('#asc16'));
            }else {
                contador8;
                f_no($('#asc16'));
            }
            cor=cor+(((contador7+contador8)*1)/6) ;
            inc=inc+(1-(((contador7+contador8)*1)/6));

            var assoc3=[$('#asc21').val(),$('#asc22').val(),$('#asc23').val()];
            var pasc3=[ssac7,ssac8,ssac9];
            var contador9=0;
            for (var i = 0; i < pasc3.length; i++) {
                
                    if (assoc3[0]==pasc3[i]) {
                        contador9++;
                        pasc3[i]=contador9;
                    }
                
                
            }
            for (var i = 0; i < pasc3.length; i++) {
                
                    if (assoc3[1]==pasc3[i]) {
                        contador9++;
                        pasc3[i]=contador9;

                    }
                
                
            }
            for (var i = 0; i < pasc3.length; i++) {
                
                    if (assoc3[2]==pasc3[i]) {
                        contador9++;
                        pasc3[i]=contador9;
                    }
                
                
            }
            if (contador9==3) {
                f_ok($('#asc21'));
                f_ok($('#asc22'));
                f_ok($('#asc23'));
            }else {
                f_no($('#asc21'));
                f_no($('#asc22'));
                f_no($('#asc23'));
            }
            var asc24=$('#asc24').val();
            var asc25=$('#asc25').val();
            var asc26=$('#asc26').val();
            var contador10=0;
            if (asc24==(ssac7+ssac8)|| asc24==(ssac7+ssac9) || asc24==(ssac9+ssac8)) {
                contador10++;
                f_ok($('#asc24'));
            }else {
                contador10;
                f_no($('#asc24'));
            }
            if (asc25==ssac7 || asc25==ssac8 || asc25==ssac9) {
                contador10++;
                f_ok($('#asc25'));
            }else {
                contador10;
                f_no($('#asc25'));
            }
            if (asc26==(ssac7+ssac8+ssac9)) {
                contador10++;
                f_ok($('#asc26'));
            }else {
                contador10;
                f_no($('#asc26'));
            }
            cor=cor+(((contador9+contador10)*1)/6) ;
            inc=inc+(1-(((contador9+contador10)*1)/6));
            ////////////////////////////////////////////////////////////////////////////////////////////////////////
            var res5res1=[$('#res4res1').val(),$('#res4res2').val(),$('#res4res3').val(),$('#res4res4').val()];
            res5res1=parseInt(res5res1.join('')) ;
            var d1=0;
            if (isNaN(res5res1)) {
                d1=[];
            }else {
                d1=res5res1.toString().split('');
            }
            
            var rs1=0, res1=[];
            if (resta1>resta2) {
                rs1=resta1-resta2;
            }else {
                rs1=resta2-resta1;
            }
            rs1=zfill(rs1, 4); 
            var total1=rs1.split('');
            if (d1.length==4 || d1.length==0) {
                res1=res5res1;
            }else {
                res1=zfill(res5res1, 4);    
            }
            res1=res1.toString().split('');
            for (var i = 0; i < 4; i++) {
                if (res1[i]==total1[i]) {
                    cor++;
                    f_ok($('#res4res'+(i+1)));
                }else {
                    inc++;
                    f_no($('#res4res'+(i+1)));
                }
            }

            var res5res2=[$('#res4res11').val(),$('#res4res12').val(),$('#res4res13').val(),$('#res4res14').val()];
            res5res2=parseInt(res5res2.join('')) ;
            
            if (isNaN(res5res2)) {
                d2=[];
            }else {
                d2=res5res2.toString().split('');    
            }
            
            var rs2=0, res2=[];
            if (resta3>resta4) {
                rs2=resta3-resta4;
            }else {
                rs2=resta4-resta3;
            }
            rs2=zfill(rs2, 4); 
            var total2=rs2.split('');
            if (d2.length==4 || d2.length==0) {
                res2=res5res2;
            }else {
                res2=zfill(res5res2, 4);    
            }
            res2=res2.toString().split('');
            for (var i = 0; i < 4; i++) {
                if (res2[i]==total2[i]) {
                    cor++;
                    f_ok($('#res4res1'+(i+1)));
                }else {
                    inc++;
                    f_no($('#res4res1'+(i+1)));
                }
            }    
            
                
            
            var res5res3=[$('#res4res21').val(),$('#res4res22').val(),$('#res4res23').val(),$('#res4res24').val()];
            res5res3=parseInt(res5res3.join('')) ;
            var d3=0;
            if (isNaN(res5res3)) {
                d3=[];
            }else {
                d3=res5res3.toString().split('');
            }
            var rs3=0, res3=[];
            if (resta5>resta6) {
                rs3=resta5-resta6;
            }else {
                rs3=resta6-resta5;
            }
            rs3=zfill(rs3, 4); 
            var total3=rs3.split('');
            if (d3.length==4 || d3.length==0) {
                res3=res5res3;
            }else {
                res3=zfill(res5res3, 4);    
            }
            res3=res3.toString().split('');
            for (var i = 0; i < 4; i++) {
                if (res3[i]==total3[i]) {
                    cor++;
                    f_ok($('#res4res2'+(i+1)));
                }else {
                    inc++;
                    f_no($('#res4res2'+(i+1)));
                }
            }    
            
            var res5res4=[$('#res4res31').val(),$('#res4res32').val(),$('#res4res33').val(),$('#res4res34').val()];
            res5res4=parseInt(res5res4.join('')) ;
            var d4=0;
            if (isNaN(res5res4)) {
                d4=[];
            }else {
                d4=res5res4.toString().split('');
            }
            var rs4=0, res4=[];
            if (resta7>resta8) {
                rs4=resta7-resta8;
            }else {
                rs4=resta7-resta8;
            }
            rs4=zfill(rs4, 4); 
            var total4=rs4.split('');
            if (d4.length==4 || d4.length==0) {
                res4=res5res4;
            }else {
                res4=zfill(res5res4, 4);    
            }
            res4=res4.toString().split('');
            for (var i = 0; i < 4; i++) {
                if (res4[i]==total4[i]) {
                    cor++;
                    f_ok($('#res4res3'+(i+1)));
                }else {
                    inc++;
                    f_no($('#res4res3'+(i+1)));
                }
            }
            ////////////////////////////////////////////////////////////////////
            var scombi1=$('#scombi1').val();
            var scombi2=$('#scombi2').val();
            var rcombi1=$('#rcombi1').val();
            var p7cont1=0;
            if (scombi1==(p7oc1[0]+p7oc1[2])) {
                p7cont1++;
                f_ok($('#scombi1'));
            }else {
                p7cont1;
                f_no($('#scombi1'));
            }
            if (scombi2==(p7oc1[1])) {
                p7cont1++;
                f_ok($('#scombi2'));
            }else {
                p7cont1;
                f_no($('#scombi2'));
            }
            if (rcombi1==((p7oc1[0]+p7oc1[2])-p7oc1[1])) {
                p7cont1++;
                f_ok($('#rcombi1'));
            }else {
                p7cont1;
                f_no($('#rcombi1'));
            }
            var p7cal1=(parseInt(p7cont1)*1)/3;
            cor=(cor+parseFloat(p7cal1));
            inc=(inc+(1-parseFloat(p7cal1)));
            var scombi11=$('#scombi11').val();
            var scombi12=$('#scombi12').val();
            var rcombi11=$('#rcombi11').val();
            var p7cont2=0;
            if (scombi11==(p7oc2[0]-p7oc2[1])) {
                p7cont2++;
                f_ok($('#scombi11'));
            }else {
                p7cont2;
                f_no($('#scombi11'));
            }
            if (scombi12==(p7oc2[2])) {
                p7cont2++;
                f_ok($('#scombi12'));
            }else {
                p7cont1;
                f_no($('#scombi12'));
            }
            if (rcombi11==((p7oc2[0]-p7oc2[1])+p7oc2[2])) {
                p7cont2++;
                f_ok($('#rcombi11'));
            }else {
                p7cont2;
                f_no($('#rcombi11'));
            }
            var p7cal2=(parseInt(p7cont2)*1)/3;
            cor=(cor+parseFloat(p7cal2));
            inc=(inc+(1-parseFloat(p7cal2)));
            var scombi21=$('#scombi21').val();
            var scombi22=$('#scombi22').val();
            var rcombi21=$('#rcombi21').val();
            var p7cont3=0;
            if (scombi21==(p7oc3[0])) {
                p7cont3++;
                f_ok($('#scombi21'));
            }else {
                p7cont2;
                f_no($('#scombi21'));
            }
            if (scombi22==(p7oc3[1]-p7oc3[2])) {
                p7cont3++;
                f_ok($('#scombi22'));
            }else {
                p7cont3;
                f_no($('#scombi22'));
            }
            if (rcombi21==(p7oc3[0]-(p7oc3[1]-p7oc3[2]))) {
                p7cont3++;
                f_ok($('#rcombi21'));
            }else {
                p7cont3;
                f_no($('#rcombi21'));
            }
            var p7cal3=(parseInt(p7cont3)*1)/3;
            cor=(cor+parseFloat(p7cal3));
            inc=(inc+(1-parseFloat(p7cal3)));
            ///////////////////////////////////////////////////////////////////
            var opdesc1=$('#opdesc1').val();
            var opdesc2=$('#opdesc2').val();
            var opdesc3=$('#opdesc3').val();
            var opdesc4=$('#opdesc4').val();
            var opdesc5=$('#opdesc5').val();
            var opdesc6=$('#opdesc6').val();
            var opdesc7=$('#opdesc7').val();
            var opdesc8=$('#opdesc8').val();
            var opdesc9=$('#opdesc9').val();
            var opdesc10=$('#opdesc10').val();
            
            var cx1=0;
            if (opdesc1==(p8da1[0]*100)) {
                cx1++;
                f_ok($('#opdesc1'));
            }else {
                cx1;
                f_no($('#opdesc1'));
            }
            if (opdesc2==(p8da2[0]*100)) {
                cx1++;
                f_ok($('#opdesc2'));
            }else {
                cx1;
                f_no($('#opdesc2'));
            }
            if (opdesc3==(p8da1[1]*10)) {
                cx1++;
                f_ok($('#opdesc3'));
            }else {
                cx1;
                f_no($('#opdesc3'));
            }
            if (opdesc4==(p8da2[1]*10)) {
                cx1++;
                f_ok($('#opdesc4'));
            }else {
                cx1;
                f_no($('#opdesc4'));
            }
            if (opdesc5==(p8da1[2])) {
                cx1++;
                f_ok($('#opdesc5'));
            }else {
                cx1;
                f_no($('#opdesc5'));
            }
            if (opdesc6==(p8da2[2])) {
                cx1++;
                f_ok($('#opdesc6'));
            }else {
                cx1;
                f_no($('#opdesc6'));
            }
            if (parseInt(opdesc7)==(parseInt(p8da1.join(''))-parseInt(p8da2.join('')) )) {
                cx1++;
                f_ok($('#opdesc7'));
            }else {
                cx1;
                f_no($('#opdesc7'));
            }
            if (parseInt(opdesc8) ==((parseInt(p8da1[0])-parseInt(p8da2[0]))*100 ))  {
                cx1++;
                f_ok($('#opdesc8'));
            }else {
                cx1;
                f_no($('#opdesc8'));
            }
            if (parseInt(opdesc9) ==((parseInt(p8da1[1])-parseInt(p8da2[1]))*10 ))  {
                cx1++;
                f_ok($('#opdesc9'));
            }else {
                cx1;
                f_no($('#opdesc9'));
            }
            if (parseInt(opdesc10)==(parseInt(p8da1[2])-parseInt(p8da2[2]) ))  {
                cx1++;
                f_ok($('#opdesc10'));
            }else {
                cx1;
                f_no($('#opdesc10'));
            }
            var p8cal1=(cx1*1)/10;
            cor=cor+parseFloat(p8cal1);
            inc=inc+(1-parseFloat(p8cal1));
            var opdesc12=$('#opdesc12').val();
            var opdesc13=$('#opdesc13').val();
            var opdesc14=$('#opdesc14').val();
            var opdesc15=$('#opdesc15').val();
            var opdesc16=$('#opdesc16').val();
            var opdesc17=$('#opdesc17').val();
            var opdesc18=$('#opdesc18').val();
            var opdesc19=$('#opdesc19').val();
            var opdesc20=$('#opdesc20').val();
            var opdesc21=$('#opdesc21').val();
            var cx2=0;
            var p8rod3=p8od3.toString().split('');
            var p8rod4=p8od4.toString().split('');
            if (parseInt(opdesc12) ==(p8rod3[0]*100)) {
                cx2++;
                f_ok($('#opdesc12'));
            }else {
                cx2;
                f_no($('#opdesc12'));
            }
            if (parseInt(opdesc13) ==(p8rod4[0]*100)) {
                cx2++;
                f_ok($('#opdesc13'));
            }else {
                cx2;
                f_no($('#opdesc13'));
            }
            if (parseInt(opdesc14) ==(p8rod3[1]*10)) {
                cx2++;
                f_ok($('#opdesc14'));
            }else {
                cx2;
                f_no($('#opdesc14'));
            }
            if (parseInt(opdesc15) ==(p8rod4[1]*10)) {
                cx2++;
                f_ok($('#opdesc15'));
            }else {
                cx2;
                f_no($('#opdesc15'));
            }
            if (parseInt(opdesc16) ==(p8rod3[2])) {
                cx2++;
                f_ok($('#opdesc16'));
            }else {
                cx2;
                f_no($('#opdesc16'));
            }
            if (parseInt(opdesc17) ==(p8rod4[2])) {
                cx2++;
                f_ok($('#opdesc17'));
            }else {
                cx2;
                f_no($('#opdesc17'));
            }
            if (opdesc18==(parseInt(p8od3)+parseInt(p8od4))) {
                cx2++;
                f_ok($('#opdesc18'));
            }else {
                cx2;
                f_no($('#opdesc18'));
            }
            if (opdesc19==((parseInt(p8rod3[0])+parseInt(p8rod4[0]))*100 ))  {
                cx2++;
                f_ok($('#opdesc19'));
            }else {
                cx2;
                f_no($('#opdesc19'));
            }
            if (opdesc20==((parseInt(p8rod3[1])+parseInt(p8rod4[1]))*10 ))  {
                cx2++;
                f_ok($('#opdesc20'));
            }else {
                cx2;
                f_no($('#opdesc20'));
            }
            if (opdesc21==(parseInt(p8rod3[2])+parseInt(p8rod4[2]) ))  {
                cx2++;
                f_ok($('#opdesc21'));
            }else {
                cx2;
                f_no($('#opdesc21'));
            }
            var p8cal2=(cx2*1)/10;
            cor=cor+parseFloat(p8cal2);
            inc=inc+(1-parseFloat(p8cal2));
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            var prbl1=$('#prbl1').val();
            var prbl2=$('#prbl2').val();
            var prbl3=$('#prbl3').val();
            var prbl4=$('#prbl4').val();
            var prbl5=$('#prbl5').val();
            var prbl6=$('#prbl6').val();
            var prbl7=$('#prbl7').val();
            var prbl8=$('#prbl8').val();
            var prbl9=$('#prbl9').val();
            var prbl10=$('#prbl10').val();
            var rprl1=$('#rprl1').val();
                rprl1=rprl1.split(' ');
            var p9cont1=0;
            if (prbl1=='400') {
                p9cont1++;
                f_ok($('#prbl1'));
            }else {
                p9cont1;
                f_no($('#prbl1'));
            }
            if (prbl2=='200') {
                p9cont1++;
                f_ok($('#prbl2'));
            }else {
                p9cont1;
                f_no($('#prbl2'));
            }
            if (prbl3=='90') {
                p9cont1++;
                f_ok($('#prbl3'));
            }else {
                p9cont1;
                f_no($('#prbl3'));
            }
            if (prbl4=='60') {
                p9cont1++;
                f_ok($('#prbl4'));
            }else {
                p9cont1;
                f_no($('#prbl4'));
            }
            if (prbl5=='7') {
                p9cont1++;
                f_ok($('#prbl5'));
            }else {
                p9cont1;
                f_no($('#prbl5'));
            }
            if (prbl6=='4') {
                p9cont1++;
                f_ok($('#prbl6'));
            }else {
                p9cont1;
                f_no($('#prbl6'));
            }
            if (prbl7=='200') {
                p9cont1++;
                f_ok($('#prbl7'));
            }else {
                p9cont1;
                f_no($('#prbl7'));
            }
            if (prbl8=='30') {
                p9cont1++;
                f_ok($('#prbl8'));
            }else {
                p9cont1;
                f_no($('#prbl8'));
            }
            if (prbl9=='3') {
                p9cont1++;
                f_ok($('#prbl9'));
            }else {
                p9cont1;
                f_no($('#prbl9'));
            }
            if (prbl10=='233') {
                p9cont1++;
                f_ok($('#prbl10'));
            }else {
                p9cont1;
                f_no($('#prbl10'));
            }
            var p9cont2=0;
            for (var i = 0; i < rprl1.length; i++) {
                if (rprl1[i]=='233' ||rprl1[i]=='233.') {
                    p9cont2++;
                    
                }
            }
            if (p9cont2==1) {
                p9cont1++;
                f_ok($('#rprl1'));
            }else {
                 p9cont1;
                f_no($('#rprl1'));
            }
            var p9cal1=(p9cont1*2)/11;
            cor=cor+parseFloat(p9cal1);
            inc=inc+(2-parseFloat(p9cal1));
            Calculo_nota()
            
        }
        
    }
    function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
}