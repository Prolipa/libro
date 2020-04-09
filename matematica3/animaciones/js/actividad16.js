 var n1=0,n2=0,cont=0,ejer=5,itemsT=4*ejer,cor=0,inc=0,calificacion=10,resp=[];
var claseAnimada ='animate bounceIn';           
f_iniciar();
 function f_iniciar() {
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $("#n_cont").html(cont+1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    $(".set-width")[0].focus();
    resp=[];                
    $(".cj1").each(function(index){
        n1=(Math.floor(Math.random()*89)+10);
        n2=(Math.floor(Math.random()*89)+10);
        $(".n"+index).html(n1);
        $(".m"+index).html(n2);
       if(n1>n2){
        resp.push('>');
       }else if(n2>n1){
            resp.push("<");
       }else{
            resp.push("=")
       }
       $(".set-width").val('');
       QuitaClase($(".set-width"),"correcto incorrecto");  
    });
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        var temp;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        $('.set-width').each(function(index){
            temp = $(this);
            if($(this).val()==resp[index] ){
                cor++;
                f_ok(temp);
            }else{
                inc++;
                f_no(temp);
            };
        });                    
        Calculo_nota();
    }
}