var titulos = 'aplico';
numero_pagina(29);

var act13 = [
    ['<table class="table"><tr><td><label>(-2/5)</label><sup>3/4</sup>&nbsp;&nbsp;</td><td>'+
    '<sup><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="4"></sup>'+
    '<label>√</label><label>((</label>'+
    '<input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-2/5"><label>)</label>'+
    '<sup><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup><label>)</label></td></tr></table>'
    ],
    ['<table class="table"><tr><td><label>(-5)</label><sup>1/2</sup></td><td>'+
    '<sup><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"></sup>'+
    '<label>√</label><label>(</label><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-5"><label>)</label></td></tr></table>'
    ],
    ['<table class="table"><tr>'+
    '<td><label>(</label><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="x+3">'+
    '<label>)</label><sup><input type="text"   size="1" style="width:20px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="1/3"></sup></td><td>'+
    '<sup>3</sup><label>√(x+3)</label></td></tr></table>'
    ],
    ['<table class="table"><tr><td><label>(x+y)</label><sup>5/7</sup>&nbsp;&nbsp;&nbsp;</td>'+
    '<td><sup><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="7"></sup>'+
    '<label>√</label><label>((</label><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="x+y">'+
    '<label>)</label><sup><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="5"></sup><label>)</label></td></tr></table>'
    ],
    ['<table class="table"><tr><td><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="17">'+
    '<sup><input type="text"   size="1" style="width:20px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="1/2"></sup></td><td><label>√(17)</label></td></tr></table>'
    ],
    ['<table class="table"><tr><td><label>(5-a)</label><sup>2/3</sup>&nbsp;&nbsp;</td>'+
    '<td><sup><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup>'+
    '<label>√</label><label>(</label><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="5-a"><label>)</label>'+
    '<sup><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"></sup></td></tr></table>'
    ],
    ['<table class="table"><tr><td><label>(2/3)</label><sup>3/2</sup>&nbsp;&nbsp;</td>'+
    '<td><sup><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"></sup><label>√</label><label>(</label>'+
    '<input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2/3">'+
    '<label>)</label><sup><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup></td></tr></table>'
    ],
    ['<table class="table"><tr><td><label>2</label><sup>1/3</sup>&nbsp;&nbsp;&nbsp;</td>'+
    '<td><sup><input type="text"   size="1" style="width:20px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup><label>√</label> '+   
    '<label>(</label><input type="text"   size="1" style="width:30px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"><label>)</label></td></tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}