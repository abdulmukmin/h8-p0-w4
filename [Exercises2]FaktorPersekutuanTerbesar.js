function fpb(angka1, angka2) {
    var result = 0;
    
    for(var a=1; a<angka1; a++){
      if(angka1%a ===0 && angka2%a ===0) { 
        result = a;
      }
    }
    return fpb;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
  