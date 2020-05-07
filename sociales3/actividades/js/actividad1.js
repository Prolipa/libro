var titulos = 'exploro';
$("#n_pagina").html('10');

 var tpre1 = 0;
    var tpre2 = 0;

    document.getElementById("pre1a").addEventListener("keypress", () => {
        validNumero(0, 1, 1);
    });
    document.getElementById("pre1a").addEventListener("keyup", () => {
        validMaxIngreso(document.getElementById("pre1a"), 10);
    });

    var cor = 0;
    cont = 1,
        ejer = 1,
        itemsT = 10,
        inc = 0,
        calificacion = 10;

    function soloNumeros(e) {
        var key = window.Event ? e.which : e.keyCode
        return ((key >= 48 && key <= 57) || (key == 8))
    }

    // #region Pregunta1
    function pregunta1() {
        var pre1a = document.getElementById("pre1a").value;
        tpre1 = pre1a;
        $("#pre1a").val(parseFloat(tpre1).toFixed(2));
    }
    // #endregion


    // #region Calculo Nota Final
    function NotaFinal() {
        var pre1a = document.getElementById("pre1a").value;
        if (pre1a == "") {
            alert("Pregunta 1: Califique la pregunta");
        } else {
            pregunta1();
            cor = parseFloat(tpre1);
            Calculo_nota();
            $("input").attr('disabled', 'disabled');
        }
    }
    
    // #endregion1



