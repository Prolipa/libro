var i = 0,
    j = 0,
    ejer = 3,
    itemsT = (4 * ejer),
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var contenido = [
    ['i1_p39_act42.jpg', 'i4_p39_act42.jpg', 'pelota', 'esfera', 'caras redondas', 'rueda'],
    ['i2_p39_act42.jpg', 'i5_p39_act42.jpg', 'cilindro de gas', 'cilindro', 'caras planas y redondas', 'se desliza y rueda'],
    ['i3_p39_act42.jpg', 'i6_p39_act42.jpg', 'helado', 'cono', 'cara plana y redonda', 'se desliza y rueda'],
];
var opciones = ['caras redondas', 'rueda', 'caras planas y redondas', 'se desliza y rueda', 'cara plana y redonda'];
var rc1 = "",
    rc2 = "";
contenido.sort(f_randomico);
f_iniciar();

function f_iniciar() {
    console.log(contenido[cont], opciones);
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    $(".cmb1").html('');
    $(".t1")[0].focus()
    $(".t1").each(function(index) {
        $(this).val('');
        //$(this).val(contenido[cont][index+2]); //respuestas en inputs
        QuitaClase($(this), 'correcto incorrecto');
    });
    $(".im1").each(function(index) { //cargamos las imagenes
        var inss = ("<img src='img/" + contenido[cont][index] + "' class='img-responsive im_activ'>");
        $(this).html('').append(inss);
    });
    for (j = 0; j < 2; j++) { //cargamos cantidad de selects
        opciones.sort(f_randomico); //randomico de las opciones
        $(".cmb1").each(function(index) { //cargamos contenido en cada select creado
            var combo_cont = '<select class="form-control combo' + j + '"> <option selected="selected">Seleccione una característica</option>'; //primera opcion del select siemrpe seleccionada
            for (i = 0; i < opciones.length; i++) { //cantidad de opciones dentro del select
                combo_cont += '<option value="' + opciones[i] + '" class="opc_combo">' + opciones[i] + '</option>'
            }
            combo_cont += '</select> <br>'; // cerramos el seelct
            $(this).append(combo_cont);
        });
    }
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        $(this).unbind("click");
        $(".t1").each(function(index) {
            //$(this).val(contenido[cont][index+2]);
            tmp = $(this);
            if (tmp.val() == contenido[cont][index + 2]) {
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        });
        var tc_0 = $(".combo0 option:selected"); //contenido seleccionado del combo 1
        var tc_1 = $(".combo1 option:selected"); //contenido seleccionado del combo 2
        // console.log(tc_0.val(),contenido[cont][4]);
        //console.log(tc_1.val());
        if ((tc_0.val() == contenido[cont][4] || tc_0.val() == contenido[cont][5]) && tc_0.val() != tc_1.val()) {
            cor++
            f_ok(".combo0");
        } else {
            inc++
            f_no(".combo0");
        }

        if ((tc_1.val() == contenido[cont][4] || tc_1.val() == contenido[cont][5]) && tc_1.val() != tc_0.val()) {
            cor++
            f_ok(".combo1");
        } else {
            inc++
            f_no(".combo1");
        }
        cont++;
        Calculo_nota();
    });
}