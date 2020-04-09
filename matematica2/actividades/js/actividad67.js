var n1=0,sum_total=0,cont=0,ejer=1,itemsT=7,cor=0,inc=0,str='',calificacion=10;
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
      var a67dcon1=$('#a67dcon1').val();
      var a67dcon2=$('#a67dcon2').val();
      var a67dcon3=$('#a67dcon3').val();
      var a67dcon4=$('#a67dcon4').val();
      var a67dcon5=$('#a67dcon5').val();
      var a67dcon6=$('#a67dcon6').val();
      var a67dcon7=$('#a67dcon7').val();
      if (a67dcon1==12) {
        cor++;
        f_ok($('#a67dcon1'));
      }else {
        inc++;
        f_no($('#a67dcon1'));
      }
      if (a67dcon2==18) {
        cor++;
        f_ok($('#a67dcon2'));
      }else {
        inc++;
        f_no($('#a67dcon2'));
      }
      if (a67dcon3==24) {
        cor++;
        f_ok($('#a67dcon3'));
      }else {
        inc++;
        f_no($('#a67dcon3'));
      }
      if (a67dcon4==18) {
        cor++;
        f_ok($('#a67dcon4'));
      }else {
        inc++;
        f_no($('#a67dcon4'));
      }
      if (a67dcon5==18) {
        cor++;
        f_ok($('#a67dcon5'));
      }else {
        inc++;
        f_no($('#a67dcon5'));
      }
      if (a67dcon6==24) {
        cor++;
        f_ok($('#a67dcon6'));
      }else {
        inc++;
        f_no($('#a67dcon6'));
      }
      if (a67dcon7==24) {
        cor++;
        f_ok($('#a67dcon7'));
      }else {
        inc++;
        f_no($('#a67dcon7'));
      }
      Calculo_nota();
   }
}