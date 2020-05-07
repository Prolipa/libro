var titulos = "exploro";
$("#txtNota").html("0/10");
$("#n_pagina").html("144");

var tpre3 = 0;

function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    return tecla != 32;
}

// #region Pregunta3
ramdon1=[
'<tr><td>viaje</td><td><input id="p1aux0" style="width: 190px"  onkeypress="return validar(event)"></td><td>fauna</td><td><input id="p1aux1" style="width: 190px"  onkeypress="return validar(event)"></td><td>cielo</td><td><input id="p1aux2" style="width: 190px"  onkeypress="return validar(event)"></td></tr>',
'<tr><td>ensueño</td><td><input id="p1aux3" style="width: 190px"  onkeypress="return validar(event)"></td><td>impresionante</td><td><input id="p1aux4" style="width: 190px"  onkeypress="return validar(event)"></td><td>Muisne</td><td><input id="p1aux5" style="width: 190px"  onkeypress="return validar(event)"></td></tr>',
'<tr><td>Oriente</td><td><input id="p1aux6" style="width: 190px"  onkeypress="return validar(event)"></td><td>tierra</td><td><input id="p1aux7" style="width: 190px"  onkeypress="return validar(event)"></td><td>fiestas</td><td><input id="p1aux8" style="width: 190px"  onkeypress="return validar(event)"> </td></tr>',
'<tr><td>aire</td><td><input id="p1aux9" style="width: 190px"  onkeypress="return validar(event)"></td><td>servicio</td><td><input id="p1aux10" style="width: 190px"  onkeypress="return validar(event)"></td><td>ruido</td><td><input id="p1aux11" style="width: 190px"  onkeypress="return validar(event)"></td></tr>'
];
ramdon1.sort(f_randomico);
$('#tab1').html(ramdon1);
function pregunta3() {
    var corr=0;
    vecp1 = [
        'via-je',
        'fau-na',
        'cie-lo',
        'en-sue-ño',
        'im-pre-sio-nan-te',
        'Muis-ne',
        'O-rien-te',
        'tie-rra',
        'fies-tas',
        'ai-re',
        'ser-vi-cio',
        'rui-do'
    ];

    for (var i = 0; i < 12; i++) {
        var res = ($("#p1aux" + [i] + "").val());
        if(res==(vecp1[i]))
        {
            f_ok($('#p1aux'+[i]+''));
            corr++;
        }
        else
        {
            corr;
            f_no($('#p1aux'+[i]+''));
        }
    }
    var res = (corr * 10) / 12;
    tpre3 = parseFloat(res);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}


// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    pregunta3();
    var Nf = parseFloat(tpre3);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}

// #endregion