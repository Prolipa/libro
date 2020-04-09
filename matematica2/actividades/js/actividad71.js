var n1=0,sum_total=0,cont=0,ejer=1,itemsT=8,cor=0,inc=0,str='',calificacion=10;
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
      var a71dcon1=$('#a71dcon1').val();
      var a71dcon2=$('#a71dcon2').val();
      var a71dcon3=$('#a71dcon3').val();
      var a71dcon4=$('#a71dcon4').val().toLowerCase();
      var a71dcon5=$('#a71dcon5').val().toLowerCase();
      var a71dcon6=$('#a71dcon6').val();
      var a71dcon7=$('#a71dcon7').val();
      var a71dcon8=$('#a71dcon8').val();
      if (a71dcon1=='21') {
        cor++;
        f_ok($('#a71dcon1'));
      }else {
        inc++;
        f_no($('#a71dcon1'));
      }
      if (a71dcon2=='25') {
        cor++;
        f_ok($('#a71dcon2'));
      }else {
        inc++;
        f_no($('#a71dcon2'));
      }
      if (a71dcon3=='28') {
        cor++;
        f_ok($('#a71dcon3'));
      }else {
        inc++;
        f_no($('#a71dcon3'));
      }
      if (a71dcon4=='salomé') {
        cor++;
        f_ok($('#a71dcon4'));
      }else {
        inc++;
        f_no($('#a71dcon4'));
      }
      if (a71dcon5=='lorena') {
        cor++;
        f_ok($('#a71dcon5'));
      }else {
        inc++;
        f_no($('#a71dcon5'));
      }
      if (a71dcon6=='21') {
        cor++;
        f_ok($('#a71dcon6'));
      }else {
        inc++;
        f_no($('#a71dcon6'));
      }
      if (a71dcon7=='25') {
        cor++;
        f_ok($('#a71dcon7'));
      }else {
        inc++;
        f_no($('#a71dcon7'));
      }
      if (a71dcon8=='28') {
        cor++;
        f_ok($('#a71dcon8'));
      }else {
        inc++;
        f_no($('#a71dcon8'));
      }
      Calculo_nota();
   }
}