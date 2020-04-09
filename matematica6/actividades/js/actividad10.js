var titulos = "aplico";

function Inicio() {
    $('#nota-informativa').slideUp('slow');

} 





function Cargar(){

    Inicio();
    $('#nota-informativa').slideUp('slow');
     
    $('#Calificar').attr('disabled', false);
     
  var $rand1=Math.floor(Math.random() * 1000000000);
  var $rand2=Math.floor(Math.random() * 1000000000);
  var $rand3=Math.floor(Math.random() * 1000000000);
  
  document.datos.num1.value = $rand1;
  document.datos.num2.value = $rand2;
  document.datos.num3.value = $rand3;
  



 };
 $(document).ready(function(){
    


 Cargar();
 $("#Calificar").click(function(){
    nota = 0;
    
    
    
   

    
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});