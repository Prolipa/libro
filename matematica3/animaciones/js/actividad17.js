var i,n2=0,cont=0,ejer=5,itemsT=4*ejer,cor=0,inc=0,calificacion=10,resp=[],nums=[],nn1=[],nn2=[];
var claseAnimada ='animate bounceIn';
for(i=10;i<101;i++){
    nums.push(i);
}
f_iniciar();
function f_iniciar() {
    nums.sort(f_randomico);
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $("#n_cont").html(cont+1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    $(".t1").val('').focus();
    resp=[]
    $(".nums").each(function(n2){                    
        $(this).html(nums[n2]);                    
        nn1.push($(this).text()[0]);
        nn2.push($(this).text()[1]);
    });
    $(".form-control")[0].focus();
    sinEspacios(".actividad1 .form-control");
    for(i=0;i<4;i++){
        if($(".n1").text()[i] > $(".n2").text()[i]){
            resp.push($(".n1").text()[i] + '>'+$(".n2").text()[i]);
        }else if($(".n1").text()[i] < $(".n2").text()[i]){
            resp.push($(".n1").text()[i] + '<'+$(".n2").text()[i]);
        }else{
            resp.push($(".n1").text()[i] + '='+$(".n2").text()[i]);
        }
    }
    $(".actividad1 .form-control").each(function(n2){                    
        //$(this).val(resp[n2]); //rspuestas
        $(this).val('');
        QuitaClase($(this),"correcto incorrecto");
    });
    //console.log(resp);
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;                    
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        $(".actividad1 .form-control").each(function(n2){                    
            var temp= $(this);
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