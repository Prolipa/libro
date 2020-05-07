var titulos = "prueba";
function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $("#a1").css("background-color", "white");
    $("#a2").css("background-color", "white");
    $("#a3").css("background-color", "white");
    $("#a4").css("background-color", "white");
    $("#a5").css("background-color", "white");
    $("#a6").css("background-color", "white");

    $("#b1").css("background-color", "white");
    $("#b2").css("background-color", "white");
    $("#b3").css("background-color", "white");
    $("#b4").css("background-color", "white");
    $("#b5").css("background-color", "white");
    $("#b6").css("background-color", "white");

    $("#c1").css("background-color", "white");
    $("#c2").css("background-color", "white");
    $("#c3").css("background-color", "white");
    $("#c4").css("background-color", "white");
    $("#c5").css("background-color", "white");
    $("#c6").css("background-color", "white");

    $("#d1").css("background-color", "white");
    $("#d2").css("background-color", "white");
    $("#d3").css("background-color", "white");
    $("#d4").css("background-color", "white");
    $("#d5").css("background-color", "white");
    $("#d6").css("background-color", "white");

    $("#e1").css("background-color", "white");
    $("#e2").css("background-color", "white");
    $("#e3").css("background-color", "white");
    $("#e4").css("background-color", "white");
    $("#e5").css("background-color", "white");
    $("#e6").css("background-color", "white");

    $("#f1").css("background-color", "white");
    $("#f2").css("background-color", "white");
    $("#f3").css("background-color", "white");
    $("#f4").css("background-color", "white");
    $("#f5").css("background-color", "white");
    $("#f6").css("background-color", "white");

    $("#g1").css("background-color", "white");
    $("#g2").css("background-color", "white");
    $("#g3").css("background-color", "white");
    $("#g4").css("background-color", "white");
    $("#g5").css("background-color", "white");
    $("#g6").css("background-color", "white");

    $("#h1").css("background-color", "white");
    $("#h2").css("background-color", "white");
    $("#h3").css("background-color", "white");
    $("#h4").css("background-color", "white");
    $("#h5").css("background-color", "white");
    $("#h6").css("background-color", "white");

} 





