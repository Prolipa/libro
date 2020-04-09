var i,n1=0,n2=0,n3=0,nr=0,cont=0,ejer=5,itemsT=6*ejer,cor=0,inc=0,calificacion=10,resp=[],sw=0,nn1=0,nn2=0,nn3=0,n_tmp=0, n_mult=0,n_sum=0,n_multip=0;
var claseAnimada ='animate bounceIn';            
f_iniciar();
function f_iniciar() {
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $("#n_cont").html(cont+1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();                
    sinEspacios(".actividad1 .form-control");
    n1=(Math.floor(Math.random()*50)+10);
    $(".frs").each(function(n2){                    
        $(this).attr("placeholder",'0');
        $(this).val('');
        QuitaClase($(this),"correcto incorrecto");
    });
    $(".frs")[0].focus();
    sw=(Math.floor(Math.random()*3));
    resp=[];
    f_nnums();
    function f_nnums(){
        n1 = Math.floor(Math.random()*7)+1;
        n2 = Math.floor(Math.random()*9)+1;
        n3 = Math.floor(Math.random()*9)+1;
        n_tmp =String(n1)+ String(n2);
        nn1 = n1*10;
        nn2 = n2*10;
        nn3 = n3*10;
        s_tt=nn1+nn3;
        s_tt1=s_tt+n2;
        n_sum = parseInt(n_tmp)+n_mult;
        if(n1+n3 < 10){
            if(sw==1){
                $(".sumandos").html(n_tmp + ' + ' + nn3);
                resp.push(nn1,nn3,s_tt,s_tt,n2,s_tt1);
            }else{
                $(".sumandos").html( nn3  + ' + ' + n_tmp);
                resp.push(nn3,nn1,s_tt,s_tt,n2,s_tt1);
            }
            nr = n1+n2;                            
        }else{
            f_nnums();
        }
    }
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;                    
        var temp;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        $(".frs").each(function(n2){                    
            temp= $(this);
            if(temp.val()==resp[n2]){
                cor++;
                f_ok(temp);
            }else{
                inc++;
                f_no(temp);
            }    
        });
        Calculo_nota();
    }
}