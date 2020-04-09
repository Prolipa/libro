var n1=0,sum_total=0,cont=0,ejer=1,itemsT=6,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
  var pal1=['<span class="bg_palabra c1">Sumando</span>',
        '<span class="bg_palabra c1">Suma</span>',
        '<span class="bg_palabra c1">Sumando</span>',
        '<span class="bg_palabra c2">Minuendo</span>',
        '<span class="bg_palabra c2">Sustraendo</span>',
        '<span class="bg_palabra c2">Diferencia</span>'];
  pal1.sort(f_randomico);
                    
  $(".textos").append(pal1);
  $(".bg_palabra").css('cursor','move');
                    
    $(".bg_palabra").draggable({
        revert:"invalid",
        zIndex:5,
        containment: ".actividad17",
        scroll: false,
    });
    
   $(".drop").droppable({
        drop: function(e, ui) {
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            
        }
   });

    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a106cim1=$('.a106cim1 .c1').length;
        var a106cim2=$('.a106cim2 .c1').length;
        var a106cim3=$('.a106cim3 .c1').length;
        var a106cim4=$('.a106cim4 .c2').length;
        var a106cim5=$('.a106cim5 .c2').length;
        var a106cim6=$('.a106cim6 .c2').length;
        if (a106cim1=='1') {
          cor++;
          f_ok($('.a106cim1'));
        }else{
          inc++;
          f_no($('.a106cim1'));
        }
        if (a106cim2=='1') {
          cor++;
          f_ok($('.a106cim2'));
        }else{
          inc++;
          f_no($('.a106cim2'));
        }
        if (a106cim3=='1') {
          cor++;
          f_ok($('.a106cim3'));
        }else{
          inc++;
          f_no($('.a106cim3'));
        }
        if (a106cim4=='1') {
          cor++;
          f_ok($('.a106cim4'));
        }else{
          inc++;
          f_no($('.a106cim4'));
        }
        if (a106cim5=='1') {
          cor++;
          f_ok($('.a106cim5'));
        }else{
          inc++;
          f_no($('.a106cim5'));
        }
        if (a106cim6=='1') {
          cor++;
          f_ok($('.a106cim6'));
        }else{
          inc++;
          f_no($('.a106cim6'));
        }
        Calculo_nota();
   }
}