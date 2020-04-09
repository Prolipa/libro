// #region Random1
var random1 = [
    [
        '<h4><font color="purple">36 - 16</font></h4><div class="col-lg-4"><h4><b>40 - 20 = <input type="text" size="1"  style="width:50px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="20"></b></h4></div><div class="col-lg-4"><h4><b>9 - 6 = <input type="text" size="1"  style="width:50px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="3"></b></h4></div><div class="col-lg-4"><h4><b>20 + 3 = <input type="text" size="1"  style="width:50px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="23"></b></h4></div>'
    ],
    [
        '<h4><font color="green">74 - 23</font></h4><div class="col-lg-4"><h4><b>70 - 20 = <input type="text" size="1"  style="width:50px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="50"></b></h4></div><div class="col-lg-4"><h4><b>4 - 3 = <input type="text" size="1"  style="width:50px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="1"></b></h4></div><div class="col-lg-4"><h4><b>50 - 1 = <input type="text" size="1"  style="width:50px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="49"></b></h4></div>'
    ]
];

var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
        '<span width="50px">' + random1[i][0] + "</span> "
    );
}
// #endregion