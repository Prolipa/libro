var titulos = "prueba";
 function Cargar(){
  $('#nota-informativa').slideUp('slow');
  var $rand1=Math.floor(Math.random() * 1000000);
  var $rand2=Math.floor(Math.random() * 1000000);
  var $rand3=Math.floor(Math.random() * 1000000);
  document.datos.num1.value = $rand1;
  document.datos.num2.value = $rand2;
  document.datos.num3.value = $rand3;
    };
 
$(document).ready(function(){

Cargar();

$("#Calificar").click(function(){
nota = 0;




var r3 = $("#num2").val();
var r4 = $("#resp2").val();
var r5 = $("#r5").val();
var r6 = $("#r6").val();




if(r3 == r4){
   nota = nota+1;
   $("#resp2").css("background-color", "green");
}
else{
  $("#resp2").css("background-color", "red");
}

var notaFinal = (nota*10)/6;
notaFinal = notaFinal.toFixed(2)
$("#txtNota").text(+notaFinal +"/10");
$('#Calificar').attr('disabled', true);
$('#Refrescar').attr('disabled', false);
});
});