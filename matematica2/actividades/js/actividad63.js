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
      
      
      var a63dcon3=$('#a63dcon3').val();
      var a63dcon2=$('#a63dcon2').val();
      
      if (a63dcon3=='27') {
        cor++;
        f_ok($('#a63dcon3'));
      }else {
        inc++;
        f_no($('#a63dcon3'));
      }
      if (a63dcon2=='21') {
        cor++;
        f_ok($('#a63dcon2'));
      }else {
        inc++;
        f_no($('#a63dcon2'));
      }
      
      Calculo_nota();
   }
}