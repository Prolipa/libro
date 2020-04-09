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

for (var i = 0; i < 22; i++) {
    $('#p4en' + (i + 1)).click(function() {
        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')


        } else {
            $(this).addClass('encierra')

        }
    })
}

function f_iniciar() {
    var p1vec1 = [
        '<div class="table-responsive" style="display:inline-block; padding:15px;">' +
        '<table>' +
        '<tr align="center">' +
        '<td colspan="4">' +
        '<img src="img/i1_p162_act82.jpg" class="img-responsive">' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p1dcon1" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p1dcon2" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p1dcon3" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p1dcon4" onkeyup="mayus(this)">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display:inline-block; padding:15px;">' +
        '<table>' +
        '<tr align="center">' +
        '<td colspan="4">' +
        '<img src="img/i2_p162_act82.jpg" class="img-responsive">' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p11dcon1" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p11dcon2" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p11dcon3" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p11dcon4" onkeyup="mayus(this)">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display:inline-block; padding:15px;">' +
        '<table>' +
        '<tr align="center">' +
        '<td colspan="5">' +
        '<img src="img/i3_p162_act82.jpg" class="img-responsive">' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p12dcon1" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p12dcon2" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p12dcon3" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p12dcon4" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p12dcon5" onkeyup="mayus(this)">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display:inline-block; padding:15px;">' +
        '<table>' +
        '<tr align="center">' +
        '<td colspan="6">' +
        '<img src="img/i4_p162_act82.jpg" class="img-responsive">' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p13dcon1" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p13dcon2" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p13dcon3" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p13dcon4" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p13dcon5" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p13dcon6" onkeyup="mayus(this)">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display:inline-block; padding:15px;">' +
        '<table>' +
        '<tr align="center">' +
        '<td colspan="5">' +
        '<img src="img/i5_p162_act82.jpg" class="img-responsive">' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p14dcon1" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p14dcon2" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p14dcon3" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p14dcon4" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p14dcon5" onkeyup="mayus(this)">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display:inline-block; padding:15px;">' +
        '<table>' +
        '<tr align="center">' +
        '<td colspan="3">' +
        '<img src="img/i20_p160_act79.jpg" class="img-responsive">' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p15dcon1" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p15dcon2" onkeyup="mayus(this)">' +
        '</td>' +
        '<td>' +
        '<input type="text" style="width: 40px; height: 40px; border: 2px solid #009BDB; text-align: center;" maxlength="2" id="p15dcon3" onkeyup="mayus(this)">' +
        '</td>  ' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    p1vec1.sort(f_randomico);
    $('.actividad822').html(p1vec1);

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1res1 = ['l', 'e', 'ch', 'e'];
        var p1res2 = ['ch', 'i', 'v', 'o'];
        var p1res3 = ['ch', 'o', 'm', 'p', 'a'];
        var p1res4 = ['ch', 'u', 'p', 'e', 't', 'e'];
        var p1res5 = ['p', 'o', 'n', 'ch', 'o'];
        var p1res6 = ['ch', 'a', 'l'];
        var p1dcon1 = [$('#p1dcon1').val(), $('#p1dcon2').val(), $('#p1dcon3').val(), $('#p1dcon4').val()];
        var p1dcon2 = [$('#p11dcon1').val(), $('#p11dcon2').val(), $('#p11dcon3').val(), $('#p11dcon4').val()];
        var p1dcon3 = [$('#p12dcon1').val(), $('#p12dcon2').val(), $('#p12dcon3').val(), $('#p12dcon4').val(), $('#p12dcon5').val()];
        var p1dcon4 = [$('#p13dcon1').val(), $('#p13dcon2').val(), $('#p13dcon3').val(), $('#p13dcon4').val(), $('#p13dcon5').val(), $('#p13dcon6').val()];
        var p1dcon5 = [$('#p14dcon1').val(), $('#p14dcon2').val(), $('#p14dcon3').val(), $('#p14dcon4').val(), $('#p14dcon5').val()];
        var p1dcon6 = [$('#p15dcon1').val(), $('#p15dcon2').val(), $('#p15dcon3').val()];
        var p1cont1 = 0;
        for (var i = 0; i < p1dcon1.length; i++) {
            if (p1dcon1[i] == p1res1[i]) {
                p1cont1++;
                f_ok($('#p1dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p1dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p1dcon2.length; i++) {
            if (p1dcon2[i] == p1res2[i]) {
                p1cont1++;
                f_ok($('#p11dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p11dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p1dcon3.length; i++) {
            if (p1dcon3[i] == p1res3[i]) {
                p1cont1++;
                f_ok($('#p12dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p12dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p1dcon4.length; i++) {
            if (p1dcon4[i] == p1res4[i]) {
                p1cont1++;
                f_ok($('#p13dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p13dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p1dcon5.length; i++) {
            if (p1dcon5[i] == p1res5[i]) {
                p1cont1++;
                f_ok($('#p14dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p14dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p1dcon6.length; i++) {
            if (p1dcon6[i] == p1res6[i]) {
                p1cont1++;
                f_ok($('#p15dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p15dcon' + (i + 1)));
            }
        }
        var result1 = (p1cont1 * 5) / 27;
        cor = cor + result1;
        inc = inc + (5 - result1);

        var p4vec1 = [];
        var p4vec2 = [];
        for (var i = 0; i < 22; i++) {
            if ($('#p4en' + (i + 1)).hasClass('encierra')) {
                p4vec1.push($('#p4en' + (i + 1)).text());
                p4vec2.push((i + 1));
            }
        }
        var p4cont1=0;
        var p4vec3=['Panchito','rancho','hacha','machete','chiva','noche','leche'];
        var corr=0;
        var incc=0;
        if (p4vec1.length == 0) {
            for (var i = 0; i < 22; i++) {
                f_no($('#p4en' + (i + 1)));
            }
            corr;
            incc;
        }else{
            for (var i = 0; i < p4vec1.length; i++) {
                var res1=0;
                for (var j = 0; j < p4vec3.length; j++) {
                    if (p4vec1[i]==p4vec3[j]) {
                        res1++;
                    }
                }
                if (res1=='1') {
                    corr++;
                    f_ok($('#p4en' + p4vec2[i]));
                }else{
                    incc++;
                    f_no($('#p4en' + p4vec2[i]));
                }
            }
        }
        if (corr>incc) {
            var result2=((corr-incc)*5)/8;
        }else{
            var result2=0;
        }
        cor=cor+result2;
        inc=inc+(5-result2);
        Calculo_nota();
    }
}