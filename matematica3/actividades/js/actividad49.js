var ejer = 1,
    itemsT = (16 * ejer),
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var r_images = [],
    t_images = [],
    v_ids = [],
    r_ids = [],
    r_cono = [],
    r_cilindro = [],
    r_circulo = [],
    r_prisma = [],
    r_cubo = [],
    n_cono = 2,
    n_cilindro = 4,
    n_circulo = 5,
    n_prisma = 2,
    n_cubo = 3;
f_cargar();

function f_cargar() {
    for (i = 1; i < 17; i++) {
        if (i < 3) {
            t_images.push("<img src='img/i" + i + "_p44_act49.png' class='c_cono' id='r" + i + "'>");
        } else if (i < 7) {
            t_images.push("<img src='img/i" + i + "_p44_act49.png' class='c_cilindro' id='r" + i + "'>");
        } else if (i < 12) {
            t_images.push("<img src='img/i" + i + "_p44_act49.png' class='c_circulo' id='r" + i + "'>");
        } else if (i < 15) {
            t_images.push("<img src='img/i" + i + "_p44_act49.png' class='c_cubo' id='r" + i + "'>");
        } else {
            t_images.push("<img src='img/i" + i + "_p44_act49.png' class='c_prisma' id='r" + i + "'>");
        }
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
    t_images.sort(f_randomico);
    $(".t_images").append(t_images);
    $(".t_images img").draggable({ //arrastramos
        revert: "invalid",
        zIndex: 5,
        containment: "#activity",
        scroll: false,
    });
    $(".r_images").droppable({
        drop: function(e, ui) {
            if (ui.draggable.hasClass("c_cono")) {
                r_cono.push("c_cono");
            } else if (ui.draggable.hasClass("c_cilindro")) {
                r_cilindro.push("c_cilindro");
            } else if (ui.draggable.hasClass("c_circulo")) {
                r_circulo.push("c_circulo");
            } else if (ui.draggable.hasClass("c_cubo")) {
                r_cubo.push("c_cubo");
            } else {
                r_prisma.push("c_prisma");
            }
            //r_ids.push(ui.draggable.attr("id").substr(1));//capturamos el id y quitamos la inicial r de los ids
            //r_ids.sort(function(a, b){return a - b}); //reordenamos el array
            ui.draggable.attr("style", ""); //vaciar estilos para ubicar la imagen sobre eñ destino
            $(this).append(ui.draggable); //añadir el contenido al destino
            $(this).find(ui.draggable).draggable({ disabled: true }); //deshabilitar el arrastre, despues de soltar en el destino
            console.log(r_cono, r_cilindro, r_circulo, r_cubo, r_prisma);
        }
    });

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var temp = $(".i_cono");
        $(".i_cono img").each(function() {
            if ($(this).hasClass("c_cono") && r_cono.length == n_cono) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            }
        });
        temp = $(".i_circulo");
        $(".i_circulo img").each(function() {
            if ($(this).hasClass("c_circulo") && r_circulo.length == n_circulo) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            }
        });
        temp = $(".i_cilindro");
        $(".i_cilindro img").each(function() {
            if ($(this).hasClass("c_cilindro") && r_cilindro.length == n_cilindro) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            }
        });
        temp = $(".i_cubo");
        $(".i_cubo img").each(function() {
            if ($(this).hasClass("c_cubo") && r_cubo.length == n_cubo) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            }
        });
        temp = $(".i_prisma");
        $(".i_prisma img").each(function() {
            if ($(this).hasClass("c_prisma") && r_prisma.length == n_prisma) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            }
        });
        Calculo_nota();
    }
}