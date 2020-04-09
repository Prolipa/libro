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
      var a73dcon1=$('#a73dcon1').val().toLowerCase();
      var a73dcon2=$('#a73dcon2').val();
      var a73dcon3=$('#a73dcon3').val().toLowerCase();
      var a73dcon4=$('#a73dcon4').val();
      var a73dcon5=$('#a73dcon5').val().toLowerCase();
      var a73dcon6=$('#a73dcon6').val().toLowerCase();
      var a73dcon7=$('#a73dcon7').val().toLowerCase();
      if (a73dcon1=='mayor') {
        cor++;
        f_ok($('#a73dcon1'));
      }else {
        inc++;
        f_no($('#a73dcon1'));
      }
      if (a73dcon2=='<') {
        cor++;
        f_ok($('#a73dcon2'));
      }else {
        inc++;
        f_no($('#a73dcon2'));
      }
      if (a73dcon3=='menor') {
        cor++;
        f_ok($('#a73dcon3'));
      }else {
        inc++;
        f_no($('#a73dcon3'));
      }
      if (a73dcon4=='<') {
        cor++;
        f_ok($('#a73dcon4'));
      }else {
        inc++;
        f_no($('#a73dcon4'));
      }
      if (a73dcon5=='menor') {
        cor++;
        f_ok($('#a73dcon5'));
      }else {
        inc++;
        f_no($('#a73dcon5'));
      }
      if (a73dcon6=='ronald') {
        cor++;
        f_ok($('#a73dcon6'));
      }else {
        inc++;
        f_no($('#a73dcon6'));
      }
      if (a73dcon7=='agustín') {
        cor++;
        f_ok($('#a73dcon7'));
      }else {
        inc++;
        f_no($('#a73dcon7'));
      }
      Calculo_nota();
   }
}