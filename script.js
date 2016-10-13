function callbackPromedio(a, b, c, callback) {
    var suma = a+b+c;
    var resultado = suma / 3;
    return callback(resultado);
}





function segundero (){
    var seg= 1;
 setInterval(function(){
        document.getElementById("titulo").innerHTML = seg++;
    },1000);

 }
segundero();
