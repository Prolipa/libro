 function Cargar(){
  $('#nota-informativa').slideUp('slow');
    $("#r1").css("background-color", "white");
    $("#r2").css("background-color", "white");
    $("#r3").css("background-color", "white");
    $("#r4").css("background-color", "white");
    $("#r5").css("background-color", "white");
    $("#r6").css("background-color", "white");
    $("#txtNota").text("");
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
    $('#r1').val("");
    $('#r2').val("");
    $('#r3').val("");
    $('#r4').val("");
    $('#r5').val("");
    $('#r6').val("");
    var aux = 0;
    var aux1 = 0;
    var s1 = Math.floor((Math.random() * 7000) + 1);
    var s2 = Math.floor((Math.random() * 7000) + 1);
   
    var resE = 0;
    var resF = 0;  
    var nuevo = 0;
    do{
    var m1 = Math.floor((Math.random() * 30) + 1);
    var m2 = Math.floor((Math.random() * 900) + 1);
    var resM = m2/m1;
    }while(resM % 1 != 0);
    $("#a1").text(s1);
    $("#a2").text(s2);
    do{
    var r1 = Math.floor((Math.random() * 7000) + 1);
    var r2 = Math.floor((Math.random() * 7000) + 1);
      if(r2>r1){
      aux= r2;
      r2=r1;
      r1=aux;   
    }
     $("#b1").text(r1);
    }while(r2>r1);
     do{
    var d1 = Math.floor((Math.random() * 500) + 1);
    var d2 = Math.floor((Math.random() * 100) + 1);
    var resD = d1/d2;
    }while(resD % 1 != 0);
    $("#b2").text(r2);
    $("#c1").text(m1);
    $("#c2").text(m2);
    $("#d1").text(d1);
    $("#d2").text(d2);
    do{
    var e1 = Math.floor((Math.random() * 500) + 1);
    var resE= Math.pow(e1, 0.5);
    }while(resE % 1 != 0);
    do{
    var f1 = Math.floor((Math.random() * 800) + 1);
    var resF= Math.pow(f1, 0.5);
    }while(resF % 1 != 0);
    $("#e1").text(e1);
    $("#f1").text(f1);
    };
 
$(document).ready(function(){
  debugger;
  if(navigator.onLine){
alert('Online');
} else {
alert('Offline')
}

Cargar();

$("#Calificar").click(function(){
nota = 0;
var a1 = $("#a1").text();
var a2 = $("#a2").text();
var b1 = $("#b1").text();
var b2 = $("#r2").val();
var c1 = $("#r3").val();
var c2 = $("#c1").text();
var d1 = $("#d1").text();
var d2 = $("#d2").text();
var e1 = $("#e1").text();
var f1 = $("#f1").text();

var r1 = $("#r1").val();
var r2 = $("#b2").text();
var r3 = $("#c2").text();
var r4 = $("#r4").val();
var r5 = $("#r5").val();
var r6 = $("#r6").val();

var resA = parseInt(a1) + parseInt(a2);
var resB = parseInt(b1) - parseInt(r2);
var resC = parseInt(r3) / parseInt(c2); 
var resD = parseInt(d1) / parseInt(d2); 
var resE = Math.pow(e1, 0.5);
var resF = Math.pow(f1, 0.5);

if(resA == r1){
   nota = nota+1;
   $("#r1").css("background-color", "green");
}
else{
  $("#r1").css("background-color", "red");
}
if(resB == b2){
   nota = nota+1;
   $("#r2").css("background-color", "green");
}
else{
  $("#r2").css("background-color", "red");
}
if(resC == c1){
   nota = nota+1;
   $("#r3").css("background-color", "green");
}
else{
  $("#r3").css("background-color", "red");
}
if(resD == r4){
   nota = nota+1;
   $("#r4").css("background-color", "green");
}
else{
  $("#r4").css("background-color", "red");
}
if(resE == r5){
   nota = nota+1;
   $("#r5").css("background-color", "green");
}
else{
  $("#r5").css("background-color", "red");
}if(resF == r6){
   nota = nota+1;
   $("#r6").css("background-color", "green");
}
else{
  $("#r6").css("background-color", "red");
}
var notaFinal = (nota*10)/6;
notaFinal = notaFinal.toFixed(2)
$("#txtNota").text(+notaFinal +"/10");
$('#Calificar').attr('disabled', true);
$('#Refrescar').attr('disabled', false);
});
});