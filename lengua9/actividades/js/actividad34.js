var titulos = 'aplico';
numero_pagina(41);

var loadValues = ['img/i1_p41_act34.png','img/i2_p41_act34.png','img/i3_p41_act34.png','img/i4_p41_act34.png','img/i5_p41_act34.png','img/i6_p41_act34.png']
var corAns =[
    ['img/i1_p41_act34.png','P'],
    ['img/i2_p41_act34.png','I'],
    ['img/i3_p41_act34.png','I'],
    ['img/i4_p41_act34.png','P'],
    ['img/i5_p41_act34.png','I'],
    ['img/i6_p41_act34.png','I']
];
var querys = ['.general .imgSel div img','.general .inp div input'];
var classes = ['img-responsive'];

initElementosImg('.general .imgSel div','img',loadValues,true,classes);
initElementosImg('.general .inp div','input',loadValues,false,[],'text');

Array.from(document.querySelectorAll('.inp>div>input')).forEach(elemento =>{
    elemento.maxLength=1;
    elemento.size=2;
    elemento.addEventListener('keyup',function(){
        elemento.value = elemento.value.toUpperCase();
    });
});

Array.from(document.getElementsByClassName('nota-abierta')).forEach((elemento =>{
    elemento.addEventListener('keypress',()=>{
        validNumero(0,9);
        
    });
    elemento.addEventListener('keyup',()=>{
        validMaxIngreso(elemento,8);
    });
}));

document.getElementById('califAct1').addEventListener('click',function(){
    calcLinkActivity(querys,corAns,querys[1],'notParAct1',2);
});

new FileUploader('.img1');
new FileUploader('.img2');
new FileUploader('.img3');
new FileUploader('.img4');
new FileUploader('.img5');

document.getElementById('bt_comprobar').addEventListener('click',function(){
    sumTotalMixedQuest('sumtot','txtNota');
});


