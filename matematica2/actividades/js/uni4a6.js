var n1=0,sum_total=0,cont=0,ejer=1,itemsT=3,cor=0,inc=0,str='',calificacion=10;
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
        var p1dcon1=$('#p1dcon1').val().toLowerCase();
        var p1dcon2=$('#p1dcon2').val().toLowerCase();
        var p1dcon3=$('#p1dcon3').val().toLowerCase();
        
        if (p1dcon1=='10') {
          cor++;
          f_ok($('#p1dcon1'));
        }else{
          inc++;
          f_no($('#p1dcon1'));
        }
        if (p1dcon2=='5') {
          cor++;
          f_ok($('#p1dcon2'));
        }else{
          inc++;
          f_no($('#p1dcon2'));
        }
        if (p1dcon3=='sustracción' || p1dcon3=='resta' || p1dcon3=='una sustracción' || p1dcon3=='una resta' || p1dcon3=='realiza una resta' || p1dcon3=='realiza una sustracción') {
          cor++;
          f_ok($('#p1dcon3'));
        }else{
          inc++;
          f_no($('#p1dcon3'));
        }
        
        Calculo_nota();
   }
}