var n1=0,n2=0,cont=0,ejer=10,itemsT=3*ejer,cor=0,inc=0,calificacion=10,inputs=[],resp=[], resp_temp=[],t1,t2,obj;
var claseAnimada ='animate bounceIn';           
inputs=['a0','a1','a2','a3','a4','a5'];
f_iniciar();
 function f_iniciar() {
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $("#n_cont").html(cont+1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    resp=[],resp_temp=[];
    n1=(Math.floor(Math.random()*80)+20);
    n2=(Math.floor(Math.random()*4)+1);
    sinEspacios(".actividad1 .form-control");
    $('.input_txt').each(function(){
        $(this).val('');
        QuitaClase(this,"color_disabled");                    
        QuitaClase(this,"correcto incorrecto");                    
        var temp = $(this);
        $(temp).removeAttr('disabled','disabled');   
        //removerClase(temp);              
     });                 
    n2 == 1 ? $("#a1").focus():$("#a0").focus();
    t1=String(n1)[0]+'Dy'+String(n1)[1]+'U';
    t2=String(n1)[0]*10 + "+"+String(n1)[1];
    if(n2 == 1){
        $("#a0").val(n1);
        obj="#a0";
        resp.push(t1,t2,n1);
    }else if(n2== 2){
        $("#a1").val(t1);
        obj="#a1";
        resp.push(n1,t2,n1);
    }else if(n2==3){
        $("#a2").val(t2);
        obj="#a2";
        resp.push(n1,t1,n1);
    }else{
        $("#a3").val(n1);
        obj="#a3";
        resp.push(n1,t1,t2);
    }
    AgregaClase(obj,'color_disabled');
    $(obj).attr('disabled','disabled');
    //console.log(resp);
    /*$('input:enabled').each(function(index){ //respuestas
        $(this).val(resp[index]);
     });*/
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        $('input:enabled').each(function(){
            resp_temp.push($(this).val());
        });
        //console.log(resp_temp);
        for(i=0; i<resp.length;i++){
            var temp = $('input:enabled');
            if(resp_temp[i]==resp[i]){
                cor++;
                f_ok(temp);
            }else{
                inc++;
                f_no(temp);
            }
            }
        Calculo_nota();
    }
}