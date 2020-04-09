
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });



    function Preg1(){
      var responde = [
          '<li>¿Es posible hacer un análisis a partir de la observación de la gráfica?&nbsp;&nbsp; <select id="rASP1" class="form-control respuestas input-sm" style="width: 70px;"> <option></option> <option>Si</option> <option>No</option> </select></li><br>',
          '<li>¿Qué tema se trató en la encuesta?&nbsp;&nbsp; <select id="rASP2" class="form-control respuestas input-sm" style="width: 300px;"> <option></option> <option></option> <option>Los programas televisivos favoritos</option> <option></option> </select></li><br>',
          '<li>¿Cuántas personas fueron encuestadas?&nbsp;&nbsp; <input type="number" id="rASP3" class="form-control respuestas input-sm" style="width: 50px;">&nbsp; personas.</li><br>',
          '<li>¿Qué datos numéricos puedes extraer de la gráfica?&nbsp;&nbsp; <input type="text" id="rASP4" class="form-control respuestas input-sm" style="width: 200px;" placeholder="Ej: 1,2,3,4"></li><br>',
          '<li>¿Qué características están presentes en estos datos numéricos?&nbsp;&nbsp; <select id="rASP5" class="form-control respuestas input-sm" style="width: 200px;"> <option></option> <option></option> <option></option> <option>Son números enteros</option> </select></li><br>',
          '<li>¿Qué tipo de programa es el favorito?&nbsp;&nbsp; <select id="rASP6" class="form-control respuestas input-sm" style="width: 150px;"> <option></option> <option value="1">Las series</option> <option value="2">Las caricaturas</option> <option value="3">Los musicales</option> <option value="4">Los noticieros</option> </select></li><br>',
      ];

      responde.sort(f_randomico);
      $('#responde').append(responde);
    }

///////////////////////////////////////////////////////////////////
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  var notaFinalP = 0;
  function Resp(){
      var c=0;
      var resp=['Si', 'Losprogramastelevisivosfavoritos', totP, dat, 'Sonnúmerosenteros'];
      for( var i=1; i<6; i++ ){
     //alert( $('#rASP'+i).val().replace(/ /gi, "").split(',').sort() +' == '+ resp[c].toString() );
        if( $('#rASP'+i).val().replace(/ /gi, "").split(',').sort() == resp[c].toString() ){
            notaFinalP++;
            $('#rASP'+i).css("background-color", "#05D576");
          }else{
            $('#rASP'+i).css("background-color", "#D50545");
          }
        c++;
      }

      switch($('#rASP6').val()) {
        case '1':
          if( ser == getMaxOfArray(dat) ){
            notaFinalP++;
            $('#rASP6').css("background-color", "#05D576");
          }else{
            $('#rASP6').css("background-color", "#D50545");
          }
          break;
        case '2':
          if( car == getMaxOfArray(dat) ){
            notaFinalP++;
            $('#rASP6').css("background-color", "#05D576");
          }else{
            $('#rASP6').css("background-color", "#D50545");
          }
          break;
        case '3':
          if( mus == getMaxOfArray(dat) ){
            notaFinalP++;
            $('#rASP6').css("background-color", "#05D576");
          }else{
            $('#rASP6').css("background-color", "#D50545");
          }
          break;
        case '4':
          if( noti == getMaxOfArray(dat) ){
            notaFinalP++;
            $('#rASP6').css("background-color", "#05D576");
          }else{
            $('#rASP6').css("background-color", "#D50545");
          }
          break;
          default:
          $('#rASP6').css("background-color", "#D50545");
      }
    }


///////////////////////////////////////////////////////////////////

    function Cargar() {   
      location.reload(true);
    }

    var ser,car,mus,noti,totP;
    var dat=[];
    var dat1=[];
    $(document).ready(function() {
        Inicio();
        Preg1();

        ser = Math.round(Math.random() * (20 - 1) + 1);
        car = Math.round(Math.random() * (20 - 1) + 1);
        mus = Math.round(Math.random() * (20 - 1) + 1);
        noti = Math.round(Math.random() * (20 - 1) + 1);
        totP = (ser+car+mus+noti);
        dat = [ser,car,mus,noti];
        dat.sort();

        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Programas televisivos favoritos'
            },
            xAxis: {
                categories: ['Programa']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Frecuencia'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
            },

            series: [{
                        name: 'Series',
                        data: [
                          ['Series', ser]
                        ]
                    },
                    {
                        name: 'Caricaturas',
                        data: [
                          ['Caricaturas', car]
                        ]
                    },
                    {
                        name: 'Musicales',
                        data: [
                          ['Musicales', mus]
                        ]
                    },
                    {
                        name: 'Noticieros',
                        data: [
                          ['Noticieros', noti]
                        ]
                    }
                    ]
        });


        function confirmar() {
        	Resp();
          
            var nota = (notaFinalP*10)/6;
            

            var notaFinal = (nota).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        confirmar();/*
        if( $('#calificacion2').val() !='' && $('#calificacion4').val() !='' ){
          if( $('#calificacion2').val()<=1 && $('#calificacion2').val()>=0 && $('#calificacion4').val()<=1 && $('#calificacion4').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
            $('#calificacion4').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido. (1 punto)');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
            $('#calificacion4').focus();
            $('#calificacion4').css("background-color", "#D50545");
        }*/
      });    

});





