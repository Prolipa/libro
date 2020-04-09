var titulos="reflexiono"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }



    function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {

            Inicio();

  var valTemp = [];
      valTemp[0] = Math.floor(Math.random() * 50) + 1;
      valTemp[1] = Math.floor(Math.random() * 50) + 1;
      valTemp[2] = Math.floor(Math.random() * 50) + 1;
      valTemp[3] = Math.floor(Math.random() * 50) + 1;
      valTemp[4] = Math.floor(Math.random() * 50) + 1;  
      valTemp[5] = Math.floor(Math.random() * 50) + 1;  


Highcharts.chart('container', {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
  title: {
    text: 'Exploro para recordar'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Discapacidad',
    data: [
      ['Visual', valTemp[0]],
      ['Otras', valTemp[1]],
      ['Auditiva', valTemp[2]],
      ['Mental', valTemp[3]],
      ['Motriz', valTemp[4]],
      ['Lenguaje', valTemp[5]]
    ]
  }]
});

           function confirmar() {

              var notaFinal = $('#calificacion').val();
                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);
                            
              return false
          }
      

      $("#Calificar").click(function() {

        if($('#calificacion').val() != ''){
          confirmar();
          $('#calificacion').css("background-color", "#05D576");
        }else{
          $('#calificacion').css("background-color", "#D50545");
        }


          
      });

      });
