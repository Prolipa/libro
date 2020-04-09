var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
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
      var a86dcon1=$('#a86dcon1').val();
      var a86dcon2=$('#a86dcon2').val();
      var a86dcon3=$('#a86dcon3').val();
      var a86dcon4=$('#a86dcon4').val();
      var a86dcon5=$('#a86dcon5').val();
      
      if (a86dcon1=='1') {
        cor++;
        f_ok($('#a86dcon1'));
      }else {
        inc++;
        f_no($('#a86dcon1'));
      }
      if (a86dcon2=='3') {
        cor++;
        f_ok($('#a86dcon2'));
      }else {
        inc++;
        f_no($('#a86dcon2'));
      }
      if (a86dcon3=='3') {
        cor++;
        f_ok($('#a86dcon3'));
      }else {
        inc++;
        f_no($('#a86dcon3'));
      }
      if (a86dcon4=='8') {
        cor++;
        f_ok($('#a86dcon4'));
      }else {
        inc++;
        f_no($('#a86dcon4'));
      }
      if (a86dcon5=='15') {
        cor++;
        f_ok($('#a86dcon5'));
      }else {
        inc++;
        f_no($('#a86dcon5'));
      }
      var a86tc1=$('#a86tc1').val().split('');
      var a86tc2=$('#a86tc2').val().split('');
      var a86tc3=$('#a86tc3').val().split('');
      var a86tc4=$('#a86tc4').val().split('');
      var a86tc5=$('#a86tc5').val().split('');
      if (a86tc1.length=='1') {
        cor++;
        f_ok($('#a86tc1'));
      }else {
        inc++;
        f_no($('#a86tc1'));
      }
      if (a86tc2.length=='3') {
        cor++;
        f_ok($('#a86tc2'));
      }else {
        inc++;
        f_no($('#a86tc2'));
      }
      if (a86tc3.length=='3') {
        cor++;
        f_ok($('#a86tc3'));
      }else {
        inc++;
        f_no($('#a86tc3'));
      }
      if (a86tc4.length=='8') {
        cor++;
        f_ok($('#a86tc4'));
      }else {
        inc++;
        f_no($('#a86tc4'));
      }
      if (a86tc5.length=='15') {
        cor++;
        f_ok($('#a86tc5'));
      }else {
        inc++;
        f_no($('#a86tc5'));
      }
      Calculo_nota();
   }
}