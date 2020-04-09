var titulos = 'aplico';
f_iniciar();
function f_iniciar() {
    var bt_arr = ['<div style="background-color: #d5eef5; border-radius: 60px; width: 140px; height: 40px" class="punteado"> <font size="5"> <p id="drag1" draggable="true" ondragstart="drag(event)">Facultad</p> </font> </div>', '<div style="background-color: #d5eef5; border-radius: 60px; width: 150px; height: 40px" class="punteado"> <font size="5"> <p id="drag2" draggable="true" ondragstart="drag(event)">facultades</p> </font> </div>', '<div style="background-color: #d5eef5; border-radius: 60px; width: 140px; height: 40px" class="punteado"> <font size="5"> <p id="drag3" draggable="true" ondragstart="drag(event)">Economía</p> </font> </div>', '<div style="background-color: #d5eef5; border-radius: 60px; width: 140px; height: 40px" class="punteado"> <font size="5"> <p id="drag4" draggable="true" ondragstart="drag(event)">economía</p> </font> </div>', '<div style="background-color: #d5eef5; border-radius: 60px; width: 150px; height: 40px" class="punteado"> <font size="5"> <p id="drag5" draggable="true" ondragstart="drag(event)">revolución</p> </font> </div>', '<div style="background-color: #d5eef5; border-radius: 60px; width: 150px; height: 40px" class="punteado"> <font size="5"> <p id="drag6" draggable="true" ondragstart="drag(event)">Revolución</p> </font> </div>', '<div style="background-color: #d5eef5; border-radius: 60px; width: 120px; height: 40px" class="punteado"> <font size="5"> <p id="drag7" draggable="true" ondragstart="drag(event)">Estado</p> </font> </div>', '<div style="background-color: #d5eef5; border-radius: 60px; width: 120px; height: 40px" class="punteado"> <font size="5"> <p id="drag8" draggable="true" ondragstart="drag(event)">decano</p> </font> </div>'];
    bt_arr.sort(f_randomico);
    $(".div_elementos").html('').append(bt_arr);

}

function pregunta1() {
    var respact2 = ['decano', 'Facultad', 'Economía', 'facultades', 'revolución', 'Revolución', 'Estado', 'economía'];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#div' + [i] + '').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#div' + [i] + '').css("background", "#00e600");
        } else {
            $('#div' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 10) / 8;
    $('#pre1a').val(parseFloat(total).toFixed(2));

    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", false);
    $('textarea').attr("disabled", false);
    $('#txtAlumno').attr("disabled", false);
}