function Cargar(){

    Inicio();
    $('#nota-informativa').slideUp('slow');
     
    $('#Calificar').attr('disabled', false);
     
  var $rand1=Math.floor(Math.random() * 1000000);
  var $rand2=Math.floor(Math.random() * 1000000);
  var $rand3=Math.floor(Math.random() * 1000000);
  var $rand4=Math.floor(Math.random() * 1000000);
  var $rand5=Math.floor(Math.random() * 1000000);
  var $rand6=Math.floor(Math.random() * 1000000);
  var $rand7=Math.floor(Math.random() * 1000000);
  var $rand8=Math.floor(Math.random() * 1000000);

  document.datos.num1.value = $rand1;
  document.datos.num2.value = $rand2;
  document.datos.num3.value = $rand3;
  document.datos.num4.value = $rand4;
  document.datos.num5.value = $rand5;
  document.datos.num6.value = $rand6;
  document.datos.num7.value = $rand7;
  document.datos.num8.value = $rand8;



 };
 $(document).ready(function(){
   


 Cargar();
 $("#Calificar").click(function(){
    nota = 0;
    
    
    
    var ra1=$("#a1").val();ra2=$("#a2").val(),ra3=$("#a3").val(),ra4=$("#a4").val(),ra5=$("#a5").val(),ra6=$("#a6").val();
    var ra=ra1+ra2+ra3+ra4+ra5+ra6;

    var rb1=$("#b1").val();rb2=$("#b2").val(),rb3=$("#b3").val(),rb4=$("#b4").val(),rb5=$("#b5").val(),rb6=$("#b6").val();
    var rb=rb1+rb2+rb3+rb4+rb5+rb6;

    var rc1=$("#c1").val();rc2=$("#c2").val(),rc3=$("#c3").val(),rc4=$("#c4").val(),rc5=$("#c5").val(),rc6=$("#c6").val();
    var rc=rc1+rc2+rc3+rc4+rc5+rc6;

    var rd1=$("#d1").val();rd2=$("#d2").val(),rd3=$("#d3").val(),rd4=$("#d4").val(),rd5=$("#d5").val(),rd6=$("#d6").val();
    var rd=rd1+rd2+rd3+rd4+rd5+rd6;

    var re1=$("#e1").val();re2=$("#e2").val(),re3=$("#e3").val(),re4=$("#e4").val(),re5=$("#e5").val(),re6=$("#e6").val();
    var re=re1+re2+re3+re4+re5+re6;

    var rf1=$("#f1").val();rf2=$("#f2").val(),rf3=$("#f3").val(),rf4=$("#f4").val(),rf5=$("#f5").val(),rf6=$("#f6").val();
    var rf=rf1+rf2+rf3+rf4+rf5+rf6;

    var rg1=$("#g1").val();rg2=$("#g2").val(),rg3=$("#g3").val(),rg4=$("#g4").val(),rg5=$("#g5").val(),rg6=$("#g6").val();
    var rg=rg1+rg2+rg3+rg4+rg5+rg6;

    var rh1=$("#h1").val();rh2=$("#h2").val(),rh3=$("#h3").val(),rh4=$("#h4").val(),rh5=$("#h5").val(),rh6=$("#h6").val();
    var rh=rh1+rh2+rh3+rh4+rh5+rh6;

    var num1=$("#num1").val();
    var num2=$("#num2").val();
    var num3=$("#num3").val();
    var num4=$("#num4").val();
    var num5=$("#num5").val();
    var num6=$("#num6").val();
    var num7=$("#num7").val();
    var num8=$("#num8").val();

    
    
    
    
    if(ra == num1){
       nota = nota+1;
       $("#a1").css("background-color", "green");
       $("#a2").css("background-color", "green");
       $("#a3").css("background-color", "green");
       $("#a4").css("background-color", "green");
       $("#a5").css("background-color", "green");
       $("#a6").css("background-color", "green");


    }
    else{
      $("#a1").css("background-color", "red");
      $("#a2").css("background-color", "red");
      $("#a3").css("background-color", "red");
      $("#a4").css("background-color", "red");
      $("#a5").css("background-color", "red");
      $("#a6").css("background-color", "red");
    }

    if(rb == num2){
        nota = nota+1;
        $("#b1").css("background-color", "green");
        $("#b2").css("background-color", "green");
        $("#b3").css("background-color", "green");
        $("#b4").css("background-color", "green");
        $("#b5").css("background-color", "green");
        $("#b6").css("background-color", "green");
 
 
     }
     else{
       $("#b1").css("background-color", "red");
       $("#b2").css("background-color", "red");
       $("#b3").css("background-color", "red");
       $("#b4").css("background-color", "red");
       $("#b5").css("background-color", "red");
       $("#b6").css("background-color", "red");
     }

     if(rc == num3){
        nota = nota+1;
        $("#c1").css("background-color", "green");
        $("#c2").css("background-color", "green");
        $("#c3").css("background-color", "green");
        $("#c4").css("background-color", "green");
        $("#c5").css("background-color", "green");
        $("#c6").css("background-color", "green");
 
 
     }
     else{
       $("#c1").css("background-color", "red");
       $("#c2").css("background-color", "red");
       $("#c3").css("background-color", "red");
       $("#c4").css("background-color", "red");
       $("#c5").css("background-color", "red");
       $("#c6").css("background-color", "red");
     }

     if(rd == num4){
        nota = nota+1;
        $("#d1").css("background-color", "green");
        $("#d2").css("background-color", "green");
        $("#d3").css("background-color", "green");
        $("#d4").css("background-color", "green");
        $("#d5").css("background-color", "green");
        $("#d6").css("background-color", "green");
 
 
     }
     else{
       $("#d1").css("background-color", "red");
       $("#d2").css("background-color", "red");
       $("#d3").css("background-color", "red");
       $("#d4").css("background-color", "red");
       $("#d5").css("background-color", "red");
       $("#d6").css("background-color", "red");
     }
    
     if(re == num5){
        nota = nota+1;
        $("#e1").css("background-color", "green");
        $("#e2").css("background-color", "green");
        $("#e3").css("background-color", "green");
        $("#e4").css("background-color", "green");
        $("#e5").css("background-color", "green");
        $("#e6").css("background-color", "green");
 
 
     }
     else{
       $("#e1").css("background-color", "red");
       $("#e2").css("background-color", "red");
       $("#e3").css("background-color", "red");
       $("#e4").css("background-color", "red");
       $("#e5").css("background-color", "red");
       $("#e6").css("background-color", "red");
     }

     if(rf == num6){
        nota = nota+1;
        $("#f1").css("background-color", "green");
        $("#f2").css("background-color", "green");
        $("#f3").css("background-color", "green");
        $("#f4").css("background-color", "green");
        $("#f5").css("background-color", "green");
        $("#f6").css("background-color", "green");
 
 
     }
     else{
       $("#f1").css("background-color", "red");
       $("#f2").css("background-color", "red");
       $("#f3").css("background-color", "red");
       $("#f4").css("background-color", "red");
       $("#f5").css("background-color", "red");
       $("#f6").css("background-color", "red");
     }
     if(rg == num7){
        nota = nota+1;
        $("#g1").css("background-color", "green");
        $("#g2").css("background-color", "green");
        $("#g3").css("background-color", "green");
        $("#g4").css("background-color", "green");
        $("#g5").css("background-color", "green");
        $("#g6").css("background-color", "green");
 
 
     }
     else{
       $("#g1").css("background-color", "red");
       $("#g2").css("background-color", "red");
       $("#g3").css("background-color", "red");
       $("#g4").css("background-color", "red");
       $("#g5").css("background-color", "red");
       $("#g6").css("background-color", "red");
     }
    
     if(rh == num8){
        nota = nota+1;
        $("#h1").css("background-color", "green");
        $("#h2").css("background-color", "green");
        $("#h3").css("background-color", "green");
        $("#h4").css("background-color", "green");
        $("#h5").css("background-color", "green");
        $("#h6").css("background-color", "green");
 
 
     }
     else{
       $("#h1").css("background-color", "red");
       $("#h2").css("background-color", "red");
       $("#h3").css("background-color", "red");
       $("#h4").css("background-color", "red");
       $("#h5").css("background-color", "red");
       $("#h6").css("background-color", "red");
     }

    
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});