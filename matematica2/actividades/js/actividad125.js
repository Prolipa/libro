var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 4)
});
 function f_iniciar() {
  
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a125dcon1=$('#a125dcon1').val().toLowerCase();
        var a125dcon2=$('#a125dcon2').val().toLowerCase();
        var a125dcon3=$('#a125dcon3').val();
        if (a125dcon1=='regla') {
          cor++;
          cor++;
          f_ok($('#a125dcon1'));
        }else{
          inc++;
          inc++;
          f_no($('#a125dcon1'));
        }
        if (a125dcon2=='centímetros') {
          cor++;
          cor++;
          f_ok($('#a125dcon2'));
        }else{
          inc++;
          inc++;
          f_no($('#a125dcon2'));
        }
        if (a125dcon3=='10') {
          cor++;
          cor++;
          f_ok($('#a125dcon3'));
        }else{
          inc++;
          inc++;
          f_no($('#a125dcon3'));
        }
        var nota1_1=$('#nota1_1').val();
        if (!nota1_1) {
          inc=inc+4;
          f_no($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }else{
          cor=cor+parseFloat(nota1_1);
          inc=inc+(4-parseFloat(nota1_1));
          f_ok($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }
        Calculo_nota();
   }
}