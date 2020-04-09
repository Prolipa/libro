    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=10,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function mayus1(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
        v_ids=['P <select id="conte1" class=""><option value="" disabled selected>Seleccione</option><option value="⊂">⊂</option><option value="⊄">⊄</option></select> U','Q <select id="conte2" class=""><option value="" disabled selected>Seleccione</option><option value="⊂">⊂</option><option value="⊄">⊄</option></select> U','R <select id="conte3" class=""><option value="" disabled selected>Seleccione</option><option value="⊂">⊂</option><option value="⊄">⊄</option></select> U'];
        var myArray1 = ['0','1','2'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
         //aleatorio literal 1
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray1[i-1];
            $("#conten"+i).html(v_ids[c]);
            
        };
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var descen2=['<br><img id="ime1" class="img-responsive c1 " src="img/i2_p88_act93.jpg">','<img id="ime2" class="img-responsive c2" src="img/i3_p88_act93.jpg">','<img id="ime3" class="img-responsive c3" src="img/i4_p88_act93.jpg">','<img id="ime3" class="img-responsive c4" src="img/i5_p88_act93.jpg"><br>'];
        var descen3=['<b class="c4">3 lados</b>','<b class="c3">0 lados</b>','<b class="c1">4 lados</b>','<b class="c2">5 lados</b>'];
        var myArray2 = ['0','1','2','3'];
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        //aleatorio literal 3
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray2[i-1];
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
        $("#caja_res3").droppable({
            drop: function(e, ui) {
                r_ids2.push(ui.draggable.attr("src"));
                for(i=1;i<5;i++){ //4 elementos
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
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var umil1= parseInt((Math.random() * 4) + 1);
        var cent1= parseInt((Math.random() * 8) + 1);
        var decen1= parseInt((Math.random() * 8) + 1);
        var uni1= parseInt((Math.random() * 8) + 1);
        var numb1=[];
        for (var i = 0; i < umil1; i++) {
            numb1.push('<img class=" um1 c_imagenes" src="img/i1_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < cent1; i++) {
            numb1.push('<img class=" c1 c_imagenes" src="img/i2_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < decen1; i++) {
            numb1.push('<img class=" d1 c_imagenes" src="img/i3_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < uni1; i++) {
            numb1.push('<img class=" u1 c_imagenes" src="img/i4_p71_act76.jpg" alt="">');
        }
        $('#a93bas1').html('').append(numb1);
        var umil2= parseInt((Math.random() * 4) + 1);
        var cent2= parseInt((Math.random() * 8) + 1);
        var decen2= parseInt((Math.random() * 8) + 1);
        var uni2= parseInt((Math.random() * 8) + 1);
        var numb2=[];
        for (var i = 0; i < umil2; i++) {
            numb2.push('<img class=" um1 c_imagenes" src="img/i1_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < cent2; i++) {
            numb2.push('<img class=" c1 c_imagenes" src="img/i2_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < decen2; i++) {
            numb2.push('<img class=" d1 c_imagenes" src="img/i3_p71_act76.jpg" alt="">');
        }
        for (var i = 0; i < uni2; i++) {
            numb2.push('<img class=" u1 c_imagenes" src="img/i4_p71_act76.jpg" alt="">');
        }
        $('#a93bas2').html('').append(numb2);
        ////////////////////////////////////////////////////////////////////////////////////////
        var suma1= parseInt((Math.random() * 3000) + 1000);
        var suma2= parseInt((Math.random() * 3000) + 1000);
        var sepsum1=[];
        var sepsum2=[];
        if (suma1>suma2) {
            $('#n5sum1').html(suma1);
            $('#n5sum2').html(suma2);
            sepsum1=suma1.toString().split('');
            sepsum2=suma2.toString().split('');
        }else {
            $('#n5sum1').html(suma2);
            $('#n5sum2').html(suma1);
            sepsum1=suma2.toString().split('');
            sepsum2=suma1.toString().split('');
        }
        var resta1= parseInt((Math.random() * 8000) + 1000);
        var resta2= parseInt((Math.random() * 6000) + 1000);
        var sepres1=[];
        var sepres2=[];
        if (resta1>resta2) {
            $('#n5res1').html(resta1);
            $('#n5res2').html(resta2);
            sepres1=resta1.toString().split('');
            sepres2=resta2.toString().split('');
        }else {
            $('#n5res1').html(resta2);
            $('#n5res2').html(resta1);
            sepres1=resta2.toString().split('');
            sepres2=resta1.toString().split('');
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////
        var a93cvf1=['Ángulo es una figura geométrica que tiene tres lados.','Un ángulo agudo es aquel que mide más de 90°.','Un cuadrado tiene 4 ángulos rectos.'];
        var a93cvfr1=['F','F','V'];
        var a93aux1=[];
        var myArray5 = ['0','1','2'];
        var i,j,k;
        for (i = myArray5.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray5[i - 1];
            myArray5[i - 1] = myArray5[j];
            myArray5[j] = k;
        }
         //aleatorio literal 1
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray5[i-1];
            $("#a93vf"+i).html(a93cvf1[c]);
            a93aux1.push(a93cvfr1[c]);
        };
        ////////////////////////////////////////////////////////////////////////////////////////
        var a93num1 = parseInt((Math.random() * 8) + 2);
        var a93num2 = parseInt((Math.random() * 8) + 2);
        var a93num3 = parseInt((Math.random() * 8) + 2);
        $('#cantip1').html(a93num1);
        $('#cantip2').html(a93num2);
        $('#cantip3').html(a93num3);
        $('#totala93').html((a93num3+a93num2+a93num1));
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var conte1=$('#conte1').val();
            var conte2=$('#conte2').val();
            var conte3=$('#conte3').val();
            var concont1=0;
            if (conte1=='⊂') {
                concont1++;
                f_ok($('#conte1'));
            }else {
                concont1;
                f_no($('#conte1'));
            }
            if (conte2=='⊄') {
                concont1++;
                f_ok($('#conte2'));
            }else {
                concont1;
                f_no($('#conte2'));
            }
            if (conte3=='⊂') {
                concont1++;
                f_ok($('#conte3'));
            }else {
                concont1;
                f_no($('#conte3'));
            }
            var resprg1=(concont1*1)/3;
            $('#a93cal1').html(resprg1.toFixed(2));
            $('#a93cal1').css("border-bottom","1px solid black");
            cor=cor+resprg1;
            inc=inc+(1-resprg1);
            /////////////////////////////////////////////////////////////
            var concont2=0;
            for(i=0;i<resp.length;i++){
                if(resp.length == 4 && resp[i]=='ok'){
                    concont2++;
                    f_ok($('.images'));
                }else{
                    concont2;
                    f_no($('.images'));
                }
            }
            var a93pcr1=['cuadrado, 4 lados','pentágono, 5 lados','círculo, 0 lados','triángulo, 3 lados'];
            var a93pc1=[$('#a93pc1').val()+', '+$('#a93pc11').val(),$('#a93pc2').val()+', '+$('#a93pc12').val(),$('#a93pc3').val()+', '+$('#a93pc13').val(),$('#a93pc4').val()+', '+$('#a93pc14').val()]
            var a93pcon1=0;
            
            for (var i = 0; i < a93pcr1.length; i++) {
                if (a93pc1[0]==a93pcr1[i]) {
                    a93pcon1++;
                    a93pcr1[i]=a93pcon1;
                }
            }
            if (a93pcon1==1) {
                concont2++;
                f_ok($('#a93pc1'));
                f_ok($('#a93pc11'));
            }else {
                concont2;
                f_no($('#a93pc1'));
                f_no($('#a93pc11'));
            }
            var a93pcon1=0;
            for (var i = 0; i < a93pcr1.length; i++) {
                if (a93pc1[1]==a93pcr1[i]) {
                    a93pcon1++;
                    a93pcr1[i]=a93pcon1;
                }
            }
            if (a93pcon1==1) {
                concont2++;
                f_ok($('#a93pc2'));
                f_ok($('#a93pc12'));
            }else {
                concont2;
                f_no($('#a93pc2'));
                f_no($('#a93pc12'));
            }
            var a93pcon1=0;
            for (var i = 0; i < a93pcr1.length; i++) {
                if (a93pc1[2]==a93pcr1[i]) {
                    a93pcon1++;
                    a93pcr1[i]=a93pcon1;
                }
            }
            if (a93pcon1==1) {
                concont2++;
                f_ok($('#a93pc3'));
                f_ok($('#a93pc13'));
            }else {
                concont2;
                f_no($('#a93pc3'));
                f_no($('#a93pc13'));
            }
            var a93pcon1=0;
            for (var i = 0; i < a93pcr1.length; i++) {
                if (a93pc1[3]==a93pcr1[i]) {
                    a93pcon1++;
                    a93pcr1[i]=a93pcon1;
                }
            }
            if (a93pcon1==1) {
                concont2++;
                f_ok($('#a93pc4'));
                f_ok($('#a93pc14'));
            }else {
                concont2;
                f_no($('#a93pc4'));
                f_no($('#a93pc14'));
            }
            var resprg2=(concont2*1.5)/8;
            $('#a93cal2').html(resprg2.toFixed(2));
            $('#a93cal2').css("border-bottom","1px solid black");
            cor=cor+resprg2;
            inc=inc+(1.5-resprg2);
            //////////////////////////////////////////////////////////////////////////////
            var concont3=0;
            var a93ba1 =[$('#a93ba1').val(),$('#a93ba2').val(),$('#a93ba3').val(),$('#a93ba4').val()];
            if (a93ba1[0]==umil1) {
                concont3++;
                f_ok($('#a93ba1'));
            }else {
                concont3;
                f_no($('#a93ba1'));
            }
            if (a93ba1[1]==cent1) {
                concont3++;
                f_ok($('#a93ba2'));
            }else {
                concont3;
                f_no($('#a93ba2'));
            }
            if (a93ba1[2]==decen1) {
                concont3++;
                f_ok($('#a93ba3'));
            }else {
                concont3;
                f_no($('#a93ba3'));
            }
            if (a93ba1[3]==uni1) {
                concont3++;
                f_ok($('#a93ba4'));
            }else {
                concont3;
                f_no($('#a93ba4'));
            }
            var a93ba2 =[$('#a93ba11').val(),$('#a93ba12').val(),$('#a93ba13').val(),$('#a93ba14').val()];
            if (a93ba2[0]==umil2) {
                concont3++;
                f_ok($('#a93ba11'));
            }else {
                concont3;
                f_no($('#a93ba11'));
            }
            if (a93ba2[1]==cent2) {
                concont3++;
                f_ok($('#a93ba12'));
            }else {
                concont3;
                f_no($('#a93ba12'));
            }
            if (a93ba2[2]==decen2) {
                concont3++;
                f_ok($('#a93ba13'));
            }else {
                concont3;
                f_no($('#a93ba13'));
            }
            if (a93ba2[3]==uni2) {
                concont3++;
                f_ok($('#a93ba14'));
            }else {
                concont3;
                f_no($('#a93ba14'));
            }
            var a93bt1 =[$('#a93bt1').val(),$('#a93bt2').val(),$('#a93bt3').val(),$('#a93bt4').val()];
            var a93rest1=[umil1,cent1,decen1,uni1];
                a93rest1=a93rest1.join('');
            var a93rest2=[umil2,cent2,decen2,uni2];
                a93rest2=a93rest2.join('');
            var a93restt=parseInt(a93rest1)+parseInt(a93rest2);
                a93restt=a93restt.toString().split('');
            if (a93bt1[0]==a93restt[0]) {
                concont3++;
                f_ok($('#a93bt1'));
            }else {
                concont3;
                f_no($('#a93bt1'));
            }
            if (a93bt1[1]==a93restt[1]) {
                concont3++;
                f_ok($('#a93bt2'));
            }else {
                concont3;
                f_no($('#a93bt2'));
            }
            if (a93bt1[2]==a93restt[2]) {
                concont3++;
                f_ok($('#a93bt3'));
            }else {
                concont3;
                f_no($('#a93bt3'));
            }
            if (a93bt1[3]==a93restt[3]) {
                concont3++;
                f_ok($('#a93bt4'));
            }else {
                concont3;
                f_no($('#a93bt4'));
            }
            var resprg3=(concont3*1)/12;
            $('#a93cal3').html(resprg3.toFixed(2));
            $('#a93cal3').css("border-bottom","1px solid black");
            cor=cor+resprg3;
            inc=inc+(1-resprg3);
            /////////////////////////////////////////////////////////////////////////////////////
            var caja_img1= $('#caja_img1 img').attr('alt');
            var caja_img2= $('#caja_img2 img').attr('alt');
            var caja_img3= $('#caja_img3 img').attr('alt');
            var caja_img4= $('#caja_img4 img').attr('alt');
            var concont4=0;
            if (caja_img1=='1') {
                concont4++;
                f_ok($('#caja_img1'));
            }else {
                concont4;
                f_no($('#caja_img1'));
            }
            if (caja_img2=='2') {
                concont4++;
                f_ok($('#caja_img2'));
            }else {
                concont4;
                f_no($('#caja_img2'));
            }
            if (caja_img3=='2') {
                concont4++;
                f_ok($('#caja_img3'));
            }else {
                concont4;
                f_no($('#caja_img3'));
            }
            if (caja_img4=='1') {
                concont4++;
                f_ok($('#caja_img4'));
            }else {
                concont4;
                f_no($('#caja_img4'));
            }
            var resprg4=(concont4*1)/4;
            $('#a93cal4').html(resprg4.toFixed(2));
            $('#a93cal4').css("border-bottom","1px solid black");
            cor=cor+resprg4;
            inc=inc+(1-resprg4);
            ////////////////////////////////////////////////////////////////////
            var concont5=0;
            temp = $(".imagen1");
            for(i=0;i<resp1.length;i++){
                if(resp1.length == 4 && resp1[i]=='ok'){
                    concont5++;
                    f_ok(temp);
                }else{
                    concont5;
                    f_no(temp);
                }
            }
            var resprg5=(concont5*1)/4;
            $('#a93cal5').html(resprg5.toFixed(2));
            $('#a93cal5').css("border-bottom","1px solid black");
            cor=cor+resprg5;
            inc=inc+(1-resprg5);
            /////////////////////////////////////////////////////////////////////////
            
            var concont6=0;
            var a93dif1=$('#a93dif1').val();
            var a93dif2=$('#a93dif2').val();
            var a93dif3=$('#a93dif3').val();
            var a93dif4=$('#a93dif4').val();
            var a93dif11=$('#a93dif11').val();
            var a93dif12=$('#a93dif12').val();
            var a93dif13=$('#a93dif13').val();
            var a93dif14=$('#a93dif14').val();
            var a93dt1=$('#a93dt1').val();
            var a93dt2=$('#a93dt2').val();
            var a93dt3=$('#a93dt3').val();
            var a93dt4=$('#a93dt4').val();
            var a93dt5=$('#a93dt5').val();
            if (a93dif1==sepsum1[0]) {
                concont6++;
                f_ok($('#a93dif1'));
            }else {
                concont6;
                f_no($('#a93dif1'));
            }
            if (a93dif2==sepsum1[1]) {
                concont6++;
                f_ok($('#a93dif2'));
            }else {
                concont6;
                f_no($('#a93dif2'));
            }
            if (a93dif3==sepsum1[2]) {
                concont6++;
                f_ok($('#a93dif3'));
            }else {
                concont6;
                f_no($('#a93dif3'));
            }
            if (a93dif4==sepsum1[3]) {
                concont6++;
                f_ok($('#a93dif4'));
            }else {
                concont6;
                f_no($('#a93dif4'));
            }
            if (a93dif11==sepsum2[0]) {
                concont6++;
                f_ok($('#a93dif11'));
            }else {
                concont6;
                f_no($('#a93dif11'));
            }
            if (a93dif12==sepsum2[1]) {
                concont6++;
                f_ok($('#a93dif12'));
            }else {
                concont6;
                f_no($('#a93dif12'));
            }
            if (a93dif13==sepsum2[2]) {
                concont6++;
                f_ok($('#a93dif13'));
            }else {
                concont6;
                f_no($('#a93dif13'));
            }
            if (a93dif14==sepsum2[3]) {
                concont6++;
                f_ok($('#a93dif14'));
            }else {
                concont6;
                f_no($('#a93dif14'));
            }
            var sr1=suma1+suma2;
                sr1=sr1.toString().split('');
            if (a93dt1==sr1[0]) {
                concont6++;
                f_ok($('#a93dt1'));
            }else {
                concont6;
                f_no($('#a93dt1'));
            }
            if (a93dt2==sr1[1]) {
                concont6++;
                f_ok($('#a93dt2'));
            }else {
                concont6;
                f_no($('#a93dt2'));
            }
            if (a93dt3==sr1[2]) {
                concont6++;
                f_ok($('#a93dt3'));
            }else {
                concont6;
                f_no($('#a93dt3'));
            }
            if (a93dt4==sr1[3]) {
                concont6++;
                f_ok($('#a93dt4'));
            }else {
                concont6;
                f_no($('#a93dt4'));
            }
            if (a93dt5==(suma1+suma2)) {
                concont6++;
                f_ok($('#a93dt5'));
            }else {
                concont6;
                f_no($('#a93dt5'));
            }
            var a93sum1=$('#a93sum1').val();
            var a93sum2=$('#a93sum2').val();
            var a93sum3=$('#a93sum3').val();
            var a93sum4=$('#a93sum4').val();
            var a93sum11=$('#a93sum11').val();
            var a93sum12=$('#a93sum12').val();
            var a93sum13=$('#a93sum13').val();
            var a93sum14=$('#a93sum14').val();
            var a93dt11=$('#a93dt11').val();
            var a93dt12=$('#a93dt12').val();
            var a93dt13=$('#a93dt13').val();
            var a93dt14=$('#a93dt14').val();
            var a93dt15=$('#a93dt15').val();
            if (a93sum1==sepres1[0]) {
                concont6++;
                f_ok($('#a93sum1'));
            }else {
                concont6;
                f_no($('#a93sum1'));
            }
            if (a93sum2==sepres1[1]) {
                concont6++;
                f_ok($('#a93sum2'));
            }else {
                concont6;
                f_no($('#a93sum2'));
            }
            if (a93sum3==sepres1[2]) {
                concont6++;
                f_ok($('#a93sum3'));
            }else {
                concont6;
                f_no($('#a93sum3'));
            }
            if (a93sum4==sepres1[3]) {
                concont6++;
                f_ok($('#a93sum4'));
            }else {
                concont6;
                f_no($('#a93sum4'));
            }
            if (a93sum11==sepres2[0]) {
                concont6++;
                f_ok($('#a93sum11'));
            }else {
                concont6;
                f_no($('#a93sum11'));
            }
            if (a93sum12==sepres2[1]) {
                concont6++;
                f_ok($('#a93sum12'));
            }else {
                concont6;
                f_no($('#a93sum12'));
            }
            if (a93sum13==sepres2[2]) {
                concont6++;
                f_ok($('#a93sum13'));
            }else {
                concont6;
                f_no($('#a93sum13'));
            }
            if (a93sum14==sepres2[3]) {
                concont6++;
                f_ok($('#a93sum14'));
            }else {
                concont6;
                f_no($('#a93sum14'));
            }
            var sr2=0;
            var sr3=0;
            if (resta1>resta2) {
                sr2=resta1-resta2;
                sr3=resta1-resta2;
            }else {
                sr2=resta2-resta1;
                sr3=resta2-resta1;
            }
            sr2=zfill(parseInt(sr2), 4);
            var sr4=[a93dt11,a93dt12,a93dt13,a93dt14];
            sr6= parseInt(sr4.join(''));
            if (sr6>=0) {
                var sr5= zfill(parseInt(sr6), 4);    
            }else {
                var sr5= sr6;
            }
            
            sr5=sr5.toString().split('');
            sr2=sr2.toString().split('');
            if (sr5[0]==sr2[0]) {
                concont6++;
                f_ok($('#a93dt11'));
            }else {
                concont6;
                f_no($('#a93dt11'));
            }
            if (sr5[1]==sr2[1]) {
                concont6++;
                f_ok($('#a93dt12'));
            }else {
                concont6;
                f_no($('#a93dt12'));
            }
            if (sr5[2]==sr2[2]) {
                concont6++;
                f_ok($('#a93dt13'));
            }else {
                concont6;
                f_no($('#a93dt13'));
            }
            if (sr5[3]==sr2[3]) {
                concont6++;
                f_ok($('#a93dt14'));
            }else {
                concont6;
                f_no($('#a93dt14'));
            }
            
            if (a93dt15==sr3) {
                concont6++;
                f_ok($('#a93dt15'));
            }else {
                concont6;
                f_no($('#a93dt15'));
            }
            var resprg6=(concont6*1.5)/26;
            $('#a93cal6').html(resprg6.toFixed(2));
            $('#a93cal6').css("border-bottom","1px solid black");
            cor=cor+resprg6;
            inc=inc+(1.5-resprg6);
            ////////////////////////////////////////////////////////////////////////////
            var a93vfr1=$('#a93vfr1').val();
            var a93vfr2=$('#a93vfr2').val();
            var a93vfr3=$('#a93vfr3').val();
            var concont7=0;
            if (a93vfr1==a93aux1[0]) {
                concont7++;
                f_ok($('#a93vfr1'));
            }else {
                concont7;
                f_no($('#a93vfr1'));
            }
            if (a93vfr2==a93aux1[1]) {
                concont7++;
                f_ok($('#a93vfr2'));
            }else {
                concont7;
                f_no($('#a93vfr2'));
            }
            if (a93vfr3==a93aux1[2]) {
                concont7++;
                f_ok($('#a93vfr3'));
            }else {
                concont7;
                f_no($('#a93vfr3'));
            }
            var resprg7=(concont7*1)/3;
            $('#a93cal7').html(resprg7.toFixed(2));
            $('#a93cal7').css("border-bottom","1px solid black");
            cor=cor+resprg7;
            inc=inc+(1-resprg7);
            /////////////////////////////////////////////////////////////////////////
            var a93tc1 =$('#a93tc1').val();
                a93tc1=a93tc1.split('');
            var a93tc2 =$('#a93tc2').val();
                a93tc2=a93tc2.split('');
            var a93tc3 =$('#a93tc3').val();
                a93tc3=a93tc3.split('');
            var a93tf1 =$('#a93tf1').val();
            var a93tf2 =$('#a93tf2').val();
            var a93tf3 =$('#a93tf3').val();
            var a93tf4 =$('#a93tf4').val();
            var concont8=0;
            if (a93tc1.length==a93num1) {
                concont8++;
                f_ok($('#a93tc1'));
            }else {
                concont8;
                f_no($('#a93tc1'));
            }
            if (a93tc2.length==a93num2) {
                concont8++;
                f_ok($('#a93tc2'));
            }else {
                concont8;
                f_no($('#a93tc2'));
            }
            if (a93tc3.length==a93num3) {
                concont8++;
                f_ok($('#a93tc3'));
            }else {
                concont8;
                f_no($('#a93tc3'));
            }
            if (a93tf1==a93num1) {
                concont8++;
                f_ok($('#a93tf1'));
            }else {
                concont8;
                f_no($('#a93tf1'));
            }
            if (a93tf2==a93num2) {
                concont8++;
                f_ok($('#a93tf2'));
            }else {
                concont8;
                f_no($('#a93tf2'));
            }
            if (a93tf3==a93num3) {
                concont8++;
                f_ok($('#a93tf3'));
            }else {
                concont8;
                f_no($('#a93tf3'));
            }
            if (a93tf4==(a93num1+a93num2+a93num3)) {
                concont8++;
                f_ok($('#a93tf4'));
            }else {
                concont8;
                f_no($('#a93tf4'));
            }
            var resprg8=(concont8*2)/7;
            $('#a93cal8').html(resprg8.toFixed(2));
            $('#a93cal8').css("border-bottom","1px solid black");
            cor=cor+resprg8;
            inc=inc+(2-resprg8);
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