var titulos = "aplico";
var vra = new Array();
var vrb = new Array();
var vrc = new Array();

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
    
    return nota;

}
function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(parseInt(auxm)); 
}

$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;
        vct1=[2,28,2,14,2,7,2,2,2,7,2,3,7];
        vct2=[3,27,3,9,3,3,3,3,3,3,3,4];
        nombre="b";
        for(i=0;i<13;i++){
            cojerdatos(nombre+i,vrb);
        }
        for(i=0;i<13;i++){
            calificar(vct1[i],vrb[i],nombre+i);
        }
        nombre="c";
        for(i=0;i<12;i++){
            cojerdatos(nombre+i,vrc);
        }
        for(i=0;i<12;i++){
            calificar(vct2[i],vrc[i],nombre+i);
        }




        var notaFinal = (nota*10)/26;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);

    
    });
    

});