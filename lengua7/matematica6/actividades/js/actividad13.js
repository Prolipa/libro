var titulos = "reflexiono";

function Inicio() {
    $('#nota-informativa').slideUp('slow');
} 


function Cargar(){

    Inicio();
    $('#nota-informativa').slideUp('slow');
    $('#Calificar').attr('disabled', false);

};
$(document).ready(function(){
Cargar();
$("#Calificar").click(function(){
    nota = 0;

    var a1=$("#a1").val();
    var a2=$("#a2").val();
    var a3=$("#a3").val();
    var a4=$("#a4").val();
    var a5=$("#a5").val();
    var a6=$("#a6").val();

    var respuesta=a1+a2+a3+a4+a5+a6;
    var dato=778115;

    if(dato == respuesta){
        nota = nota+1;
        $("#a1").css("background-color", "green");
        $("#a2").css("background-color", "green");
        $("#a3").css("background-color", "green");
        $("#a4").css("background-color", "green");
        $("#a5").css("background-color", "green");
        $("#a6").css("background-color", "green");


    }else{
        $("#a1").css("background-color", "red");
        $("#a2").css("background-color", "red");
        $("#a3").css("background-color", "red");
        $("#a4").css("background-color", "red");
        $("#a5").css("background-color", "red");
        $("#a6").css("background-color", "red");


    }


    b1=$("#b1").val();
    var b2=$("#b2").val();
    var b3=$("#b3").val();
    var b4=$("#b4").val();
    var b5=$("#b5").val();
    var b6=$("#b6").val();

    n1=$("#n1").val();
    var n2=$("#n2").val();
    var n3=$("#n3").val();
    var n4=$("#n4").val();
    var n5=$("#n5").val();
    var n6=$("#n6").val();

    if(n1==7 && b1==0){
        nota = nota+1;
        $("#b1").css("background-color", "green");       
        $("#n1").css("background-color", "green");       
    }else{
        $("#b1").css("background-color", "red");       
        $("#n1").css("background-color", "red");       
    }

    if(n2==7 && b2==1){
        nota = nota+1;
        $("#b2").css("background-color", "green");       
        $("#n2").css("background-color", "green");       
    }else{
        $("#b2").css("background-color", "red");       
        $("#n2").css("background-color", "red");       
    }

    if(n3==8 && b3==2){
        nota = nota+1;
        $("#b3").css("background-color", "green");       
        $("#n3").css("background-color", "green");       
    }else{
        $("#b3").css("background-color", "red");       
        $("#n3").css("background-color", "red");       
    }

    if(n4==1 && b4==0){
        nota = nota+1;
        $("#b4").css("background-color", "green");       
        $("#n4").css("background-color", "green");       
    }else{
        $("#b4").css("background-color", "red");       
        $("#n4").css("background-color", "red");       
    }

    if(n5==1 && b6==1){
        nota = nota+1;
        $("#b5").css("background-color", "green");       
        $("#n5").css("background-color", "green");       
    }else{
        $("#b5").css("background-color", "red");       
        $("#n5").css("background-color", "red");       
    }

    if(n6==5 && b6==2){
        nota = nota+1;
        $("#b6").css("background-color", "green");       
        $("#n6").css("background-color", "green");       
    }else{
        $("#b6").css("background-color", "red");       
        $("#n6").css("background-color", "red");       
    }

    bb1=$("#bb1").val();
    bb2=$("#bb2").val();
    bb3=$("#bb3").val();
    bb4=$("#bb4").val();
    bb5=$("#bb5").val();
    bb6=$("#bb6").val();

    if(bb1==700000){
        nota = nota+1;
        $("#bb1").css("background-color", "green"); 
    }else{
        $("#bb1").css("background-color", "red");       
    }

    if(bb2==70000){
        nota = nota+1;
        $("#bb2").css("background-color", "green"); 
    }else{
        $("#bb2").css("background-color", "red");       
    }

    if(bb3==8000){
        nota = nota+1;
        $("#bb3").css("background-color", "green"); 
    }else{
        $("#bb3").css("background-color", "red");       
    }

    if(bb1==100){
        nota = nota+1;
        $("#bb4").css("background-color", "green"); 
    }else{
        $("#bb4").css("background-color", "red");       
    }

    if(bb1==10){
        nota = nota+1;
        $("#bb5").css("background-color", "green"); 
    }else{
        $("#bb5").css("background-color", "red");       
    }

    if(bb1==5){
        nota = nota+1;
        $("#bb6").css("background-color", "green"); 
    }else{
        $("#bb6").css("background-color", "red");       
    }


    c1=$("#c1").val();
    c2=$("#c2").val();
    c3=$("#c3").val();
    c4=$("#c4").val();
    c5=$("#c5").val();
    c6=$("#c6").val();
    c7=$("#c7").val();
    c8=$("#c8").val();
    c9=$("#c9").val();


    numc=c1+c2+c3+c4+c5+c6;
    
    if(numc==3645483){
        nota = nota+1;
        $("#c1").css("background-color", "green"); 
        $("#c2").css("background-color", "green"); 
        $("#c3").css("background-color", "green"); 
        $("#c4").css("background-color", "green"); 
        $("#c5").css("background-color", "green"); 
        $("#c6").css("background-color", "green"); 
        $("#c7").css("background-color", "green"); 
        $("#c8").css("background-color", "green"); 
        $("#c9").css("background-color", "green"); 
    }else{
        $("#c1").css("background-color", "red"); 
        $("#c2").css("background-color", "red"); 
        $("#c3").css("background-color", "red"); 
        $("#c4").css("background-color", "red"); 
        $("#c5").css("background-color", "red"); 
        $("#c6").css("background-color", "red"); 
        $("#c7").css("background-color", "red"); 
        $("#c8").css("background-color", "red"); 
        $("#c9").css("background-color", "red"); 
    }


  




    var notaFinal = (nota*10)/14;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});