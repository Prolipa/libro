
document.getElementById('nt48_1').addEventListener('keypress', ()=>{
    validNumero(0,2,1);
});
document.getElementById('nt48_1').addEventListener('keyup', ()=>{
validMaxIngreso(document.getElementById('nt48_1'),2)
});
document.getElementById('nt48_2').addEventListener('keypress', ()=>{
    validNumero(0,1,1);
});
document.getElementById('nt48_2').addEventListener('keyup', ()=>{
validMaxIngreso(document.getElementById('nt48_2'),1)
});
document.getElementById('nt48_3').addEventListener('keypress', ()=>{
    validNumero(0,1,1);
});
document.getElementById('nt48_3').addEventListener('keyup', ()=>{
validMaxIngreso(document.getElementById('nt48_3'),1)
});
document.getElementById('nt48_4').addEventListener('keypress', ()=>{
    validNumero(0,2,1);
});
document.getElementById('nt48_4').addEventListener('keyup', ()=>{
validMaxIngreso(document.getElementById('nt48_4'),2)
});
document.getElementById('nt48_5').addEventListener('keypress', ()=>{
    validNumero(0,2,1);
});
document.getElementById('nt48_5').addEventListener('keyup', ()=>{
validMaxIngreso(document.getElementById('nt48_5'),2)
});
document.getElementById('nt48_2').addEventListener('keypress', ()=>{
    validNumero(0,2,1);
});
document.getElementById('nt48_2').addEventListener('keyup', ()=>{
validMaxIngreso(document.getElementById('nt48_2'),2)
});






function validNumero(num1,num2,allowFloat=0){
    if(allowFloat==1){
        var regex = new RegExp("^.|["+num1+"-"+num2+"]+$");
    }else{
        var regex = new RegExp("^["+num1+"-"+num2+"]+$");
    }

    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

function validMaxIngreso(elemento,num){
    if(elemento.value>num){
        alert('La calificación no puede ser mayor a '+num)
        elemento.value= "";
        return 1;
    }else{

        return 0;

    }
}

function resolverN48() {

    var nota1 = document.getElementById("nt48_1").value;
    var nota2 = document.getElementById("nt48_2").value;
    var nota3 = document.getElementById("nt48_3").value;
    var nota4 = document.getElementById("nt48_4").value;
    var nota5 = document.getElementById("nt48_5").value;
    var nota6 = document.getElementById("nt48_6").value;
    if ((nota1 == "") || (nota2 == "") || (nota3 == "")|| (nota4 == "")|| (nota5 == "")|| (nota6 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt48_1").focus();
    } else {
        if ((nota1 <= 10) && (nota2 <= 10) && (nota3 <= 10)&& (nota4 <= 10)&& (nota5 <= 10)&& (nota6 <= 10)) {
            var total = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)+ parseFloat(nota4)+ parseFloat(nota5)+ parseFloat(nota6));
            document.getElementById("nt48_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt48_2").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt48_3").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt48_4").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt48_5").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt48_6").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt48_1').disabled = true;
            document.getElementById('nt48_2').disabled = true;
            document.getElementById('nt48_3').disabled = true;
            document.getElementById('nt48_4').disabled = true;
            document.getElementById('nt48_5').disabled = true;
            document.getElementById('nt48_6').disabled = true;



        } else {
            alert('La nota no debe exceder los 10 puntos');
            document.getElementById("nt48_1").style.backgroundColor = "#F95858";
            document.getElementById("nt48_2").style.backgroundColor = "#F95858";
            document.getElementById("nt48_3").style.backgroundColor = "#F95858";
            document.getElementById("nt48_4").style.backgroundColor = "#F95858";
            document.getElementById("nt48_5").style.backgroundColor = "#F95858";
            document.getElementById("nt48_6").style.backgroundColor = "#F95858";
            document.getElementById("nt48_1").focus();
        }
    }
}
