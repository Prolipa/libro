var n1=0,sum_total=0,cont=0,ejer=1,itemsT=3,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 5, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 5)
});
 function f_iniciar() {
  
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a118dcon1=$('#a118dcon1').val().toLowerCase();
        var a118dcon2=$('#a118dcon2').val().toLowerCase();
        var a118dcon3=$('#a118dcon3').val().toLowerCase();
        var a118vec1=['rectángulos','cuadrados','cuadrado','rectángulo'];
        var a118vec2=['rectángulos','rectángulo'];
        var a118cont1=0;
        for (var i =0; i < a118vec1.length; i++) {
          if (a118dcon1==a118vec1[i]) {
            a118cont1++;
            a118vec1[i]=a118cont1;
            
          }  
        }
        if (a118cont1=='1') {
          cor++;
          f_ok($('#a118dcon1'));
        }else{
          inc++;
          f_no($('#a118dcon1'));
        }
        var a118cont2=0;
        for (var i =0; i < a118vec1.length; i++) {
          if (a118dcon2==a118vec1[i]) {
            a118cont2++;
            a118vec1[i]=a118cont2;
            
          }  
        }
        if (a118cont2=='1') {
          cor++;
          f_ok($('#a118dcon2'));
        }else{
          inc++;
          f_no($('#a118dcon2'));
        }
        var a118cont3=0;
        for (var i =0; i < a118vec2.length; i++) {
          if (a118dcon3==a118vec2[i]) {
            a118cont3++;
            a118vec2[i]=a118cont3;
            
          }  
        }
        if (a118cont3=='1') {
          cor++;
          f_ok($('#a118dcon3'));
        }else{
          inc++;
          f_no($('#a118dcon3'));
        }
        Calculo_nota();
   }
}