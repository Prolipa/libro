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
    sopa1 = 0,
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

    var p9vec1 = [
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i1_p206_u5a11.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p9cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p9dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p9dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p9dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p9dcon4">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i2_p206_u5a11.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p9cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p91dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p91dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p91dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p91dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p91dcon5">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i3_p206_u5a11.jpg" class="img-responsive">' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p9cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p92dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p92dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p92dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p92dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p92dcon5">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p92dcon6">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i4_p206_u5a11.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p9cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p93dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p93dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p93dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p93dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p93dcon5">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p93dcon6">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i5_p206_u5a11.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p9cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p94dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p94dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p94dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p94dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p94dcon5">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p94dcon6">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i6_p206_u5a11.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p9cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p95dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p95dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p95dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p95dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p95dcon5">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p95dcon6">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p95dcon7">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i7_p206_u5a11.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p9cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p96dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p96dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p96dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p96dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p96dcon5">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p96dcon6">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i8_p206_u5a11.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p9cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p97dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p97dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p97dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p97dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p97dcon5">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p97dcon6">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p97dcon7">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i9_p206_u5a11.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p9cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p98dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p98dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p98dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p98dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p98dcon5">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p98dcon6">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p98dcon7">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p98dcon8">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>'
    ];
    p9vec1.sort(f_randomico);
    $('#p9im1').html(p9vec1);

}


