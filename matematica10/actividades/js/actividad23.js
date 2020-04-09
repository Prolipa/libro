var titulos = 'aplico';
numero_pagina(23);

var act13 = [
    ['<table><tr><td><label>Las piscinas deben tener una altura menor a 10 metros.</label></td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="x<10*x < 10"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><label>Una pelota de voleibol debe tener una masa no mayor a 280 gramos ni menor a 260 gramos.</label></td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="260≤x≤280*260 ≤ x ≤ 280"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><label>Debes medir 1 m o más para subir a este juego.</label></td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="x≥1*x ≥ 1"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><label>El pasaje cuesta de 12 a 25 centavos.</label></td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="12≤x≤25*12 ≤ x ≤ 25"></td>'+
    '</tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}
