var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1
var sum_total1 = 0;
var sum_total2 = 0;
var sum_total3 = 0;
var sum_total4 = 0;

var sum_total5 = 0;
var sum_total6 = 0;
var sum_total7 = 0;
var sum_total8 = 0;

$(".c_destino").html("");

$(".drag1").draggable({
    rever: "invalid",
    helper: "clone"
});

$(".drag10").draggable({
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

$(".drop5").droppable({
    accept: ".drag10",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop5")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b5") {
            sum_total5 += 10;
        } else if (str == "b6") {
            sum_total5 += 20;
        } else if (str == "b7") {
            sum_total5 += 1;
        } else if (str == "b8") {
            sum_total5 += 2;
        }


    }
});

$(".drop6").droppable({
    accept: ".drag10",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop6")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b5") {
            sum_total6 += 10;
        } else if (str == "b6") {
            sum_total6 += 20;
        } else if (str == "b7") {
            sum_total6 += 1;
        } else if (str == "b8") {
            sum_total6 += 2;
        }

    }
});

$(".drop7").droppable({
    accept: ".drag10",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop7")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b5") {
            sum_total7 += 10;
        } else if (str == "b6") {
            sum_total7 += 20;
        } else if (str == "b7") {
            sum_total7 += 1;
        } else if (str == "b8") {
            sum_total7 += 2;
        }


    }
});
$(".drop8").droppable({
    accept: ".drag10",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop8")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b5") {
            sum_total8 += 10;
        } else if (str == "b6") {
            sum_total8 += 20;
        } else if (str == "b7") {
            sum_total8 += 1;
        } else if (str == "b8") {
            sum_total8 += 2;
        }


    }
});
function pregunta1() {
    p1vec1 = ['11', '12', '21', '22'];
    p1vec2 = ['11', '12', '21', '22'];
    var cor1 = 0;
    var cor2 = 0;
    var cor3 = 0;
    var cor4 = 0;


 var cor5 = 0;
    var cor6 = 0;
    var cor7 = 0;
    var cor8 = 0;

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

    for (var i = 0; i < p1vec2.length; i++) {
        if (sum_total5 == p1vec2[i]) {
            cor5 = cor5 + 1;
            p1vec2[i] = 'aa';
        } else {
            cor5;
        }
    }
    if (cor5 == 1) {
        f_ok(".res5");
    } else {
        f_no(".res5");
    }

    for (var i = 0; i < p1vec2.length; i++) {
        if (sum_total6 == p1vec2[i]) {
            cor6 = cor6 + 1;
            p1vec2[i] = 'aa';
        } else {
            cor6;
        }
    }
    if (cor6 == 1) {
        f_ok(".res6");
    } else {
        f_no(".res6");
    }

    for (var i = 0; i < p1vec2.length; i++) {
        if (sum_total7 == p1vec2[i]) {
            cor7 = cor7 + 1;
            p1vec2[i] = 'aa';
        } else {
            cor7;
        }
    }
    if (cor7 == 1) {
        f_ok(".res7");
    } else {
        f_no(".res7");
    }

    for (var i = 0; i < p1vec2.length; i++) {
        if (sum_total8 == p1vec2[i]) {
            cor8 = cor8 + 1;
            p1vec2[i] = 'aa';
        } else {
            cor8;
        }
    }
    if (cor8 == 1) {
        f_ok(".res8");
    } else {
        f_no(".res8");
    }




    var result1 = ((cor1 + cor2 + cor3 + cor4+cor5 + cor6 + cor7 + cor8) * 5) / 8;
    tpre1 = parseFloat(result1);
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






    var result1 = ((cor1 + cor2 + cor3 + cor4) * 5) / 4;
    tpre2 = parseFloat(result1);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion



// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}