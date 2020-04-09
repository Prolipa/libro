var titulos = 'aplico';
numero_pagina(29);

var act13 = [
    ['<table ><tr><td style="width:100px"><img src="img/i4_p29_act1.jpg"></td><td><label>=</label>'+
    '<input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="a">'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"></sup><label>√</label>'+
    '<label>(</label><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="33a"><label>)</label></td></tr></table>'
    ],
    ['<table ><tr><td style="width:100px"><img src="img/i3_p29_act1.jpg"></td><td><label>=</label>'+
    '<input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-2b">'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"></sup>'+
    '<label></label><sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="5"></sup><label>√</label><label>(</label>'+
    '<input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="a">'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup><label>)</label></td></tr></table>'
    ],
    ['<table ><tr><td style="width:100px"><img src="img/i2_p29_act1.jpg"></td><td><label>=</label>'+
    '<input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-2">'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup><label>√</label>'+
    '<label>(</label><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="5x">'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"></sup><label>)</label></td></tr></table>'
    ],
    ['<table ><tr><td style="width:100px"><img src="img/i1_p29_act1.jpg"></td><td><label>=</label>'+
    '<input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="6"><label>√</label>'+
    '<label>(</label>    <input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"><label>)</label></td></tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}