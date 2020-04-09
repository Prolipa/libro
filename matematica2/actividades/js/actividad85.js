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
      var a85dcon1=$('#a85dcon1').val();
      var a85dcon2=$('#a85dcon2').val();
      var a85dcon3=$('#a85dcon3').val().toLowerCase();
      var a85dcon4=$('#a85dcon4').val();
      var a85dcon5=$('#a85dcon5').val();
      
      if (a85dcon1=='10') {
        cor++;
        f_ok($('#a85dcon1'));
      }else {
        inc++;
        f_no($('#a85dcon1'));
      }
      if (a85dcon2=='17') {
        cor++;
        f_ok($('#a85dcon2'));
      }else {
        inc++;
        f_no($('#a85dcon2'));
      }
      if (a85dcon3=='decenas') {
        cor++;
        f_ok($('#a85dcon3'));
      }else {
        inc++;
        f_no($('#a85dcon3'));
      }
      if (a85dcon4=='20') {
        cor++;
        f_ok($('#a85dcon4'));
      }else {
        inc++;
        f_no($('#a85dcon4'));
      }
      if (a85dcon5=='23') {
        cor++;
        f_ok($('#a85dcon5'));
      }else {
        inc++;
        f_no($('#a85dcon5'));
      }
      
      Calculo_nota();
   }
}