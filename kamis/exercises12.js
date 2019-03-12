function tentukanDeretGeometri(arr) {
    var a = arr[1] / arr[0]
    var b = true
    for(var i=arr.length-1 ; i>0; i--){
        if (a !== (arr[i] / arr[i-1])) {
            b = false;
        }
    }
    return b
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false