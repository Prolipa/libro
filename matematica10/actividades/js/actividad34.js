var titulos = 'aplico';
numero_pagina(27);

var act13 = [
    ['<table ><tr><td style="width:100px"><img src="img/i3_p27_act3.jpg"></td><td>'+
    '<input type="text" maxlength="2"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="4"></td></tr></table>'
    ],
    ['<table ><tr><td style="width:100px"><img src="img/i2_p27_act3.jpg"></td><td>'+
    '<input type="text" maxlength="2" size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="no"></td></tr></table>'
    ],
    ['<table><tr><td style="width:100px"><img src="img/i4_p27_act3.jpg"></td><td>'+
    '<input type="text" maxlength="2"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="6"></td></tr></table>'
    ],
    ['<table ><tr><td style="width:100px"><img src="img/i1_p27_act3.jpg"></td><td>'+
    '<input type="text" maxlength="2"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="no"></td></tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}