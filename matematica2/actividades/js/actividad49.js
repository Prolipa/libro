var n1=0,sum_total=0,cont=0,ejer=1,itemsT=6,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
 function f_iniciar() {
    sum_total=0;
    sum_total1=0;
    $(".c_destino").html('');
    $(".c_destino1").html('');
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
   $(".drop1").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop1").draggable({disabled:true});
            str= (ui.draggable.attr("id"));//capturamos los IDS
            if (str=='b1') {
                sum_total1+=1;
            }
        }
   });
   bt_comprobar.addEventListener("click", f_comprobar);
   function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var temp = $(".c_destino");
        var temp1 = $(".c_destino1");
        if(sum_total=='4'){
            cor++;
            f_ok(temp);
        }else{
            inc++;
            f_no(temp);
        }
        if(sum_total1=='3'){
            cor++;
            f_ok(temp1);
        }else{
            inc++;
            f_no(temp1);
        }
        var a49dcon1=$('#a49dcon1').val();
        var a49dcon2=$('#a49dcon2').val();
        var a49dcon3=$('#a49dcon3').val();
        var a49dcon4=$('#a49dcon4').val();
        if (a49dcon1=='4') {
           cor++;
            f_ok($('#a49dcon1'));
        }else{
            inc++;
            f_no($('#a49dcon1'));
        }
        if (a49dcon2=='3') {
           cor++;
            f_ok($('#a49dcon2'));
        }else{
            inc++;
            f_no($('#a49dcon2'));
        }
        if (a49dcon3=='7') {
           cor++;
            f_ok($('#a49dcon3'));
        }else{
            inc++;
            f_no($('#a49dcon3'));
        }
        if (a49dcon4=='7') {
           cor++;
            f_ok($('#a49dcon4'));
        }else{
            inc++;
            f_no($('#a49dcon4'));
        }
        Calculo_nota();
   }
}