var titulos="aplico";
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $(".panel-collapse").addClass('in');
  }

      function Cargar() {   
          location.reload(true);
      }

      var notaP;
      var notaC=0;
      function Resp(){
        var respV = ['MARIPOSA', 'ANFIBIO', 'AVE', 'MAMÍFERO', 'VERTEBRADOS', 'REPTIL', 'BOA'];
        var respH = ['INVERTEBRADO', 'LEÓN', 'ABEJA'];

        var resV1 = ($('#rA1').val()+''+$('#rA2').val()+''+$('#rA4').val()+''+$('#rA7').val()+''+$('#rA11').val()+''+$('#rA23').val()+''+$('#rA29').val()+''+$('#rA35').val()).toUpperCase();
        var resV2 = ($('#rA3').val()+''+$('#rA5').val()+''+$('#rA8').val()+''+$('#rA12').val()+''+$('#rA24').val()+''+$('#rA30').val()+''+$('#rA36').val()).toUpperCase();
        var resV3 = ($('#rA6').val()+''+$('#rA9').val()+''+$('#rA15').val()).toUpperCase();
        var resV4 = ($('#rA10').val()+''+$('#rA21').val()+''+$('#rA28').val()+''+$('#rA34').val()+''+$('#rA39').val()+''+$('#rA43').val()+''+$('#rA48').val()+''+$('#rA50').val()).toUpperCase();
        var resV5 = ($('#rA14').val()+''+$('#rA25').val()+''+$('#rA31').val()+''+$('#rA37').val()+''+$('#rA40').val()+''+$('#rA46').val()+''+$('#rA49').val()+''+$('#rA55').val()+''+$('#rA56').val()+''+$('#rA57').val()+''+$('#rA58').val()).toUpperCase();
        var resV6 = ($('#rA16').val()+''+$('#rA26').val()+''+$('#rA32').val()+''+$('#rA38').val()+''+$('#rA41').val()+''+$('#rA47').val()).toUpperCase();
        var resV7 = ($('#rA19').val()+''+$('#rA27').val()+''+$('#rA33').val()).toUpperCase();
        
        var resH1 = ($('#rA12').val()+''+$('#rA13').val()+''+$('#rA14').val()+''+$('#rA15').val()+''+$('#rA16').val()+''+$('#rA17').val()+''+$('#rA18').val()+''+$('#rA19').val()+''+$('#rA20').val()+''+$('#rA21').val()+''+$('#rA22').val()+''+$('#rA23').val()).toUpperCase();
        var resH2 = ($('#rA42').val()+''+$('#rA43').val()+''+$('#rA44').val()+''+$('#rA45').val()).toUpperCase();
        var resH3 = ($('#rA51').val()+''+$('#rA52').val()+''+$('#rA53').val()+''+$('#rA54').val()+''+$('#rA55').val()).toUpperCase();
        

        if( resV1 == respV[0] ){
          notaC++;
          $('#rA1').addClass('bien');
          $('#rA2').addClass('bien');
          $('#rA4').addClass('bien');
          $('#rA7').addClass('bien');
          $('#rA11').addClass('bien');
          $('#rA23').addClass('bien');
          $('#rA29').addClass('bien');
          $('#rA35').addClass('bien');
        }else{
          $('#rA1').addClass('mal');
          $('#rA2').addClass('mal');
          $('#rA4').addClass('mal');
          $('#rA7').addClass('mal');
          $('#rA11').addClass('mal');
          $('#rA23').addClass('mal');
          $('#rA29').addClass('mal');
          $('#rA35').addClass('mal');
        }

        if( resV2 == respV[1] ){
          notaC++;
          $('#rA3').addClass('bien');
          $('#rA5').addClass('bien');
          $('#rA8').addClass('bien');
          $('#rA12').addClass('bien');
          $('#rA24').addClass('bien');
          $('#rA30').addClass('bien');
          $('#rA36').addClass('bien');
        }else{
          $('#rA3').addClass('mal');
          $('#rA5').addClass('mal');
          $('#rA8').addClass('mal');
          $('#rA12').addClass('mal');
          $('#rA24').addClass('mal');
          $('#rA30').addClass('mal');
          $('#rA36').addClass('mal');
        }

        if( resV3 == respV[2] ){
          notaC++;
          $('#rA6').addClass('bien');
          $('#rA9').addClass('bien');
          $('#rA15').addClass('bien');
        }else{
          $('#rA6').addClass('mal');
          $('#rA9').addClass('mal');
          $('#rA15').addClass('mal');
        }

        if( resV4 == respV[3] ){
          notaC++;
          $('#rA10').addClass('bien');
          $('#rA21').addClass('bien');
          $('#rA28').addClass('bien');
          $('#rA34').addClass('bien');
          $('#rA39').addClass('bien');
          $('#rA43').addClass('bien');
          $('#rA48').addClass('bien');
          $('#rA50').addClass('bien');
        }else{
          $('#rA10').addClass('mal');
          $('#rA21').addClass('mal');
          $('#rA28').addClass('mal');
          $('#rA34').addClass('mal');
          $('#rA39').addClass('mal');
          $('#rA43').addClass('mal');
          $('#rA48').addClass('mal');
          $('#rA50').addClass('mal');
        }

        if( resV5 == respV[4] ){
          notaC++;
          $('#rA14').addClass('bien');
          $('#rA25').addClass('bien');
          $('#rA31').addClass('bien');
          $('#rA37').addClass('bien');
          $('#rA40').addClass('bien');
          $('#rA46').addClass('bien');
          $('#rA49').addClass('bien');
          $('#rA55').addClass('bien');
          $('#rA56').addClass('bien');
          $('#rA57').addClass('bien');
          $('#rA58').addClass('bien');
        }else{
          $('#rA14').addClass('mal');
          $('#rA25').addClass('mal');
          $('#rA31').addClass('mal');
          $('#rA37').addClass('mal');
          $('#rA40').addClass('mal');
          $('#rA46').addClass('mal');
          $('#rA49').addClass('mal');
          $('#rA55').addClass('mal');
          $('#rA56').addClass('mal');
          $('#rA57').addClass('mal');
          $('#rA58').addClass('mal');
        }

        if( resV6 == respV[5] ){
          notaC++;
          $('#rA16').addClass('bien');
          $('#rA26').addClass('bien');
          $('#rA32').addClass('bien');
          $('#rA38').addClass('bien');
          $('#rA41').addClass('bien');
          $('#rA47').addClass('bien');
        }else{
          $('#rA16').addClass('mal');
          $('#rA26').addClass('mal');
          $('#rA32').addClass('mal');
          $('#rA38').addClass('mal');
          $('#rA41').addClass('mal');
          $('#rA47').addClass('mal');
        }


        if( resV7 == respV[6] ){
          notaC++;
          $('#rA19').addClass('bien');
          $('#rA27').addClass('bien');
          $('#rA33').addClass('bien');
        }else{
          $('#rA19').addClass('mal');
          $('#rA27').addClass('mal');
          $('#rA33').addClass('mal');
        }

        ////////////////////////////////////////
        if( resH1 == respH[0] ){
          notaC++;
          $('#rA12').addClass('bien');
          $('#rA13').addClass('bien');
          $('#rA14').addClass('bien');
          $('#rA15').addClass('bien');
          $('#rA16').addClass('bien');
          $('#rA17').addClass('bien');
          $('#rA18').addClass('bien');
          $('#rA19').addClass('bien');
          $('#rA20').addClass('bien');
          $('#rA21').addClass('bien');
          $('#rA22').addClass('bien');
          $('#rA23').addClass('bien');
        }else{
          $('#rA12').addClass('mal');
          $('#rA13').addClass('mal');
          $('#rA14').addClass('mal');
          $('#rA15').addClass('mal');
          $('#rA16').addClass('mal');
          $('#rA17').addClass('mal');
          $('#rA18').addClass('mal');
          $('#rA19').addClass('mal');
          $('#rA20').addClass('mal');
          $('#rA21').addClass('mal');
          $('#rA22').addClass('mal');
          $('#rA23').addClass('mal');
        }

        if( resH2 == respH[1] ){
          notaC++;
          $('#rA42').addClass('bien');
          $('#rA43').addClass('bien');
          $('#rA44').addClass('bien');
          $('#rA45').addClass('bien');
        }else{
          $('#rA42').addClass('mal');
          $('#rA43').addClass('mal');
          $('#rA44').addClass('mal');
          $('#rA45').addClass('mal');
        }

        if( resH3 == respH[2] ){
          notaC++;
          $('#rA51').addClass('bien');
          $('#rA52').addClass('bien');
          $('#rA53').addClass('bien');
          $('#rA54').addClass('bien');
          $('#rA55').addClass('bien');
        }else{
          $('#rA51').addClass('mal');
          $('#rA52').addClass('mal');
          $('#rA53').addClass('mal');
          $('#rA54').addClass('mal');
          $('#rA55').addClass('mal');
        }

        ///////////////////////////////////////////////////////////

        notaP = ((notaC)/(respV.length+respH.length)).toFixed(2);
      }

      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();

        function confirmar(puntajeAbiertas){
          Resp();

            cor = ((parseFloat(puntajeAbiertas) + parseFloat(notaP))*10);
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

      $("#bt_comprobar").click(function() {
        punt=[];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=punt.length+1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          $('#bt_comprobar').attr('disabled', true);
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });
