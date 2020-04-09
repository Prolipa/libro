var titulos = 'aplico';
numero_pagina(21);

var act13 = [
    ['<img src="img/i1_p21_act1.jpg"><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="I">'
    ],
    ['<img src="img/i2_p21_act1.jpg"><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="I">'
    ],
    ['<label>-26</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="R">'
    ],
    ['<label>-1,4555....</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="I">'
    ],
    ['<label>5/π</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="I">'
    ],
    ['<label>5/4</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="R">'
    ],
    ['<label>-5</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="R">'],
    ['<label>17</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="R">'],
    ['<label>723/3</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="R">'],
    ['<label>3</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="R">'],
    ['<label>0/6</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="I">'],
    ['<label>-3,56π</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="I">'],
    ['<label>0π</label><input type="text"  size="1" style="width:70px" class="form-control border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="R">'],

];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}

