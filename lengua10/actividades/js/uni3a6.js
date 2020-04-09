var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
for (var i =0; i < 5; i++) {
  $('.sub'+(i+1)).click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }
   })
}
for (var i =0; i < 7; i++) {
  $('.sub'+(i+6)).click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }
   })
}
for (var i =0; i < 9; i++) {
  $('.sub'+(i+13)).click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }
   })
}
for (var i =0; i < 5; i++) {
  $('.sub'+(i+27)).click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }
   })
}
for (var i =0; i < 5; i++) {
  $('.sub'+(i+22)).click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }
   })
}
for (var i =0; i < 3; i++) {
  $('.sub'+(i+32)).click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }
   })
}
for (var i =0; i < 5; i++) {
  $('.sub'+(i+35)).click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }
   })
}

function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p2in1=$('#subres1 .underline').text();
      var p2in2=$('#subres2 .underline').text();
      var p2in3=$('#subres3 .underline').text();
      var p2in4=$('#subres4 .underline').text();
      var p2in5=$('#subres5 .underline').text();
      var p2in6=$('#subres6 .underline').text();
      var p2in7=$('#subres7 .underline').text();
      var p2cont1=0;
      if (!p2in1) {
        p2cont1;
        f_no($('.sub1'));
        f_no($('.sub2'));
        f_no($('.sub3'));
        f_no($('.sub4'));
        f_no($('.sub5'));
        
        
      }else{
        if (p2in1=='respetan') {
          p2cont1++;
          f_ok($('#subres1 .underline'));
        }else{
          p2cont1;
          f_no($('#subres1 .underline'));
        }
      }
      if (!p2in2) {
        p2cont1;
        f_no($('.sub6'));
        f_no($('.sub7'));
        f_no($('.sub8'));
        f_no($('.sub9'));
        f_no($('.sub10'));
        f_no($('.sub11'));
        f_no($('.sub12'));
        
      }else{
        if (p2in2=='compraron') {
          p2cont1++;
          f_ok($('#subres2 .underline'));
        }else{
          p2cont1;
          f_no($('#subres2 .underline'));
        }
      }
      if (!p2in3) {
        p2cont1;
        f_no($('.sub13'));
        f_no($('.sub14'));
        f_no($('.sub15'));
        f_no($('.sub16'));
        f_no($('.sub17'));
        f_no($('.sub18'));
        f_no($('.sub19'));
        f_no($('.sub20'));
        f_no($('.sub21'));
      }else{
        if (p2in3=='caminaron') {
          p2cont1++;
          f_ok($('#subres3 .underline'));
        }else{
          p2cont1;
          f_no($('#subres3 .underline'));
        }
      }
      if (!p2in4) {
        p2cont1;
        f_no($('.sub22'));
        f_no($('.sub23'));
        f_no($('.sub24'));
        f_no($('.sub25'));
        f_no($('.sub26'));
        
      }else{
        if (p2in4=='está') {
          p2cont1++;
          f_ok($('#subres4 .underline'));
        }else{
          p2cont1;
          f_no($('#subres4 .underline'));
        }
      }
      if (!p2in5) {
        p2cont1;
        f_no($('.sub27'));
        f_no($('.sub28'));
        f_no($('.sub29'));
        f_no($('.sub30'));
        f_no($('.sub31'));
        
      }else{
        if (p2in5=='viste') {
          p2cont1++;
          f_ok($('#subres5 .underline'));
        }else{
          p2cont1;
          f_no($('#subres5 .underline'));
        }
      }
      if (!p2in6) {
        p2cont1;
        f_no($('.sub32'));
        f_no($('.sub33'));
        f_no($('.sub34'));
      }else{
        if (p2in6=='Llovió') {
          p2cont1++;
          f_ok($('#subres6 .underline'));
        }else{
          p2cont1;
          f_no($('#subres6 .underline'));
        }
      }
      if (!p2in7) {
        p2cont1;
        f_no($('.sub35'));
        f_no($('.sub36'));
        f_no($('.sub37'));
        f_no($('.sub38'));
        f_no($('.sub39'));
        
      }else{
        if (p2in7=='preparó') {
          p2cont1++;
          f_ok($('#subres7 .underline'));
        }else{
          p2cont1;
          f_no($('#subres7 .underline'));
        }
      }

      var p2dcon1=$('#p2dcon1').val().toLowerCase();
      var p2dcon2=$('#p2dcon2').val().toLowerCase();
      var p2dcon3=$('#p2dcon3').val().toLowerCase();
      var p2dcon4=$('#p2dcon4').val().toLowerCase();
      var p2dcon5=$('#p2dcon5').val().toLowerCase();
      var p2dcon6=$('#p2dcon6').val().toLowerCase();
      var p2dcon7=$('#p2dcon7').val().toLowerCase();
      if (p2dcon1=='recíproca') {
        p2cont1++;
        f_ok($('#p2dcon1'));
      }else{
        p2cont1;
        f_no($('#p2dcon1'));
      }
      if (p2dcon2=='transitiva') {
        p2cont1++;
        f_ok($('#p2dcon2'));
      }else{
        p2cont1;
        f_no($('#p2dcon2'));
      }

      if (p2dcon3=='intransitiva') {
        p2cont1++;
        f_ok($('#p2dcon3'));
      }else{
        p2cont1;
        f_no($('#p2dcon3'));
      }
      if (p2dcon4=='copulativa') {
        p2cont1++;
        f_ok($('#p2dcon4'));
      }else{
        p2cont1;
        f_no($('#p2dcon4'));
      }
      if (p2dcon5=='reflexiva') {
        p2cont1++;
        f_ok($('#p2dcon5'));
      }else{
        p2cont1;
        f_no($('#p2dcon5'));
      }
      if (p2dcon6=='impersonal') {
        p2cont1++;
        f_ok($('#p2dcon6'));
      }else{
        p2cont1;
        f_no($('#p2dcon6'));
      }
      if (p2dcon7=='transitiva') {
        p2cont1++;
        f_ok($('#p2dcon7'));
      }else{
        p2cont1;
        f_no($('#p2dcon7'));
      }
      var result1= (p2cont1*4)/14;
      cor=cor + result1;
      inc=inc +(4 - result1);

      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+3;
        f_no($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(3-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }
      var nota1_2=$('#nota1_2').val();
      if (!nota1_2) {
        inc=inc+3;
        f_no($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_2);
        inc=inc+(3-parseFloat(nota1_2));
        f_ok($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }
      Calculo_nota();
   }
}
