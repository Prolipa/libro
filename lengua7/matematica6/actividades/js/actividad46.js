var titulos = "aplico";
var titulos = "aplico";
var vra = new Array();


function Inicio() {
    $('#nota-informativa').slideUp('slow');
} 

function Cargar() {
    Inicio();
    

};

function calificar(num,a,nombre){
    sim="#";
    nom=sim+nombre;
    if(a==num){
        nota=nota+1;
        $(nom).css("background-color", "green");
     }else{
         $(nom).css("background-color", "red");
     }
    
    

}
function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(parseInt(auxm)); 
}

$(document).ready(function() {
    Cargar();
    nota=0;
    $("#Calificar").click(function() {
        
        vr=[120,130,60,42];

        nombre="a";
        for(i=0;i<4;i++){
            cojerdatos(nombre+i,vra);
        }
        for(i=0;i<4;i++){
            calificar(vr[i],vra[i],nombre+i);
        }



        var notaFinal = (nota*10)/4;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);

    
    });
    

});