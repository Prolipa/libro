// JavaScript Document
//VARIABLES CALIFICACION
var correctos=0;
var itemsN=3;
var incorrectos=0;
function alCargar(){
	//VARIABLES
	var i=0;
	var lix=0;var liy=0;var lfx=0;var lfy=0;
	var posFX=0;
	//var a1=document.getElementById("a1");
	var b1=document.getElementById("b1");
	var info=document.getElementById("info");
	var dato_cm=document.getElementById("dato_cm");
	var nota=document.getElementById("nota");
	var escena=document.getElementById("escena");
	var rayas=document.getElementById("rayas");
	var linea = document.createElement("linea");
	var ajustar = document.createElement("ajustar");
	var preg = document.createElement("preg");
	var resp = document.createElement("resp");
	var prguntas=[];
	var respuesta=[];
	//GRUPOS
	var subG;var subF;
	var g1=document.getElementById("g1");
	var f1=document.getElementById("f1");
	var g2=document.getElementById("g2");
	var f2=document.getElementById("f2");
	var g3=document.getElementById("g3");
	var f3=document.getElementById("f3");
	//ADICION DE EVENTOS
	ajustar.addEventListener("click",ajustarFN,false);

	g1.addEventListener("click",accionAC,false);
	f1.addEventListener("click",accionBC,false);
	
	g2.addEventListener("click",accionAC,false);
	f2.addEventListener("click",accionBC,false);
	
	g3.addEventListener("click",accionAC,false);
	f3.addEventListener("click",accionBC,false);
};

function accionAC(evento){
	subG=evento.target.id.substr(-1);
	var numW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var numX=evento.clientX;
	lix = numX-280;//(numX*100)/numX;
	liy = evento.clientY-100;
	dato_cm.innerHTML=lix + "/ " + subG;//lix+"X, "+liy+"Y";
};

function accionBC(evento){
	subF=evento.target.id.substr(-1);
	var numW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var numFX= evento.clientX;
	lfx =numFX;// (numX*100)/numW;
	lfy = evento.clientY-100;
	dato_cm.innerHTML=lix+"X, "+liy+"Y";
	//if(subG==subF){
	if(prguntas[parseInt(subG)-1].n==respuesta[parseInt(subF)-1].m){
	var trazo=('<line x1="'+lix+'" y1="'+liy+'" x2="90%" y2="'+lfy+'" stroke="#6ab150" stroke-width="2"></line>');
	rayas.innerHTML=rayas.innerHTML+trazo;
	correctos++;
	}else{
	var trazo=('<line x1="'+lix+'" y1="'+liy+'" x2="90%" y2="'+lfy+'" stroke="#ff0000" stroke-width="2"></line>');
	rayas.innerHTML=rayas.innerHTML+trazo;
	incorrectos++;
	};
	Calculo_nota("nota", 3, correctos);
	this.removeEventListener("click",accionBC,false);
	//this["g"+subG].removeEventListener("click",accionBC,false);
};
//FUNCION DE REAJUSTE TAMANIO DE VENTANA
window.addEvent("resize",resizer,false);
function resizer() {
	dato_cm.innerHTML="Efecto de Ajuste Activado";
	orden();
	//alert(posFX);
};
//AJUSTAR
function ajustarFN() {
	dato_cm.innerHTML="Efecto de Ajuste Activado";
	//alert("Hola");
};