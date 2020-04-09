var titulos = "reflexiono";
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
$(".drag1").css('cursor', 'move');
$(".drag1").draggable({ //elementos a arrastrar
    revert: "invalid",
    zIndex: 5,
    containment: ".actividad17",
    scroll: false,
});
$(".div1").droppable({ //destinos
    classes: {
        "ui-droppable-active": "ui-state-active", //color azul al arrastrar el elemento
        "ui-droppable-hover": "ui-state-hover"
    },
    drop: function (e, ui) {
        for (i = 1; i < 5; i++) { //4 elementos
            var nn = 'c' + i; //obtenemos la clase
            if ($(ui.draggable).hasClass(nn)) { //comparamos la clase del arrastre
                if ($(this).hasClass(nn)) { //con la clase del destino q tienen el mismo nombre
                    resp.push('ok'); //guardamos ok si esta correcta
                } else {
                    resp.push('no');
                }
            }
        }
        $(ui.draggable).removeClass("drag1");//quitamos clase de background
        //console.log(resp); //respuestas
        ui.draggable.attr("style", "");
        $(this).append(ui.draggable);
    }
});
$(".btnCalificar").bind("click", function () { //click en el boton iniciar
    cont++;
    $(this).unbind("click");
    AgregaClase(".nota", claseAnimada);
    QuitaClase(".actividad", claseAnimada);
    temp = $(".div1");
    for (i = 0; i < resp.length; i++) {
        if (resp.length == 4 && resp[i] == 'ok') { //cantidad de elementos arrastrados
            cor++;
            f_ok(temp);
        } else {
            inc++;
            f_no(temp);
        }
    }
    Calculo_nota();
});