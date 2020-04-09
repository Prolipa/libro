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
document.getElementById('nota1_11').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_11').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_11'), 4)
});

function f_iniciar() {
    var p5vec1 = [
        '<tr>' +
        '<td style="background: #d4ecf4;">Guido toca y canta.</td>' +
        '<td style="padding: 10px;"><input type="checkbox" class="p5sel1" name="check" onclick="onlyOne(this)" style="zoom: 2;" value="si"></td>' +
        '<td style="padding: 10px;"><input type="checkbox" class="p51sel1" name="check" onclick="onlyOne(this)" style="zoom: 2;" value="no"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="background: #d4ecf4;">Olguita toca la guitarra.</td>' +
        '<td style="padding: 10px;"><input type="checkbox" class="p5sel2" name="check1" onclick="onlyOne1(this)" style="zoom: 2;" value="si"></td>' +
        '<td style="padding: 10px;"><input type="checkbox" class="p51sel2" name="check1" onclick="onlyOne1(this)" style="zoom: 2;" value="no"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="background: #d4ecf4;">La Luna les guiña el ojo.</td>' +
        '<td style="padding: 10px;"><input type="checkbox" class="p5sel3" name="check2" onclick="onlyOne2(this)" style="zoom: 2;" value="si"></td>' +
        '<td style="padding: 10px;"><input type="checkbox" class="p51sel3" name="check2" onclick="onlyOne2(this)" style="zoom: 2;" value="no"></td>' +
        '</tr>' 
    ];
    p5vec1.sort(f_randomico);
    $('#p5im1').html('<tr align="center"><td></td><td>Sí</td><td>No</td></tr>'+p5vec1);
    bt_comprobar.addEventListener("click", f_comprobar);

    function preg11() {
        cor = 0;
        var nota1_11 = $('#nota1_11').val();
        if (!nota1_11) {
            alert('Ingrese la calificación en la pregunta 11.')
        } else {
            cor = cor + parseFloat(nota1_11);
            inc = inc + (4 - parseFloat(nota1_11));
            $('#nota1_11').val(parseFloat(nota1_11).toFixed(2));
            $('#nota1_11').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p5cont1 = 0;
        if ($('.p5sel1').is(':checked')) {
            p5cont1++;
            $('.p5sel1').addClass('valid');
        } else if ($('.p51sel1').is(':checked')) {
            p5cont1;
            $('.p51sel1').addClass('no-valid');
        } else {
            p5cont1;
            $('.p51sel1').addClass('no-valid');
            $('.p5sel1').addClass('no-valid');
        }
        if ($('.p51sel2').is(':checked')) {
            p5cont1++;
            $('.p51sel2').addClass('valid');
        } else if ($('.p5sel2').is(':checked')) {
            p5cont1;
            $('.p5sel2').addClass('no-valid');
        } else {
            p5cont1;
            $('.p5sel2').addClass('no-valid');
            $('.p51sel2').addClass('no-valid');
        }
        if ($('.p5sel3').is(':checked')) {
            p5cont1++;
            $('.p5sel3').addClass('valid');
        } else if ($('.p51sel3').is(':checked')) {
            p5cont1;
            $('.p51sel3').addClass('no-valid');
        } else {
            p5cont1;
            $('.p51sel3').addClass('no-valid');
            $('.p5sel3').addClass('no-valid');
        }
        var result5 = (p5cont1 * 5) / 3;
        cor = cor + result5;
        inc = inc + (5 - result5);
        $('#nota1_5').val(result5.toFixed(2));
        $('#nota1_5').css('display', '');

        var p6dcon1=$('#p6dcon1').val();
        var p6dcon2=$('#p6dcon2').val();
        var p6cont1=0;
        if (p6dcon1=='la guitarra' || p6dcon1=='guitarra' || p6dcon1=='una guitarra') {
            p6cont1++;
            f_ok($('#p6dcon1'));
        }else{
            p6cont1;
            f_no($('#p6dcon1'));
        }
        if (p6dcon2=='su corazón' || p6dcon2=='corazón' || p6dcon2=='el corazón') {
            p6cont1++;
            f_ok($('#p6dcon2'));
        }else{
            p6cont1;
            f_no($('#p6dcon2'));
        }
        var result6 = (p6cont1 * 5) / 2;
        cor = cor + result6;
        inc = inc + (5 - result6);
        $('#nota1_6').val(result6.toFixed(2));
        $('#nota1_6').css('display', '');
        Calculo_nota();
    }
}