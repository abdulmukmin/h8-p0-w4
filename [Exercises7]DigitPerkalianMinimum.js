function digitPerkalianMinimum(angka) {
    //buat looping dari 1, bagikan 'angka' dengan nomor looping, cek haislnya
    var sementara =0
    var hitungDigit =[]
    for (a=0;a<angka+1;a++){ //-> angka +1 biar bisa di looping
        //cek hasilnya, buat kondisi bila hasilnya bilangan bulat maka
        sementara = angka/a
        if (sementara-Math.floor(sementara)===0){
            //console.log(angka,'dibagi',a,'hasilnya',sementara)
            //bila hasilnya bilangan bulat maka konversi ke string agar karakter dapat dihitung
            hitungDigit.push(sementara.toString()+a.toString())
            //bisa gak ya buat pembandingnya langsung disini?
        }
    }//console.log(hitungDigit)
    //buat pembanding haisl perhitungan string
    var terkecil = hitungDigit[0].length
    for (a=0;a<hitungDigit.length;a++){
        if ( hitungDigit[a].length < terkecil){
            terkecil = hitungDigit[a].length
        }
    } return terkecil
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2