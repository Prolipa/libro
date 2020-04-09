var titulos = 'reflexiono';
numero_pagina(24);

var act13 = [
    ['<table><tr><td><label>0,000 000 000 068 995 600 095 500 =&nbsp;&nbsp</label></td>'+
    '<td><input type="text"   size="1" style="width:50px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="6,90"><label>*10</label>'+
    '<sup><input type="text"   size="1" style="width:50px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-11"></sup></td>'+
    '</tr></table>'
    ],
    
    ['<table><tr><td><label>78 560 000 000 000 000 =&nbsp;&nbsp</label></td>'+
    '<td><input type="text"   size="1" style="width:50px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="7,86"><label>*10</label>'+
    '<sup><input type="text"   size="1" style="width:50px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="16"></sup></td>'+
    '</tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}