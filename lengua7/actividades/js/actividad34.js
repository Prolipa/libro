var resp1 = 0,
    resp2 = 0,
    resp3 = 0,
    resp4 = 0,
    resp5 = 0,
    resp6 = 0,
    resp7 = 0,
    resp8 = 0,
    resp9 = 0,
    resp10 = 0,
    resp11 = 0,
    resp12 = 0,
    resp13 = 0,
    resp14 = 0,
    resp15 = 0,
    resp16 = 0,
    resp17 = 0,
    resp18 = 0,
    resp19 = 0,
    resp20 = 0;

function SignoComas() {


    if ($("#1").val() == ",") {
        resp1 = 1;
        document.getElementById("1").style.backgroundColor = "#6DFF6F";

    } else {
        resp1 = 0;

    }
    if ($("#3").val() == ",") {
        resp2 = 1;
        document.getElementById("3").style.backgroundColor = "#6DFF6F";

    } else {
        resp2 = 0;

    }
    if ($("#5").val() == ",") {
        resp3 = 1;
        document.getElementById("5").style.backgroundColor = "#6DFF6F";

    } else {
        resp3 = 0;

    }
    if ($("#7").val() == ",") {
        resp4 = 1;
        document.getElementById("7").style.backgroundColor = "#6DFF6F";

    } else {
        resp4 = 0;

    }
    if ($("#10").val() == ",") {
        resp5 = 1;
        document.getElementById("10").style.backgroundColor = "#6DFF6F";

    } else {
        resp5 = 0;

    }
    if ($("#12").val() == ",") {
        resp6 = 1;
        document.getElementById("12").style.backgroundColor = "#6DFF6F";

    } else {
        resp6 = 0;

    }
    if ($("#16").val() == ",") {
        resp7 = 1;
        document.getElementById("16").style.backgroundColor = "#6DFF6F";

    } else {
        resp7 = 0;

    }
    if ($("#17").val() == ",") {
        resp8 = 1;
        document.getElementById("17").style.backgroundColor = "#6DFF6F";

    } else {
        resp8 = 0;

    }
    if ($("#19").val() == ",") {
        resp9 = 1;
        document.getElementById("19").style.backgroundColor = "#6DFF6F";

    } else {
        resp9 = 0;

    }
    if ($("#14").val() == ",") {
        resp10 = 1;
        document.getElementById("14").style.backgroundColor = "#6DFF6F";

    } else {
        resp10 = 0;

    }
    //////////////////////////////////////////////////respuestas malas////////////////////////
    if ($("#2").val() == ",") {
        resp11 = 1;
        document.getElementById("2").style.backgroundColor = "#F95858";

    } else {
        resp11 = 0;

    }
    if ($("#4").val() == ",") {
        resp12 = 1;
        document.getElementById("4").style.backgroundColor = "#F95858";

    } else {
        resp12 = 0;

    }
    if ($("#6").val() == ",") {
        resp13 = 1;
        document.getElementById("6").style.backgroundColor = "#F95858";

    } else {
        resp13 = 0;

    }
    if ($("#8").val() == ",") {
        resp14 = 1;
        document.getElementById("8").style.backgroundColor = "#F95858";

    } else {
        resp14 = 0;

    }
    if ($("#9").val() == ",") {
        resp15 = 1;
        document.getElementById("9").style.backgroundColor = "#F95858";

    } else {
        resp15 = 0;

    }
    if ($("#11").val() == ",") {
        resp16 = 1;
        document.getElementById("11").style.backgroundColor = "#F95858";

    } else {
        resp16 = 0;

    }
    if ($("#13").val() == ",") {
        resp17 = 1;
        document.getElementById("13").style.backgroundColor = "#F95858";

    } else {
        resp17 = 0;

    }
    if ($("#15").val() == ",") {
        resp18 = 1;
        document.getElementById("15").style.backgroundColor = "#F95858";

    } else {
        resp18 = 0;

    }
    if ($("#18").val() == ",") {
        resp19 = 1;
        document.getElementById("18").style.backgroundColor = "#F95858";

    } else {
        resp19 = 0;

    }
    if ($("#20").val() == ",") {
        resp20 = 1;
        document.getElementById("20").style.backgroundColor = "#F95858";

    } else {
        resp20 = 0;

    }
    var total = parseInt(resp1) + parseInt(resp2) + parseInt(resp3) + parseInt(resp4) + parseInt(resp5) + parseInt(resp6) + parseInt(resp7) + parseInt(resp8) + parseInt(resp9) + parseInt(resp10);
    var total2 = parseInt(resp11) + parseInt(resp12) + parseInt(resp13) + parseInt(resp14) + parseInt(resp15) + parseInt(resp16) + parseInt(resp17) + parseInt(resp18) + parseInt(resp19) + parseInt(resp20);
    var totales = total - total2;
    $("input").prop('disabled', true);
    document.getElementById('bt_comprobar').disabled = true;
     $('#txtNota').html(totales.toFixed(2) + ' ');






}