var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',str1='',calificacion=10, sum_total=0,sum_total1=0,sum_total2=0;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 1)
});

 function f_iniciar() {
    
    $(".c_destino").html('');
    $(".c_destino1").html('');
    
    $(".drag").draggable({
        rever:"invalid",
        helper:"clone"
    });
   $(".drop").droppable({
        accept: ".drag",
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
   $(".drag1").draggable({
        rever:"invalid",
        helper:"clone"
    });
   $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop1").draggable({disabled:true});
            str1= (ui.draggable.attr("id"));//capturamos los IDS
            if (str1=='b2') {
                sum_total1+=1;
            }else if (str1=='b3') {
              sum_total2+=1;
            }
        }
   });
   var pal1=['<img src="img/i12_p134_act134.jpg" alt="1" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c1 ">',
        '<img src="img/i13_p134_act134.jpg" alt="2" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c1">',
        '<img src="img/i14_p134_act134.jpg" alt="3" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c1">',
        '<img src="img/i15_p134_act134.jpg" alt="4" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c1">',
        '<img src="img/i16_p134_act134.jpg" alt="5" style="mix-blend-mode: multiply; display:inline-block; min-width:10px;" class="img-responsive drag3 c2">',
        '<img src="img/i17_p134_act134.jpg" alt="6" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c2">',
        '<img src="img/i18_p134_act134.jpg" alt="7" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c2">',
        '<img src="img/i19_p134_act134.jpg" alt="8" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c2">',
        '<img src="img/i20_p134_act134.jpg" alt="9" style="mix-blend-mode: multiply; display:inline-block; min-width:40px;" class="img-responsive drag3 c2">'];
    var pal2=['<div><b>Líneas Rectas</b></div>',
        '<div><b>Líneas Curvas</b></div>'];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    var myArray1 = ['0','1'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 2 ; i++) {
            var c=myArray1[i-1];
            $(".p5cim1"+i).html(pal2[c]);
            
        };
    
    $(".drag3").draggable({
        revert:"invalid",
        zIndex:5,
        containment: ".actividad17",
        scroll: false,
    });
    
   $(".drop3").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag3");
            ui.draggable.attr("style", "mix-blend-mode: multiply; ");
            $(this).append(ui.draggable);
            
        }
   });
   bt_comprobar.addEventListener("click", f_comprobar);
   function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p2dcon1=$('#p2dcon1').val();
      var p2dcon2=$('#p2dcon2').val();
      var p2cont1=0;
      if (p2dcon1=='13') {
        p2cont1++;
        f_ok($('#p2dcon1'));
      }else{
        p2cont1;
        f_no($('#p2dcon1'));
      }
      if (p2dcon2=='12') {
        p2cont1++;
        f_ok($('#p2dcon2'));
      }else{
        p2cont1;
        f_no($('#p2dcon2'));
      }
      var p2dcon3=[$('#p2dcon3').val(),$('#p2dcon4').val()];
      var p2dcon4=p2dcon3.join('');
      var p2dcon5=[$('#p2dcon5').val(),$('#p2dcon6').val()];
      var p2dcon6=p2dcon5.join('');
      var p2dcon7=[$('#p2dcon7').val(),$('#p2dcon8').val()];
      var p2dcon8=p2dcon7.join('');
      if (p2dcon4=='13') {
        p2cont1++;
        f_ok($('#p2dcon4'));
        f_ok($('#p2dcon3'));
      }else{
        p2cont1;
        f_no($('#p2dcon4'));
        f_no($('#p2dcon3'));
      }
      if (p2dcon6=='12') {
        p2cont1++;
        f_ok($('#p2dcon6'));
        f_ok($('#p2dcon5'));
      }else{
        p2cont1;
        f_no($('#p2dcon6'));
        f_no($('#p2dcon5'));
      }
      if (p2dcon8=='25') {
        p2cont1++;
        f_ok($('#p2dcon8'));
        f_ok($('#p2dcon7'));
      }else{
        p2cont1;
        f_no($('#p2dcon8'));
        f_no($('#p2dcon7'));
      }
      var c_destino=$('.c_destino > img').length;
      if (c_destino=='25') {
        p2cont1++;
        f_ok($('.c_destino'));
        
      }else{
        p2cont1;
        f_no($('.c_destino'));
        
      }


      var p21dcon1=$('#p21dcon1').val();
      var p21dcon2=$('#p21dcon2').val();
      
      if (p21dcon1=='27') {
        p2cont1++;
        f_ok($('#p21dcon1'));
      }else{
        p2cont1;
        f_no($('#p21dcon1'));
      }
      if (p21dcon2=='11') {
        p2cont1++;
        f_ok($('#p21dcon2'));
      }else{
        p2cont1;
        f_no($('#p21dcon2'));
      }
      var p21dcon3=[$('#p21dcon3').val(),$('#p21dcon4').val()];
      var p21dcon4=p21dcon3.join('');
      var p21dcon5=[$('#p21dcon5').val(),$('#p21dcon6').val()];
      var p21dcon6=p21dcon5.join('');
      var p21dcon7=[$('#p21dcon7').val(),$('#p21dcon8').val()];
      var p21dcon8=p21dcon7.join('');
      if (p21dcon4=='27') {
        p2cont1++;
        f_ok($('#p21dcon4'));
        f_ok($('#p21dcon3'));
      }else{
        p2cont1;
        f_no($('#p21dcon4'));
        f_no($('#p21dcon3'));
      }
      if (p21dcon6=='11') {
        p2cont1++;
        f_ok($('#p21dcon6'));
        f_ok($('#p21dcon5'));
      }else{
        p2cont1;
        f_no($('#p21dcon6'));
        f_no($('#p21dcon5'));
      }
      if (p21dcon8=='16') {
        p2cont1++;
        f_ok($('#p21dcon8'));
        f_ok($('#p21dcon7'));
      }else{
        p2cont1;
        f_no($('#p21dcon8'));
        f_no($('#p21dcon7'));
      }
      
      if (sum_total1=='16' && sum_total2=='11' && (parseInt(sum_total1)+parseInt(sum_total2))=='27') {
        p2cont1++;
        f_ok($('.c_destino1'));
        
      }else{
        p2cont1;
        f_no($('.c_destino1'));
        
      }
      var result2=(p2cont1*2)/12;
      cor=cor+result2;
      inc=inc+(2-result2);
      $('#nota1_2').val(result2.toFixed(2));
      f_ok($('#nota1_2'));

      var p3imag1 =$('#p3imag1 > img').attr('alt');
      var p3imag2 =$('#p3imag2 > img').attr('alt');
      var p3imag3 =$('#p3imag3 > img').attr('alt');
      var p3imag4 =$('#p3imag4 > img').attr('alt');
      var p3imag5 =$('#p3imag5 > img').attr('alt');
      var p3cont1=0;
      if (p3imag1=='3') {
          p3cont1++;
          f_ok($('#p3imag1'));
        }else {
          p3cont1;
          f_no($('#p3imag1'));
        }
      if (p3imag2=='2') {
          p3cont1++;
          f_ok($('#p3imag2'));
        }else {
          p3cont1;
          f_no($('#p3imag2'));
        }
      if (p3imag3=='1') {
          p3cont1++;
          f_ok($('#p3imag3'));
        }else {
          p3cont1;
          f_no($('#p3imag3'));
        }
      if (p3imag4=='3') {
          p3cont1++;
          f_ok($('#p3imag4'));
        }else {
          p3cont1;
          f_no($('#p3imag4'));
        }
      if (p3imag5=='2') {
          p3cont1++;
          f_ok($('#p3imag5'));
        }else {
          p3cont1;
          f_no($('#p3imag5'));
        }
      var result3=(p3cont1*1)/5;
      cor=cor+result3;
      inc=inc+(1-result3);
      $('#nota1_3').val(result3.toFixed(2));
      f_ok($('#nota1_3'));

      var p4dcon1=$('#p4dcon1').val();
      var p4dcon2=$('#p4dcon2').val();
      var p4dcon3=$('#p4dcon3').val();
      var p4cont1=0;
      if (p4dcon1=='28') {
        p4cont1++;
        f_ok($('#p4dcon1'));
      }else{
        p4cont1;
        f_no($('#p4dcon1'));
      }
      if (p4dcon2=='11') {
        p4cont1++;
        f_ok($('#p4dcon2'));
      }else{
        p4cont1;
        f_no($('#p4dcon2'));
      }
      if (p4dcon3=='39') {
        p4cont1++;
        f_ok($('#p4dcon3'));
      }else{
        p4cont1;
        f_no($('#p4dcon3'));
      }
      var p4dcon4=[$('#p4dcon4').val(),$('#p4dcon5').val()];
      var p4dcon5=p4dcon4.join('');
      var p4dcon6=[$('#p4dcon6').val(),$('#p4dcon7').val()];
      var p4dcon7=p4dcon6.join('');
      var p4dcon8=[$('#p4dcon8').val(),$('#p4dcon9').val()];
      var p4dcon9=p4dcon8.join('');
      if (p4dcon5=='28') {
        p4cont1++;
        f_ok($('#p4dcon4'));
        f_ok($('#p4dcon5'));
      }else{
        p4cont1;
        f_no($('#p4dcon4'));
        f_no($('#p4dcon5'));
      }
      if (p4dcon7=='11') {
        p4cont1++;
        f_ok($('#p4dcon7'));
        f_ok($('#p4dcon6'));
      }else{
        p4cont1;
        f_no($('#p4dcon7'));
        f_no($('#p4dcon6'));
      }
      if (p4dcon9=='39') {
        p4cont1++;
        f_ok($('#p4dcon9'));
        f_ok($('#p4dcon8'));
      }else{
        p4cont1;
        f_no($('#p4dcon9'));
        f_no($('#p4dcon8'));
      }

      var p41dcon1=$('#p41dcon1').val();
      var p41dcon2=$('#p41dcon2').val();
      var p41dcon3=$('#p41dcon3').val();
      
      if (p41dcon1=='25') {
        p4cont1++;
        f_ok($('#p41dcon1'));
      }else{
        p4cont1;
        f_no($('#p41dcon1'));
      }
      if (p41dcon2=='12') {
        p4cont1++;
        f_ok($('#p41dcon2'));
      }else{
        p4cont1;
        f_no($('#p41dcon2'));
      }
      if (p41dcon3=='13') {
        p4cont1++;
        f_ok($('#p41dcon3'));
      }else{
        p4cont1;
        f_no($('#p41dcon3'));
      }
      var p41dcon4=[$('#p41dcon4').val(),$('#p41dcon5').val()];
      var p41dcon5=p41dcon4.join('');
      var p41dcon6=[$('#p41dcon6').val(),$('#p41dcon7').val()];
      var p41dcon7=p41dcon6.join('');
      var p41dcon8=[$('#p41dcon8').val(),$('#p41dcon9').val()];
      var p41dcon9=p41dcon8.join('');
      if (p41dcon5=='25') {
        p4cont1++;
        f_ok($('#p41dcon4'));
        f_ok($('#p41dcon5'));
      }else{
        p4cont1;
        f_no($('#p41dcon4'));
        f_no($('#p41dcon5'));
      }
      if (p41dcon7=='12') {
        p4cont1++;
        f_ok($('#p41dcon7'));
        f_ok($('#p41dcon6'));
      }else{
        p4cont1;
        f_no($('#p41dcon7'));
        f_no($('#p41dcon6'));
      }
      if (p41dcon9=='13') {
        p4cont1++;
        f_ok($('#p41dcon9'));
        f_ok($('#p41dcon8'));
      }else{
        p4cont1;
        f_no($('#p41dcon9'));
        f_no($('#p41dcon8'));
      }
      var result4=(p4cont1*1)/12;
      cor=cor+result4;
      inc=inc+(1-result4);
      $('#nota1_4').val(result4.toFixed(2));
      f_ok($('#nota1_4'));

      
      var p5cim1 =$('.p5im1 >img').length;
      var p5cim2 =$('.p5im2 >img').length;
      var p5cont1=0;
      var p5im1=0;
      var p5im2=0;
      if (myArray1[0]=='0') {
        p5im1 =$('.p5im1 .c2').length;
        p5im2 =$('.p5im2 .c1').length;
      }else{
        p5im1 =$('.p5im1 .c1').length;
        p5im2 =$('.p5im2 .c2').length;
      }
      if (myArray1[0]=='0') {
        if (p5im1=='5' && p5cim1=='5') {
          p5cont1++;
          f_ok($('.p5im1'));
          
        }else{
          p5cont1;
          f_no($('.p5im1'));
         
        }
        if (p5im2=='4' && p5cim2=='4') {
          p5cont1++;
          f_ok($('.p5im2'));
          
        }else{
          p5cont1;
          f_no($('.p5im2'));
         
        }
      }else{
        if (p5im1=='4' && p5cim1=='4') {
          p5cont1++;
          f_ok($('.p5im1'));
          
        }else{
          p5cont1;
          f_no($('.p5im1'));
         
        }
        if (p5im2=='5' && p5cim2=='5') {
          p5cont1++;
          f_ok($('.p5im2'));
          
        }else{
          p5cont1;
          f_no($('.p5im2'));
         
        }
      }
      
      var result5=(p5cont1*1)/2;
      cor=cor+result5;
      inc=inc+(1-result5);
      $('#nota1_5').val(result5.toFixed(2));
      f_ok($('#nota1_5'));


      var p6dcon4=$('#p6dcon4').val().toLowerCase();
      var p6dcon5=$('#p6dcon5').val();
      var p6dcon6=$('#p6dcon6').val();
      var p6dcon7=$('#p6dcon7').val();
      var p6cont1=0;
      if (p6dcon4=='azul') {
        p6cont1++;
        f_ok($('#p6dcon4'));
      }else{
        p6cont1;
        f_no($('#p6dcon4'));
      }
      if (p6dcon5=='10') {
        p6cont1++;
        f_ok($('#p6dcon5'));
      }else{
        p6cont1;
        f_no($('#p6dcon5'));
      }
      if (p6dcon6=='4') {
        p6cont1++;
        f_ok($('#p6dcon6'));
      }else{
        p6cont1;
        f_no($('#p6dcon6'));
      }
      if (p6dcon7=='19') {
        p6cont1++;
        f_ok($('#p6dcon7'));
      }else{
        p6cont1;
        f_no($('#p6dcon7'));
      }
      var result6=(p6cont1*2)/4;
      cor=cor+result6;
      inc=inc+(2-result6);
      $('#nota1_6').val(result6.toFixed(2));
      f_ok($('#nota1_6'));

      var nota1_1=$('#nota1_1').val();
        
        if (!nota1_1) {
          inc=inc+1;
          f_no($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }else{
          cor=cor+parseFloat(nota1_1);
          inc=inc+(1-parseFloat(nota1_1));
          f_ok($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }
      Calculo_nota();
   }
}