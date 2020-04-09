var titulos = 'aplico';
numero_pagina(23);

var act13 = [
    ['<table><tr><td><label>El tiempo que dura un partido de fútbol.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>'+
    '<td><input type="text" maxlength="1"  size="1" style="width:50px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="c"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><label>La distancia que recorre un atleta en una competencia.&nbsp;&nbsp;</label></td>'+
    '<td><input type="text" maxlength="1"  size="1" style="width:50px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="c"></td>'+
    '</tr></table>'
    ],
    [' <table><tr><td><label>El dinero que debe una persona al banco.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>'+
    '<td><input type="text" maxlength="1"  size="1" style="width:50px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="i"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><label>La temperatura en el Polo Norte.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td>'+
    '<td><input type="text" maxlength="1"  size="1" style="width:50px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="i"></td>'+
    '</tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}