var n1=0,sum_total=0,cont=0,ejer=1,itemsT=6,cor=0,inc=0,str='',calificacion=10;
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
        var a104dcon1=$('#a104dcon1').val().toLowerCase();
        var a104dcon2=$('#a104dcon2').val().toLowerCase();
        var a104dcon3=$('#a104dcon3').val().toLowerCase();
        var a104dcon4=$('#a104dcon4').val().toLowerCase();
        var a104dcon5=$('#a104dcon5').val().toLowerCase();
        var a104dcon6=$('#a104dcon6').val().toLowerCase();
        
        if (a104dcon1=='sumando') {
          cor++;
          f_ok($('#a104dcon1'));
        }else{
          inc++;
          f_no($('#a104dcon1'));
        }
        if (a104dcon2=='sumando') {
          cor++;
          f_ok($('#a104dcon2'));
        }else{
          inc++;
          f_no($('#a104dcon2'));
        }
        if (a104dcon3=='suma' || a104dcon3=='total' || a104dcon3=='suma o total') {
          cor++;
          f_ok($('#a104dcon3'));
        }else{
          inc++;
          f_no($('#a104dcon3'));
        }
        
        if (a104dcon4=='minuendo') {
          cor++;
          f_ok($('#a104dcon4'));
        }else{
          inc++;
          f_no($('#a104dcon4'));
        }
        if (a104dcon5=='sustraendo') {
          cor++;
          f_ok($('#a104dcon5'));
        }else{
          inc++;
          f_no($('#a104dcon5'));
        }
        if (a104dcon6=='diferencia') {
          cor++;
          f_ok($('#a104dcon6'));
        }else{
          inc++;
          f_no($('#a104dcon6'));
        }
        Calculo_nota();
   }
}