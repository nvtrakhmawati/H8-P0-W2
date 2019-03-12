function pasanganTerbesar(num) {
    var arrAngka = [];
    var angkaString = num.toString().split('');

    for (i = 0; i < angkaString.length - 1; i++) {
        var angkapasangan = angkaString[i] + angkaString[i + 1];
        arrAngka.push(angkapasangan);
        arrAngka.sort(function(a, b) {
            return b - a;
        });
    }
    
    return arrAngka[0];
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
//   console.log(pasanganTerbesar(12783456)); // 83
//   console.log(pasanganTerbesar(910233)); // 91
//   console.log(pasanganTerbesar(71856421)); // 85
//   console.log(pasanganTerbesar(79918293)); // 99