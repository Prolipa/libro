var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 8,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
var a80aux1 = 0;

for (var i = 0; i < 16; i++) {
    $('.bpint' + (i + 1)).click(function() {
        if (a80aux1 == 0) {
            if ($(this).hasClass('pinta')) {


            } else {
                $(this).addClass('pinta')
                a80aux1++;
            }
        } else if (a80aux1 == 1) {
            if ($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')
                a80aux1--;

            } else {

            }
        } else {
            alert('Seleccione un sola opción');
        }
    })

}

var a80aux2 = 0;
for (var i = 0; i < 16; i++) {
    $('.cpint' + (i + 1)).click(function() {

        if (a80aux2 == 0) {
            if ($(this).hasClass('pinta1')) {


            } else {
                $(this).addClass('pinta1')
                a80aux2++;
            }
        } else if (a80aux2 == 1) {
            if ($(this).hasClass('pinta1')) {
                $(this).removeClass('pinta1')
                a80aux2--;

            } else {

            }
        } else {
            alert('Seleccione un sola opción');
        }

    })
}
var a80aux3 = 0;
for (var i = 0; i < 16; i++) {
    $('.dpint' + (i + 1)).click(function() {

        if (a80aux3 == 0) {
            if ($(this).hasClass('pinta2')) {


            } else {
                $(this).addClass('pinta2')
                a80aux3++;
            }
        } else if (a80aux3 == 1) {
            if ($(this).hasClass('pinta2')) {
                $(this).removeClass('pinta2')
                a80aux3--;

            } else {

            }
        } else {
            alert('Seleccione un sola opción');
        }

    })
}
var a80aux4 = 0;
for (var i = 0; i < 16; i++) {
    $('.epint' + (i + 1)).click(function() {

        if (a80aux4 == 0) {
            if ($(this).hasClass('pinta3')) {


            } else {
                $(this).addClass('pinta3')
                a80aux4++;
            }
        } else if (a80aux4 == 1) {
            if ($(this).hasClass('pinta3')) {
                $(this).removeClass('pinta3')
                a80aux4--;

            } else {

            }
        } else {
            alert('Seleccione un sola opción');
        }

    })
}

