var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 6,
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
    var p1vec1=[(Math.floor(Math.random() * 400) + 100),(Math.floor(Math.random() * 400) + 100),(Math.floor(Math.random() * 400) + 100),(Math.floor(Math.random() * 400) + 100)];
    p1vec1.sort((a,b)=>a-b);
    $('#p1im1').text(p1vec1[3]);
    $('#p1im2').text(p1vec1[0]);
    $('#p1im3').text(p1vec1[2]);
    $('#p1im4').text(p1vec1[1]);
    var p1s1=p1vec1[3].toString().split('');
    $('#nlrd0').val(p1s1[0]);
    $('#nlrd0').attr('disabled', 'true');
    $('#nlrd1').val(p1s1[1]);
    $('#nlrd1').attr('disabled', 'true');
    $('#nlrd2').val(p1s1[2]);
    $('#nlrd2').attr('disabled', 'true');
    var p1s2=p1vec1[0].toString().split('');
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

    var p1s3=p1vec1[2].toString().split('');
    $('#nlrd20').val(p1s3[0]);
    $('#nlrd20').attr('disabled', 'true');
    $('#nlrd21').val(p1s3[1]);
    $('#nlrd21').attr('disabled', 'true');
    $('#nlrd22').val(p1s3[2]);
    $('#nlrd22').attr('disabled', 'true');
    var p1s4=p1vec1[1].toString().split('');
    $('#nlrd23').val(p1s4[0]);
    $('#nlrd23').attr('disabled', 'true');
    $('#nlrd24').val(p1s4[1]);
    $('#nlrd24').attr('disabled', 'true');
    $('#nlrd25').val(p1s4[2]);
    $('#nlrd25').attr('disabled', 'true');
    $('#nlrd33').val(p1s4[0]);
    $('#nlrd33').attr('disabled', 'true');
    $('#nlrd34').val(p1s4[1]);
    $('#nlrd34').attr('disabled', 'true');
    $('#nlrd35').val(p1s4[2]);
    $('#nlrd35').attr('disabled', 'true');
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var nlrd1=$('#nlrd6').val()+$('#nlrd7').val()+$('#nlrd8').val();
        var nlrd2=$('#nlrd10').val()+$('#nlrd11').val()+$('#nlrd12').val();
        var nlrd3=$('#nlrd16').val()+$('#nlrd17').val()+$('#nlrd18').val();
        var nlrd4=$('#nlrd26').val()+$('#nlrd27').val()+$('#nlrd28').val();
        var nlrd5=$('#nlrd30').val()+$('#nlrd31').val()+$('#nlrd32').val();
        var nlrd6=$('#nlrd36').val()+$('#nlrd37').val()+$('#nlrd38').val();
        if (nlrd1==(p1vec1[3]+p1vec1[0])) {
            cor++;
            f_ok($('#nlrd6'));
            f_ok($('#nlrd7'));
            f_ok($('#nlrd8'));
        }else{
            inc++;
            f_no($('#nlrd6'));
            f_no($('#nlrd7'));
            f_no($('#nlrd8'));
        }
        if (nlrd2==(p1vec1[3]+p1vec1[0])) {
            cor++;
            f_ok($('#nlrd10'));
            f_ok($('#nlrd11'));
            f_ok($('#nlrd12'));
        }else{
            inc++;
            f_no($('#nlrd10'));
            f_no($('#nlrd11'));
            f_no($('#nlrd12'));
        }
        if (nlrd3==(p1vec1[3])) {
            cor++;
            f_ok($('#nlrd16'));
            f_ok($('#nlrd17'));
            f_ok($('#nlrd18'));
        }else{
            inc++;
            f_no($('#nlrd16'));
            f_no($('#nlrd17'));
            f_no($('#nlrd18'));
        }
        if (nlrd4==(p1vec1[2]+p1vec1[1])) {
            cor++;
            f_ok($('#nlrd26'));
            f_ok($('#nlrd27'));
            f_ok($('#nlrd28'));
        }else{
            inc++;
            f_no($('#nlrd26'));
            f_no($('#nlrd27'));
            f_no($('#nlrd28'));
        }
        if (nlrd5==(p1vec1[2]+p1vec1[1])) {
            cor++;
            f_ok($('#nlrd30'));
            f_ok($('#nlrd31'));
            f_ok($('#nlrd32'));
        }else{
            inc++;
            f_no($('#nlrd30'));
            f_no($('#nlrd31'));
            f_no($('#nlrd32'));
        }
        if (nlrd6==(p1vec1[2])) {
            cor++;
            f_ok($('#nlrd36'));
            f_ok($('#nlrd37'));
            f_ok($('#nlrd38'));
        }else{
            inc++;
            f_no($('#nlrd36'));
            f_no($('#nlrd37'));
            f_no($('#nlrd38'));
        }
        Calculo_nota();
    }
}