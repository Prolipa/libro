var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str2 = '',
    str3 = '',
    str4 = '',
    calificacion = 10;

var t1 = 0;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('pre1a').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('pre1a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre1a'), 4)
});

function f_iniciar() {
    var p2vec1 = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var myArray1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 6; i++) {
        var c = myArray1[i - 1];
        $("#p2dcon" + (parseInt(c) + 1)).val(p2vec1[c]);
        $("#p2dcon" + (parseInt(c) + 1)).attr('disabled', 'true');
    };

    var p2vec2 = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
    var myArray2 = ['0', '1', '2', '3', '4'];
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c1 = myArray2[i - 1];
        $("#p21dcon" + (parseInt(c1) + 1)).val(p2vec2[c1]);
        $("#p21dcon" + (parseInt(c1) + 1)).attr('disabled', 'true');
    };

    var p22vec1 = [
        '<tr align="center">' +
        '<td style="border:2px solid #86CBE2;">Un mes</td>' +
        '<td style="border:2px solid #B4D49F;"><input type="text" id="p22dcon1" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 50px;" maxlength="3" onkeypress="return soloNumeros1(event)">días</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td style="border:2px solid #86CBE2;">Un mes</td>' +
        '<td style="border:2px solid #B4D49F;"><input type="text" id="p22dcon2" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 50px;" maxlength="3" onkeypress="return soloNumeros1(event)">semanas</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td style="border:2px solid #86CBE2;">Dos años</td>' +
        '<td style="border:2px solid #B4D49F;"><input type="text" id="p22dcon3" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 50px;" maxlength="3" onkeypress="return soloNumeros1(event)">días</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td style="border:2px solid #86CBE2;">En tres semanas</td>' +
        '<td style="border:2px solid #B4D49F;"><input type="text" id="p22dcon4" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 50px;" maxlength="3" onkeypress="return soloNumeros1(event)">días</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td style="border:2px solid #86CBE2;">Dos horas</td>' +
        '<td style="border:2px solid #B4D49F;"><input type="text" id="p22dcon5" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 50px;" maxlength="3" onkeypress="return soloNumeros1(event)">minutos</td>' +
        '</tr>'
    ];
    p22vec1.sort(f_randomico);
    $('#p22im1').html('<tr align="center"><td style="background: #86CBE2; color: white; border:2px solid #86CBE2;">Medida</td><td style="background: #B4D49F; color: white; border:2px solid #B4D49F;">Equivalencia</td></tr>' + p22vec1);
    p22vec2 = [
        '<tr align="center">' +
        '<td style="border:2px solid #86CBE2;">Una hora</td>' +
        '<td style="border:2px solid #B4D49F;"><input type="text" id="p22dcon6" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 50px;" maxlength="3" onkeypress="return soloNumeros1(event)">minutos</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td style="border:2px solid #86CBE2;">Un día</td>' +
        '<td style="border:2px solid #B4D49F;"><input type="text" id="p22dcon7" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 50px;" maxlength="3" onkeypress="return soloNumeros1(event)">horas</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td style="border:2px solid #86CBE2;">Tres horas</td>' +
        '<td style="border:2px solid #B4D49F;"><input type="text" id="p22dcon8" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 50px;" maxlength="3" onkeypress="return soloNumeros1(event)">minutos</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td style="border:2px solid #86CBE2;">Tres días</td>' +
        '<td style="border:2px solid #B4D49F;"><input type="text" id="p22dcon9" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 50px;" maxlength="3" onkeypress="return soloNumeros1(event)">horas</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td style="border:2px solid #86CBE2;">Dos minutos</td>' +
        '<td style="border:2px solid #B4D49F;"><input type="text" id="p22dcon10" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 50px;" maxlength="3" onkeypress="return soloNumeros1(event)">segundos</td>' +
        '</tr>'
    ];
    p22vec2.sort(f_randomico);
    $('#p22im2').html('<tr align="center"><td style="background: #86CBE2; color: white; border:2px solid #86CBE2;">Medida</td><td style="background: #B4D49F; color: white; border:2px solid #B4D49F;">Equivalencia</td></tr>' + p22vec2);
    bt_comprobar.addEventListener("click", preg1);

    function preg1() {
        cor = 0;
        var pre1a = $('#pre1a').val();
        if (!pre1a) {
            alert('Ingrese la calificación en la Pregunta 1.')
        } else {
            cor = cor + parseFloat(pre1a);
            inc = inc + (4 - parseFloat(pre1a));
            $('#pre1a').val(parseFloat(pre1a).toFixed(2));
            $('#pre1a').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p2cont1 = 0;
        for (var i = 0; i < 6; i++) {
            var p2res1 = $('#p2dcon' + (parseInt(myArray1[(i + 6)]) + 1)).val();
            if (p2res1 == p2vec1[myArray1[(i + 6)]]) {
                p2cont1++;
                f_ok($('#p2dcon' + (parseInt(myArray1[(i + 6)]) + 1)));
            } else {
                p2cont1;
                f_no($('#p2dcon' + (parseInt(myArray1[(i + 6)]) + 1)));
            }
        }
        for (var i = 0; i < 2; i++) {
            var p2res2 = $('#p21dcon' + (parseInt(myArray2[(i + 3)]) + 1)).val();
            if (p2res2 == p2vec2[myArray2[(i + 3)]]) {
                p2cont1++;
                f_ok($('#p21dcon' + (parseInt(myArray2[(i + 3)]) + 1)));
            } else {
                p2cont1;
                f_no($('#p21dcon' + (parseInt(myArray2[(i + 3)]) + 1)));
            }
        }

        var p22dcon1=$('#p22dcon1').val();
        var p22dcon2=$('#p22dcon2').val();
        var p22dcon3=$('#p22dcon3').val();
        var p22dcon4=$('#p22dcon4').val();
        var p22dcon5=$('#p22dcon5').val();
        var p22dcon6=$('#p22dcon6').val();
        var p22dcon7=$('#p22dcon7').val();
        var p22dcon8=$('#p22dcon8').val();
        var p22dcon9=$('#p22dcon9').val();
        var p22dcon10=$('#p22dcon10').val();
        if (p22dcon1>=28 && p22dcon1<=31) {
            p2cont1++;
            f_ok($('#p22dcon1'));
        }else{
            p2cont1;
            f_no($('#p22dcon1'));
        }
        if (p22dcon2=='4') {
            p2cont1++;
            f_ok($('#p22dcon2'));
        }else{
            p2cont1;
            f_no($('#p22dcon2'));
        }
        if (p22dcon3=='730') {
            p2cont1++;
            f_ok($('#p22dcon3'));
        }else{
            p2cont1;
            f_no($('#p22dcon3'));
        }
        if (p22dcon4=='21') {
            p2cont1++;
            f_ok($('#p22dcon4'));
        }else{
            p2cont1;
            f_no($('#p22dcon4'));
        }
        if (p22dcon5=='120') {
            p2cont1++;
            f_ok($('#p22dcon5'));
        }else{
            p2cont1;
            f_no($('#p22dcon5'));
        }
        if (p22dcon6=='60') {
            p2cont1++;
            f_ok($('#p22dcon6'));
        }else{
            p2cont1;
            f_no($('#p22dcon6'));
        }
        if (p22dcon7=='24') {
            p2cont1++;
            f_ok($('#p22dcon7'));
        }else{
            p2cont1;
            f_no($('#p22dcon7'));
        }
        if (p22dcon8=='180') {
            p2cont1++;
            f_ok($('#p22dcon8'));
        }else{
            p2cont1;
            f_no($('#p22dcon8'));
        }
        if (p22dcon9=='72') {
            p2cont1++;
            f_ok($('#p22dcon9'));
        }else{
            p2cont1;
            f_no($('#p22dcon9'));
        }
        if (p22dcon10=='120') {
            p2cont1++;
            f_ok($('#p22dcon10'));
        }else{
            p2cont1;
            f_no($('#p22dcon10'));
        }
        var result2 = (p2cont1 * 6) / 18;
        cor = cor + result2;
        inc = inc + (6 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}