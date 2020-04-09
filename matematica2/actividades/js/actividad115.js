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
        var a115dcon1=$('#a115dcon1').val().toLowerCase();
        var a115dcon2=$('#a115dcon2').val().toLowerCase();
        var a115dcon3=$('#a115dcon3').val().toLowerCase();
        var a115vec1=['rectángulos','cuadrados','círculo','círculos','cuadrado','rectángulo'];
        var a115cont1=0;
        for (var i =0; i < a115vec1.length; i++) {
          if (a115dcon1==a115vec1[i]) {
            a115cont1++;
            a115vec1[i]=a115cont1;
            
          }  
        }
        if (a115cont1=='1') {
          cor++;
          f_ok($('#a115dcon1'));
        }else{
          inc++;
          f_no($('#a115dcon1'));
        }
        var a115cont2=0;
        for (var i =0; i < a115vec1.length; i++) {
          if (a115dcon2==a115vec1[i]) {
            a115cont2++;
            a115vec1[i]=a115cont2;
            
          }  
        }
        if (a115cont2=='1') {
          cor++;
          f_ok($('#a115dcon2'));
        }else{
          inc++;
          f_no($('#a115dcon2'));
        }
        var a115cont3=0;
        for (var i =0; i < a115vec1.length; i++) {
          if (a115dcon3==a115vec1[i]) {
            a115cont3++;
            a115vec1[i]=a115cont3;
            
          }  
        }
        if (a115cont3=='1') {
          cor++;
          f_ok($('#a115dcon3'));
        }else{
          inc++;
          f_no($('#a115dcon3'));
        }
        var a115dcon4=$('#a115dcon4').val().toLowerCase();
        var a115dcon5=$('#a115dcon5').val().toLowerCase();
        var a115vec2=['rectas','curvas','curva','recta'];
        var a115cont4=0;
        for (var i =0; i < a115vec2.length; i++) {
          if (a115dcon4==a115vec2[i]) {
            a115cont4++;
            a115vec2[i]=a115cont4;
            
          }  
        }
        if (a115cont4=='1') {
          cor++;
          f_ok($('#a115dcon4'));
        }else{
          inc++;
          f_no($('#a115dcon4'));
        }
        var a115cont5=0;
        for (var i =0; i < a115vec2.length; i++) {
          if (a115dcon5==a115vec2[i]) {
            a115cont5++;
            a115vec2[i]=a115cont5;
            
          }  
        }
        if (a115cont5=='1') {
          cor++;
          f_ok($('#a115dcon5'));
        }else{
          inc++;
          f_no($('#a115dcon5'));
        }
        var nota1_1=$('#nota1_1').val();
        if (!nota1_1) {
          inc=inc+5;
          f_no($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }else{
          cor=cor+parseFloat(nota1_1);
          inc=inc+(5-parseFloat(nota1_1));
          f_ok($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }
        Calculo_nota();
   }
}