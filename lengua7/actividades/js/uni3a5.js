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
for (var i =0; i < 3; i++) {
  $('.enc'+(i+1)).click(function(){
      if (con1==0) {
        if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                con1=1;
            }
      }else{
        if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                con1=0;

            }else{
                
                
            }
      }
            

        })
}
var con2=0;
for (var i =0; i < 3; i++) {
  $('.enc'+(i+4)).click(function(){
      if (con2==0) {
        if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')
                

            }else{
                $(this).addClass('encierra1')
                con2=1;
            }
      }else{
        if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')
                con2=0;

            }else{
                
                
            }
      }
            

        })
}
var con3=0;
for (var i =0; i < 3; i++) {
  $('.enc'+(i+7)).click(function(){
      if (con3==0) {
        if ($(this).hasClass('encierra2')) {
                $(this).removeClass('encierra2')
                

            }else{
                $(this).addClass('encierra2')
                con3=1;
            }
      }else{
        if ($(this).hasClass('encierra2')) {
                $(this).removeClass('encierra2')
                con3=0;

            }else{
                
                
            }
      }
            

        })
}
var con4=0;
for (var i =0; i < 3; i++) {
  $('.enc'+(i+10)).click(function(){
      if (con4==0) {
        if ($(this).hasClass('encierra3')) {
                $(this).removeClass('encierra3')
                

            }else{
                $(this).addClass('encierra3')
                con4=1;
            }
      }else{
        if ($(this).hasClass('encierra3')) {
                $(this).removeClass('encierra3')
                con4=0;

            }else{
                
                
            }
      }
            

        })
}

document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 2)
});
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 2)
});
function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p2in1=$('.encierra').text();
      var p2in2=$('.encierra1').text();
      var p2in3=$('.encierra2').text();
      var p2in4=$('.encierra3').text();
      var p2cont=0;
      if (!p2in1) {
        p2cont;
        f_no($('.enc1'));
        f_no($('.enc2'));
        f_no($('.enc3'));
        
      }else{
        if (p2in1=='sus juguetes.') {
          p2cont++;
          f_ok($('.encierra'));
        }else{
          p2cont;
          f_no($('.encierra'));
        }
      }
      if (!p2in2) {
        p2cont;
        f_no($('.enc4'));
        f_no($('.enc5'));
        f_no($('.enc6'));
        
      }else{
        if (p2in2=='sanjuanitos.') {
          p2cont++;
          f_ok($('.encierra1'));
        }else{
          p2cont;
          f_no($('.encierra1'));
        }
      }
      if (!p2in3) {
        p2cont;
        f_no($('.enc7'));
        f_no($('.enc8'));
        f_no($('.enc9'));
      }else{
        if (p2in3=='cuatro regiones naturales.') {
          p2cont++;
          f_ok($('.encierra2'));
        }else{
          p2cont;
          f_no($('.encierra2'));
        }
      }
      if (!p2in4) {
        p2cont;
        f_no($('.enc10'));
        f_no($('.enc11'));
        f_no($('.enc12'));
      }else{
        if (p2in4=='resultados alarmantes.') {
          p2cont++;
          f_ok($('.encierra3'));
        }else{
          p2cont;
          f_no($('.encierra3'));
        }
      }
      var result1= (p2cont*2)/4;
      cor=cor + result1;
      inc=inc +(2 - result1);

      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+2;
        f_no($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(2-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }
      var nota1_2=$('#nota1_2').val();
      if (!nota1_2) {
        inc=inc+2;
        f_no($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_2);
        inc=inc+(2-parseFloat(nota1_2));
        f_ok($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }
      var nota1_3=$('#nota1_3').val();
      if (!nota1_3) {
        inc=inc+2;
        f_no($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_3);
        inc=inc+(2-parseFloat(nota1_3));
        f_ok($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
      }
      var nota1_4=$('#nota1_4').val();
      if (!nota1_4) {
        inc=inc+2;
        f_no($('#nota1_4'));
        $('#nota1_4').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_4);
        inc=inc+(2-parseFloat(nota1_4));
        f_ok($('#nota1_4'));
        $('#nota1_4').attr('disabled','true');
      }
      Calculo_nota();
   }
}
