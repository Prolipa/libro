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
        var a111dcon1=$('#a111dcon1').val();
        var a111dcon2=$('#a111dcon2').val();
        var a111dcon3=$('#a111dcon3').val().toLowerCase();
        if (a111dcon1=='18') {
          cor++
          f_ok($('#a111dcon1'));
        }else{
          inc++;
          f_no($('#a111dcon1'));
        }
        if (a111dcon2=='6') {
          cor++
          f_ok($('#a111dcon2'));
        }else{
          inc++;
          f_no($('#a111dcon2'));
        }
        if (a111dcon3=='resta' || a111dcon3=='sustracción') {
          cor++
          f_ok($('#a111dcon3'));
        }else{
          inc++;
          f_no($('#a111dcon3'));
        }

        
        Calculo_nota();
   }
}