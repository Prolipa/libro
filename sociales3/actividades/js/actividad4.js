var titulos = 'reflexiono';
$("#n_pagina").html('13');

    var tpre1 = 0;
    var tpre2 = 0;



    var cor = 0;
    cont = 1,
        ejer = 1,
        itemsT = 10,
        inc = 0,
        calificacion = 10;

            document.getElementById("pre1a").addEventListener("keypress", () => {
        validNumero(0, 1, 1);
    });
    document.getElementById("pre1a").addEventListener("keyup", () => {
        validMaxIngreso(document.getElementById("pre1a"), 5);
    });

    function soloNumeros(e) {
        var key = window.Event ? e.which : e.keyCode
        return ((key >= 48 && key <= 57) || (key == 8))
    }

    // #region Pregunta1
    //////
     for (var i = 0; i < 4; i++) {
        $('#p2var' + (i)).click(function() {
            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')
            } else {
                $(this).addClass('pinta')
            }
        });
    }    //////
    function pregunta1() {
       var pre1a = document.getElementById("pre1a").value;
        tpre1 = pre1a;
        $("#pre1a").val(parseFloat(tpre1).toFixed(2));
    }
    // #endregion

   // #region Pregunta2
   
            document.getElementById("pre2a").addEventListener("keypress", () => {
        validNumero(0, 1, 1);
    });
    document.getElementById("pre2a").addEventListener("keyup", () => {
        validMaxIngreso(document.getElementById("pre2a"), 5);
    });
    function pregunta2() {
            var pre2a = document.getElementById("pre2a").value;
        tpre2 = pre2a;
        $("#pre2a").val(parseFloat(tpre2).toFixed(2));
    }


    // #region Calculo Nota Final
    function NotaFinal() {
               var pre1a = document.getElementById("pre1a").value;
        if (pre1a == "") {
            alert("Pregunta 1: Califique la pregunta");
        } else {
                          var pre2a = document.getElementById("pre2a").value;
        if (pre2a == "") {
            alert("Pregunta 2: Califique la pregunta");
        } else {
            pregunta1();
            pregunta2();
            cor = parseFloat(tpre1)+parseFloat(tpre2);
            Calculo_nota();
            $("input").attr('disabled', 'disabled');
        }
    }
}
    // #endregion1



