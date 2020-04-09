var titulos = 'aplico';
numero_pagina(21);

var act13 = 
[
    ['<table><td><img src="img/i2_p23_act3.jpg"></td><td><label><label>=></label>'+
    '<input type="text" maxlength="1" size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="4"><label>;</label>'+
    '<input type="text" maxlength="1"  size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="1"><label>;</label>'+
    '<input type="text" maxlength="1"  size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"><label>;</label>'+
    '<input type="text" maxlength="1"  size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"></label></td></table>'
    ],
    ['<table><td><img src="img/i1_p23_act3.jpg"></td><td><label><label>=></label>'+
    '<input type="text" maxlength="1" size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"><label>;</label>'+
    '<input type="text" maxlength="1"  size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="4"><label>;</label>'+
    '<input type="text" maxlength="1"  size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="1"><label>;</label>'+
    '<input type="text" maxlength="1"  size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"></label></td></table>'
    ],
    ['<table><td><img src="img/i3_p23_act3.jpg"></td><td><label><label>=></label>'+
    '<input type="text" maxlength="1" size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="3"><label>;</label>'+
    '<input type="text" maxlength="1"  size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="4"><label>;</label>'+
    '<input type="text" maxlength="1"  size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="1"><label>;</label>'+
    '<input type="text" maxlength="1"  size="1" style="width:30px" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"></label></td></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}