var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1


document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 5);
});

function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

var sum_total10 = 0;
var sum_total20 = 0;
var sum_total30 = 0;
var sum_total40 = 0;

$(".c_destino").html("");

$(".drag100").draggable({
    rever: "invalid",
    helper: "clone"
});
$(".drop10").droppable({
    accept: ".drag100",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop10")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b10") {
            sum_total10 += 10;
        } else if (str == "b20") {
            sum_total10 += 20;
        } else if (str == "b30") {
            sum_total10 += 1;
        } else if (str == "b40") {
            sum_total10 += 2;
        }


    }
});

$(".drop20").droppable({
    accept: ".drag100",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop20")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b10") {
            sum_total20 += 10;
        } else if (str == "b20") {
            sum_total20 += 20;
        } else if (str == "b30") {
            sum_total20 += 1;
        } else if (str == "b40") {
            sum_total20 += 2;
        }


    }
});

$(".drop30").droppable({
    accept: ".drag100",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop30")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b10") {
            sum_total30 += 10;
        } else if (str == "b20") {
            sum_total30 += 20;
        } else if (str == "b30") {
            sum_total30 += 1;
        } else if (str == "b40") {
            sum_total30 += 2;
        }


    }
});

$(".drop40").droppable({
    accept: ".drag100",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop40")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b10") {
            sum_total40 += 10;
        } else if (str == "b20") {
            sum_total40 += 20;
        } else if (str == "b30") {
            sum_total40 += 1;
        } else if (str == "b40") {
            sum_total40 += 2;
        }


    }
});
function pregunta2() {
    var cor = 0;
    var p1vec1 = ['mora,mandarina', 'mora,coco', 'chocolate,mandarina', 'coco,chocolate'];
    var p1res1 = [];
    for (var i = 0; i < 4; i++) {
        p1res1.push($('#p1dcon' + (i + 1)).val() + ',' + $('#p1dco' + (i + 1)).val());
    }
    for (var i = 0; i < 4; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 4; j++) {
            if (p1res1[i] == p1vec1[j]) {
                p1cont1++;
                p1vec1[j] == 'a';
            } else {
                p1cont1;
            }
        }
        if (p1cont1 == '1') {
            cor++;
            f_ok($('#p1dcon' + (i + 1)));
            f_ok($('#p1dco' + (i + 1)));
        } else {
            f_no($('#p1dcon' + (i + 1)));
            f_no($('#p1dco' + (i + 1)));
        }
    }

        p1vec1 = ['11', '12', '21', '22'];
    var cor1 = 0;
    var cor2 = 0;
    var cor3 = 0;
    var cor4 = 0;

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total10 == p1vec1[i]) {
            cor1 = cor1 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor1;
        }
    }
    if (cor1 == 1) {
        f_ok(".res10");
    } else {
        f_no(".res10");
    }

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total20 == p1vec1[i]) {
            cor2 = cor2 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor2;
        }
    }
    if (cor2 == 1) {
        f_ok(".res20");
    } else {
        f_no(".res20");
    }

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total30 == p1vec1[i]) {
            cor3 = cor3 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor3;
        }
    }
    if (cor3 == 1) {
        f_ok(".res30");
    } else {
        f_no(".res30");
    }

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total40 == p1vec1[i]) {
            cor4 = cor4 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor4;
        }
    }
    if (cor4 == 1) {
        f_ok(".res40");
    } else {
        f_no(".res40");
    }


    var result1 = ((cor1 + cor2 + cor3 + cor4) * 2.5) / 4;

    var res = ((cor * 2.5) / 4)+(result1);
    tpre2 = parseFloat(res);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion



// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        var Nf = parseFloat(tpre1) + parseFloat(tpre2);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
    }
}