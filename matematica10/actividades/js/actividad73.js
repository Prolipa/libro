var titulos = "aplico";
numero_pagina(76);

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 10);
  });

  
var random1 = [
  [
    '<img src="img/i3_p76_act2.jpg" class="img-responsive"><br>' +
      '<textarea class="form-control text-question no-redimensionar " cols="60" rows="1"></textarea>'
  ],
  [
    '<img src="img/i5_p76_act2.jpg" class="img-responsive"><br>' +
      '<textarea class="form-control text-question no-redimensionar " cols="60" rows="1"></textarea>'
  ],
  [
    '<img src="img/i4_p76_act2.jpg" class="img-responsive"><br>' +
      '<textarea class="form-control text-question no-redimensionar " cols="60" rows="1"></textarea>'
  ],
  [
    '<img src="img/i1_p76_act2.jpg" class="img-responsive"><br>' +
      '<textarea class="form-control text-question no-redimensionar " cols="60" rows="1"></textarea>'
  ],
  [
    '<img src="img/i2_p76_act2.jpg" class="img-responsive"><br>' +
      '<textarea class="form-control text-question no-redimensionar " cols="60" rows="1"></textarea>'
  ]
];

var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
  $("#" + ranuno[i].id).html(
    '<span width="50px">' + random1[i][0] + "</span> "
  );
}
