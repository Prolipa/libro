var titulos = 'aplico';
numero_pagina(27);

var act13 = [
    ['<table ><tr><td style="width:100px"><img src="img/i5_p27_act1.jpg"></td><td><label>=</label>'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="b"></sup><label>√</label>'+
    '<label>(</label><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="x"><label>/</label>'+
    '<input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="y"><label>)</label>'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2a"></sup></td><td></td></tr></table>'
    ],
    ['<table ><tr><td style="width:100px"><img src="img/i2_p27_act1.jpg"></td><td><label>=</label>'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup><label>√</label><label>(</label>'+
    '<input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="5"><label>)</label></td><td></td></tr></table>'
    ],
    ['<table ><tr><td style="width:100px"><img src="img/i1_p27_act1.jpg"></td><td><label>=</label>'+
    '<input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-">'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="7"></sup><label>√</label>'+
    '<label>(</label><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="80"><label>)</label>'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="8"></sup></td><td></td></tr></table>'
    ],
    
    ['<table ><tr><td style="width:100px"><img src="img/i3_p27_act1.jpg"></td><td><label>=</label>'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="x"></sup><label>√</label>'+
    '<label>(</label><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="10"><label>)</label>'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-y"></sup></td><td></td></tr></table>'
    ],
    ['<table ><tr><td style="width:100px"><img src="img/i4_p27_act1.jpg"></td><td><label>=</label>'+
    '<sup><input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="5"></sup><label>√</label>'+
    '<label>(</label>'+
    '<input type="text"   size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="27"><label>)</label></td><td></td></tr></table>'

    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}