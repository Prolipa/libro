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
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 1)
});
function st()
{
  t=nn(nump1);
  t1=nn(nump2);
  t2=nn(nump3);
  t3=nn(nump4);
  $('#p5dcon12').val(t1);
}
window.onload=st;

$('.enc1').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                $('.enc4').removeClass('encierra');
            }

        })
$('.enc2').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc1').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                $('.enc4').removeClass('encierra');
            }

        })
$('.enc3').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra');
                $('.enc1').removeClass('encierra');
                $('.enc4').removeClass('encierra');
            }

        })
$('.enc4').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                $('.enc1').removeClass('encierra');
            }

        })
 function f_iniciar() {
    
    var p1vec1 = ['El <img src="img/i3_p94_act93.jpg" class="img-responsive" style="display: inline-block;" alt=""> ∈ M','El <img src="img/i4_p94_act93.jpg" class="img-responsive" style="display: inline-block;" alt=""> ∈ M','El <img src="img/i5_p94_act93.jpg" class="img-responsive" style="display: inline-block;" alt=""> ∈ T'];
    var p1vec2=['V','F','V'];
    var myArray1 = ['0','1','2'];
    var p1vec3=[];
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
      $("#p1im"+(i)).html(p1vec1[c]);
      p1vec3.push(p1vec2[c]);
    };


    var p3vec1=[];
    var p3vec2=[];
    var p3vec3=[];
    var numero= parseInt((Math.random() * 5) + 1);
    var numero1= parseInt((Math.random() * 4) + 1);
    var numero2=numero + numero1;
    for (var i =0; i < numero; i++) {
      p3vec1.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 40px;" class="img-responsive" src="img/i9_p94_act93.jpg" alt="">');
    }
    for (var i =0; i < numero1; i++) {
      p3vec2.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 40px;" class="img-responsive" src="img/i10_p94_act93.jpg" alt="">');
    }
    for (var i =0; i < numero2; i++) {
      p3vec3.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 40px;" class="img-responsive" src="img/i11_p94_act93.jpg" alt="">');
    }
    $("#p3im1").html(p3vec1);
    $("#p3im2").html(p3vec2);
    $("#p3im3").html(p3vec3);

    var p4vec1=[];
    var numero3= parseInt((Math.random() * 9) + 1);
    var numero4= parseInt((Math.random() * 9) + 1);
    var p4aux1=0;
    var p4aux2=0;
    var p4aux3=0;
    if (numero3>numero4) {
      p4aux1=numero3;
      p4aux2=numero4
      p4aux3=numero3 - numero4;
    }else{
      p4aux1=numero4;
      p4aux2=numero3
      p4aux3=numero4 - numero3;
    }
    for (var i =0; i < p4aux2; i++) {
      p4vec1.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; class="img-responsive" src="img/i13_p94_act93.jpg" alt="">');
    }
    for (var i =0; i < p4aux3; i++) {
      p4vec1.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; class="img-responsive" src="img/i12_p94_act93.jpg" alt="">');
    }
    $("#p4im1").html(p4vec1);

    var numero5 = parseInt((Math.random() * 20) + 10);
    var numero6 = parseInt((Math.random() * 20) + 10);
    var numero7 = parseInt((Math.random() * 20) + 10);
    var numero8 = parseInt((Math.random() * 20) + 10);
    nump1=numero5;
    $('#p5dcon1').val(numero5);
    var p5aux3=numero5.toString().split('');
    nump2=numero6;
    var p5aux4=numero6.toString().split('');
    nump3=numero7;
    var p5aux1=numero7.toString().split('');
    $('#p5dcon23').val(p5aux1[0]+'0');
    $('#p5dcon24').val(p5aux1[1]);
    nump4=numero8;
    var p5aux2=numero8.toString().split('');
    $('#p5dcon35').val(p5aux2[0]+'D');
    $('#p5dcon36').val(p5aux2[1]+'U');

    var numero9= [parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10)];
    var numero10= [parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10)];
    var p6vec1=[];
    for (var i = 0; i < numero9.length; i++) {
     $("#p6im"+(i+1)).html(numero9[i]);
     $("#p6im1"+(i+1)).html(numero10[i]);
     if (numero9[i]>numero10[i]) {
      p6vec1.push('>');
     }else if (numero9[i]==numero10[i]) {
      p6vec1.push('=');
     }else if (numero9[i]<numero10[i]) {
      p6vec1.push('<');
     }
   }

   var numero11 = parseInt((Math.random() * 15) + 7);
   var numero12 = parseInt((Math.random() * 20) + 10);
   var p7vec1=[numero11];
   for (var i = 0; i < 8; i++) {
      p7vec1.push(p7vec1[i] + 1);
   }
   $('#p7dcon1').val(p7vec1[0]);
   $('#p7dcon1').attr('disabled','true');
   $('#p7dcon2').val(p7vec1[1]);
   $('#p7dcon2').attr('disabled','true');
   $('#p7dcon3').val(p7vec1[2]);
   $('#p7dcon3').attr('disabled','true');

   var p7vec2=[numero12];
   for (var i = 0; i < 8; i++) {
      p7vec2.push(p7vec2[i] - 1);
   }
   $('#p7dcon11').val(p7vec2[0]);
   $('#p7dcon12').val(p7vec2[1]);
   $('#p7dcon13').val(p7vec2[2]);
   $('#p7dcon11').attr('disabled','true');
   $('#p7dcon12').attr('disabled','true');
   $('#p7dcon13').attr('disabled','true');

   var p8vec1=['el interior','el exterior','la frontera','los lados'];
    var myArray2 = ['0','1','2','3'];
    
    var i,j,k;
    for (i = myArray2.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray2[i - 1];
      myArray2[i - 1] = myArray2[j];
      myArray2[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4 ; i++) {
      var c=myArray2[i-1];
      $("#p8im"+(i)).html(p8vec1[c]);
      
    };

    var p9vec1=['<img src="img/i15_p94_act93.jpg" class="img-responsive" alt="">','<img src="img/i16_p94_act93.jpg" class="img-responsive" alt="">','<img src="img/i17_p94_act93.jpg" class="img-responsive" alt="">'];
    var p9vec2=['tarde','noche','mañana'];
    var p9vec3=['2','3','1'];
    var p9axu1=[],p9aux2=[];
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
      $("#p9im"+(i)).html(p9vec1[c]);
      p9axu1.push(p9vec2[c]);
      p9aux2.push(p9vec3[c]);
    };

    var numero13 = parseInt((Math.random() * 20) + 10);
    var numero14 = parseInt((Math.random() * 20) + 10);
    var numero15 = parseInt((Math.random() * 20) + 10);
    var numero16 = parseInt((Math.random() * 20) + 10);
    $("#p10im1").html(numero13);
    $("#p10im2").html(numero14);
    $("#p10im3").html(numero15);
    $("#p10im4").html(numero16);
   bt_comprobar.addEventListener("click", campovacio);
   function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", campovacio);
      var p1dcon1=$('#p1dcon1').val();
      var p1dcon2=$('#p1dcon2').val();
      var p1dcon3=$('#p1dcon3').val();
      var p1cont1=0;
      if (p1dcon1==p1vec3[0]) {
        p1cont1++;
        f_ok($('#p1dcon1'));
      }else{
        p1cont1;
        f_no($('#p1dcon1'));
      }
      if (p1dcon2==p1vec3[1]) {
        p1cont1++;
        f_ok($('#p1dcon2'));
      }else{
        p1cont1;
        f_no($('#p1dcon2'));
      }
      if (p1dcon3==p1vec3[2]) {
        p1cont1++;
        f_ok($('#p1dcon3'));
      }else{
        p1cont1;
        f_no($('#p1dcon3'));
      }
      var result1=(p1cont1*1)/3;
      cor=cor+parseFloat(result1);
      inc=inc+(1-parseFloat(result1))
      $('#nota1_1').val(result1.toFixed(2));
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

      var p3dcon1=$('#p3dcon1').val();
      var p3dcon2=$('#p3dcon2').val();
      var p3dcon3=$('#p3dcon3').val();
      var p3cont1=0;
      if (p3dcon1==numero) {
        p3cont1++;
        f_ok($('#p3dcon1'));
      }else{
        p3cont1;
        f_no($('#p3dcon1'));
      }
      if (p3dcon2==numero1) {
        p3cont1++;
        f_ok($('#p3dcon2'));
      }else{
        p3cont1;
        f_no($('#p3dcon2'));
      }
      if (p3dcon3==numero2) {
        p3cont1++;
        f_ok($('#p3dcon3'));
      }else{
        p3cont1;
        f_no($('#p3dcon3'));
      }
      var result3=(p3cont1*1)/3;
      cor=cor+parseFloat(result3);
      inc=inc+(1-parseFloat(result3))
      $('#nota1_3').val(result3.toFixed(2));
      f_ok($('#nota1_3'));

      var p4dcon1=$('#p4dcon1').val();
      var p4dcon2=$('#p4dcon2').val();
      var p4dcon3=$('#p4dcon3').val();
      var p4cont1=0;
      if (p4dcon1==p4aux1) {
        p4cont1++;
        f_ok($('#p4dcon1'));
      }else{
        p4cont1;
        f_no($('#p4dcon1'));
      }
      if (p4dcon2==p4aux2) {
        p4cont1++;
        f_ok($('#p4dcon2'));
      }else{
        p4cont1;
        f_no($('#p4dcon2'));
      }
      if (p4dcon3==p4aux3) {
        p4cont1++;
        f_ok($('#p4dcon3'));
      }else{
        p4cont1;
        f_no($('#p4dcon3'));
      }
      var result4=(p4cont1*1)/3;
      cor=cor+parseFloat(result4);
      inc=inc+(1-parseFloat(result4))
      $('#nota1_4').val(result4.toFixed(2));
      f_ok($('#nota1_4'));

      var p5dcon2=$('#p5dcon2').val();
      var p5dcon22=$('#p5dcon22').val();
      var p5dcon32=$('#p5dcon32').val();
      var p5cont1=0;
      if (p5dcon2==t) {
        p5cont1++;
        f_ok($('#p5dcon2'));
      }else{
        p5cont1;
        f_no($('#p5dcon2'));
      }
      if (p5dcon32==t3) {
        p5cont1++;
        f_ok($('#p5dcon32'));
      }else{
        p5cont1;
        f_no($('#p5dcon32'));
      }
      if (p5dcon22==t2) {
        p5cont1++;
        f_ok($('#p5dcon22'));
      }else{
        p5cont1;
        f_no($('#p5dcon22'));
      }

      var p5dcon11=$('#p5dcon11').val();
      var p5dcon21=$('#p5dcon21').val();
      var p5dcon31=$('#p5dcon31').val();
      if (p5dcon11==numero6) {
        p5cont1++;
        f_ok($('#p5dcon11'));
      }else{
        p5cont1;
        f_no($('#p5dcon11'));
      }
      if (p5dcon21==numero7) {
        p5cont1++;
        f_ok($('#p5dcon21'));
      }else{
        p5cont1;
        f_no($('#p5dcon21'));
      }
      if (p5dcon31==numero8) {
        p5cont1++;
        f_ok($('#p5dcon31'));
      }else{
        p5cont1;
        f_no($('#p5dcon31'));
      }
      var p5dcon3=$('#p5dcon3').val();
      var p5dcon4=$('#p5dcon4').val();
      var p5dcon13=$('#p5dcon13').val();
      var p5dcon14=$('#p5dcon14').val();
      var p5dcon33=$('#p5dcon33').val();
      var p5dcon34=$('#p5dcon34').val();
      if (p5dcon3==(p5aux3[0] +'0')) {
        p5cont1++;
        f_ok($('#p5dcon3'));
      }else{
        p5cont1;
        f_no($('#p5dcon3'));
      }
      if (p5dcon4==p5aux3[1]) {
        p5cont1++;
        f_ok($('#p5dcon4'));
      }else{
        p5cont1;
        f_no($('#p5dcon4'));
      }
      if (p5dcon13==(p5aux4[0] +'0')) {
        p5cont1++;
        f_ok($('#p5dcon13'));
      }else{
        p5cont1;
        f_no($('#p5dcon13'));
      }
      if (p5dcon14==p5aux4[1]) {
        p5cont1++;
        f_ok($('#p5dcon14'));
      }else{
        p5cont1;
        f_no($('#p5dcon14'));
      }
      if (p5dcon33==(p5aux2[0] +'0')) {
        p5cont1++;
        f_ok($('#p5dcon33'));
      }else{
        p5cont1;
        f_no($('#p5dcon33'));
      }
      if (p5dcon34==p5aux2[1]) {
        p5cont1++;
        f_ok($('#p5dcon34'));
      }else{
        p5cont1;
        f_no($('#p5dcon34'));
      }

      var p5dcon5=$('#p5dcon5').val();
      var p5dcon6=$('#p5dcon6').val();
      var p5dcon15=$('#p5dcon15').val();
      var p5dcon16=$('#p5dcon16').val();
      var p5dcon25=$('#p5dcon25').val();
      var p5dcon26=$('#p5dcon26').val();
      if (p5dcon5==(p5aux3[0] +'D')) {
        p5cont1++;
        f_ok($('#p5dcon5'));
      }else{
        p5cont1;
        f_no($('#p5dcon5'));
      }
      if (p5dcon6==(p5aux3[1] +'U')) {
        p5cont1++;
        f_ok($('#p5dcon6'));
      }else{
        p5cont1;
        f_no($('#p5dcon6'));
      }
      if (p5dcon15==(p5aux4[0] +'D')) {
        p5cont1++;
        f_ok($('#p5dcon15'));
      }else{
        p5cont1;
        f_no($('#p5dcon15'));
      }
      if (p5dcon16==(p5aux4[1] +'U')) {
        p5cont1++;
        f_ok($('#p5dcon16'));
      }else{
        p5cont1;
        f_no($('#p5dcon16'));
      }
      if (p5dcon25==(p5aux1[0] +'D')) {
        p5cont1++;
        f_ok($('#p5dcon25'));
      }else{
        p5cont1;
        f_no($('#p5dcon25'));
      }
      if (p5dcon26==(p5aux1[1] +'U')) {
        p5cont1++;
        f_ok($('#p5dcon26'));
      }else{
        p5cont1;
        f_no($('#p5dcon26'));
      }
      var result5=(p5cont1*1)/18;
      cor=cor+parseFloat(result5);
      inc=inc+(1-parseFloat(result5))
      $('#nota1_5').val(result5.toFixed(2));
      f_ok($('#nota1_5'));

      var p6sel1=$('#p6sel1').val();
      var p6sel2=$('#p6sel2').val();
      var p6sel3=$('#p6sel3').val();
      var p6sel4=$('#p6sel4').val();
      var p6sel5=$('#p6sel5').val();
      var p6sel6=$('#p6sel6').val();
      var p6sel7=$('#p6sel7').val();
      var p6sel8=$('#p6sel8').val();
      var p6cont1=0;
      if (p6sel1==p6vec1[0]) {
        p6cont1++;
        f_ok($('#p6sel1'));
      }else{
        p6cont1;
        f_no($('#p6sel1'));
      }
      if (p6sel2==p6vec1[1]) {
        p6cont1++;
        f_ok($('#p6sel2'));
      }else{
        p6cont1;
        f_no($('#p6sel2'));
      }
      if (p6sel3==p6vec1[2]) {
        p6cont1++;
        f_ok($('#p6sel3'));
      }else{
        p6cont1;
        f_no($('#p6sel3'));
      }
      if (p6sel4==p6vec1[3]) {
        p6cont1++;
        f_ok($('#p6sel4'));
      }else{
        p6cont1;
        f_no($('#p6sel4'));
      }
      if (p6sel5==p6vec1[4]) {
        p6cont1++;
        f_ok($('#p6sel5'));
      }else{
        p6cont1;
        f_no($('#p6sel5'));
      }
      if (p6sel6==p6vec1[5]) {
        p6cont1++;
        f_ok($('#p6sel6'));
      }else{
        p6cont1;
        f_no($('#p6sel6'));
      }
      if (p6sel7==p6vec1[6]) {
        p6cont1++;
        f_ok($('#p6sel7'));
      }else{
        p6cont1;
        f_no($('#p6sel7'));
      }
      if (p6sel8==p6vec1[7]) {
        p6cont1++;
        f_ok($('#p6sel8'));
      }else{
        p6cont1;
        f_no($('#p6sel8'));
      }
      var result6=(p6cont1*1)/8;
      cor=cor+parseFloat(result6);
      inc=inc+(1-parseFloat(result6))
      $('#nota1_6').val(result6.toFixed(2));
      f_ok($('#nota1_6'));


      var p7dcon4=$('#p7dcon4').val();
      var p7dcon5=$('#p7dcon5').val();
      var p7dcon6=$('#p7dcon6').val();
      var p7dcon7=$('#p7dcon7').val();
      var p7dcon8=$('#p7dcon8').val();
      var p7dcon9=$('#p7dcon9').val();
      var p7dcon14=$('#p7dcon14').val();
      var p7dcon15=$('#p7dcon15').val();
      var p7dcon16=$('#p7dcon16').val();
      var p7dcon17=$('#p7dcon17').val();
      var p7dcon18=$('#p7dcon18').val();
      var p7dcon19=$('#p7dcon19').val();
      var p7cont1=0;
      if (p7dcon4==p7vec1[3]) {
        p7cont1++;
        f_ok($('#p7dcon4'));
      }else{
        p7cont1;
        f_no($('#p7dcon4'));
      }
      if (p7dcon5==p7vec1[4]) {
        p7cont1++;
        f_ok($('#p7dcon5'));
      }else{
        p7cont1;
        f_no($('#p7dcon5'));
      }
      if (p7dcon6==p7vec1[5]) {
        p7cont1++;
        f_ok($('#p7dcon6'));
      }else{
        p7cont1;
        f_no($('#p7dcon6'));
      }
      if (p7dcon7==p7vec1[6]) {
        p7cont1++;
        f_ok($('#p7dcon7'));
      }else{
        p7cont1;
        f_no($('#p7dcon7'));
      }
      if (p7dcon8==p7vec1[7]) {
        p7cont1++;
        f_ok($('#p7dcon8'));
      }else{
        p7cont1;
        f_no($('#p7dcon8'));
      }
      if (p7dcon9==p7vec1[8]) {
        p7cont1++;
        f_ok($('#p7dcon9'));
      }else{
        p7cont1;
        f_no($('#p7dcon9'));
      }

      if (p7dcon14==p7vec2[3]) {
        p7cont1++;
        f_ok($('#p7dcon14'));
      }else{
        p7cont1;
        f_no($('#p7dcon14'));
      }
      if (p7dcon15==p7vec2[4]) {
        p7cont1++;
        f_ok($('#p7dcon15'));
      }else{
        p7cont1;
        f_no($('#p7dcon15'));
      }
      if (p7dcon16==p7vec2[5]) {
        p7cont1++;
        f_ok($('#p7dcon16'));
      }else{
        p7cont1;
        f_no($('#p7dcon16'));
      }
      if (p7dcon17==p7vec2[6]) {
        p7cont1++;
        f_ok($('#p7dcon17'));
      }else{
        p7cont1;
        f_no($('#p7dcon17'));
      }
      if (p7dcon18==p7vec2[7]) {
        p7cont1++;
        f_ok($('#p7dcon18'));
      }else{
        p7cont1;
        f_no($('#p7dcon18'));
      }
      if (p7dcon19==p7vec2[8]) {
        p7cont1++;
        f_ok($('#p7dcon19'));
      }else{
        p7cont1;
        f_no($('#p7dcon19'));
      }
      var result7=(p7cont1*1)/12;
      cor=cor+parseFloat(result7);
      inc=inc+(1-parseFloat(result7))
      $('#nota1_7').val(result7.toFixed(2));
      f_ok($('#nota1_7'));

      var p8res1=$('.clenc1 .encierra span').html();
      var p8cont1=0;
      if (!p8res1) {
        
        f_no($('.enc1'));
        f_no($('.enc2'));
        f_no($('.enc3'));
        f_no($('.enc4'));
      }else{
        if (p8res1=='la frontera') {
          p8cont1++;
          f_ok($('.clenc1 .encierra'));
        }else {
          p8cont1;
          f_no($('.clenc1 .encierra'));
        }  
      }
      var result8=(p8cont1*1)/1;
      cor=cor+parseFloat(result8);
      inc=inc+(1-parseFloat(result8))
      $('#nota1_8').val(result8.toFixed(2));
      f_ok($('#nota1_8'));

      var p9dcon1=$('#p9dcon1').val();
      var p9dcon2=$('#p9dcon2').val();
      var p9dcon3=$('#p9dcon3').val();
      var p9dcon4=$('#p9dcon4').val();
      var p9dcon5=$('#p9dcon5').val();
      var p9dcon6=$('#p9dcon6').val();
      var p9cont1=0;
      if (p9dcon1==p9axu1[0]) {
        p9cont1++;
        f_ok($('#p9dcon1'));
      }else{
        p9cont1;
        f_no($('#p9dcon1'));
      }
      if (p9dcon2==p9axu1[1]) {
        p9cont1++;
        f_ok($('#p9dcon2'));
      }else{
        p9cont1;
        f_no($('#p9dcon2'));
      }
      if (p9dcon3==p9axu1[2]) {
        p9cont1++;
        f_ok($('#p9dcon3'));
      }else{
        p9cont1;
        f_no($('#p9dcon3'));
      }
      if (p9dcon4==p9aux2[0]) {
        p9cont1++;
        f_ok($('#p9dcon4'));
      }else{
        p9cont1;
        f_no($('#p9dcon4'));
      }
      if (p9dcon5==p9aux2[1]) {
        p9cont1++;
        f_ok($('#p9dcon5'));
      }else{
        p9cont1;
        f_no($('#p9dcon5'));
      }
      if (p9dcon6==p9aux2[2]) {
        p9cont1++;
        f_ok($('#p9dcon6'));
      }else{
        p9cont1;
        f_no($('#p9dcon6'));
      }
      var result9=(p9cont1*1)/6;
      cor=cor+parseFloat(result9);
      inc=inc+(1-parseFloat(result9))
      $('#nota1_9').val(result9.toFixed(2));
      f_ok($('#nota1_9'));


      var p10dcon1=$('#p10dcon1').val().split('');
      var p10dcon2=$('#p10dcon2').val().split('');
      var p10dcon3=$('#p10dcon3').val().split('');
      var p10dcon4=$('#p10dcon4').val().split('');
      var p10cont1=0;
      if (p10dcon1.length==numero13) {
        p10cont1++;
        f_ok($('#p10dcon1'));
      }else{
        p10cont1;
        f_no($('#p10dcon1'));
      }
      if (p10dcon2.length==numero14) {
        p10cont1++;
        f_ok($('#p10dcon2'));
      }else{
        p10cont1;
        f_no($('#p10dcon2'));
      }
      if (p10dcon3.length==numero15) {
        p10cont1++;
        f_ok($('#p10dcon3'));
      }else{
        p10cont1;
        f_no($('#p10dcon3'));
      }
      if (p10dcon4.length==numero16) {
        p10cont1++;
        f_ok($('#p10dcon4'));
      }else{
        p10cont1;
        f_no($('#p10dcon4'));
      }
      var p10dcon11=$('#p10dcon11').val();
      var p10dcon12=$('#p10dcon12').val();
      var p10dcon13=$('#p10dcon13').val();
      var p10dcon14=$('#p10dcon14').val();
      if (p10dcon11==numero13) {
        p10cont1++;
        f_ok($('#p10dcon11'));
      }else{
        p10cont1;
        f_no($('#p10dcon11'));
      }
      if (p10dcon12==numero14) {
        p10cont1++;
        f_ok($('#p10dcon12'));
      }else{
        p10cont1;
        f_no($('#p10dcon12'));
      }
      if (p10dcon13==numero15) {
        p10cont1++;
        f_ok($('#p10dcon13'));
      }else{
        p10cont1;
        f_no($('#p10dcon13'));
      }
      if (p10dcon14==numero16) {
        p10cont1++;
        f_ok($('#p10dcon14'));
      }else{
        p10cont1;
        f_no($('#p10dcon14'));
      }

      var result10=(p10cont1*1)/8;
      cor=cor+parseFloat(result10);
      inc=inc+(1-parseFloat(result10))
      $('#nota1_10').val(result10.toFixed(2));
      f_ok($('#nota1_10'));
      Calculo_nota();
   }
   function campovacio(){
    var nota1_2=$('#nota1_2').val();
    if (!nota1_2) {
      alert('Ingrese una calificación en la pregunta 2');
    }else{
      f_comprobar();
    }
   }
}
