var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}

document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2)
});
document.getElementById('nota1_5').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota1_5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_5'), 0.5)
});
document.getElementById('nota1_7').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_7'), 1)
});
document.getElementById('nota1_9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_9'), 1)
});
document.getElementById('nota1_10').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_10').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_10'), 1)
});
$('.sub1').click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                $('.sub2').removeClass('underline')
                $('.sub3').removeClass('underline')
                $('.sub4').removeClass('underline')
            }
   })
$('.sub2').click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                $('.sub1').removeClass('underline')
                $('.sub3').removeClass('underline')
                $('.sub4').removeClass('underline')
            }
   })
$('.sub3').click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                $('.sub2').removeClass('underline')
                $('.sub1').removeClass('underline')
                $('.sub4').removeClass('underline')
            }
   })
$('.sub4').click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                $('.sub2').removeClass('underline')
                $('.sub3').removeClass('underline')
                $('.sub1').removeClass('underline')
            }
   })
function f_iniciar() {
    var p3vec1=['Los especialistas contraargumentan durante varios minutos las opiniones de otros especialistas.','El simposio es lo mismo que una mesa redonda de debate.','El simposio es una reunión de expertos en la que se expone y desarrolla un tema en forma completa y detallada.','Para organizar un simposio, se requiere de un coordinador, auditorio, expertos.'];
    var p3vec2=['F','F','V','V'];
    var p3aux1=[];
    var myArray1 = ['0','1','2','3'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray1[i-1];
            $("#p3im"+i).html(p3vec1[c]);
            p3aux1.push(p3vec2[c]);
            
        };

    var pal1=['<p class="bg_palabra drag3 c1">Preguntas del público</p>',
        '<p class="bg_palabra drag3 c2" >Coordinador: presenta el tema y presenta a los ponentes</p>',
        '<p class="bg_palabra drag3 c3" >Cada ponente expone el tema</p>',
        '<p class="bg_palabra drag3 c4" >Coordinador hace un cierre</p>',
        '<p class="bg_palabra drag3 c5" >Pueden debatir las ideas y los argumentos de otro ponente</p>'];
    var p4aux1=[];
    var p4aux2=[];
    var p4aux3=[];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    
    $(".drag3").draggable({
        revert:"invalid",
        zIndex:5,
        containment: ".actividad17",
        scroll: false,
    });
    
   $(".drop3").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag3");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            p4aux1.push(ui.draggable.text());
        }
   });
   $(".drop4").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag3");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            p4aux2.push(ui.draggable.text());
        }
   });
   $(".drop5").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag3");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            p4aux3.push(ui.draggable.text());
        }
   });

   var p6vec1=['El poco o ningún uso de adjetivos',
   'Precisión de información',
   'El potencial interés para el autor del artículo',
   'Identificación de las fuentes y datos relevantes',
   'Uso de vocabulario científico'];
    var p6vec2=['x','√','x','√','√'];
    var p6aux1=[];
    var myArray6 = ['0','1','2','3','4'];
       var i,j,k;
        for (i = myArray6.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray6[i - 1];
            myArray6[i - 1] = myArray6[j];
            myArray6[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 5 ; i++) {
            var c6=myArray6[i-1];
            $("#p6im"+i).html(p6vec1[c6]);
            p6aux1.push(p6vec2[c6]);
            
        };
    var p8vec1=['1 a, 2 c, 3 b, 4 d',
   '1 c, 2 a, 3 b, 4 d',
   '1 d, 2 a, 3 b, 4 c',
   '1 b, 2 d, 3 a, 4 c'];
    var myArray8 = ['0','1','2','3'];
       var i,j,k;
        for (i = myArray8.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray8[i - 1];
            myArray8[i - 1] = myArray8[j];
            myArray8[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 5 ; i++) {
            var c8=myArray8[i-1];
            $("#p8im"+i).html(p8vec1[c8]);
            
            
        };

    var p11vec1=['Utilizaban los signos de puntuación.',
    'Escribían todas las letras en mayúscula.',
    'Utilizaban reglas ortográficas.',
    'Para separar las palabras usaban un punto.','El alfabeto tenía 26 letras.',
    'El alfabeto latino se originó en Francia.'];
    var p11vec2=['F','V','F','V','F','F'];
    var p11aux1=[];
    var myArray11 = ['0','1','2','3','4','5'];
       var i,j,k;
        for (i = myArray11.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray11[i - 1];
            myArray11[i - 1] = myArray11[j];
            myArray11[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 6 ; i++) {
            var c11=myArray11[i-1];
            $("#p11im"+i).html(p11vec1[c11]);
            p11aux1.push(p11vec2[c11]);
            
        };
    var p12vec1=['América del Norte',
    'Europa Occidental',
    'América Central',
    'Europa Oriental',
    'América del Sur',
    'Asia'];
    var p12vec2=['x','x','x','','x',''];
    var p12aux1=[];
    var myArray11 = ['0','1','2','3','4','5'];
       var i,j,k;
        for (i = myArray11.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray11[i - 1];
            myArray11[i - 1] = myArray11[j];
            myArray11[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 6 ; i++) {
            var c11=myArray11[i-1];
            $("#p12im"+i).html(p12vec1[c11]);
            p12aux1.push(p12vec2[c11]);
            
        };
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      

      var p2dcon1=$('#p2dcon1').val().toLowerCase();
      var p2dcon2=$('#p2dcon2').val().toLowerCase();
      var p2dcon3=$('#p2dcon3').val().toLowerCase();
      var p2dcon4=$('#p2dcon4').val().toLowerCase();
      var p2cont=0;
      if (p2dcon1=='cruzada') {
        p2cont++;
        f_ok($('#p2dcon1'));
      }else{
        p2cont;
        f_no($('#p2dcon1'));
      }
      if (p2dcon2=='continua') {
        p2cont++;
        f_ok($('#p2dcon2'));
      }else{
        p2cont;
        f_no($('#p2dcon2'));
      }

      if (p2dcon3=='cruzada') {
        p2cont++;
        f_ok($('#p2dcon3'));
      }else{
        p2cont;
        f_no($('#p2dcon3'));
      }
      if (p2dcon4=='pareada') {
        p2cont++;
        f_ok($('#p2dcon4'));
      }else{
        p2cont;
        f_no($('#p2dcon4'));
      }
      
      var result2= (p2cont*1)/4;
      cor=cor + result2;
      inc=inc +(1 - result2);
      $('#nota1_2').val(result2.toFixed(2));
      $('#nota1_2').css("display", "");
      f_ok($('#nota1_2'));

      var p3sel1=$('#p3sel1').val();
      var p3sel2=$('#p3sel2').val();
      var p3sel3=$('#p3sel3').val();
      var p3sel4=$('#p3sel4').val();
      var p3cont1=0;
      if (p3sel1==p3aux1[0]) {
        p3cont1++;
        f_ok($('#p3sel1'));
      }else{
        p3cont1;
        f_no($('#p3sel1'));
      }
      if (p3sel2==p3aux1[1]) {
        p3cont1++;
        f_ok($('#p3sel2'));
      }else{
        p3cont1;
        f_no($('#p3sel2'));
      }
      if (p3sel3==p3aux1[2]) {
        p3cont1++;
        f_ok($('#p3sel3'));
      }else{
        p3cont1;
        f_no($('#p3sel3'));
      }
      if (p3sel4==p3aux1[3]) {
        p3cont1++;
        f_ok($('#p3sel4'));
      }else{
        p3cont1;
        f_no($('#p3sel4'));
      }
      var result3=(p3cont1*0.5)/4;
      cor=cor + result3;
      inc=inc + (0.5 -result3);
      $('#nota1_3').val(result3.toFixed(2));
      $('#nota1_3').css("display", "");
      f_ok($('#nota1_3'));

      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+2;
        f_no($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(2-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }

      var p4im1=$('.p4im1 p').text();
      var p4im2=$('.p4im2 p').text();
      var p4im3=$('.p4im3 p').text();
      var p4cont1=0;
      var p4a1=['Cada ponente expone el tema','Pueden debatir las ideas y los argumentos de otro ponente'];
      var p4a2=['Preguntas del público','Coordinador hace un cierre'];
      if (p4aux1=='Coordinador: presenta el tema y presenta a los ponentes') {
        p4cont1++;
        f_ok($('.p4im1'));
      }else{
        p4cont1;
        f_no($('.p4im1'));
      }
      var p4c1=0;
      for (var i = 0; i < p4a1.length; i++) {
        if (p4aux2[0] == p4a1[i]) {
          p4c1++;
        }
        if (p4aux2[1] == p4a1[i]) {
          p4c1++;
        }
      }
      if (p4c1=='2') {
        p4cont1++;
        f_ok($('.p4im2'));
      }else{
        p4cont1;
        f_no($('.p4im2'));
      }
      var p4c2=0;
      for (var i = 0; i < p4a2.length; i++) {
        if (p4aux3[0] == p4a2[i]) {
          p4c2++;
        }
        if (p4aux3[1] == p4a2[i]) {
          p4c2++;
        }
      }
      if (p4c2=='2') {
        p4cont1++;
        f_ok($('.p4im3'));
      }else{
        p4cont1;
        f_no($('.p4im3'));
      }
      var result4=(p4cont1*0.5)/3;
      cor=cor + result4;
      inc=inc + (0.5 -result4);
      $('#nota1_4').val(result4.toFixed(2));
      $('#nota1_4').css("display", "");
      f_ok($('#nota1_4'));

      var p6sel1=$('#p6sel1').val();
      var p6sel2=$('#p6sel2').val();
      var p6sel3=$('#p6sel3').val();
      var p6sel4=$('#p6sel4').val();
      var p6sel5=$('#p6sel5').val();
      var p6cont1=0;
      if (p6sel1==p6aux1[0]) {
        p6cont1++;
        f_ok($('#p6sel1'));
      }else{
        p6cont1;
        f_no($('#p6sel1'));
      }
      if (p6sel2==p6aux1[1]) {
        p6cont1++;
        f_ok($('#p6sel2'));
      }else{
        p6cont1;
        f_no($('#p6sel2'));
      }
      if (p6sel3==p6aux1[2]) {
        p6cont1++;
        f_ok($('#p6sel3'));
      }else{
        p6cont1;
        f_no($('#p6sel3'));
      }
      if (p6sel4==p6aux1[3]) {
        p6cont1++;
        f_ok($('#p6sel4'));
      }else{
        p6cont1;
        f_no($('#p6sel4'));
      }
      if (p6sel5==p6aux1[4]) {
        p6cont1++;
        f_ok($('#p6sel5'));
      }else{
        p6cont1;
        f_no($('#p6sel5'));
      }
      var result6=(p6cont1*0.5)/5;
      cor=cor + result6;
      inc=inc + (0.5 -result6);
      $('#nota1_6').val(result6.toFixed(2));
      $('#nota1_6').css("display", "");
      f_ok($('#nota1_6'));
      var nota1_5=$('#nota1_5').val();
      if (!nota1_5) {
        inc=inc+0.5;
        f_no($('#nota1_5'));
        $('#nota1_5').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_5);
        inc=inc+(0.5-parseFloat(nota1_5));
        f_ok($('#nota1_5'));
        $('#nota1_5').attr('disabled','true');
      }
      var nota1_7=$('#nota1_7').val();
      if (!nota1_7) {
        inc=inc+1;
        f_no($('#nota1_7'));
        $('#nota1_7').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_7);
        inc=inc+(1-parseFloat(nota1_7));
        f_ok($('#nota1_7'));
        $('#nota1_7').attr('disabled','true');
      }

      var p8res1=$('.underline span').text();
      var p8cont1=0;
      if (!p8res1) {
        f_no($('.sub1'));
        f_no($('.sub2'));
        f_no($('.sub3'));
        f_no($('.sub4'));
      }else{
        if (p8res1=='1 d, 2 a, 3 b, 4 c') {
          p8cont1++;
          f_ok($('.underline'))
        }else{
          p8cont1;
          f_no($('.underline'));
        }
      }
      var result8=(p8cont1*1)/1;
      cor=cor + result8;
      inc=inc + (1 -result8);
      $('#nota1_8').val(result8.toFixed(2));
      $('#nota1_8').css("display", "");
      f_ok($('#nota1_8'));

      var nota1_9=$('#nota1_9').val();
      if (!nota1_9) {
        inc=inc+1;
        f_no($('#nota1_9'));
        $('#nota1_9').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_9);
        inc=inc+(1-parseFloat(nota1_9));
        f_ok($('#nota1_9'));
        $('#nota1_9').attr('disabled','true');
      }
      var nota1_10=$('#nota1_10').val();
      if (!nota1_10) {
        inc=inc+1;
        f_no($('#nota1_10'));
        $('#nota1_10').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_10);
        inc=inc+(1-parseFloat(nota1_10));
        f_ok($('#nota1_10'));
        $('#nota1_10').attr('disabled','true');
      }

      var p11sel1=$('#p11sel1').val();
      var p11sel2=$('#p11sel2').val();
      var p11sel3=$('#p11sel3').val();
      var p11sel4=$('#p11sel4').val();
      var p11sel5=$('#p11sel5').val();
      var p11sel6=$('#p11sel6').val();
      var p11cont1=0;
      if (p11sel1==p11aux1[0]) {
        p11cont1++;
        f_ok($('#p11sel1'));
      }else{
        p11cont1;
        f_no($('#p11sel1'));
      }
      if (p11sel2==p11aux1[1]) {
        p11cont1++;
        f_ok($('#p11sel2'));
      }else{
        p11cont1;
        f_no($('#p11sel2'));
      }
      if (p11sel3==p11aux1[2]) {
        p11cont1++;
        f_ok($('#p11sel3'));
      }else{
        p11cont1;
        f_no($('#p11sel3'));
      }
      if (p11sel4==p11aux1[3]) {
        p11cont1++;
        f_ok($('#p11sel4'));
      }else{
        p11cont1;
        f_no($('#p11sel4'));
      }
      if (p11sel5==p11aux1[4]) {
        p11cont1++;
        f_ok($('#p11sel5'));
      }else{
        p11cont1;
        f_no($('#p11sel5'));
      }
      if (p11sel6==p11aux1[5]) {
        p11cont1++;
        f_ok($('#p11sel6'));
      }else{
        p11cont1;
        f_no($('#p11sel6'));
      }
      var result11=(p11cont1*0.5)/6;
      cor=cor + result11;
      inc=inc + (0.5 -result11);
      $('#nota1_11').val(result11.toFixed(2));
      $('#nota1_11').css("display", "");
      f_ok($('#nota1_11'));

      var p12dcon1=$('#p12dcon1').val();
      var p12dcon2=$('#p12dcon2').val();
      var p12dcon3=$('#p12dcon3').val();
      var p12dcon4=$('#p12dcon4').val();
      var p12dcon5=$('#p12dcon5').val();
      var p12dcon6=$('#p12dcon6').val();
      var p12cont1=0;
      if (!p12dcon1 && !p12dcon2 && !p12dcon3 && !p12dcon4 && !p12dcon5 && !p12dcon6) {
          p12cont1;
        f_no($('#p12dcon1'));
        f_no($('#p12dcon2'));
        f_no($('#p12dcon3'));
        f_no($('#p12dcon4'));
        f_no($('#p12dcon5'));
        f_no($('#p12dcon6'));
      }else{
        if (p12dcon1==p12aux1[0]) {
        p12cont1++;
        f_ok($('#p12dcon1'));
      }else{
        p12cont1;
        f_no($('#p12dcon1'));
      }
      if (p12dcon2==p12aux1[1]) {
        p12cont1++;
        f_ok($('#p12dcon2'));
      }else{
        p12cont1;
        f_no($('#p12dcon2'));
      }
      if (p12dcon3==p12aux1[2]) {
        p12cont1++;
        f_ok($('#p12dcon3'));
      }else{
        p12cont1;
        f_no($('#p12dcon3'));
      }
      if (p12dcon4==p12aux1[3]) {
        p12cont1++;
        f_ok($('#p12dcon4'));
      }else{
        p12cont1;
        f_no($('#p12dcon4'));
      }
      if (p12dcon5==p12aux1[4]) {
        p12cont1++;
        f_ok($('#p12dcon5'));
      }else{
        p12cont1;
        f_no($('#p12dcon5'));
      }
      if (p12dcon6==p12aux1[5]) {
        p12cont1++;
        f_ok($('#p12dcon6'));
      }else{
        p12cont1;
        f_no($('#p12dcon6'));
      }
      }
      

      var result12=(p12cont1*0.5)/6;
      cor=cor + result12;
      inc=inc + (0.5 -result12);
      $('#nota1_12').val(result12.toFixed(2));
      $('#nota1_12').css("display", "");
      f_ok($('#nota1_12'));
      Calculo_nota();
   }
}
