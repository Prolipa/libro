function areas(figura,base,altura){
    var calculoArea=0;
    if(figura == 'triangulo'){
        calculoArea= (base*altura)/2;
    }
    if(figura == 'cuadrado'){
        calculoArea= (base*altura);
    }
    return calculoArea;
}
function perimetros(figura,base,altura,tieneDiagonal,diagonal){
    var calculoPerimetro=0;
        if(figura == 'triangulo'){
        }
            if(tieneDiagonal){
            calculoPerimetro= (base+altura+diagonal);
            return calculoPerimetro;
        }else{
            var diagonalint = Math.sqrt(Math.pow(base,2)+Math.pow(altura,2));
            calculoPerimetro= (base+altura+diagonalint);
            return [calculoPerimetro,diagonalint];
        } 
}