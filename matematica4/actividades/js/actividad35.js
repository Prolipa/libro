var titulos ="organizo"
  function Sucesiones() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $('#contenido1').append('');
      var numeros = []
      var patron = [];
      var contenido = [];
      for (var i = 0; i <= 2; i++) {
          numeros[i] = Math.round(Math.random() * (500 - 1) + 1);
          patron[i] = Math.round(Math.random() * (100 - 1) + 1);
      }
      contenido[0] = '<label>Patrón</label><input type="number"  class="Respuestas" id="patron1"><br>' +
          '<label>Sucesión:</label>' +
          '<label>' + numeros[0] + '</label><label>,</label>' +
          '<label>' + (numeros[0] + patron[0]) + '</label><label>,</label>' +
          '<label id="ini1">' + (numeros[0] + (2 * patron[0])) + '</label><label>,</label>' +
          '<label id="fin1">' + (numeros[0] + (3 * patron[0])) + '</label><label>:</label>' +
          '<input type="number" id="sA0" class="Respuestas">&nbsp;&nbsp;' +
          '<input type="number" id="sA1" class="Respuestas">&nbsp;&nbsp;' +
          '<input type="number" id="sA2" class="Respuestas"><br><br>';
      contenido[1] = '<label>Patrón</label><input type="number" class="Respuestas" id="patron2"><br>' +
          '<label>Sucesión:</label>' +
          '<label>' + numeros[1] + '</label><label>,</label>' +
          '<label>' + (numeros[1] - patron[1]) + '</label><label>,</label>' +
          '<label id="ini2">' + (numeros[1] - (2 * patron[1])) + '</label><label>,</label>' +
          '<label id="fin2">' + (numeros[1] - (3 * patron[1])) + '</label><label>:</label>' +
          '<input type="number" id="sB0" class="Respuestas">&nbsp;&nbsp;' +
          '<input type="number" id="sB1" class="Respuestas">&nbsp;&nbsp;' +
          '<input type="number" id="sB2" class="Respuestas">';

      $("#contenido1").append(contenido);
  };
  function Relacion() {
      var val2 = []
      var A = [];
      var B = [];
      var opciones = [];
       for (var i=0; i<=1;i++) {
        A[i] =  Math.round(Math.random() * (10000 - 1) + 1);
        B[i] =  Math.round(Math.random() * (10000 - 1) + 1);      
      opciones [i] = '<select id="nuevo'+i+'"><option value="0" selected="selected">Seleccione una opción</option>' +
          '<option value="menor"> < </option>' +
          '<option value="mayor"> > </option>' +
          '<option value="igual"> = </option>' +
          '</select>';
          val2[i] = '<tr><td><label id="a'+i+ '">'+A[i]+'</label></td>' +
              '<td>' + opciones[i] + '</td>' +
              '<td><label id="b'+i+'">'+ B[i] +'</label></td>' +
              '</tr>'
      }
      $("#contenido2").append(val2);
  }

  var notas = [];

  function CalificarSuc() {
      var patrones = [];
      var notas1 = 0;
      patrones[0] = parseInt($("#fin1").text()) - parseInt($("#ini1").text());
      patrones[1] = parseInt($("#fin2").text()) - parseInt($("#ini2").text());
      var sol = [];
      sol[0] = parseInt($('#fin1').text()) + patrones[0];
      sol[1] = parseInt($('#fin1').text()) + (2 * patrones[0]);
      sol[2] = parseInt($('#fin1').text()) + (3 * patrones[0]);
      var sol2 = [];
      sol2[0] = parseInt($('#fin2').text()) + patrones[1];
      sol2[1] = parseInt($('#fin2').text()) + (2 * patrones[1]);
      sol2[2] = parseInt($('#fin2').text()) + (3 * patrones[1]);
      for (var i = 0; i <= 2; i++) {
          if ($("#sA" + i).val() == sol[i]) {
              notas1 = notas1 + 1;
              $('#sA' + i).css("background-color", "green");
          } else {
              $('#sA' + i).css("background-color", "red");
          }
          if ($("#sB" + i).val() == sol2[i]) {
              notas1 = notas1 + 1;
              $('#sB' + i).css("background-color", "green");
          } else {
              $('#sB' + i).css("background-color", "red");
          }
      }

      if ($("#patron1").val() == patrones[0]) {
          notas1 = notas1 + 1;
          $('#patron1').css("background-color", "green");
      } else {
          $('#patron1').css("background-color", "red");
      }

      if ($("#patron2").val() == patrones[1]) {
          notas1 = notas1 + 1;
          $('#patron2').css("background-color", "green");
      } else {
          $('#patron2').css("background-color", "red");
      }
      notas[0] = notas1;
  }

  function califRelacion(){
    var nota2 = 0;
    if($("#nuevo0").val() == "menor"){
      if($("#a0").text() < $("#b0").text()){
        nota2 = nota2+1;
        $("#nuevo0").css("background-color","green");
      }
      else{
        $("#nuevo0").css("background-color","red");        
      }
    }
    if($("#nuevo0").val() == "mayor"){
      if($("#a0").text() > $("#b0").text()){
        nota2 = nota2+1;
        $("#nuevo0").css("background-color","green");
      }
      else{
        $("#nuevo0").css("background-color","red");        
      }
    }
    if($("#nuevo0").val() == "igual"){
      if($("#a0").text() == $("#b0").text()){
        nota2 = nota2+1;
        $("#nuevo0").css("background-color","green");
      }
      else{
        $("#nuevo0").css("background-color","red");        
      }
    }
    
    if($("#nuevo1").val() == "menor"){
      if($("#a1").text() < $("#b1").text()){
        nota2 = nota2+1;
        $("#nuevo1").css("background-color","green");
      }
      else{
        $("#nuevo1").css("background-color","red");        
      }
    }
    if($("#nuevo1").val() == "mayor"){
      if($("#a1").text() > $("#b1").text()){
        nota2 = nota2+1;
        $("#nuevo1").css("background-color","green");
      }
      else{
        $("#nuevo1").css("background-color","red");        
      }
    }
    if($("#nuevo1").val() == "igual"){
      if($("#a1").text() == $("#b1").text()){
        nota2 = nota2+1;
        $("#nuevo1").css("background-color","green");
      }
      else{
        $("#nuevo1").css("background-color","red");        
      }
    }
    notas[1] = nota2;
  }


  function Cargar() {
      $('#contenido').html('');
      $('#Respuestas').html('');
      contenidos = [];
      divs = [];
      k = 0;
      z = 0;
      Sucesiones();
  }
  $(document).ready(function() {
      Sucesiones();
      Relacion();
      $("#Calificar").click(function() {
          var notasFinal = 0;
          CalificarSuc();
          califRelacion();

          notasFinal = notas[1] + notas[0];
          notasFinal = (notasFinal*10)/10;

          $("#txtNota").text(notasFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });