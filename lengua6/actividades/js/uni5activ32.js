  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }
  


    function Cargar() {
      location.reload(true);
    }

    function Preg3(){
      var escribe = [
          '<li>El texto de la página anterior presenta una opinión. &nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas input-sm" id="rC1" style="width: 60px;"> <option></option><option>V</option><option>F</option> </select><br></li>',
          '<li>El texto presenta información novedosa. &nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas input-sm" id="rC2" style="width: 60px;"> <option></option><option>V</option><option>F</option> </select><br></li>',
          '<li>El propósito del texto es mostrar el pensamiento del periodista acerca de la situación de los pingüinos. &nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas input-sm" id="rC3" style="width: 60px;"> <option></option><option>V</option><option>F</option> </select><br></li>',
          '<li>El propósito del texto es presentar información conocida por los lectores. &nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas input-sm" id="rC4" style="width: 60px;"> <option></option><option>V</option><option>F</option> </select><br></li>',
          '<li>El texto informa al lector datos que no conocía. &nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas input-sm" id="rC5" style="width: 60px;"> <option></option><option>V</option><option>F</option> </select><br></li>',
          '<li>El texto es un artículo informativo. &nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas input-sm" id="rC6" style="width: 60px;"> <option></option><option>V</option><option>F</option> </select><br></li>',
      ];

      escribe.sort(f_randomico);
      $('#escribe').append(escribe);
    }



    function Preg4(){
      var completa = [
          '<li>El tiempo compuesto se forma de: &nbsp;&nbsp;<select class="form-control respuestas input-sm" id="rD1" style="border: 2px solid #724714; border-radius: 15px; border-style: dashed; width: 55%;"><option></option><option>citamos alguna frase o texto de alguien más. </option><option>conjunciones adversativas.</option><option>unir o enlazar palabras, sintagmas o proposiciones.</option><option>verbo auxiliar (haber) + verbo en participio (verbos terminados en ado, ido).</option></select><br><br></li>',
          '<li>Las conjunciones sirven para: &nbsp;&nbsp;<select class="form-control respuestas input-sm" id="rD2" style="border: 2px solid #724714; border-radius: 15px; border-style: dashed; width: 55%;"><option></option><option>citamos alguna frase o texto de alguien más. </option><option>conjunciones adversativas.</option><option>unir o enlazar palabras, sintagmas o proposiciones.</option><option>verbo auxiliar (haber) + verbo en participio (verbos terminados en ado, ido).</option></select><br><br></li>',
          '<li>“y”, “ni”, “e” son: &nbsp;&nbsp;<select class="form-control respuestas input-sm" id="rD3" style="border: 2px solid #724714; border-radius: 15px; border-style: dashed; width: 55%;"><option></option><option>citamos alguna frase o texto de alguien más. </option><option>conjunciones adversativas.</option><option>unir o enlazar palabras, sintagmas o proposiciones.</option><option>verbo auxiliar (haber) + verbo en participio (verbos terminados en ado, ido).</option></select><br><br></li>',
          '<li>Utilizamos comillas cuando: &nbsp;&nbsp;<select class="form-control respuestas input-sm" id="rD4" style="border: 2px solid #724714; border-radius: 15px; border-style: dashed; width: 55%;"><option></option><option>citamos alguna frase o texto de alguien más. </option><option>conjunciones adversativas.</option><option>unir o enlazar palabras, sintagmas o proposiciones.</option><option>verbo auxiliar (haber) + verbo en participio (verbos terminados en ado, ido).</option></select><br><br></li>',
      ];

      completa.sort(f_randomico);
      $('#completa').append(completa);
    }


    var notaFP3;
    var notaP3=0;
    function Resp3(){
      var resp=['F','V','F','F','V','V'];
      for( var i=1; i<7; i++ ){
        if($('#rC'+i).val() == resp[i-1]){
          notaP3++;
          $('#rC'+i).addClass('biene');
        }else{
          $('#rC'+i).addClass('male');
        }
      }
      notaFP3=(notaP3*2)/6;
    }



    var notaFP4;
    var notaP4=0;
    function Resp4(){
      var resp=['verbo auxiliar (haber) + verbo en participio (verbos terminados en ado, ido).','unir o enlazar palabras, sintagmas o proposiciones.','conjunciones adversativas.','citamos alguna frase o texto de alguien más.'];
      for( var i=1; i<5; i++ ){
        if($('#rD'+i).val() == resp[i-1]){
          notaP4++;
          $('#rD'+i).addClass('biene');
        }else{
          $('#rD'+i).addClass('male');
        }
      }
      notaFP4=(notaP4*2)/4;
    }



    $(document).ready(function() {
        Inicio();
        Preg3();
        Preg4();

        function confirmar(puntajeAbiertas){
          Resp3();
          Resp4();
            cor = puntajeAbiertas+notaFP3+notaFP4;
            calificacion=1;
            itemsT=1;
            cont=1;
            ejer=1;
            inc=0;
            Calculo_nota();

            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);
            return false
        }

      $("#Calificar").click(function() {
        punt=[2,2,2];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=4;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });