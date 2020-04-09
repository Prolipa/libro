    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=10,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],r_ids3=[],r_ids4=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        ///////pregunta1////////////
        var descen2=['<br><img id="ime1" class="img-responsive c1 " src="img/i1_p94_act95.jpg">','<img id="ime2" class="img-responsive c2" src="img/i2_p94_act95.jpg">','<img id="ime3" class="img-responsive c3" src="img/i3_p94_act95.jpg">','<img id="ime4" class="img-responsive c4" src="img/i4_p94_act95.jpg">','<img id="ime5" class="img-responsive c5" src="img/i5_p94_act95.jpg">'];
        var descen3=['<div style="border-radius:0px 0px 0px 10px; border: 1px dotted orange;"><b class="c2" >zapatero</b> </div>','<div style="border-radius:0px 0px 0px 10px; border: 1px dotted orange;"><b class="c1" >panadero</b></div>','<div style="border-radius:0px 0px 0px 10px; border: 1px dotted orange;"><b class="c3">mecánico</b></div>','<div style="border-radius:0px 0px 0px 10px; border: 1px dotted orange;"><b class="c4">cocinero</b></div>','<div style="border-radius:0px 0px 0px 10px; border: 1px dotted orange;"><b class="c5">pintor</b></div>'];
        var myArray1 = ['0','1','2','3','4'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        //aleatorio literal 3
        for (var i = 1; i <= 5 ; i++) {
            var c=myArray1[i-1];
            $("#imael"+i).html(descen3[c]);
            
            
        };
        $("#resim").html('').append(descen2);
        $("#resim  img").draggable({ //arrastramos
            revert: "invalid",
            zIndex:5,
            containment: "#actividad95",
            scroll: false,                   
        });
        $("#caja_res").droppable({
            drop: function(e, ui) {
                r_ids.push(ui.draggable.attr("src"));
                for(i=1;i<6;i++){ //4 elementos
                    var nn = 'c'+i; //obtenemos la clase
                    if($(ui.draggable).hasClass(nn)){ //comparamos la clase del arrastre
                        if($("#imael1").find("b").hasClass(nn)){ //con la clase del destino q tienen en mismo nombre
                            resp.push('ok');
                        }else{
                            resp.push('no');
                        }
                    }
                }
                
                ui.draggable.attr("style", "");
                $(this).append(ui.draggable);
                $(this).find(".c_imagenes").draggable({disabled:true});
            }
        });
        $("#caja_res1").droppable({
            drop: function(e, ui) {
                r_ids1.push(ui.draggable.attr("src"));
                for(i=1;i<6;i++){ //4 elementos
                    var nn = 'c'+i; //obtenemos la clase
                    if($(ui.draggable).hasClass(nn)){ //comparamos la clase del arrastre
                        if($("#imael2").find("b").hasClass(nn)){ //con la clase del destino q tienen en mismo nombre
                            resp.push('ok');
                        }else{
                            resp.push('no');
                        }
                    }
                }
                ui.draggable.attr("style", "");
                $(this).append(ui.draggable);
                $(this).find(".c_imagenes").draggable({disabled:true});
            }
        });
        $("#caja_res2").droppable({
            drop: function(e, ui) {
                r_ids2.push(ui.draggable.attr("src"));
                for(i=1;i<6;i++){ //4 elementos
                    var nn = 'c'+i; //obtenemos la clase
                    if($(ui.draggable).hasClass(nn)){ //comparamos la clase del arrastre
                        if($("#imael3").find("b").hasClass(nn)){ //con la clase del destino q tienen en mismo nombre
                            resp.push('ok');
                        }else{
                            resp.push('no');
                        }
                    }
                }
                ui.draggable.attr("style", "");
                $(this).append(ui.draggable);
                $(this).find(".c_imagenes").draggable({disabled:true});
            }
        });
        $("#caja_res3").droppable({
            drop: function(e, ui) {
                r_ids3.push(ui.draggable.attr("src"));
                for(i=1;i<6;i++){ //4 elementos
                    var nn = 'c'+i; //obtenemos la clase
                    if($(ui.draggable).hasClass(nn)){ //comparamos la clase del arrastre
                        if($("#imael4").find("b").hasClass(nn)){ //con la clase del destino q tienen en mismo nombre
                            resp.push('ok');
                        }else{
                            resp.push('no');
                        }
                    }
                }
                ui.draggable.attr("style", "");
                $(this).append(ui.draggable);
                $(this).find(".c_imagenes").draggable({disabled:true});
            }
        });
        $("#caja_res4").droppable({
            drop: function(e, ui) {
                r_ids4.push(ui.draggable.attr("src"));
                for(i=1;i<6;i++){ //4 elementos
                    var nn = 'c'+i; //obtenemos la clase
                    if($(ui.draggable).hasClass(nn)){ //comparamos la clase del arrastre
                        if($("#imael5").find("b").hasClass(nn)){ //con la clase del destino q tienen en mismo nombre
                            resp.push('ok');
                        }else{
                            resp.push('no');
                        }
                    }
                }
                ui.draggable.attr("style", "");
                $(this).append(ui.draggable);
                $(this).find(".c_imagenes").draggable({disabled:true});
            }
        });
        ////////////////pregunta2//////////////////////////
        var p2suce1= parseInt((Math.random() * 2000) + 1000);
        var p2suce2= parseInt((Math.random() * 7000) + 3000);
        var p2ptr1= parseInt((Math.random() * 50) + 10);
        var p2ptr2= parseInt((Math.random() * 100) + 20);
        var p2vsu1=[p2suce1];
        var p2vsu2=[p2suce2];
        for (var i = 0; i < 5; i++) {
            p2vsu1.push((p2vsu1[i]+p2ptr1));
            p2vsu2.push((p2vsu2[i]-p2ptr2));
        }
        $('#a95capsu1').html(p2vsu1[0]);
        $('#a95capsu2').html(p2vsu1[1]);
        $('#a95capsu3').html(p2vsu2[0]);
        $('#a95capsu4').html(p2vsu2[1]);
        /////////////////pregunta3////////////////////////////////////////////////////
        var p3res1= parseInt((Math.random() * 8000) + 1000);
        var p3res2= parseInt((Math.random() * 8000) + 1000);
        var p3res3= parseInt((Math.random() * 4000) + 1000);
        var p3res4= parseInt((Math.random() * 4000) + 1000);
        var p3res5= parseInt((Math.random() * 8000) + 1000);
        var p3res6= parseInt((Math.random() * 8000) + 1000);
        var p3res7= parseInt((Math.random() * 4000) + 1000);
        var p3res8= parseInt((Math.random() * 4000) + 1000);
        if (p3res1>p3res2) {
            var p3vres1=p3res1.toString().split('');    
            var p3vres2=p3res2.toString().split('');
        }else {
            var p3vres1=p3res2.toString().split('');    
            var p3vres2=p3res1.toString().split('');
        }
        for (var i = 0; i < p3vres1.length; i++) {
            $('#a95op'+(i+1)).html(p3vres1[i]);    
        }
        for (var i = 0; i < p3vres2.length; i++) {
            $('#a95op'+(i+5)).html(p3vres2[i]);    
        }
        var p3vres3=p3res3.toString().split('');    
        var p3vres4=p3res4.toString().split('');
        for (var i = 0; i < p3vres3.length; i++) {
            $('#a95op1'+(i+1)).html(p3vres3[i]);    
        }
        for (var i = 0; i < p3vres4.length; i++) {
            $('#a95op1'+(i+5)).html(p3vres4[i]);    
        }
        if (p3res5>p3res6) {
            var p3vres5=p3res5.toString().split('');    
            var p3vres6=p3res6.toString().split('');    
        }else {
            var p3vres5=p3res6.toString().split('');    
            var p3vres6=p3res5.toString().split('');
        }
        
        for (var i = 0; i < p3vres5.length; i++) {
            $('#a95op2'+(i+1)).html(p3vres5[i]);    
        }
        for (var i = 0; i < p3vres6.length; i++) {
            $('#a95op2'+(i+5)).html(p3vres6[i]);    
        }
        var p3vres7=p3res7.toString().split('');    
        var p3vres8=p3res8.toString().split('');
        for (var i = 0; i < p3vres7.length; i++) {
            $('#a95op3'+(i+1)).html(p3vres7[i]);    
        }
        for (var i = 0; i < p3vres8.length; i++) {
            $('#a95op3'+(i+5)).html(p3vres8[i]);    
        }
        /////////////////pregunta4//////////////////////////////////////////////////////////////////////
        var p4res1= parseInt((Math.random() * 100) + 900);
        var p4res2= parseInt((Math.random() * 200) + 400);
        var p4res3= parseInt((Math.random() * 150) + 100);
        var p4res4= parseInt((Math.random() * 50) + 10);
        $('#a94ga1').html(p4res1);
        $('#a94ga2').html(p4res2);
        $('#a94ga3').html(p4res3);
        $('#a94ga4').html(p4res4);    
        ///////////////////////pregunta5//////////////////////////////////////////////////////////////////////////////
        var p5vimg1=['<img class="img-responsive" src="img/i6_p94_act95.jpg" alt=""><input class="form-control" type="text" id="a95rang1" style=" text-align:center; border-top: 1px solid #00ABCC; border-bottom: 1px dashed #00ABCC; border-left: 4px solid #00ABCC; border-right: 4px solid #00ABCC;"><br>','<img class="img-responsive" src="img/i7_p94_act95.jpg" alt=""><input class="form-control" type="text" id="a95rang2" style=" text-align:center; border-top: 1px solid #00ABCC; border-bottom: 1px dashed #00ABCC; border-left: 4px solid #00ABCC; border-right: 4px solid #00ABCC;"><br>','<img class="img-responsive" src="img/i8_p94_act95.jpg" alt=""><input class="form-control" type="text" id="a95rang3" style=" text-align:center; border-top: 1px solid #00ABCC; border-bottom: 1px dashed #00ABCC; border-left: 4px solid #00ABCC; border-right: 4px solid #00ABCC;"><br>'];
        
        var myArray2 = ['0','1','2'];
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
         //aleatorio literal 1
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray2[i-1];
            $("#a94nang"+i).html(p5vimg1[c]);
            
            
        };
        ////////////////////////////pregunta7//////////////////////////////////////////////////////
        var p7vimg1=['<img class="img-responsive" src="img/i9_p94_act95.jpg" alt=""><br>','<img class="img-responsive" src="img/i10_p94_act95.jpg" alt=""><br>','<img class="img-responsive" src="img/i11_p94_act95.jpg" alt=""><br>'];
        var p7vinp1=['<input class="form-control" onkeyup="mayus(this);" type="text" id="a95runi1" style="border-radius:10px; text-align:center; border-top: 4px solid #A8D6AC; border-bottom: 4px solid #A8D6AC; border-left: 4px solid #A8D6AC; border-right: 4px solid #A8D6AC;">','<input onkeyup="mayus(this);" class="form-control" type="text" id="a95runi2" style="border-radius:10px; text-align:center; border-top: 4px solid #A8D6AC; border-bottom: 4px solid #A8D6AC; border-left: 4px solid #A8D6AC; border-right: 4px solid #A8D6AC;">','<input onkeyup="mayus(this);" class="form-control" type="text" id="a95runi3" style="border-radius:10px; text-align:center; border-top: 4px solid #A8D6AC; border-bottom: 4px solid #A8D6AC; border-left: 4px solid #A8D6AC; border-right: 4px solid #A8D6AC;">']
        var myArray3 = ['0','1','2'];
        var i,j,k;
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
         //aleatorio literal 1
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray3[i-1];
            $("#a94imag"+i).html(p7vimg1[c]);
            $("#a94inp"+i).html(p7vinp1[c]);
            
        };
        //////////////////////pregunta8//////////////////////////////////////////////////////////
        var a95num1 = parseInt((Math.random() * 14) + 2);
        var a95num2 = parseInt((Math.random() * 10) + 2);
        var a95num3 = parseInt((Math.random() * 14) + 2);
        
        $('#cantip1').html(a95num1);
        $('#cantip2').html(a95num2);
        $('#cantip3').html(a95num3);
        /////////////////////////////////pregunta9////////////////////////////////////////////////////
        
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            ///////////////////pregunta1/////////////////////////////////
            var a95cc1=0;
            for(i=0;i<resp.length;i++){
                if(resp.length == 5 && resp[i]=='ok'){
                    a95cc1++;
                    f_ok($('.images'));
                }else{
                    a95cc1;
                    f_no($('.images'));
                }
            }
            var a95cc11=0;
            var a95rpar1=['zapatero, zapatos','panadero, pan','mecánico, auto','mecánico, automóvil','cocinero, comida','pintor, cuadro'];
            var a95par1=[$('#a95rpao1').val()+', '+$('#a95rpao2').val(),$('#a95rpao3').val()+', '+$('#a95rpao4').val(),$('#a95rpao5').val()+', '+$('#a95rpao6').val(),$('#a95rpao7').val()+', '+$('#a95rpao8').val(),$('#a95rpao9').val()+', '+$('#a95rpao10').val()];
            for (var i = 0; i < a95rpar1.length; i++) {
                if (a95par1[0]==a95rpar1[i]) {
                    a95cc11++;
                    a95rpar1[i]=a95cc11;
                }
            }
            if (a95cc11==1) {
                a95cc1++;
                f_ok($('#a95rpao1'));
                f_ok($('#a95rpao2'));
            }else {
                a95cc1;
                f_no($('#a95rpao1'));
                f_no($('#a95rpao2'));
            }
            var a95cc11=0;
            for (var i = 0; i < a95rpar1.length; i++) {
                if (a95par1[1]==a95rpar1[i]) {
                    a95cc11++;
                    a95rpar1[i]=a95cc11;
                }
            }
            if (a95cc11==1) {
                a95cc1++;
                f_ok($('#a95rpao3'));
                f_ok($('#a95rpao4'));
            }else {
                a95cc1;
                f_no($('#a95rpao3'));
                f_no($('#a95rpao4'));
            }
            var a95cc11=0;
            for (var i = 0; i < a95rpar1.length; i++) {
                if (a95par1[2]==a95rpar1[i]) {
                    a95cc11++;
                    a95rpar1[i]=a95cc11;
                }
            }
            if (a95cc11==1) {
                a95cc1++;
                f_ok($('#a95rpao5'));
                f_ok($('#a95rpao6'));
            }else {
                a95cc1;
                f_no($('#a95rpao5'));
                f_no($('#a95rpao6'));
            }
            var a95cc11=0;
            for (var i = 0; i < a95rpar1.length; i++) {
                if (a95par1[3]==a95rpar1[i]) {
                    a95cc11++;
                    a95rpar1[i]=a95cc11;
                }
            }
            if (a95cc11==1) {
                a95cc1++;
                f_ok($('#a95rpao7'));
                f_ok($('#a95rpao8'));
            }else {
                a95cc1;
                f_no($('#a95rpao7'));
                f_no($('#a95rpao8'));
            }
            var a95cc11=0;
            for (var i = 0; i < a95rpar1.length; i++) {
                if (a95par1[4]==a95rpar1[i]) {
                    a95cc11++;
                    a95rpar1[i]=a95cc11;
                }
            }
            if (a95cc11==1) {
                a95cc1++;
                f_ok($('#a95rpao9'));
                f_ok($('#a95rpao10'));
            }else {
                a95cc1;
                f_no($('#a95rpao9'));
                f_no($('#a95rpao10'));
            }
            var a95resu1=((a95cc1*2)/10);
            cor=cor+parseFloat(a95resu1);
            inc=inc-(2-parseFloat(a95resu1));
            ////////////////////pregunta2////////////////////////////
            var a95rpsu1=$('#a95rpsu1').val();
            var a95rpsu2=$('#a95rpsu2').val();
            var a95rpsu3=$('#a95rpsu3').val();
            var a95rpsu4=$('#a95rpsu4').val();
            var a95cc2=0;
            if (a95rpsu1==('+'+p2ptr1)  || a95rpsu1==(p2ptr1)) {
                a95cc2++;
                f_ok($('#a95rpsu1'));
            }else {
                a95cc2;
                f_no($('#a95rpsu1'));
            }
            if (a95rpsu2==('+'+p2ptr1)  || a95rpsu2==(p2ptr1)) {
                a95cc2++;
                f_ok($('#a95rpsu2'));
            }else {
                a95cc2;
                f_no($('#a95rpsu2'));
            }
            if (a95rpsu3==('+'+p2ptr1)  || a95rpsu3==(p2ptr1)) {
                a95cc2++;
                f_ok($('#a95rpsu3'));
            }else {
                a95cc2;
                f_no($('#a95rpsu3'));
            }
            if (a95rpsu4==('+'+p2ptr1)  || a95rpsu4==(p2ptr1)) {
                a95cc2++;
                f_ok($('#a95rpsu4'));
            }else {
                a95cc2;
                f_no($('#a95rpsu4'));
            }

            var a95rpsu11=$('#a95rpsu11').val();
            var a95rpsu12=$('#a95rpsu12').val();
            var a95rpsu13=$('#a95rpsu13').val();
            var a95rpsu14=$('#a95rpsu14').val();
            
            if (a95rpsu11==('-'+p2ptr2)  || a95rpsu11==(p2ptr2)) {
                a95cc2++;
                f_ok($('#a95rpsu11'));
            }else {
                a95cc2;
                f_no($('#a95rpsu11'));
            }
            if (a95rpsu12==('-'+p2ptr2)  || a95rpsu12==(p2ptr2)) {
                a95cc2++;
                f_ok($('#a95rpsu12'));
            }else {
                a95cc2;
                f_no($('#a95rpsu12'));
            }
            if (a95rpsu13==('-'+p2ptr2)  || a95rpsu13==(p2ptr2)) {
                a95cc2++;
                f_ok($('#a95rpsu13'));
            }else {
                a95cc2;
                f_no($('#a95rpsu13'));
            }
            if (a95rpsu14==('-'+p2ptr2)  || a95rpsu14==(p2ptr2)) {
                a95cc2++;
                f_ok($('#a95rpsu14'));
            }else {
                a95cc2;
                f_no($('#a95rpsu14'));
            }
            var a95rpsu5=$('#a95rpsu5').val();
            var a95rpsu6=$('#a95rpsu6').val();
            var a95rpsu7=$('#a95rpsu7').val();
            if (a95rpsu5==p2vsu1[2]) {
                a95cc2++;
                f_ok($('#a95rpsu5'));
            }else {
                a95cc2;
                f_no($('#a95rpsu5'));
            }
            if (a95rpsu6==p2vsu1[3]) {
                a95cc2++;
                f_ok($('#a95rpsu6'));
            }else {
                a95cc2;
                f_no($('#a95rpsu6'));
            }
            if (a95rpsu7==p2vsu1[4]) {
                a95cc2++;
                f_ok($('#a95rpsu7'));
            }else {
                a95cc2;
                f_no($('#a95rpsu7'));
            }
            var a95rpsu15=$('#a95rpsu15').val();
            var a95rpsu16=$('#a95rpsu16').val();
            var a95rpsu17=$('#a95rpsu17').val();
            if (a95rpsu15==p2vsu2[2]) {
                a95cc2++;
                f_ok($('#a95rpsu15'));
            }else {
                a95cc2;
                f_no($('#a95rpsu15'));
            }
            if (a95rpsu16==p2vsu2[3]) {
                a95cc2++;
                f_ok($('#a95rpsu16'));
            }else {
                a95cc2;
                f_no($('#a95rpsu16'));
            }
            if (a95rpsu17==p2vsu2[4]) {
                a95cc2++;
                f_ok($('#a95rpsu17'));
            }else {
                a95cc2;
                f_no($('#a95rpsu17'));
            }
            var a95resu2=((a95cc2*1)/14);
            cor=cor+parseFloat(a95resu2);
            inc=inc-(1-parseFloat(a95resu2));
            //////////////////pregunta3/////////////////////////////////////////////
            var a95rope1=[$('#a95rope1').val(),$('#a95rope2').val(),$('#a95rope3').val(),$('#a95rope4').val()];
                a95rope1=a95rope1.join('');
            var a95cc3=0;
            if (p3res1>p3res2) {
                if (parseInt(a95rope1)==(p3res1-p3res2)) {
                    a95cc3++;
                    f_ok($('#a95rope1'));
                    f_ok($('#a95rope2'));
                    f_ok($('#a95rope3'));
                    f_ok($('#a95rope4'));
                }else {
                    a95cc3;
                    f_no($('#a95rope1'));
                    f_no($('#a95rope2'));
                    f_no($('#a95rope3'));
                    f_no($('#a95rope4'));
                }    
            }else {
                if (parseInt(a95rope1)==(p3res2-p3res1)) {
                    a95cc3++;
                    f_ok($('#a95rope1'));
                    f_ok($('#a95rope2'));
                    f_ok($('#a95rope3'));
                    f_ok($('#a95rope4'));
                }else {
                    a95cc3;
                    f_no($('#a95rope1'));
                    f_no($('#a95rope2'));
                    f_no($('#a95rope3'));
                    f_no($('#a95rope4'));
                }
            }
            
            var a95rope2=[$('#a95rope11').val(),$('#a95rope12').val(),$('#a95rope13').val(),$('#a95rope14').val()];
                a95rope2=a95rope2.join('');
            
            if (parseInt(a95rope2)==(p3res3+p3res4)) {
                a95cc3++;
                f_ok($('#a95rope11'));
                f_ok($('#a95rope12'));
                f_ok($('#a95rope13'));
                f_ok($('#a95rope14'));
            }else {
                a95cc3;
                f_no($('#a95rope11'));
                f_no($('#a95rope12'));
                f_no($('#a95rope13'));
                f_no($('#a95rope14'));
            }
            var a95rope3=[$('#a95rope21').val(),$('#a95rope22').val(),$('#a95rope23').val(),$('#a95rope24').val()];
                a95rope3=a95rope3.join('');
            if (p3res5>p3res6) {
                if (parseInt(a95rope3)==(p3res5-p3res6)) {
                    a95cc3++;
                    f_ok($('#a95rope21'));
                    f_ok($('#a95rope22'));
                    f_ok($('#a95rope23'));
                    f_ok($('#a95rope24'));
                }else {
                    a95cc3;
                    f_no($('#a95rope21'));
                    f_no($('#a95rope22'));
                    f_no($('#a95rope23'));
                    f_no($('#a95rope24'));
                }    
            }else {
                if (parseInt(a95rope3)==(p3res6-p3res5)) {
                    a95cc3++;
                    f_ok($('#a95rope21'));
                    f_ok($('#a95rope22'));
                    f_ok($('#a95rope23'));
                    f_ok($('#a95rope24'));
                }else {
                    a95cc3;
                    f_no($('#a95rope21'));
                    f_no($('#a95rope22'));
                    f_no($('#a95rope23'));
                    f_no($('#a95rope24'));
                }
            }
            var a95rope4=[$('#a95rope31').val(),$('#a95rope32').val(),$('#a95rope33').val(),$('#a95rope34').val()];
                a95rope4=a95rope4.join('');
            
            if (parseInt(a95rope4)==(p3res7+p3res8)) {
                a95cc3++;
                f_ok($('#a95rope31'));
                f_ok($('#a95rope32'));
                f_ok($('#a95rope33'));
                f_ok($('#a95rope34'));
            }else {
                a95cc3;
                f_no($('#a95rope31'));
                f_no($('#a95rope32'));
                f_no($('#a95rope33'));
                f_no($('#a95rope34'));
            }
            var a95resu3=((a95cc3*2)/4);
            cor=cor+parseFloat(a95resu3);
            inc=inc-(2-parseFloat(a95resu3));
            ///////////////////pregunta4////////////////////////////////////////////////////
            
            var a95rga1=[$('#a95rga1').val(),$('#a95rga2').val(),$('#a95rga3').val()];
                a95rga1=a95rga1.join('');
            var a95rga2=[$('#a95rga4').val(),$('#a95rga5').val(),$('#a95rga6').val()];
                a95rga2=a95rga2.join('');
            var a95rga3=[$('#a95rga7').val(),$('#a95rga8').val(),$('#a95rga9').val(),$('#a95rga10').val()];
                a95rga3=a95rga3.join('');
            var a95cc4=0;
            if (parseInt(a95rga1)==p4res1) {
                a95cc4++;
                f_ok($('#a95rga1'));
                f_ok($('#a95rga2'));
                f_ok($('#a95rga3'));
            }else {
                a95cc4;
                f_no($('#a95rga1'));
                f_no($('#a95rga2'));
                f_no($('#a95rga3'));
            }
            if (parseInt(a95rga2)==p4res2) {
                a95cc4++;
                f_ok($('#a95rga4'));
                f_ok($('#a95rga5'));
                f_ok($('#a95rga6'));
            }else {
                a95cc4;
                f_no($('#a95rga4'));
                f_no($('#a95rga5'));
                f_no($('#a95rga6'));
            }
            if (parseInt(a95rga3)==(p4res1+p4res2)) {
                a95cc4++;
                f_ok($('#a95rga7'));
                f_ok($('#a95rga8'));
                f_ok($('#a95rga9'));
                f_ok($('#a95rga10'));
            }else {
                a95cc4;
                f_no($('#a95rga7'));
                f_no($('#a95rga8'));
                f_no($('#a95rga9'));
                f_no($('#a95rga10'));
            }

            var a95rga4=[$('#a95rga11').val(),$('#a95rga12').val(),$('#a95rga13').val(),$('#a95rga14').val()];
                a95rga4=a95rga4.join('');
            var a95rga5=[$('#a95rga15').val(),$('#a95rga16').val(),$('#a95rga17').val()];
                a95rga5=a95rga5.join('');
            var a95rga6=[$('#a95rga18').val(),$('#a95rga19').val(),$('#a95rga110').val(),$('#a95rga111').val()];
                a95rga6=a95rga6.join('');
            
            if (parseInt(a95rga4)==(p4res1+p4res2)) {
                a95cc4++;
                f_ok($('#a95rga11'));
                f_ok($('#a95rga12'));
                f_ok($('#a95rga13'));
                f_ok($('#a95rga14'));
            }else {
                a95cc4;
                f_no($('#a95rga11'));
                f_no($('#a95rga12'));
                f_no($('#a95rga13'));
                f_no($('#a95rga14'));
            }
            if (parseInt(a95rga5)==p4res3) {
                a95cc4++;
                
                f_ok($('#a95rga15'));
                f_ok($('#a95rga16'));
                f_ok($('#a95rga17'));
            }else {
                a95cc4;
                
                f_no($('#a95rga15'));
                f_no($('#a95rga16'));
                f_no($('#a95rga17'));
            }
            if (parseInt(a95rga6)==((p4res1+p4res2)-p4res3)) {
                a95cc4++;
                
                f_ok($('#a95rga18'));
                f_ok($('#a95rga19'));
                f_ok($('#a95rga110'));
                f_ok($('#a95rga111'));
            }else {
                a95cc4;
                
                f_no($('#a95rga18'));
                f_no($('#a95rga19'));
                f_no($('#a95rga110'));
                f_no($('#a95rga111'));
            }

            var a95rga7=[$('#a95rga21').val(),$('#a95rga22').val(),$('#a95rga23').val(),$('#a95rga24').val()];
                a95rga7=a95rga7.join('');
            var a95rga8=[$('#a95rga25').val(),$('#a95rga26').val()];
                a95rga8=a95rga8.join('');
            var a95rga9=[$('#a95rga27').val(),$('#a95rga28').val(),$('#a95rga29').val(),$('#a95rga210').val()];
                a95rga9=a95rga9.join('');
            
            if (parseInt(a95rga7)==((p4res1+p4res2)-p4res3)) {
                a95cc4++;
                f_ok($('#a95rga21'));
                f_ok($('#a95rga22'));
                f_ok($('#a95rga23'));
                f_ok($('#a95rga24'));
            }else {
                a95cc4;
                f_no($('#a95rga21'));
                f_no($('#a95rga22'));
                f_no($('#a95rga23'));
                f_no($('#a95rga24'));
            }
            if (parseInt(a95rga8)==p4res4) {
                a95cc4++;
                
                f_ok($('#a95rga25'));
                f_ok($('#a95rga26'));
                
            }else {
                a95cc4;
                
                f_no($('#a95rga25'));
                f_no($('#a95rga26'));
                
            }
            if (parseInt(a95rga9)==(((p4res1+p4res2)-p4res3)-p4res4)) {
                a95cc4++;
                f_ok($('#a95rga27'));
                f_ok($('#a95rga28'));
                f_ok($('#a95rga29'));
                f_ok($('#a95rga210'));
                
            }else {
                a95cc4;
                f_no($('#a95rga27'));
                f_no($('#a95rga28'));
                f_no($('#a95rga29'));
                f_no($('#a95rga210'));
                
            }
            var a95rga211=$('#a95rga211').val();
            if (a95rga211==(((p4res1+p4res2)-p4res3)-p4res4)) {
                a95cc4++;
                f_ok($('#a95rga211'));
            }else {
                a95cc4;
                f_no($('#a95rga211'));
            }
            var a95resu4=((a95cc4*1)/10);
            cor=cor+parseFloat(a95resu4);
            inc=inc-(1-parseFloat(a95resu4));
            ////////////////////////////pregunta5//////////////////////////////////////////////////////////////
            var a95rang1 = $('#a95rang1').val();
            var a95rang2 = $('#a95rang2').val();
            var a95rang3 = $('#a95rang3').val();
            var a95cc5=0;
            if (a95rang1=='ángulo obtuso' || a95rang1=='angulo obtuso') {
                a95cc5++;
                f_ok($('#a95rang1'));
            }else {
                a95cc5;
                f_no($('#a95rang1'));
            }
            if (a95rang2=='ángulo agudo' || a95rang2=='angulo agudo') {
                a95cc5++;
                f_ok($('#a95rang2'));
            }else {
                a95cc5;
                f_no($('#a95rang2'));
            }
            if (a95rang3=='ángulo recto' || a95rang3=='angulo recto') {
                a95cc5++;
                f_ok($('#a95rang3'));
            }else {
                a95cc5;
                f_no($('#a95rang3'));
            }
            var a95resu5=((a95cc5*1)/3);
            cor=cor+parseFloat(a95resu5);
            inc=inc-(1-parseFloat(a95resu5));
            //////////////////////////pregunta6/////////////////////////////////////////////////////
            var a95cc6=0;
            for(i=0;i<resp1.length;i++){
                if(resp1.length == 3 && resp1[i]=='ok'){
                    a95cc6++;
                    f_ok($('.imagen1'));
                }else{
                    a95cc6;
                    f_no($('.imagen1'));
                }
            }
            var a95resu6=((a95cc6*1)/3);
            cor=cor+parseFloat(a95resu6);
            inc=inc-(1-parseFloat(a95resu6));
            ///////////////////////////pregunta7///////////////////////////////////////////////////////////////
            var a95runi1 =$('#a95runi1').val();
            var a95runi2 =$('#a95runi2').val();
            var a95runi3 =$('#a95runi3').val();
            var a95cc7=0;
            if (a95runi1=='metro' || a95runi1=='m') {
                a95cc7++;
                f_ok($('#a95runi1'));
            }else {
                a95cc7;
                f_ok($('#a95runi1'));
            }
            if (a95runi2=='kilogramo' || a95runi2=='kg') {
                a95cc7++;
                f_ok($('#a95runi2'));
            }else {
                a95cc7;
                f_ok($('#a95runi2'));
            }
            if (a95runi3=='litro' || a95runi3=='l') {
                a95cc7++;
                f_ok($('#a95runi3'));
            }else {
                a95cc7;
                f_ok($('#a95runi3'));
            }
            var a95resu7=((a95cc7*1)/3);
            cor=cor+parseFloat(a95resu7);
            inc=inc-(1-parseFloat(a95resu7));
            //////////////////////pregunta8/////////////////////////////////////////////////////////////////
            var a95tc1 =$('#a95tc1').val();
                a95tc1=a95tc1.split('');
            var a95tc2 =$('#a95tc2').val();
                a95tc2=a95tc2.split('');
            var a95tc3 =$('#a95tc3').val();
                a95tc3=a95tc3.split('');
            
            var a95tf1 =$('#a95tf1').val();
            var a95tf2 =$('#a95tf2').val();
            var a95tf3 =$('#a95tf3').val();
            var a95tf4 =$('#a95tf4').val();
            var a95cc8=0;
            if (a95tc1.length==a95num1) {
                a95cc8++;
                f_ok($('#a95tc1'));
            }else {
                a95cc8;
                f_no($('#a95tc1'));
            }
            if (a95tc2.length==a95num2) {
                a95cc8++;
                f_ok($('#a95tc2'));
            }else {
                a95cc8;
                f_no($('#a95tc2'));
            }
            if (a95tc3.length==a95num3) {
                a95cc8++;
                f_ok($('#a95tc3'));
            }else {
                a95cc8;
                f_no($('#a95tc3'));
            }
            if (a95tf1==a95num1) {
                a95cc8++;
                f_ok($('#a95tf1'));
            }else {
                a95cc8;
                f_no($('#a95tf1'));
            }
            if (a95tf2==a95num2) {
                a95cc8++;
                f_ok($('#a95tf2'));
            }else {
                a95cc8;
                f_no($('#a95tf2'));
            }
            if (a95tf3==a95num3) {
                a95cc8++;
                f_ok($('#a95tf3'));
            }else {
                a95cc8;
                f_no($('#a95tf3'));
            }
            if (a95tf4==(a95num1+a95num2+a95num3)) {
                a95cc8++;
                f_ok($('#a95tf4'));
            }else {
                a95cc8;
                f_no($('#a95tf4'));
            }
            var a95resu8=((a95cc8*1)/7);
            cor=cor+parseFloat(a95resu8);
            inc=inc-(1-parseFloat(a95resu8));
            //////////////////////////pregunta9//////////////////////////////////////////////////////////////////
            Calculo_nota()
            
        }
        
    }