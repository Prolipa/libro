
var titulos = "aplico";


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

        rsa="agudo";
        rsb="obtuso";
        rsc="obtuso";
        n=[85,115,112];
        resp0= $("#resp0").val();
        resp1= $("#resp1").val();
        resp2= $("#resp2").val();

        n0=$("#n0").val();
        n1=$("#n1").val();
        n2=$("#n2").val();

        if(rsa.toLowerCase() == resp0.toLowerCase()){
            nota=nota+1;
            $("#resp0").css("background-color", "green");
        }else{
            $("#resp0").css("background-color", "red");
        } 

        if(rsb.toLowerCase() == resp1.toLowerCase()){
            nota=nota+1;
            $("#resp1").css("background-color", "green");
        }else{
            $("#resp1").css("background-color", "red");
        } 

        if(rsc.toLowerCase() == resp2.toLowerCase()){
            nota=nota+1;
            $("#resp2").css("background-color", "green");
        }else{
            $("#resp2").css("background-color", "red");
        } 

        
        if(n0 == n[0]){
            nota=nota+1;
            $("#n0").css("background-color", "green");
        }else{
            $("#n0").css("background-color", "red");
        } 

        
        if(n1 == n[1]){
            nota=nota+1;
            $("#n1").css("background-color", "green");
        }else{
            $("#n1").css("background-color", "red");
        } 

        
        if(n2 == n[2]){
            nota=nota+1;
            $("#n2").css("background-color", "green");
        }else{
            $("#n2").css("background-color", "red");
        } 

       

        var notaFinal = (nota*10)/3;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);
    
    });
    

});

