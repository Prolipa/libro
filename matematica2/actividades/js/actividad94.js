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
    validNumero(0, 2, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2)
});
 function f_iniciar() {
    
    var p1vec1 = ['oso','manzana','león','piña','mono','pera'];
    var p1vec2=['S','F','F','S','F','F'];
    var p1vec3=['∈','∈','∉','∉','∉','∈'];
    var myArray1 = ['0','1','2','3','4','5'];
    var p1vec4=[];
    var i,j,k;
    for (i = myArray1.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray1[i - 1];
      myArray1[i - 1] = myArray1[j];
      myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 6 ; i++) {
      var c=myArray1[i-1];
      $("#p1in"+(i)).html(p1vec1[c]);
      $("#p1in1"+(i)).html(p1vec2[c]);
      p1vec4.push(p1vec3[c]);
    };


    var p3vec1=[];
    var p3vec2=[];
    
    var numero= parseInt((Math.random() * 5) + 1);
    var numero1= parseInt((Math.random() * 4) + 1);
    var numero2=numero + numero1;
    for (var i =0; i < numero; i++) {
      p3vec1.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 30px;" class="img-responsive" src="img/i6_p98_act94.jpg" alt="">');
    }
    for (var i =0; i < numero1; i++) {
      p3vec2.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 30px;" class="img-responsive" src="img/i6_p98_act94.jpg" alt="">');
    }
    
    $("#p3im1").html(p3vec1);
    $("#p3im2").html(p3vec2);
    
    var p3vec3=[];
    var numero3= parseInt((Math.random() * 9) + 1);
    var numero4= parseInt((Math.random() * 9) + 1);
    var p3aux1=0;
    var p3aux2=0;
    var p3aux3=0;
    if (numero3>numero4) {
      p3aux1=numero3;
      p3aux2=numero4;
      p3aux3=numero3 - numero4;
    }else{
      p3aux1=numero4;
      p3aux2=numero3;
      p3aux3=numero4 - numero3;
    }
    
    for (var i =0; i < p3aux2; i++) {
      p3vec3.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 30px;" class="img-responsive" src="img/i8_p98_act94.jpg" alt="">');
    }
    for (var i =0; i < p3aux3; i++) {
      p3vec3.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 30px;" class="img-responsive" src="img/i7_p98_act94.jpg" alt="">');
    }
    
    $("#p3im3").html(p3vec3);
    
    var p3vec4=[];
    var p3vec5=[];
    
    var numero5= parseInt((Math.random() * 5) + 1);
    var numero6= parseInt((Math.random() * 4) + 1);
    var numero7=numero5 + numero6;
    for (var i =0; i < numero5; i++) {
      p3vec4.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 30px;" class="img-responsive" src="img/i6_p98_act94.jpg" alt="">');
    }
    for (var i =0; i < numero6; i++) {
      p3vec5.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 30px;" class="img-responsive" src="img/i6_p98_act94.jpg" alt="">');
    }
    
    $("#p3im4").html(p3vec4);
    $("#p3im5").html(p3vec5);

    var p3vec6=[];
    var numero8= parseInt((Math.random() * 9) + 1);
    var numero9= parseInt((Math.random() * 9) + 1);
    var p3aux4=0;
    var p3aux5=0;
    var p3aux6=0;
    if (numero8>numero9) {
      p3aux4=numero8;
      p3aux5=numero9;
      p3aux6=numero8 - numero9;
    }else{
      p3aux4=numero9;
      p3aux5=numero8;
      p3aux6=numero9 - numero8;
    }
    
    for (var i =0; i < p3aux6; i++) {
      p3vec6.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 30px;" class="img-responsive" src="img/i7_p98_act94.jpg" alt="">');
    }
    for (var i =0; i < p3aux5; i++) {
      p3vec6.push('<img style="mix-blend-mode: multiply; display: inline-block;mix-blend-mode: multiply; width: 30px;" class="img-responsive" src="img/i8_p98_act94.jpg" alt="">');
    }
    
    $("#p3im6").html(p3vec6);

    var p4vec1=['<img src="img/i9_p98_act94.jpg" class="img-responsive" alt=""><input  onkeypress="return soloNumeros1(event)"  type="text" id="p4dcon1" maxlength="2"  style=" text-align:center; width:  40px; border-radius: 5px; border:2px solid #927AB2;">',
    '<img src="img/i10_p98_act94.jpg" class="img-responsive" alt=""><input  onkeypress="return soloNumeros1(event)"  type="text" id="p4dcon2" maxlength="2"  style=" text-align:center; width:  40px; border-radius: 5px; border:2px solid #927AB2;">',
    '<img src="img/i11_p98_act94.jpg" class="img-responsive" alt=""><input  onkeypress="return soloNumeros1(event)"  type="text" id="p4dcon3" maxlength="2"  style=" text-align:center; width:  40px; border-radius: 5px; border:2px solid #927AB2;">',
    '<img src="img/i12_p98_act94.jpg" class="img-responsive" alt=""><input  onkeypress="return soloNumeros1(event)"  type="text" id="p4dcon4" maxlength="2"  style=" text-align:center; width:  40px; border-radius: 5px; border:2px solid #927AB2;">',
    '<img src="img/i13_p98_act94.jpg" class="img-responsive" alt=""><input  onkeypress="return soloNumeros1(event)"  type="text" id="p4dcon5" maxlength="2"  style=" text-align:center; width:  40px; border-radius: 5px; border:2px solid #927AB2;">'];

    var myArray2 = ['0','1','2','3','4'];
    
    var i,j,k;
    for (i = myArray2.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray2[i - 1];
      myArray2[i - 1] = myArray2[j];
      myArray2[j] = k;
    }
    //aleatorio literal 2
    for (var i = 1; i <= 5 ; i++) {
      var c=myArray2[i-1];
      $("#p4im"+(i)).html(p4vec1[c]);
      
    };
    var p5num1= parseInt((Math.random() * 20) + 10);
    var p5num2= parseInt((Math.random() * 20) + 10);
    var p5num3= parseInt((Math.random() * 20) + 10);
    var p5num4= parseInt((Math.random() * 20) + 10);
    var p5num5= parseInt((Math.random() * 20) + 10);
    var p5num6= parseInt((Math.random() * 20) + 10);
    var p5num7= parseInt((Math.random() * 20) + 10);
    var p5num8= parseInt((Math.random() * 20) + 10);
    var p5vec1=[(p5num1 - 1),p5num1,(p5num1 + 1)];
    var p5vec2=[(p5num2 - 1),p5num2,(p5num2 + 1)];
    var p5vec3=[(p5num3 - 1),p5num3,(p5num3 + 1)];
    var p5vec4=[(p5num4 - 1),p5num4,(p5num4 + 1)];
    var p5vec5=[(p5num5 - 1),p5num5,(p5num5 + 1)];
    var p5vec6=[(p5num6 - 1),p5num6,(p5num6 + 1)];
    var p5vec7=[(p5num7 - 1),p5num7,(p5num7 + 1)];
    var p5vec8=[(p5num8 - 1),p5num8,(p5num8 + 1)];

    var myArray3 = ['0','1','2'];
    
    var i,j,k;
    for (i = myArray3.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray3[i - 1];
      myArray3[i - 1] = myArray3[j];
      myArray3[j] = k;
    }
    //aleatorio literal 3
    for (var i = 1; i <= 1 ; i++) {
      var d1=myArray3[i-1];
      $("#p5dcon"+(parseInt(d1) + 1)).val(p5vec1[d1]);
      $("#p5dcon"+(parseInt(d1) + 1)).attr('disabled','true');
    };
    var myArray4 = ['0','1','2'];
    
    var i,j,k;
    for (i = myArray4.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray4[i - 1];
      myArray4[i - 1] = myArray4[j];
      myArray4[j] = k;
    }
    //aleatorio literal 3
    for (var i = 1; i <= 1 ; i++) {
      var d2=myArray4[i-1];
      $("#p5dcon"+(parseInt(d2) + 4)).val(p5vec2[d2]);
      $("#p5dcon"+(parseInt(d2) + 4)).attr('disabled','true');
    };
    var myArray5 = ['0','1','2'];
    
    var i,j,k;
    for (i = myArray5.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray5[i - 1];
      myArray5[i - 1] = myArray5[j];
      myArray5[j] = k;
    }
    //aleatorio literal 3
    for (var i = 1; i <= 1 ; i++) {
      var d3=myArray5[i-1];
      $("#p5dcon"+(parseInt(d3) + 7)).val(p5vec3[d3]);
      $("#p5dcon"+(parseInt(d3) + 7)).attr('disabled','true');
    };
    var myArray6 = ['0','1','2'];
    
    var i,j,k;
    for (i = myArray6.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray6[i - 1];
      myArray6[i - 1] = myArray6[j];
      myArray6[j] = k;
    }
    //aleatorio literal 3
    for (var i = 1; i <= 1 ; i++) {
      var d4=myArray6[i-1];
      $("#p5dcon"+(parseInt(d4) + 10)).val(p5vec4[d4]);
      $("#p5dcon"+(parseInt(d4) + 10)).attr('disabled','true');
    };

    var myArray7 = ['0','1','2'];
    
    var i,j,k;
    for (i = myArray7.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray7[i - 1];
      myArray7[i - 1] = myArray7[j];
      myArray7[j] = k;
    }
    //aleatorio literal 3
    for (var i = 1; i <= 1 ; i++) {
      var d5=myArray7[i-1];
      $("#p51dcon"+(parseInt(d5) + 1)).val(p5vec5[d5]);
      $("#p51dcon"+(parseInt(d5) + 1)).attr('disabled','true');
    };
    var myArray8 = ['0','1','2'];
    
    var i,j,k;
    for (i = myArray8.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray8[i - 1];
      myArray8[i - 1] = myArray8[j];
      myArray8[j] = k;
    }
    //aleatorio literal 3
    for (var i = 1; i <= 1 ; i++) {
      var d6=myArray8[i-1];
      $("#p51dcon"+(parseInt(d6) + 4)).val(p5vec6[d6]);
      $("#p51dcon"+(parseInt(d6) + 4)).attr('disabled','true');
    };
    var myArray9 = ['0','1','2'];
    
    var i,j,k;
    for (i = myArray9.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray9[i - 1];
      myArray9[i - 1] = myArray9[j];
      myArray9[j] = k;
    }
    //aleatorio literal 3
    for (var i = 1; i <= 1 ; i++) {
      var d7=myArray9[i-1];
      $("#p51dcon"+(parseInt(d7) + 7)).val(p5vec7[d7]);
      $("#p51dcon"+(parseInt(d7) + 7)).attr('disabled','true');
    };
    var myArray10 = ['0','1','2'];
    
    var i,j,k;
    for (i = myArray10.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray10[i - 1];
      myArray10[i - 1] = myArray10[j];
      myArray10[j] = k;
    }
    //aleatorio literal 3
    for (var i = 1; i <= 1 ; i++) {
      var d8=myArray10[i-1];
      $("#p51dcon"+(parseInt(d8) + 10)).val(p5vec8[d8]);
      $("#p51dcon"+(parseInt(d8) + 10)).attr('disabled','true');
    };


    var p6num1= [parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10)];
    var p6num2= [parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10)];
    var p6vec1=[];
    for (var i = 0; i < p6num1.length; i++) {
     $("#p6im"+(i+1)).html(p6num1[i]);
     $("#p6im1"+(i+1)).html(p6num2[i]);
     if (p6num1[i]>p6num2[i]) {
      p6vec1.push('>');
     }else if (p6num1[i]==p6num2[i]) {
      p6vec1.push('=');
     }else if (p6num1[i]<p6num2[i]) {
      p6vec1.push('<');
     }
   }

   var p8num1= parseInt((Math.random() * 15) + 5);
   var p8num2= parseInt((Math.random() * 15) + 5);
   var p8num3= parseInt((Math.random() * 15) + 5);
   var p8vec1=[];
   for (var i = 0; i < p8num1; i++) {
      p8vec1.push('<h3 style="display: inline-block;">&nbsp;x&nbsp;</h3>');
   }
   for (var i = 0; i < p8num2; i++) {
      p8vec1.push('<h3 style="display: inline-block;">&nbsp;o&nbsp;</h3>');
   }
   for (var i = 0; i < p8num3; i++) {
      p8vec1.push('<h3 style="display: inline-block;">&nbsp;c&nbsp;</h3>');
   }
   p8vec1.sort((a,b)=>a-b);
   $("#p8im1").html(p8vec1);
   bt_comprobar.addEventListener("click", campovacio);
   function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", campovacio);
      var p1sel1=$('#p1sel1').val();
      var p1sel2=$('#p1sel2').val();
      var p1sel3=$('#p1sel3').val();
      var p1sel4=$('#p1sel4').val();
      var p1sel5=$('#p1sel5').val();
      var p1sel6=$('#p1sel6').val();
      var p1cont1=0;
      if (p1sel1== p1vec4[0]) {
        p1cont1++;
        f_ok($('#p1sel1'));
      }else{
        p1cont1;
        f_no($('#p1sel1'));
      }
      if (p1sel2== p1vec4[1]) {
        p1cont1++;
        f_ok($('#p1sel2'));
      }else{
        p1cont1;
        f_no($('#p1sel2'));
      }
      if (p1sel3== p1vec4[2]) {
        p1cont1++;
        f_ok($('#p1sel3'));
      }else{
        p1cont1;
        f_no($('#p1sel3'));
      }
      if (p1sel4== p1vec4[3]) {
        p1cont1++;
        f_ok($('#p1sel4'));
      }else{
        p1cont1;
        f_no($('#p1sel4'));
      }
      if (p1sel5== p1vec4[4]) {
        p1cont1++;
        f_ok($('#p1sel5'));
      }else{
        p1cont1;
        f_no($('#p1sel5'));
      }
      if (p1sel6== p1vec4[5]) {
        p1cont1++;
        f_ok($('#p1sel6'));
      }else{
        p1cont1;
        f_no($('#p1sel6'));
      }
      var result1=(p1cont1 * 1)/6;
      cor=cor + result1;
      inc=inc + (1 - result1);

      var imag1 = $('#imag1 img').attr('alt');
      var imag2 = $('#imag2 img').attr('alt');
      var p2cont1=0;
      if (imag1=='2') {
        p2cont1++;
        f_ok($('#imag1'));
      }else{
        p2cont1;
        f_no($('#imag1'));
      }
      if (imag2=='1') {
        p2cont1++;
        f_ok($('#imag2'));
      }else{
        p2cont1;
        f_no($('#imag2'));
      }
      var result2=(p2cont1 * 1)/2;
      cor=cor + result2;
      inc=inc + (1 - result2);

      var p3dcon1=$('#p3dcon1').val();
      var p3dcon2=$('#p3dcon2').val();
      var p3dcon3=$('#p3dcon3').val();
      var p3dcon4=$('#p3dcon4').val();
      var p3dcon5=$('#p3dcon5').val();
      var p3dcon6=$('#p3dcon6').val();
      var p3dcon7=$('#p3dcon7').val();
      var p3dcon8=$('#p3dcon8').val();
      var p3dcon9=$('#p3dcon9').val();
      var p3dcon10=$('#p3dcon10').val();
      var p3dcon11=$('#p3dcon11').val();
      var p3dcon12=$('#p3dcon12').val();
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
      if (p3dcon7==numero5) {
        p3cont1++;
        f_ok($('#p3dcon7'));
      }else{
        p3cont1;
        f_no($('#p3dcon7'));
      }
      if (p3dcon8==numero6) {
        p3cont1++;
        f_ok($('#p3dcon8'));
      }else{
        p3cont1;
        f_no($('#p3dcon8'));
      }
      if (p3dcon9==numero7) {
        p3cont1++;
        f_ok($('#p3dcon9'));
      }else{
        p3cont1;
        f_no($('#p3dcon9'));
      }

      if (p3dcon4==p3aux1) {
        p3cont1++;
        f_ok($('#p3dcon4'));
      }else{
        p3cont1;
        f_no($('#p3dcon4'));
      }
      if (p3dcon5==p3aux2) {
        p3cont1++;
        f_ok($('#p3dcon5'));
      }else{
        p3cont1;
        f_no($('#p3dcon5'));
      }
      if (parseInt(p3dcon6)==p3aux3) {
        p3cont1++;
        f_ok($('#p3dcon6'));
      }else{
        p3cont1;
        f_no($('#p3dcon6'));
      }
      if (p3dcon10==p3aux4) {
        p3cont1++;
        f_ok($('#p3dcon10'));
      }else{
        p3cont1;
        f_no($('#p3dcon10'));
      }
      if (p3dcon11==p3aux5) {
        p3cont1++;
        f_ok($('#p3dcon11'));
      }else{
        p3cont1;
        f_no($('#p3dcon11'));
      }
      if (parseInt(p3dcon12)==p3aux6) {
        p3cont1++;
        f_ok($('#p3dcon12'));
      }else{
        p3cont1;
        f_no($('#p3dcon12'));
      }
      var result3=(p3cont1 * 1)/12;
      cor=cor + result3;
      inc=inc + (1 - result3);

      var p4dcon1= $('#p4dcon1').val();
      var p4dcon2= $('#p4dcon2').val();
      var p4dcon3= $('#p4dcon3').val();
      var p4dcon4= $('#p4dcon4').val();
      var p4dcon5= $('#p4dcon5').val();
      var p4cont1=0;
      if (p4dcon1=='11') {
        p4cont1++;
        f_ok($('#p4dcon1'));
      }else{
        p4cont1;
        f_no($('#p4dcon1'));
      }
      if (p4dcon2=='20') {
        p4cont1++;
        f_ok($('#p4dcon2'));
      }else{
        p4cont1;
        f_no($('#p4dcon2'));
      }
      if (p4dcon3=='17') {
        p4cont1++;
        f_ok($('#p4dcon3'));
      }else{
        p4cont1;
        f_no($('#p4dcon3'));
      }
      if (p4dcon4=='26') {
        p4cont1++;
        f_ok($('#p4dcon4'));
      }else{
        p4cont1;
        f_no($('#p4dcon4'));
      }
      if (p4dcon5=='14') {
        p4cont1++;
        f_ok($('#p4dcon5'));
      }else{
        p4cont1;
        f_no($('#p4dcon5'));
      }
      var result4=(p4cont1 * 1)/5;
      cor=cor + result4;
      inc=inc + (1 - result4);

      var p5dcon1= $('#p5dcon'+(parseInt(myArray3[1]) + 1)).val();
      var p5dcon2= $('#p5dcon'+(parseInt(myArray3[2]) + 1)).val();
      var p5dcon3= $('#p5dcon'+(parseInt(myArray4[1]) + 4)).val();
      var p5dcon4= $('#p5dcon'+(parseInt(myArray4[2]) + 4)).val();
      var p5dcon5= $('#p5dcon'+(parseInt(myArray5[1]) + 7)).val();
      var p5dcon6= $('#p5dcon'+(parseInt(myArray5[2]) + 7)).val();
      var p5dcon7= $('#p5dcon'+(parseInt(myArray6[1]) + 10)).val();
      var p5dcon8= $('#p5dcon'+(parseInt(myArray6[2]) + 10)).val();
      var p5dcon9= $('#p51dcon'+(parseInt(myArray7[1]) + 1)).val();
      var p5dcon10= $('#p51dcon'+(parseInt(myArray7[2]) + 1)).val();
      var p5dcon11= $('#p51dcon'+(parseInt(myArray8[1]) + 4)).val();
      var p5dcon12= $('#p51dcon'+(parseInt(myArray8[2]) + 4)).val();
      var p5dcon13= $('#p51dcon'+(parseInt(myArray9[1]) + 7)).val();
      var p5dcon14= $('#p51dcon'+(parseInt(myArray9[2]) + 7)).val();
      var p5dcon15= $('#p51dcon'+(parseInt(myArray10[1]) + 10)).val();
      var p5dcon16= $('#p51dcon'+(parseInt(myArray10[2]) + 10)).val();
      var p5cont1=0;
      if (p5dcon1==(p5vec1[myArray3[1]])) {
        p5cont1++;
        f_ok($('#p5dcon'+(parseInt(myArray3[1]) + 1)));
      }else{
        p5cont1;
        f_no($('#p5dcon'+(parseInt(myArray3[1]) + 1)));
      }
      if (p5dcon2==(p5vec1[myArray3[2]])) {
        p5cont1++;
        f_ok($('#p5dcon'+(parseInt(myArray3[2]) + 1)));
      }else{
        p5cont1;
        f_no($('#p5dcon'+(parseInt(myArray3[2]) + 1)));
      }
      
      if (p5dcon3==(p5vec2[myArray4[1]])) {
        p5cont1++;
        f_ok($('#p5dcon'+(parseInt(myArray4[1]) + 4)));
      }else{
        p5cont1;
        f_no($('#p5dcon'+(parseInt(myArray4[1]) + 4)));
      }
      if (p5dcon4==(p5vec2[myArray4[2]])) {
        p5cont1++;
        f_ok($('#p5dcon'+(parseInt(myArray4[2]) + 4)));
      }else{
        p5cont1;
        f_no($('#p5dcon'+(parseInt(myArray4[2]) + 4)));
      }

      if (p5dcon5==(p5vec3[myArray5[1]])) {
        p5cont1++;
        f_ok($('#p5dcon'+(parseInt(myArray5[1]) + 7)));
      }else{
        p5cont1;
        f_no($('#p5dcon'+(parseInt(myArray5[1]) + 7)));
      }
      if (p5dcon6==(p5vec3[myArray5[2]])) {
        p5cont1++;
        f_ok($('#p5dcon'+(parseInt(myArray5[2]) + 7)));
      }else{
        p5cont1;
        f_no($('#p5dcon'+(parseInt(myArray5[2]) + 7)));
      }

      if (p5dcon7==(p5vec4[myArray6[1]])) {
        p5cont1++;
        f_ok($('#p5dcon'+(parseInt(myArray6[1]) + 10)));
      }else{
        p5cont1;
        f_no($('#p5dcon'+(parseInt(myArray6[1]) + 10)));
      }
      if (p5dcon8==(p5vec4[myArray6[2]])) {
        p5cont1++;
        f_ok($('#p5dcon'+(parseInt(myArray6[2]) + 10)));
      }else{
        p5cont1;
        f_no($('#p5dcon'+(parseInt(myArray6[2]) + 10)));
      }

      if (p5dcon9==(p5vec5[myArray7[1]])) {
        p5cont1++;
        f_ok($('#p51dcon'+(parseInt(myArray7[1]) + 1)));
      }else{
        p5cont1;
        f_no($('#p51dcon'+(parseInt(myArray7[1]) + 1)));
      }
      if (p5dcon10==(p5vec5[myArray7[2]])) {
        p5cont1++;
        f_ok($('#p51dcon'+(parseInt(myArray7[2]) + 1)));
      }else{
        p5cont1;
        f_no($('#p51dcon'+(parseInt(myArray7[2]) + 1)));
      }

      if (p5dcon11==(p5vec6[myArray8[1]])) {
        p5cont1++;
        f_ok($('#p51dcon'+(parseInt(myArray8[1]) + 4)));
      }else{
        p5cont1;
        f_no($('#p51dcon'+(parseInt(myArray8[1]) + 4)));
      }
      if (p5dcon12==(p5vec6[myArray8[2]])) {
        p5cont1++;
        f_ok($('#p51dcon'+(parseInt(myArray8[2]) + 4)));
      }else{
        p5cont1;
        f_no($('#p51dcon'+(parseInt(myArray8[2]) + 4)));
      }

      if (p5dcon13==(p5vec7[myArray9[1]])) {
        p5cont1++;
        f_ok($('#p51dcon'+(parseInt(myArray9[1]) + 7)));
      }else{
        p5cont1;
        f_no($('#p51dcon'+(parseInt(myArray9[1]) + 7)));
      }
      if (p5dcon14==(p5vec7[myArray9[2]])) {
        p5cont1++;
        f_ok($('#p51dcon'+(parseInt(myArray9[2]) + 7)));
      }else{
        p5cont1;
        f_no($('#p51dcon'+(parseInt(myArray9[2]) + 7)));
      }

      if (p5dcon15==(p5vec8[myArray10[1]])) {
        p5cont1++;
        f_ok($('#p51dcon'+(parseInt(myArray10[1]) + 10)));
      }else{
        p5cont1;
        f_no($('#p51dcon'+(parseInt(myArray10[1]) + 10)));
      }
      if (p5dcon16==(p5vec8[myArray10[2]])) {
        p5cont1++;
        f_ok($('#p51dcon'+(parseInt(myArray10[2]) + 10)));
      }else{
        p5cont1;
        f_no($('#p51dcon'+(parseInt(myArray10[2]) + 10)));
      }

      var result5=(p5cont1 * 2)/16;
      cor=cor + result5;
      inc=inc + (2 - result5);

      var p6sel1=$('#p6sel1').val();
      var p6sel2=$('#p6sel2').val();
      var p6sel3=$('#p6sel3').val();
      var p6sel4=$('#p6sel4').val();
      var p6sel5=$('#p6sel5').val();
      var p6sel6=$('#p6sel6').val();
      var p6sel7=$('#p6sel7').val();
      var p6sel8=$('#p6sel8').val();
      var p6sel9=$('#p6sel9').val();

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
      if (p6sel9==p6vec1[8]) {
        p6cont1++;
        f_ok($('#p6sel9'));
      }else{
        p6cont1;
        f_no($('#p6sel9'));
      }
      var result6=(p6cont1 * 1)/9;
      cor=cor + result6;
      inc=inc + (1 - result6);

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

      var p8dcon1=$('#p8dcon1').val().split('');
      var p8dcon2=$('#p8dcon2').val().split('');
      var p8dcon3=$('#p8dcon3').val().split('');
      var p8dcon11=$('#p8dcon11').val();
      var p8dcon12=$('#p8dcon12').val();
      var p8dcon13=$('#p8dcon13').val();
      var p8cont1=0;
      if (p8dcon1.length==p8num1) {
        p8cont1++;
        f_ok($('#p8dcon1'));
      }else{
        p8cont1;
        f_no($('#p8dcon1'));
      }
      if (p8dcon2.length==p8num2) {
        p8cont1++;
        f_ok($('#p8dcon2'));
      }else{
        p8cont1;
        f_no($('#p8dcon2'));
      }
      if (p8dcon3.length==p8num3) {
        p8cont1++;
        f_ok($('#p8dcon3'));
      }else{
        p8cont1;
        f_no($('#p8dcon3'));
      }
      if (p8dcon11==p8num1) {
        p8cont1++;
        f_ok($('#p8dcon11'));
      }else{
        p8cont1;
        f_no($('#p8dcon11'));
      }
      if (p8dcon12==p8num2) {
        p8cont1++;
        f_ok($('#p8dcon12'));
      }else{
        p8cont1;
        f_no($('#p8dcon12'));
      }
      if (p8dcon13==p8num3) {
        p8cont1++;
        f_ok($('#p8dcon13'));
      }else{
        p8cont1;
        f_no($('#p8dcon13'));
      }
      var result8=(p8cont1 * 1)/6;
      cor=cor + result8;
      inc=inc + (1 - result8);
      Calculo_nota();
   }
   function campovacio(){
    var nota1_1=$('#nota1_1').val();
    if (!nota1_1) {
      alert('Ingrese una calificación en la pregunta 7');
    }else{
      f_comprobar();
    }
   }
}
