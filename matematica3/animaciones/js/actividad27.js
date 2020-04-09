var ejer=10,itemsT=(8*ejer),cont=0,tmp,cor=0,inc=0,calificacion=10,claseAnimada='animate bounceIn';
var bg_r=0,n1=0,n2=0,n3=0,n4=0,resp=[],i_nums=[],img1,img2,y1,y2,decr,op=0;
f_iniciar();
function f_iniciar(){
    $("#n_cont").html(cont+1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $(".t1")[0].focus()
    f_suma();
    $(".t1, .s1").each(function(index){
        $(this).val('');
        $(this).attr("maxlength","1");
        QuitaClase($(this), 'correcto incorrecto');
        //$(this).val(resp[index]);//respuestas
    });
     $(".n1").each(function(i){
        $(this).html(i_nums[i]); //numeros del ejercicio
    });
    $( ".btnCalificar" ).bind( "click", function() { //click en el boton iniciar
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        $( this).unbind( "click" );
        cont++;
        $(".s1, .t1").each(function(index){
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
        nrA= n1+n2+1; //mas uno ya q controlamos q la primera suma debe superar los 10
        nrB= n3+n4;
        i_nums.push(String(n1)+String(n3),String(n2)+String(n4), nrA+String(nrB)[1]);
        if(nrA<10 && nrB>9){
            resp.push(1,n1,n3,n2,n4,nrA,1,String(nrB)[1]); //incluyo el numero 1, par los 2 subindices
        }else{
            f_suma();
        }            
    }
}