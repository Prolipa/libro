 var numero = [];
var titulos = "refuerzo";
 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var conte = [];
     var numero = Math.round(Math.random() * (4 - 1) + 1);
     conte[0] = '<img src="img/i1_p33_act27.jpg">' +
                '<br>' +
                '<div class="r1">'+
                '<input type="number" class="base" id="base1">'+
                '<sup><input type="number" class="exp" id="exp1"></sup>'+
                '</div>';
     conte[1] = '<img src="img/i2_p33_act27.jpg">' +
                '<br>' +
                '<div class="r1">'+
                '<input type="number" class="base" id="base2">'+
                '<sup><input type="number" class="exp" id="exp2"></sup>'+
                '</div>';
    conte[2] =  '<img src="img/i3_p33_act27.jpg">' +
                '<br>' +
                '<div class="r2">'+
                '<input type="number" class="base" id="base3">'+
                '<sup><input type="number" class="exp" id="exp3"></sup>'+
                '</div>';
    conte[3] =  '<img src="img/i2_p12_act5.jpg">' +
                '<br>' +
                '<div class="r2">'+
                '<input type="number" class="base" id="base4">'+
                '<sup><input type="number" class="exp" id="exp4"></sup>'+
                '</div>'; 
    console.log(numero)               
    if(numero ==1){ 
        $("#dib1").append(conte[0]);
        $("#dib2").append(conte[1]);
        $("#dib3").append(conte[2]);
        $("#dib4").append(conte[3]);
    }
    if(numero == 2){ 
        $("#dib2").append(conte[0]);
        $("#dib3").append(conte[1]);
        $("#dib4").append(conte[2]);
        $("#dib1").append(conte[3]);
    }
    if(numero == 3){ 
        $("#dib3").append(conte[0]);
        $("#dib4").append(conte[1]);
        $("#dib1").append(conte[2]);
        $("#dib2").append(conte[3]);
    }
    if(numero == 4){ 
        $("#dib4").append(conte[0]);
        $("#dib3").append(conte[1]);
        $("#dib2").append(conte[2]);
        $("#dib1").append(conte[3]);
    }


 };

 function Cargar() {
     $("#dib1").html('');
     $("#dib2").html('');
     $("#dib3").html('');
     $("#dib4").html('');
     $("#encabezado").html('');
     Inicio();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var exponente = ["","2","2","3","3"]
         var base = ["","7","5","5","3"];
         
         debugger;
         console.log(exponente);
         console.log(base);
         var nota = 0;
         for (var i = 1; i <= 4; i++) {
             if ($("#exp"+i).val() == exponente[i]) {
                 nota = nota + 1;
                 $('#exp'+i).css("border", "4px solid green");
             } else {
                 $('#exp'+i).css("border", "4px solid red");
             }
             if ($("#base" + i).val() == base[i]) {
                 nota = nota + 1;
                 $('#base' + i).css("border", "4px solid green");
             } else {
                 $('#base' + i).css("border", "4px solid red");
             }

         }






         debugger;
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 8;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });