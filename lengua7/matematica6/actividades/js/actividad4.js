function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $("#ra").css("background-color", "white");
    $("#rb").css("background-color", "white");
    $("#rc").css("background-color", "white");
    $("#rd").css("background-color", "white");
    $("#re").css("background-color", "white");
    $("#rf").css("background-color", "white");


} 



function Cargar(){
    
    Inicio();
    $('#nota-informativa').slideUp('slow');
     
    $('#Calificar').attr('disabled', false);


    var $a1=Math.floor(Math.random() * (1-11)+11);
    var $a2=Math.floor(Math.random() * (1-11)+11);
    var $b1=Math.floor(Math.random() * (1-11)+11);
    var $b2=Math.floor(Math.random() * (1-11)+11);
    var $c1=Math.floor(Math.random() * (1-11)+11);
    var $c2=Math.floor(Math.random() * (1-11)+11);
    var $d1=Math.floor(Math.random() * (1-11)+11);
    var $d2=Math.floor(Math.random() * (1-11)+11);
    var $e1=Math.floor(Math.random() * (1-11)+11);
    var $e2=Math.floor(Math.random() * (1-11)+11);
    var $f1=Math.floor(Math.random() * (1-11)+11);
    var $f2=Math.floor(Math.random() * (1-11)+11);
    document.datos.a1.value = $a1;
    document.datos.a2.value = $a2;
    document.datos.b1.value = $b1;
    document.datos.b2.value = $b2;
    document.datos.c1.value = $c1;
    document.datos.c2.value = $c2;
    document.datos.d1.value = $d1;
    document.datos.d2.value = $d2;
    document.datos.e1.value = $e1;
    document.datos.e2.value = $e2;
    document.datos.f1.value = $f1;
    document.datos.f2.value = $f2;
      };
   
  $(document).ready(function(){
    debugger;
    
  
  Cargar();
  
  $("#Calificar").click(function(){
  nota = 0;
  
  var a1=$("#a1").val();
  var a2=$("#a2").val();
  var b1=$("#b1").val();
  var b2=$("#b2").val();
  var c1=$("#c1").val();
  var c2=$("#c2").val();
  var d1=$("#d1").val();
  var d2=$("#d2").val();
  var e1=$("#e1").val();
  var e2=$("#e2").val();
  var f1=$("#f1").val();
  var f2=$("#f2").val();
  
  var ra0=a1*a2;
  var rb0=b1*b2;
  var rc0=c1*c2;
  var rd0=d1*d2;
  var re0=e1*e2;
  var rf0=f1*f2;
  

  var ra = $("#ra").val();
  var rb = $("#rb").val();
  var rc = $("#rc").val();
  var rd = $("#rd").val();
  var re = $("#re").val();
  var rf = $("#rf").val();
  
  
  if(ra == ra0){
     nota = nota+1;
     $("#ra").css("background-color", "green");
  }
  else{
    $("#ra").css("background-color", "red");
  }

  if(rb == rb0){
    nota = nota+1;
    $("#rb").css("background-color", "green");
 }
 else{
   $("#rb").css("background-color", "red");
 }

 if(rc == rc0){
    nota = nota+1;
    $("#rc").css("background-color", "green");
 }
 else{
   $("#rc").css("background-color", "red");
 }

 if(rd == rd0){
    nota = nota+1;
    $("#rd").css("background-color", "green");
 }
 else{
   $("#rd").css("background-color", "red");
 }

 if(re == re0){
    nota = nota+1;
    $("#re").css("background-color", "green");
 }
 else{
   $("#re").css("background-color", "red");
 }

 if(rf == rf0){
    nota = nota+1;
    $("#rf").css("background-color", "green");
 }
 else{
   $("#rf").css("background-color", "red");
 }

  
  var notaFinal = (nota*10)/6;
  notaFinal = notaFinal.toFixed(2)
  $("#txtNota").text(+notaFinal +"/10");
  $('#Calificar').attr('disabled', true);
  $('#Refrescar').attr('disabled', false);
  });
  });