var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
var con1=0;
for (var i =0; i < 9; i++) {
  $('#sub'+(i+1)).click(function(){
      if (con1==0) {
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                con1=1;
            }
      }else{
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                con1=0;

            }else{
                
                
            }
      }
            

        })
}

document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 4)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 4)
});
function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p2in1=$('.underline').text();
      var p2cont=0;
      if (!p2in1) {
        p2cont;
        f_no($('#sub1'));
        f_no($('#sub2'));
        f_no($('#sub3'));
        f_no($('#sub4'));
        f_no($('#sub5'));
        f_no($('#sub6'));
        f_no($('#sub7'));
        f_no($('#sub8'));
        f_no($('#sub9'));
      }else{
        if (p2in1=='sonaron') {
          p2cont++;
          f_ok($('.underline'));
        }else{
          p2cont;
          f_no($('.underline'));
        }
      }
      var result1= (p2cont*2)/1;
      cor=cor + result1;
      inc=inc +(2 - result1);

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
      var nota1_2=$('#nota1_2').val();
      if (!nota1_2) {
        inc=inc+4;
        f_no($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_2);
        inc=inc+(4-parseFloat(nota1_2));
        f_ok($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }
      Calculo_nota();
   }
}
