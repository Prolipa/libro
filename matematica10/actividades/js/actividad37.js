var titulos = 'aplico';
numero_pagina(29);

var act13 = [
    ['<table ><tr><td><img src="img/i3_p29_act3.jpg">&nbsp;&nbsp;&nbsp;</td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-128"></td></tr></table>'
    ],
    ['<table ><tr><td><img src="img/i1_p29_act3.jpg">&nbsp;&nbsp;&nbsp;</td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></td>'+
    '</tr></table>'
    ],
    ['<table ><tr><td><img src="img/i3_p29_act3.jpg">&nbsp;&nbsp;&nbsp;</td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="81"></td></tr></table>'
    ],
    ['<table ><tr><td><img src="img/i2_p29_act3.jpg">&nbsp;&nbsp;&nbsp;</td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-250"></td></tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}