var n1=0,sum_total1=0,sum_total2=0,sum_total3=0,sum_total4=0,sum_total5=0,sum_total6=0,sum_total7=0,sum_total8=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str1='',str2='',str3='',str4='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
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
            
        }
   });
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        
        var p2dcon11=$('#p2dcon11').val();
        var p2dcon2=$('#p2dcon2').val();
        var p2dcon3=$('#p2dcon3').val();
        var p2dcon14=$('#p2dcon14').val();
        var p2cont1=0;
        if (p2dcon11=='7') {
          p2cont1++;
          f_ok($('#p2dcon11'));
        }else{
          p2cont1;
          f_no($('#p2dcon11'));
        }
        if (p2dcon2=='llllll') {
          p2cont1++;
          f_ok($('#p2dcon2'));
        }else{
          p2cont1;
          f_no($('#p2dcon2'));
        }
        if (p2dcon3=='lllll') {
          p2cont1++;
          f_ok($('#p2dcon3'));
        }else{
          p2cont1;
          f_no($('#p2dcon3'));
        }
        if (p2dcon14=='8') {
          p2cont1++;
          f_ok($('#p2dcon14'));
        }else{
          p2cont1;
          f_no($('#p2dcon14'));
        }

        var result2=(p2cont1*2)/4
        cor=cor + result2;
        inc= inc + (2 - result2);

        var p2res1=$('.p2res1 img').length;
        var p2res2=$('.p2res2 img').length;
        var p2res3=$('.p2res3 img').length;
        var p2res4=$('.p2res4 img').length;
        var p2cont2=0;
        if (p2res1=='7') {
          p2cont2++;
          f_ok($('.p2res1'));
        }else{
          p2cont2;
          f_no($('.p2res1'));
        }
        if (p2res2=='6') {
          p2cont2++;
          f_ok($('.p2res2'));
        }else{
          p2cont2;
          f_no($('.p2res2'));
        }
        if (p2res3=='5') {
          p2cont2++;
          f_ok($('.p2res3'));
        }else{
          p2cont2;
          f_no($('.p2res3'));
        }
        if (p2res4=='8') {
          p2cont2++;
          f_ok($('.p2res4'));
        }else{
          p2cont2;
          f_no($('.p2res4'));
        }
        var result3=(p2cont2*2)/4
        cor=cor + result3;
        inc= inc + (2 - result3);
        var p4dcon1 =$('#p4dcon1').val();
        var p4dcon2 =$('#p4dcon2').val();
        var p4dcon3 =$('#p4dcon3').val();
        var p4dcon4 =$('#p4dcon4').val();
        var p4dcon5 =$('#p4dcon5').val();
        var p4cont3=0;
        if (p4dcon1=='8') {
          p4cont3++;
          f_ok($('#p4dcon1'));
        }else{
          p4cont3;
          f_no($('#p4dcon1'));
        }
        if (p4dcon2=='la cometa' || p4dcon2=='las cometas' || p4dcon2=='cometa' || p4dcon2=='cometas') {
          p4cont3++;
          f_ok($('#p4dcon2'));
        }else{
          p4cont3;
          f_no($('#p4dcon2'));
        }
        if (p4dcon3=='13') {
          p4cont3++;
          f_ok($('#p4dcon3'));
        }else{
          p4cont3;
          f_no($('#p4dcon3'));
        }
        var p4vec1=['el trompo','los trompos','trompo','trompos','la pelota','las pelotas','pelota','pelotas'];
        var p4cont1=0;
        for (var i =0; i < p4vec1.length; i++) {
          if (p4dcon4==p4vec1[i]) {
            p4cont1++;
            p4vec1[i]=p4cont1;
          }
        }
        if (p4cont1=='1') {
          p4cont3++;
          f_ok($('#p4dcon4'));
        }else{
          p4cont3;
          f_no($('#p4dcon4'));
        }
        var p4cont2=0;
        for (var i =0; i < p4vec1.length; i++) {
          if (p4dcon5==p4vec1[i]) {
            p4cont2++;
            p4vec1[i]=p4cont2;
          }
        }
        if (p4cont2=='1') {
          p4cont3++;
          f_ok($('#p4dcon5'));
        }else{
          p4cont3;
          f_no($('#p4dcon5'));
        }
        var result4=(p4cont3*2)/5
        cor=cor + result4;
        inc= inc + (2 - result4);
        var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+4;
        f_no($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(4-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }
        Calculo_nota();
   }
}