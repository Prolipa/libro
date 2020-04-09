
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $("#act").text('1');
      $("#n_ejer").text('15');//n_cont
  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });

    var pos = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        pos.sort(f_randomico);
        pos[14]=16;
    function Actividades(){
        var actividades = [
           '<!--1--> <div class="panel-body setup-content" id="step1"> <div class="panel-body"> <b>Identifica</b> las características del mito.   <br><br> <div align="center"><img src="img/i1_p253_act1.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca1"></ol> </div> </div> </div></div>',
           '<!--2--> <div class="panel-body setup-content" id="step'+pos[0]+'" style="display: none;"> <div class="panel-body"> <b>Relaciona</b> la región a la que pertenece la canción. <br><br> <div align="center"><img src="img/i1_p253_act2.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca2"></ol> </div> </div> </div></div>',
           '<!--3--> <div class="panel-body setup-content" id="step'+pos[1]+'" style="display: none;"> <div class="panel-body"> <b>Completa</b> el siguiente texto con las palabras adecuadas.  <br><br> <div align="center"><img src="img/i1_p253_act3.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca3"></ol> </div> </div> </div></div>',
           '<!--4--> <div class="panel-body setup-content" id="step'+pos[2]+'" style="display: none;"> <div class="panel-body"> <b>Lee</b> el siguiente cuento popular y <b>responde</b> a las preguntas. <br><br> <div align="center"><img src="img/i1_p253_act4.png" class="img-responsive"><br>¿Por qué el duende entregó la nuez a María?<br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca4"></ol> </div> </div> </div></div>',
           '<!--5--> <div class="panel-body setup-content" id="step'+pos[3]+'" style="display: none;"> <div class="panel-body"> ¿Qué problemas tenían los habitantes del pueblo? <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca5"></ol> </div> </div> </div></div>',
           '<!--6--> <div class="panel-body setup-content" id="step'+pos[4]+'" style="display: none;"> <div class="panel-body"> ¿Qué significó la nuez de oro para el pueblo? <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca6"></ol> </div> </div> </div></div>',
           '<!--7--> <div class="panel-body setup-content" id="step'+pos[5]+'" style="display: none;"> <div class="panel-body"> <b>Selecciona</b> el orden cronológico adecuado para que la crónica tenga una secuencia lógica.<br> <div align="center"><img src="img/i1_p254_act7.png" class="img-responsive"><br><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-12"> <ol type="a" id="marca7"></ol> </div> </div> </div></div>',
           '<!--8--> <div class="panel-body setup-content" id="step'+pos[6]+'" style="display: none;"> <div class="panel-body"> <div align="center"><img src="img/i1_p254_act7.png" class="img-responsive"><br><br> ¿Cuál es la idea principal del texto? <br><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca8"></ol> </div> </div> </div> </div>',
           '<!--9--> <div class="panel-body setup-content" id="step'+pos[7]+'" style="display: none;"> <div class="panel-body"> <div align="center"><img src="img/i1_p254_act7.png" class="img-responsive"><br><br> ¿Qué significa caserita?<br><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;">  <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca9"></ol> </div> </div> </div></div>',
          '<!--10--> <div class="panel-body setup-content" id="step'+pos[8]+'" style="display: none;"> <div class="panel-body"> <b>Completa</b> el texto con los conectores que corresponda. <br><div align="center"><img src="img/i1_p254_act10.png" class="img-responsive"><br><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca10"></ol> </div> </div> </div> </div>',
          '<!--11--> <div class="panel-body setup-content" id="step'+pos[9]+'" style="display: none;"> <div class="panel-body"> <b>Selecciona</b> las palabras que tienen un prefijo. <br><br> <div align="center">1. Intolerante &nbsp;&nbsp;&nbsp;2. Despeinado&nbsp;&nbsp;&nbsp;3. Ubicado&nbsp;&nbsp;&nbsp;4. Abuelita<br><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca11"></ol> </div> </div> </div> </div>',
         '<!--12--> <div class="panel-body setup-content" id="step'+pos[10]+'" style="display: none;"> <div class="panel-body"> <b>Selecciona</b> las palabras que tienen un sufijo. <br><br> 1. Altísimo&nbsp;&nbsp;&nbsp;2. Inesperado&nbsp;&nbsp;&nbsp;3. Cansado&nbsp;&nbsp;&nbsp;4. Abuelita<br><br><div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca12"></ol> </div> </div> </div> </div>',
         '<!--13--> <div class="panel-body setup-content" id="step'+pos[11]+'" style="display: none;"> <div class="panel-body"> <b>Relaciona</b> las conjunciones coordinantes con sus ejemplos. <br><br> <div align="center"><img src="img/i1_p255_act13.png" class="img-responsive"><br></div><div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca13"></ol> </div> </div> </div> </div>',
         '<!--14--> <div class="panel-body setup-content" id="step'+pos[12]+'" style="display: none;"> <div class="panel-body"> <b>Identifica</b> las afirmaciones correctas sobre el rodeo montuvio. <br><br> 1. Es una costumbre extranjera.<br>2. Se practica en la Costa ecuatoriana.<br>3. Los caballos son un elemento central de la fiesta.<br>4. Se interpreta música rock.<br>5. Es común interpretar amorfinos. <br>6. Es una manifestación de la identidad cultural ecuatoriana. <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca14"></ol> </div> </div> </div> </div>',
         '<!--15--> <div class="panel-body setup-content" id="step'+pos[13]+'" style="display: none;"> <div class="panel-body"> Identifica las afirmaciones correctas sobre la bomba. <br><br> <img src="img/i1_p255_act15.png" class="img-responsive"> <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca15"></ol> </div> </div> </div> </div>',
        ];
        actividades.sort(f_randomico);
        $('#actividades').append(actividades);

    }


    function Preg1(){
        var marca1 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR1"> 1, 3, 6 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR53"> 1, 2, 3 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR54"> 2, 4, 5 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR55"> 3, 5, 6 </span> </li><br> </div>',
        ];
        marca1.sort(f_randomico);
        $('#marca1').append(marca1);
    }


    function Preg2(){
        var marca2 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR2"> 1 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR56"> 2 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR57"> 3 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR16"> 4 </span> </li><br> </div>',
        ];
        marca2.sort(f_randomico);
        $('#marca2').append(marca2);
    }


    function Preg3(){
        var marca3 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR3"> Expertos, público, conclusiones, diálogo. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR17"> Médicos, jurado, puntuaciones, jurado </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR18"> Profesionales, profesor, calificaciones, grupo. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR19"> Profesores, tribunal, conclusiones, diálogo. </span> </li><br> </div>',
        ];
        marca3.sort(f_randomico);
        $('#marca3').append(marca3);
    }


    function Preg4(){
        var marca4 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR4"> El duendecillo se conmovió con la bondad de María. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR20"> La nuez de oro tenía poder mágicos. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR21"> La niña ganó la nuez en un concurso </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR22"> Tenía muchas y esa no la necesitaba. </span> </li><br> </div>',
        ];
        marca4.sort(f_randomico);
        $('#marca4').append(marca4);
    }

    function Preg5(){
        var marca5 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR5"> Existían personas pobres que no se podían alimentar adecuadamente. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR23"> Existían muchos niños generosos en el pueblo. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR24"> Existían muchas personas ricas que ayudaban a los pobres. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR25"> Existían muchos duendes en los árboles. </span> </li><br> </div>',
        ];
        marca5.sort(f_randomico);
        $('#marca5').append(marca5);
    }

    function Preg6(){
        var marca6 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR6"> La posibilidad de alimentarse y protegerse del frío invierno. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR26"> La oportunidad de cumplir sus caprichos. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR27"> La posibilidad de resolver sus problemas económicos </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR28"> El chance de iniciar nuevas y emocionantes aventuras. </span> </li><br> </div>',
        ];
        marca6.sort(f_randomico);
        $('#marca6').append(marca6);
    }

    function Preg7(){
        var marca7 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR7"> 2, 4, 1, 3 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR29"> 1, 3, 4, 2 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR30"> 1, 4, 3, 4 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR31"> 4, 3, 2, 1 </span> </li><br> </div>',
        ];
        marca7.sort(f_randomico);
        $('#marca7').append(marca7);
    }

    function Preg8(){
        var marca8 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR8"> El desfile de los mercados el 23 de noviembre es una tradición. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR32"> El alcalde mira el desfile de los vendedores del mercado </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR33"> El desfile inicia a las 08:00 en el parque Benito Juárez.  </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR34"> Las casetitas tomarán un descanso en el parque. </span> </li><br> </div>',
        ];
        marca8.sort(f_randomico);
        $('#marca8').append(marca8);
    }

    function Preg9(){
        var marca9 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR9"> Vendedor al que se le compra frecuentemente. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR35"> Artista que participa en los desfiles. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR36"> Persona que mira un desfile. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR37"> Trabajador del municipio. </span> </li><br> </div>',
        ];
        marca9.sort(f_randomico);
        $('#marca9').append(marca9);
    }

    function Preg10(){
        var marca10 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR10"> antes de, entonces, al mismo, previamente </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR38"> antes de, después de, mientras que, hace tiempo </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR39"> previamente, también, el mismo, posteriormente </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR40"> tiempo atrás, finalmente, junto, al mismo tiempo </span> </li><br> </div>',
        ];
        marca10.sort(f_randomico);
        $('#marca10').append(marca10);
    }

    function Preg11(){
        var marca11 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR11"> 1, 2 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR41"> 1, 4 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR42"> 2, 3 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR43"> 1, 3 </span> </li><br> </div>',
        ];
        marca11.sort(f_randomico);
        $('#marca11').append(marca11);
    }

    function Preg12(){
        var marca12 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR12"> 1, 4 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR44"> 1, 2 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR45"> 2, 4 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR46"> 3, 4 </span> </li><br> </div>',
        ];
        marca12.sort(f_randomico);
        $('#marca12').append(marca12);
    }

    function Preg13(){
        var marca13 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR13"> 1a, 2c, 3b </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR47"> 1c, 2a, 3b </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR48"> 1a, 2b, 3c </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR49"> 1b, 2c, 3a </span> </li><br> </div>',
        ];
        marca13.sort(f_randomico);
        $('#marca13').append(marca13);
    }

    function Preg14(){
        var marca14 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR14"> 2, 3, 5, 6 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR50"> 1, 4, 5, 6 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR51"> 1, 3, 4, 5 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR52"> 3, 4, 5, 6 </span> </li><br> </div>',
        ];
        marca14.sort(f_randomico);
        $('#marca14').append(marca14);
    }


    function Preg15(){
        var marca15 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR15"> 1, 3, 5 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR58"> 1, 4, 6 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR59"> 2, 4, 6 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR60"> 2, 3, 4 </span> </li><br> </div>',
        ];
        marca15.sort(f_randomico);
        $('#marca15').append(marca15);
    }


  //////////////////////////////////////////////////////////////////////////////////////

  var notaFinalP = 0;
  var notaFinalM = 0;
  function Resp(){
      for(var i=1; i<61; i++){//cantidad de opciones
            if( i<16 ){//cantidad de preguntas
                if($('#oMRR'+(i) +'.pinta').text()){
                  notaFinalP++;
                  $('#oMR'+i).css("background-color", "#5ED188");
                }
            }else{
                if($('#oMRR'+(i) +'.pinta').text()){
                  $('#oMR'+i).css("background-color", "#EF87A7");
                  notaFinalM++;
                }
            }
        }
  }



