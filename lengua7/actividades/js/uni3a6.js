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
    validNumero(0, 6, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 6)
});

function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p2dcon1=$('#p2dcon1').val().toLowerCase();
      var p2dcon2=$('#p2dcon2').val().toLowerCase();
      var p2cont=0;
      if (p2dcon1=='llegaron') {
        p2cont++;
        f_ok($('#p2dcon1'));
      }else{
        p2cont;
        f_no($('#p2dcon1'));
      }
      if (p2dcon2=='es un adverbio' || p2dcon2=='un adverbio' || p2dcon2=='adverbio') {
        p2cont++;
        f_ok($('#p2dcon2'));
      }else{
        p2cont;
        f_no($('#p2dcon2'));
      }
      var result1= (p2cont*4)/2;
      cor=cor + result1;
      inc=inc +(4 - result1);

      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+6;
        f_no($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(6-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }
      
      Calculo_nota();
   }
}
