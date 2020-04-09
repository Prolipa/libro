var titulos = "preparo";
numero_pagina(256);
var cor = 0;
cont = 0,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;

// #region Pregunta1

function pregunta1() {
    var cor = 0;
    var p1vec1 = ['2,4', '2,12', '2,16', '2,20', '6,4', '6,12', '6,16', '6,20', '8,4', '8,12', '8,16', '8,20', '10,4', '10,12', '10,16', '10,20'];
    var p1res1 = [];
    for (var i = 0; i < 16; i++) {
        p1res1.push($('#p1dcon' + (i + 1)).val() +
            ',' + $('#p1dco' + (i + 1)).val());
    }
    for (var i = 0; i < 16; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 16; j++) {
            if (p1res1[i] == p1vec1[j]) {
                p1cont1++;
                p1vec1[j] == 'a';
            } else { p1cont1; }
        }
        if (p1cont1 == '1') {
            cor++;
            f_ok($('#p1dcon' + (i + 1)));
            f_ok($('#p1dco' + (i + 1)));
        } else {
            f_no($('#p1dcon' + (i + 1)));
            f_no($('#p1dco' +
                (i + 1)));
        }
    }

    var p2vec1 = ['2,4', '6,12', '8,16', '10,20'];
    var p2res1 = [];
    for (var i = 0; i < 4; i++) {
        p2res1.push($('#p2dcon' + (i + 1)).val() +
            ',' + $('#p2dco' + (i + 1)).val());
    }
    for (var i = 0; i < 4; i++) {
        var p2cont1 = 0;
        for (var j = 0; j < 4; j++) {
            if (p2res1[i] == p2vec1[j]) {
                p2cont1++;
                p2vec1[j] == 'a';
            } else { p2cont1; }
        }
        if (p2cont1 == '1') {
            cor++;
            f_ok($('#p2dcon' + (i + 1)));
            f_ok($('#p2dco' + (i + 1)));
        } else {
            f_no($('#p2dcon' + (i + 1)));
            f_no($('#p2dco' +
                (i + 1)));
        }
    }
    var res = ((cor * 1) / 20);
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

