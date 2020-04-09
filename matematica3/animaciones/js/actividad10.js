var n1=0,sum_total=0,cont=0,ejer=5,itemsT=1*ejer,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
 function f_iniciar() {
    sum_total=0;
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    removerClase($(".c_destino"));
    $("#n_cont").html(cont+1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    $(".c_destino").html('');
    n1=(Math.floor(Math.random()*90)+10);
    $("#numero").html(n1);
    $("#numero").css('z-index','9');
    $(".drag").draggable({
        rever:"invalid",
        helper:"clone"
    });
   $(".drop").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function (index, value) {
                $(this).attr("style", "");
            })
            $(this).find(".drop").draggable({disabled:true});
            str= (ui.draggable.attr("id"));//capturamos los IDS
            str == 'b1' ? sum_total+=10:sum_total+=1;
        }
   });
   bt_comprobar.addEventListener("click", f_comprobar);
   function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var temp = $(".c_destino");
        if(sum_total==n1){
            cor++;
            f_ok(temp);
        }else{
            inc++;
            f_no(temp);
        }
        Calculo_nota();
   }
}