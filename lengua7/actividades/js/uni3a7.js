var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
var con1=0;
for (var i =0; i < 8; i++) {
  $('#enc'+(i+1)).click(function(){
      if (con1==0) {
        if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                con1=1;
            }
      }else{
        if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                con1=0;

            }else{
                
                
            }
      }
            

        })
}
var con2=0;
for (var i =8; i < 14; i++) {
  $('#enc'+(i+1)).click(function(){
      if (con2==0) {
        if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')
                

            }else{
                $(this).addClass('encierra1')
                con2=1;
            }
      }else{
        if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')
                con2=0;

            }else{
                
                
            }
      }
            

        })
}
var con3=0;
for (var i =14; i < 21; i++) {
  $('#enc'+(i+1)).click(function(){
      if (con3==0) {
        if ($(this).hasClass('encierra2')) {
                $(this).removeClass('encierra2')
                

            }else{
                $(this).addClass('encierra2')
                con3=1;
            }
      }else{
        if ($(this).hasClass('encierra2')) {
                $(this).removeClass('encierra2')
                con3=0;

            }else{
                
                
            }
      }
            

        })
}
var con4=0;
for (var i =21; i < 27; i++) {
  $('#enc'+(i+1)).click(function(){
      if (con4==0) {
        if ($(this).hasClass('encierra3')) {
                $(this).removeClass('encierra3')
                

            }else{
                $(this).addClass('encierra3')
                con4=1;
            }
      }else{
        if ($(this).hasClass('encierra3')) {
                $(this).removeClass('encierra3')
                con4=0;

            }else{
                
                
            }
      }
            

        })
}
var con5=0;
for (var i =27; i < 31; i++) {
  $('#enc'+(i+1)).click(function(){
      if (con5==0) {
        if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')
                

            }else{
                $(this).addClass('encierra4')
                con5=1;
            }
      }else{
        if ($(this).hasClass('encierra4')) {
                $(this).removeClass('encierra4')
                con5=0;

            }else{
                
                
            }
      }
            

        })
}
var con6=0;
for (var i =31; i < 38; i++) {
  $('#enc'+(i+1)).click(function(){
      if (con6==0) {
        if ($(this).hasClass('encierra5')) {
                $(this).removeClass('encierra5')
                

            }else{
                $(this).addClass('encierra5')
                con6=1;
            }
      }else{
        if ($(this).hasClass('encierra5')) {
                $(this).removeClass('encierra5')
                con6=0;

            }else{
                
                
            }
      }
            

        })
}
var con7=0;
for (var i =38; i < 46; i++) {
  $('#enc'+(i+1)).click(function(){
      if (con7==0) {
        if ($(this).hasClass('encierra6')) {
                $(this).removeClass('encierra6')
                

            }else{
                $(this).addClass('encierra6')
                con7=1;
            }
      }else{
        if ($(this).hasClass('encierra6')) {
                $(this).removeClass('encierra6')
                con7=0;

            }else{
                
                
            }
      }
            

        })
}
var con8=0;
for (var i =46; i < 50; i++) {
  $('#enc'+(i+1)).click(function(){
      if (con8==0) {
        if ($(this).hasClass('encierra7')) {
                $(this).removeClass('encierra7')
                

            }else{
                $(this).addClass('encierra7')
                con8=1;
            }
      }else{
        if ($(this).hasClass('encierra7')) {
                $(this).removeClass('encierra7')
                con8=0;

            }else{
                
                
            }
      }
            

        })
}
var con9=0;
for (var i =50; i < 56; i++) {
  $('#enc'+(i+1)).click(function(){
      if (con9==0) {
        if ($(this).hasClass('encierra8')) {
                $(this).removeClass('encierra8')
                

            }else{
                $(this).addClass('encierra8')
                con9=1;
            }
      }else{
        if ($(this).hasClass('encierra8')) {
                $(this).removeClass('encierra8')
                con9=0;

            }else{
                
                
            }
      }
            

        })
}

$('.sub1').click(function(){
      
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                $('.sub2').removeClass('underline')
            }
})
$('.sub2').click(function(){
      
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                $('.sub1').removeClass('underline')
            }
})
$('.sub3').click(function(){
      
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                $('.sub4').removeClass('underline')
            }
})
$('.sub4').click(function(){
      
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                $('.sub3').removeClass('underline')
            }
})

