var n1=0,sum_total=0,cont=0,ejer=1,itemsT=6,cor=0,inc=0,str='',calificacion=10;
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
      
      var a62dcon1=$('#a62dcon1').val();
      var a62dcon3=$('#a62dcon3').val();
      var a62dcon4=$('#a62dcon4').val();
      var a62dcon5=$('#a62dcon5').val();
      var a62dcon6=$('#a62dcon6').val();
      var a62dcon7=$('#a62dcon7').val();
      if (a62dcon1=='2') {
        cor++;
        f_ok($('#a62dcon1'));
      }else {
        inc++;
        f_no($('#a62dcon1'));
      }
      if (a62dcon3=='10') {
        cor++;
        f_ok($('#a62dcon3'));
      }else {
        inc++;
        f_no($('#a62dcon3'));
      }
      if (a62dcon4=='20') {
        cor++;
        f_ok($('#a62dcon4'));
      }else {
        inc++;
        f_no($('#a62dcon4'));
      }
      if (a62dcon5=='1') {
        cor++;
        f_ok($('#a62dcon5'));
      }else {
        inc++;
        f_no($('#a62dcon5'));
      }
      if (a62dcon6=='1') {
        cor++;
        f_ok($('#a62dcon6'));
      }else {
        inc++;
        f_no($('#a62dcon6'));
      }
      if (a62dcon7=='2') {
        cor++;
        f_ok($('#a62dcon7'));
      }else {
        inc++;
        f_no($('#a62dcon7'));
      }
      Calculo_nota();
   }
}