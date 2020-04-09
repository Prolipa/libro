// #region Random1
var random1 = [
    [
        '<table class="table" style="text-align: center" border="1" bordercolor="#3498DB"><td WIDTH="15%"><h5><b>básquetbol</b></h5></td><td  class="c_destino3 drop3" WIDTH="85%"></td></table>'
    ],
    [
        '<table class="table" style="text-align: center" border="1" bordercolor="#3498DB"><td WIDTH="15%"><h5><b>tenis</b></h5></td><td  class="c_destino2 drop2" WIDTH="85%"></td></table>'
    ],
    [
        '<table class="table" style="text-align: center" border="1" bordercolor="#3498DB"><td WIDTH="15%"> <h5><b>fútbol</b></h5></td><td  class="c_destino1 drop1" WIDTH="85%"></td></table>'
    ],
    [
        '<table class="table" style="text-align: center" border="1" bordercolor="#3498DB"><td WIDTH="15%"><h5><b>vóleibol</b></h5></td><td  class="c_destino4 drop4" WIDTH="85%"></td></table>'
    ]
];

var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
        '<span width="50px">' + random1[i][0] + "</span> "
    );
}
// #endregion

var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 4,
    cor = 0,
    inc = 0,
    str = "",
    calificacion = 10;
var claseAnimada = "animate bounceIn";
f_iniciar();

function f_iniciar() {
    sum_total1 = 0;
    sum_total2 = 0;
    sum_total3 = 0;
    sum_total4 = 0;
    $(".c_destino1").html("");
    $(".c_destino2").html("");
    $(".c_destino3").html("");
    $(".c_destino4").html("");
    $(".drag").draggable({
        rever: "invalid",
        helper: "clone"
    });
    $(".drop1").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            });
            $(this)
                .find(".drop1")
                .draggable({ disabled: true });
            str = ui.draggable.attr("id"); //capturamos los IDS
            if (str == "b1") {
                sum_total1 += 1;
            }
        }
    });
    $(".drop2").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            });
            $(this)
                .find(".drop2")
                .draggable({ disabled: true });
            str = ui.draggable.attr("id"); //capturamos los IDS
            if (str == "b1") {
                sum_total2 += 1;
            }
        }
    });
    $(".drop3").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            });
            $(this)
                .find(".drop3")
                .draggable({ disabled: true });
            str = ui.draggable.attr("id"); //capturamos los IDS
            if (str == "b1") {
                sum_total3 += 1;
            }
        }
    });
    $(".drop4").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            });
            $(this)
                .find(".drop4")
                .draggable({ disabled: true });
            str = ui.draggable.attr("id"); //capturamos los IDS
            if (str == "b1") {
                sum_total4 += 1;
            }
        }
    });
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var temp1 = $(".c_destino1");
        var temp2 = $(".c_destino2");
        var temp3 = $(".c_destino3");
        var temp4 = $(".c_destino4");
        if (sum_total1 == "5") {
            cor++;
            f_ok(temp1);
        } else {
            inc++;
            f_no(temp1);
        }
        if (sum_total2 == "2") {
            cor++;
            f_ok(temp2);
        } else {
            inc++;
            f_no(temp2);
        }
        if (sum_total3 == "3") {
            cor++;
            f_ok(temp3);
        } else {
            inc++;
            f_no(temp3);
        }
        if (sum_total4 == "4") {
            cor++;
            f_ok(temp4);
        } else {
            inc++;
            f_no(temp4);
        }

        Calculo_nota();
    }
}