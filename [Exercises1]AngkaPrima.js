function angkaPrima(angka) {
    for (var i=2; i<angka;i++ ){
        //console.log('ini i -> '+i+' pas angka ke -> '+angka)
        if (angka%i===0){
            //console.log('ini i -> '+i+' pas angka ke -> '+angka)
            return false
        } 
    } return true
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false