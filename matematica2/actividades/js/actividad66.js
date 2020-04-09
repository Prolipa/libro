var n1=0,sum_total=0,cont=0,ejer=1,itemsT=8,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
var a66cim1=[];
var a66cim2=[];
var a66cim3=[];
var a66cim4=[];
var a66cim11=[];
var a66cim12=[];
var a66cim13=[];
var a66cim14=[];
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
function decenasbase(){
  if (a66cim1.length>='9') {
     a66cim1=[];
  }else {
    a66cim1.push('<img src="img/i1_p69_act66.jpg" style="mix-blend-mode: multiply;" class="img-responsive" alt="">');
     
  }
  $('#a66im1').html(a66cim1);
}
function unidadesbase(){
  if (a66cim2.length>='9') {
    a66cim2=[];
  }else {
    a66cim2.push('<img src="img/i2_p69_act66.jpg" style="mix-blend-mode: multiply;" class="img-responsive" alt="">');  
  }
  
  $('#a66im2').html(a66cim2);
}
function decenasab(){
  if (a66cim3.length>='9') {
     a66cim3=[];
  }else {
    a66cim3.push('<img src="img/i3_p69_act66.jpg" style="mix-blend-mode: multiply;" class="img-responsive" alt="">');
     
  }
  $('#a66im3').html(a66cim3);
}
function unidadesab(){
  if (a66cim4.length>='9') {
    a66cim4=[];
  }else {
    a66cim4.push('<img src="img/i4_p69_act66.jpg" style="mix-blend-mode: multiply;" class="img-responsive" alt="">');  
  }
  
  $('#a66im4').html(a66cim4);
}

function decenasbase1(){
  if (a66cim11.length>='9') {
     a66cim11=[];
  }else {
    a66cim11.push('<img src="img/i1_p69_act66.jpg" style="mix-blend-mode: multiply;" class="img-responsive" alt="">');
     
  }
  $('#a66im11').html(a66cim11);
}
function unidadesbase1(){
  if (a66cim12.length>='9') {
    a66cim12=[];
  }else {
    a66cim12.push('<img src="img/i2_p69_act66.jpg" style="mix-blend-mode: multiply;" class="img-responsive" alt="">');  
  }
  
  $('#a66im12').html(a66cim12);
}
function decenasab1(){
  if (a66cim13.length>='9') {
     a66cim13=[];
  }else {
    a66cim13.push('<img src="img/i3_p69_act66.jpg" style="mix-blend-mode: multiply;" class="img-responsive" alt="">');
     
  }
  $('#a66im13').html(a66cim13);
}
function unidadesab1(){
  if (a66cim14.length>='9') {
    a66cim14=[];
  }else {
    a66cim14.push('<img src="img/i4_p69_act66.jpg" style="mix-blend-mode: multiply;" class="img-responsive" alt="">');  
  }
  
  $('#a66im14').html(a66cim14);
}
function f_iniciar() {
    var numero = parseInt((Math.random() * 90) + 10);
    var numero2=numero.toString().split('');
    var numero1 = parseInt((Math.random() * 90) + 10);
    var numero3=numero1.toString().split('');
    $('#numero').html(numero);
    $('#numero1').html(numero1);
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      if (a66cim1.length==numero2[0]) {
        cor++;
        f_ok($('#a66im1'));
      }else {
        inc++;
        f_no($('#a66im1'));
      }
      if (a66cim2.length==numero2[1]) {
        cor++;
        f_ok($('#a66im2'));
      }else {
        inc++;
        f_no($('#a66im2'));
      }
      if (a66cim3.length==numero2[0]) {
        cor++;
        f_ok($('#a66im3'));
      }else {
        inc++;
        f_no($('#a66im3'));
      }
      if (a66cim4.length==numero2[1]) {
        cor++;
        f_ok($('#a66im4'));
      }else {
        inc++;
        f_no($('#a66im4'));
      }
      if (a66cim11.length==numero3[0]) {
        cor++;
        f_ok($('#a66im11'));
      }else {
        inc++;
        f_no($('#a66im11'));
      }
      if (a66cim12.length==numero3[1]) {
        cor++;
        f_ok($('#a66im12'));
      }else {
        inc++;
        f_no($('#a66im12'));
      }
      if (a66cim13.length==numero3[0]) {
        cor++;
        f_ok($('#a66im13'));
      }else {
        inc++;
        f_no($('#a66im13'));
      }
      if (a66cim14.length==numero3[1]) {
        cor++;
        f_ok($('#a66im14'));
      }else {
        inc++;
        f_no($('#a66im14'));
      }
      Calculo_nota();
   }
}