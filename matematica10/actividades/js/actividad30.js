var titulos = 'aplico';
numero_pagina(25);


var act13 = [
    ['<table class="table"><tr><td style="width:465px"><label>El peso de un átomo de hidrógeno es de 1,7 · 10<sup>-27</sup> kg.</label></td>'+
    '<td><label>=</label><input type="text"   size="1" style="width:230px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="0,00000000000000000000000000017">'+
    '</td></tr></table>'
    ],
    ['<table class="table"><tr><td style="width:465px"><label>El tamaño del átomo de hidrógeno es o 1 · 10<sup>-10</sup> m.</label></td>'+
    '<td><label>=</label><input type="text"   size="1" style="width:200px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="0,00000000001"><label>m</label>'+
    '</td></tr></table>'
    ],
    ['<table class="table"><tr><td style="width:465px"><label>El tamaño de un virus en la fiebre aftosa 2,7 · 10<sup>-8</sup> kg.</label></td>'+
    '<td><label>=</label><input type="text"   size="1" style="width:200px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="0,000000027"><label>m</label>'+
    '</td></tr></table>'
    ],
    
    ['<table class="table"><tr><td style="width:465px"><label>La distancia media de la Tierra al Sol es de 149 597 870 700 m.</label></td>'+
    '<td><label>=</label><input type="text"   size="1" style="width:100px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="1,50"><label>*10</label>'+
    '<sup><input type="text"   size="1" style="width:50px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="11"></sup><label>m</label></td>'+
    '</tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}