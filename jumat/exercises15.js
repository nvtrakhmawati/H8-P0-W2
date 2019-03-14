function groupAnimals(animals) {
    var arrHasil = []
    var indeks = 0
    animals.sort();

    for (var i=0; i<animals.length; i++){
        if(arrHasil.length === 0){
            arrHasil.push([animals[i]])
        } else if(arrHasil[indeks][0][0] === animals[i][0]){
            arrHasil[indeks].push(animals[i])
        } else {
            arrHasil.push([animals[i]])
            indeks++
        }
    }
    return arrHasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]