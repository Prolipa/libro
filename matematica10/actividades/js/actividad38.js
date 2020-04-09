var titulos = 'aplico';
numero_pagina(29);

var act13 = [
    ['<table ><tr><td><img src="img/i4_p29_act4.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>'+
     '<td><label>√(</label><input type="text"   size="1" style="width:80px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="x"><label>)</label></td></tr></table>'
    ],
    ['<table ><tr><td><img src="img/i2_p29_act4.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>'+
    '<td><input type="text"   size="1" style="width:50px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3">'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="9"></sup><label>√(</label>'+
    '<input type="text"   size="1" style="width:80px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="4"><label>)</label></td></tr></table>'
    ],
    ['<table ><tr><td><img src="img/i2_p29_act4.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>'+
    '<td><label>√(</label><input type="text"   size="1" style="width:80px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="a"><label>)</label></td></tr></table>'
    ],
    ['<table ><tr><td><img src="img/i1_p29_act4.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>'+
    '<td><sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="12"></sup><label>√(</label>'+
    '<input type="text"   size="1" style="width:80px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"><label>)</label></td>'+
    '</tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}