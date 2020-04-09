var titulos = 'aplico';
numero_pagina(15);

var act13 = [
    ['<input type="text" size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="Ningún">'+
    '<label> número racional es irracional. </label>'
    ],
    ['<input type="text" size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="Todo"><label> número natural es entero. </label>'
    ],
    ['<input type="text" size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="Algún"><label> número entero es natural. </label>'
    ],
    ['<input type="text" size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="Todo"><label> número irracional es real. </label>'
    ]
];


var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}