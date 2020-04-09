var correctas = {
    0: ['A', 'B', 'O', 'F', 'E', 'T', 'E', 'A', 'R'],
    1: ['A', 'B', 'O', 'N', 'O'],
    2: ['B', 'O', 'L', 'I', 'R'],
    3: ['A', 'B', 'G', 'A', 'R'],
    4: ['A', 'B', 'L', 'E', 'N', 'G'],
};
var respcorrec = 0,
    respcorrec2 = 0,
    respcorrec3 = 0,
    respcorrec4 = 0,
    respcorrec5 = 0;

document.getElementById("O0").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('O1').focus();
        }
    }
});

document.getElementById("O1").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('O2').focus();
        }
    }
    // body...
});
document.getElementById("O2").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('O3').focus();
        }
    }
});
document.getElementById("O3").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('O4').focus();
        }
    }
});
document.getElementById("O4").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('O5').focus();
        }
    }
});
document.getElementById("A0").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('A1').focus();
        }
    }
});
document.getElementById("A1").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('A2').focus();
        }
    }
});
document.getElementById("A2").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('A3').focus();
        }
    }
});
document.getElementById("A3").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('A4').focus();
        }
    }
});
document.getElementById("A4").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('A5').focus();
        }
    }
});
document.getElementById("A5").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('A6').focus();
        }
    }
});
document.getElementById("A6").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('A7').focus();
        }
    }
});
document.getElementById("A7").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('A8').focus();
        }
    }
});
document.getElementById("A8").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('A9').focus();
        }
    }
});
document.getElementById("N0").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('N1').focus();
        }
    }
});
document.getElementById("N1").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('N2').focus();
        }
    }
});
document.getElementById("N2").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('N3').focus();
        }
    }
});
document.getElementById("N3").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('N4').focus();
        }
    }
});
document.getElementById("G0").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('G1').focus();
        }
    }
});
document.getElementById("G1").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('G2').focus();
        }
    }
});
document.getElementById("G2").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('G3').focus();
        }
    }
});
document.getElementById("G3").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('G4').focus();
        }
    }
});
document.getElementById("B0").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('B1').focus();
        }
    }
});
document.getElementById("B1").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('B2').focus();
        }
    }
});
document.getElementById("B2").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('B3').focus();
        }
    }
});
document.getElementById("B3").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('B4').focus();
        }
    }
});
document.getElementById("B4").addEventListener("keyup", function() {
    if (this.value.length == this.getAttribute('maxlength')) {
        if (event.keyCode != 9) {
            document.getElementById('B5').focus();
        }
    }
});
function VerificarC() {
    for (var i = 0; i <= 8; i++) {

        if ((correctas[0][i]) == ($('#A' + [i] + '').val())) {
            respcorrec = respcorrec + 1;
            $('#A' + [i] + '').css("backgroundColor", "#58FA58");
            $('#A' + [i] + '').prop("disabled", true);
        } else {
            $('#A' + [i] + '').css("backgroundColor", "#FA5858");
            $('#A' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 4; i++) {

        if ((correctas[1][i]) == ($('#N' + [i] + '').val())) {
            respcorrec2 = respcorrec2 + 1;
            $('#N' + [i] + '').css("backgroundColor", "#58FA58");
            $('#N' + [i] + '').prop("disabled", true);
        } else {
            $('#N' + [i] + '').css("backgroundColor", "#FA5858");
            $('#N' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 4; i++) {

        if ((correctas[2][i]) == ($('#B' + [i] + '').val())) {
            respcorrec3 = respcorrec3 + 1;
            $('#B' + [i] + '').css("backgroundColor", "#58FA58");
            $('#B' + [i] + '').prop("disabled", true);
        } else {
            $('#B' + [i] + '').css("backgroundColor", "#FA5858");
            $('#B' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 4; i++) {

        if ((correctas[3][i]) == ($('#G' + [i] + '').val())) {
            respcorrec4 = respcorrec4 + 1;
            $('#G' + [i] + '').css("backgroundColor", "#58FA58");
            $('#G' + [i] + '').prop("disabled", true);
        } else {
            $('#G' + [i] + '').css("backgroundColor", "#FA5858");
            $('#G' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 5; i++) {

        if ((correctas[4][i]) == ($('#O' + [i] + '').val())) {
            respcorrec5 = respcorrec5 + 1;
            $('#O' + [i] + '').css("backgroundColor", "#58FA58");
            $('#O' + [i] + '').prop("disabled", true);
        } else {
            $('#O' + [i] + '').css("backgroundColor", "#FA5858");
            $('#O' + [i] + '').prop("disabled", true);
        }

    }
    var subtotales = parseInt(respcorrec) + parseInt(respcorrec2) + parseInt(respcorrec3) + parseInt(respcorrec4) + parseInt(respcorrec5);
    var totales = (subtotales * 10) / 30;
    $('#txtNota').html(totales.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;
}