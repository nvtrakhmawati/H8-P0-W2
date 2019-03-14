function mengelompokkanAngka(arr) {
    var arrGenap = []
    var arrGanjil = []
    var arrKelipatan3 = []
    var arrHasil = []

    for (var i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            if (arr[i]%3 === 0){
                arrKelipatan3.push(arr[i])   
            }else{
                arrGenap.push(arr[i])
            }
        }else {
            arrGanjil.push(arr[i])
        }
    }
    arrHasil.push(arrGenap)
        arrHasil.push(arrGanjil)
        arrHasil.push(arrKelipatan3)
        console.log(arrHasil)
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]