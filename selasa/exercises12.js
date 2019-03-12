function konversiMenit(menit) {
     var x,y
     x = menit / 60
     y = (menit % 60)
      if (String(y).length == 1){
        y = '0'+y
      }

     return Math.floor(x) + ":" + y
  }
  
  // TEST CASES
console.log(konversiMenit(63)); // 1:03
//   console.log(konversiMenit(124)); // 2:04
//   console.log(konversiMenit(53)); // 0:53
//console.log(konversiMenit(88)); // 1:28
//   console.log(konversiMenit(120)); // 2:00