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
 function f_iniciar() {
    var p1vec1 = ['Hormiga','Libélula','Abeja','Loro','Pájaro','Mariposa'];
    var p1vec2=['I','I','I','I','I','I'];
    var myArray1 = ['0','1','2','3','4','5'];
    var p1vec3=['∈','∈','∈','∉','∉','∈']
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
      $("#p1per"+(i)).html(p1vec1[c]);
      $("#p1per1"+(i)).html(p1vec2[c]);
      p1vec4.push(p1vec3[c]);
    };
    $(".c_destino").html('');
    $(".c_destino1").html('');
    $(".c_destino2").html('');
    $(".drag").draggable({
        rever:"invalid",
        helper:"clone"
    });
   $(".drop").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop").draggable({disabled:true});
            str= (ui.draggable.attr("id"));//capturamos los IDS
            if (str=='b1') {
                sum_total+=1;
            }
        }
   });

   $(".c_destinos").html('');
    $(".c_destinos1").html('');
    $(".c_destinos2").html('');
    
   $(".drop1").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop1").draggable({disabled:true});
            str= (ui.draggable.attr("id"));//capturamos los IDS
            if (str=='b2') {
                sum_total+=1;
            }
        }
   });
   var numero= parseInt((Math.random() * 5) + 1);
   var numero1= parseInt((Math.random() * 4) + 1);
   var numero2= parseInt((Math.random() * 5) + 1);
   var numero3= parseInt((Math.random() * 4) + 1);
   $("#p2dcon1").val(numero);
   $("#p2dcon1").attr('disabled','true');
   $("#p2dcon2").val(numero1);
   $("#p2dcon2").attr('disabled','true');
   $("#p2dcon11").val(numero2);
   $("#p2dcon11").attr('disabled','true');
   $("#p2dcon12").val(numero3);
   $("#p2dcon12").attr('disabled','true');


   var p3vec1=[];
   var numero4= parseInt((Math.random() * 9) + 1);
   var numero5= parseInt((Math.random() * 9) + 1);
   var p3nm1=0;
   var p3nm2=0;
   var p3nm3=0;
   if (numero4>numero5) {
      p3nm1=numero4;
      p3nm2=numero5;
      p3nm3=numero4 - numero5;
   }else{
      p3nm1=numero5;
      p3nm2=numero4;
      p3nm3=numero5 - numero4;
   }
   for (var i = 0; i < p3nm2; i++) {
      p3vec1.push('<img src="img/i4_p92_act92.jpg" class="img-responsive" style="display: inline-block;" alt="">');
   }
   for (var i = 0; i < p3nm3; i++) {
      p3vec1.push('<img src="img/i3_p92_act92.jpg" class="img-responsive" style="display: inline-block;" alt="">');
   }
   $("#p3im1").html(p3vec1);

   var p3vec2=[];
   var numero6= parseInt((Math.random() * 9) + 1);
   var numero7= parseInt((Math.random() * 9) + 1);
   var p3nm4=0;
   var p3nm5=0;
   var p3nm6=0;
   if (numero6>numero7) {
      p3nm4=numero6;
      p3nm5=numero7;
      p3nm6=numero6 - numero7;
   }else{
      p3nm4=numero7;
      p3nm5=numero6;
      p3nm6=numero7 - numero6;
   }
   for (var i = 0; i < p3nm5; i++) {
      p3vec2.push('<img src="img/i6_p92_act92.jpg" class="img-responsive" style="display: inline-block;" alt="">');
   }
   for (var i = 0; i < p3nm6; i++) {
      p3vec2.push('<img src="img/i5_p92_act92.jpg" class="img-responsive" style="display: inline-block;" alt="">');
   }
   $("#p3im2").html(p3vec2);

   var numero7= [parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10)];
   var numero8= [parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10),parseInt((Math.random() * 20) + 10)];
   var p4vec1=[];
   for (var i = 0; i < numero7.length; i++) {
     $("#p4im"+(i+1)).html(numero7[i]);
     $("#p4im1"+(i+1)).html(numero8[i]);
     if (numero7[i]>numero8[i]) {
      p4vec1.push('>');
     }else if (numero7[i]==numero8[i]) {
      p4vec1.push('=');
     }else if (numero7[i]<numero8[i]) {
      p4vec1.push('<');
     }
   }

   bt_comprobar.addEventListener("click", f_comprobar);
   function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var conte1=$('#conte1').val();
      var conte2=$('#conte2').val();
      var conte3=$('#conte3').val();
      var conte4=$('#conte4').val();
      var conte5=$('#conte5').val();
      var conte6=$('#conte6').val();
      var p1cont1=0;
      if (conte1==p1vec4[0]) {
        p1cont1++;
        f_ok($('#conte1'));
      }else{
        p1cont1;
        f_no($('#conte1'));
      }
      if (conte2==p1vec4[1]) {
        p1cont1++;
        f_ok($('#conte2'));
      }else{
        p1cont1;
        f_no($('#conte2'));
      }
      if (conte3==p1vec4[2]) {
        p1cont1++;
        f_ok($('#conte3'));
      }else{
        p1cont1;
        f_no($('#conte3'));
      }
      if (conte4==p1vec4[3]) {
        p1cont1++;
        f_ok($('#conte4'));
      }else{
        p1cont1;
        f_no($('#conte4'));
      }
      if (conte5==p1vec4[4]) {
        p1cont1++;
        f_ok($('#conte5'));
      }else{
        p1cont1;
        f_no($('#conte5'));
      }
      if (conte6==p1vec4[5]) {
        p1cont1++;
        f_ok($('#conte6'));
      }else{
        p1cont1;
        f_no($('#conte6'));
      }
      var result1=(p1cont1*1)/6;
      cor=cor+parseFloat(result1);
      inc=inc+(1-parseFloat(result1))
      if (result1>=0.6) {
        f_ok($('#p1fe1'));
      }else{
        f_no($('#p1tr1'));
      }

      var c_destino=$('.c_destino img').length;
      var c_destino1=$('.c_destino1 img').length;
      var c_destino2=$('.c_destino2 img').length;
      var c_destino3=$('.c_destinos img').length;
      var c_destino4=$('.c_destinos1 img').length;
      var c_destino5=$('.c_destinos2 img').length;
      var p2cont1=0;
      if (c_destino==numero) {
        p2cont1++;
        f_ok($('.c_destino'));
      }else{
        p2cont1;
        f_no($('.c_destino'));
      }
      if (c_destino1==numero1) {
        p2cont1++;
        f_ok($('.c_destino1'));
      }else{
        p2cont1;
        f_no($('.c_destino1'));
      }
      if (c_destino2==(numero + numero1)) {
        p2cont1++;
        f_ok($('.c_destino2'));
      }else{
        p2cont1;
        f_no($('.c_destino2'));
      }
      if (c_destino3==(numero2)) {
        p2cont1++;
        f_ok($('.c_destinos'));
      }else{
        p2cont1;
        f_no($('.c_destinos'));
      }
      if (c_destino4==numero3) {
        p2cont1++;
        f_ok($('.c_destinos1'));
      }else{
        p2cont1;
        f_no($('.c_destinos1'));
      }
      if (c_destino5==(numero2 + numero3)) {
        p2cont1++;
        f_ok($('.c_destinos2'));
      }else{
        p2cont1;
        f_no($('.c_destinos2'));
      }
      var p2dcon3=$('#p2dcon3').val();
      var p2dcon13=$('#p2dcon13').val();
      if (p2dcon3==(numero + numero1)) {
        p2cont1++;
        f_ok($('#p2dcon3'));
      }else{
        p2cont1;
        f_no($('#p2dcon3'));
      }
      if (p2dcon13==(numero2 + numero3)) {
        p2cont1++;
        f_ok($('#p2dcon13'));
      }else{
        p2cont1;
        f_no($('#p2dcon13'));
      }

      var result2=(p2cont1*1)/8;
      cor=cor+parseFloat(result2);
      inc=inc+(1-parseFloat(result2))
      if (result2>=0.6) {
        f_ok($('#p2fe1'));
      }else{
        f_no($('#p2tr1'));
      }
      

      var p3dcon1=$('#p3dcon1').val();
      var p3dcon2=$('#p3dcon2').val();
      var p3dcon3=$('#p3dcon3').val();
      var p3dcon4=$('#p3dcon11').val();
      var p3dcon5=$('#p3dcon12').val();
      var p3dcon6=$('#p3dcon13').val();
      var p3cont1=0;
      if (p3dcon1==p3nm1) {
        p3cont1++;
        f_ok($('#p3dcon1'));
      }else{
        p3cont1;
        f_no($('#p3dcon1'));
      }
      if (p3dcon2==p3nm2) {
        p3cont1++;
        f_ok($('#p3dcon2'));
      }else{
        p3cont1;
        f_no($('#p3dcon2'));
      }
      if (parseInt(p3dcon3)==p3nm3) {
        p3cont1++;
        f_ok($('#p3dcon3'));
      }else{
        p3cont1;
        f_no($('#p3dcon3'));
      }
      if (p3dcon4==p3nm4) {
        p3cont1++;
        f_ok($('#p3dcon11'));
      }else{
        p3cont1;
        f_no($('#p3dcon11'));
      }
      if (p3dcon5==p3nm5) {
        p3cont1++;
        f_ok($('#p3dcon12'));
      }else{
        p3cont1;
        f_no($('#p3dcon12'));
      }
      if (parseInt(p3dcon6)==p3nm6) {
        p3cont1++;
        f_ok($('#p3dcon13'));
      }else{
        p3cont1;
        f_no($('#p3dcon13'));
      }
      var result3=(p3cont1*1)/6;
      cor=cor+parseFloat(result3);
      inc=inc+(1-parseFloat(result3))
      if (result3>=0.6) {
        f_ok($('#p3fe1'));
      }else{
        f_no($('#p3tr1'));
      }

      var p4sel1=$('#p4sel1').val();
      var p4sel2=$('#p4sel2').val();
      var p4sel3=$('#p4sel3').val();
      var p4sel4=$('#p4sel4').val();
      var p4sel5=$('#p4sel5').val();
      var p4sel6=$('#p4sel6').val();
      var p4cont1=0;
      if (p4sel1==p4vec1[0]) {
        p4cont1++;
        f_ok($('#p4sel1'));
      }else{
        p4cont1;
        f_no($('#p4sel1'));
      }
      if (p4sel2==p4vec1[1]) {
        p4cont1++;
        f_ok($('#p4sel2'));
      }else{
        p4cont1;
        f_no($('#p4sel2'));
      }
      if (p4sel3==p4vec1[2]) {
        p4cont1++;
        f_ok($('#p4sel3'));
      }else{
        p4cont1;
        f_no($('#p4sel3'));
      }
      if (p4sel4==p4vec1[3]) {
        p4cont1++;
        f_ok($('#p4sel4'));
      }else{
        p4cont1;
        f_no($('#p4sel4'));
      }
      if (p4sel5==p4vec1[4]) {
        p4cont1++;
        f_ok($('#p4sel5'));
      }else{
        p4cont1;
        f_no($('#p4sel5'));
      }
      if (p4sel6==p4vec1[5]) {
        p4cont1++;
        f_ok($('#p4sel6'));
      }else{
        p4cont1;
        f_no($('#p4sel6'));
      }
      var result4=(p4cont1*1)/6;
      cor=cor+parseFloat(result4);
      inc=inc+(1-parseFloat(result4))
      if (result4>=0.6) {
        f_ok($('#p4fe1'));
      }else{
        f_no($('#p4tr1'));
      }

      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+2;
        f_no($('#nota1_1'));
        f_no($('#p5tr1'));
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(2-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        if (parseFloat(nota1_1)>=1.4) {
          f_ok($('#p5fe1'));
        }else{
          f_no($('#p5tr1'));
        }
      }
      var nota1_2=$('#nota1_2').val();
      if (!nota1_2) {
        inc=inc+2;
        f_no($('#nota1_2'));
        f_no($('#p6tr1'));
      }else{
        cor=cor+parseFloat(nota1_2);
        inc=inc+(2-parseFloat(nota1_2));
        f_ok($('#nota1_2'));
        if (parseFloat(nota1_2)>=1.4) {
          f_ok($('#p6fe1'));
        }else{
          f_no($('#p6tr1'));
        }
      }
      var nota1_3=$('#nota1_3').val();
      if (!nota1_3) {
        inc=inc+2;
        f_no($('#nota1_3'));
        f_no($('#p7tr1'));
      }else{
        cor=cor+parseFloat(nota1_3);
        inc=inc+(2-parseFloat(nota1_3));
        f_ok($('#nota1_3'));
        if (parseFloat(nota1_3)>=1.4) {
          f_ok($('#p7fe1'));
        }else{
          f_no($('#p7tr1'));
        }
      }
      Calculo_nota();
   }
}