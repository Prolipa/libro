var titulos = 'aplico';
numero_pagina(21);

var act13 = [
    ['<div class="col-lg-9"><span>El cero es un número entero, pero no racional.</span></div>'+
    '<div class="col-lg-3"><input type="text" maxlength="1"  size="1" style="width:70px" class="form-control'+
    ' border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="F"></div>'
    ],
    ['<div class="col-lg-9"><span>Todo número entero es natural.</span></div>'+
    '<div class="col-lg-3"><input type="text" maxlength="1" size="1" style="width:70px"'+
    'class="form-control border-blue respuestas"><input type="hidden" '+
    'style="color:blue" class="solucion" value="F"></div>'
    ],
    ['<div class="col-lg-9"><span>Todos los números primos son racionales.</span></div>'+
    '<div class="col-lg-3"><input type="text" maxlength="1" size="1" style="width:70px" '+
    'class="form-control border-blue respuestas"><input type="hidden" style="color:blue" '+
    'class="solucion" value="V"></div>'
    ],
    ['<div class="col-lg-9"><span>Los números enteros contienen a los racionales.</span></div>'+
    '<div class="col-lg-3"><input type="text" maxlength="1" size="1" style="width:70px" '+
    'class="form-control border-blue respuestas"><input type="hidden" style="color:blue" '+
    'class="solucion" value="F"></div>'
    ],
    ['<div class="col-lg-9"><span>Todo número natural es entero.</span></div>'+
    '<div class="col-lg-3"><input type="text" maxlength="1" size="1" style="width:70px" '+
    'class="form-control border-blue respuestas"><input type="hidden" '+
    'style="color:blue" class="solucion" value="V"></div>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}
