var n1=0,sum_total=0,cont=0,ejer=1,itemsT=19,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
var a90cont1=0;
var a90cont2=0;
var a90cont3=0;
var a90cont4=0;
var a90cont5=0;
function pintas(){
  if (a90cont1>=10) {
    alert('No hay mas recuadros para pintar');
    a90cont1=10;

  }else{
    a90cont1++;
    $('.pinttr'+a90cont1).addClass('pinta');  
  }
  
}
function depinta(){
  if (a90cont1==0) {
    a90cont1=0;
  }else{
    $('.pinttr'+a90cont1).removeClass('pinta');
    a90cont1--;  
  }
  
}
function pintas1(){
  if (a90cont2>=10) {
    alert('No hay mas recuadros para pintar');
    a90cont2=10;

  }else{
    a90cont2++;
    $('.pintyo'+a90cont2).addClass('pinta');  
  }
  
}
function depinta1(){
  if (a90cont2==0) {
    a90cont2=0;
  }else{
    $('.pintyo'+a90cont2).removeClass('pinta');
    a90cont2--;  
  }
  
}
function pintas2(){
  if (a90cont3>=10) {
    alert('No hay mas recuadros para pintar');
    a90cont3=10;

  }else{
    a90cont3++;
    $('.pintba'+a90cont3).addClass('pinta');  
  }
  
}
function depinta2(){
  if (a90cont3==0) {
    a90cont3=0;
  }else{
    $('.pintba'+a90cont3).removeClass('pinta');
    a90cont3--;  
  }
  
}
function pintas3(){
  if (a90cont4>=10) {
    alert('No hay mas recuadros para pintar');
    a90cont4=10;

  }else{
    a90cont4++;
    $('.pintca'+a90cont4).addClass('pinta');  
  }
  
}
function depinta3(){
  if (a90cont4==0) {
    a90cont4=0;
  }else{
    $('.pintca'+a90cont4).removeClass('pinta');
    a90cont4--;  
  }
  
}
function pintas4(){
  if (a90cont5>=10) {
    alert('No hay mas recuadros para pintar');
    a90cont5=10;

  }else{
    a90cont5++;
    $('.pintni'+a90cont5).addClass('pinta');  
  }
  
}
function depinta4(){
  if (a90cont5==0) {
    a90cont5=0;
  }else{
    $('.pintni'+a90cont5).removeClass('pinta');
    a90cont5--;  
  }
  
}
 function f_iniciar() {
    
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      if (a90cont1=='4') {
        cor++;
        f_ok($('#a90cor1'));
      }else{
        inc++;
        f_no($('#a90cor1'));
      }
      if (a90cont2=='4') {
        cor++;
        f_ok($('#a90cor2'));
      }else{
        inc++;
        f_no($('#a90cor2'));
      }
      if (a90cont3=='8') {
        cor++;
        f_ok($('#a90cor3'));
      }else{
        inc++;
        f_no($('#a90cor3'));
      }
      if (a90cont4=='3') {
        cor++;
        f_ok($('#a90cor4'));
      }else{
        inc++;
        f_no($('#a90cor4'));
      }
      if (a90cont5=='1') {
        cor++;
        f_ok($('#a90cor5'));
      }else{
        inc++;
        f_no($('#a90cor5'));
      }
      var a90tc1=$('#a90tc1').val().split('');
      var a90tc2=$('#a90tc2').val().split('');
      var a90tc3=$('#a90tc3').val().split('');
      var a90tc4=$('#a90tc4').val().split('');
      var a90tc5=$('#a90tc5').val().split('');
      if (a90tc1.length=='4') {
        cor++;
        f_ok($('#a90tc1'));
      }else{
        inc++;
        f_no($('#a90tc1'));
      }
      if (a90tc2.length=='4') {
        cor++;
        f_ok($('#a90tc2'));
      }else{
        inc++;
        f_no($('#a90tc2'));
      }
      if (a90tc3.length=='8') {
        cor++;
        f_ok($('#a90tc3'));
      }else{
        inc++;
        f_no($('#a90tc3'));
      }
      if (a90tc4.length=='3') {
        cor++;
        f_ok($('#a90tc4'));
      }else{
        inc++;
        f_no($('#a90tc4'));
      }
      if (a90tc5.length=='1') {
        cor++;
        f_ok($('#a90tc5'));
      }else{
        inc++;
        f_no($('#a90tc5'));
      }
      var a90dcon1=$('#a90dcon1').val();
      var a90dcon2=$('#a90dcon2').val();
      var a90dcon3=$('#a90dcon3').val();
      var a90dcon4=$('#a90dcon4').val();
      var a90dcon5=$('#a90dcon5').val();
      var a90dcon6=$('#a90dcon6').val().toLowerCase().split(' ');
      var a90dcon7=$('#a90dcon7').val();
      var a90dcon8=$('#a90dcon8').val().toLowerCase().split(' ');
      var a90dcon9=$('#a90dcon9').val();
      if (a90dcon1=='4') {
        cor++;
        f_ok($('#a90dcon1'));
      }else{
        inc++;
        f_no($('#a90dcon1'));
      }
      if (a90dcon2=='4') {
        cor++;
        f_ok($('#a90dcon2'));
      }else{
        inc++;
        f_no($('#a90dcon2'));
      }
      if (a90dcon3=='8') {
        cor++;
        f_ok($('#a90dcon3'));
      }else{
        inc++;
        f_no($('#a90dcon3'));
      }
      if (a90dcon4=='3') {
        cor++;
        f_ok($('#a90dcon4'));
      }else{
        inc++;
        f_no($('#a90dcon4'));
      }
      if (a90dcon5=='1') {
        cor++;
        f_ok($('#a90dcon5'));
      }else{
        inc++;
        f_no($('#a90dcon5'));
      }
      if (a90dcon7=='8') {
        cor++;
        f_ok($('#a90dcon7'));
      }else{
        inc++;
        f_no($('#a90dcon7'));
      }
      if (a90dcon9=='7') {
        cor++;
        f_ok($('#a90dcon9'));
      }else{
        inc++;
        f_no($('#a90dcon9'));
      }
      var ccont1=0;
      for (var i =0; i < a90dcon6.length; i++) {
        if (a90dcon6[i]=='pelotas' || a90dcon6[i]=='pelota') {
          ccont1++;
        }
      }
      if (ccont1=='1') {
        cor++;
        f_ok($('#a90dcon6'));
      }else{
        inc++;
        f_no($('#a90dcon6'));
      }
      var ccont2=0;
      for (var i =0; i < a90dcon8.length; i++) {
        if (a90dcon8[i]=='muñeca') {
          ccont2++;
        }
      }
      if (ccont2=='1') {
        cor++;
        f_ok($('#a90dcon8'));
      }else{
        inc++;
        f_no($('#a90dcon8'));
      }
      Calculo_nota();
   }
}