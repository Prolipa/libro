var titulos = 'aplico';
numero_pagina(25);

var act13 = [
    ['<table class="table"><tr><td><label>602 300&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>'+
    '<td><input type="text"   size="1" style="width:100px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="6,02"><label>*10</label>'+
    '<sup><input type="text"   size="1" style="width:50px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="5"></sup></td>'+
    '</tr></table>'
    ],
    ['<table class="table"><tr><td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="0,009206"></td>'+
    '<td><label>9,21 * 10</label><sup><label>-3</label></sup></td></tr></table>'
    ],
    ['<table class="table"><tr><td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="800000000"></td>'+
    '<td><label>8,00 * 10</label><sup><label>8</label></sup></td>'+
    '</tr></table>'
    ],
    ['<table class="table"><tr><td><label>0,000 000 603&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>'+
    '<td><input type="text"   size="1" style="width:100px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="6,03"><label>*10</label>'+
    '<sup><input type="text"   size="1" style="width:50px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-7"></sup></td>'+
    '</tr></table>'
    ],
    ['<table class="table"><tr><td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="0,0102"></td>'+
    '<td><label>1,2 * 10</label><sup><label>-2</label></sup></td>'+
    '</tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}