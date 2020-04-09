var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 6,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var p1vec1 = [
        '<tr align="center">' +
        '<td style="border: 2px solid #005CA4; background: #FEFCF2; vertical-align: middle;">No dejes para mañana lo que puedes hacer hoy, pero más vale tarde que nunca.</td>' +
        '<td style="border: 2px solid #005CA4; vertical-align: middle;">' +
        '<select id="p1sel1" class="form-control">' +
        '</select>' +
        '</td>' +
        '</tr>' ,
        '<tr align="center">' +
        '<td style="border: 2px solid #005CA4; background: #FEFCF2; vertical-align: middle;">Profe, no puede ponerme seis, voy a destrozar a mis padres que tanto se sacrifican.</td>' +
        '<td style="border: 2px solid #005CA4; vertical-align: middle;">' +
        '<select id="p1sel2" class="form-control">' +
        '</select>' +
        '</td>' +
        '</tr>' ,
        '<tr align="center">' +
        '<td style="border: 2px solid #005CA4; background: #FEFCF2; vertical-align: middle;">No hay mal que dure cien años, aunque no hay mal que por bien no venga.</td>' +
        '<td style="border: 2px solid #005CA4; vertical-align: middle;">' +
        '<select id="p1sel3" class="form-control">' +
        '</select>' +
        '</td>' +
        '</tr>' ,
        '<tr align="center">' +
        '<td style="border: 2px solid #005CA4; background: #FEFCF2; vertical-align: middle;">Mami, me tienes que dar permiso, todos los chicos ya tienen el permiso de sus padres.</td>' +
        '<td style="border: 2px solid #005CA4; vertical-align: middle;">' +
        '<select id="p1sel4" class="form-control">' +
        '</select>' +
        '</td>' +
        '</tr>' ,
        '<tr align="center">' +
        '<td style="border: 2px solid #005CA4; background: #FEFCF2; vertical-align: middle;">Salí a la fiesta con Elisa y Paúl, fuimos en su coche y luego fuimos a cenar.</td>' +
        '<td style="border: 2px solid #005CA4; vertical-align: middle;">' +
        '<select id="p1sel5" class="form-control">' +
        '</select>' +
        '</td>' +
        '</tr>' ,
        '<tr align="center">' +
        '<td style="border: 2px solid #005CA4; background: #FEFCF2; vertical-align: middle;">¿De qué estábamos hablando?</td>' +
        '<td style="border: 2px solid #005CA4; vertical-align: middle;">' +
        '<select id="p1sel6" class="form-control">' +
        '</select>' +
        '</td>' +
        '</tr>' 
    ];
    p1vec1.sort(f_randomico);
    $('#p1im1').html(p1vec1);
    var p1vec2 = [
        '<option value="Ambigüedad">Ambigüedad</option>',
        '<option value="Contradicción">Contradicción</option>',
        '<option value="Desviación">Desviación</option>',
        '<option value="Falacia">Falacia</option>',
    ];
    p1vec2.sort(f_randomico);
    for (var i = 0; i < 6; i++) {
      $('#p1sel'+(i+1)).html('<option value="" disabled selected>Seleccione</option>'+p1vec2);
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1vec3=['Contradicción','Falacia','Contradicción','Falacia','Ambigüedad','Desviación'];
        for (var i = 0; i < 6; i++) {
          var p1rp1=$('#p1sel'+(i+1)).val();
          if (p1rp1== p1vec3[i]) {
            cor++;
            f_ok($('#p1sel'+(i+1)));
          }else{
            inc++;
            f_no($('#p1sel'+(i+1)));
          }
        }
        Calculo_nota();
    }
}