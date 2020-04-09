function pregunta1(){

    for(i=0;i<5;i++){
        
        $("#contenido").append('<tr><td class="div1" id="diva'+i+'" ondrop="drop(event)" ondragover="allowDrop(event)"></td> <td>;</td> <td class="div1" id="divb'+i+'" ondrop="drop(event)" ondragover="allowDrop(event)"></td> <td>;</td> <td class="div1" id="divc'+i+'" ondrop="drop(event)" ondragover="allowDrop(event)"></td></tr>');

    }
   
    
    $("#respuesta").append('<tr><td><input type="text"></td></tr>'+'<tr><td><input type="text"></td></tr>'+'<tr><td><input type="text"></td></tr>'+'<tr><td><input type="text"></td></tr>'+'<tr><td><input type="text"></td></tr>');
    
};
function allowDrop(ev) {
    ev.preventDefault();

}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
    divs[k] = ev.target.id;
    z = z + 1;
    console.log(divs);
}

function drop(ev) {

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var n = '#' + ev.target.id;
    contenidos[k] = ev.target.id;
    console.log(contenidos);
    k = k + 1;

}

$(document).ready(function() {

    pregunta1();

    
});