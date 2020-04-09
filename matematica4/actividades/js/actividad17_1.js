  function Inicio() {
    $("#r0").css("background-color", "white");
    $("#r1").css("background-color", "white");
    $("#r2").css("background-color", "white");
    $("#r3").css("background-color", "white");
    $("#r4").css("background-color", "white");
    $("#r5").css("background-color", "white");
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
    $( "#r0 option:selected").text();
    $( "#r1 option:selected").text();
    $( "#r2 option:selected").text();
    $( "#r3 option:selected").text();
    $( "#r4 option:selected").text();
    $( "#r5 option:selected").text();
    var valoresA = [];
    var valoresB = [];
    var valoresC = [];
    var valoresD = [];
    var orden = Math.round(Math.random() * (2 - 1) + 1);
    var signo = ["."];
    var texto1 = '<br><label>A = </label><input type="number"  style="text-align: center;width:100px;height:20px; font-size: 12px;border-color:white" id="res1">';
    var texto2 = '<br><label>A = </label><input type="number"  style="text-align: center;width:100px;height:20px; font-size: 12px;border-color:white" id="res2">';
    var txtCuadro1 = '<foreignObject x= 112 y=16 width="50" height="50"><input id="res1" placeholder=0 style="text-align:center;height:70px;width:70px; background-color :#ffffb3;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
    var txtCuadro2 = '<foreignObject x= 80 y=80 width="50" height="50"><input id="res2" placeholder=0 style="text-align:center; height:70px;width:70px; background-color :#ffffb3;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
    var txtCuadro3 = '<foreignObject x= 150 y=80 width="50" height="50"><input id="res3" placeholder=0 style="text-align:center; height:70px;width:70px; background-color :#ffffb3;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
    var txtCuadro4 = '<foreignObject x= 47 y=148 width="50" height="50"><input id="res4" placeholder=0 style="text-align:center; height:70px;width:70px; background-color :#ffffb3;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
    var txtCuadro5 = '<foreignObject x= 185 y=148 width="50" height="50"><input id="res5" placeholder=0 style="text-align:center; height:70px;width:70px; background-color :#ffffb3;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
    var txtCuadro6 = '<foreignObject x= 150 y=216 width="50" height="50"><input id="res6" placeholder=0 style="text-align:center; height:70px;width:70px; background-color :#ffffb3;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
    

    var piso4 = '<svg  width=300 height=400>'+txtCuadro1;
    var piso3 = '<svg  width=300 height=400>'+txtCuadro2+txtCuadro3;
    var piso2 = '<svg  width=300 height=400>'+txtCuadro4+'<rect x=115 y=147 width="70" height="70" style="fill:#ffffb3;stroke:black;stroke-width:1;"/><text id="a1" x=140 y=185>-3</text>'+txtCuadro5;
    var piso1 = '<svg  width=300 height=400><rect x= 10 y=216 width="70" height="70" style="fill:#ffffb3;stroke:black;stroke-width:1;"/><text id="a1" x=35 y=260>-2</text><rect x=80 y=216 width="70" height="70" style="fill:#ffffb3;stroke:black;stroke-width:1;"/><text id="a1" x=110 y=260>-1</text>'+txtCuadro6+'<rect x=218 y=216 width="70" height="70" style="fill:#ffffb3;stroke:black;stroke-width:1;"/><text id="a1" x=245 y=260>-2</text>';
    $("#contenido2").append(piso4+piso3+piso2+piso1);
    $("#texto1").append(texto1);
    }
    
  function Cargar(){
   $('#contenido1').html('');
   $('#contenido2').html('');
   $('#texto1').html('');
   $('#texto2').html('');

   
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();
  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Fila 1
    //Variables Fila Respuesta
    if($("#res1").val() == 6){
      nota = nota+1;
      $('#res1').css("background-color", "green");}
    
    else{
      $('#res1').css("background-color", "red");}
    if($("#res2").val() == 21){
    nota = nota + 1;
    $('#res2').css("background-color", "green");}
    else{
      $("#res2").css("background-color", "red");}
    

debugger;
    var notaFinal =0; 
    notaFinal = (nota*10);
    notaFinal = notaFinal/2;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10);
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });