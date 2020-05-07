var titulos = "aplico";
var id = new Array();
var cont=0;
var mal=0;


function Inicio() {
    $('#nota-informativa').slideUp('slow');
} 

function Cargar() {
    Inicio();
    
};

function Divisor($rand1,vct,conte) {
    for(var $i=1;$i<=$rand1;$i++){
        if($rand1%$i==0){
        var $cont1=$cont1+1;
        vct.push($i);    
        var i = document.createElement("INPUT");

        i.setAttribute("type","text");
        i.setAttribute("value",$i);
        i.setAttribute("id",$cont1);
        i.setAttribute("class","caja");
        $(conte).append(i);
        }
    }
};

$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;
    $(':checkbox:checked').each(function(i){
        aux= $(this).val();
        auxn=parseInt(aux);
        id.push(auxn);
        cont=cont+1
       });

       vr=[2,4,5,6,7,10,14,15];

       for(i=0;i<cont+1;i++){

        for(j=0;j<9;j++){
            if(id[i]==vr[j]){
                nota=nota+1;                
            }
        }

       }

       b=$("#b").val();
       c=$("#c").val();
       d=$("#d").val();

       if(b==6132){
        $("#b").css("background-color", "green");
       }else{
        $("#b").css("background-color", "red");
       }

       if(c==7916){
        $("#c").css("background-color", "green");
       }else{
        $("#c").css("background-color", "red");
       }

       if(d==9720){
        $("#d").css("background-color", "green");
       }else{
        $("#d").css("background-color", "red");
       }


       







       div=cont;





    
       var notaFinal = (nota*10)/div;
       notaFinal = notaFinal.toFixed(2)
       $("#txtNota").text(+notaFinal +"/10");
       $('#Calificar').attr('disabled', true);

   
   });

});


