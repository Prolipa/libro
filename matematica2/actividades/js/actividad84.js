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
    validNumero(0, 3, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 3)
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
$('.enc1').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                
            }

        })
$('.enc2').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc1').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                
            }

        })
$('.enc3').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra');
                $('.enc1').removeClass('encierra');
                
            }

        })
$('.enc4').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc5').removeClass('encierra');
                $('.enc6').removeClass('encierra');
                
            }

        })
$('.enc5').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc4').removeClass('encierra');
                $('.enc6').removeClass('encierra');
                
            }

        })
$('.enc6').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc5').removeClass('encierra');
                $('.enc4').removeClass('encierra');
                
            }

        })
 function f_iniciar() {
    var p6vec3=['La <img src="img/i3_p82_act84.jpg" style="mix-blend-mode: multiply; display: inline-block;" class="img-responsive"> está en el <input type="text" onkeyup="mayus(this)" id="a84dcon1" style=" text-align:center; width:  100px; border:none; border-bottom: 2px dotted black;"> de la piscina.','La <img src="img/i4_p82_act84.jpg" style="mix-blend-mode: multiply; display: inline-block;" class="img-responsive"> está en el <input type="text" onkeyup="mayus(this)" id="a84dcon2" style=" text-align:center; width:  100px; border:none; border-bottom: 2px dotted black;"> de la piscina.','La <img src="img/i5_p82_act84.jpg" style="mix-blend-mode: multiply; display: inline-block;" class="img-responsive"> está en la <input type="text" onkeyup="mayus(this)" id="a84dcon3" style=" text-align:center; width:  100px; border:none; border-bottom: 2px dotted black;"> de la piscina.'];    
    var myArray3 = ['0','1','2'];
    var i,j,k;
    for (i = myArray3.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray3[i - 1];
      myArray3[i - 1] = myArray3[j];
      myArray3[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3 ; i++) {
      var c=myArray3[i-1];
      $("#p2im"+i).html(p6vec3[c]);
      
    };

    var p6vec1=['Se almuerza','Se cena','Se desayuna'];
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
      $("#p6im"+i).html(p6vec1[c]);
      
    };
    var p6vec2=['En la tarde','En la noche','En la mañana'];
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
      var c=myArray2[i-1];
      $("#p6im1"+i).html(p6vec2[c]);
      
    };
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a84dcon1=$('#a84dcon1').val().toLowerCase();
      var a84dcon2=$('#a84dcon2').val().toLowerCase();
      var a84dcon3=$('#a84dcon3').val().toLowerCase();
      var p1cont1=0;
      if (a84dcon1=='interior') {
        p1cont1++;
        f_ok($('#a84dcon1'));
      }else{
        p1cont1;
        f_no($('#a84dcon1'));
      }
      if (a84dcon2=='exterior') {
        p1cont1++;
        f_ok($('#a84dcon2'));
      }else{
        p1cont1;
        f_no($('#a84dcon2'));
      }
      if (a84dcon3=='frontera') {
        p1cont1++;
        f_ok($('#a84dcon3'));
      }else{
        p1cont1;
        f_no($('#a84dcon3'));
      }
      var result1=(p1cont1*1)/3;
      cor=cor+parseFloat(result1);
      inc=inc+(1-parseFloat(result1));


      var a84dcon4=$('#a84dcon4').val().toLowerCase();
      var a84dcon5=$('#a84dcon5').val().toLowerCase();
      var a84dcon6=$('#a84dcon6').val().toLowerCase();
      var p4cont1=0;
      if (a84dcon4=='3') {
        p4cont1++;
        f_ok($('#a84dcon4'));
      }else{
        p4cont1;
        f_no($('#a84dcon4'));
      }
      if (a84dcon5=='1') {
        p4cont1++;
        f_ok($('#a84dcon5'));
      }else{
        p4cont1;
        f_no($('#a84dcon5'));
      }
      if (a84dcon6=='2') {
        p4cont1++;
        f_ok($('#a84dcon6'));
      }else{
        p4cont1;
        f_no($('#a84dcon6'));
      }
      var result2=(p4cont1*1)/3;
      cor=cor+parseFloat(result2);
      inc=inc+(1-parseFloat(result2));

      var p6res1=$('.p6res1 .encierra span').html();
      var p6res2=$('.p6res2 .encierra span').html();
      var p6cont1=0;
      if (!p6res1) {
        
        f_no($('.enc1'));
        f_no($('.enc2'));
        f_no($('.enc3'));
      }else{
        if (p6res1=='Se desayuna') {
          p6cont1++;
          f_ok($('.p6res1 .encierra'));
        }else {
          p6cont1;
          f_no($('.p6res1 .encierra'));
        }  
      }
      if (!p6res2) {
        
        f_no($('.enc4'));
        f_no($('.enc5'));
        f_no($('.enc6'));
      }else{
        if (p6res2=='En la noche') {
          p6cont1++;
          f_ok($('.p6res2 .encierra'));
        }else {
          p6cont1;
          f_no($('.p6res2 .encierra'));
        }  
      }
      var result3=(p6cont1*1)/2;
      cor=cor+parseFloat(result3);
      inc=inc+(1-parseFloat(result3));

      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+3;
        f_no($('#nota1_1'));
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(3-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
      }
      var nota1_2=$('#nota1_2').val();
      if (!nota1_2) {
        inc=inc+2;
        f_no($('#nota1_2'));
      }else{
        cor=cor+parseFloat(nota1_2);
        inc=inc+(2-parseFloat(nota1_2));
        f_ok($('#nota1_2'));
      }
      var nota1_3=$('#nota1_3').val();
      if (!nota1_3) {
        inc=inc+2;
        f_no($('#nota1_3'));
      }else{
        cor=cor+parseFloat(nota1_3);
        inc=inc+(2-parseFloat(nota1_3));
        f_ok($('#nota1_3'));
      }
      Calculo_nota();
   }
}