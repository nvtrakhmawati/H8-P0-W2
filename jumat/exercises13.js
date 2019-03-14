function targetTerdekat(arr) {
    var arrX = []
    var arrO = []

    for(var i=0; i<arr.length; i++){
        if (arr[i] === 'x'){
            arrX.push(i);
        }
        if (arr[i] === 'o'){
            arrO.push(i);
        }
    }

    if (arrX.length === 0) {
        return 0
    } else{
        if (arrX[0] < arrO[0]){
            return Math.abs(arrX[arrX.length-1]-arrO[0])
        } else {
            return Math.abs(arrO[arrO.length-1]-arrX[0])
        }
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2