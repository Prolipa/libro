var titulos = "aplico";
var id=new Array();
vrd=new Array();
var vcta=new Array();

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

function cojerdatos(nombre){
    sim="#";
    nom=sim+nombre;
    aux=$(nom).val();
    vcta.push(parseInt(aux)); 
    debugger;
}



$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;
        nombre="a";
        vra=[20,35,40,60,21,28,35,56,63,9,18,54,72,99];
        for(i=0;i<=13;i++){
            cojerdatos(nombre+i);
            debugger;
        }

        for(i=0;i<=13;i++){
            calificar(vcta[i],vra[i],nombre+i);
        }

        

       
       
       
       
        

        var notaFinal = (nota*10)/14;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);

    
    });
     
 
});