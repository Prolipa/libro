var n1=0,sum_total=0,cont=0,ejer=1,itemsT=4,cor=0,inc=0,str='',calificacion=10;
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
        var imag1 =$('#imag1 > img').attr('alt');
        var imag2 =$('#imag2 > img').attr('alt');
        var imag3 =$('#imag3 > img').attr('alt');
        var imag4 =$('#imag4 > img').attr('alt');
        if (imag1=='2') {
          cor++;
          f_ok($('#imag1'));
        }else {
          inc++;
          f_no($('#imag1'));
        }
        if (imag2=='3') {
          cor++;
          f_ok($('#imag2'));
        }else {
          inc++;
          f_no($('#imag2'));
        }
        if (imag3=='1') {
          cor++;
          f_ok($('#imag3'));
        }else {
          inc++;
          f_no($('#imag3'));
        }
        if (imag4=='2') {
          cor++;
          f_ok($('#imag4'));
        }else {
          inc++;
          f_no($('#imag4'));
        }  
        Calculo_nota();
   }
}