 var titulos = "prueba";

 


 function Inicio() {
    var myArray = [];
     $('#nota-informativa').slideUp('slow');
     
     $("#rp1").css("background-color", "white");
     $("#rp2").css("background-color", "white");
     $("#rp3").css("background-color", "white");
     $("#rp4").css("background-color", "white");

     var $cantidad=4;
     var cont=myArray.length;
     NumerosAleatorios($cantidad,myArray);
         document.datos.num1.value = myArray[0];
         document.datos.num2.value = myArray[1];
         document.datos.num3.value = myArray[2];
         document.datos.num4.value = myArray[3];
 } 
 
 function Cargar() {
     Inicio();
     $('#Calificar').attr('disabled', false);
 }
 

 function NumerosAleatorios(cantidadNumeros,myArray){
     
    
     while(myArray.length < cantidadNumeros ){
     var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
     var existe = false;
         for(var i=0;i<myArray.length;i++){
             if(myArray [i] == numeroAleatorio){
             existe = true;
             break;
             }
         }
         if(!existe){
             myArray[myArray.length] = numeroAleatorio;
         }
 
     }
 }
 
 
 
 $(document).ready(function() {
     Cargar();
     
     
     $("#Calificar").click(function() {
        var r1,r2,r3,r4;
        nota = 0;

        var num1=$("#num1").val();
        var num2=$("#num2").val();
        var num3=$("#num3").val();
        var num4=$("#num4").val();
        var rp1=$("#rp1").val();
        var rp2=$("#rp2").val();
        var rp3=$("#rp3").val();
        var rp4=$("#rp4").val();

        var respuesta1=num1+rp1;
        var respuesta2=num2+rp2;
        var respuesta3=num3+rp3;
        var respuesta4=num4+rp4;
       
        r1="1c";
        r2="2a";
        r3="3d";
        r4="4b";

       

       if(respuesta1==r1||respuesta1==r2||respuesta1==r3||respuesta1==r4){
        nota = nota+1;
        $("#rp1").css("background-color", "green");
       }else{
        $("#rp1").css("background-color", "red");
       }
       if(respuesta2==r1||respuesta2==r2||respuesta2==r3||respuesta2==r4){
        nota = nota+1;
        $("#rp2").css("background-color", "green");
       }else{
        $("#rp2").css("background-color", "red");   
       }
       if(respuesta3==r1||respuesta3==r2||respuesta3==r3||respuesta3==r4){
        nota = nota+1;
        $("#rp3").css("background-color", "green");
       }else{
        $("#rp3").css("background-color", "red");
       }
       if(respuesta4==r1||respuesta4==r2||respuesta4==r3||respuesta4==r4){
        nota = nota+1;
        $("#rp4").css("background-color", "green");
       }else{
        $("#rp4").css("background-color", "red");
       }   



       var notaFinal = (nota*10)/4;
       notaFinal = notaFinal.toFixed(2)
       $("#txtNota").text(+notaFinal +"/10");
       $('#Calificar').attr('disabled', true);







    
    });
     
 
 });