p2vec1 = [
    '<li class="col-sm-6"><div class="table-responsive">                            <div class="col-sm-12" style="width: 400px;height: 300px; ">                                <div class="col-sm-6">                                    <table class="table-bordered">                                        <tr>                                            <td>8</td>                                            <td>6</td>                                            <td>4</td>                                            <td></td>                                            <td></td>                                            <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">8</td>                                            <td style="border-bottom:2px solid #000000;"></td>                                            <td style="border-bottom:2px solid #000000;"></td>                                            <td style="border-bottom:2px solid #000000;"></td>                                        </tr>                                        <tr>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6">                                            </td>                                            <td>                                                 </td> <td>                                            </td>                                            <td></td>                                            <td style="border-left: 2px solid #000000;">                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6">                                            </td>                                            <td>                                            </td>                                            <td></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"></td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4">                                            </td>                                            <td>                                                                                            </td>                                            <td>                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                            <td></td>                                            <td></td>                                            <td></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td>                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0">                                            </td>                                            <td>                                                                                            </td>                                            <td>                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                            <td></td>                                            <td></td>                                            <td></td>                                        </tr>                                    </table>                                </div>                                <div class="col-sm-6">                                    <center><span style="color: #0067B4"><b>Comprobación</b></span></center>                                    <table style="text-align: center" class="table">                                        <tr>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"></td>                                        </tr>                                        <tr>                                            <td><span style="color: #4293BB">x</span></td>                                            <td></td>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td>                                        </tr>                                        <tr>                                            <td style="border-top:solid 2px"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td>                                        </tr>                                    </table>                                </div>                            </div>                        </div></li>',
    '<li class="col-sm-6"><div class="table-responsive">                            <div class="col-sm-12" style="width: 400px;height: 300px; ">                                <div class="col-sm-6">                                    <table class="table-bordered">                                        <tr>                                            <td>7</td>                                            <td>4</td>                                            <td>2</td>                                            <td></td>                                            <td></td>                                            <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">5</td>                                            <td style="border-bottom:2px solid #000000;"></td>                                            <td style="border-bottom:2px solid #000000;"></td>                                            <td style="border-bottom:2px solid #000000;"></td>                                        </tr>                                        <tr>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4">                                            </td>                                            <td>                                                 </td> <td>                                            </td>                                            <td></td>                                            <td style="border-left: 2px solid #000000;">                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8">                                            </td>                                            <td>                                            </td>                                            <td></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2">                                            </td>                                            <td>                                                                                            </td>                                            <td>                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                            <td></td>                                            <td></td>                                            <td></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td>                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2">                                            </td>                                            <td>                                                                                            </td>                                            <td>                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                            <td></td>                                            <td></td>                                            <td></td>                                        </tr>                                    </table>                                </div>                                <div class="col-sm-6">                                    <center><span style="color: #0067B4"><b>Comprobación</b></span></center>                                    <table style="text-align: center" class="table">                                        <tr>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"></td>                                        </tr>                                        <tr>                                            <td><span style="color: #4293BB">x</span></td>                                            <td></td>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"></td>                                        </tr>                                        <tr>                                            <td style="border-top:solid 2px"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"></td>                                        </tr>                                        <tr>                                            <td><span style="color: #4293BB">+</span></td>                                            <td></td>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"></td>                                        </tr>                                        <tr>                                            <td style="border-top:solid 2px"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"></td>                                        </tr>                                    </table>                                </div>                            </div>                        </div></li>',
    '<li class="col-sm-6"><div class="table-responsive">                            <div class="col-sm-12" style="width: 400px;height: 300px; ">                                <div class="col-sm-6">                                    <table class="table-bordered">                                        <tr>                                            <td>9</td>                                            <td>1</td>                                            <td>8</td>                                            <td></td>                                            <td></td>                                            <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">6</td>                                            <td style="border-bottom:2px solid #000000;"></td>                                            <td style="border-bottom:2px solid #000000;"></td>                                            <td style="border-bottom:2px solid #000000;"></td>                                        </tr>                                        <tr>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1">                                            </td>                                            <td>                                                 </td> <td>                                            </td>                                            <td></td>                                            <td style="border-left: 2px solid #000000;">                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3">                                            </td>                                            <td>                                            </td>                                            <td></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"></td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8">                                            </td>                                            <td>                                                                                            </td>                                            <td>                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                            <td></td>                                            <td></td>                                            <td></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0">                                            </td>                                            <td>                                                                                            </td>                                            <td>                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                            <td></td>                                            <td></td>                                            <td></td>                                        </tr>                                    </table>                                </div>                                <div class="col-sm-6">                                    <center><span style="color: #0067B4"><b>Comprobación</b></span></center>                                    <table style="text-align: center" class="table">                                        <tr>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"></td>                                        </tr>                                        <tr>                                            <td><span style="color: #4293BB">x</span></td>                                            <td></td>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"></td>                                        </tr>                                        <tr>                                            <td style="border-top:solid 2px"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"></td>                                        </tr>                                    </table>                                </div>                            </div>                        </div></li>',
    '<li class="col-sm-6"><div class="table-responsive">                            <div class="col-sm-12" style="width: 400px;height: 300px; ">                                <div class="col-sm-6">                                    <table class="table-bordered">                                        <tr>                                            <td>8</td>                                            <td>9</td>                                            <td>7</td>                                            <td></td>                                            <td></td>                                            <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">7</td>                                            <td style="border-bottom:2px solid #000000;"></td>                                            <td style="border-bottom:2px solid #000000;"></td>                                            <td style="border-bottom:2px solid #000000;"></td>                                        </tr>                                        <tr>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9">                                            </td>                                            <td>                                                 </td> <td>                                            </td>                                            <td></td>                                            <td style="border-left: 2px solid #000000;">                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8">                                            </td>                                            <td>                                            </td>                                            <td></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"></td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7">                                            </td>                                            <td>                                                                                            </td>                                            <td>                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                            <td></td>                                            <td></td>                                            <td></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0">                                            </td>                                            <td>                                                <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1">                                            </td>                                            <td>                                                                                            </td>                                            <td>                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                            <td></td>                                            <td></td>                                            <td></td>                                        </tr>                                    </table>                                </div>                                <div class="col-sm-6">                                    <center><span style="color: #0067B4"><b>Comprobación</b></span></center>                                    <table style="text-align: center" class="table">                                        <tr>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"></td>                                        </tr>                                        <tr>                                            <td><span style="color: #4293BB">x</span></td>                                            <td></td>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7"></td>                                        </tr>                                        <tr>                                            <td style="border-top:solid 2px"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"></td>                                        </tr>                                        <tr>                                            <td><span style="color: #4293BB">+</span></td>                                            <td></td>                                            <td></td>                                            <td><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"></td>                                        </tr>                                        <tr>                                            <td style="border-top:solid 2px"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9"></td>                                            <td style="border-top:solid 2px"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border:solid 2px orange;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7"></td>                                        </tr>                                    </table>                                </div>                            </div>                        </div></li>'
];
p2vec1.sort(f_randomico);
$('#li2').html(p2vec1);

