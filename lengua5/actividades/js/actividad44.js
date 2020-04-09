$('.enc').click(function() {

    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('encierra')
    } else if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')
        $(this).addClass('subrayar')
    } else {
        $(this).removeClass('subrayar')
        $(this).addClass('vacio')
    }

    /*if ($(this).hasClass('encierra')) {
    	$(this).addClass('subrayar')
    }else {
    	$(this).addClass('encierra')
    }*/

});
var respr1 = 0,
    respr2 = 0;

function letras() {
    for (var i = 0; i <= 29; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        if (($('#' + [i] + '').hasClass("subrayar") == true) || ($('#' + [i] + '').hasClass("encierra")== true)) {

            if ((caja == "llegas") || (caja == "quiero") || (caja == "ver") || (caja == "dormir") || (caja == "Tienes") || (caja == "leer") || (caja == "hago") || (caja == "teníamos") || (caja == "estudiar")) {
                respr1 = respr1 + 1;

                $('#' + [i] + '').addClass('correcto')
            } else {
                respr2 = respr2 + 1;

                $('#' + [i] + '').removeClass('correcto')
                $('#' + [i] + '').addClass('incorrecto')
            }

        } else {



        }



    }
     var buenas = (1*10)/9;
    var resbuenas = buenas*respr1;
    var malas = (1*10)/20;
    var resmalas = malas * respr2;
    var total = resbuenas - resmalas;
    $('#txtNota').html(total.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;

    

}