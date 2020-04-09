var titulos = 'aplico';
numero_pagina(25);


var act13 = [
    ['<table class="table"><tr><td style="width:80px"><img src="img/i4_p25_act2.jpg"></td>'+
    '<td><label>=</label><input type="text"   size="1" style="width:100px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="1,40"><label>*10</label>'+
    '<sup><input type="text"   size="1" style="width:50px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-3"></sup></td></tr></table>'
    ],
    ['<table class="table"><tr><td style="width:80px"><img src="img/i2_p25_act2.jpg"></td>'+
    '<td><label>=</label><input type="text"   size="1" style="width:100px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="1,03"><label>*10</label>'+
    '<sup><input type="text"   size="1" style="width:50px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="-5"></sup></td></tr></table>'
    ],
    ['<table class="table"><tr><td style="width:80px"><img src="img/i3_p25_act2.jpg"></td>'+
    '<td><label>=</label><input type="text"   size="1" style="width:100px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2,00"><label>*10</label>'+
    '<sup><input type="text"   size="1" style="width:50px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></sup></td></tr></table>'
    ],
    
    ['<table class="table"><tr><td style="width:80px"><img src="img/i1_p25_act2.jpg"></td>'+
    '<td><label>=</label><input type="text"   size="1" style="width:80px" class="border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="6"><label>*10</label>'+
    '<sup><input type="text"   size="1" style="width:50px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="5"></sup></td></tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}