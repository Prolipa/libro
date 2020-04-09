var titulos = 'aplico';
numero_pagina(15);

var act13 = [
    ['<div class="col-lg-5"  ><label>0,54</label><label>=</label>'+
    '</div><div class="col-lg-1" class="left" ><table><tr>'+
    '<td><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="27">'+
    '</td></tr><tr><td class="numerador"></td></tr><tr>'+
    '<td ><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="50">'+
    '</td></tr></table></div>'
    ],
    ['<div class="col-lg-5"  ><label>-0,25</label><label>=</label></div><div class="col-lg-1" class="left" >'+
    '<table><tr><td><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="-1">'+
    '</td></tr><tr><td class="numerador"></td></tr><tr>'+
    '<td ><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="4">'+
    '</td></tr></table></div>'
    ],
    ['<div class="col-lg-5"  ><label>0,</label><label class="periodo">27</label><label>=</label></div>'+
    '<div class="col-lg-1" class="left" ><table><tr>'+
    '<td><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="3">'+
    '</td></tr><tr><td class="numerador"></td></tr><tr>'+
    '<td ><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="11">'+
    '</td></tr></table></div> '
    ],
    ['<div class="col-lg-5"  ><label>1,</label><label class="periodo">9</label><label>=</label>'+
    '</div><div class="col-lg-1" class="left"><table><tr>'+
    '<td><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="2">'+
    '</td></tr></table></div>'
    ],
    ['<div class="col-lg-5"><label>1,1</label><label class="periodo">3</label><label>=</label>'+
    '</div><div class="col-lg-1" class="left"><table><tr>'+
    '<td><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="17">'+
    '</td></tr><tr><td class="numerador"></td></tr><tr>'+
    '<td ><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="15">'+
    '</td></tr></table></div>'
    ],
    ['<div class="col-lg-5"  ><label>-3,5</label><label class="periodo">63</label><label>=</label>'+
    '</div><div class="col-lg-1" class="left" ><table><tr>'+
    '<td><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="-196">'+
    '</td></tr><tr><td class="numerador"></td></tr><tr>'+
    '<td ><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="55">'+
    '</td></tr></table></div>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}