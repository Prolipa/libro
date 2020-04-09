var n1=0,sum_total=0,cont=0,ejer=1,itemsT=4,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
var a88cont1=0;
var a88cont2=0;
var a88cont3=0;
var a88cont4=0;
function pintas(){
  if (a88cont1>=18) {
    alert('No hay mas recuadros para pintar');
    a88cont1=18;

  }else{
    a88cont1++;
    $('.pinttr'+a88cont1).addClass('pinta');  
  }
  
}
function depinta(){
  if (a88cont1==0) {
    a88cont1=0;
  }else{
    $('.pinttr'+a88cont1).removeClass('pinta');
    a88cont1--;  
  }
  
}
function pintas1(){
  if (a88cont1>=18) {
    alert('No hay mas recuadros para pintar');
    a88cont2=18;

  }else{
    a88cont2++;
    $('.pintyo'+a88cont2).addClass('pinta');  
  }
  
}
function depinta1(){
  if (a88cont2==0) {
    a88cont2=0;
  }else{
    $('.pintyo'+a88cont2).removeClass('pinta');
    a88cont2--;  
  }
  
}
function pintas2(){
  if (a88cont3>=18) {
    alert('No hay mas recuadros para pintar');
    a88cont3=18;

  }else{
    a88cont3++;
    $('.pintba'+a88cont3).addClass('pinta');  
  }
  
}
function depinta2(){
  if (a88cont3==0) {
    a88cont3=0;
  }else{
    $('.pintba'+a88cont3).removeClass('pinta');
    a88cont3--;  
  }
  
}
function pintas3(){
  if (a88cont4>=18) {
    alert('No hay mas recuadros para pintar');
    a88cont4=18;

  }else{
    a88cont4++;
    $('.pintca'+a88cont4).addClass('pinta');  
  }
  
}
function depinta3(){
  if (a88cont4==0) {
    a88cont4=0;
  }else{
    $('.pintca'+a88cont4).removeClass('pinta');
    a88cont4--;  
  }
  
}
 function f_iniciar() {
    var a88cim1=[];
    var numero = parseInt((Math.random() * 18) + 1);
    var numero1 = parseInt((Math.random() * 18) + 1);
    var numero2 = parseInt((Math.random() * 18) + 1);
    var numero3 = parseInt((Math.random() * 18) + 1);
    var v_img1=[];
    for (var i = 0; i < numero; i++) {
      a88cim1.push('<img src="img/i1_p88_act88.jpg" class="img-responsive" style="mix-blend-mode: multiply; display: inline-block;">');
    }
    for (var i = 0; i < numero1; i++) {
      a88cim1.push('<img src="img/i2_p88_act88.jpg" class="img-responsive" style="mix-blend-mode: multiply; display: inline-block;">');
    }
    for (var i = 0; i < numero2; i++) {
      a88cim1.push('<img src="img/i3_p88_act88.jpg" class="img-responsive" style="mix-blend-mode: multiply; display: inline-block;">');
    }
    for (var i = 0; i < numero3; i++) {
      a88cim1.push('<img src="img/i4_p88_act88.jpg" class="img-responsive" style="mix-blend-mode: multiply; display: inline-block;">');
    }
    var nu=[];
    for (var i =0; i < a88cim1.length; i++) {
      nu.push(i);
    }
    var i,j,k;
    for (i = nu.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = nu[i - 1];
      nu[i - 1] = nu[j];
      nu[j] = k;
    }
    for (var i =0; i < nu.length; i++) {
      v_img1.push(a88cim1[nu[i]]);    
    }
    $("#a88im1").html('');
    $("#a88im1").append(v_img1);
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      if (a88cont1==numero) {
        cor++;
        f_ok($('#a88cor1'));
      }else{
        inc++;
        f_no($('#a88cor1'));
      }
      if (a88cont2==numero1) {
        cor++;
        f_ok($('#a88cor2'));
      }else{
        inc++;
        f_no($('#a88cor2'));
      }
      if (a88cont3==numero2) {
        cor++;
        f_ok($('#a88cor3'));
      }else{
        inc++;
        f_no($('#a88cor3'));
      }
      if (a88cont4==numero3) {
        cor++;
        f_ok($('#a88cor4'));
      }else{
        inc++;
        f_no($('#a88cor4'));
      }
      Calculo_nota();
   }
}