var titulos = "aplico";
var id=new Array();
vrd=new Array();
d=new Array();

function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $('#Calificar').attr('disabled', false);
    
    
    
   
} 
function Cargar() {
    Inicio();
  
}
function calificar(num,a,nombre){
    
    sim="#";
    nom=sim+nombre;
    if(a==num){
        nota=nota+1;
        $(nom).css("background-color", "green");
     }else{
         $(nom).css("background-color", "red");
     }
    
    return nota;

}

function limpiar(nombre){
    sim="#";
    nom=sim+nombre;
    nota=0;
    
    $(nom).css("background-color", "white");
    

}

$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;

        a=$("#a").val();
        if(a==1){
            nota=nota+1;
            $("#a").css("background-color", "green");
        }else{
            $("#a").css("background-color", "red");
        }

        b=$("#b").val();
        if(b==10){
            nota=nota+1;
            $("#b").css("background-color", "green");
        }else{
            $("#b").css("background-color", "red");
        }

        $(':checkbox:checked').each(function(i){
            aux= $(this).val();
            auxn=parseInt(aux);
            id.push(auxn);
           });
        
        vr=[8,9,10];

        for(i=0;i<id.length;i++){
            for(j=0;j<vr.length;j++){
            if(id[i]==vr[j]){
                nota=nota+1;
            }
            }
        }
        aux=$("#d1").val();
        d[1]=parseInt(aux);
        aux=$("#d2").val();
        d[2]=parseInt(aux);
        aux=$("#d3").val();
        d[3]=parseInt(aux);
        aux=$("#d4").val();
        d[4]=parseInt(aux);
        aux=$("#d5").val();
        d[5]=parseInt(aux);
        aux=$("#d6").val();
        d[6]=parseInt(aux);
        aux=$("#d7").val();
        d[7]=parseInt(aux);
        aux=$("#d8").val();
        d[8]=parseInt(aux);
        
        nombre="d";
        vrd=[0,11711233,12548538,21090792,21337152,4,3,2,1];

        for(i=1;i<=8;i++){
            notad=calificar(d[i],vrd[i],nombre+i);
        }

        

       
       
       
       
        

        var notaFinal = (nota*10)/13;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);

    
    });
     
 
});