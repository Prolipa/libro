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

function f_iniciar() {
    var p1vec1 = [(Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100)];
    p1vec1.sort((a, b) => a - b);

    var p1s1 = p1vec1[5].toString().split('');
    $('#nlrd0').val(p1s1[0]);
    $('#nlrd0').attr('disabled', 'true');
    $('#nlrd1').val(p1s1[1]);
    $('#nlrd1').attr('disabled', 'true');
    $('#nlrd2').val(p1s1[2]);
    $('#nlrd2').attr('disabled', 'true');
    var p1s2 = p1vec1[3].toString().split('');
    $('#nlrd3').val(p1s2[0]);
    $('#nlrd3').attr('disabled', 'true');
    $('#nlrd4').val(p1s2[1]);
    $('#nlrd4').attr('disabled', 'true');
    $('#nlrd5').val(p1s2[2]);
    $('#nlrd5').attr('disabled', 'true');
    $('#nlrd13').val(p1s2[0]);
    $('#nlrd13').attr('disabled', 'true');
    $('#nlrd14').val(p1s2[1]);
    $('#nlrd14').attr('disabled', 'true');
    $('#nlrd15').val(p1s2[2]);
    $('#nlrd15').attr('disabled', 'true');

    var p1s3 = p1vec1[4].toString().split('');
    $('#nlrd40').val(p1s3[0]);
    $('#nlrd40').attr('disabled', 'true');
    $('#nlrd41').val(p1s3[1]);
    $('#nlrd41').attr('disabled', 'true');
    $('#nlrd42').val(p1s3[2]);
    $('#nlrd42').attr('disabled', 'true');
    var p1s4 = p1vec1[2].toString().split('');
    $('#nlrd43').val(p1s4[0]);
    $('#nlrd43').attr('disabled', 'true');
    $('#nlrd44').val(p1s4[1]);
    $('#nlrd44').attr('disabled', 'true');
    $('#nlrd45').val(p1s4[2]);
    $('#nlrd45').attr('disabled', 'true');
    $('#nlrd53').val(p1s4[0]);
    $('#nlrd53').attr('disabled', 'true');
    $('#nlrd54').val(p1s4[1]);
    $('#nlrd54').attr('disabled', 'true');
    $('#nlrd55').val(p1s4[2]);
    $('#nlrd55').attr('disabled', 'true');
    var p1s5 = p1vec1[7].toString().split('');
    $('#nlrd20').val(p1s5[0]);
    $('#nlrd20').attr('disabled', 'true');
    $('#nlrd21').val(p1s5[1]);
    $('#nlrd21').attr('disabled', 'true');
    $('#nlrd22').val(p1s5[2]);
    $('#nlrd22').attr('disabled', 'true');
    var p1s6 = p1vec1[1].toString().split('');
    $('#nlrd23').val(p1s6[0]);
    $('#nlrd23').attr('disabled', 'true');
    $('#nlrd24').val(p1s6[1]);
    $('#nlrd24').attr('disabled', 'true');
    $('#nlrd25').val(p1s6[2]);
    $('#nlrd25').attr('disabled', 'true');
    $('#nlrd33').val(p1s6[0]);
    $('#nlrd33').attr('disabled', 'true');
    $('#nlrd34').val(p1s6[1]);
    $('#nlrd34').attr('disabled', 'true');
    $('#nlrd35').val(p1s6[2]);
    $('#nlrd35').attr('disabled', 'true');
    var p1s7 = p1vec1[6].toString().split('');
    $('#nlrd60').val(p1s7[0]);
    $('#nlrd60').attr('disabled', 'true');
    $('#nlrd61').val(p1s7[1]);
    $('#nlrd61').attr('disabled', 'true');
    $('#nlrd62').val(p1s7[2]);
    $('#nlrd62').attr('disabled', 'true');
    var p1s8 = p1vec1[0].toString().split('');
    $('#nlrd63').val(p1s8[0]);
    $('#nlrd63').attr('disabled', 'true');
    $('#nlrd64').val(p1s8[1]);
    $('#nlrd64').attr('disabled', 'true');
    $('#nlrd65').val(p1s8[2]);
    $('#nlrd65').attr('disabled', 'true');
    $('#nlrd73').val(p1s8[0]);
    $('#nlrd73').attr('disabled', 'true');
    $('#nlrd74').val(p1s8[1]);
    $('#nlrd74').attr('disabled', 'true');
    $('#nlrd75').val(p1s8[2]);
    $('#nlrd75').attr('disabled', 'true');

    var p2vec1 = [
        '<input type="checkbox" class="p1sel1" name="check" onclick="onlyOne(this)" style="zoom: 5;">' +
        '<table  class="table">' +
        '<tr>' +
        '<td></td>' +
        '<td><h4>6</h4>' +
        '</td>' +
        '<td><h4>5</h4>' +
        '</td>' +
        '<td><h4>3</h4>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><h4><b>+</b></h4>' +
        '</td>' +
        '<td><h4>2</h4>' +
        '</td>' +
        '<td><h4>3</h4>' +
        '</td>' +
        '<td><h4>4</h4>' +
        '</td>' +
        '</tr>' +
        '<tr style="border-top:2px solid #303F9F">' +
        '<td></td>' +
        '<td><b>8</b></td>' +
        '<td><b>8</b></td>' +
        '<td><b>7</b></td>' +
        '</tr>' +
        '</table>',
        '<input type="checkbox" class="p1sel2" name="check" onclick="onlyOne(this)" style="zoom: 5;">' +
        '<table  class="table">' +
        '<tr>' +
        '<td></td>' +
        '<td><h4>6</h4>' +
        '</td>' +
        '<td><h4>5</h4>' +
        '</td>' +
        '<td><h4>3</h4>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><h4><b>+</b></h4>' +
        '</td>' +
        '<td><h4>2</h4>' +
        '</td>' +
        '<td><h4>3</h4>' +
        '</td>' +
        '<td><h4>4</h4>' +
        '</td>' +
        '</tr>' +
        '<tr style="border-top:2px solid #303F9F">' +
        '<td></td>' +
        '<td><b>8</b></td>' +
        '<td><b>9</b></td>' +
        '<td><b>7</b></td>' +
        '</tr>' +
        '</table>',
        '<input type="checkbox" class="p1sel3" name="check" onclick="onlyOne(this)" style="zoom: 5;">' +
        '<table  class="table">' +
        '<tr>' +
        '<td></td>' +
        '<td><h4>6</h4>' +
        '</td>' +
        '<td><h4>5</h4>' +
        '</td>' +
        '<td><h4>3</h4>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><h4><b>+</b></h4>' +
        '</td>' +
        '<td><h4>2</h4>' +
        '</td>' +
        '<td><h4>3</h4>' +
        '</td>' +
        '<td><h4>4</h4>' +
        '</td>' +
        '</tr>' +
        '<tr style="border-top:2px solid #303F9F">' +
        '<td></td>' +
        '<td><b>8</b></td>' +
        '<td><b>7</b></td>' +
        '<td><b>7</b></td>' +
        '</tr>' +
        '</table>' 
    ];
    p2vec1.sort(f_randomico);
    $('#p2im1').html(p2vec1[0]);
    $('#p2im2').html(p2vec1[1]);
    $('#p2im3').html(p2vec1[2]);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var nlrd1 = $('#nlrd6').val() + $('#nlrd7').val() + $('#nlrd8').val();
        var nlrd2 = $('#nlrd10').val() + $('#nlrd11').val() + $('#nlrd12').val();
        var nlrd3 = $('#nlrd16').val() + $('#nlrd17').val() + $('#nlrd18').val();
        var nlrd4 = $('#nlrd26').val() + $('#nlrd27').val() + $('#nlrd28').val();
        var nlrd5 = $('#nlrd30').val() + $('#nlrd31').val() + $('#nlrd32').val();
        var nlrd6 = $('#nlrd36').val() + $('#nlrd37').val() + $('#nlrd38').val();
        var nlrd7 = $('#nlrd46').val() + $('#nlrd47').val() + $('#nlrd48').val();
        var nlrd8 = $('#nlrd50').val() + $('#nlrd51').val() + $('#nlrd52').val();
        var nlrd9 = $('#nlrd56').val() + $('#nlrd57').val() + $('#nlrd58').val();
        var nlrd10 = $('#nlrd66').val() + $('#nlrd67').val() + $('#nlrd68').val();
        var nlrd11 = $('#nlrd70').val() + $('#nlrd71').val() + $('#nlrd72').val();
        var nlrd12 = $('#nlrd76').val() + $('#nlrd77').val() + $('#nlrd78').val();
        var p1cont1 = 0;
        if (nlrd1 == (p1vec1[5] + p1vec1[3])) {
            p1cont1++;
            f_ok($('#nlrd6'));
            f_ok($('#nlrd7'));
            f_ok($('#nlrd8'));
        } else {
            p1cont1;
            f_no($('#nlrd6'));
            f_no($('#nlrd7'));
            f_no($('#nlrd8'));
        }
        if (nlrd2 == (p1vec1[5] + p1vec1[3])) {
            p1cont1++;
            f_ok($('#nlrd10'));
            f_ok($('#nlrd11'));
            f_ok($('#nlrd12'));
        } else {
            p1cont1;
            f_no($('#nlrd10'));
            f_no($('#nlrd11'));
            f_no($('#nlrd12'));
        }
        if (nlrd3 == (p1vec1[5])) {
            p1cont1++;
            f_ok($('#nlrd16'));
            f_ok($('#nlrd17'));
            f_ok($('#nlrd18'));
        } else {
            p1cont1;
            f_no($('#nlrd16'));
            f_no($('#nlrd17'));
            f_no($('#nlrd18'));
        }
        if (nlrd4 == (p1vec1[7] - p1vec1[1])) {
            p1cont1++;
            f_ok($('#nlrd26'));
            f_ok($('#nlrd27'));
            f_ok($('#nlrd28'));
        } else {
            p1cont1;
            f_no($('#nlrd26'));
            f_no($('#nlrd27'));
            f_no($('#nlrd28'));
        }
        if (nlrd5 == (p1vec1[7] - p1vec1[1])) {
            p1cont1++;
            f_ok($('#nlrd30'));
            f_ok($('#nlrd31'));
            f_ok($('#nlrd32'));
        } else {
            p1cont1;
            f_no($('#nlrd30'));
            f_no($('#nlrd31'));
            f_no($('#nlrd32'));
        }
        if (nlrd6 == (p1vec1[7])) {
            p1cont1++;
            f_ok($('#nlrd36'));
            f_ok($('#nlrd37'));
            f_ok($('#nlrd38'));
        } else {
            p1cont1;
            f_no($('#nlrd36'));
            f_no($('#nlrd37'));
            f_no($('#nlrd38'));
        }

        if (nlrd7 == (p1vec1[4] + p1vec1[2])) {
            p1cont1++;
            f_ok($('#nlrd46'));
            f_ok($('#nlrd47'));
            f_ok($('#nlrd48'));
        } else {
            p1cont1;
            f_no($('#nlrd46'));
            f_no($('#nlrd47'));
            f_no($('#nlrd48'));
        }
        if (nlrd8 == (p1vec1[4] + p1vec1[2])) {
            p1cont1++;
            f_ok($('#nlrd50'));
            f_ok($('#nlrd51'));
            f_ok($('#nlrd52'));
        } else {
            p1cont1;
            f_no($('#nlrd50'));
            f_no($('#nlrd51'));
            f_no($('#nlrd52'));
        }
        if (nlrd9 == (p1vec1[4])) {
            p1cont1++;
            f_ok($('#nlrd56'));
            f_ok($('#nlrd57'));
            f_ok($('#nlrd58'));
        } else {
            p1cont1;
            f_no($('#nlrd56'));
            f_no($('#nlrd57'));
            f_no($('#nlrd58'));
        }
        if (nlrd10 == (p1vec1[6] - p1vec1[0])) {
            p1cont1++;
            f_ok($('#nlrd66'));
            f_ok($('#nlrd67'));
            f_ok($('#nlrd68'));
        } else {
            p1cont1;
            f_no($('#nlrd66'));
            f_no($('#nlrd67'));
            f_no($('#nlrd68'));
        }
        if (nlrd11 == (p1vec1[6] - p1vec1[0])) {
            p1cont1++;
            f_ok($('#nlrd70'));
            f_ok($('#nlrd71'));
            f_ok($('#nlrd72'));
        } else {
            p1cont1;
            f_no($('#nlrd70'));
            f_no($('#nlrd71'));
            f_no($('#nlrd72'));
        }
        if (nlrd12 == (p1vec1[6])) {
            p1cont1++;
            f_ok($('#nlrd76'));
            f_ok($('#nlrd77'));
            f_ok($('#nlrd78'));
        } else {
            p1cont1;
            f_no($('#nlrd76'));
            f_no($('#nlrd77'));
            f_no($('#nlrd78'));
        }
        var result1 = (p1cont1 * 5) / 12;
        cor = cor + result1;
        inc = inc + (5 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');
        var p2cont1=0;
        if ($('.p1sel2').is(':checked')) {
            p2cont1++;
            $('.p1sel2').addClass('valid');
        }else{
            p2cont1;
            $('.p1sel2').addClass('no-valid');
            $('.p1sel1').addClass('no-valid');
            $('.p1sel3').addClass('no-valid');
        }
        var result2 = (p2cont1 * 5) / 1;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}