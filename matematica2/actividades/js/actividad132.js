var n1=0,sum_total=0,cont=0,ejer=1,itemsT=13,cor=0,inc=0,str='',calificacion=10;
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
        var a131tc2=$('#a131tc2').val().split('');
        var a131tc5=$('#a131tc5').val().split('');
              
        if (a131tc2.length=='12') {
          cor++;
          f_ok($('#a131tc2'));
        }else{
          inc++;
          f_no($('#a131tc2'));
        }
        if (a131tc5.length=='8') {
          cor++;
          f_ok($('#a131tc5'));
        }else{
          inc++;
          f_no($('#a131tc5'));
        }
        
        
        
        var a131dcon3=$('#a131dcon3').val();
        var a131dcon4=$('#a131dcon4').val();
        var a131dcon6=$('#a131dcon6').val();
        
        if (a131dcon3=='5') {
          cor++;
          f_ok($('#a131dcon3'));
        }else{
          inc++;
          f_no($('#a131dcon3'));
        }
        if (a131dcon4=='6') {
          cor++;
          f_ok($('#a131dcon4'));
        }else{
          inc++;
          f_no($('#a131dcon4'));
        }
        if (a131dcon6=='3') {
          cor++;
          f_ok($('#a131dcon6'));
        }else{
          inc++;
          f_no($('#a131dcon6'));
        }

        var a131tc7=$('#a131tc7').val();
        var a131tc8=$('#a131tc8').val();
        var a131tc9=$('#a131tc9').val();
        var a131tc10=$('#a131tc10').val();
        var a131tc11=$('#a131tc11').val();
        var a131vec1=['muñecas','carros','las muñecas','los carros'];
        if (a131tc7=='los carros' || a131tc7=='carros') {
          cor++;
          f_ok($('#a131tc7'));
        }else{
          inc++;
          f_no($('#a131tc7'));
        }
        if (a131tc8=='los bingos' || a131tc8=='bingos') {
          cor++;
          f_ok($('#a131tc8'));
        }else{
          inc++;
          f_no($('#a131tc8'));
        }
        var a131cont1=0;
        for (var i =0; i < a131vec1.length; i++) {
          if (a131tc9==a131vec1[i]) {
            a131cont1++;
            a131vec1[i]=a131cont1;
          }
        }
        if (a131cont1=='1') {
          cor++;
          f_ok($('#a131tc9'));
        }else{
          inc++;
          f_no($('#a131tc9'));
        }
        var a131cont2=0;
        for (var i =0; i < a131vec1.length; i++) {
          if (a131tc10==a131vec1[i]) {
            a131cont2++;
            a131vec1[i]=a131cont2;
          }
        }
        if (a131cont2=='1') {
          cor++;
          f_ok($('#a131tc10'));
        }else{
          inc++;
          f_no($('#a131tc10'));
        }
        if (a131tc11=='los rompecabezas' || a131tc11=='rompecabezas') {
          cor++;
          f_ok($('#a131tc11'));
        }else{
          inc++;
          f_no($('#a131tc11'));
        }

        var a131dcon7=$('#a131dcon7').val();
        var a131dcon8=$('#a131dcon8').val();
        var a131dcon9=$('#a131dcon9').val();
        if (a131dcon7=='22') {
          cor++;
          f_ok($('#a131dcon7'));
        }else{
          inc++;
          f_no($('#a131dcon7'));
        }
        if (a131dcon8=='2') {
          cor++;
          f_ok($('#a131dcon8'));
        }else{
          inc++;
          f_no($('#a131dcon8'));
        }
        if (a131dcon9=='14') {
          cor++;
          f_ok($('#a131dcon9'));
        }else{
          inc++;
          f_no($('#a131dcon9'));
        }
        Calculo_nota();
   }
}