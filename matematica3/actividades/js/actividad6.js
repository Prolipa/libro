var i, j, nums = [],
    r_images = [],
    t_images = [],
    v_ids = [],
    r_ids = [],
    cont = 0,
    ejer = 5,
    cor = 0,
    inc = 0,
    itemsT = 3 * ejer;
calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_cargar();

function f_cargar() {
    for (i = 1; i < 10; i++) {
        t_images.push("<img src='img/i" + i + "_p17_act6.png' class='c_imagenes' id='r" + i + "'>");
    }
    f_iniciar();
}

function f_iniciar() {
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    $("#img_total").html('').append(t_images);
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    $("#imgs").html(''); //vaciamos el contendor de las imagenes
    $("#caja_res").html(''); //vaciamos el contendor de las imagenes
    removerClase($("#caja_res"));
    var cc = 0,
        v_ids = [],
        r_ids = [],
        r_images = [];
    t_images.sort(f_randomico);
    for (i = 0; i < 3; i++) {
        r_images.push(t_images[i]); //agregamos 3 imagenes aleatorias
    }
    for (i = 0; i < 3; i++) {
        $("#imgs").append(r_images); //agregamos 3 grupos
    }
    $("#imgs img").each(function() { // run this for each image
        v_ids.push($(this).attr("id")); // push each image's id to the array
    });
    //console.log(v_ids);
    $("#img_total img").draggable({ //arrastramos
        revert: "invalid",
        zIndex: 5,
        containment: "#actividad1",
        scroll: false,
    });
    $("#caja_res").droppable({
        drop: function(e, ui) {
            r_ids.push(ui.draggable.attr("id"));
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            $(this).find(".c_imagenes").draggable({ disabled: true });
        }
    });

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var temp = $("#caja_res");
        //console.log(r_ids);
        for (i = 0; i < 3; i++) {
            if (v_ids[i] == r_ids[i]) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            }
        }
        Calculo_nota();
    }
}