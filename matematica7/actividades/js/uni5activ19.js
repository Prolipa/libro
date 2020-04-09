
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $("#act").text('1');
      $("#n_ejer").text('17');//n_cont
  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });

    var pos = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
        pos.sort(f_randomico);
        pos[16]=18;
    function Actividades(){
        var actividades = [
           '<!--1--> <div class="panel-body setup-content" id="step1"> <div class="panel-body" align="justify"> Para elaborar yogur, se usa la fermentación de la leche causada por bacterias, que se duplican cada 4 horas. Al elaborar un yogur se usan inicialmente 5 unidades de fermento.<br> <b>Ordena</b> de manera ascendente estos datos, que muestran el crecimiento de las bacterias.<br><br> <div class="col-sm-6" align="justify"> 1. 160 fermentos <br> 2. 40 fermentos <br> 3. 10 fermentos <br><br> </div> <div class="col-sm-6" align="justify"> 4. 80 fermentos <br> 5. 20 fermentos <br> 6. 5 fermentos <br><br> </div><br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca1"></ol> </div> </div> </div></div>',
           '<!--2--> <div class="panel-body setup-content" id="step'+pos[0]+'" style="display: none;"> <div class="panel-body" align="justify"> <b>Completa</b> el enunciado del problema con las palabras adecuadas.<br> Luis ahorra una cantidad semanal de ________. Inicia con $ 10, y luego decide ________ la cantidad cada semana. Al cabo de dos meses, ¿cuánto dinero habrá _______?<br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca2"></ol> </div> </div> </div> </div>',
           '<!--3--> <div class="panel-body setup-content" id="step'+pos[1]+'" style="display: none;"> <div class="panel-body" align="justify"> El tiempo invertido por un grupo de estudiantes en dar una prueba de Matemática es de 45 minutos. ¿Cuánto tiempo tardarán en resolver 3 pruebas similares?.<br> <b>Selecciona</b> la respuesta correcta. <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca3"></ol> </div> </div> </div> </div>',
           '<!--4--> <div class="panel-body setup-content" id="step'+pos[2]+'" style="display: none;"> <div class="panel-body" align="justify"> <b>Escoge</b> la opción que indica el valor posicional, de derecha a izquierda, de los dígitos marcados en el número. 345 762 148  <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca4"></ol> </div> </div> </div> </div>',
           '<!--5--> <div class="panel-body setup-content" id="step'+pos[3]+'" style="display: none;"> <div class="panel-body" align="justify"> Cada semana, Patricio recibe $ 20. Gasta $ 1 diario en pasajes y $ 2 diarios en colación de lunes a viernes, y $ 3 semanales en arreglos de la clase. <br><b>Selecciona</b> las operaciones que debe realizar para saber cuánto ahorra al final de la semana.<br><br> 1. 1 dólar por 5 días → 1 × 5 = 5 dólares <br> 2. 3 dólares por semana → 1 × 3 = 3 dólares <br> 3. 2 dólares por 10 días = 20 dólares <br> 4. 20 – 18 = 2 <br> 5. 2 dólares por 5 días → 2 × 5 = 10 dólares <br> 6. 5 + 10 + 3 = 18 <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca5"></ol> </div> </div> </div> </div>',
           '<!--6--> <div class="panel-body setup-content" id="step'+pos[4]+'" style="display: none;"> <div class="panel-body" align="justify"> <b>Relaciona</b> los números con su descomposición.<br> <div align="center"><img src="img/i1_p256_act6.png" class="img-responsive"></div> <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca6"></ol> </div> </div> </div> </div>',
           '<!--7--> <div class="panel-body setup-content" id="step'+pos[5]+'" style="display: none;"> <div class="panel-body" align="justify"> <b>Relaciona</b> cada número con el criterio de divisibilidad correspondiente.<br> <div align="center"><img src="img/i1_p256_act7.png" class="img-responsive"></div> <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca7"></ol> </div> </div> </div> </div>',
           '<!--8--> <div class="panel-body setup-content" id="step'+pos[6]+'" style="display: none;"> <div class="panel-body" align="justify"> Sonia necesita dividir una cartulina de 40 cm de largo por 30 cm de ancho en cuadrados iguales. Los cuadrados deben ser lo más grandes que se pueda, sin que sobre ningún pedazo de cartulina. ¿Cuánto medirá el lado de cada cuadrado? ¿Cuántos cuadrados podrá obtener?.<br> <b>Selecciona</b> la respuesta correcta. <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca8"></ol> </div> </div> </div> </div>',
           '<!--9--> <div class="panel-body setup-content" id="step'+pos[7]+'" style="display: none;"> <div class="panel-body" align="justify"> Mario compra 576 m2  de césped para cubrir el patio de su casa. Si tiene la forma, ¿cuál es la medida del lado?.<br> <b>Selecciona</b> la respuesta correcta.  <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca9"></ol> </div> </div> </div> </div>',
          '<!--10--> <div class="panel-body setup-content" id="step'+pos[8]+'" style="display: none;"> <div class="panel-body" align="justify"> Un estudiante invirtió de su mesada en la compra de cuadernos, y en comprar dulces. ¿Qué cantidad de dinero gastó?. <b>Selecciona</b> la respuesta correcta. <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca10"></ol> </div> </div> </div> </div>',
          '<!--11--> <div class="panel-body setup-content" id="step'+pos[9]+'" style="display: none;"> <div class="panel-body" align="justify"> La madre de Ariana paga $ 60 por una lista de útiles. Sin embargo, necesita saber cuánto costarían 2, 5 y 10 listas similares. <br> <b>Completa</b> la tabla de datos.<br> <div align="center"><img src="img/i1_p256_act11.png" class="img-responsive"></div> <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca11"></ol> </div> </div> </div> </div>',
         '<!--12--> <div class="panel-body setup-content" id="step'+pos[10]+'" style="display: none;"> <div class="panel-body" align="justify"> <b>Observa</b> la imagen. <br> <div align="center"><img src="img/i1_p256_act12.png" class="img-responsive"></div><br> <b>Selecciona</b> las afirmaciones que describan el significado de la gráfica. <br> 1. Es una proporción directa. <br> 2. La representación es una línea curva. <br> 3. Es una proporción inversa. <br> 4. La representación es una línea recta. <br> 5. La relación de las variables es directamente proporcional. <br> 6. La relación de las variables es inversamente proporcional. <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca12"></ol> </div> </div> </div> </div>',
         '<!--13--> <div class="panel-body setup-content" id="step'+pos[11]+'" style="display: none;"> <div class="panel-body" align="justify"> Si se sabe que el área del triángulo es igual a 54 cm<sup>2</sup>  y el valor de altura 9 cm. <br> <b>Selecciona</b> el valor de su base. <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca13"></ol> </div> </div> </div> </div>',
         '<!--14--> <div class="panel-body setup-content" id="step'+pos[12]+'" style="display: none;"> <div class="panel-body" align="justify"> <div class="col-sm-7" align="justify"> <b>Observa</b> la siguiente imagen.<br> <b>Selecciona</b> sus propiedades.<br><br> 1. Posee base mayor y base menor.<br> 2. Tiene cuatro lados paralelos.<br> 3. La altura es un segmento perpendicular a las bases.<br> 4. No posee ángulos internos.<br> 5. Tiene dos lados paralelos.<br> </div> <div class="col-sm-5" align="center"> <img src="img/i1_p256_act14.png" class="img-responsive"> </div> <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca14"></ol> </div> </div> </div> </div>',
         '<!--15--> <div class="panel-body setup-content" id="step'+pos[13]+'" style="display: none;"> <div class="panel-body" align="justify"> <b>Lee</b>, <b>analiza</b> y <b>completa</b> la tabla. <br> En una clase de 41 alumnos, 12 juegan baloncesto; 8, fútbol; 5, ecuavóley; 6 practican natación; 3, gimnasia; y el resto no hace ningún deporte. <br> <b>Completa</b> la tabla de frecuencia.<br> <div align="center"><img src="img/i1_p256_act15.png" class="img-responsive"></div> <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca15"></ol> </div> </div> </div> </div>',
         '<!--16--> <div class="panel-body setup-content" id="step'+pos[14]+'" style="display: none;"> <div class="panel-body" align="justify"> Las estaturas de 10 niños de 7.º EGB, en centímetros, son 141, 141, 128, 148, 141, 135, 140, 146, 138 y 139.<br> <b>Relaciona</b> las Medidas de la tendencia central con los valores.<br> <div align="center"><img src="img/i1_p256_act16.png" class="img-responsive"></div> <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca16"></ol> </div> </div> </div> </div>',
         '<!--17--> <div class="panel-body setup-content" id="step'+pos[15]+'" style="display: none;"> <div class="panel-body" align="justify"> <b>Observa</b> los datos de la tabla y <b>elige</b> los elementos que interpretan la información.<br> 1. Las mariposas (ma) fueron los artrópodos más observados. <br> 2. En total observaron 150 artrópodos. <br> 3. Las hormigas (ho) son los artrópodos más frecuentes en el lugar visitado. <br> 4. Los estudiantes observaron 10 abejas(ab). <br> 5. Gimnasia <br> 6. Ningún deporte <br> <div align="center"><img src="img/i1_p256_act17.png" class="img-responsive"></div> <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca17"></ol> </div> </div> </div> </div>',
        ];
        actividades.sort(f_randomico);
        $('#actividades').append(actividades);
    }

    function Preg1(){
        var marca1 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR1">6, 3, 5, 2, 4, 1</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR18">1, 2, 3, 4, 5, 6</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR19">2, 4, 6, 3, 5, 1</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR20">6, 5, 3, 4, 1, 2</span> </li><br> </div>',
        ];
        marca1.sort(f_randomico);
        $('#marca1').append(marca1);
    }


    function Preg2(){
        var marca2 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR2">dinero – triplicar – ahorrado</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR21">tiempo – mejorar – botado </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR22">caramelos – guardar – regalado</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR23">dinero – mes – ahorrado</span> </li><br> </div>',
        ];
        marca2.sort(f_randomico);
        $('#marca2').append(marca2);
    }


    function Preg3(){
        var marca3 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR3">135 minutos</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR24">1 350 minutos</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR25">135,5 minutos</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR26">1 350,5 minutos</span> </li><br> </div>',
        ];
        marca3.sort(f_randomico);
        $('#marca3').append(marca3);
    }


    function Preg4(){
        var marca4 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR4">u, c, dm, dM</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR27">dM, m, c, u</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR28">um, dM, CM, c</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR29">u, dM, dm, c</span> </li><br> </div>',
        ];
        marca4.sort(f_randomico);
        $('#marca4').append(marca4);
    }

    function Preg5(){
        var marca5 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR5">1, 5, 2, 6, 4</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR30">3, 4, 1, 2, 6 </span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR31">5, 2, 4, 3, 1</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR32">2, 3, 4, 1, 5</span> </li><br> </div>',
        ];
        marca5.sort(f_randomico);
        $('#marca5').append(marca5);
    }

    function Preg6(){
        var marca6 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR6">1b, 2c, 3a, 4e, 5d</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR33">1a, 2b, 3c, 4d, 5e</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR34">1c, 2a, 3d, 4b, 5e</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR35">1d, 2b, 3c, 4a, 5e</span> </li><br> </div>',
        ];
        marca6.sort(f_randomico);
        $('#marca6').append(marca6);
    }

    function Preg7(){
        var marca7 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR7">1c, 2d, 3a, 4b, 5e</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR36">1a, 2b, 3c, 4d, 5e</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR37">1b, 2c, 3a, 4e, 5d</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR38">1d, 2a, 3b, 4c, 5d</span> </li><br> </div>',
        ];
        marca7.sort(f_randomico);
        $('#marca7').append(marca7);
    }

    function Preg8(){
        var marca8 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR8">10 cm de lado, 12 cuadrados</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR39">15 cm de lado, 10 cuadrados</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR40">12 cm de lado, 12 cuadrados</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR41">13 cm de lado, 15 cuadrados</span> </li><br> </div>',
        ];
        marca8.sort(f_randomico);
        $('#marca8').append(marca8);
    }

    function Preg9(){
        var marca9 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR9">24 m</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR42">28 m</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR43">18 m</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR44">16 m</span> </li><br> </div>',
        ];
        marca9.sort(f_randomico);
        $('#marca9').append(marca9);
    }

    function Preg10(){
        var marca10 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR10">4/9</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR45">4/3</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR46">3/9</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR47">2/27</span> </li><br> </div>',
        ];
        marca10.sort(f_randomico);
        $('#marca10').append(marca10);
    }

    function Preg11(){
        var marca11 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR11">120 – 300 – 600</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR48">80 – 100 – 150 cm</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR49">100 – 120 – 500</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR50">150 – 200 – 350</span> </li><br> </div>',
        ];
        marca11.sort(f_randomico);
        $('#marca11').append(marca11);
    }

    function Preg12(){
        var marca12 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR12">1, 4, 5</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR51">1, 2, 3</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR52">2, 4, 6</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR53">3, 5, 6</span> </li><br> </div>',
        ];
        marca12.sort(f_randomico);
        $('#marca12').append(marca12);
    }

    function Preg13(){
        var marca13 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR13">12 cm</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR54">24 cm</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR55">9 cm</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR56">8 cm</span> </li><br> </div>',
        ];
        marca13.sort(f_randomico);
        $('#marca13').append(marca13);
    }

    function Preg14(){
        var marca14 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR14">1, 3, 5</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR57">1, 2, 3</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR58">2, 3, 4</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR59">4, 5, 2</span> </li><br> </div>',
        ];
        marca14.sort(f_randomico);
        $('#marca14').append(marca14);
    }


    function Preg15(){
        var marca15 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR15">1b, 2a, 3d, 4e, 5f, 6c</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR60">1a, 2b, 3c, 4d, 5e, 6f</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR61">1c, 2b, 3d, 4a, 5e, 6f</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR62">1c, 2b, 3e, 4d, 5f, 6a</span> </li><br> </div>',
        ];
        marca15.sort(f_randomico);
        $('#marca15').append(marca15);
    }


    function Preg16(){
        var marca16 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR16">1c, 2a, 3b</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR63">1a, 2b, 3c</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR64">1b, 2c, 3a</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR65">1d, 2b, 3c</span> </li><br> </div>',
        ];
        marca16.sort(f_randomico);
        $('#marca16').append(marca16);
    }


    function Preg17(){
        var marca17 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR17">2, 3, 4</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR66">1, 2, 3</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR67">1, 3, 4</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR68">1, 2, 4</span> </li><br> </div>',
        ];
        marca17.sort(f_randomico);
        $('#marca17').append(marca17);
    }


  //////////////////////////////////////////////////////////////////////////////////////

  var notaFinalP = 0;
  var notaFinalM = 0;
  function Resp(){
      for(var i=1; i<69; i++){
            if( i<18 ){
                if($('#oMRR'+(i) +'.pinta').text()){
                  notaFinalP++;
                  $('#oMRR'+i).css("background-color", "#5ED188");
                }
            }else{
                if($('#oMRR'+(i) +'.pinta').text()){
                  $('#oMRR'+i).css("background-color", "#EF87A7");
                  notaFinalM++;
                }
            }
        }
  }



