var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var t=0, t1=0,t2=0,t3=0;
var claseAnimada ='animate bounceIn';
f_iniciar();

function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 7, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 7)
});

 function f_iniciar() {
    
   bt_comprobar.addEventListener("click", f_comprobar);
   function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a73in1 =$('#a73in1').val();
      var a71cont1=0;
      if (a73in1=='el segundo' || a73in1=='el dos' || a73in1=='el número dos') {
        cor=cor+3;
        f_ok($('#a73in1'));
      }else{
        inc=inc+3;
        f_no($('#a73in1'));
      }
      
      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+7;
        f_no($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(7-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
    }
    
      Calculo_nota();
   }
   
}
