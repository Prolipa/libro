 $("#txtNota").html("0"); //impresion de nota
 var ejer = 5,
     itemsT = (6 * ejer),
     cont = 0,
     tmp, cor = 0,
     inc = 0,
     calificacion = 10,
     claseAnimada = 'animate bounceIn';
 var n1 = 0,
     n2 = 0,
     n3 = 0,
     n4 = 0,
     resp = [],
     nums = [];
 f_cargar();

 function f_cargar() {
     t_nums = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidos', 'veintitres', 'veinticuatro', 'veinticinco', 'veintiseis', 'veintisiete', 'veintiocho', 'veintinueve', 'treinta', 'treinta y uno', 'treinta y dos', 'treinta y tres', 'treinta y cuatro', 'treinta y cinco', 'treinta y seis', 'treinta y siete', 'treinta y ocho', 'treinta y nueve', 'cuarenta', 'cuarenta y uno', 'cuarenta y dos', 'cuarenta y tres', 'cuarenta y cuatro', 'cuarenta y cinco', 'cuarenta y seis', 'cuarenta y siete', 'cuarenta y ocho', 'cuarenta y nueve', 'cincuenta', 'cincuenta y uno', 'cincuenta y dos', 'cincuenta y tres', 'cincuenta y cuatro', 'cincuenta y cinco', 'cincuenta y seis', 'cincuenta y siete', 'cincuenta y ocho', 'cincuenta y nueve', 'sesenta', 'sesenta y uno', 'sesenta y dos', 'sesenta y tres', 'sesenta y cuatro', 'sesenta y cinco', 'sesenta y seis', 'sesenta y siete', 'sesenta y ocho', 'sesenta y nueve', 'setenta', 'setenta y uno', 'setenta y dos', 'setenta y tres', 'setenta y cuatro', 'setenta y cinco', 'setenta y seis', 'setenta y siete', 'setenta y ocho', 'setenta y nueve', 'ochenta', 'ochenta y uno', 'ochenta y dos', 'ochenta y tres', 'ochenta y cuatro', 'ochenta y cinco', 'ochenta y seis', 'ochenta y siete', 'ochenta y ocho', 'ochenta y nueve', 'noventa', 'noventa y uno', 'noventa y dos', 'noventa y tres', 'noventa y cuatro', 'noventa y cinco', 'noventa y seis', 'noventa y siete', 'noventa y ocho', 'noventa y nueve', 'cien'];

     for (i = 1; i < 101; i++) {
         nums.push(i);
     }
     f_iniciar();
 }

 function f_iniciar() {
     QuitaClase(".nota", claseAnimada);
     AgregaClase(".actividad", claseAnimada);
     $("#trace").hide(); //resultados
     $("#n_cont").html(cont + 1); //contador de ejercicios
     $("#n_ejer").html(ejer); //total de ejercicios
     nums.sort(f_randomico);
     $(".nms").each(function(index) {
         $(this).val('');
         $(this).removeAttr('disabled');
         QuitaClase($(this), 'correcto incorrecto');
     });
     resp = [];
     n1 = (Math.floor(Math.random() * 2) + 1);
     if (n1 == 1) {
         $(".nn").each(function(index) {
             resp.push(t_nums[nums[index]])
             $(this).val(nums[index]);
             $(this).attr('disabled', 'disabled');
         });
         $(".tt")[0].focus();
     } else {
         $(".tt").each(function(index) {
             resp.push(nums[index])
             $(this).val(t_nums[nums[index]]);
             $(this).attr('disabled', 'disabled');
         });
         $(".nn")[0].focus();
     }
     //console.log(n1,resp);                
     $(".btnCalificar").bind("click", function() { //click en el boton iniciar
         AgregaClase(".nota", claseAnimada);
         QuitaClase(".actividad", claseAnimada);
         $(this).unbind("click");
         if (n1 == 1) {
             $(".tt").each(function(index) {
                 var temp = $(this);
                 if (temp.val().toLowerCase() == resp[index]) {
                     cor++;
                     f_ok(temp);
                 } else {
                     inc++;
                     f_no(temp);
                 }
             });
         } else {
             $(".nn").each(function(index) {
                 var temp = $(this);
                 if (temp.val().toLowerCase() == resp[index]) {
                     cor++;
                     f_ok(temp);
                 } else {
                     inc++;
                     f_no(temp);
                 }
             });
         }
         Calculo_nota();
         cont++;
     });
 }