function pregunta2() {
    var respuestas = document.getElementsByClassName("respuestas2");
    var soluciones = document.getElementsByClassName("solucion2");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre2 = ((nota / 10) * 4);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3

p3vec1 = [
    '<li class="col-sm-3">                            <div class="table-responsive"><span style="background: #FFD48D;border-radius: 10px;padding: auto">720 ÷ 9</span> =<input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="80"><br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div class="table-responsive"><span style="background: #72CEE0;border-radius: 10px;padding: auto">5 x 20</span> =<input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="100"><br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div class="table-responsive"><span style="background: #CDB3D6;border-radius: 10px;padding: auto">10 x 6</span> =<input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="60"><br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div class="table-responsive"><span style="background: #FBBEAC;border-radius: 10px;padding: auto">45 ÷ 5</span> =<input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="9"><br><br></div>                        </li>'
];
p3vec1.sort(f_randomico);
$('#li3').html(p3vec1);

function pregunta3() {
    var respuestas = document.getElementsByClassName("respuestas3");
    var soluciones = document.getElementsByClassName("solucion3");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre3 = ((nota / 10) * 1);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4

function pregunta4() {
    var respuestas = document.getElementsByClassName("respuestas4");
    var soluciones = document.getElementsByClassName("solucion4");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre4 = ((nota / 10) * 1);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
p5vec1 = [
    '<li class="col-sm-3">                            <div clas="table-responsive"> 4 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="40"> dl <br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div clas="table-responsive"> 9 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="900"> cl <br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div clas="table-responsive"> 3 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="30"> dl <br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div clas="table-responsive"> 5 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="5000"> ml <br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div clas="table-responsive"> 3 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="3000"> ml <br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div clas="table-responsive"> 7 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="70"> dl <br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div clas="table-responsive"> 8 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="800"> dl <br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div clas="table-responsive"> 15 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="150"> dl <br><br></div>                        </li>'
];
p5vec1.sort(f_randomico);
$('#li5').html(p5vec1);

function pregunta5() {
    var respuestas = document.getElementsByClassName("respuestas5");
    var soluciones = document.getElementsByClassName("solucion5");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre5 = ((nota / 10) * 1);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
var vec1 = [
    ["1", "img/i1_p256_act6.jpg"],
    ["2", "img/i2_p256_act6.jpg"],
    ["3", "img/i3_p256_act6.jpg"],
    ["4", "img/i4_p256_act6.jpg"]
]

var res1 = [
    ["img/i1_p256_act6.jpg"]
]
var random3 = document.getElementsByClassName('imagen');

vec1.sort(f_randomico);
for (i = 0; i < random3.length; i++) {
    $('#' + random3[i].id).html('<img id=' + vec1[i][1] + ' style="mix-blend-mode: multiply;" class=" imgAcom" src="' + vec1[i][1] + '">');
}

$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});

function pregunta6() {
    var corr = 0;
    var inco = 0;
    for (var i = 1; i < 5; i++) {
        var acu = 0;
        if ($("#caja_img" + [i] + "").hasClass("seleccionCaja")) {
            var caja = $("div[id=caja_img" + [i] + "").find('img')[0].id;

            for (var j = 0; j < 5; j++) {
                if (caja == res1[j]) {
                    acu++;
                } else {
                    acu;
                }
            }
            if (acu == 1) {
                corr++;
                $("#caja_img" + [i] + "").addClass('correctoi')
            } else {
                inco++;
                $("#caja_img" + [i] + "").removeClass('correctoi')
                $("#caja_img" + [i] + "").addClass('incorrectoi')
            }
        }
    }
    if (corr < inco) {
        var total = 0;
    } else {
        var total = ((corr - inco) * 1) / 1;
    }
    tpre6 = total.toFixed(2);
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7

function pregunta7() {
    var p7vec1 = ['Manzana,leche', 'manzana,yogur', 'manzana,jugo', 'pera,leche', 'pera,yogur', 'pera,jugo', 'uvas,leche', 'uvas,yogur', 'uvas,jugo'];
    var p7res1 = [];
    for (var i = 0; i < 9; i++) {
        p7res1.push($('#p7dcon' + (i + 1)).val() +
            ',' + $('#p7dco' + (i + 1)).val());
    }
    for (var i = 0; i < 9; i++) {
        var p7cont1 = 0;
        for (var j = 0; j < 9; j++) {
            if (p7res1[i] == p7vec1[j]) {
                p7cont1++;
                p7vec1[j] == 'a';
            } else { p7cont1; }
        }
        if (p7cont1 == '1') {
            cor++;
            f_ok($('#p7dcon' + (i + 1)));
            f_ok($('#p7dco' + (i + 1)));
        } else {
            f_no($('#p7dcon' + (i + 1)));
            f_no($('#p7dco' +
                (i + 1)));
        }
    }
    var res = ((cor * 1) / 9);
    tpre7 = parseFloat(res);
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    cor =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4) +
        parseFloat(tpre5) +
        parseFloat(tpre6) +
        parseFloat(tpre7);
    Calculo_nota();
}

// #endregion