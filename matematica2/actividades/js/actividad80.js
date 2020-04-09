var n1=0,sum_total=0,cont=0,ejer=1,itemsT=2,cor=0,inc=0,str='',calificacion=10;
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
      var a80dcon1=$('#a80dcon1').val();
      var a80dcon2=$('#a80dcon2').val();
      
      if (a80dcon1=='29') {
        cor++;
        f_ok($('#a80dcon1'));
      }else {
        inc++;
        f_no($('#a80dcon1'));
      }
      if (a80dcon2=='8') {
        cor++;
        f_ok($('#a80dcon2'));
      }else {
        inc++;
        f_no($('#a80dcon2'));
      }
      Calculo_nota();
   }
}