///////////////////////////////////////////////////////////////////
      var c=0;
      function nextPrev(n) {
          pos1 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
          c = parseInt($('#tabs').text()) + 1;
          $('#tabs').text(c);
          $('#n_cont').text(c+1);
          //alert("step: "+pos[c-1]);
          if(c>=2 && c<17){
            document.getElementById("step"+pos1[c-2]).style.display = "none";
            document.getElementById("step"+pos1[c-1]).style.display = "block";
          }else{
            if(c<2){
              document.getElementById("step1").style.display = "none";
              document.getElementById("step"+pos1[c-1]).style.display = "block";
            }else{
              document.getElementById("step"+pos1[c-2]).style.display = "none";
              document.getElementById("step18").style.display = "block";
              confirmar();
            }
          }
      }


      function confirmar() {
            Resp();
            var nota = (notaFinalP);
            var notaFinal = ((nota*10)/17).toFixed(2);
            $("#nAC").text(notaFinalP);
            $("#nER").text(notaFinalM);
                      $("#txtNota").text(notaFinal);
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
        Preg16();
        Preg17();

/////////////////////////////////////////////
        for(var i=1; i<69; i++){

            $('#oMRR'+(i)).click(function(){
              setTimeout(function(){ nextPrev(1); }, 500);
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });

        }
////////////////////////////////////////////////

      $("#Calificar").click(function() {
        confirmar();
      });    

});





