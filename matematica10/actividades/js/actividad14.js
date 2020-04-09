var titulos = 'aplico';
numero_pagina(19);

var act13 = [
    ['<table class="table"><tr><td style="width:250px;"><img src="img/i3_p19_act1.jpg"></td>'+
    '<td style="width:25px;"><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="√13"></td>'+
    '<td style="width:25px;"><label>&nbsp;<&nbsp;</label></td>'+
    '<td style="width:25px;"><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="√24"></td>'+
    '<td style="width:25px;"><label>&nbsp;<&nbsp;</label></td>'+
    '<td ><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="√25"></td>'+
    '</tr></table>'
    ],
    ['<table class="table"><tr><td style="width:250px;"><img src="img/i1_p19_act1.jpg"></td>'+
    '<td style="width:25px;"><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="√3"></td>'+
    '<td style="width:25px;"><label>&nbsp;<&nbsp;</label></td>'+
    '<td style="width:25px;"><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="√19"></td>'+
    '<td style="width:25px;"><label>&nbsp;<&nbsp;</label></td>'+
    '<td ><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="√30"></td>'+
    '</tr></table>'
    ],
    ['<table class="table"><tr><td style="width:250px;"><img src="img/i2_p19_act1.jpg"></td>'+
    '<td style="width:25px;"><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="√5"></td>'+
    '<td style="width:25px;"><label>&nbsp;<&nbsp;</label></td>'+
    '<td style="width:25px;"><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="√21"></td>'+
    '<td style="width:25px;"><label>&nbsp;<&nbsp;</label></td>'+
    '<td ><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="√31"></td>'+
    '</tr></table>'
    ],
    ['<table class="table"><tr><td style="width:250px;"><img src="img/i4_p19_act1.jpg"></td>'+
    '<td style="width:25px;"><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="2√23"></td>'+
    '<td style="width:25px;"><label>&nbsp;<&nbsp;</label></td>'+
    '<td style="width:25px;"><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="3√22"></td>'+
    '<td style="width:25px;"><label>&nbsp;<&nbsp;</label></td>'+
    '<td ><input type="text"  size="1" style="width:100px" class="form-control border-blue respuestas" value="√"><input type="hidden" style="color:blue" class="solucion" value="4√21"></td>'+
    '</tr></table>'
]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}

