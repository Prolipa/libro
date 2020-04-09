var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
for (var i =0; i < 27; i++) {
  $('.sub'+(i+1)).click(function(){

            if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
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
    validNumero(0, 1, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 1)
});
 function f_iniciar() {
    var a85vec1=['<span class="sub1">Tres cuartos</span> <span class="sub2">de</span> <span class="sub3">taza</span> <span class="sub4">de</span> <span class="sub5">leche</span>',
    '<span class="sub6">Media</span> <span class="sub7">taza</span> <span class="sub8">de</span> <span class="sub9">harina</span>',
    '<span class="sub10">Un huevo</span>',
    '<span class="sub11">Media</span> <span class="sub12">cucharita</span> <span class="sub13">de</span> <span class="sub14">sal</span>',
    '<span class="sub15">Una</span> <span class="sub16">cucharita</span> <span class="sub17">de</span> <span class="sub18">azúcar</span>',
    '<span class="sub19">Un cuarto</span> <span class="sub20">de</span> <span class="sub21">barra</span> <span class="sub22">de</span> <span class="sub23">mantequilla</span>',
    '<span class="sub24">Miel</span> <span class="sub25">de</span> <span class="sub26">panela</span>'];
   	var a85vec2=['Tres cuartos','Media','','Media','','Un cuarto',''];
    var myArray1 = ['0','1','2','3','4','5','6'];
    var a85vec3=[];
    var i,j,k;
    for (i = myArray1.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray1[i - 1];
      myArray1[i - 1] = myArray1[j];
      myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 7 ; i++) {
      var c=myArray1[i-1];
      $("#a85im"+(i)).html(a85vec1[c]);
      a85vec3.push(a85vec2[c]);
    };

    var a85vec4=['¡ <input type="text" style="border:none; border-bottom: 1px dotted black; width: 80px;" id="a85dcon1"> delicioso está este pastel!',
    '¿ <input type="text" style="border:none; border-bottom: 1px dotted black; width: 80px;" id="a85dcon2"> le pusiste?',
    '¿ <input type="text" style="border:none; border-bottom: 1px dotted black; width: 80px;" id="a85dcon3"> harina usaste para la masa?',
    '¡ <input type="text" style="border:none; border-bottom: 1px dotted black; width: 80px;" id="a85dcon4"> huevos partiste! ¿Estás seguro de que son tantos?',
    '¿ En <input type="text" style="border:none; border-bottom: 1px dotted black; width: 80px;" id="a85dcon5"> de estos moldes lo horneaste?'];
    var a85vec5=['qué','qué','cuánta','cuántos','cuál'];
    var myArray2 = ['0','1','2','3','4'];
    var a85vec6=[];
    var i,j,k;
    for (i = myArray2.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray2[i - 1];
      myArray2[i - 1] = myArray2[j];
      myArray2[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 7 ; i++) {
      var c=myArray2[i-1];
      $("#a85cim"+(i)).html(a85vec4[c]);
      a85vec6.push(a85vec5[c]);
    };
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a85im1=$('#a85im1 .underline').text();
      var a85im2=$('#a85im2 .underline').text();
      var a85im3=$('#a85im3 .underline').text();
      var a85im4=$('#a85im4 .underline').text();
      var a85im5=$('#a85im5 .underline').text();
      var a85im6=$('#a85im6 .underline').text();
      var a85im7=$('#a85im7 .underline').text();
      var a85cont1=0;
      var reim5=$('.totsub .underline').length;
      if (reim5>0) {
        if (a85im1==a85vec3[0]) {
          a85cont1++;
          f_ok($('#a85im1 .underline'));
        }else {
          a85cont1;
          f_no($('#a85im1 .underline'));
        }
        if (a85im2==a85vec3[1]) {
          a85cont1++;
          f_ok($('#a85im2 .underline'));
        }else {
          a85cont1;
          f_no($('#a85im2 .underline'));
        }
        if (a85im3==a85vec3[2]) {
          a85cont1++;
          f_ok($('#a85im3 .underline'));
        }else {
          a85cont1;
          f_no($('#a85im3 .underline'));
        }
        if (a85im4==a85vec3[3]) {
          a85cont1++;
          f_ok($('#a85im4 .underline'));
        }else {
          a85cont1;
          f_no($('#a85im4 .underline'));
        }
        if (a85im5==a85vec3[4]) {
          a85cont1++;
          f_ok($('#a85im5 .underline'));
        }else {
          a85cont1;
          f_no($('#a85im5 .underline'));
        }  
        if (a85im6==a85vec3[5]) {
          a85cont1++;
          f_ok($('#a85im6 .underline'));
        }else {
          a85cont1;
          f_no($('#a85im6 .underline'));
        }  
        if (a85im7==a85vec3[6]) {
          a85cont1++;
          f_ok($('#a85im7 .underline'));
        }else {
          a85cont1;
          f_no($('#a85im7 .underline'));
        }    
      }else{
        inc=inc+7;
        f_no($('#a85im1'));
        f_no($('#a85im2'));
        f_no($('#a85im3'));
        f_no($('#a85im4'));
        f_no($('#a85im5'));
        f_no($('#a85im6'));
        f_no($('#a85im7'));
      }
      
      var result1=(a85cont1*4)/7;
      cor=cor + result1;
      inc=inc + (4-result1);
      var a85dcon1=$('#a85dcon1').val().toLowerCase();
      var a85dcon2=$('#a85dcon2').val().toLowerCase();
      var a85dcon3=$('#a85dcon3').val().toLowerCase();
      var a85dcon4=$('#a85dcon4').val().toLowerCase();
      var a85dcon5=$('#a85dcon5').val().toLowerCase();
      var a85cont2=0;
      if (a85dcon1=='qué') {
        a85cont2++;
        f_ok($('#a85dcon1'));
      }else{
        a85cont2;
        f_no($('#a85dcon1'));
      }
      if (a85dcon2=='qué') {
        a85cont2++;
        f_ok($('#a85dcon2'));
      }else{
        a85cont2;
        f_no($('#a85dcon2'));
      }
      if (a85dcon3=='cuánta') {
        a85cont2++;
        f_ok($('#a85dcon3'));
      }else{
        a85cont2;
        f_no($('#a85dcon3'));
      }
      if (a85dcon4=='cuántos') {
        a85cont2++;
        f_ok($('#a85dcon4'));
      }else{
        a85cont2;
        f_no($('#a85dcon4'));
      }
      if (a85dcon5=='cuál') {
        a85cont2++;
        f_ok($('#a85dcon5'));
      }else{
        a85cont2;
        f_no($('#a85dcon5'));
      }
      var result2=(a85cont2*1)/5;
      cor=cor + result2;
      inc=inc + (1-result2);

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
        inc=inc+1;
        f_no($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_3);
        inc=inc+(1-parseFloat(nota1_3));
        f_ok($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
    }
      Calculo_nota();
   }
}