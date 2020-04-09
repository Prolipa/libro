    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=10,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        ///////pregunta1////////////
        var a93conjv1=['H ⊂ U','H ⊄ I','I ⊂ H','J ⊂ U','I ⊄ H','J ⊄ U','I ⊂ U']; 
        var a93conjvr1=['1','1','0','0','1','1','1'];
        var a93resc1=[];
        var myArray1 = ['0','1','2','3','4','5','6'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
         //aleatorio literal 1
        for (var i = 1; i <= 7 ; i++) {
            var c=myArray1[i-1];
            $("#a94conj"+i).html(a93conjv1[c]);
            a93resc1.push(a93conjvr1[c]);
            
        };
        $('.enc1').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')

            }else{
                $(this).addClass('encierra')
                
            }

        })
        $('.enc2').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')

            }else{
                $(this).addClass('encierra')
                
            }

        })
        $('.enc3').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')

            }else{
                $(this).addClass('encierra')
                
            }

        })
        $('.enc4').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')

            }else{
                $(this).addClass('encierra')
                
            }

        })
        $('.enc5').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')

            }else{
                $(this).addClass('encierra')
                
            }

        })
        $('.enc6').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')

            }else{
                $(this).addClass('encierra')
                
            }

        })
        $('.enc7').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')

            }else{
                $(this).addClass('encierra')
                
            }

        })

        $('.enc8').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc9').removeClass('encierra1')
                $('.enc10').removeClass('encierra1')
                $('.enc11').removeClass('encierra1')
            }

        })
        $('.enc9').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc8').removeClass('encierra1')
                $('.enc10').removeClass('encierra1')
                $('.enc11').removeClass('encierra1')
            }

        })
        $('.enc10').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc9').removeClass('encierra1')
                $('.enc8').removeClass('encierra1')
                $('.enc11').removeClass('encierra1')
            }

        })
        $('.enc11').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc9').removeClass('encierra1')
                $('.enc10').removeClass('encierra1')
                $('.enc8').removeClass('encierra1')
            }

        })

        $('.enc12').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc13').removeClass('encierra1')
                $('.enc14').removeClass('encierra1')
                $('.enc15').removeClass('encierra1')
            }

        })
        $('.enc13').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc12').removeClass('encierra1')
                $('.enc14').removeClass('encierra1')
                $('.enc15').removeClass('encierra1')
            }

        })
        $('.enc14').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc13').removeClass('encierra1')
                $('.enc12').removeClass('encierra1')
                $('.enc15').removeClass('encierra1')
            }

        })
        $('.enc15').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc13').removeClass('encierra1')
                $('.enc14').removeClass('encierra1')
                $('.enc12').removeClass('encierra1')
            }

        })
        ////////////////pregunta2//////////////////////////
        var sc1= parseInt((Math.random() * 60) + 10);
        var pt1= parseInt((Math.random() * 15) + 5);
        var suce1=[sc1];
        for (var i = 0; i < 6; i++) {
            suce1.push((suce1[i]+pt1));
        }
        var impsuc1=[suce1[3]+', '+suce1[5]+', '+suce1[6],(suce1[3]+2)+', '+(suce1[5]+7)+', '+(suce1[6]+7),(suce1[3]+5)+', '+(suce1[5]+5)+', '+(suce1[6]+5),parseInt((Math.random() * 200) + 60)+', '+parseInt((Math.random() * 200) + 60)+', '+parseInt((Math.random() * 200) + 60)];
        var myArray2 = ['0','1','2','3'];
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
         //aleatorio literal 1
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray2[i-1];
            $("#a94cs"+i).html(impsuc1[c]);
            
            
        };
        $('#a94suc1').html(suce1[0]+', '+suce1[1]+', '+suce1[2]+', ....... , '+suce1[4]+', ....... , ....... ');
        var sc2= parseInt((Math.random() * 90) + 50);
        var pt2= parseInt((Math.random() * 50) + 20);
        var suce2=[sc2];
        for (var i = 0; i < 7; i++) {
            suce2.push((suce2[i]+pt2));
        }
        var impsuc2=[suce2[4]+', '+suce2[6]+', '+suce2[7],(suce2[4]+20)+', '+(suce2[6]+37)+', '+(suce2[7]+37),(suce2[4]+45)+', '+(suce2[6]+55)+', '+(suce2[7]+25),parseInt((Math.random() * 200) + 60)+', '+parseInt((Math.random() * 200) + 60)+', '+parseInt((Math.random() * 200) + 60)];
        var myArray3 = ['0','1','2','3'];
        var i,j,k;
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
         //aleatorio literal 1
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray3[i-1];
            $("#a94cs1"+i).html(impsuc2[c]);
            
            
        };
        $('#a94suc2').html(suce2[0]+', '+suce2[1]+', '+suce2[2]+', '+suce2[3]+', ....... , '+suce2[5]+', ....... , ....... ');
        
        /////////////////pregunta3////////////////////////////////////////////////////
        var gab1= parseInt((Math.random() * 3000) + 1000);
        var gab2= parseInt((Math.random() * 800) + 100);
        var gab3= parseInt((Math.random() * 3000) + 1000);
        $("#a94pr1").html(gab1);
        $("#a94pr2").html(gab2);
        $("#a94pr3").html(gab3);
        var art1= parseInt((Math.random() * 7000) + 1000);
        var art2= parseInt((Math.random() * 7000) + 1000);
        if (art1>art2) {
            $("#a94pr11").html(art2);
            $("#a94pr12").html(art1);    
        }else {
            $("#a94pr11").html(art1);
            $("#a94pr12").html(art2);    
        }
        
        /////////////////pregunta4//////////////////////////////////////////////////////////////////////
        var conm1= parseInt((Math.random() * 3000) + 1000);
        var conm2= parseInt((Math.random() * 3000) + 1000);
        var conm3= parseInt((Math.random() * 3000) + 1000);
        var conmv1=[conm1,conm2,conm3];
        $("#a94prco1").html(' ( '+conm1+' + '+conm2+' ) + '+conm3);

        var conm4= parseInt((Math.random() * 3000) + 1000);
        var conm5= parseInt((Math.random() * 2500) + 1000);
        var conm6= parseInt((Math.random() * 2000) + 1000);
        var conmse1=conm4.toString().split('');
        var conmse2=conm5.toString().split('');
        var conmse3=conm6.toString().split('');
        for (var i = 0; i < conmse1.length; i++) {
            $('#a94prcom'+(i+1)).html(conmse1[i]);
        }
        for (var i = 0; i < conmse1.length; i++) {
            $('#a94prcom1'+(i+1)).html(conmse2[i]);
        }
        for (var i = 0; i < conmse1.length; i++) {
            $('#a94prcom2'+(i+1)).html(conmse3[i]);
        }
        ///////////////////////pregunta5//////////////////////////////////////////////////////////////////////////////
        var ocomb1= [parseInt((Math.random() * 80) + 10),parseInt((Math.random() * 80) + 10),parseInt((Math.random() * 80) + 10)];
        var ocomb2= [parseInt((Math.random() * 500) + 50),parseInt((Math.random() * 500) + 50),parseInt((Math.random() * 500) + 50)];
        var ocomb3= [parseInt((Math.random() * 600) + 400),parseInt((Math.random() * 400) + 100),parseInt((Math.random() * 200) + 70)];
        ocomb1=ocomb1.sort((a,b)=>a-b); 
        ocomb2=ocomb2.sort((a,b)=>a-b); 
        ocomb3=ocomb3.sort((a,b)=>a-b); 
        $('#a94opcom1').html('<b style="color:blue;"> a) </b> <span style="background: #A1DCE9; border-radius:5px;"> ( '+ocomb1[2]+' + '+ocomb1[0]+' ) - '+ocomb1[1]+'</span>');
        $('#a94opcom2').html('<b style="color:blue;"> b) </b> <span style="background: #DCEAB7; border-radius:5px;"> ( '+ocomb2[1]+' - '+ocomb2[0]+' ) + '+ocomb2[2]+'</span>');
        $('#a94opcom3').html('<b style="color:blue;"> c) </b> <span style="background: #FED9BD; border-radius:5px;"> '+ocomb3[2]+' - ( '+ocomb3[1]+' - '+ocomb3[0]+' ) </span>');
        /////////////////////pregunta6/////////////////////////////////////////////////////////////////////////////////////
        var omet1= [parseInt((Math.random() * 4000) + 1000),parseInt((Math.random() * 4000) + 1000)];
        var omet2= [parseInt((Math.random() * 9000) + 1000),parseInt((Math.random() * 9000) + 1000)];
        var omet3= [parseInt((Math.random() * 4000) + 1000),parseInt((Math.random() * 4000) + 1000)];
        var omet4= [parseInt((Math.random() * 9000) + 1000),parseInt((Math.random() * 9000) + 1000)];
        $('#a94opmen1').html(omet1[0]+' + '+omet1[1]);
        if (omet2[0]>omet2[1]) {
            $('#a94opmen2').html(omet2[0]+' - '+omet2[1]);    
            var ometres2=[(omet2[0]-omet2[1]),((omet2[0]-omet2[1])+1000),((omet2[0]-omet2[1])+2000),((omet2[0]-omet2[1])+3000)];
        }else {
            $('#a94opmen2').html(omet2[1]+' - '+omet2[0]);
            var ometres2=[(omet2[1]-omet2[0]),((omet2[1]-omet2[0])+1000),((omet2[1]-omet2[0])+2000),((omet2[1]-omet2[0])+3000)];
        }
        $('#a94opmen3').html(omet3[0]+' + '+omet3[1]);
        if (omet4[0]>omet4[1]) {
            $('#a94opmen4').html(omet4[0]+' - '+omet4[1]);    
            var ometres4=[(omet4[0]-omet4[1]),((omet4[0]-omet4[1])+200),((omet4[0]-omet4[1])+220),((omet4[0]-omet4[1])+240)];
        }else {
            $('#a94opmen4').html(omet4[1]+' - '+omet4[0]);
            var ometres4=[(omet4[1]-omet4[0]),((omet4[1]-omet4[0])+200),((omet4[1]-omet4[0])+220),((omet4[1]-omet4[0])+240)];
        }
        var ometres1=[(omet1[0]+omet1[1]),((omet1[0]+omet1[1])+100),((omet1[0]+omet1[1])+200),((omet1[0]+omet1[1])-100)];

        
        var ometres3=[(omet3[0]+omet3[1]),((omet3[0]+omet3[1])+200),((omet3[0]+omet3[1])+100),((omet3[0]+omet3[1])+50)];
        
        var myArray4 = ['0','1','2','3'];
        var myArray5 = ['0','1','2','3'];
        var myArray6 = ['0','1','2','3'];
        var myArray7 = ['0','1','2','3'];
        var i,j,k;
        for (i = myArray4.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray4[i - 1];
            myArray4[i - 1] = myArray4[j];
            myArray4[j] = k;
        }
        var i,j,k;
        for (i = myArray5.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray5[i - 1];
            myArray5[i - 1] = myArray5[j];
            myArray5[j] = k;
        }
        var i,j,k;
        for (i = myArray6.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray6[i - 1];
            myArray6[i - 1] = myArray6[j];
            myArray6[j] = k;
        }
        var i,j,k;
        for (i = myArray7.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray7[i - 1];
            myArray7[i - 1] = myArray7[j];
            myArray7[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray4[i-1];
            $("#a94rpi"+i).html(ometres1[c]);
            
        };
        //aleatorio literal 2
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray5[i-1];
            $("#a94rpi1"+i).html(ometres2[c]);
            
            
        };
        //aleatorio literal 3
        for (var i = 1; i <= 5 ; i++) {
            var c=myArray6[i-1];
            $("#a94rpi2"+i).html(ometres3[c]);
            
            
        };
        //aleatorio literal 4
        for (var i = 1; i <= 5 ; i++) {
            var c=myArray7[i-1];
            $("#a94rpi3"+i).html(ometres4[c]);
            
            
        };
        $('.pint1').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint2').removeClass('pinta')
                $('.pint3').removeClass('pinta')
                $('.pint4').removeClass('pinta')
            }

        })
        $('.pint2').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint1').removeClass('pinta')
                $('.pint3').removeClass('pinta')
                $('.pint4').removeClass('pinta')
            }

        })
        $('.pint3').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint2').removeClass('pinta')
                $('.pint1').removeClass('pinta')
                $('.pint4').removeClass('pinta')
            }

        })
        $('.pint4').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint2').removeClass('pinta')
                $('.pint3').removeClass('pinta')
                $('.pint1').removeClass('pinta')
            }

        })
        $('.pint5').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint6').removeClass('pinta')
                $('.pint7').removeClass('pinta')
                $('.pint8').removeClass('pinta')
            }

        })
        $('.pint6').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint5').removeClass('pinta')
                $('.pint7').removeClass('pinta')
                $('.pint8').removeClass('pinta')
            }

        })
        $('.pint7').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint6').removeClass('pinta')
                $('.pint5').removeClass('pinta')
                $('.pint8').removeClass('pinta')
            }

        })
        $('.pint8').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint6').removeClass('pinta')
                $('.pint7').removeClass('pinta')
                $('.pint5').removeClass('pinta')
            }

        })
        $('.pint9').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint10').removeClass('pinta')
                $('.pint11').removeClass('pinta')
                $('.pint12').removeClass('pinta')
            }

        })
        $('.pint10').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint9').removeClass('pinta')
                $('.pint11').removeClass('pinta')
                $('.pint12').removeClass('pinta')
            }

        })
        $('.pint11').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint10').removeClass('pinta')
                $('.pint9').removeClass('pinta')
                $('.pint12').removeClass('pinta')
            }

        })
        $('.pint12').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint10').removeClass('pinta')
                $('.pint11').removeClass('pinta')
                $('.pint9').removeClass('pinta')
            }

        })
        $('.pint13').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint14').removeClass('pinta')
                $('.pint15').removeClass('pinta')
                $('.pint16').removeClass('pinta')
            }

        })
        $('.pint14').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint13').removeClass('pinta')
                $('.pint15').removeClass('pinta')
                $('.pint16').removeClass('pinta')
            }

        })
        $('.pint15').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint14').removeClass('pinta')
                $('.pint13').removeClass('pinta')
                $('.pint16').removeClass('pinta')
            }

        })
        $('.pint16').click(function(){

            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')

            }else{
                $(this).addClass('pinta')
                $('.pint14').removeClass('pinta')
                $('.pint15').removeClass('pinta')
                $('.pint13').removeClass('pinta')
            }

        })
        ////////////////////////////pregunta7//////////////////////////////////////////////////////
        var imgsang1=['<img class="img-responsive" src="img/i2_p90_act94.jpg" alt=""><input type="text" onkeyup="mayus(this);" id="a94raobj1" class="form-control">','<img class="img-responsive" src="img/i3_p90_act94.jpg" alt=""><input type="text" onkeyup="mayus(this);" id="a94raobj2" class="form-control">','<img class="img-responsive" src="img/i4_p90_act94.jpg" alt=""><input type="text" onkeyup="mayus(this);" id="a94raobj3" class="form-control">']
        var myArray8 = ['0','1','2'];
        var i,j,k;
        for (i = myArray8.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray8[i - 1];
            myArray8[i - 1] = myArray8[j];
            myArray8[j] = k;
        }
        //aleatorio literal 5
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray8[i-1];
            $("#a94aob"+i).html(imgsang1[c]);
            
            
        };

        //////////////////////pregunta8//////////////////////////////////////////////////////////
        var descen2=['<img id="ime1" class="img-responsive c1 " src="img/i5_p90_act94.jpg">','<img id="ime2" class="img-responsive c2" src="img/i6_p90_act94.jpg">','<img id="ime3" class="img-responsive c3" src="img/i7_p90_act94.jpg">'];
        var descen3=['<div style="border-radius:0px 0px 0px 10px; border: 1px dotted orange;"><b class="c2" >Tiene 4 lados iguales <br>4 ángulos rectos</b> </div>','<div style="border-radius:0px 0px 0px 10px; border: 1px dotted orange;"><b class="c3" >Tiene 4 lados iguales <br>de dos en dos <br>ángulos rectos</b></div>','<div style="border-radius:0px 0px 0px 10px; border: 1px dotted orange;"><b class="c1">Tiene 3 lados iguales <br>3 ángulos</b></div>'];
        var myArray9 = ['0','1','2'];
        var i,j,k;
        for (i = myArray9.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray9[i - 1];
            myArray9[i - 1] = myArray9[j];
            myArray9[j] = k;
        }
        //aleatorio literal 3
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray9[i-1];
            $("#imael"+i).html(descen3[c]);
            
            
        };
        $("#resim").html('').append(descen2);
        $("#resim  img").draggable({ //arrastramos
            revert: "invalid",
            zIndex:5,
            containment: "#actividad54",
            scroll: false,                   
        });
        $("#caja_res").droppable({
            drop: function(e, ui) {
                r_ids.push(ui.draggable.attr("src"));
                for(i=1;i<5;i++){ //4 elementos
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
                for(i=1;i<5;i++){ //4 elementos
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
                for(i=1;i<5;i++){ //4 elementos
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
        /////////////////////////////////pregunta9////////////////////////////////////////////////////
        var a94num1 = parseInt((Math.random() * 9) + 2);
        var a94num2 = parseInt((Math.random() * 9) + 2);
        var a94num3 = parseInt((Math.random() * 9) + 2);
        var a94num4 = parseInt((Math.random() * 9) + 2);
        $('#cantip1').html(a94num1);
        $('#cantip2').html(a94num2);
        $('#cantip3').html(a94num3);
        $('#cantip4').html(a94num4);
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            ///////////////////pregunta1/////////////////////////////////
            var dato1= document.getElementsByClassName('encierra');
            var dato2= document.getElementsByClassName('cc1');
            var datos=['H ⊂ U','H ⊄ I','I ⊄ H','J ⊄ U','I ⊂ U'];
            var a94cc1=0;
            
            if (dato1.length<=5 && dato1.length>=1) {
                for (var j = 0; j < dato1.length; j++) {
                    for (var i = 0; i < datos.length; i++) {
                        if (dato1[j].innerHTML==datos[i]) {
                            a94cc1++;                        
                        }else {
                            a94cc1;
                        }
                    }    
                }
                
                
            }else {
                f_no(dato1);
            }
            var result=0;
            if (a94cc1<=5) {
                result=((a94cc1*1)/5);
                f_ok(dato1);
            }else {
                result;
                f_no(dato1);
            }
            cor=cor+parseFloat(result);
            inc=inc-(1-parseFloat(result));
            $('#a94cal1').html(result.toFixed(2));
            $('#a94cal1').css("border-bottom","1px solid black");
            ////////////////////pregunta2////////////////////////////
            var a94cc2=0;
            if ($('#a94enc1').hasClass('encierra1')) {
                var a94enc1= $('#a94cs1').html();
                
                if (a94enc1==impsuc1[0]) {
                    a94cc2++;
                    f_ok($('#a94enc1'));
                }else {
                    a94cc2;
                    f_no($('#a94enc1'));
                }

            }
            if ($('#a94enc2').hasClass('encierra1')) {
                var a94enc2= $('#a94cs2').html();
                
                if (a94enc2==impsuc1[0]) {
                    a94cc2++;
                    f_ok($('#a94enc2'));
                }else {
                    a94cc2;
                    f_no($('#a94enc2'));
                }

            }
            if ($('#a94enc3').hasClass('encierra1')) {
                var a94enc3= $('#a94cs3').html();
                
                if (a94enc3==impsuc1[0]) {
                    a94cc2++;
                    f_ok($('#a94enc3'));
                }else {
                    a94cc2;
                    f_no($('#a94enc3'));
                }

            }
            if ($('#a94enc4').hasClass('encierra1')) {
                var a94enc4= $('#a94cs4').html();
                
                if (a94enc4==impsuc1[0]) {
                    a94cc2++;
                    f_ok($('#a94enc4'));
                }else {
                    a94cc2;
                    f_no($('#a94enc4'));
                }

            }

            if ($('#a94enc11').hasClass('encierra1')) {
                var a94enc11= $('#a94cs11').html();
                
                if (a94enc11==impsuc2[0]) {
                    a94cc2++;
                    f_ok($('#a94enc11'));
                }else {
                    a94cc2;
                    f_no($('#a94enc11'));
                }

            }
            if ($('#a94enc12').hasClass('encierra1')) {
                var a94enc12= $('#a94cs12').html();
                
                if (a94enc12==impsuc2[0]) {
                    a94cc2++;
                    f_ok($('#a94enc12'));
                }else {
                    a94cc2;
                    f_no($('#a94enc12'));
                }

            }
            if ($('#a94enc13').hasClass('encierra1')) {
                var a94enc13= $('#a94cs13').html();
                
                if (a94enc13==impsuc2[0]) {
                    a94cc2++;
                    f_ok($('#a94enc13'));
                }else {
                    a94cc2;
                    f_no($('#a94enc13'));
                }

            }
            if ($('#a94enc14').hasClass('encierra1')) {
                var a94enc14= $('#a94cs14').html();
                
                if (a94enc14==impsuc2[0]) {
                    a94cc2++;
                    f_ok($('#a94enc14'));
                }else {
                    a94cc2;
                    f_no($('#a94enc14'));
                }

            }
            cor=cor+parseFloat(a94cc2);
            inc=inc-(2-parseFloat(a94cc2));
            $('#a94cal2').html(a94cc2.toFixed(2));
            $('#a94cal2').css("border-bottom","1px solid black");
            //////////////////pregunta3/////////////////////////////////////////////
            var a94cc3=0;
            var a94rnu16=$('#a94rnu16').val();
            if (a94rnu16==(gab1+gab2+gab3)) {
                a94cc3++;
                f_ok($('#a94rnu1'));
                f_ok($('#a94rnu2'));
                f_ok($('#a94rnu3'));
                f_ok($('#a94rnu4'));
                f_ok($('#a94rnu5'));
                f_ok($('#a94rnu6'));
                f_ok($('#a94rnu7'));
                f_ok($('#a94rnu8'));
                f_ok($('#a94rnu9'));
                f_ok($('#a94rnu10'));
                f_ok($('#a94rnu11'));
                f_ok($('#a94rnu12'));
                f_ok($('#a94rnu13'));
                f_ok($('#a94rnu14'));
                f_ok($('#a94rnu15'));
                f_ok($('#a94rnu16'));
                
            }else {
                a94cc3;
                f_no($('#a94rnu1'));
                f_no($('#a94rnu2'));
                f_no($('#a94rnu3'));
                f_no($('#a94rnu4'));
                f_no($('#a94rnu5'));
                f_no($('#a94rnu6'));
                f_no($('#a94rnu7'));
                f_no($('#a94rnu8'));
                f_no($('#a94rnu9'));
                f_no($('#a94rnu10'));
                f_no($('#a94rnu11'));
                f_no($('#a94rnu12'));
                f_no($('#a94rnu13'));
                f_no($('#a94rnu14'));
                f_no($('#a94rnu15'));
                f_no($('#a94rnu16'));
            }
            var a94rter1=$('#a94rter1').val();
            var a94rter2=$('#a94rter2').val();
            var a94rcv13=$('#a94rcv13').val();
            if (art1>art2) {
                if (a94rter1==art2) {
                    a94cc3++;
                    f_ok($('#a94rter1'));
                }else {
                    a94cc3;
                    f_no($('#a94rter1'));
                }
                if (a94rter2==art1) {
                    a94cc3++;
                    f_ok($('#a94rter2'));
                }else {
                    a94cc3;
                    f_no($('#a94rter2'));
                }
                if (a94rcv13==(art1-art2)) {
                    a94cc3++;
                    f_ok($('#a94rcv1'));
                    f_ok($('#a94rcv2'));
                    f_ok($('#a94rcv3'));
                    f_ok($('#a94rcv4'));
                    f_ok($('#a94rcv5'));
                    f_ok($('#a94rcv6'));
                    f_ok($('#a94rcv7'));
                    f_ok($('#a94rcv8'));
                    f_ok($('#a94rcv9'));
                    f_ok($('#a94rcv10'));
                    f_ok($('#a94rcv11'));
                    f_ok($('#a94rcv12'));
                    f_ok($('#a94rcv13'));
                }else {
                    a94cc3;
                    f_no($('#a94rcv1'));
                    f_no($('#a94rcv2'));
                    f_no($('#a94rcv3'));
                    f_no($('#a94rcv4'));
                    f_no($('#a94rcv5'));
                    f_no($('#a94rcv6'));
                    f_no($('#a94rcv7'));
                    f_no($('#a94rcv8'));
                    f_no($('#a94rcv9'));
                    f_no($('#a94rcv10'));
                    f_no($('#a94rcv11'));
                    f_no($('#a94rcv12'));
                    f_no($('#a94rcv13'));
                }
            }else {
                if (a94rter1==art1) {
                    a94cc3++;
                    f_ok($('#a94rter1'));
                }else {
                    a94cc3;
                    f_no($('#a94rter1'));
                }
                if (a94rter2==art2) {
                    a94cc3++;
                    f_ok($('#a94rter2'));
                }else {
                    a94cc3;
                    f_no($('#a94rter2'));
                }
                if (a94rcv13==(art2-art1)) {
                    a94cc3++;
                    f_ok($('#a94rcv1'));
                    f_ok($('#a94rcv2'));
                    f_ok($('#a94rcv3'));
                    f_ok($('#a94rcv4'));
                    f_ok($('#a94rcv5'));
                    f_ok($('#a94rcv6'));
                    f_ok($('#a94rcv7'));
                    f_ok($('#a94rcv8'));
                    f_ok($('#a94rcv9'));
                    f_ok($('#a94rcv10'));
                    f_ok($('#a94rcv11'));
                    f_ok($('#a94rcv12'));
                    f_ok($('#a94rcv13'));
                }else {
                    a94cc3;
                    f_no($('#a94rcv1'));
                    f_no($('#a94rcv2'));
                    f_no($('#a94rcv3'));
                    f_no($('#a94rcv4'));
                    f_no($('#a94rcv5'));
                    f_no($('#a94rcv6'));
                    f_no($('#a94rcv7'));
                    f_no($('#a94rcv8'));
                    f_no($('#a94rcv9'));
                    f_no($('#a94rcv10'));
                    f_no($('#a94rcv11'));
                    f_no($('#a94rcv12'));
                    f_no($('#a94rcv13'));
                }
            }
            var a94resu1=((a94cc3*1)/4);
            cor=cor+parseFloat(a94resu1);
            inc=inc-(1-parseFloat(a94resu1));
            $('#a94cal3').html(a94resu1.toFixed(2));
            $('#a94cal3').css("border-bottom","1px solid black");
            ///////////////////pregunta4////////////////////////////////////////////////////
            var a94cc4=0;
            var a94recom1=$('#a94recom1').val();
            var a94recom2=$('#a94recom2').val();
            var a94recom3=$('#a94recom3').val();
            if (a94recom1==(conm1+conm2)) {
                a94cc4++;
                f_ok($('#a94recom1'));
            }else {
                a94cc4;
                f_no($('#a94recom1'));
            }
            if (a94recom2==(conm3)) {
                a94cc4++;
                f_ok($('#a94recom2'));
            }else {
                a94cc4;
                f_no($('#a94recom2'));
            }
            if (a94recom3==(conm1+conm2+conm3)) {
                a94cc4++;
                f_ok($('#a94recom3'));
            }else {
                a94cc4;
                f_no($('#a94recom3'));
            }
            var a94cc41=0;
            var a94recom4=$('#a94recom4').val();
            var a94recom5=$('#a94recom5').val();
            var a94recom6=$('#a94recom6').val();
            for (var i = 0; i < conmv1.length; i++) {
                if (a94recom4==conmv1[i]) {
                    a94cc41++;
                    conmv1[i]=a94cc41;
                    
                }    
            }
            if (a94cc41==1) {
                a94cc4++;
                f_ok($('#a94recom4'));
            }else{
                a94cc4;
                f_no($('#a94recom4'));
            }
            var a94cc41=0;
            for (var i = 0; i < conmv1.length; i++) {
                if (a94recom5==conmv1[i]) {
                    a94cc41++;
                    conmv1[i]=a94cc41;
                    
                }    
            }
            if (a94cc41==1) {
                a94cc4++;
                f_ok($('#a94recom5'));
            }else{
                a94cc4;
                f_no($('#a94recom5'));
            }
            var a94cc41=0;
            for (var i = 0; i < conmv1.length; i++) {
                if (a94recom6==conmv1[i]) {
                    a94cc41++;
                    conmv1[i]=a94cc41;
                    
                }    
            }
            if (a94cc41==1) {
                a94cc4++;
                f_ok($('#a94recom6'));
            }else{
                a94cc4;
                f_no($('#a94recom6'));
            }
            var a94recom7=$('#a94recom7').val();
            var a94recom8=$('#a94recom8').val();
            var a94recom9=$('#a94recom9').val();
            var conmv2=[conm1,conm2,conm3];
            var a94cc42=0;
            for (var i = 0; i < conmv2.length; i++) {
                if (a94recom7==conmv2[i]) {
                    a94cc42++;
                    conmv2[i]=a94cc42;
                    
                }    
            }
            if (a94cc42==1) {
                a94cc4++;
                f_ok($('#a94recom7'));
            }else{
                a94cc4;
                f_no($('#a94recom7'));
            }
            if (a94recom8==(conm1+conm2) || a94recom8==(conm1+conm3) || a94recom8==(conm3+conm2)) {
                a94cc4++;
                f_ok($('#a94recom8'));
            }else{
                a94cc4;
                f_no($('#a94recom8'));
            }
            if (a94recom9==(conm1+conm2+conm3)) {
                a94cc4++;
                f_ok($('#a94recom9'));
            }else{
                a94cc4;
                f_no($('#a94recom9'));
            }

            var a94rst1=$('#a94rst1').val();
            var a94rst2=$('#a94rst2').val();
            var a94rst3=$('#a94rst3').val();
            var a94rst4=$('#a94rst4').val();
            var a94sttot1=conm4+conm5+conm6;
                a94sttot1=a94sttot1.toString().split('');

            if (a94rst1==a94sttot1[0]) {
                a94cc4++;
                f_ok($('#a94rst1'));
            }else{
                a94cc4;
                f_no($('#a94rst1'));
            }
            if (a94rst2==a94sttot1[1]) {
                a94cc4++;
                f_ok($('#a94rst2'));
            }else{
                a94cc4;
                f_no($('#a94rst2'));
            }
            if (a94rst3==a94sttot1[2]) {
                a94cc4++;
                f_ok($('#a94rst3'));
            }else{
                a94cc4;
                f_no($('#a94rst3'));
            }
            if (a94rst4==a94sttot1[3]) {
                a94cc4++;
                f_ok($('#a94rst4'));
            }else{
                a94cc4;
                f_no($('#a94rst4'));
            }
            var a94rst5=[$('#a94rst5').val(),$('#a94rst6').val(),$('#a94rst7').val(),$('#a94rst8').val()];
            if (a94rst5.join('')==conm4 || a94rst5.join('')==conm5 || a94rst5.join('')==conm6) {
                a94cc4++;
                f_ok($('#a94rst5'));
                f_ok($('#a94rst6'));
                f_ok($('#a94rst7'));
                f_ok($('#a94rst8'));
            }else{
                a94cc4;
                f_no($('#a94rst5'));
                f_no($('#a94rst6'));
                f_no($('#a94rst7'));
                f_no($('#a94rst8'));
            }    
            var a94rst6=[$('#a94rst9').val(),$('#a94rst10').val(),$('#a94rst11').val(),$('#a94rst12').val()];
            if (a94rst6.join('')==conm4 || a94rst6.join('')==conm5 || a94rst6.join('')==conm6) {
                a94cc4++;
                f_ok($('#a94rst9'));
                f_ok($('#a94rst10'));
                f_ok($('#a94rst11'));
                f_ok($('#a94rst12'));
            }else{
                a94cc4;
                f_no($('#a94rst9'));
                f_no($('#a94rst10'));
                f_no($('#a94rst11'));
                f_no($('#a94rst12'));
            }
            var a94rst7=[$('#a94rst13').val(),$('#a94rst14').val(),$('#a94rst15').val(),$('#a94rst16').val()];
            if (a94rst7.join('')==conm4 || a94rst7.join('')==conm5 || a94rst7.join('')==conm6) {
                a94cc4++;
                f_ok($('#a94rst13'));
                f_ok($('#a94rst14'));
                f_ok($('#a94rst15'));
                f_ok($('#a94rst16'));
            }else{
                a94cc4;
                f_no($('#a94rst13'));
                f_no($('#a94rst14'));
                f_no($('#a94rst15'));
                f_no($('#a94rst16'));
            }
            var a94rst8=[$('#a94rst17').val(),$('#a94rst18').val(),$('#a94rst19').val(),$('#a94rst20').val()];
            if (a94rst8.join('')==(conm4+conm5+conm6)) {
                a94cc4++;
                f_ok($('#a94rst17'));
                f_ok($('#a94rst18'));
                f_ok($('#a94rst19'));
                f_ok($('#a94rst20'));
            }else{
                a94cc4;
                f_no($('#a94rst17'));
                f_no($('#a94rst18'));
                f_no($('#a94rst19'));
                f_no($('#a94rst20'));
            }
            
            var a94resu2=((a94cc4*1)/17);
            cor=cor+parseFloat(a94resu2);
            inc=inc-(1-parseFloat(a94resu2));
            $('#a94cal4').html(a94resu2.toFixed(2));
            $('#a94cal4').css("border-bottom","1px solid black");
            ////////////////////////////pregunta5//////////////////////////////////////////////////////////////
            var a94ropcom1=$('#a94ropcom1').val();
            var a94ropcom2=$('#a94ropcom2').val();
            var a94ropcom3=$('#a94ropcom3').val();
            var a94cc5=0;
            if (a94ropcom1==(ocomb1[2] + ocomb1[0])) {
                a94cc5++;
                f_ok($('#a94ropcom1'));
            }else{
                a94cc5;
                f_no($('#a94ropcom1'));
            }
            if (a94ropcom2==(ocomb1[1])) {
                a94cc5++;
                f_ok($('#a94ropcom2'));
            }else{
                a94cc5;
                f_no($('#a94ropcom2'));
            }
            if (a94ropcom3==((ocomb1[2]+ocomb1[0]) - ocomb1[1])) {
                a94cc5++;
                f_ok($('#a94ropcom3'));
            }else{
                a94cc5;
                f_no($('#a94ropcom3'));
            }
            var a94ropcom4=$('#a94ropcom4').val();
            var a94ropcom5=$('#a94ropcom5').val();
            var a94ropcom6=$('#a94ropcom6').val();
            
            if (a94ropcom4==(ocomb2[1] - ocomb2[0])) {
                a94cc5++;
                f_ok($('#a94ropcom4'));
            }else{
                a94cc5;
                f_no($('#a94ropcom4'));
            }
            if (a94ropcom5==(ocomb2[2])) {
                a94cc5++;
                f_ok($('#a94ropcom5'));
            }else{
                a94cc5;
                f_no($('#a94ropcom5'));
            }
            if (a94ropcom6==((ocomb2[1]-ocomb2[0]) + ocomb2[2])) {
                a94cc5++;
                f_ok($('#a94ropcom6'));
            }else{
                a94cc5;
                f_no($('#a94ropcom6'));
            }
            var a94ropcom7=$('#a94ropcom7').val();
            var a94ropcom8=$('#a94ropcom8').val();
            var a94ropcom9=$('#a94ropcom9').val();
            
            if (a94ropcom7==(ocomb3[2])) {
                a94cc5++;
                f_ok($('#a94ropcom7'));
            }else{
                a94cc5;
                f_no($('#a94ropcom7'));
            }
            if (a94ropcom8==(ocomb3[1]-ocomb3[0])) {
                a94cc5++;
                f_ok($('#a94ropcom8'));
            }else{
                a94cc5;
                f_no($('#a94ropcom8'));
            }
            if (a94ropcom9==(ocomb3[2]-(ocomb3[1] - ocomb3[0]))) {
                a94cc5++;
                f_ok($('#a94ropcom9'));
            }else{
                a94cc5;
                f_no($('#a94ropcom9'));
            }
            var a94resu5=((a94cc5*1)/9);
            cor=cor+parseFloat(a94resu5);
            inc=inc-(1-parseFloat(a94resu5));
            $('#a94cal5').html(a94resu5.toFixed(2));
            $('#a94cal5').css("border-bottom","1px solid black");

            //////////////////////////pregunta6/////////////////////////////////////////////////////
            var a94cc6=0;
            if ($('.pint1').hasClass('pinta')) {
                var a94rpi1= $('#a94rpi1').html();
                
                if (a94rpi1==ometres1[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi1'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi1'));
                }

            }
            if ($('.pint2').hasClass('pinta')) {
                var a94rpi2= $('#a94rpi2').html();
                
                if (a94rpi2==ometres1[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi2'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi2'));
                }

            }
            if ($('.pint3').hasClass('pinta')) {
                var a94rpi3= $('#a94rpi3').html();
                
                if (a94rpi3==ometres1[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi3'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi3'));
                }

            }
            if ($('.pint4').hasClass('pinta')) {
                var a94rpi4= $('#a94rpi4').html();
                
                if (a94rpi4==ometres1[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi4'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi4'));
                }

            }
            if ($('.pint5').hasClass('pinta')) {
                var a94rpi11= $('#a94rpi11').html();
                
                if (a94rpi11==ometres2[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi11'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi11'));
                }

            }
            if ($('.pint6').hasClass('pinta')) {
                var a94rpi12= $('#a94rpi12').html();
                
                if (a94rpi12==ometres2[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi12'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi12'));
                }

            }
            if ($('.pint7').hasClass('pinta')) {
                var a94rpi13= $('#a94rpi13').html();
                
                if (a94rpi13==ometres2[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi13'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi13'));
                }

            }
            if ($('.pint8').hasClass('pinta')) {
                var a94rpi14= $('#a94rpi14').html();
                
                if (a94rpi14==ometres2[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi14'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi14'));
                }

            }
            if ($('.pint9').hasClass('pinta')) {
                var a94rpi21= $('#a94rpi21').html();
                
                if (a94rpi21==ometres3[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi21'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi21'));
                }

            }
            if ($('.pint10').hasClass('pinta')) {
                var a94rpi22= $('#a94rpi22').html();
                
                if (a94rpi22==ometres3[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi22'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi22'));
                }

            }
            if ($('.pint11').hasClass('pinta')) {
                var a94rpi23= $('#a94rpi23').html();
                
                if (a94rpi23==ometres3[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi23'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi23'));
                }

            }
            if ($('.pint12').hasClass('pinta')) {
                var a94rpi24= $('#a94rpi24').html();
                
                if (a94rpi24==ometres3[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi24'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi24'));
                }

            }
            if ($('.pint13').hasClass('pinta')) {
                var a94rpi31= $('#a94rpi31').html();
                
                if (a94rpi31==ometres4[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi31'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi31'));
                }

            }
            if ($('.pint14').hasClass('pinta')) {
                var a94rpi32= $('#a94rpi32').html();
                
                if (a94rpi32==ometres4[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi32'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi32'));
                }

            }
            if ($('.pint15').hasClass('pinta')) {
                var a94rpi33= $('#a94rpi33').html();
                
                if (a94rpi33==ometres4[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi33'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi33'));
                }

            }
            if ($('.pint16').hasClass('pinta')) {
                var a94rpi34= $('#a94rpi34').html();
                
                if (a94rpi34==ometres4[0]) {
                    a94cc6++;
                    f_ok($('#a94rpi34'));
                }else {
                    a94cc6;
                    f_no($('#a94rpi34'));
                }

            }
            var a94resu6=((a94cc6*1)/4);
            cor=cor+parseFloat(a94resu6);
            inc=inc-(1-parseFloat(a94resu6));
            $('#a94cal6').html(a94resu6.toFixed(2));
            $('#a94cal6').css("border-bottom","1px solid black");
            ///////////////////////////pregunta7///////////////////////////////////////////////////////////////
            var a94raobj1=$('#a94raobj1').val();
            var a94raobj2=$('#a94raobj2').val();
            var a94raobj3=$('#a94raobj3').val();
            var a94cc7=0;
            if (a94raobj1=='ángulo recto' || a94raobj1=='angulo recto') {
                a94cc7++;
                f_ok($('#a94raobj1'));
            }else {
                a94cc7;
                f_no($('#a94raobj1'));
            }
            if (a94raobj2=='ángulo obtuso' || a94raobj2=='angulo obtuso') {
                a94cc7++;
                f_ok($('#a94raobj2'));
            }else {
                a94cc7;
                f_no($('#a94raobj2'));
            }
            if (a94raobj3=='ángulo agudo' || a94raobj3=='angulo agudo') {
                a94cc7++;
                f_ok($('#a94raobj3'));
            }else {
                a94cc7;
                f_no($('#a94raobj3'));
            }
            var a94resu7=((a94cc7*1)/3);
            cor=cor+parseFloat(a94resu7);
            inc=inc-(1-parseFloat(a94resu7));
            $('#a94cal7').html(a94resu7.toFixed(2));
            $('#a94cal7').css("border-bottom","1px solid black");
            //////////////////////pregunta8/////////////////////////////////////////////////////////////////
            var a94cc8=0;
            for(i=0;i<resp.length;i++){
                if(resp.length == 3 && resp[i]=='ok'){
                    a94cc8++;
                    f_ok($('.images'));
                }else{
                    a94cc8;
                    f_no($('.images'));
                }
            }
            var a94resu8=((a94cc8*1)/3);
            cor=cor+parseFloat(a94resu8);
            inc=inc-(1-parseFloat(a94resu8));
            $('#a94cal8').html(a94resu8.toFixed(2));
            $('#a94cal8').css("border-bottom","1px solid black");
            //////////////////////////pregunta9//////////////////////////////////////////////////////////////////
            var a94tc1 =$('#a94tc1').val();
                a94tc1=a94tc1.split('');
            var a94tc2 =$('#a94tc2').val();
                a94tc2=a94tc2.split('');
            var a94tc3 =$('#a94tc3').val();
                a94tc3=a94tc3.split('');
            var a94tc4 =$('#a94tc4').val();
                a94tc4=a94tc4.split('');
            var a94tf1 =$('#a94tf1').val();
            var a94tf2 =$('#a94tf2').val();
            var a94tf3 =$('#a94tf3').val();
            var a94tf4 =$('#a94tf4').val();
            var a94cc9=0;
            if (a94tc1.length==a94num1) {
                a94cc9++;
                f_ok($('#a94tc1'));
            }else {
                a94cc9;
                f_no($('#a94tc1'));
            }
            if (a94tc2.length==a94num2) {
                a94cc9++;
                f_ok($('#a94tc2'));
            }else {
                a94cc9;
                f_no($('#a94tc2'));
            }
            if (a94tc3.length==a94num3) {
                a94cc9++;
                f_ok($('#a94tc3'));
            }else {
                a94cc9;
                f_no($('#a94tc3'));
            }
            if (a94tc4.length==a94num4) {
                a94cc9++;
                f_ok($('#a94tc4'));
            }else {
                a94cc9;
                f_no($('#a94tc4'));
            }
            if (a94tf1==a94num1) {
                a94cc9++;
                f_ok($('#a94tf1'));
            }else {
                a94cc9;
                f_no($('#a94tf1'));
            }
            if (a94tf2==a94num2) {
                a94cc9++;
                f_ok($('#a94tf2'));
            }else {
                a94cc9;
                f_no($('#a94tf2'));
            }
            if (a94tf3==a94num3) {
                a94cc9++;
                f_ok($('#a94tf3'));
            }else {
                a94cc9;
                f_no($('#a94tf3'));
            }
            if (a94tf4==(a94num4)) {
                a94cc9++;
                f_ok($('#a94tf4'));
            }else {
                a94cc9;
                f_no($('#a94tf4'));
            }
            var a94resu9=((a94cc9*1)/8);
            cor=cor+parseFloat(a94resu9);
            inc=inc-(1-parseFloat(a94resu9));
            $('#a94cal9').html(a94resu9.toFixed(2));
            $('#a94cal9').css("border-bottom","1px solid black");
            Calculo_nota()
            
        }
        
    }