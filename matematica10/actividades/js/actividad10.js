var titulos = 'aplico';
numero_pagina(15);

var act13 = [
    ['<div class="col-lg-4"><img src="img/i2_p15_act8.jpg"></div><div class="col-lg-1" class="left" ><table><tr>'+
    '<tr><td ><br><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="0,34">'+
    '</td></tr></table></div>'
    ],
    ['<div class="col-lg-4"><img src="img/i1_p15_act8.jpg"></div><div class="col-lg-1" class="left" ><table><tr>'+
    '<tr><td ><br><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="2,03">'+
    '</td></tr></table></div>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}

