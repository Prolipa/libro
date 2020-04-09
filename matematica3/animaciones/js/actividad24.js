var bg_r=0,n1=0,n2=0,n3=0,n4=0,n5=0,n6=0,nrA=0,nrB=0,nrC=0, nrD=0, ejer=5,cont=0,itemsT=12*ejer,tmp,cor=0,inc=0,calificacion=10,resp=[], i_nums=[],tmp_res=[];
var claseAnimada ='animate bounceIn';
f_iniciar();
function f_iniciar(){
    $("#n_cont").html(cont+1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $(".t1")[0].focus()
    f_suma();
    $(".t1, .t2").each(function(index){
        $(this).val('');
        $(this).attr("maxlength","1");
        QuitaClase($(this), 'correcto incorrecto');
        //$(this).val(resp[index]);//respuestas
    });
    $(".n1").each(function(i){
        $(this).html(i_nums[i]);
    });
    //console.log(resp,i_nums);
    
    $( ".btnCalificar" ).bind( "click", function() { //click en el boton iniciar
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        $( this).unbind( "click" );
        cont++;
        $(".t1, .t2").each(function(index){
            tmp = $(this);
           if(tmp.val()== resp[index]){
                cor++
                f_ok(tmp);
           }else{
                inc++
                f_no(tmp);
           }                        
        });
        Calculo_nota();
    });
   function f_suma(){
        resp=[], i_nums=[];
        n1=(Math.floor(Math.random()*9)+1);
        n2=(Math.floor(Math.random()*9)+1);
        n3=(Math.floor(Math.random()*9)+1);
        n4=(Math.floor(Math.random()*9)+1);
        n5=(Math.floor(Math.random()*9)+1);
        n6=(Math.floor(Math.random()*9)+1);
        nrA= n1+n2;
        nrB= n3+n4;
        nrC= nrA-n5;
        nrD= nrB-n6;
        i_nums.push(String(n1)+String(n3),String(n2)+String(n4),String(n5)+String(n6)); //numero del problema
        if(nrA<10 && nrB<10 && nrC>0 && nrD>0){
            resp.push(n1,n3,n2,n4,nrA,nrB,nrA,nrB,n5,n6,nrC,nrD);
        }else{
            f_suma();
        }                    
    }
}