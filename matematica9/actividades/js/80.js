var titulos="refuerzo";
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });



    function Preg4(){

        var nEnt0 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt1 =  Math.round(Math.random() * (20 - (2)) + (2));

        $("#nEnt0").append(nEnt0);
        $("#nEnt1").append((nEnt0)+1);
        $("#nEnt2").append((nEnt0)+2);
        $("#nEnt3").append((nEnt0)+3);


        $("#nIr0").append(nEnt1);
        $("#nIr1").append((nEnt1)+1);
        $("#nIr2").append((nEnt1)+2);
        $("#nIr3").append((nEnt1)+3);

    }





    function Preg5(){

        var nEnt0 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt1 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt2 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt3 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt4 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt5 =  Math.round(Math.random() * (20 - (2)) + (2));
       
        $("#nEf0").append(nEnt0);
        $("#nEf1").append((nEnt0));
        $("#nEf2").append((nEnt1));
        $("#nEf3").append((nEnt2));
        $("#nEf4").append((nEnt3));
        $("#nEf5").append((nEnt2)); 
        $("#nEf6").append((nEnt4)); 
        $("#nEf7").append((nEnt5)); 
        $("#nEf8").append((nEnt4));        

    }



    function Preg6(){

        var n0 =  Math.round(Math.random() * (10 - (2)) + (2));
        var n1 =  (Math.random() * (40 - (20)) + (20)).toFixed(3);
       
        $("#nR0").append(n0);
        $("#nR1").append(n1);
    }



    function Preg7(){
        var n0 = Math.round(Math.random() * (10 - 2) + 2);
        var n1 = Math.round(Math.random() * (10 - 2) + 2);
        var n2 = Math.round(Math.random() * (10 - 2) + 2);

        var nDes0 =  Math.round(Math.pow((n0), 2));
        var nDes1 =  Math.round(Math.pow((n1), 2));
        var nDes2 =  Math.round(Math.pow((n2), 2));
       
        $("#nDes0").append(nDes0);
        $("#nDes1").append(nDes1);
        $("#nDes2").append(nDes2);

        //preg9
        $("#nRep0").append(n2);

        //preg11
        $("#nL0").append(n2);
    }




    function Preg8(){

      var opt = '<option></option><option value="rNom3">Elemento neutro de la suma</option> <option value="rNom2">Inverso multiplicativo</option><option value="rNom1">Distributiva de la multiplicación con respecto a la adición</option><option value="rNom4">Conmutativa de la suma</option><option value="rNom0">Asociativa y conmutativa</option>';

      var contenidos = [
            ['<tr><td style="background-color: #2CA3FF; color: white; font-size: 40px;" align="center"></td><td><span style="font-size: 21px;">(− 6)  +  [ (+7)  +  (− 10) ]  =  [ (− 10)  +  (− 6) ]  +  (+7)</span></td><td><select class="form-control respuestas" id="rN0">'+opt+'</select></td></tr>'],
              ['<tr><td style="background-color: #E8D72B; color: white; font-size: 40px;" align="center"></td>' +
              '<td><img src="img/i1_p82_act9.jpg" class="img-responsive"></td>' +
              '<td><select class="form-control respuestas" id="rN1">'+opt+'</select></td></tr>'],
              ['<tr>'+
                '<td style="background-color: #E82BAC; color: white; font-size: 40px;" align="center"></td>'+
                  '<td><img src="img/i2_p82_act9.jpg" class="img-responsive"></td>'+
                  '<td><select class="form-control respuestas" id="rN2">'+opt+
                  '</select>'+
                '</td>'+
             '</tr>'],
             ['<tr>'+
                '<td style="background-color: #2DC840; color: white; font-size: 40px;" align="center"></td>'+
                  '<td><img src="img/i3_p82_act9.jpg" class="img-responsive"></td>'+
                  '<td><select class="form-control respuestas" id="rN3">'+opt+
                  '</select>'+
                '</td>'+
            '</tr>'],
            ['<tr>'+
                '<td style="background-color: #EC4D34; color: white; font-size: 40px;" align="center"></td>'+
                '<td><img src="img/i4_p82_act9.jpg" class="img-responsive"></td>'+
                '<td><select class="form-control respuestas" id="rN4">'+opt+
                '</select>'+
              '</td>'+
            '</tr>']
        ]
      contenidos.sort(f_randomico);


      $.each( contenidos, function( i, item ) {
        $("#conNom0").append( item );
      });

    }




    var notaFinalP3 = 0;
    function Resp3(){
  
      var val = 0;
      var res = '5,6,7,9';


      for(var i=0; i<5; i++) {

        if(i==1){res='1,2,4,5,7,8,9,10,11,12,14'}
        if(i==2){res='1,3,4,7,9,10,12,13,14'}
        if(i==3){res='2,3,4,9,12,14,15,16,18'}
        if(i==4){res='1,5,7,9,10,13'}

          val = ((($('#rDCX'+i).val()).replace(/ |√|<|-/g, "")).split(','));
          if( val == res) {
              notaFinalP3++     
              $('#rDCX'+i).css("background-color", "#5ED188");
          }else{
              $('#rDCX'+i).css("background-color", "#EF87A7");
          }
      }

    }






    function Cargar() {   
        location.reload(true);
    }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();

      function confirmar() {
        Resp3();

        var nota1 = parseFloat($('#calificacion0').val());
        var nota2 = parseFloat($('#calificacion1').val());
        var nota3 = (notaFinalP3*3)/5;
            
        var notaFinal = (nota1+nota2+nota3);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

        if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
        }
          
      });

  });
