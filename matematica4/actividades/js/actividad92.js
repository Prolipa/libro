    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=31,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],r_ids3=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        v_ids=['<img class="img-responsive" src="img/i1_p86_act92.jpg" style="height: 144px;" alt="">','<img class="img-responsive" src="img/i2_p86_act92.jpg" alt="" style="height: 144px;">','<img class="img-responsive" src="img/i3_p86_act92.jpg" alt="" style="height: 144px;">','<img class="img-responsive" src="img/i4_p86_act92.jpg" alt="" style="height: 144px;">','<img class="img-responsive" src="img/i5_p86_act92.jpg" alt="" style="height: 144px;">'];
        r_ids=['<input type="text" id="a92ang1" onkeyup="mayus(this);" style=" text-align:center; width:  120px; border:none; border-bottom: 1px dashed black">','<input type="text" id="a92ang2" onkeyup="mayus(this);" style=" text-align:center; width:  120px; border:none; border-bottom: 1px dashed black">','<input type="text" id="a92ang3" onkeyup="mayus(this);" style=" text-align:center; width:  120px; border:none; border-bottom: 1px dashed black">','<input type="text" id="a92ang4" onkeyup="mayus(this);" style=" text-align:center; width:  120px; border:none; border-bottom: 1px dashed black">','<input type="text" id="a92ang5" onkeyup="mayus(this);" style=" text-align:center; width:  120px; border:none; border-bottom: 1px dashed black">'];
        var myArray1 = ['0','1','2','3','4'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 5 ; i++) {
            var c=myArray1[i-1];
            $("#a92cimg"+i).html(v_ids[c]);
            $("#a92cin"+i).html(r_ids[c]);
        };
        r_ids1=['<img id="a92im1" class="img-responsive" src="img/i6_p86_act92.jpg" alt="1">','<img id="a92im2" class="img-responsive" src="img/i7_p86_act92.jpg" alt="2">','<img id="a92im3" class="img-responsive" src="img/i8_p86_act92.jpg" alt="3">'];
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
            $("#a92cim"+i).html(r_ids1[c]);
            
        };
        /////////////////////////////////////////////////////////////////////////////////
        r_ids2=['<img class="img-responsive" src="img/i9_p86_act92.jpg" alt="">','<img class="img-responsive" src="img/i10_p86_act92.jpg" alt="">','<img class="img-responsive" src="img/i11_p86_act92.jpg" alt="">','<img class="img-responsive" src="img/i12_p86_act92.jpg" alt="">'];
        r_ids3=['<br><br><br><input type="text" id="a92mag1" onkeyup="mayus(this);" style=" text-align:center; width:  120px; border:none; border-bottom: 1px dashed black">','<br><br><br><input type="text" id="a92mag2" onkeyup="mayus(this);" style=" text-align:center; width:  120px; border:none; border-bottom: 1px dashed black">','<br><br><br><input type="text" id="a92mag3" onkeyup="mayus(this);" style=" text-align:center; width:  120px; border:none; border-bottom: 1px dashed black">','<br><br><br><input type="text" id="a92mag4" onkeyup="mayus(this);" style=" text-align:center; width:  120px; border:none; border-bottom: 1px dashed black">'];
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
            $("#a92imma"+i).html(r_ids2[c]);
            $("#a92inma"+i).html(r_ids3[c]);
        };
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var a92num1 = parseInt((Math.random() * 7) + 1);
        var a92num2 = parseInt((Math.random() * 7) + 1);
        var a92num3 = parseInt((Math.random() * 7) + 1);
        var v_img=[];
        for (var i =1; i <= a92num1; i++) {
           v_img.push("<img src='img/i13_p86_act92.jpg' class='c_imagenes'>");
        }
        for (var i =1; i <= a92num2; i++) {
           v_img.push("<img src='img/i14_p86_act92.jpg' class='c_imagenes'>");
        }
        for (var i =1; i <= a92num3; i++) {
           v_img.push("<img src='img/i15_p86_act92.jpg' class='c_imagenes'>");
        }
        var nu=[];
        for (var i =0; i < v_img.length; i++) {
            nu.push(i);
        }
        var i,j,k;
        for (i = nu.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = nu[i - 1];
            nu[i - 1] = nu[j];
            nu[j] = k;
        }
        var v_img1=[];
        for (var i =0; i < nu.length; i++) {
            v_img1.push(v_img[nu[i]]);    
            }
        $("#imgs").html('');
        $("#imgs").append(v_img1);
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var a92ang1=$('#a92ang1').val();
            var a92ang2=$('#a92ang2').val();
            var a92ang3=$('#a92ang3').val();
            var a92ang4=$('#a92ang4').val();
            var a92ang5=$('#a92ang5').val();
            if (a92ang1=='ángulo recto') {
                cor++;
                f_ok($('#a92ang1'));
            }else {
                inc++;
                f_no($('#a92ang1'));
            }
            if (a92ang2=='ángulo obtuso') {
                cor++;
                f_ok($('#a92ang2'));
            }else {
                inc++;
                f_no($('#a92ang2'));
            }
            if (a92ang3=='ángulo agudo') {
                cor++;
                f_ok($('#a92ang3'));
            }else {
                inc++;
                f_no($('#a92ang3'));
            }
            if (a92ang4=='ángulo recto') {
                cor++;
                f_ok($('#a92ang4'));
            }else {
                inc++;
                f_no($('#a92ang4'));
            }
            if (a92ang5=='ángulo agudo') {
                cor++;
                f_ok($('#a92ang5'));
            }else {
                inc++;
                f_no($('#a92ang5'));
            }
            //////////////////////////////////////////////////////////////////

            var a92im1=$("#a92cim1 > img").attr('alt');
            var a92im2=$("#a92cim2 > img").attr('alt');
            var a92im3=$("#a92cim3 > img").attr('alt');
            if (a92im1==1) {
                var a92nf1=$('#a92nf1').val();
                var a92nl1=$('#a92nl1').val();
                var a92ls1=$('#a92ls1').val();
                var a92nan1=$('#a92nan1').val();
                var a92can1=$('#a92can1').val();
                if (a92nf1=='cuadrado') {
                    cor++;
                    f_ok($('#a92nf1'));
                }else {
                    inc++;
                    f_no($('#a92nf1'));
                }
                if (a92nl1=='4') {
                    cor++;
                    f_ok($('#a92nl1'));
                }else {
                    inc++;
                    f_no($('#a92nl1'));
                }
                if (a92ls1=='iguales') {
                    cor++;
                    f_ok($('#a92ls1'));
                }else {
                    inc++;
                    f_no($('#a92ls1'));
                }
                if (a92nan1=='4') {
                    cor++;
                    f_ok($('#a92nan1'));
                }else {
                    inc++;
                    f_no($('#a92nan1'));
                }
                if (a92can1=='ángulo recto' || a92can1=='recto' || a92can1=='rectos' || a92can1=='ángulos rectos') {
                    cor++;
                    f_ok($('#a92can1'));
                }else {
                    inc++;
                    f_no($('#a92can1'));
                }
            }else if (a92im1==2) {
                var a92nf1=$('#a92nf1').val();
                var a92nl1=$('#a92nl1').val();
                var a92ls1=$('#a92ls1').val();
                var a92nan1=$('#a92nan1').val();
                var a92can1=$('#a92can1').val();
                if (a92nf1=='rectángulo' || a92nf1=='rectangulo') {
                    cor++;
                    f_ok($('#a92nf1'));
                }else {
                    inc++;
                    f_no($('#a92nf1'));
                }
                if (a92nl1=='4') {
                    cor++;
                    f_ok($('#a92nl1'));
                }else {
                    inc++;
                    f_no($('#a92nl1'));
                }
                if (a92ls1=='iguales de dos en dos') {
                    cor++;
                    f_ok($('#a92ls1'));
                }else {
                    inc++;
                    f_no($('#a92ls1'));
                }
                if (a92nan1=='4') {
                    cor++;
                    f_ok($('#a92nan1'));
                }else {
                    inc++;
                    f_no($('#a92nan1'));
                }
                if (a92can1=='ángulo recto' || a92can1=='recto' || a92can1=='rectos' || a92can1=='ángulos rectos') {
                    cor++;
                    f_ok($('#a92can1'));
                }else {
                    inc++;
                    f_no($('#a92can1'));
                }
            }else if (a92im1==3) {
                var a92nf1=$('#a92nf1').val();
                var a92nl1=$('#a92nl1').val();
                var a92ls1=$('#a92ls1').val();
                var a92nan1=$('#a92nan1').val();
                var a92can1=$('#a92can1').val();
                if (a92nf1=='triángulo' || a92nf1=='triangulo') {
                    cor++;
                    f_ok($('#a92nf1'));
                }else {
                    inc++;
                    f_no($('#a92nf1'));
                }
                if (a92nl1=='3') {
                    cor++;
                    f_ok($('#a92nl1'));
                }else {
                    inc++;
                    f_no($('#a92nl1'));
                }
                if (a92ls1=='') {
                    cor++;
                    f_ok($('#a92ls1'));
                }else {
                    inc++;
                    f_no($('#a92ls1'));
                }
                if (a92nan1=='3') {
                    cor++;
                    f_ok($('#a92nan1'));
                }else {
                    inc++;
                    f_no($('#a92nan1'));
                }
                if (a92can1=='ángulo agudo' || a92can1=='agudo' || a92can1=='agudos' || a92can1=='ángulos agudos') {
                    cor++;
                    f_ok($('#a92can1'));
                }else {
                    inc++;
                    f_no($('#a92can1'));
                }
            }

            if (a92im2==1) {
                var a92nf2=$('#a92nf2').val();
                var a92nl2=$('#a92nl2').val();
                var a92ls2=$('#a92ls2').val();
                var a92nan2=$('#a92nan2').val();
                var a92can2=$('#a92can2').val();
                if (a92nf2=='cuadrado') {
                    cor++;
                    f_ok($('#a92nf2'));
                }else {
                    inc++;
                    f_no($('#a92nf2'));
                }
                if (a92nl2=='4') {
                    cor++;
                    f_ok($('#a92nl2'));
                }else {
                    inc++;
                    f_no($('#a92nl2'));
                }
                if (a92ls2=='iguales') {
                    cor++;
                    f_ok($('#a92ls2'));
                }else {
                    inc++;
                    f_no($('#a92ls2'));
                }
                if (a92nan2=='4') {
                    cor++;
                    f_ok($('#a92nan2'));
                }else {
                    inc++;
                    f_no($('#a92nan2'));
                }
                if (a92can2=='ángulo recto' || a92can2=='recto' || a92can2=='rectos' || a92can2=='ángulos rectos') {
                    cor++;
                    f_ok($('#a92can2'));
                }else {
                    inc++;
                    f_no($('#a92can2'));
                }
            }else if (a92im2==2) {
                var a92nf2=$('#a92nf2').val();
                var a92nl2=$('#a92nl2').val();
                var a92ls2=$('#a92ls2').val();
                var a92nan2=$('#a92nan2').val();
                var a92can2=$('#a92can2').val();
                if (a92nf2=='rectángulo' || a92nf2=='rectangulo') {
                    cor++;
                    f_ok($('#a92nf2'));
                }else {
                    inc++;
                    f_no($('#a92nf2'));
                }
                if (a92nl2=='4') {
                    cor++;
                    f_ok($('#a92nl2'));
                }else {
                    inc++;
                    f_no($('#a92nl2'));
                }
                if (a92ls2=='iguales de dos en dos') {
                    cor++;
                    f_ok($('#a92ls2'));
                }else {
                    inc++;
                    f_no($('#a92ls2'));
                }
                if (a92nan2=='4') {
                    cor++;
                    f_ok($('#a92nan2'));
                }else {
                    inc++;
                    f_no($('#a92nan2'));
                }
                if (a92can2=='ángulo recto' || a92can2=='recto' || a92can2=='rectos' || a92can2=='ángulos rectos') {
                    cor++;
                    f_ok($('#a92can2'));
                }else {
                    inc++;
                    f_no($('#a92can2'));
                }
            }else if (a92im2==3) {
                var a92nf2=$('#a92nf2').val();
                var a92nl2=$('#a92nl2').val();
                var a92ls2=$('#a92ls2').val();
                var a92nan2=$('#a92nan2').val();
                var a92can2=$('#a92can2').val();
                if (a92nf2=='triángulo' || a92nf2=='triangulo') {
                    cor++;
                    f_ok($('#a92nf2'));
                }else {
                    inc++;
                    f_no($('#a92nf2'));
                }
                if (a92nl2=='3') {
                    cor++;
                    f_ok($('#a92nl2'));
                }else {
                    inc++;
                    f_no($('#a92nl2'));
                }
                if (a92ls2=='') {
                    cor++;
                    f_ok($('#a92ls2'));
                }else {
                    inc++;
                    f_no($('#a92ls2'));
                }
                if (a92nan2=='3') {
                    cor++;
                    f_ok($('#a92nan2'));
                }else {
                    inc++;
                    f_no($('#a92nan2'));
                }
                if (a92can2=='ángulo agudo' || a92can2=='agudo' || a92can2=='agudos' || a92can2=='ángulos agudos') {
                    cor++;
                    f_ok($('#a92can2'));
                }else {
                    inc++;
                    f_no($('#a92can2'));
                }
            }

            if (a92im3==1) {
                var a92nf3=$('#a92nf3').val();
                var a92nl3=$('#a92nl3').val();
                var a92ls3=$('#a92ls3').val();
                var a92nan3=$('#a92nan3').val();
                var a92can3=$('#a92can3').val();
                if (a92nf3=='cuadrado') {
                    cor++;
                    f_ok($('#a92nf3'));
                }else {
                    inc++;
                    f_no($('#a92nf3'));
                }
                if (a92nl3=='4') {
                    cor++;
                    f_ok($('#a92nl3'));
                }else {
                    inc++;
                    f_no($('#a92nl3'));
                }
                if (a92ls3=='iguales') {
                    cor++;
                    f_ok($('#a92ls3'));
                }else {
                    inc++;
                    f_no($('#a92ls3'));
                }
                if (a92nan3=='4') {
                    cor++;
                    f_ok($('#a92nan3'));
                }else {
                    inc++;
                    f_no($('#a92nan3'));
                }
                if (a92can3=='ángulo recto' || a92can3=='recto' || a92can3=='rectos' || a92can3=='ángulos rectos') {
                    cor++;
                    f_ok($('#a92can3'));
                }else {
                    inc++;
                    f_no($('#a92can3'));
                }
            }else if (a92im3==2) {
                var a92nf3=$('#a92nf3').val();
                var a92nl3=$('#a92nl3').val();
                var a92ls3=$('#a92ls3').val();
                var a92nan3=$('#a92nan3').val();
                var a92can3=$('#a92can3').val();
                if (a92nf3=='rectángulo' || a92nf3=='rectangulo') {
                    cor++;
                    f_ok($('#a92nf3'));
                }else {
                    inc++;
                    f_no($('#a92nf3'));
                }
                if (a92nl3=='4') {
                    cor++;
                    f_ok($('#a92nl3'));
                }else {
                    inc++;
                    f_no($('#a92nl3'));
                }
                if (a92ls3=='iguales de dos en dos') {
                    cor++;
                    f_ok($('#a92ls3'));
                }else {
                    inc++;
                    f_no($('#a92ls3'));
                }
                if (a92nan3=='4') {
                    cor++;
                    f_ok($('#a92nan3'));
                }else {
                    inc++;
                    f_no($('#a92nan3'));
                }
                if (a92can3=='ángulo recto' || a92can3=='recto' || a92can3=='rectos' || a92can3=='ángulos rectos') {
                    cor++;
                    f_ok($('#a92can3'));
                }else {
                    inc++;
                    f_no($('#a92can3'));
                }
            }else if (a92im3==3) {
                var a92nf3=$('#a92nf3').val();
                var a92nl3=$('#a92nl3').val();
                var a92ls3=$('#a92ls3').val();
                var a92nan3=$('#a92nan3').val();
                var a92can3=$('#a92can3').val();
                if (a92nf3=='triángulo' || a92nf3=='triangulo') {
                    cor++;
                    f_ok($('#a92nf3'));
                }else {
                    inc++;
                    f_no($('#a92nf3'));
                }
                if (a92nl3=='3') {
                    cor++;
                    f_ok($('#a92nl3'));
                }else {
                    inc++;
                    f_no($('#a92nl3'));
                }
                if (a92ls3=='') {
                    cor++;
                    f_ok($('#a92ls3'));
                }else {
                    inc++;
                    f_no($('#a92ls3'));
                }
                if (a92nan3=='3') {
                    cor++;
                    f_ok($('#a92nan3'));
                }else {
                    inc++;
                    f_no($('#a92nan3'));
                }
                if (a92can3=='ángulo agudo' || a92can3=='agudo' || a92can3=='agudos' || a92can3=='ángulos agudos') {
                    cor++;
                    f_ok($('#a92can3'));
                }else {
                    inc++;
                    f_no($('#a92can3'));
                }
            }
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            var a92mag1=$('#a92mag1').val();
            var a92mag2=$('#a92mag2').val();
            var a92mag3=$('#a92mag3').val();
            var a92mag4=$('#a92mag4').val();
            if (a92mag1=='metro(m)' || a92mag1=='metro (m)' || a92mag1=='metro' || a92mag1=='m') {
                cor++;
                f_ok($('#a92mag1'));
            }else {
                inc++;
                f_no($('#a92mag1'));
            }
            if (a92mag2=='litro (l)' || a92mag2=='litro(l)' || a92mag2=='litro' || a92mag2=='l') {
                cor++;
                f_ok($('#a92mag2'));
            }else {
                inc++;
                f_no($('#a92mag2'));
            }
            if (a92mag3=='gramo (g)' || a92mag3=='gramo(g)' || a92mag3=='gramo' || a92mag3=='g') {
                cor++;
                f_ok($('#a92mag3'));
            }else {
                inc++;
                f_no($('#a92mag3'));
            }
            if (a92mag4=='segundo (s)' || a92mag4=='segundo(s)' || a92mag4=='segundo' || a92mag4=='s') {
                cor++;
                f_ok($('#a92mag4'));
            }else {
                inc++;
                f_no($('#a92mag4'));
            }
            //////////////////////////////////////////////////////////////////////////////////////////////////
            var a92tc1 =$('#a92tc1').val();
                a92tc1=a92tc1.split('');
            var a92tc2 =$('#a92tc2').val();
                a92tc2=a92tc2.split('');
            var a92tc3 =$('#a92tc3').val();
                a92tc3=a92tc3.split('');
            var a92tf1 =$('#a92tf1').val();
            var a92tf2 =$('#a92tf2').val();
            var a92tf3 =$('#a92tf3').val();
            var a92tf4 =$('#a92tf4').val();
            if (a92tc1.length==a92num1) {
                cor++;
                f_ok($('#a92tc1'));
            }else {
                inc++;
                f_no($('#a92tc1'));
            }
            if (a92tc2.length==a92num2) {
                cor++;
                f_ok($('#a92tc2'));
            }else {
                inc++;
                f_no($('#a92tc2'));
            }
            if (a92tc3.length==a92num3) {
                cor++;
                f_ok($('#a92tc3'));
            }else {
                inc++;
                f_no($('#a92tc3'));
            }
            if (a92tf1==a92num1) {
                cor++;
                f_ok($('#a92tf1'));
            }else {
                inc++;
                f_no($('#a92tf1'));
            }
            if (a92tf2==a92num2) {
                cor++;
                f_ok($('#a92tf2'));
            }else {
                inc++;
                f_no($('#a92tf2'));
            }
            if (a92tf3==a92num3) {
                cor++;
                f_ok($('#a92tf3'));
            }else {
                inc++;
                f_no($('#a92tf3'));
            }
            if (a92tf4==(a92num3+a92num2+a92num1)) {
                cor++;
                f_ok($('#a92tf4'));
            }else {
                inc++;
                f_no($('#a92tf4'));
            }
            Calculo_nota()
            
        }
        
    }