    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=10,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function mayus1(e) {
        e.value = e.value.toUpperCase();
    }

    function f_iniciar(){
        ///////pregunta1////////////
        
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
        
        ////////////////pregunta2//////////////////////////
        var a39vimg1=['<img style="mix-blend-mode: multiply; min-width: 60px;" class="img-responsive" src="img/i3_p52_act39.jpg" alt="3">','<img style="mix-blend-mode: multiply; min-width: 60px;" class="img-responsive" src="img/i4_p52_act39.jpg" alt="4">']
        var myArray1 = ['0','1'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        var p=myArray1[1];
        $("#a39caim1").html(a39vimg1[p]);
        
        /////////////////pregunta3////////////////////////////////////////////////////
        var p3nm1= parseInt((Math.random() * 9) + 1);
        var p3nm2= parseInt((Math.random() * 9) + 1);
        
        var p3vimg1=[];
        var p3vimg2=[];
        var p3vres1=[p3nm1,(p3nm1+2),(p3nm1-1),(p3nm1+3)];
        var p3vres2=[p3nm2,(p3nm2-1),(p3nm2+3),(p3nm2+1)];
        var p3vres3=['3','7','5','6'];
        for (var i = 0; i < p3nm1; i++) {
            p3vimg1.push('<img  src="img/i7_p52_act39.jpg" alt="">');
        }
        for (var i = 0; i < p3nm2; i++) {
            p3vimg2.push('<img  src="img/i8_p52_act39.jpg" alt="">');
        }
        $("#a39cael1").html(p3vimg1);
        $("#a39cael2").html(p3vimg2);
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
            $("#a39rn"+i).html(p3vres1[c]);
            
            
        };
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
            $("#a39rn1"+i).html(p3vres2[c]);
            
            
        };
        var myArray4 = ['0','1','2','3'];
        var i,j,k;
        for (i = myArray4.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray4[i - 1];
            myArray4[i - 1] = myArray4[j];
            myArray4[j] = k;
        }
         //aleatorio literal 1
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray4[i-1];
            $("#a39rn2"+i).html(p3vres3[c]);
            
            
        };
        $('.enc11').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc12').removeClass('encierra1')
                $('.enc13').removeClass('encierra1')
                $('.enc14').removeClass('encierra1')
            }

        })
        $('.enc12').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc11').removeClass('encierra1')
                $('.enc13').removeClass('encierra1')
                $('.enc14').removeClass('encierra1')
            }

        })
        $('.enc13').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc12').removeClass('encierra1')
                $('.enc11').removeClass('encierra1')
                $('.enc14').removeClass('encierra1')
            }

        })
        $('.enc14').click(function(){

            if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')

            }else{
                $(this).addClass('encierra1')
                $('.enc12').removeClass('encierra1')
                $('.enc13').removeClass('encierra1')
                $('.enc11').removeClass('encierra1')
            }

        })
        $('.enc21').click(function(){

            if ($(this).hasClass('encierra2')) {
                $(this).removeClass('encierra2')

            }else{
                $(this).addClass('encierra2')
                $('.enc22').removeClass('encierra2')
                $('.enc23').removeClass('encierra2')
                $('.enc24').removeClass('encierra2')
            }

        })
        $('.enc22').click(function(){

            if ($(this).hasClass('encierra2')) {
                $(this).removeClass('encierra2')

            }else{
                $(this).addClass('encierra2')
                $('.enc21').removeClass('encierra2')
                $('.enc23').removeClass('encierra2')
                $('.enc24').removeClass('encierra2')
            }

        })
        $('.enc23').click(function(){

            if ($(this).hasClass('encierra2')) {
                $(this).removeClass('encierra2')

            }else{
                $(this).addClass('encierra2')
                $('.enc22').removeClass('encierra2')
                $('.enc21').removeClass('encierra2')
                $('.enc24').removeClass('encierra2')
            }

        })
        $('.enc24').click(function(){

            if ($(this).hasClass('encierra2')) {
                $(this).removeClass('encierra2')

            }else{
                $(this).addClass('encierra2')
                $('.enc22').removeClass('encierra2')
                $('.enc23').removeClass('encierra2')
                $('.enc21').removeClass('encierra2')
            }

        })
        $('.enc31').click(function(){

            if ($(this).hasClass('encierra3')) {
                $(this).removeClass('encierra3')

            }else{
                $(this).addClass('encierra3')
                $('.enc32').removeClass('encierra3')
                $('.enc33').removeClass('encierra3')
                $('.enc34').removeClass('encierra3')
            }

        })
        $('.enc32').click(function(){

            if ($(this).hasClass('encierra3')) {
                $(this).removeClass('encierra3')

            }else{
                $(this).addClass('encierra3')
                $('.enc31').removeClass('encierra3')
                $('.enc33').removeClass('encierra3')
                $('.enc34').removeClass('encierra3')
            }

        })
        $('.enc33').click(function(){

            if ($(this).hasClass('encierra3')) {
                $(this).removeClass('encierra3')

            }else{
                $(this).addClass('encierra3')
                $('.enc32').removeClass('encierra3')
                $('.enc31').removeClass('encierra3')
                $('.enc34').removeClass('encierra3')
            }

        })
        $('.enc34').click(function(){

            if ($(this).hasClass('encierra3')) {
                $(this).removeClass('encierra3')

            }else{
                $(this).addClass('encierra3')
                $('.enc32').removeClass('encierra3')
                $('.enc33').removeClass('encierra3')
                $('.enc31').removeClass('encierra3')
            }

        })
        /////////////////pregunta4//////////////////////////////////////////////////////////////////////
        var p4vrecta1=['<td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;" value="0" disabled="true"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect1" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91; "></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect2" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91; "></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect3" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;" value="4" disabled="true"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect4" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black;display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect5" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect6" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect7" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect8" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td>'];
        var p4vrecta2=['<td><input id="a94rsrect1" onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect2" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91; "></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" value="2" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;" disabled="true"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect3" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;" id="a94rsrect4"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect5" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black;display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect6" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect7" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect8" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" value="9" disabled="true" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td>'];
        var p4vrecta3=['<td><input id="a94rsrect1" onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;" ></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" value="1" disabled="true maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91; "></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect2" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91; "></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect3" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;" id="a94rsrect4"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect5" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black;display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1" value="6" disabled="true" style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect6" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect7" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect8" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td>'];
        var p4vrecta4=['<td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;" value="0" disabled="true"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" value="1" disabled="true" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91; "></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect1" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91; "></td>                                                    <td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td>                                                    <td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect2" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td>                                                    <td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td>                                                    <td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;" id="a94rsrect3"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect4" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black;display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect5" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect6" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect7" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td><td><input onkeypress="return soloNumeros1(event)" type="text" id="a94rsrect8" maxlength="1"  style=" text-align:center; width:  20px; border: 1px dashed #812A91;"></td><td><input onkeypress="return soloNumeros1(event)" type="text"  maxlength="1"  style=" text-align:center; width:  20px; border:none; border-bottom: 1px dashed black; display: none;"></td>'];
        var myArray5 = ['0','1','2','3'];
        var i,j,k;
        for (i = myArray5.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray5[i - 1];
            myArray5[i - 1] = myArray5[j];
            myArray5[j] = k;
        }
        var f=myArray5[1];
        if (f=='0') {
            $("#a39numeros1").html(p4vrecta1[0]);    
        }else if (f=='1') {
            $("#a39numeros1").html(p4vrecta2[0]);    
        }else if (f=='2') {
            $("#a39numeros1").html(p4vrecta3[0]);    
        }else if (f=='3') {
            $("#a39numeros1").html(p4vrecta4[0]);    
        }
        
        /////////////////////pregunta5/////////////////////////////////////////////////////////////////////////////////////
        var p5nm1= [1,2,3,4,5,6,7,8];
        var p5ord1=[]
        var myArray6 = ['0','1','2','3','4','5','6','7'];
        var i,j,k;
        for (i = myArray6.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray6[i - 1];
            myArray6[i - 1] = myArray6[j];
            myArray6[j] = k;
        }
         //aleatorio literal 1
        for (var i = 1; i <= 8 ; i++) {
            var c=myArray6[i-1];
            $("#a39cnm"+i).html(p5nm1[c]);
            p5ord1.push(p5nm1[c]);
            
        };
        ////////////////////////////pregunta6//////////////////////////////////////////////////////
        var p6nm1= [parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 1)];
        var p6nm2= [parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 1)];
        var p6nm3= [parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 1)];
        var p6nm4= [parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 1)];
        var p6nm5= [parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 1)];
        var p6nm6= [parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 1)];
        var p6nm7= [parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 1)];
        var p6nm8= [parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 1)];
        var p6nm9= [parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 1)];
        var p6resp1=[];
        if (p6nm1[0]>p6nm1[1]) {
            p6resp1.push('>');
        }else if (p6nm1[0]<p6nm1[1]) {
            p6resp1.push('<');
        }else if (p6nm1[0]==p6nm1[1]) {
            p6resp1.push('=');
        }
        if (p6nm2[0]>p6nm2[1]) {
            p6resp1.push('>');
        }else if (p6nm2[0]<p6nm2[1]) {
            p6resp1.push('<');
        }else if (p6nm2[0]==p6nm2[1]) {
            p6resp1.push('=');
        }
        if (p6nm3[0]>p6nm3[1]) {
            p6resp1.push('>');
        }else if (p6nm3[0]<p6nm3[1]) {
            p6resp1.push('<');
        }else if (p6nm3[0]==p6nm3[1]) {
            p6resp1.push('=');
        }
        if (p6nm4[0]>p6nm4[1]) {
            p6resp1.push('>');
        }else if (p6nm4[0]<p6nm4[1]) {
            p6resp1.push('<');
        }else if (p6nm4[0]==p6nm4[1]) {
            p6resp1.push('=');
        }
        if (p6nm5[0]>p6nm5[1]) {
            p6resp1.push('>');
        }else if (p6nm5[0]<p6nm5[1]) {
            p6resp1.push('<');
        }else if (p6nm5[0]==p6nm5[1]) {
            p6resp1.push('=');
        }
        if (p6nm6[0]>p6nm6[1]) {
            p6resp1.push('>');
        }else if (p6nm6[0]<p6nm6[1]) {
            p6resp1.push('<');
        }else if (p6nm6[0]==p6nm6[1]) {
            p6resp1.push('=');
        }
        if (p6nm7[0]>p6nm7[1]) {
            p6resp1.push('>');
        }else if (p6nm7[0]<p6nm7[1]) {
            p6resp1.push('<');
        }else if (p6nm7[0]==p6nm7[1]) {
            p6resp1.push('=');
        }
        if (p6nm8[0]>p6nm8[1]) {
            p6resp1.push('>');
        }else if (p6nm8[0]<p6nm8[1]) {
            p6resp1.push('<');
        }else if (p6nm8[0]==p6nm8[1]) {
            p6resp1.push('=');
        }
        if (p6nm9[0]>p6nm9[1]) {
            p6resp1.push('>');
        }else if (p6nm9[0]<p6nm9[1]) {
            p6resp1.push('<');
        }else if (p6nm9[0]==p6nm9[1]) {
            p6resp1.push('=');
        }
        for (var i = 0; i < p6nm1.length; i++) {
            $('#a39cig'+(i+1)).html('<div style=" text-align:center; width: 35px; border-radius: 5px; border: 3px solid #A579B5;">'+p6nm1[i]+'</div>')
        }
        for (var i = 0; i < p6nm2.length; i++) {
            $('#a39cig1'+(i+1)).html('<div style=" text-align:center; width: 35px; border-radius: 5px; border: 3px solid #A579B5;">'+p6nm2[i]+'</div>')
        }
        for (var i = 0; i < p6nm3.length; i++) {
            $('#a39cig2'+(i+1)).html('<div style=" text-align:center; width: 35px; border-radius: 5px; border: 3px solid #A579B5;">'+p6nm3[i]+'</div>')
        }
        for (var i = 0; i < p6nm4.length; i++) {
            $('#a39cig3'+(i+1)).html('<div style=" text-align:center; width: 35px; border-radius: 5px; border: 3px solid #A579B5;">'+p6nm4[i]+'</div>')
        }
        for (var i = 0; i < p6nm5.length; i++) {
            $('#a39cig4'+(i+1)).html('<div style=" text-align:center; width: 35px; border-radius: 5px; border: 3px solid #A579B5;">'+p6nm5[i]+'</div>')
        }
        for (var i = 0; i < p6nm6.length; i++) {
            $('#a39cig5'+(i+1)).html('<div style=" text-align:center; width: 35px; border-radius: 5px; border: 3px solid #A579B5;">'+p6nm6[i]+'</div>')
        }
        for (var i = 0; i < p6nm7.length; i++) {
            $('#a39cig6'+(i+1)).html('<div style=" text-align:center; width: 35px; border-radius: 5px; border: 3px solid #A579B5;">'+p6nm7[i]+'</div>')
        }
        for (var i = 0; i < p6nm8.length; i++) {
            $('#a39cig7'+(i+1)).html('<div style=" text-align:center; width: 35px; border-radius: 5px; border: 3px solid #A579B5;">'+p6nm8[i]+'</div>')
        }
        for (var i = 0; i < p6nm9.length; i++) {
            $('#a39cig8'+(i+1)).html('<div style=" text-align:center; width: 35px; border-radius: 5px; border: 3px solid #A579B5;">'+p6nm9[i]+'</div>')
        }
        //////////////////////pregunta7//////////////////////////////////////////////////////////
        $('.enc41').click(function(){

            if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')

            }else{
                $(this).addClass('encierra4')
                
            }

        })
        $('.enc42').click(function(){

            if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')

            }else{
                $(this).addClass('encierra4')
                
            }

        })
        $('.enc43').click(function(){

            if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')

            }else{
                $(this).addClass('encierra4')
                
            }

        })
        $('.enc44').click(function(){

            if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')

            }else{
                $(this).addClass('encierra4')
                
            }

        })
        $('.enc45').click(function(){

            if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')

            }else{
                $(this).addClass('encierra4')
                
            }

        })
        $('.enc46').click(function(){

            if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')

            }else{
                $(this).addClass('encierra4')
                
            }

        })
        $('.enc47').click(function(){

            if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')

            }else{
                $(this).addClass('encierra4')
                
            }

        })
        $('.enc48').click(function(){

            if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')

            }else{
                $(this).addClass('encierra4')
                
            }

        })
        $('.enc49').click(function(){

            if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')

            }else{
                $(this).addClass('encierra4')
                
            }

        })
        $('.enc410').click(function(){

            if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')

            }else{
                $(this).addClass('encierra4')
                
            }

        })
        /////////////////////////////////pregunta9////////////////////////////////////////////////////
        
        
            bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            var p8cal1=$('#p8cal1').val();
            if (!p8cal1) {
                p8cal1=0;
            }else {
                p8cal1;
            }
            if (parseInt(p8cal1)>=0 && parseInt(p8cal1)<=1) {
            cont++;
            ///////////////////pregunta1/////////////////////////////////
            var a39dcon1= $('#a39dcon1').val();
            var a39dcon2= $('#a39dcon2').val();
            var a39cc1=0;
            if (!a39dcon1) {
                a39cc1;
                f_no($('#a39dcon1'));
            }else {
                a39cc1++;
                f_ok($('#a39dcon1'));
            }
            if ($('#a39enc1').hasClass('encierra')) {

                a39cc1++;
                f_ok($('#a39enc1'));
                    
            }else {
                a39cc1;
                f_no($('#a39enc1'));
            }
            if (!a39dcon2) {
                a39cc1;
                f_no($('#a39dcon2'));
            }else {
                a39cc1++;
                f_ok($('#a39dcon2'));
            }
            if ($('#a39enc2').hasClass('encierra')) {

                a39cc1++;
                f_ok($('#a39enc2'));
                    
            }else {
                a39cc1;
                f_no($('#a39enc2'));
            }
            a94resu1=(a39cc1*1)/4;
            cor=cor+parseFloat(a94resu1);
            inc=inc-(1-parseFloat(a94resu1));
            ////////////////////pregunta2////////////////////////////
            var imag1 =$('#imag1 > img').attr('alt');
            var imag2 =$('#imag2 > img').attr('alt');
            var imag3 =$('#imag3 > img').attr('alt');
            var imag4 =$('#imag4 > img').attr('alt');
            var imag5 =$('#imag5 > img').attr('alt');
            var a39cc2=0;
            if (p=='0') {
                if (imag1=='1') {
                    a39cc2++;
                    f_ok($('#imag1'));
                }else {
                    a39cc2;
                    f_no($('#imag1'));
                }
                if (imag2=='2') {
                    a39cc2++;
                    f_ok($('#imag2'));
                }else {
                    a39cc2;
                    f_no($('#imag2'));
                }
                if (imag3=='1') {
                    a39cc2++;
                    f_ok($('#imag3'));
                }else {
                    a39cc2;
                    f_no($('#imag3'));
                }
                if (imag4=='2') {
                    a39cc2++;
                    f_ok($('#imag4'));
                }else {
                    a39cc2;
                    f_no($('#imag4'));
                }
                if (imag5=='1') {
                    a39cc2++;
                    f_ok($('#imag5'));
                }else {
                    a39cc2;
                    f_no($('#imag5'));
                }
            }else {
                if (imag1=='2') {
                    a39cc2++;
                    f_ok($('#imag1'));
                }else {
                    a39cc2;
                    f_no($('#imag1'));
                }
                if (imag2=='1') {
                    a39cc2++;
                    f_ok($('#imag2'));
                }else {
                    a39cc2;
                    f_no($('#imag2'));
                }
                if (imag3=='2') {
                    a39cc2++;
                    f_ok($('#imag3'));
                }else {
                    a39cc2;
                    f_no($('#imag3'));
                }
                if (imag4=='1') {
                    a39cc2++;
                    f_ok($('#imag4'));
                }else {
                    a39cc2;
                    f_no($('#imag4'));
                }
                if (imag5=='2') {
                    a39cc2++;
                    f_ok($('#imag5'));
                }else {
                    a39cc2;
                    f_no($('#imag5'));
                }
            }
            a94resu2=(a39cc2*1)/5;
            cor=cor+parseFloat(a94resu2);
            inc=inc-(1-parseFloat(a94resu2));

            //////////////////pregunta3/////////////////////////////////////////////
            var a39enc11=$('.encierra1 > span').html();
            var a39enc12=$('.encierra2 > span').html();
            var a39enc13=$('.encierra3 > span').html();
            var a39cc3=0;
            if (!a39enc11) {
                a39cc3;
                f_no($('.enc11'));
                f_no($('.enc12'));
                f_no($('.enc13'));
                f_no($('.enc14'));    
            }else {

                if (a39enc11==p3nm1) {
                    a39cc3++;
                    f_ok($('.encierra1'));
                }else {
                    a39cc3;
                    f_no($('.encierra1'));
                }
            }
            if (!a39enc12) {
                a39cc3;
                f_no($('.enc21'));
                f_no($('.enc22'));
                f_no($('.enc23'));
                f_no($('.enc24'));    
            }else {

                if (a39enc12==p3nm2) {
                    a39cc3++;
                    f_ok($('.encierra2'));
                }else {
                    a39cc3;
                    f_no($('.encierra2'));
                }
            }
            if (!a39enc13) {
                a39cc3;
                f_no($('.enc31'));
                f_no($('.enc32'));
                f_no($('.enc33'));
                f_no($('.enc34'));    
            }else {

                if (a39enc13=='6') {
                    a39cc3++;
                    f_ok($('.encierra3'));
                }else {
                    a39cc3;
                    f_no($('.encierra3'));
                }
            }
            a94resu3=(a39cc3*1)/3;
            cor=cor+parseFloat(a94resu3);
            inc=inc-(1-parseFloat(a94resu3));

            ///////////////////pregunta4////////////////////////////////////////////////////
            var a94rsrect1=[$('#a94rsrect1').val(),$('#a94rsrect2').val(),$('#a94rsrect3').val(),$('#a94rsrect4').val(),$('#a94rsrect5').val(),$('#a94rsrect6').val(),$('#a94rsrect7').val(),$('#a94rsrect8').val()];
            var p4vresul1=[1,2,3,5,6,7,8,9];
            var p4vresul2=[0,1,3,4,5,6,7,8];
            var p4vresul3=[0,2,3,4,5,7,8,9];
            var p4vresul4=[2,3,4,5,6,7,8,9];
            var a39cc4=0;
            if (f=='0') {
                for (var i = 0; i < p4vresul1.length; i++) {
                    if (a94rsrect1[i]==p4vresul1[i]) {
                        a39cc4++;
                        f_ok($('#a94rsrect'+(i+1)));
                    }else {
                        a39cc4;
                        f_no($('#a94rsrect'+(i+1)));
                    }    
                }
                
            }else if (f=='1') {
                for (var i = 0; i < p4vresul2.length; i++) {
                    if (parseInt(a94rsrect1[i]) ==p4vresul2[i]) {
                        a39cc4++;
                        f_ok($('#a94rsrect'+(i+1)));
                    }else {
                        a39cc4;
                        f_no($('#a94rsrect'+(i+1)));
                    }    
                }
            }else if (f=='2') {
                for (var i = 0; i < p4vresul3.length; i++) {
                    if (parseInt(a94rsrect1[i])==p4vresul3[i]) {
                        a39cc4++;
                        f_ok($('#a94rsrect'+(i+1)));
                    }else {
                        a39cc4;
                        f_no($('#a94rsrect'+(i+1)));
                    }    
                }
            }else if (f=='3') {
                for (var i = 0; i < p4vresul4.length; i++) {
                    if (a94rsrect1[i]==p4vresul4[i]) {
                        a39cc4++;
                        f_ok($('#a94rsrect'+(i+1)));
                    }else {
                        a39cc4;
                        f_no($('#a94rsrect'+(i+1)));
                    }    
                }
            }
            a94resu4=(a39cc4*1)/8;
            cor=cor+parseFloat(a94resu4);
            inc=inc-(1-parseFloat(a94resu4));
            ////////////////////////////pregunta5//////////////////////////////////////////////////////////////
            var a39rtab1=$('#a39rtab1').val();
            var a39rtab2=$('#a39rtab2').val();
            var a39rtab3=$('#a39rtab3').val();
            var a39rtab4=$('#a39rtab4').val();
            var a39rtab5=$('#a39rtab5').val();
            var a39rtab6=$('#a39rtab6').val();
            var a39rtab7=$('#a39rtab7').val();
            var a39rtab8=$('#a39rtab8').val();
            var a39rtab11=$('#a39rtab11').val();
            var a39rtab12=$('#a39rtab12').val();
            var a39rtab13=$('#a39rtab13').val();
            var a39rtab14=$('#a39rtab14').val();
            var a39rtab15=$('#a39rtab15').val();
            var a39rtab16=$('#a39rtab16').val();
            var a39rtab17=$('#a39rtab17').val();
            var a39rtab18=$('#a39rtab18').val();
            var a39cc5=0;
            if (parseInt(a39rtab1)==(p5ord1[0]-1)) {
                a39cc5++;
                f_ok($('#a39rtab1'));
            }else {
                a39cc5;
                f_no($('#a39rtab1'));
            }
            if (parseInt(a39rtab2)==(p5ord1[0]+1)) {
                a39cc5++;
                f_ok($('#a39rtab2'));
            }else {
                a39cc5;
                f_no($('#a39rtab2'));
            }
            if (parseInt(a39rtab3)==(p5ord1[1]-1)) {
                a39cc5++;
                f_ok($('#a39rtab3'));
            }else {
                a39cc5;
                f_no($('#a39rtab3'));
            }
            if (parseInt(a39rtab4)==(p5ord1[1]+1)) {
                a39cc5++;
                f_ok($('#a39rtab4'));
            }else {
                a39cc5;
                f_no($('#a39rtab4'));
            }
            if (parseInt(a39rtab5)==(p5ord1[2]-1)) {
                a39cc5++;
                f_ok($('#a39rtab5'));
            }else {
                a39cc5;
                f_no($('#a39rtab5'));
            }
            if (parseInt(a39rtab6)==(p5ord1[2]+1)) {
                a39cc5++;
                f_ok($('#a39rtab6'));
            }else {
                a39cc5;
                f_no($('#a39rtab6'));
            }
            if (parseInt(a39rtab7)==(p5ord1[3]-1)) {
                a39cc5++;
                f_ok($('#a39rtab7'));
            }else {
                a39cc5;
                f_no($('#a39rtab7'));
            }
            if (parseInt(a39rtab8)==(p5ord1[3]+1)) {
                a39cc5++;
                f_ok($('#a39rtab8'));
            }else {
                a39cc5;
                f_no($('#a39rtab8'));
            }
            if (parseInt(a39rtab11)==(p5ord1[4]-1)) {
                a39cc5++;
                f_ok($('#a39rtab11'));
            }else {
                a39cc5;
                f_no($('#a39rtab11'));
            }
            if (parseInt(a39rtab12)==(p5ord1[4]+1)) {
                a39cc5++;
                f_ok($('#a39rtab12'));
            }else {
                a39cc5;
                f_no($('#a39rtab12'));
            }
            if (parseInt(a39rtab13)==(p5ord1[5]-1)) {
                a39cc5++;
                f_ok($('#a39rtab13'));
            }else {
                a39cc5;
                f_no($('#a39rtab13'));
            }
            if (parseInt(a39rtab14)==(p5ord1[5]+1)) {
                a39cc5++;
                f_ok($('#a39rtab14'));
            }else {
                a39cc5;
                f_no($('#a39rtab14'));
            }
            if (parseInt(a39rtab15)==(p5ord1[6]-1)) {
                a39cc5++;
                f_ok($('#a39rtab15'));
            }else {
                a39cc5;
                f_no($('#a39rtab15'));
            }
            if (parseInt(a39rtab16)==(p5ord1[6]+1)) {
                a39cc5++;
                f_ok($('#a39rtab16'));
            }else {
                a39cc5;
                f_no($('#a39rtab16'));
            }
            if (parseInt(a39rtab17)==(p5ord1[7]-1)) {
                a39cc5++;
                f_ok($('#a39rtab17'));
            }else {
                a39cc5;
                f_no($('#a39rtab17'));
            }
            if (parseInt(a39rtab18)==(p5ord1[7]+1)) {
                a39cc5++;
                f_ok($('#a39rtab18'));
            }else {
                a39cc5;
                f_no($('#a39rtab18'));
            }
            a94resu5=(a39cc5*2)/16;
            cor=cor+parseFloat(a94resu5);
            inc=inc-(2-parseFloat(a94resu5));
            //////////////////////////pregunta6/////////////////////////////////////////////////////
            var a39rcomp1=$('#a39rcomp1').val();
            var a39rcomp2=$('#a39rcomp2').val();
            var a39rcomp3=$('#a39rcomp3').val();
            var a39rcomp4=$('#a39rcomp4').val();
            var a39rcomp5=$('#a39rcomp5').val();
            var a39rcomp6=$('#a39rcomp6').val();
            var a39rcomp7=$('#a39rcomp7').val();
            var a39rcomp8=$('#a39rcomp8').val();
            var a39rcomp9=$('#a39rcomp9').val();
            var a39cc6=0;
            if (a39rcomp1==p6resp1[0]) {
                a39cc6++;
                f_ok($('#a39rcomp1'));
            }else {
                a39cc6;
                f_no($('#a39rcomp1'));
            }
            if (a39rcomp2==p6resp1[1]) {
                a39cc6++;
                f_ok($('#a39rcomp2'));
            }else {
                a39cc6;
                f_no($('#a39rcomp2'));
            }
            if (a39rcomp3==p6resp1[2]) {
                a39cc6++;
                f_ok($('#a39rcomp3'));
            }else {
                a39cc6;
                f_no($('#a39rcomp3'));
            }
            if (a39rcomp4==p6resp1[3]) {
                a39cc6++;
                f_ok($('#a39rcomp4'));
            }else {
                a39cc6;
                f_no($('#a39rcomp4'));
            }
            if (a39rcomp5==p6resp1[4]) {
                a39cc6++;
                f_ok($('#a39rcomp5'));
            }else {
                a39cc6;
                f_no($('#a39rcomp5'));
            }
            if (a39rcomp6==p6resp1[5]) {
                a39cc6++;
                f_ok($('#a39rcomp6'));
            }else {
                a39cc6;
                f_no($('#a39rcomp6'));
            }
            if (a39rcomp7==p6resp1[6]) {
                a39cc6++;
                f_ok($('#a39rcomp7'));
            }else {
                a39cc6;
                f_no($('#a39rcomp7'));
            }
            if (a39rcomp8==p6resp1[7]) {
                a39cc6++;
                f_ok($('#a39rcomp8'));
            }else {
                a39cc6;
                f_no($('#a39rcomp8'));
            }
            if (a39rcomp9==p6resp1[8]) {
                a39cc6++;
                f_ok($('#a39rcomp9'));
            }else {
                a39cc6;
                f_no($('#a39rcomp9'));
            }
            a94resu6=(a39cc6*2)/9;
            cor=cor+parseFloat(a94resu6);
            inc=inc-(2-parseFloat(a94resu6));
            ///////////////////////////pregunta7///////////////////////////////////////////////////////////////
            
            var a39enc41=[];
            var p7renc1=[2,4,5,6,9,10];
            var a39cc7=0;
            
            if ($('#a39enc42').hasClass('encierra4')) {
                a39cc7++;
                f_ok($('#a39enc42'));
            }else {
                a39cc7;
                f_no($('#a39enc42'));
            }
            
            if ($('#a39enc44').hasClass('encierra4')) {
                a39cc7++;
                f_ok($('#a39enc44'));
            }else {
                a39cc7;
                f_no($('#a39enc44'));
            }
            if ($('#a39enc45').hasClass('encierra4')) {
                a39cc7++;
                f_ok($('#a39enc45'));
            }else {
                a39cc7;
                f_no($('#a39enc45'));
            }
            if ($('#a39enc46').hasClass('encierra4')) {
                a39cc7++;
                f_ok($('#a39enc46'));
            }else {
                a39cc7;
                f_no($('#a39enc46'));
            }
            
            if ($('#a39enc49').hasClass('encierra4')) {
                a39cc7++;
                f_ok($('#a39enc49'));
            }else {
                a39cc7;
                f_no($('#a39enc49'));
            }
            if ($('#a39enc410').hasClass('encierra4')) {
                a39cc7++;
                f_ok($('#a39enc410'));
            }else {
                a39cc7;
                f_no($('#a39enc410'));
            }
            var p7cc1=0;
            if ($('#a39enc41').hasClass('encierra4')) {
                a39cc7;
                p7cc1=p7cc1+((1*1)/6);
                f_no($('#a39enc41'));
            }
            if ($('#a39enc43').hasClass('encierra4')) {
                a39cc7;
                p7cc1=p7cc1+((1*1)/6);
                f_no($('#a39enc43'));
            }
            if ($('#a39enc47').hasClass('encierra4')) {
                a39cc7;
                p7cc1=p7cc1+((1*1)/6);
                f_no($('#a39enc47'));
            }
            if ($('#a39enc48').hasClass('encierra4')) {
                a39cc7;
                p7cc1=p7cc1+((1*1)/6);
                f_no($('#a39enc48'));
            }
            

            a94resu7=(a39cc7*1)/6;
            if (p7cc1>a94resu7) {
                a94resu7=0;
            }else {

                a94resu7=a94resu7-p7cc1;
            }
            cor=cor+parseFloat(a94resu7);
            inc=inc-(1-parseFloat(a94resu7));
            
            //////////////////////pregunta8/////////////////////////////////////////////////////////////////
            var a39cc8=$('#p8cal1').val();
            if (!a39cc8) {
                a39cc8=0;
                f_no($('#p8cal1'));
            }else {
                a39cc8;
                f_ok($('#p8cal1'));
            }
            
            a94resu8=(parseFloat(a39cc8)*1)/1;
            cor=cor+parseFloat(a94resu8);
            inc=inc-(1-parseFloat(a94resu8));
            //////////////////////////pregunta9//////////////////////////////////////////////////////////////////
            
            Calculo_nota()
        }else {
            alert('La calificación ingresada excede el límite. Ingrese entre 0 y 1');
            $('#p8cal1').val('');
            f_no($('#p8cal1'));
        }    
        }   
        
        
        
    }