function f_iniciar() {
    var a80vec1 = ['<td style="vertical-align: middle; background: #D8EDF5;" >' +
        '<span class="text-question">14.°</span>' +
        '</td>' +
        '<td style=" border: 2px solid #8767A7;" id="a80cim1">' +
        '<div class="bpint1" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="1">' +
        '</div>' +
        '<div class="bpint2" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="2">' +
        '</div>' +
        '<div class="bpint3" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="3">' +
        '</div>' +
        '<div class="bpint4" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="4">' +
        '</div>' +
        '<div class="bpint5" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="5">' +
        '</div>' +
        '<div class="bpint6" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="6">' +
        '</div>' +
        '<div class="bpint7" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="7">' +
        '</div>' +
        '<div class="bpint8" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="8">' +
        '</div>' +
        '<div class="bpint9" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="9">' +
        '</div>' +
        '<div class="bpint10" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="10">' +
        '</div>' +
        '<div class="bpint11" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="11">' +
        '</div>' +
        '<div class="bpint12" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="12">' +
        '</div>' +
        '<div class="bpint13" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="13">' +
        '</div>' +
        '<div class="bpint14" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="14">' +
        '</div>' +
        '<div class="bpint15" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="15">' +
        '</div>' +
        '<div class="bpint16" style="display: inline-block;">' +
        '<img src="img/i2_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="16">' +
        '</div>' +
        '</td>' +
        '<td style="vertical-align: middle; border: 2px solid #8767A7;">' +
        '<input type="text" id="a80dcon1" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">' +
        '</td>',
        '<td style="vertical-align: middle; background: #E9F3E2;" >' +
        '<span class="text-question">11.°</span>' +
        '</td>' +
        '<td style=" border: 2px solid #8767A7;" id="a80cim2">' +
        '<div class="cpint1" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="1">' +
        '</div>' +
        '<div class="cpint2" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="2">' +
        '</div>' +
        '<div class="cpint3" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="3">' +
        '</div>' +
        '<div class="cpint4" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="4">' +
        '</div>' +
        '<div class="cpint5" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="5">' +
        '</div>' +
        '<div class="cpint6" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="6">' +
        '</div>' +
        '<div class="cpint7" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="7">' +
        '</div>' +
        '<div class="cpint8" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="8">' +
        '</div>' +
        '<div class="cpint9" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="9">' +
        '</div>' +
        '<div class="cpint10" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="10">' +
        '</div>' +
        '<div class="cpint11" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="11">' +
        '</div>' +
        '<div class="cpint12" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="12">' +
        '</div>' +
        '<div class="cpint13" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="13">' +
        '</div>' +
        '<div class="cpint14" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="14">' +
        '</div>' +
        '<div class="cpint15" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="15">' +
        '</div>' +
        '<div class="cpint16" style="display: inline-block;">' +
        '<img src="img/i3_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="16">' +
        '</div>' +
        '</td>' +
        '<td style="vertical-align: middle; border: 2px solid #8767A7;">' +
        '<input type="text" id="a80dcon2" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">' +
        '</td>',
        '<td style="vertical-align: middle; background: #CEB4D5;" >' +
        '<span class="text-question">16.°</span>' +
        '</td>' +
        '<td style=" border: 2px solid #8767A7;" id="a80cim3">' +
        '<div class="dpint1" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="1">' +
        '</div>' +
        '<div class="dpint2" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="2">' +
        '</div>' +
        '<div class="dpint3" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="3">' +
        '</div>' +
        '<div class="dpint4" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="4">' +
        '</div>' +
        '<div class="dpint5" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="5">' +
        '</div>' +
        '<div class="dpint6" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="6">' +
        '</div>' +
        '<div class="dpint7" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="7">' +
        '</div>' +
        '<div class="dpint8" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="8">' +
        '</div>' +
        '<div class="dpint9" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="9">' +
        '</div>' +
        '<div class="dpint10" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="10">' +
        '</div>' +
        '<div class="dpint11" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="11">' +
        '</div>' +
        '<div class="dpint12" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="12">' +
        '</div>' +
        '<div class="dpint13" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="13">' +
        '</div>' +
        '<div class="dpint14" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="14">' +
        '</div>' +
        '<div class="dpint15" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="15">' +
        '</div>' +
        '<div class="dpint16" style="display: inline-block;">' +
        '<img src="img/i4_p71_act80.jpg" style="width: 50px; display: inline-block; mix-blend-mode: multiply;" alt="16">' +
        '</div>' +
        '</td>' +
        '<td style="vertical-align: middle; border: 2px solid #8767A7;">' +
        '<input type="text" id="a80dcon3" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">' +
        '</td>',
        '<td style="vertical-align: middle; background: #D8EDF5;" >' +
        '<span class="text-question">7.°</span>' +
        '</td>' +
        '<td style=" border: 2px solid #8767A7;" id="a80cim4">' +
        '<div class="epint1" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="1">' +
        '</div>' +
        '<div class="epint2" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="2">' +
        '</div>' +
        '<div class="epint3" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="3">' +
        '</div>' +
        '<div class="epint4" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="4">' +
        '</div>' +
        '<div class="epint5" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="5">' +
        '</div>' +
        '<div class="epint6" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="6">' +
        '</div>' +
        '<div class="epint7" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="7">' +
        '</div>' +
        '<div class="epint8" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="8">' +
        '</div>' +
        '<div class="epint9" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="9">' +
        '</div>' +
        '<div class="epint10" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="10">' +
        '</div>' +
        '<div class="epint11" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="11">' +
        '</div>' +
        '<div class="epint12" style="display: inline-block;">' +
        '<img src="img/i5_p71_act80.jpg" style="width: 70px; display: inline-block; mix-blend-mode: multiply;" alt="12">' +
        '</div>' +

        '</td>' +
        '<td style="vertical-align: middle; border: 2px solid #8767A7;">' +
        '<input type="text" id="a80dcon4" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">' +
        '</td>'
    ];
    var myArray1 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c = myArray1[i - 1];
        $("#a80im" + i).html(a80vec1[c]);

    };
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a80dcon1 = $('#a80dcon1').val();
        var a80dcon2 = $('#a80dcon2').val();
        var a80dcon3 = $('#a80dcon3').val();
        var a80dcon4 = $('#a80dcon4').val();

        if (a80dcon1 == 'décimo cuarto') {
            cor++;
            f_ok($('#a80dcon1'));
        } else {
            inc++;
            f_no($('#a80dcon1'));
        }
        if (a80dcon2 == 'décimo primero') {
            cor++;
            f_ok($('#a80dcon2'));
        } else {
            inc++;
            f_no($('#a80dcon2'));
        }

        if (a80dcon3 == 'décimo sexto') {
            cor++;
            f_ok($('#a80dcon3'));
        } else {
            inc++;
            f_no($('#a80dcon3'));
        }
        if (a80dcon4 == 'séptimo') {
            cor++;
            f_ok($('#a80dcon4'));
        } else {
            inc++;
            f_no($('#a80dcon4'));
        }
        var a80im1 = $('.pinta img').attr('alt');
        var a80im2 = $('.pinta1 img').attr('alt');
        var a80im3 = $('.pinta2 img').attr('alt');
        var a80im4 = $('.pinta3 img').attr('alt');
        if (a80im1 == '14') {
            cor++;
            f_ok($('#a80cim1'));
        } else {
            inc++;
            f_no($('#a80cim1'));
        }
        if (a80im2 == '11') {
            cor++;
            f_ok($('#a80cim2'));
        } else {
            inc++;
            f_no($('#a80cim2'));
        }
        if (a80im3 == '16') {
            cor++;
            f_ok($('#a80cim3'));
        } else {
            inc++;
            f_no($('#a80cim3'));
        }
        if (a80im4 == '7') {
            cor++;
            f_ok($('#a80cim4'));
        } else {
            inc++;
            f_no($('#a80cim4'));
        }
        Calculo_nota();
    }
}