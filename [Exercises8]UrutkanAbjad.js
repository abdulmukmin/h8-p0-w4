function urutkanAbjad(str) {
    //dirubah ke array dulu
    strArr=str.split('')
    //disort
    sortArr=strArr.sort()
    //ubah ke string lagi tapi jangan dibawa komanya
    var stringAkhir =''
    for (a=0;a<sortArr.length;a++){
        stringAkhir += sortArr[a]
    }
    return stringAkhir
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'