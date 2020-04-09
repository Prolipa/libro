    var i,j,nums=[],r_images=[],t_images=[],v_ids=[],r_ids=[],cont=0,ejer=1,cor=0,inc=0,itemsT=10;calificacion=10;
    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    f_iniciar();
    $('.enc1').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc2').removeClass('encierra')
            $('.enc3').removeClass('encierra')
        }

    })
    $('.enc2').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc1').removeClass('encierra')
            $('.enc3').removeClass('encierra')
        }

    })
    $('.enc3').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc2').removeClass('encierra')
            $('.enc1').removeClass('encierra')
        }

    })
    
    function f_iniciar(){
        var imagen=['<img id="il1" class="img-responsive" src="img/i13_p48_act53.png" alt=""><input id="p3nu1" class="form-control" type="number" style="-moz-border-radius: 10px; -webkit-border-radius: 10px;  border-radius: 10px; border: 1px solid #FAAE4C;  padding: 0 4px 0 4px;">','<img id="il2" class="img-responsive" src="img/i14_p48_act53.png" alt=""><input id="p3nu2" class="form-control" type="number" style="-moz-border-radius: 10px; -webkit-border-radius: 10px;  border-radius: 10px; border: 1px solid #F043F0;  padding: 0 4px 0 4px;">','<img id="il3" class="img-responsive" src="img/i15_p48_act53.png" alt=""><input class="form-control" type="number" id="p3nu3" style="-moz-border-radius: 10px; -webkit-border-radius: 10px;  border-radius: 10px; border: 1px solid #52AD30;  padding: 0 4px 0 4px;">','<img id="il4" class="img-responsive" src="img/i16_p48_act53.png" alt=""><input class="form-control" type="number" id="p3nu4" style="-moz-border-radius: 10px; -webkit-border-radius: 10px;  border-radius: 10px; border: 1px solid #F043F0;  padding: 0 4px 0 4px;">'];
        var numer1 = ['3 UM + 7 C + 9 D + 1 U','2 000 + 400 + 70 + 3','6 UM + 9 C + 5 D + 8 U'];
        var numer2 = ['3 UM + 7 C + 8 D + 1 U','2 000 + 500 + 70 + 3','6 000 + 900 + 50 + 8'];
        var descen=['1 001 < 2 999 < 3 601 < 4 133 < 5 275 < 6 812 < 7 399 < 8 506','8 506 > 7 399 > 6 812 > 5 275 > 4 133 > 3 601 > 2 999 > 1 001','8 506 > 7 399 > 6 812 > 5 275 < 1 001 < 2 999 < 3 601 < 4 133'];
        var pregs = [
           '<img src="img/i20_p48_act53.png" class="img-responsive" alt=""><input id="obj1" onkeyup="mayus(this);" type="text" class="respuestas text-center"><input type="hidden" class="solucion" value="cubo">',
           '<img src="img/i21_p48_act53.png" class="img-responsive" alt=""><input id="obj2" onkeyup="mayus(this);" type="text" class="respuestas text-center"><input type="hidden" class="solucion" value="esfera">',
           '<img src="img/i22_p48_act53.png" class="img-responsive" alt=""><input id="obj3" onkeyup="mayus(this);" type="text" class="respuestas text-center"><input type="hidden" class="solucion" value="cilindro">',
           '<img src="img/i23_p48_act53.png" class="img-responsive" alt=""><input id="obj4" onkeyup="mayus(this);" type="text" class="respuestas text-center"><input type="hidden" class="solucion" value="pirámide">',
           '<img src="img/i24_p48_act53.png" class="img-responsive" alt=""><input id="obj5" onkeyup="mayus(this);" type="text" class="respuestas text-center"><input type="hidden" class="solucion" value="prisma">',
           '<img src="img/i25_p48_act53.png" class="img-responsive" alt=""><input id="obj6" onkeyup="mayus(this);" type="text" class="respuestas text-center"><input type="hidden" class="solucion" value="cono">'

        ];
        var myArray1 = ['0','1','2','3'];
        var myArray2 = ['0','1','2'];
        var myArray3 = ['0','1','2','3','4','5'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        var i,j,k;
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray1[i-1];
            $("#im"+i).html(imagen[c]);
            
        };
        //aleatorio literal 2
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray2[i-1];
            $("#un"+i).html(numer1[c]);
            $("#un1"+i).html(numer2[c]);
            
        };
        //aleatorio literal 3
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray2[i-1];
            $("#desc"+i).html(descen[c]);
            
            
        };
        //aleatorio literal 4
        for (var i = 1; i <= 6 ; i++) {
            var c=myArray3[i-1];
            $("#fig"+i).html(pregs[c]);
            
            
        };
        var numero = parseInt((Math.random() * 8000) + 1000);
        var numero2 = parseInt((Math.random() * 10) + 1);
        var numero3 = parseInt((Math.random() * 10) + 1);
        var numero4 = parseInt((Math.random() * 10) + 1);
        var numero5 = parseInt((Math.random() * 10) + 1);
        $('#numr1').html(numero);
        var numero1 = parseInt((Math.random() * 8000) + 1000);
        $('#numr2').html(numero1);
        var v_img=[];
        for (var i =1; i <= numero2; i++) {
           v_img.push("<img src='img/i26_p48_act53.png' class='c_imagenes'>");
        }
        for (var i =1; i <= numero3; i++) {
           v_img.push("<img src='img/i27_p48_act53.png' class='c_imagenes'>");
        }
        for (var i =1; i <= numero4; i++) {
           v_img.push("<img src='img/i28_p48_act53.png' class='c_imagenes'>");
        }
        for (var i =1; i <= numero5; i++) {
           v_img.push("<img src='img/i29_p48_act53.png' class='c_imagenes'>");
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
            
            bt_comprobar.removeEventListener("click", f_comprobar);
            var temp = $("#caja_res");
            cont++;
            var imag1=$('#imag1').html();
            var imag2=$('#imag2').html();
            var imag3=$('#imag3').html();
            var imag4=$('#imag4').html();
            var imag5=$('#imag5').html();
            var imag6=$('#imag6').html();
            var imag7=$('#imag7').html();
            var imag8=$('#imag8').html();
            var cor=0;
            if (imag1 =='<img src="img/i8_p48_act53.png" alt="" class="drag dos img-responsive ui-draggable ui-draggable-handle ui-draggable-dragging" style="">') {
                cor++;
                f_ok($('#imag1'));   
            }else {
                inc++;
                f_no($('#imag1'));
            }
            if (imag2 =='<img src="img/i9_p48_act53.png" alt="" class="drag tres img-responsive ui-draggable ui-draggable-handle ui-draggable-dragging" style="">') {
                cor++;
                f_ok($('#imag2'));   
            }else {
                inc++;
                f_no($('#imag2'));
            }
            if (imag3 =='<img src="img/i10_p48_act53.png" alt="" class="drag cuatro img-responsive ui-draggable ui-draggable-handle ui-draggable-dragging" style="">') {
                cor++;
                f_ok($('#imag3'));   
            }else {
                inc++;
                f_no($('#imag3'));
            }
            if (imag4 =='<img src="img/i11_p48_act53.png" alt="" class="drag cinco img-responsive ui-draggable ui-draggable-handle ui-draggable-dragging" style="">') {
                cor++;
                f_ok($('#imag4'));   
            }else {
                inc++;
                f_no($('#imag4'));
            }
            if (imag5 =='<img src="img/i2_p48_act53.png" alt="" class="drag tres img-responsive ui-draggable ui-draggable-handle ui-draggable-dragging" style="">') {
                cor++;
                f_ok($('#imag5'));   
            }else {
                inc++;
                f_no($('#imag5'));
            }
            if (imag6 =='<img src="img/i3_p48_act53.png" alt="" class="drag uno img-responsive ui-draggable ui-draggable-handle ui-draggable-dragging" style="">') {
                cor++;
                f_ok($('#imag6'));   
            }else {
                inc++;
                f_no($('#imag6'));
            }
            if (imag7 =='<img src="img/i4_p48_act53.png" alt="" class="drag dos img-responsive ui-draggable ui-draggable-handle ui-draggable-dragging" style="">') {
                cor++;
                f_ok($('#imag7'));   
            }else {
                inc++;
                f_no($('#imag7'));
            }
            if (imag8 =='<img src="img/i5_p48_act53.png" alt="" class="drag cuatro img-responsive ui-draggable ui-draggable-handle ui-draggable-dragging" style="">') {
                cor++;
                f_ok($('#imag8'));   
            }else {
                inc++;
                f_no($('#imag8'));
            }
            var p1=((cor *1)/8);
            var numr1=$('#numr1').html();
            var numr2=$('#numr2').html();
            var cor=0;
            var inc=0;
            if ((parseInt(numr1)+100)==$('#p2nu1').val()) {
                cor++;
                f_ok($('#p2nu1'));
            }else {
                inc++;
                f_no($('#p2nu1'));
            }
            if ((parseInt(numr1)+200)==$('#p2nu2').val()) {
                cor++;
                f_ok($('#p2nu2'));
            }else {
                inc++;
                f_no($('#p2nu2'));
            }
            if ((parseInt(numr1)+300)==$('#p2nu3').val()) {
                cor++;
                f_ok($('#p2nu3'));
            }else {
                inc++;
                f_no($('#p2nu3'));
            }
            if ((parseInt(numr1)+400)==$('#p2nu4').val()) {
                cor++;
                f_ok($('#p2nu4'));
            }else {
                inc++;
                f_no($('#p2nu4'));
            }
            if ((parseInt(numr1)+500)==$('#p2nu5').val()) {
                cor++;
                f_ok($('#p2nu5'));
            }else {
                inc++;
                f_no($('#p2nu5'));
            }
            if ((parseInt(numr2)+1000)==$('#p2nu6').val()) {
                cor++;
                f_ok($('#p2nu6'));
            }else {
                inc++;
                f_no($('#p2nu6'));
            }
            if ((parseInt(numr2)+2000)==$('#p2nu7').val()) {
                cor++;
                f_ok($('#p2nu7'));
            }else {
                inc++;
                f_no($('#p2nu7'));
            }
            if ((parseInt(numr2)+3000)==$('#p2nu8').val()) {
                cor++;
                f_ok($('#p2nu8'));
            }else {
                inc++;
                f_no($('#p2nu8'));
            }
            if ((parseInt(numr2)+4000)==$('#p2nu9').val()) {
                cor++;
                f_ok($('#p2nu9'));
            }else {
                inc++;
                f_no($('#p2nu9'));
            }
            if ((parseInt(numr2)+5000)==$('#p2nu10').val()) {
                cor++;
                f_ok($('#p2nu10'));
            }else {
                inc++;
                f_no($('#p2nu10'));
            }
            var p2=((cor *1)/10);
            var il1=$('#p3nu1').val();
            var il2=$('#p3nu2').val();
            var il3=$('#p3nu3').val();
            var il4=$('#p3nu4').val();
            var men1=$('#men1').val();
            var men2=$('#men2').val();
            var men3=$('#men3').val();
            var men4=$('#men4').val();
            var cor=0;
            var inc=0;
            if (il1=="2007") {
                cor++;
                f_ok($('#p3nu1'));
            }else {
                inc++;
                f_no($('#p3nu1'));
            }
            if (il2=="3107") {
                cor++;
                f_ok($('#p3nu2'));
            }else {
                inc++;
                f_no($('#p3nu2'));
            }
            if (il3=="1036") {
                cor++;
                f_ok($('#p3nu3'));
            }else {
                inc++;
                f_no($('#p3nu3'));
            }
            if (il4=="2036") {
                cor++;
                f_ok($('#p3nu4'));
            }else {
                inc++;
                f_no($('#p3nu4'));
            }
            if (men1=="1036") {
                cor++;
                f_ok($('#men1'));
            }else {
                inc++;
                f_no($('#men1'));
            }
            if (men2=="2007") {
                cor++;
                f_ok($('#men2'));
            }else {
                inc++;
                f_no($('#men2'));
            }
            if (men3=="2036") {
                cor++;
                f_ok($('#men3'));
            }else {
                inc++;
                f_no($('#men3'));
            }
            if (men4=="3107") {
                cor++;
                f_ok($('#men4'));
            }else {
                inc++;
                f_no($('#men4'));
            }
            var p3=((cor *1)/8);
            var un1=$('#un1').html();
            var un2=$('#un2').html();
            var un3=$('#un3').html();
            var p4nu1=$('#p4nu1').val();
            var p4nu2=$('#p4nu2').val();
            var p4nu3=$('#p4nu3').val();
            var a=0;
            var cor=0;
            var inc=0;
            for (var i =0; i< 3 ; i++) {
                if (un1==numer1[i]) {
                    a=i+1;
                }
            }
            if (a==1) {
                if (p4nu1==">") {
                    cor++;
                    f_ok($('#p4nu1'));
                }else {
                    inc++;
                    f_no($('#p4nu1'));
                }
            }
            if (a==2) {
                if (p4nu1=="<") {
                    cor++;
                    f_ok($('#p4nu1'));
                }else {
                    inc++;
                    f_no($('#p4nu1'));
                }
            }
            if (a==3) {
                if (p4nu1=="=") {
                    cor++;
                    f_ok($('#p4nu1'));
                }else {
                    inc++;
                    f_no($('#p4nu1'));
                }
            }
            var b=0;
            for (var i =0; i< 3 ; i++) {
                if (un2==numer1[i]) {
                    b=i+1;
                }
            }
            if (b==1) {
                if (p4nu2==">") {
                    cor++;
                    f_ok($('#p4nu2'));
                }else {
                    inc++;
                    f_no($('#p4nu2'));
                }
            }
            if (b==2) {
                if (p4nu2=="<") {
                    cor++;
                    f_ok($('#p4nu2'));
                }else {
                    inc++;
                    f_no($('#p4nu2'));
                }
            }
            if (b==3) {
                if (p4nu2=="=") {
                    cor++;
                    f_ok($('#p4nu2'));
                }else {
                    inc++;
                    f_no($('#p4nu2'));
                }
            }
            var c=0;
            for (var i =0; i< 3 ; i++) {
                if (un3==numer1[i]) {
                    c=i+1;
                }
            }
            if (c==1) {
                if (p4nu3==">") {
                    cor++;
                    f_ok($('#p4nu3'));
                }else {
                    inc++;
                    f_no($('#p4nu3'));
                }
            }
            if (c==2) {
                if (p4nu3=="<") {
                    cor++;
                    f_ok($('#p4nu3'));
                }else {
                    inc++;
                    f_no($('#p4nu3'));
                }
            }
            if (c==3) {
                if (p4nu3=="=") {
                    cor++;
                    f_ok($('#p4nu3'));
                }else {
                    inc++;
                    f_no($('#p4nu3'));
                }
            }
            var p4=((cor *1)/3);
            var cor=0;
            var inc=0;
            var rp6="8 506>7 399>6 812>5 275>4 133>3 601>2 999>1 001";
            rp6=rp6.split(">");
            
            if ($('#desc1').hasClass('encierra')) {
                var desc1= $('#desc1').html();
                desc1=desc1.split(" &gt; ");
                
                if (desc1[7]==rp6[7]) {
                    cor++;
                    f_ok($('#desc1'));
                }else {
                    inc++;
                    f_no($('#desc1'));
                }

            }
            if ($('#desc2').hasClass('encierra')) {
                var desc2= $('#desc2').html();
                desc2=desc2.split(" &gt; ");
                if (desc2[7]==rp6[7]) {
                    cor++;
                    f_ok($('#desc2'));
                }else {
                    inc++;
                    f_no($('#desc2'));
                }

            }
            if ($('#desc3').hasClass('encierra')) {
                var desc3= $('#desc3').html();
                desc3=desc3.split(" &gt; ");
                if (desc3[7]==rp6[7]) {
                    cor++;
                    f_ok($('#desc3'));
                }else {
                    inc++;
                    f_no($('#desc3'));
                }

            }
            var p5=cor;
            var elf1=$('#elf1').val();
            var elf2=$('#elf2').val();
            var elf3=$('#elf3').val();
            var elf4=$('#elf4').val();
            var elf5=$('#elf5').val();
            var elf6=$('#elf6').val();
            var elf7=$('#elf7').val();
            var elf8=$('#elf8').val();
            var elf9=$('#elf9').val();
            var elf10=$('#elf10').val();
            var cor=0;
            var inc=0;
            if (elf1=="cara") {
                cor++;
                f_ok($('#elf1'));
            }else {
                inc++;
                f_no($('#elf1'))
            }
            if (elf2=="arista") {
                cor++;
                f_ok($('#elf2'));
            }else {
                inc++;
                f_no($('#elf2'))
            }
            if (elf3=="vértice" || elf3=="vertice") {
                cor++;
                f_ok($('#elf3'));
            }else {
                inc++;
                f_no($('#elf3'))
            }
            if (elf4=="vértice" || elf4=="vertice") {
                cor++;
                f_ok($('#elf4'));
            }else {
                inc++;
                f_no($('#elf4'))
            }
            if (elf5=="superficie lateral curva") {
                cor++;
                f_ok($('#elf5'));
            }else {
                inc++;
                f_no($('#elf5'))
            }
            if (elf6=="radio") {
                cor++;
                f_ok($('#elf6'));
            }else {
                inc++;
                f_no($('#elf6'))
            }
            if (elf7=="base") {
                cor++;
                f_ok($('#elf7'));
            }else {
                inc++;
                f_no($('#elf7'))
            }
            if (elf8=="circunferencia") {
                cor++;
                f_ok($('#elf8'));
            }else {
                inc++;
                f_no($('#elf8'))
            }
            if (elf9=="radio") {
                cor++;
                f_ok($('#elf9'));
            }else {
                inc++;
                f_no($('#elf9'))
            }
            if (elf10=="círculo" || elf10=="circulo") {
                cor++;
                f_ok($('#elf10'));
            }else {
                inc++;
                f_no($('#elf10'))
            }
            var p6=((cor *1.5)/10);
            var cor=0;
            var inc=0;
            var obj1=$('#obj1').val();
            var obj2=$('#obj2').val();
            var obj3=$('#obj3').val();
            var obj4=$('#obj4').val();
            var obj5=$('#obj5').val();
            var obj6=$('#obj6').val();
            if (obj1=="pirámide" || obj1=="piramide") {
                cor++;
                f_ok($('#obj1'));
            }else {
                inc++;
                f_no($('#obj1'));
            }
            if (obj2=="cilindro") {
                cor++;
                f_ok($('#obj2'));
            }else {
                inc++;
                f_no($('#obj2'));
            }
            if (obj3=="cubo") {
                cor++;
                f_ok($('#obj3'));
            }else {
                inc++;
                f_no($('#obj3'));
            }
            if (obj4=="prisma rectangular") {
                cor++;
                f_ok($('#obj4'));
            }else {
                inc++;
                f_no($('#obj4'));
            }
            if (obj5=="esfera") {
                cor++;
                f_ok($('#obj5'));
            }else {
                inc++;
                f_no($('#obj5'));
            }
            if (obj6=="cono") {
                cor++;
                f_ok($('#obj6'));
            }else {
                inc++;
                f_no($('#obj6'));
            }
            var p7=((cor *1)/6);
            var cor=0;
            var inc=0;
            var cani1=$('#cani1').val();
            var cani2=$('#cani2').val();
            var cani3=$('#cani3').val();
            var cani4=$('#cani4').val();
            if (cani1==numero2) {
                cor++;
                f_ok($('#cani1'));
            }else {
                inc++;
                f_no($('#cani1'));
            }
            if (cani2==numero3) {
                cor++;
                f_ok($('#cani2'));
            }else {
                inc++;
                f_no($('#cani2'));
            }
            if (cani3==numero4) {
                cor++;
                f_ok($('#cani3'));
            }else {
                inc++;
                f_no($('#cani3'));
            }
            if (cani4==numero5) {
                cor++;
                f_ok($('#cani4'));
            }else {
                inc++;
                f_no($('#cani4'));
            }
            var p8=((cor *1.5)/4);
            
            var cl1=$('#cl1').val();
            if (cl1>0 && cl1<=1) {
                cor=parseFloat(p1)+parseFloat(p2)+parseFloat(p3)+parseFloat(p4)+parseFloat(p5)+parseFloat(p6)+parseFloat(p7)+parseFloat(p8)+parseFloat(cl1);
                
                f_ok($('#cl1'));
            }else {
                cor=parseFloat(p1)+parseFloat(p2)+parseFloat(p3)+parseFloat(p4)+parseFloat(p5)+parseFloat(p6)+parseFloat(p7)+parseFloat(p8);
                alert('La calificación de la pregunta 1 debe estar entre 1 a 0')
                f_no($('#cl1'));
            }
            //var calc = (calificacion / itemsT);
        var total = (cor * (calificacion / itemsT)).toFixed(2);
        //var total = suma.toFixed(2);

        $("#txtNota").html(total);
        f_tiempo();

       }
    }