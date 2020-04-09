var titulos = 'aplico';
numero_pagina(31);

var act13 = 
[
    ['<table ><tr><td><input type="text" maxlength="1"  size="1" style="width:40px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="d"><label></td>'+
    '<td><img src="img/i15_p31_act4.jpg"></td></tr></table>'
    ],
    ['<table ><tr><td><input type="text" maxlength="1"  size="1" style="width:40px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="b"><label></td>'+
    '<td><img src="img/i17_p31_act4.jpg"></td></tr></table>'
    ],
    ['<table ><tr><td><input type="text" maxlength="1"  size="1" style="width:40px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="i"><label></td>'+
    '<td><img src="img/i20_p31_act4.jpg"></td></tr></table>'
    ],
    ['<table ><tr><td><input type="text" maxlength="1"  size="1" style="width:40px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="h"><label></td>'+
    '<td><img src="img/i16_p31_act4.jpg"></td></tr></table>'
    ],
    ['<table ><tr><td><input type="text" maxlength="1"  size="1" style="width:40px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="j"><label></td>'+
    '<td><img src="img/i14_p31_act4.jpg"></td></tr></table>'
    ],
    ['<table ><tr><td><input type="text" maxlength="1"  size="1" style="width:40px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="a"><label></td>'+
    '<td><img src="img/i19_p31_act4.jpg"></td></tr></table>'
    ],
    ['<table ><tr><td><input type="text" maxlength="1"  size="1" style="width:40px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="c"><label></td>'+
    '<td><img src="img/i13_p31_act4.jpg"></td></tr></table>'
    ],
    ['<table ><tr><td><input type="text" maxlength="1"  size="1" style="width:40px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="e"><label></td>'+
    '<td><img src="img/i11_p31_act4.jpg"></td></tr></table>'
    ],
    ['<table ><tr><td><input type="text" maxlength="1"  size="1" style="width:40px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="g"><label></td>'+
    '<td><img src="img/i18_p31_act4.jpg"></td></tr></table>'
    ],
    ['<table ><tr><td><input type="text" maxlength="1"  size="1" style="width:40px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="f"><label></td>'+
    '<td><img src="img/i12_p31_act4.jpg"></td></tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}