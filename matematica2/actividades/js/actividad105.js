var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
  
    $(".drag").draggable({
        rever:"invalid",
        helper:"clone"
    });
   $(".drop").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop").draggable({disabled:true});
            str= (ui.draggable.attr("id"));//capturamos los IDS
            str == 'b1' ? sum_total+=1:sum_total-=1;
        }
   });

   var numero = parseInt((Math.random() * 5) + 1);
   var numero1 = parseInt((Math.random() * 4) + 1);
   var numero2= numero + numero1;
   $('#a105im1').html(numero);
   $('#a105im2').html(numero1);
   $('#a105im3').html(numero2);

   var numero3 = parseInt((Math.random() * 9) + 1);
   var numero4 = parseInt((Math.random() * 9) + 1);
   var a105aux1=0;
   var a105aux2=0;
   var a105aux3=0;
   if (numero3>numero4) {
    a105aux1=numero3;
    a105aux2=numero4;
    a105aux3=numero3 - numero4;
   }else{
    a105aux1=numero4;
    a105aux2=numero3;
    a105aux3=numero4 - numero3;
   }
   $('#a105im4').html(a105aux1);
   $('#a105im5').html(a105aux2);
   $('#a105im6').html(a105aux3);
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a105cim1=$('.a105cim1 .c1').length;
        var a105cim2=$('.a105cim2 .c1').length;
        var a105cim3=$('.a105cim3 .c1').length;
        var a105cim4=$('.a105cim4 .c1').length;
        var a105cim5=$('.a105cim4 .c2').length;
        var a105cim6=$('.a105cim2 .c2').length;
        var a105cim7=$('.a105cim1 .c2').length;
        var a105cim8=$('.a105cim3 .c2').length;
        var a105ca1= parseInt(a105cim4) + parseInt(a105cim5);
        if (a105cim7=='0') {
          if (a105cim1== numero) {
            cor++;
            f_ok($('.a105cim1'));
          }else{
            inc++;
            f_no($('.a105cim1'));
          }
        }else{
          inc++;
          f_no($('.a105cim1'));
        }
        if (a105cim6=='0') {
          if (a105cim2== numero1) {
            cor++;
            f_ok($('.a105cim2'));
          }else{
            inc++;
            f_no($('.a105cim2'));
          }
        }else{
          inc++;
          f_no($('.a105cim2'));
        }
        if (a105cim8=='0') {
          if (a105cim3== numero2) {
            cor++;
            f_ok($('.a105cim3'));
          }else{
            inc++;
            f_no($('.a105cim3'));
          }
        }else{
          inc++;
          f_no($('.a105cim3'));
        }
        if (a105cim4== a105aux3 && a105cim5== a105aux2 && a105ca1== a105aux1) {
            cor++;
            f_ok($('.a105cim4'));
          }else{
            inc++;
            f_no($('.a105cim4'));
          }

        var a105dcon1=$('#a105dcon1').val().toLowerCase();
        var a105dcon2=$('#a105dcon2').val().toLowerCase();
        var a105dcon3=$('#a105dcon3').val().toLowerCase();
        var a105dcon4=$('#a105dcon4').val().toLowerCase();
        var a105dcon5=$('#a105dcon5').val().toLowerCase();
        var a105dcon6=$('#a105dcon6').val().toLowerCase();
        
        if (a105dcon1=='sumando') {
          cor++;
          f_ok($('#a105dcon1'));
        }else{
          inc++;
          f_no($('#a105dcon1'));
        }
        if (a105dcon2=='sumando') {
          cor++;
          f_ok($('#a105dcon2'));
        }else{
          inc++;
          f_no($('#a105dcon2'));
        }
        if (a105dcon3=='suma' || a105dcon3=='total' || a105dcon3=='suma o total') {
          cor++;
          f_ok($('#a105dcon3'));
        }else{
          inc++;
          f_no($('#a105dcon3'));
        }
        
        if (a105dcon4=='minuendo') {
          cor++;
          f_ok($('#a105dcon4'));
        }else{
          inc++;
          f_no($('#a105dcon4'));
        }
        if (a105dcon5=='sustraendo') {
          cor++;
          f_ok($('#a105dcon5'));
        }else{
          inc++;
          f_no($('#a105dcon5'));
        }
        if (a105dcon6=='diferencia') {
          cor++;
          f_ok($('#a105dcon6'));
        }else{
          inc++;
          f_no($('#a105dcon6'));
        }  
        Calculo_nota();
   }
}