var ejer = 5,
    itemsT = (12 * ejer),
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var n1 = 0,
    nums = [];
f_iniciar();

function f_iniciar() {
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    $("#trace").hide(); //resultados
    $("#n_cont").html(cont + 1); //contador de ejercicios
    $("#n_ejer").html(ejer); //total de ejercicios
    $(".nn1").each(function(index) {
        $(this).val('');
        QuitaClase(this, "correcto incorrecto");
    });
    nums = [];
    $(".nn").each(function(index) {
        n1 = (Math.floor(Math.random() * 90) + 10);
        $(this).html(n1);
        nums.push(String(n1)[0], String(n1)[1], String(n1)[0] * 10, String(n1)[1]);
    });
    $(".nn1")[0].focus();
    console.log(nums);
    $(".btnCalificar").bind("click", function() { //click en el boton calificar
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        $(this).unbind("click");
        $(".nn1").each(function(index) {
            var temp = $(this);
            if (temp.val().toLowerCase() == nums[index]) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            }
        });
        Calculo_nota();
        cont++;
    });
}