function pregunta1() {
    var p9dcon1 = $('#p9dcon1').val() + $('#p9dcon2').val() + $('#p9dcon3').val() + $('#p9dcon4').val();
    var p91dcon1 = $('#p91dcon1').val() + $('#p91dcon2').val() + $('#p91dcon3').val() + $('#p91dcon4').val() + $('#p91dcon5').val();
    var p92dcon1 = $('#p92dcon1').val() + $('#p92dcon2').val() + $('#p92dcon3').val() + $('#p92dcon4').val() + $('#p92dcon5').val() + $('#p92dcon6').val();
    var p93dcon1 = $('#p93dcon1').val() + $('#p93dcon2').val() + $('#p93dcon3').val() + $('#p93dcon4').val() + $('#p93dcon5').val() + $('#p93dcon6').val();
    var p94dcon1 = $('#p94dcon1').val() + $('#p94dcon2').val() + $('#p94dcon3').val() + $('#p94dcon4').val() + $('#p94dcon5').val() + $('#p94dcon6').val();
    var p95dcon1 = $('#p95dcon1').val() + $('#p95dcon2').val() + $('#p95dcon3').val() + $('#p95dcon4').val() + $('#p95dcon5').val() + $('#p95dcon6').val() + $('#p95dcon7').val();
    var p96dcon1 = $('#p96dcon1').val() + $('#p96dcon2').val() + $('#p96dcon3').val() + $('#p96dcon4').val() + $('#p96dcon5').val() + $('#p96dcon6').val();
    var p97dcon1 = $('#p97dcon1').val() + $('#p97dcon2').val() + $('#p97dcon3').val() + $('#p97dcon4').val() + $('#p97dcon5').val() + $('#p97dcon6').val() + $('#p97dcon7').val();
    var p98dcon1 = $('#p98dcon1').val() + $('#p98dcon2').val() + $('#p98dcon3').val() + $('#p98dcon4').val() + $('#p98dcon5').val() + $('#p98dcon6').val() + $('#p98dcon7').val() + $('#p98dcon8').val();
    var p9cont1 = 0;
    if (p9dcon1 == 'gato') {
        p9cont1++;
        f_ok($('#p9dcon1'));
        f_ok($('#p9dcon2'));
        f_ok($('#p9dcon3'));
        f_ok($('#p9dcon4'));
    } else {
        p9cont1;
        f_no($('#p9dcon1'));
        f_no($('#p9dcon2'));
        f_no($('#p9dcon3'));
        f_no($('#p9dcon4'));
    }
    if (p91dcon1 == 'gorra') {
        p9cont1++;
        f_ok($('#p91dcon1'));
        f_ok($('#p91dcon2'));
        f_ok($('#p91dcon3'));
        f_ok($('#p91dcon4'));
        f_ok($('#p91dcon5'));
    } else {
        p9cont1;
        f_no($('#p91dcon1'));
        f_no($('#p91dcon2'));
        f_no($('#p91dcon3'));
        f_no($('#p91dcon4'));
        f_no($('#p91dcon5'));
    }
    if (p92dcon1 == 'gorila') {
        p9cont1++;
        f_ok($('#p92dcon1'));
        f_ok($('#p92dcon2'));
        f_ok($('#p92dcon3'));
        f_ok($('#p92dcon4'));
        f_ok($('#p92dcon5'));
        f_ok($('#p92dcon6'));
    } else {
        p9cont1;
        f_no($('#p92dcon1'));
        f_no($('#p92dcon2'));
        f_no($('#p92dcon3'));
        f_no($('#p92dcon4'));
        f_no($('#p92dcon5'));
        f_no($('#p92dcon6'));
    }
    if (p93dcon1 == 'lengua') {
        p9cont1++;
        f_ok($('#p93dcon1'));
        f_ok($('#p93dcon2'));
        f_ok($('#p93dcon3'));
        f_ok($('#p93dcon4'));
        f_ok($('#p93dcon5'));
        f_ok($('#p93dcon6'));
    } else {
        p9cont1;
        f_no($('#p93dcon1'));
        f_no($('#p93dcon2'));
        f_no($('#p93dcon3'));
        f_no($('#p93dcon4'));
        f_no($('#p93dcon5'));
        f_no($('#p93dcon6'));
    }
    if (p94dcon1 == 'gusano') {
        p9cont1++;
        f_ok($('#p94dcon1'));
        f_ok($('#p94dcon2'));
        f_ok($('#p94dcon3'));
        f_ok($('#p94dcon4'));
        f_ok($('#p94dcon5'));
        f_ok($('#p94dcon6'));
    } else {
        p9cont1;
        f_no($('#p94dcon1'));
        f_no($('#p94dcon2'));
        f_no($('#p94dcon3'));
        f_no($('#p94dcon4'));
        f_no($('#p94dcon5'));
        f_no($('#p94dcon6'));
    }
    if (p95dcon1 == 'lagarto') {
        p9cont1++;
        f_ok($('#p95dcon1'));
        f_ok($('#p95dcon2'));
        f_ok($('#p95dcon3'));
        f_ok($('#p95dcon4'));
        f_ok($('#p95dcon5'));
        f_ok($('#p95dcon6'));
        f_ok($('#p95dcon7'));
    } else {
        p9cont1;
        f_no($('#p95dcon1'));
        f_no($('#p95dcon2'));
        f_no($('#p95dcon3'));
        f_no($('#p95dcon4'));
        f_no($('#p95dcon5'));
        f_no($('#p95dcon6'));
        f_no($('#p95dcon7'));
    }
    if (p96dcon1 == 'regalo') {
        p9cont1++;
        f_ok($('#p96dcon1'));
        f_ok($('#p96dcon2'));
        f_ok($('#p96dcon3'));
        f_ok($('#p96dcon4'));
        f_ok($('#p96dcon5'));
        f_ok($('#p96dcon6'));
    } else {
        p9cont1;
        f_no($('#p96dcon1'));
        f_no($('#p96dcon2'));
        f_no($('#p96dcon3'));
        f_no($('#p96dcon4'));
        f_no($('#p96dcon5'));
        f_no($('#p96dcon6'));
    }
    if (p97dcon1 == 'tortuga') {
        p9cont1++;
        f_ok($('#p97dcon1'));
        f_ok($('#p97dcon2'));
        f_ok($('#p97dcon3'));
        f_ok($('#p97dcon4'));
        f_ok($('#p97dcon5'));
        f_ok($('#p97dcon6'));
        f_ok($('#p97dcon7'));
    } else {
        p9cont1;
        f_no($('#p97dcon1'));
        f_no($('#p97dcon2'));
        f_no($('#p97dcon3'));
        f_no($('#p97dcon4'));
        f_no($('#p97dcon5'));
        f_no($('#p97dcon6'));
        f_no($('#p97dcon7'));
    }
    if (p98dcon1 == 'paraguas') {
        p9cont1++;
        f_ok($('#p98dcon1'));
        f_ok($('#p98dcon2'));
        f_ok($('#p98dcon3'));
        f_ok($('#p98dcon4'));
        f_ok($('#p98dcon5'));
        f_ok($('#p98dcon6'));
        f_ok($('#p98dcon7'));
        f_ok($('#p98dcon8'));
    } else {
        p9cont1;
        f_no($('#p98dcon1'));
        f_no($('#p98dcon2'));
        f_no($('#p98dcon3'));
        f_no($('#p98dcon4'));
        f_no($('#p98dcon5'));
        f_no($('#p98dcon6'));
        f_no($('#p98dcon7'));
        f_no($('#p98dcon8'));
    }
    var result9 = (p9cont1 * 3) / 9;
    cor = cor + result9;
    inc = inc + (3 - result9);
    $('#nota1_9').val(result9.toFixed(2));
    $('#nota1_9').css('display', '');
}

function pregunta2() {
    cont++;
    result10 = (sopa * (calificacions / itemsTs)).toFixed(2); //suma de calificacion cerrada
    $('#nota1_10').val(parseFloat(result10).toFixed(2));
}