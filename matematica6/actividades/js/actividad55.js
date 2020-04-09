var titulos = "aplico";
var vr = new Array();
var vrep = [4,5,8,12,2,13,15,26,39,2,16,17,17,32,2]
var nombre="";
function Inicio() {
    var vr = [];
     $('#nota-informativa').slideUp('slow');
     
     $("#c0").css("background-color", "white");
     $("#c1").css("background-color", "white");
     $("#c2").css("background-color", "white");
     $("#c3").css("background-color", "white");
     $("#c4").css("background-color", "white");
     $("#c5").css("background-color", "white");
     $("#c6").css("background-color", "white");
     $("#c7").css("background-color", "white");
     $("#c8").css("background-color", "white");
     $("#c9").css("background-color", "white");
     $("#c10").css("background-color", "white");
     $("#c11").css("background-color", "white");
     $("#c12").css("background-color", "white");
     $("#c13").css("background-color", "white");
     $("#c14").css("background-color", "white");

     

     

     
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
 
 function datoselect(nom,i){
    id=nom+i; 
    var select = document.getElementById(id);
    var respin=parseInt(select.value);
    return respin;
  }
  function califica(nom,i){
    sim="#";  
    id=sim+nom+i;
    if(vrep[i]=vr[i]){
        nota = nota+1;
        $(id).css("background-color", "green");
       }else{
        $(id).css("background-color", "red");
       }
  }

 
 
 $(document).ready(function() {
     Cargar();
     nota=0;
     
     $("#Calificar").click(function() {
        
        nombre="c";
        for(i=0;i<=14;i++){
            vr.push(datoselect(nombre,i));            
        }
        for(i=0;i<=14;i++){
            califica(nombre,i);            
        }
        
       
        
      

       var notaFinal = (nota*10)/15;
       notaFinal = notaFinal.toFixed(2)
       $("#txtNota").text(+notaFinal +"/10");
       $('#Calificar').attr('disabled', true);







    
    });
     
 
 });