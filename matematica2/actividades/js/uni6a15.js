var tpre1 = 0;
var tpre2 = 0;

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 5);
});

var sum_total1 = 0;
var sum_total2 = 0;
var sum_total3 = 0;
var sum_total4 = 0;

$(".c_destino").html("");

$(".drag1").draggable({
    rever: "invalid",
    helper: "clone"
});
$(".drop1").droppable({
    accept: ".drag1",
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
            sum_total1 += 10;
        } else if (str == "b2") {
            sum_total1 += 20;
        } else if (str == "b3") {
            sum_total1 += 1;
        } else if (str == "b4") {
            sum_total1 += 2;
        }


    }
});

$(".drop2").droppable({
    accept: ".drag1",
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
            sum_total2 += 10;
        } else if (str == "b2") {
            sum_total2 += 20;
        } else if (str == "b3") {
            sum_total2 += 1;
        } else if (str == "b4") {
            sum_total2 += 2;
        }


    }
});

$(".drop3").droppable({
    accept: ".drag1",
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
            sum_total3 += 10;
        } else if (str == "b2") {
            sum_total3 += 20;
        } else if (str == "b3") {
            sum_total3 += 1;
        } else if (str == "b4") {
            sum_total3 += 2;
        }


    }
});

$(".drop4").droppable({
    accept: ".drag1",
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
            sum_total4 += 10;
        } else if (str == "b2") {
            sum_total4 += 20;
        } else if (str == "b3") {
            sum_total4 += 1;
        } else if (str == "b4") {
            sum_total4 += 2;
        }


    }
});


function pregunta1() {
    p1vec1 = ['11', '12', '21', '22'];
    var cor1 = 0;
    var cor2 = 0;
    var cor3 = 0;
    var cor4 = 0;

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total1 == p1vec1[i]) {
            cor1 = cor1 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor1;
        }
    }
    if (cor1 == 1) {
        f_ok(".p3res1");
    } else {
        f_no(".p3res1");
    }

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total2 == p1vec1[i]) {
            cor2 = cor2 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor2;
        }
    }
    if (cor2 == 1) {
        f_ok(".p3res2");
    } else {
        f_no(".p3res2");
    }

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total3 == p1vec1[i]) {
            cor3 = cor3 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor3;
        }
    }
    if (cor3 == 1) {
        f_ok(".p3res3");
    } else {
        f_no(".p3res3");
    }

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total4 == p1vec1[i]) {
            cor4 = cor4 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor4;
        }
    }
    if (cor4 == 1) {
        f_ok(".p3res4");
    } else {
        f_no(".p3res4");
    }






    var result1 = ((cor1 + cor2 + cor3 + cor4) * 5) / 4;
    tpre1 = parseFloat(result1);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


function pregunta2() {
    var pre2a = document.getElementById("pre2a").value;
    tpre2 = pre2a;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));

}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
        alert("Pregunta 2: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        var Nf =
            parseFloat(tpre1) +
            parseFloat(tpre2);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr('disabled', 'disabled');
    }
}