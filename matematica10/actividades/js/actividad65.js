var titulos = "aplico";
numero_pagina(63);

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 10);
  });

  var random1 = [
    [
      '<img class="img-responsive" src="img/i3_p63_act1.jpg"><br><textarea class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ],
    [
      '<img class="img-responsive" src="img/i4_p63_act1.jpg"><br><textarea class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ],
    [
      '<img class="img-responsive" src="img/i1_p63_act1.jpg"><br><textarea class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ],
    [
      '<img class="img-responsive" src="img/i5_p63_act1.jpg"><br><textarea class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ],
    [
      '<img class="img-responsive" src="img/i2_p63_act1.jpg"><br><textarea class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen1");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }