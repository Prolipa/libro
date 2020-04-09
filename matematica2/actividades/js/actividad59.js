var n1=0,sum_total=0,cont=0,ejer=1,itemsT=3,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
 function f_iniciar() {
    sum_total=0;
    sum_total1=0;
    $(".c_destino").html('');
    
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
   bt_comprobar.addEventListener("click", f_comprobar);
   function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        
        var temp = $(".c_destino");
        
        if(sum_total=='9'){
            cor++;
            f_ok(temp);
        }else{
            inc++;
            f_no(temp);
        }
        var a59dcon1=$('#a59dcon1').val();
        var a59dcon2=$('#a59dcon2').val();
        if (a59dcon1=='9') {
            cor++;
            f_ok($('#a59dcon1'));
        }else {
            inc++;
            f_no($('#a59dcon1'));
        }
        if (a59dcon2=='10') {
            cor++;
            f_ok($('#a59dcon2'));
        }else {
            inc++;
            f_no($('#a59dcon2'));
        }
        Calculo_nota();
   }
}