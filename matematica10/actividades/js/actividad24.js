var titulos = 'aplico';
numero_pagina(23);

var act13 = [
    ['<table><tr><td><img src="img/i2_p23_act2.jpg"></td>'+
    '<td>&nbsp;&nbsp;<input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="x≥8*[8;+∞)"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><img src="img/i3_p23_act2.jpg"></td>'+
    '<td>&nbsp;&nbsp;<input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="x<−12*(−∞;−12)"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><img src="img/i1_p23_act2.jpg"></td>'+
    '<td>&nbsp;&nbsp;<input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="−1<x<5*(−1;5)"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><img src="img/i4_p23_act2.jpg"></td>'+
    '<td>&nbsp;&nbsp;<input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="6≤x<16*[6;16)"></td>'+
    '</tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}