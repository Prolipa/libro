var titulos = "aplico";

function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $('#Calificar').attr('disabled', false);
    $("#a1").css("background-color", "white");
    $("#a2").css("background-color", "white");
    $("#a3").css("background-color", "white");
    $("#a4").css("background-color", "white");
    $("#a5").css("background-color", "white");
    $("#a6").css("background-color", "white");
    $("#a7").css("background-color", "white");
    $("#a8").css("background-color", "white");
    $("#a9").css("background-color", "white");
    $("#b1").css("background-color", "white");
    $("#b2").css("background-color", "white");
    $("#b3").css("background-color", "white");
    $("#b4").css("background-color", "white");
    $("#b5").css("background-color", "white");
    $("#b6").css("background-color", "white");
    $("#b7").css("background-color", "white");
    $("#b8").css("background-color", "white");
    $("#b9").css("background-color", "white");
} 
function Cargar() {
    Inicio();
    var $rand1=Math.floor(Math.random() * 10000000);
    var $rand2=Math.floor(Math.random() * 10000000);

    document.datos.num1.value = $rand1;
    document.datos.num2.value = $rand2;
}
$(document).ready(function() {
    Cargar();
    
    
    $("#Calificar").click(function() {
        nota = 0;
        var num1=$("#num1").val();
        var num2=$("#num2").val();

        var a1=$("#a1").val();
        var a2=$("#a2").val();
        var a3=$("#a3").val();
        var a4=$("#a4").val();
        var a5=$("#a5").val();
        var a6=$("#a6").val();
        var a7=$("#a7").val();
        var a8=$("#a8").val();
        var a9=$("#a9").val();

        var b1=$("#b1").val();
        var b2=$("#b2").val();
        var b3=$("#b3").val();
        var b4=$("#b4").val();
        var b5=$("#b5").val();
        var b6=$("#b6").val();
        var b7=$("#b7").val();
        var b8=$("#b8").val();
        var b9=$("#b9").val();

        numa=a1+a2+a3+a4+a5+a6+a7+a8+a9;

        numb=b1+b2+b3+b4+b5+b6+b7+b8+b9;

        if(num1==numa){
           nota = nota+1;
           $("#a1").css("background-color", "green");
           $("#a2").css("background-color", "green");
           $("#a3").css("background-color", "green");
           $("#a4").css("background-color", "green");
           $("#a5").css("background-color", "green");
           $("#a6").css("background-color", "green");
           $("#a7").css("background-color", "green");
           $("#a8").css("background-color", "green");
           $("#a9").css("background-color", "green");
        }else{
           $("#a1").css("background-color", "red");
           $("#a2").css("background-color", "red");
           $("#a3").css("background-color", "red");
           $("#a4").css("background-color", "red");
           $("#a5").css("background-color", "red");
           $("#a6").css("background-color", "red");
           $("#a7").css("background-color", "red");
           $("#a8").css("background-color", "red");
           $("#a9").css("background-color", "red");

        }

        if(num2==numb){
            nota = nota+1;
            $("#b1").css("background-color", "green");
            $("#b2").css("background-color", "green");
            $("#b3").css("background-color", "green");
            $("#b4").css("background-color", "green");
            $("#b5").css("background-color", "green");
            $("#b6").css("background-color", "green");
            $("#b7").css("background-color", "green");
            $("#b8").css("background-color", "green");
            $("#b9").css("background-color", "green");
         }else{
            $("#b1").css("background-color", "red");
            $("#b2").css("background-color", "red");
            $("#b3").css("background-color", "red");
            $("#b4").css("background-color", "red");
            $("#b5").css("background-color", "red");
            $("#b6").css("background-color", "red");
            $("#b7").css("background-color", "red");
            $("#b8").css("background-color", "red");
            $("#b9").css("background-color", "red");
 
         }

         var notaFinal = (nota*10)/2;
         notaFinal = notaFinal.toFixed(2)
         $("#txtNota").text(+notaFinal +"/10");
         $('#Calificar').attr('disabled', true);


    
    });
     
 
});