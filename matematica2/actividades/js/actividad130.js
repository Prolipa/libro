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
                     
        var a130dcon7=$('#a130dcon7').val();
        var a130dcon8=$('#a130dcon8').val();
        var a130dcon9=$('#a130dcon9').val();
        var a130dcon6=$('#a130dcon6').val();
        if (a130dcon6=='8') {
          cor++;
          f_ok($('#a130dcon6'));
        }else{
          inc++;
          f_no($('#a130dcon6'));
        }
        if (a130dcon7=='verde' || a130dcon7=='verde.') {
          cor++;
          f_ok($('#a130dcon7'));
        }else{
          inc++;
          f_no($('#a130dcon7'));
        }
        if (a130dcon8=='naranja.' || a130dcon8=='naranja') {
          cor++;
          f_ok($('#a130dcon8'));
        }else{
          inc++;
          f_no($('#a130dcon8'));
        }
        if (a130dcon9=='9') {
          cor++;
          f_ok($('#a130dcon9'));
        }else{
          inc++;
          f_no($('#a130dcon9'));
        }
        Calculo_nota();
   }
}