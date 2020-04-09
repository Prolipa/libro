var n1=0,sum_total=0,cont=0,ejer=1,itemsT=8,cor=0,inc=0,str='',calificacion=10;
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
        var a131tc1=$('#a131tc1').val().split('');
        var a131tc2=$('#a131tc2').val().split('');
        var a131tc3=$('#a131tc3').val().split('');
        var a131tc4=$('#a131tc4').val().split('');
        
        if (a131tc2.length=='5') {
          cor++;
          f_ok($('#a131tc2'));
        }else{
          inc++;
          f_no($('#a131tc2'));
        }
        if (a131tc3.length>'5') {
          cor++;
          f_ok($('#a131tc3'));
        }else{
          inc++;
          f_no($('#a131tc3'));
        }
        if (a131tc4.length=='4') {
          cor++;
          f_ok($('#a131tc4'));
        }else{
          inc++;
          f_no($('#a131tc4'));
        }
        if (a131tc1.length=='2') {
          cor++;
          f_ok($('#a131tc1'));
        }else{
          inc++;
          f_no($('#a131tc1'));
        }
        
        var a131dcon2=$('#a131dcon2').val();
        var a131dcon3=$('#a131dcon3').val();
        var a131dcon4=$('#a131dcon4').val();
        var a131dcon1=$('#a131dcon1').val();
                
        if (a131dcon2=='5') {
          cor++;
          f_ok($('#a131dcon2'));
        }else{
          inc++;
          f_no($('#a131dcon2'));
        }
        if (a131dcon3>'5') {
          cor++;
          f_ok($('#a131dcon3'));
        }else{
          inc++;
          f_no($('#a131dcon3'));
        }
        if (a131dcon4=='4') {
          cor++;
          f_ok($('#a131dcon4'));
        }else{
          inc++;
          f_no($('#a131dcon4'));
        }
        if (a131dcon1=='2') {
          cor++;
          f_ok($('#a131dcon1'));
        }else{
          inc++;
          f_no($('#a131dcon1'));
        }

        
        Calculo_nota();
   }
}