$('.sub5').click(function(){
      
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                $('.sub6').removeClass('underline')
            }
})
$('.sub6').click(function(){
      
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                $('.sub5').removeClass('underline')
            }
})
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 3)
});

function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p2in1=$('.encierra').text();
      var p2in2=$('.encierra1').text();
      var p2in3=$('.encierra2').text();
      var p2in4=$('.encierra3').text();
      var p2in5=$('.encierra4').text();
      var p2in6=$('.encierra5').text();
      var p2in7=$('.encierra6').text();
      var p2in8=$('.encierra7').text();
      var p2in9=$('.encierra8').text();
      var p2cont=0;
      if (!p2in1) {
        p2cont;
        f_no($('#enc1'));
        f_no($('#enc2'));
        f_no($('#enc3'));
        f_no($('#enc4'));
        f_no($('#enc5'));
        f_no($('#enc6'));
        f_no($('#enc7'));
        f_no($('#enc8'));
        
      }else{
        if (p2in1=='ayer.') {
          p2cont++;
          f_ok($('.encierra'));
        }else{
          p2cont;
          f_no($('.encierra'));
        }
      }
      if (!p2in2) {
        p2cont;
        f_no($('#enc9'));
        f_no($('#enc10'));
        f_no($('#enc11'));
        f_no($('#enc12'));
        f_no($('#enc13'));
        f_no($('#enc14'));
        
      }else{
        if (p2in2=='cuidadosamente.') {
          p2cont++;
          f_ok($('.encierra1'));
        }else{
          p2cont;
          f_no($('.encierra1'));
        }
      }
      if (!p2in3) {
        p2cont;
        f_no($('#enc15'));
        f_no($('#enc16'));
        f_no($('#enc17'));
        f_no($('#enc18'));
        f_no($('#enc19'));
        f_no($('#enc20'));
        f_no($('#enc21'));
      }else{
        if (p2in3=='aquí.') {
          p2cont++;
          f_ok($('.encierra2'));
        }else{
          p2cont;
          f_no($('.encierra2'));
        }
      }
      if (!p2in4) {
        p2cont;
        f_no($('#enc22'));
        f_no($('#enc23'));
        f_no($('#enc24'));
        f_no($('#enc25'));
        f_no($('#enc26'));
        f_no($('#enc27'));
      }else{
        if (p2in4=='con la computadora.') {
          p2cont++;
          f_ok($('.encierra3'));
        }else{
          p2cont;
          f_no($('.encierra3'));
        }
      }


      if (!p2in5) {
        p2cont;
        f_no($('#enc28'));
        f_no($('#enc29'));
        f_no($('#enc30'));
        f_no($('#enc31'));
        
      }else{
        if (p2in5=='para compartir.') {
          p2cont++;
          f_ok($('.encierra4'));
        }else{
          p2cont;
          f_no($('.encierra4'));
        }
      }

      if (!p2in6) {
        p2cont;
        f_no($('#enc32'));
        f_no($('#enc33'));
        f_no($('#enc34'));
        f_no($('#enc35'));
        f_no($('#enc36'));
        f_no($('#enc37'));
        f_no($('#enc38'));
      }else{
        if (p2in6=='dentro de dos días.') {
          p2cont++;
          f_ok($('.encierra5'));
        }else{
          p2cont;
          f_no($('.encierra5'));
        }
      }

      if (!p2in7) {
        p2cont;
        f_no($('#enc39'));
        f_no($('#enc40'));
        f_no($('#enc41'));
        f_no($('#enc42'));
        f_no($('#enc43'));
        f_no($('#enc44'));
        f_no($('#enc45'));
        f_no($('#enc46'));
      }else{
        if (p2in7=='como un experto.') {
          p2cont++;
          f_ok($('.encierra6'));
        }else{
          p2cont;
          f_no($('.encierra6'));
        }
      }
      if (!p2in8) {
        p2cont;
        f_no($('#enc47'));
        f_no($('#enc48'));
        f_no($('#enc49'));
        f_no($('#enc50'));
      }else{
        if (p2in8=='en la primera plana.') {
          p2cont++;
          f_ok($('.encierra7'));
        }else{
          p2cont;
          f_no($('.encierra7'));
        }
      }
      if (!p2in9) {
        p2cont;
        
        f_no($('#enc51'));
        f_no($('#enc52'));
        f_no($('#enc53'));
        f_no($('#enc54'));
        f_no($('#enc55'));
        f_no($('#enc56'));
      }else{
        if (p2in9=='con una llave de tuercas.') {
          p2cont++;
          f_ok($('.encierra8'));
        }else{
          p2cont;
          f_no($('.encierra8'));
        }
      }

      var p1dcon1 =$('#p1dcon1').val().toLowerCase();
      var p1dcon2 =$('#p1dcon2').val().toLowerCase();
      var p1dcon3 =$('#p1dcon3').val().toLowerCase();
      var p1dcon4 =$('#p1dcon4').val().toLowerCase();
      var p1dcon5 =$('#p1dcon5').val().toLowerCase();
      var p1dcon6 =$('#p1dcon6').val().toLowerCase();
      var p1dcon7 =$('#p1dcon7').val().toLowerCase();
      var p1dcon8 =$('#p1dcon8').val().toLowerCase();
      var p1dcon9 =$('#p1dcon9').val().toLowerCase();
      if (p1dcon1=='tiempo') {
        p2cont++;
        f_ok($('#p1dcon1'));
       }else{
        p2cont;
        f_no($('#p1dcon1'));
      }
      if (p1dcon2=='modo') {
        p2cont++;
        f_ok($('#p1dcon2'));
       }else{
        p2cont;
        f_no($('#p1dcon2'));
      }
      if (p1dcon3=='lugar') {
        p2cont++;
        f_ok($('#p1dcon3'));
       }else{
        p2cont;
        f_no($('#p1dcon3'));
      }
      if (p1dcon4=='instrumento') {
        p2cont++;
        f_ok($('#p1dcon4'));
       }else{
        p2cont;
        f_no($('#p1dcon4'));
      }
      if (p1dcon5=='finalidad') {
        p2cont++;
        f_ok($('#p1dcon5'));
       }else{
        p2cont;
        f_no($('#p1dcon5'));
      }
      if (p1dcon6=='tiempo') {
        p2cont++;
        f_ok($('#p1dcon6'));
       }else{
        p2cont;
        f_no($('#p1dcon6'));
      }
      if (p1dcon7=='modo') {
        p2cont++;
        f_ok($('#p1dcon7'));
       }else{
        p2cont;
        f_no($('#p1dcon7'));
      }
      if (p1dcon8=='lugar') {
        p2cont++;
        f_ok($('#p1dcon8'));
       }else{
        p2cont;
        f_no($('#p1dcon8'));
      }
      if (p1dcon9=='instrumento') {
        p2cont++;
        f_ok($('#p1dcon9'));
       }else{
        p2cont;
        f_no($('#p1dcon9'));
      }
      var result1= (p2cont*4)/18;
      cor=cor + result1;
      inc=inc +(4 - result1);


      var sres1=$('#sres1 > .underline').text();
      var sres2=$('#sres2 > .underline').text();
      var sres3=$('#sres3 > .underline').text();
      
      if (!sres1) {
        inc++;
        
        f_no($('.sub1'));
        f_no($('.sub2'));
        
      }else{
        if (sres1=='Eficientemente') {
          cor++;
          f_ok($('#sres1 > .underline'));
        }else{
          inc++;
          f_no($('#sres1 > .underline'));
        }
      }
      if (!sres2) {
        inc++;
        
        f_no($('.sub3'));
        f_no($('.sub4'));
        
      }else{
        if (sres2=='Mañana') {
          cor++;
          f_ok($('#sres2 > .underline'));
        }else{
          inc++;
          f_no($('#sres2 > .underline'));
        }
      }
      if (!sres3) {
        inc++;
        
        f_no($('.sub5'));
        f_no($('.sub6'));
        
      }else{
        if (sres3=='Con mucho cariño') {
          cor++;
          f_ok($('#sres3 > .underline'));
        }else{
          inc++;
          f_no($('#sres3 > .underline'));
        }
      }

      
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
      
      Calculo_nota();
   }
}
