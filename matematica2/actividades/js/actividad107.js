var n1=0,sum_total=0,cont=0,ejer=1,itemsT=11,cor=0,inc=0,str='',calificacion=10;
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
        var a107dcon1=$('#a107dcon1').val();
        var a107dcon2=$('#a107dcon2').val();
        var a107dcon3=$('#a107dcon3').val().toLowerCase();
        if (a107dcon1=='15') {
          cor++
          f_ok($('#a107dcon1'));
        }else{
          inc++;
          f_no($('#a107dcon1'));
        }
        if (a107dcon2=='4') {
          cor++
          f_ok($('#a107dcon2'));
        }else{
          inc++;
          f_no($('#a107dcon2'));
        }
        if (a107dcon3=='suma' || a107dcon3=='adición') {
          cor++
          f_ok($('#a107dcon3'));
        }else{
          inc++;
          f_no($('#a107dcon3'));
        }

        var a107dcon4=$('#a107dcon4').val();
        var a107dcon5=$('#a107dcon5').val();
        var a107dcon6=$('#a107dcon6').val();
        var a107dcon7=$('#a107dcon7').val();
        var a107dcon8=$('#a107dcon8').val();
        var a107dcon9=$('#a107dcon9').val();
        var a107dcon10=$('#a107dcon10').val();
        if (a107dcon4=='1') {
          cor++
          f_ok($('#a107dcon4'));
        }else{
          inc++;
          f_no($('#a107dcon4'));
        }
        if (a107dcon5=='5') {
          cor++
          f_ok($('#a107dcon5'));
        }else{
          inc++;
          f_no($('#a107dcon5'));
        }
        if (a107dcon6==0) {
          cor++
          f_ok($('#a107dcon6'));
        }else{
          inc++;
          f_no($('#a107dcon6'));
        }
        if (a107dcon7=='4') {
          cor++
          f_ok($('#a107dcon7'));
        }else{
          inc++;
          f_no($('#a107dcon7'));
        }
        if (a107dcon8=='1') {
          cor++
          f_ok($('#a107dcon8'));
        }else{
          inc++;
          f_no($('#a107dcon8'));
        }
        if (a107dcon9=='9') {
          cor++
          f_ok($('#a107dcon9'));
        }else{
          inc++;
          f_no($('#a107dcon9'));
        }
        if (a107dcon10=='19') {
          cor++
          f_ok($('#a107dcon10'));
        }else{
          inc++;
          f_no($('#a107dcon10'));
        }

        var a107dcon11=$('#a107dcon11').val();
        if (a107dcon11=='19') {
          cor++
          f_ok($('#a107dcon11'));
        }else{
          inc++;
          f_no($('#a107dcon11'));
        }
        Calculo_nota();
   }
}