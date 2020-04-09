var n1=0,sum_total=0,cont=0,ejer=1,itemsT=5,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 3)
});
 function f_iniciar() {

   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a70dcon1=$('#a70dcon1').val();
      var a70dcon2=$('#a70dcon2').val();
      if (a70dcon1=='2') {
        cor++;
        f_ok($('#a70dcon1'));
      }else {
        inc++;
        f_no($('#a70dcon1'));
      }
      if (a70dcon2=='2') {
        cor++;
        f_ok($('#a70dcon2'));
      }else {
        inc++;
        f_no($('#a70dcon2'));
      }
      var a70n1=$('#nota1_1').val();
      if (!a70n1) {
        a70n1=0;
        f_no($('#nota1_1'));
      }else {
        a70n1;
        f_ok($('#nota1_1'));
      }
      cor=cor+parseFloat(a70n1);
      inc=inc+(3-parseFloat(a70n1));
      Calculo_nota();
   }
}