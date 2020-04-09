var n1=0,sum_total=0,cont=0,ejer=1,itemsT=5,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}

 function f_iniciar() {
    
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a81in1=$('#a81in1').val();
      var a81in2=$('#a81in2').val();
      var a81in3=$('#a81in3').val();
      var a81in4=$('#a81in4').val();
      var a81in5=$('#a81in5').val();
      if (a81in1=='sujeto') {
        cor++;
        f_ok($('#a81in1'));
      }else {
        inc++;
        f_no($('#a81in1'));
      }
      if (a81in2=='predicado') {
        cor++;
        f_ok($('#a81in2'));
      }else {
        inc++;
        f_no($('#a81in2'));
      }
      if (a81in3=='dos') {
        cor++;
        f_ok($('#a81in3'));
      }else {
        inc++;
        f_no($('#a81in3'));
      }
      if (a81in4=='los') {
        cor++;
        f_ok($('#a81in4'));
      }else {
        inc++;
        f_no($('#a81in4'));
      }
      if (a81in5=='pequeños') {
        cor++;
        f_ok($('#a81in5'));
      }else {
        inc++;
        f_no($('#a81in5'));
      }
      Calculo_nota();
   }
}