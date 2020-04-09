var titulos = 'aplico';
numero_pagina(13);


var act13 = [
    ['<table><div class="col-lg-3" ><label>1,2</label><label class="periodo">6</label><label>=</label>'+
    '</div><div class="col-lg-1" ><table><tr>'+
    '<td><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="19">'+
    '</td></tr><tr><td class="numerador"></td></tr><tr>'+
    '<td ><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="15">'+
    '</td></tr></table></div></table>'
    ],
    ['<table><div class="col-lg-3" ><label>1,</label><label class="periodo">22</label><label>=</label></div>'+
    '<div class="col-lg-1" ><table><tr><td><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="11">'+
    '</td></tr><tr><td class="numerador"></td></tr><tr>'+
    '<td ><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="9">'+
    '</td></tr></table></div></table>'
    ]  
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}

