var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 3)
});
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 3)
});
for (var i = 0; i < 9; i++) {
    $('.sub' + (i + 1)).click(function() {
        if ($(this).hasClass('subrayar')) {
            $(this).removeClass('subrayar')
        } else {
            $(this).addClass('subrayar')
        }
    })
}

function f_iniciar() {
    var p1vec1 = [
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub1">papaya</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub2">banana</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub3">azúcar</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub4">col</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub5">coco</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub6">almendras</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub7">piña</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub8">leche descremada</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub9">canela</div>' +
        '</div>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1res1').html(p1vec1);

    var p2vec1 = [
        '<tr>' +
        '<td style="border: 2px solid #953f90;">' +
        '<input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="2" onkeypress="return soloNumeros(event)" id="p2dcon1">' +
        '</td>' +
        '<td style="border: 2px solid #953f90; background: #fffded;">' +
        'Espolvorear canela para decorar.' +
        '</td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="border: 2px solid #953f90;">' +
        '<input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="2" onkeypress="return soloNumeros(event)" id="p2dcon2">' +
        '</td>' +
        '<td style="border: 2px solid #953f90; background: #fffded;">' +
        'Colocar los ingredientes en la licuadora, excepto la canela.' +
        '</td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="border: 2px solid #953f90;">' +
        '<input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="2" onkeypress="return soloNumeros(event)" id="p2dcon3">' +
        '</td>' +
        '<td style="border: 2px solid #953f90; background: #fffded;">' +
        'Servir en vasos altos con rodajas de banana.' +
        '</td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="border: 2px solid #953f90;">' +
        '<input type="text" style="border: none; border-bottom: 2px dotted black; width: 40px; text-align: center;" maxlength="2" onkeypress="return soloNumeros(event)" id="p2dcon4">' +
        '</td>' +
        '<td style="border: 2px solid #953f90; background: #fffded;">' +
        'Mezclar a velocidad alta, hasta que todo quede disuelto.' +
        '</td>' +
        '</tr>' 
    ];
    p2vec1.sort(f_randomico);
    $('#p2im1').html(p2vec1);
    bt_comprobar.addEventListener("click", preg3);

    function preg3() {
        cor = 0;
        var nota1_3 = $('#nota1_3').val();
        if (!nota1_3) {
            alert('Ingrese la calificación en la pregunta 3.')
        } else {
            cor = cor + parseFloat(nota1_3);
            inc = inc + (3 - parseFloat(nota1_3));
            $('#nota1_3').val(parseFloat(nota1_3).toFixed(2));
            $('#nota1_3').attr('disabled', 'true');
            preg4();
        }

    }

    function preg4() {
        var nota1_4 = $('#nota1_4').val();
        if (!nota1_4) {
            alert('Ingrese la calificación en la pregunta 4.')
        } else {
            cor = cor + parseFloat(nota1_4);
            inc = inc + (3 - parseFloat(nota1_4));
            $('#nota1_4').val(parseFloat(nota1_4).toFixed(2));
            $('#nota1_4').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg3);
        var p1cont1 = 0,
            p1cont2 = 0,
            p1cont3 = 0;
        if ($('#p1res1 .subrayar').length == 0) {
            p1cont1;
            f_no($('.1'));
        } else {
            for (var i = 0; i < 9; i++) {
                if ($('.sub' + (i + 1)).hasClass('subrayar')) {
                    var p1res1 = $('.sub' + (i + 1)).html();
                    if (p1res1 == 'banana' || p1res1 == 'coco' || p1res1 == 'almendras' || p1res1 == 'leche descremada' || p1res1 == 'canela') {
                        p1cont2++;
                        f_ok($('.sub' + (i + 1)));
                    } else {
                        p1cont3++;
                        f_no($('.sub' + (i + 1)));
                    }
                }

            }
        }
        if (p1cont2<=p1cont3) {
            p1cont1=0;
        }else{
            p1cont1=p1cont2-p1cont3;
        }
        var result1 = (p1cont1 * 2) / 5;
        cor = cor + result1;
        inc = inc + (2 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p2dcon1=$('#p2dcon1').val();
        var p2dcon2=$('#p2dcon2').val();
        var p2dcon3=$('#p2dcon3').val();
        var p2dcon4=$('#p2dcon4').val();
        var p2cont1=0;
        if (p2dcon1=='4') {
            p2cont1++;
            f_ok($('#p2dcon1'));
        }else{
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2=='1') {
            p2cont1++;
            f_ok($('#p2dcon2'));
        }else{
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3=='3') {
            p2cont1++;
            f_ok($('#p2dcon3'));
        }else{
            p2cont1;
            f_no($('#p2dcon3'));
        }
        if (p2dcon4=='2') {
            p2cont1++;
            f_ok($('#p2dcon4'));
        }else{
            p2cont1;
            f_no($('#p2dcon4'));
        }
        var result2 = (p2cont1 * 2) / 4;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        Calculo_nota();
    }
}