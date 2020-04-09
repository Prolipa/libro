var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
  $('.enc1').click(function(){
      
        if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra')
                $('.enc3').removeClass('encierra')
            }
      
            

        })
  $('.enc2').click(function(){
      
        if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc1').removeClass('encierra')
                $('.enc3').removeClass('encierra')
            }
      
            

        })
  $('.enc3').click(function(){
      
        if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra')
                $('.enc1').removeClass('encierra')
            }
      
            

        })
$('.enc4').click(function(){
      
        if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')
                

            }else{
                $(this).addClass('encierra1')
                $('.enc5').removeClass('encierra1')
                $('.enc6').removeClass('encierra1')
            }
      
            

        })
  $('.enc5').click(function(){
      
        if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')
                

            }else{
                $(this).addClass('encierra1')
                $('.enc4').removeClass('encierra1')
                $('.enc6').removeClass('encierra1')
            }
      
            

        })
  $('.enc6').click(function(){
      
        if ($(this).hasClass('encierra1')) {
                $(this).removeClass('encierra1')
                

            }else{
                $(this).addClass('encierra1')
                $('.enc5').removeClass('encierra1')
                $('.enc4').removeClass('encierra1')
            }
      
            

        })

document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 1)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 1)
});
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 1)
});
document.getElementById('nota1_5').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_5'), 1)
});
document.getElementById('nota1_6').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_6'), 2)
});
document.getElementById('nota1_7').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_7'), 1)
});
document.getElementById('nota1_8').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_8').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_8'), 1)
});
document.getElementById('nota1_9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_9'), 1)
});
function f_iniciar() {
    var p1vec1=['un chigualo.','un poema.','un sanjuanito.'];
    var myArray1 = ['0','1','2'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray1[i-1];
            $("#p1im"+i).html(p1vec1[c]);
            
        };
    var p1vec2=['un maltrato al indígena.','un amor desdichado.','la importancia del maíz.'];
    var myArray2 = ['0','1','2'];
       var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 3 ; i++) {
            var c1=myArray2[i-1];
            $("#p1im"+(i + 3)).html(p1vec2[c1]);
            
        };
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p1in1=$('.encierra > span').text();
      var p1in2=$('.encierra1 > span').text();
      var p1cont1=0;
      if (!p1in1) {
        p1cont1;
        f_no($('.enc1'));
        f_no($('.enc2'));
        f_no($('.enc3'));
      }else{
        if (p1in1=='un sanjuanito.') {
          p1cont1++;
          f_ok($('.encierra'));
        }else{
          p1cont1;
          f_no($('.encierra'));
        }
      }
      if (!p1in2) {
        p1cont1;
        f_no($('.enc4'));
        f_no($('.enc5'));
        f_no($('.enc6'));
      }else{
        if (p1in2=='un amor desdichado.') {
          p1cont1++;
          f_ok($('.encierra1'));
        }else{
          p1cont1;
          f_no($('.encierra1'));
        }
      }
      var result1= (p1cont1*1)/2;
      cor=cor + result1;
      inc=inc +(1 - result1);
      $('#nota1_1').val(result1.toFixed(2));
      $('#nota1_1').css("display", "");
      f_ok($('#nota1_1'));

      
      var nota1_2=$('#nota1_2').val();
      if (!nota1_2) {
        inc=inc+1;
        f_no($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_2);
        inc=inc+(1-parseFloat(nota1_2));
        f_ok($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }
      var nota1_3=$('#nota1_3').val();
      if (!nota1_3) {
        inc=inc+1;
        f_no($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_3);
        inc=inc+(1-parseFloat(nota1_3));
        f_ok($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
      }
      var nota1_4=$('#nota1_4').val();
      if (!nota1_4) {
        inc=inc+1;
        f_no($('#nota1_4'));
        $('#nota1_4').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_4);
        inc=inc+(1-parseFloat(nota1_4));
        f_ok($('#nota1_4'));
        $('#nota1_4').attr('disabled','true');
      }
      var nota1_5=$('#nota1_5').val();
      if (!nota1_5) {
        inc=inc+1;
        f_no($('#nota1_5'));
        $('#nota1_5').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_5);
        inc=inc+(1-parseFloat(nota1_5));
        f_ok($('#nota1_5'));
        $('#nota1_5').attr('disabled','true');
      }
      var nota1_6=$('#nota1_6').val();
      if (!nota1_6) {
        inc=inc+2;
        f_no($('#nota1_6'));
        $('#nota1_6').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_6);
        inc=inc+(2-parseFloat(nota1_6));
        f_ok($('#nota1_6'));
        $('#nota1_6').attr('disabled','true');
      }
      var nota1_7=$('#nota1_7').val();
      if (!nota1_7) {
        inc=inc+1;
        f_no($('#nota1_7'));
        $('#nota1_7').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_7);
        inc=inc+(1-parseFloat(nota1_7));
        f_ok($('#nota1_7'));
        $('#nota1_7').attr('disabled','true');
      }
      var nota1_8=$('#nota1_8').val();
      if (!nota1_8) {
        inc=inc+1;
        f_no($('#nota1_8'));
        $('#nota1_8').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_8);
        inc=inc+(1-parseFloat(nota1_8));
        f_ok($('#nota1_8'));
        $('#nota1_8').attr('disabled','true');
      }
      var nota1_9=$('#nota1_9').val();
      if (!nota1_9) {
        inc=inc+1;
        f_no($('#nota1_9'));
        $('#nota1_9').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_9);
        inc=inc+(1-parseFloat(nota1_9));
        f_ok($('#nota1_9'));
        $('#nota1_9').attr('disabled','true');
      }
      Calculo_nota();
   }
}
