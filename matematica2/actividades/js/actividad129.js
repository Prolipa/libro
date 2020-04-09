var n1=0,sum_total=0,cont=0,ejer=1,itemsT=15,cor=0,inc=0,str='',calificacion=10;
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
        
        var a129tc2=$('#a129tc2').val().split('');
        var a129tc3=$('#a129tc3').val().split('');
        var a129tc4=$('#a129tc4').val().split('');
        var a129tc5=$('#a129tc5').val().split('');
        if (a129tc2.length=='12') {
          cor++;
          f_ok($('#a129tc2'));
        }else{
          inc++;
          f_no($('#a129tc2'));
        }
        if (a129tc3.length=='2') {
          cor++;
          f_ok($('#a129tc3'));
        }else{
          inc++;
          f_no($('#a129tc3'));
        }
        if (a129tc4.length=='6') {
          cor++;
          f_ok($('#a129tc4'));
        }else{
          inc++;
          f_no($('#a129tc4'));
        }
        if (a129tc5.length=='8') {
          cor++;
          f_ok($('#a129tc5'));
        }else{
          inc++;
          f_no($('#a129tc5'));
        }
        
        var a129dcon2=$('#a129dcon2').val();
        var a129dcon3=$('#a129dcon3').val();
        var a129dcon4=$('#a129dcon4').val();
        var a129dcon5=$('#a129dcon5').val();
                
        if (a129dcon2=='12') {
          cor++;
          f_ok($('#a129dcon2'));
        }else{
          inc++;
          f_no($('#a129dcon2'));
        }
        if (a129dcon3=='2') {
          cor++;
          f_ok($('#a129dcon3'));
        }else{
          inc++;
          f_no($('#a129dcon3'));
        }
        if (a129dcon4=='6') {
          cor++;
          f_ok($('#a129dcon4'));
        }else{
          inc++;
          f_no($('#a129dcon4'));
        }
        if (a129dcon5=='8') {
          cor++;
          f_ok($('#a129dcon5'));
        }else{
          inc++;
          f_no($('#a129dcon5'));
        }

        var a129dcon6=$('#a129dcon6').val();
        var a129dcon7=$('#a129dcon7').val();
        var a129dcon8=$('#a129dcon8').val();
        var a129dcon9=$('#a129dcon9').val();
        var a129dcon10=$('#a129dcon10').val();
        var a129dcon11=$('#a129dcon11').val();
        var a129dcon12=$('#a129dcon12').val();
        if (a129dcon6=='los patos' || a129dcon6=='patos') {
          cor++;
          f_ok($('#a129dcon6'));
        }else{
          inc++;
          f_no($('#a129dcon6'));
        }
        if (a129dcon7=='8') {
          cor++;
          f_ok($('#a129dcon7'));
        }else{
          inc++;
          f_no($('#a129dcon7'));
        }
        if (a129dcon8=='4') {
          cor++;
          f_ok($('#a129dcon8'));
        }else{
          inc++;
          f_no($('#a129dcon8'));
        }
        if (a129dcon9=='6') {
          cor++;
          f_ok($('#a129dcon9'));
        }else{
          inc++;
          f_no($('#a129dcon9'));
        }
        if (a129dcon10=='10') {
          cor++;
          f_ok($('#a129dcon10'));
        }else{
          inc++;
          f_no($('#a129dcon10'));
        }
        if (a129dcon11=='las vacas' || a129dcon11=='vacas') {
          cor++;
          f_ok($('#a129dcon11'));
        }else{
          inc++;
          f_no($('#a129dcon11'));
        }
        if (a129dcon12=='5') {
          cor++;
          f_ok($('#a129dcon12'));
        }else{
          inc++;
          f_no($('#a129dcon12'));
        }
        Calculo_nota();
   }
}