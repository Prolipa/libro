var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
for (var i =0; i < 7; i++) {
  $('.sub'+(i+1)).click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }
   })
}
for (var i =0; i < 9; i++) {
  $('.sub'+(i+8)).click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }
   })
}
for (var i =0; i < 9; i++) {
  $('.sub'+(i+17)).click(function(){
        if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                con1=1;
            }
   })
}

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
      var p2in1=$('#p1cim1 > .underline').text();
      var p2in2=$('#p1cim2 > .underline').text();
      var p2in3=$('#p1cim3 > .underline').text();
      var p2cont=0;
      if (!p2in1) {
        p2cont;
        f_no($('.sub1'));
        f_no($('.sub2'));
        f_no($('.sub3'));
        f_no($('.sub4'));
        f_no($('.sub5'));
        f_no($('.sub6'));
        f_no($('.sub7'));
        
      }else{
        if (p2in1=='tareas.') {
          p2cont++;
          f_ok($('#p1cim1 > .underline'));
        }else{
          p2cont;
          f_no($('#p1cim1 > .underline'));
        }
      }
      if (!p2in2) {
        p2cont;
        f_no($('.sub8'));
        f_no($('.sub9'));
        f_no($('.sub10'));
        f_no($('.sub11'));
        f_no($('.sub12'));
        f_no($('.sub13'));
        f_no($('.sub14'));
        f_no($('.sub15'));
        f_no($('.sub16'));
      }else{
        if (p2in2=='casa' || p2in2=='casaventa') {
          p2cont++;
          f_ok($('#p1cim2 > .underline'));
        }else{
          p2cont;
          f_no($('#p1cim2 > .underline'));
        }
      }
      if (!p2in3) {
        p2cont;
        f_no($('.sub17'));
        f_no($('.sub18'));
        f_no($('.sub19'));
        f_no($('.sub20'));
        f_no($('.sub21'));
        f_no($('.sub22'));
        f_no($('.sub23'));
        f_no($('.sub24'));
        f_no($('.sub25'));
      }else{
        if (p2in3=='rodilla.') {
          p2cont++;
          f_ok($('#p1cim3 > .underline'));
        }else{
          p2cont;
          f_no($('#p1cim3 > .underline'));
        }
      }

      var p1dcon1=$('#p1dcon1').val().toLowerCase();
      var p1dcon2=$('#p1dcon2').val().toLowerCase();
      var p1dcon3=$('#p1dcon3').val().toLowerCase();
      var p1dcon4=$('#p1dcon4').val().toLowerCase();
      var p1dcon5=$('#p1dcon5').val().toLowerCase();
      var p1dcon6=$('#p1dcon6').val().toLowerCase();
      if (p1dcon1=='es') {
        p2cont++;
        f_ok($('#p1dcon1'));
      }else{
        p2cont;
        f_no($('#p1dcon1'));
      }
      if (p1dcon2=='cumplas') {
        p2cont++;
        f_ok($('#p1dcon2'));
      }else{
        p2cont;
        f_no($('#p1dcon2'));
      }

      if (p1dcon3=='está') {
        p2cont++;
        f_ok($('#p1dcon3'));
      }else{
        p2cont;
        f_no($('#p1dcon3'));
      }
      if (p1dcon4=='fue asaltada') {
        p2cont++;
        f_ok($('#p1dcon4'));
      }else{
        p2cont;
        f_no($('#p1dcon4'));
      }
      if (p1dcon5=='puede') {
        p2cont++;
        f_ok($('#p1dcon5'));
      }else{
        p2cont;
        f_no($('#p1dcon5'));
      }
      if (p1dcon6=='está') {
        p2cont++;
        f_ok($('#p1dcon6'));
      }else{
        p2cont;
        f_no($('#p1dcon6'));
      }
      var result1= (p2cont*6)/9;
      cor=cor + result1;
      inc=inc +(6 - result1);

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