///////////////////////////////////////////////////////////////////
      var c=0;
      function nextPrev(n) {
          pos1 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
          c = parseInt($('#tabs').text()) + 1;
          $('#tabs').text(c);
          $('#n_cont').text(c+1);
          //alert("step: "+pos[c-1]);
          if(c>=2 && c<15){
            document.getElementById("step"+pos1[c-2]).style.display = "none";
            document.getElementById("step"+pos1[c-1]).style.display = "block";
          }else{
            if(c<2){
              document.getElementById("step1").style.display = "none";
              document.getElementById("step"+pos1[c-1]).style.display = "block";
            }else{
              document.getElementById("step"+pos1[c-2]).style.display = "none";
              document.getElementById("step16").style.display = "block";
              confirmar();
            }
          }
      }


      function confirmar(){
            Resp();
            cor = ((notaFinalP*10)/15).toFixed(2);
            calificacion=1;
            itemsT=1;
            cont=1;
            ejer=1;
            inc=0;

            Calculo_nota();

            $("#nAC").text(notaFinalP);
            $("#nER").text(notaFinalM);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);
            return false
        }


    $(document).ready(function() {
        Inicio();
        Actividades();
        Preg1();
        Preg2();
        Preg3();
        Preg4();
        Preg5();
        Preg6();
        Preg7();
        Preg8();
        Preg9();
        Preg10();
        Preg11();
        Preg12();
        Preg13();
        Preg14();
        Preg15();

        for(var i=1; i<61; i++){
            $('#oMRR'+(i)).click(function(){
              setTimeout(function(){ nextPrev(1); }, 500);
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

      $("#Calificar").click(function() {
        punt=[];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });

