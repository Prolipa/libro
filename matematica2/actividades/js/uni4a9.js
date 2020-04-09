var n1=0,sum_total1=0,sum_total2=0,sum_total3=0,sum_total4=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str1='',str2='',str3='',str4='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case 'enc1 1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            

            break;
        case 'enc2 1':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            
            break;
        case 'enc3 1':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            break;
        

    }
});
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case 'enc1 1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            

            break;
        case 'enc2 1':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            
            break;
        case 'enc3 1':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            break;
        

    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case 'enc4 2':
            $('.enc4').addClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            

            break;
        case 'enc5 2':
            $('.enc5').addClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            
            break;
        case 'enc6 2':
            $('.enc6').addClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
        

    }
});
 function f_iniciar() {
    sum_total1=0;
    
    
    
    $(".drag1").draggable({
        rever:"invalid",
        helper:"clone"
    });
   $(".drop1").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop1").draggable({disabled:true});
            str1= (ui.draggable.attr("id"));//capturamos los IDS
            if (str1=='b1') {
                sum_total1+=25;
            }else if (str1=='b2') {
                sum_total1+=10;
            }else if (str1=='b3') {
                sum_total1+=5;
            }
        }
   });
   sum_total2=0;
   $(".drop2").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop2").draggable({disabled:true});
            str2= (ui.draggable.attr("id"));//capturamos los IDS
            if (str2=='b1') {
                sum_total2+=25;
            }else if (str2=='b2') {
                sum_total2+=10;
            }else if (str2=='b3') {
                sum_total2+=5;
            }
        }
   });
   sum_total3=0;
   $(".drop3").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop3").draggable({disabled:true});
            str3= (ui.draggable.attr("id"));//capturamos los IDS
            if (str3=='b1') {
                sum_total3+=25;
            }else if (str3=='b2') {
                sum_total3+=10;
            }else if (str3=='b3') {
                sum_total3+=5;
            }
        }
   });
   sum_total4=0;
   $(".drop4").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop4").draggable({disabled:true});
            str4= (ui.draggable.attr("id"));//capturamos los IDS
            if (str4=='b1') {
                sum_total4+=25;
            }else if (str4=='b2') {
                sum_total4+=10;
            }else if (str4=='b3') {
                sum_total4+=5;
            }
        }
   });
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p4res1=$('#p4res1 .encierra').text();
        var p4res2=$('#p4res2 .encierra').text();
       
        if (!p4res1) {
          inc++;
          f_no($('.enc1'));
          f_no($('.enc2'));
          f_no($('.enc3'));
        }else{
          if (p4res1=='$ 55') {
            cor++;
            f_ok($('#p4res1 .encierra'));
          }else{
            inc++;
            f_no($('#p4res1 .encierra'));
          }  
        }
        
        if (!p4res2) {
          inc++;
          f_no($('.enc4'));
          f_no($('.enc5'));
          f_no($('.enc6'));
        }else{
          if (p4res2=='75 ¢') {
            cor++;
            f_ok($('#p4res2 .encierra'));
          }else{
            inc++;
            f_no($('#p4res2 .encierra'));
          }  
        }
        
    var p5cont1=0;    
    if (sum_total1=='100') {
        p5cont1++;
        f_ok($('.p5res1'));
    }else{
        p5cont1;
        f_no($('.p5res1'));
    }
        
    if (sum_total2=='100') {
        p5cont1++;
        f_ok($('.p5res2'));
    }else{
        p5cont1;
        f_no($('.p5res2'));
    }
        
    if (sum_total3=='100') {
        p5cont1++;
        f_ok($('.p5res3'));
    }else{
        p5cont1;
        f_no($('.p5res3'));
    }

    if (sum_total4=='100') {
        p5cont1++;
        f_ok($('.p5res4'));
    }else{
        p5cont1;
        f_no($('.p5res4'));
    }
    var result5=(p5cont1*2)/4;
    cor=cor + result5;
    inc= inc + (2-result5);
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
        Calculo_nota();
   }
}