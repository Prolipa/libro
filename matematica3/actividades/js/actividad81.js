var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
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

function f_iniciar() {
    var a81vec1 = ['<input type="text" id="a80dcon1" maxlength="3" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon2" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon3" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon4" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon5" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon6" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon7" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon8" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon9" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon10" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon11" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon12" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon13" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon14" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon15" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon16" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon17" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon18" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon19" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a80dcon20" maxlength="5" style="width: 40px; border:none; border-bottom: 2px dotted black; text-align: center;">'
    ];
    var a81vec2 = ['<input type="text" id="a81dcon1" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon2" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon3" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon4" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon5" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon6" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon7" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon8" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon9" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon10" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon11" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon12" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon13" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon14" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon15" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon16" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon17" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon18" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon19" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">',
        '<input type="text" id="a81dcon20" onkeyup="mayus(this)" style="width: 120px; border:none; border-bottom: 2px dotted black; text-align: center;">'
    ];
    var a81vec3 = ['primero',
        'segundo',
        'tercero',
        'cuarto',
        'quinto',
        'sexto',
        'séptimo',
        'octavo',
        'noveno',
        'décimo',
        'décimo primero',
        'décimo segundo',
        'décimo tercero',
        'décimo cuarto',
        'décimo quinto',
        'décimo sexto',
        'décimo séptimo',
        'décimo octavo',
        'décimo noveno',
        'vigésimo'
    ];
    var myArray1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 2; i++) {
        var c = myArray1[i - 1];
        $("#a81im" + (c)).html(a81vec1[(c - 1)]);

    };
    //aleatorio literal 1
    for (var i = 3; i <= 10; i++) {
        var c = myArray1[i - 1];
        $("#a81cim" + (c)).html(a81vec2[(c - 1)]);

    };
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a80dcons1 = $('#a80dcon' + (myArray1[0])).val();
        var a80dcons2 = $('#a80dcon' + (myArray1[1])).val();
        if (a80dcons1 == (myArray1[0]) + '.°' || a80dcons1 == (myArray1[0])) {
            cor++;
            f_ok($('#a80dcon' + (myArray1[0])));
        } else {
            inc++;
            f_no($('#a80dcon' + (myArray1[0])));
        }
        if (a80dcons2 == (myArray1[1]) + '.°' || a80dcons2 == (myArray1[1])) {
            cor++;
            f_ok($('#a80dcon' + (myArray1[1])));
        } else {
            inc++;
            f_no($('#a80dcon' + (myArray1[1])));
        }
        var a80dcons3 = $('#a81dcon' + (myArray1[2])).val();
        var a80dcons4 = $('#a81dcon' + (myArray1[3])).val();
        var a80dcons5 = $('#a81dcon' + (myArray1[4])).val();
        var a80dcons6 = $('#a81dcon' + (myArray1[5])).val();
        var a80dcons7 = $('#a81dcon' + (myArray1[6])).val();
        var a80dcons8 = $('#a81dcon' + (myArray1[7])).val();
        var a80dcons9 = $('#a81dcon' + (myArray1[8])).val();
        var a80dcos1 = $('#a81dcon' + (myArray1[9])).val();
        if (a80dcons3 == a81vec3[parseInt(myArray1[2]) - 1]) {
            cor++;
            f_ok($('#a81dcon' + (myArray1[2])));
        } else {
            inc++;
            f_no($('#a81dcon' + (myArray1[2])));
        }
        if (a80dcons4 == a81vec3[parseInt(myArray1[3]) - 1]) {
            cor++;
            f_ok($('#a81dcon' + (myArray1[3])));
        } else {
            inc++;
            f_no($('#a81dcon' + (myArray1[3])));
        }
        if (a80dcons5 == a81vec3[parseInt(myArray1[4]) - 1]) {
            cor++;
            f_ok($('#a81dcon' + (myArray1[4])));
        } else {
            inc++;
            f_no($('#a81dcon' + (myArray1[4])));
        }
        if (a80dcons6 == a81vec3[parseInt(myArray1[5]) - 1]) {
            cor++;
            f_ok($('#a81dcon' + (myArray1[5])));
        } else {
            inc++;
            f_no($('#a81dcon' + (myArray1[5])));
        }
        if (a80dcons7 == a81vec3[parseInt(myArray1[6]) - 1]) {
            cor++;
            f_ok($('#a81dcon' + (myArray1[6])));
        } else {
            inc++;
            f_no($('#a81dcon' + (myArray1[6])));
        }
        if (a80dcons8 == a81vec3[parseInt(myArray1[7]) - 1]) {
            cor++;
            f_ok($('#a81dcon' + (myArray1[7])));
        } else {
            inc++;
            f_no($('#a81dcon' + (myArray1[7])));
        }
        if (a80dcons9 == a81vec3[parseInt(myArray1[8]) - 1]) {
            cor++;
            f_ok($('#a81dcon' + (myArray1[8])));
        } else {
            inc++;
            f_no($('#a81dcon' + (myArray1[8])));
        }
        if (a80dcos1 == a81vec3[parseInt(myArray1[9]) - 1]) {
            cor++;
            f_ok($('#a81dcon' + (myArray1[9])));
        } else {
            inc++;
            f_no($('#a81dcon' + (myArray1[9])));
        }

        Calculo_nota();
    }
}