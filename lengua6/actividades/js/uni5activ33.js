
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

    var pos = [2,3,4,5,6,7,8,9,10,11,12,13,14];
        pos.sort(f_randomico);
        pos[13]=15;
    function Actividades(){
        var actividades = [
           '<!--1--> <div class="panel-body setup-content" id="step1"> <div class="panel-body"> <b>Relaciona</b> el tipo de texto de la izquierda con el fragmento de la derecha que corresponda.  <br><br> <div align="center"><img src="img/i1_p129_act1.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca1"></ol> </div> </div> </div></div>',
           '<!--2--> <div class="panel-body setup-content" id="step'+pos[0]+'" style="display: none;"> <div class="panel-body"> <b>Lee</b> el siguiente texto y <b>responde</b> a las preguntas. <br><br> <div align="center"><img src="img/i1_p129_act2.png" class="img-responsive"><br>¿De qué trata el texto?<br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca2"></ol> </div> </div> </div></div>',
           '<!--3--> <div class="panel-body setup-content" id="step'+pos[1]+'" style="display: none;"> <div class="panel-body"> <b>Lee</b> el siguiente texto y <b>responde</b> a las preguntas. <br><br> <div align="center"><img src="img/i1_p129_act2.png" class="img-responsive"><br>¿Quién es el personaje principal?<br><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca3"></ol> </div> </div> </div></div>',
           '<!--4--> <div class="panel-body setup-content" id="step'+pos[2]+'" style="display: none;"> <div class="panel-body"> <b>Lee</b> el siguiente texto y <b>responde</b> a las preguntas. <br><br> <div align="center"><img src="img/i1_p129_act2.png" class="img-responsive"><br>Relaciona las partes del cuento con las acciones del texto anterior. <br><br><img src="img/i4_p129_act1.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca4"></ol> </div> </div> </div></div>',
           '<!--5--> <div class="panel-body setup-content" id="step'+pos[3]+'" style="display: none;"> <div class="panel-body"> <b>Observa</b> las imágenes y <b>responde</b> a las preguntas. <br><br> <div align="center"><img src="img/i1_p129_act5.png" class="img-responsive"><br>¿A qué tipo de texto pertenecen las imágenes?<br><br></div><div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca5"></ol> </div> </div> </div></div>',
           '<!--6--> <div class="panel-body setup-content" id="step'+pos[4]+'" style="display: none;"> <div class="panel-body"> <b>Observa</b> las imágenes y <b>responde</b> a las preguntas. <br><br> <div align="center"><img src="img/i1_p129_act5.png" class="img-responsive"><br>¿Cuál es la intención comunicativa de estos textos?<br><br></div><div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca6"></ol> </div> </div> </div></div>',
           '<!--7--> <div class="panel-body setup-content" id="step'+pos[5]+'" style="display: none;"> <div class="panel-body"> <b>Identifica</b> los modificadores directos del núcleo del sujeto en las siguientes oraciones. <br> <div align="center">El mecánico aspira y encera su carro con una esponja.<br><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-12"> <ol type="a" id="marca7"></ol> </div> </div> </div></div>',
           '<!--8--> <div class="panel-body setup-content" id="step'+pos[6]+'" style="display: none;"> <div class="panel-body"> <b>Identifica</b> los modificadores directos del núcleo del sujeto en las siguientes oraciones. <br> <div align="center">El auto rojo cruzó la avenida.<br><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca8"></ol> </div> </div> </div> </div>',
           '<!--9--> <div class="panel-body setup-content" id="step'+pos[7]+'" style="display: none;"> <div class="panel-body"> <b>Identifica</b> los modificadores directos del núcleo del sujeto en las siguientes oraciones. <br> <div align="center">Los materiales de construcción se guardan en la bodega.<br><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;">  <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca9"></ol> </div> </div> </div></div>',
          '<!--10--> <div class="panel-body setup-content" id="step'+pos[8]+'" style="display: none;"> <div class="panel-body"> <b>Identifica</b> los modificadores directos del núcleo del sujeto en las siguientes oraciones. <br> <div align="center">Tus amigos llegaron tarde a la fiesta de cumpleaños.<br><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca10"></ol> </div> </div> </div> </div>',
          '<!--11--> <div class="panel-body setup-content" id="step'+pos[9]+'" style="display: none;"> <div class="panel-body"> <b>Ordena</b> las oraciones para organizar un texto histórico coherente. <br><br> <div align="center"><img src="img/i1_p129_act11.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca11"></ol> </div> </div> </div> </div>',
         '<!--12--> <div class="panel-body setup-content" id="step'+pos[10]+'" style="display: none;"> <div class="panel-body"> <b>Elige</b> los verbos personales.<br><br>1. Soler<br>2. Amanecer<br>3. Pensar<br>4. Beber<br>5. Tronar<br>6. Escribir<br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca12"></ol> </div> </div> </div> </div>',
         '<!--13--> <div class="panel-body setup-content" id="step'+pos[11]+'" style="display: none;"> <div class="panel-body"> <b>Relaciona</b> las lenguas de los pueblos y nacionalidades de la izquierda con las prácticas culturales de la derecha. <br><br> <div align="center"><img src="img/i1_p129_act13.png" class="img-responsive"><br></div><div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca13"></ol> </div> </div> </div> </div>',
         '<!--14--> <div class="panel-body setup-content" id="step'+pos[12]+'" style="display: none;"> <div class="panel-body"> <b>Reconoce</b> las palabras que provienen de lenguas originarias del Ecuador. <br><br> 1. Atatay<br>2. Alumno<br>3. Alcohol<br>4. Ayampaco<br>5. Humita<br>6. Plomero<br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca14"></ol> </div> </div> </div> </div>',
        ];
        actividades.sort(f_randomico);
        $('#actividades').append(actividades);

    }


    function Preg1(){
        var marca1 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR1">1d, 2b</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR53">1a, 2c</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR54">1b, 2a</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR55">1d, 2c</span> </li><br> </div>',
        ];
        marca1.sort(f_randomico);
        $('#marca1').append(marca1);
    }


    function Preg2(){
        var marca2 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR2">De un niño que cuida sus zapatos.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR56">De un niño al que le gusta mojarse y saltar en la lluvia.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR15">De un niño que no cuida sus zapatos.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR16">De unos padres que regalan unos zapatos.</span> </li><br> </div>',
        ];
        marca2.sort(f_randomico);
        $('#marca2').append(marca2);
    }


    function Preg3(){
        var marca3 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR3">El niño</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR17">La lluvia</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR18">Los padres</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR19">Los zapatos</span> </li><br> </div>',
        ];
        marca3.sort(f_randomico);
        $('#marca3').append(marca3);
    }


    function Preg4(){
        var marca4 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR4">1c, 2a, 3b</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR20">1a, 2c, 3b</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR21">1b, 2b, 3a</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR22">1c, 2b, 3a</span> </li><br> </div>',
        ];
        marca4.sort(f_randomico);
        $('#marca4').append(marca4);
    }

    function Preg5(){
        var marca5 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR5">Folleto</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR23">Afiche</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR24">Artículo</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR25">Mapa</span> </li><br> </div>',
        ];
        marca5.sort(f_randomico);
        $('#marca5').append(marca5);
    }

    function Preg6(){
        var marca6 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR6">Informar sobre los atractivos turísticos.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR26">Informar sobre los accidentes geográficos de un lugar.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR27">Publicitar un producto turístico. </span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR28">Transmitir conocimientos científicos.</span> </li><br> </div>',
        ];
        marca6.sort(f_randomico);
        $('#marca6').append(marca6);
    }

    function Preg7(){
        var marca7 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR7">El</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR29">su</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR30">Mecánico</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR31">Aspira y encera</span> </li><br> </div>',
        ];
        marca7.sort(f_randomico);
        $('#marca7').append(marca7);
    }

    function Preg8(){
        var marca8 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR8">El, rojo</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR32">Auto, cruzó</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR33">El, la</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR34">Rojo, avenida</span> </li><br> </div>',
        ];
        marca8.sort(f_randomico);
        $('#marca8').append(marca8);
    }

    function Preg9(){
        var marca9 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR9">Los</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR35">Se</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR36">En la</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR37">De construcción</span> </li><br> </div>',
        ];
        marca9.sort(f_randomico);
        $('#marca9').append(marca9);
    }

    function Preg10(){
        var marca10 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR10">Tus</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR38">Amigos</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR39">De</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR40">La</span> </li><br> </div>',
        ];
        marca10.sort(f_randomico);
        $('#marca10').append(marca10);
    }

    function Preg11(){
        var marca11 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR11">2, 4, 3, 1 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR41">2, 3, 1, 4</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR42">3, 2, 4, 1</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR43">4, 2, 3, 1</span> </li><br> </div>',
        ];
        marca11.sort(f_randomico);
        $('#marca11').append(marca11);
    }

    function Preg12(){
        var marca12 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR12">3, 4, 6</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR44">1, 2, 5,</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR45">1, 3, 4</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR46">1, 4, 6</span> </li><br> </div>',
        ];
        marca12.sort(f_randomico);
        $('#marca12').append(marca12);
    }

    function Preg13(){
        var marca13 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR13">1b, 2c, 3a</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR47">1a, 2c, 3b</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR48">1b, 2a, 3c</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR49">1c, 2a, 3b</span> </li><br> </div>',
        ];
        marca13.sort(f_randomico);
        $('#marca13').append(marca13);
    }

    function Preg14(){
        var marca14 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR14">1, 4, 5</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR50">1, 3, 4</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR51">2, 3, 6</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR52">3, 4, 5</span> </li><br> </div>',
        ];
        marca14.sort(f_randomico);
        $('#marca14').append(marca14);
    }


  //////////////////////////////////////////////////////////////////////////////////////

  var notaFinalP = 0;
  var notaFinalM = 0;
  function Resp(){
      for(var i=1; i<57; i++){//cantidad de opciones
            if( i<15 ){//cantidad de preguntas
                if($('#oMRR'+(i) +'.pinta').text()){
                  notaFinalP++;
                  $('#oMR'+i).addClass('biene');
                }
            }else{
                if($('#oMRR'+(i) +'.pinta').text()){
                  $('#oMR'+i).addClass('male');
                  notaFinalM++;
                }
            }
        }
  }



///////////////////////////////////////////////////////////////////
      var c=0;
      function nextPrev(n) {
          pos1 = [2,3,4,5,6,7,8,9,10,11,12,13,14];
          c = parseInt($('#tabs').text()) + 1;
          $('#tabs').text(c);
          $('#n_cont').text(c+1);
          //alert("step: "+pos[c-1]);
          if(c>=2 && c<14){
            document.getElementById("step"+pos1[c-2]).style.display = "none";
            document.getElementById("step"+pos1[c-1]).style.display = "block";
          }else{
            if(c<2){
              document.getElementById("step1").style.display = "none";
              document.getElementById("step"+pos1[c-1]).style.display = "block";
            }else{
              document.getElementById("step"+pos1[c-2]).style.display = "none";
              document.getElementById("step15").style.display = "block";
              confirmar();
            }
          }
      }


      function confirmar(){
            Resp();
            cor = ((notaFinalP*10)/14).toFixed(2);
            calificacion=1;
            itemsT=1;
            cont=1;
            ejer=1;
            inc=0;

            Calculo_nota();

            $("#nAC").text(notaFinalP);
            $("#nER").text(notaFinalM);
            $('#Calificar').attr('disabled', false);
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

        for(var i=1; i<57; i++){
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

