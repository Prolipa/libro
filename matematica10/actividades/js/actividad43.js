var titulos = 'aplico';
numero_pagina(31);

var act13 = 
[
    ['<table ><tr><td><img src="img/i5_p31_act3.jpg"></td><td>'+
    '<label>(</label><input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-a"><label>)'+
    '<sup><input type="text"   size="1" style="width:15px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup>'+
    '</label><label>√(</label>'+
    '<input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="a"><label> / </label>'+
    '<input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="b">'+
    '<label>)</label></td></tr></table>'
    ],
    ['<table ><tr><td><img src="img/i6_p31_act3.jpg"></td><td>'+
    '<input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="0"><label>'+
    '</td></tr></table>'
    ],
    ['<table ><tr><td><img src="img/i4_p31_act3.jpg"></td><td>'+
    '<label>(</label><input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"><label>)'+
    '<sup><input type="text"   size="1" style="width:15px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup>'+
    '</label><label>√(</label>'+
    '<input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="4x">'+
    '<sup><input type="text"   size="1" style="width:15px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"></sup><label>)</label>'+
    '</td></tr></table>'
    ],
    ['<table ><tr><td><img src="img/i3_p31_act3.jpg"></td><td>'+
    '<label>(</label><input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"><label>)'+
    '<sup><input type="text"   size="1" style="width:15px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup>'+
    '</label><label>√(</label>'+
    '<input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"><label>)</label>'+
    '</td></tr></table>'
    ],
    ['<table ><tr><td><img src="img/i2_p31_act3.jpg"></td><td>'+
    '<label>(</label><input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"><label>)'+
    '</label><label>√(</label>'+
    '<input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"><label>)</label>'+
    '</td></tr></table>   '
    ],
    ['<table ><tr><td><img src="img/i1_p31_act3.jpg"></td><td>'+
    '<label>(</label><input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"><label>)'+
    '<sup><input type="text"   size="1" style="width:15px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup>'+
    '</label><label>√(</label>'+
    '<input type="text"   size="1" style="width:40px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="5"><label>)</label>'+
    '</td></tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}