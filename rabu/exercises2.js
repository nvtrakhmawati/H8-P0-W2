function balikKata(kata){
    var c ='';
    for (var i = kata.length-1; i>=0; i--){
        c = c + kata[i];
    }
    return c
}
console.log(balikKata('Hello World'))
