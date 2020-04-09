var n1=0,sum_total=0,cont=0,ejer=1,itemsT=2,cor=0,inc=0,str='',calificacion=10;
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
        var a126dcon1=$('#a126dcon1').val();
        var a126dcon2=$('#a126dcon2').val();
        
        if (a126dcon1=='7') {
          cor++;
          f_ok($('#a126dcon1'));
        }else{
          inc++;
          f_no($('#a126dcon1'));
        }
        if (a126dcon2=='12') {
          cor++;
          f_ok($('#a126dcon2'));
        }else{
          inc++;
          f_no($('#a126dcon2'));
        }
        Calculo_nota();
   }
}