function totalDigitRekursif(angka) {
    // ubah angka menjadi string
    // base case adalah saat panjangnya angka terakhir, return angka terakhir
    // <- paramenter yang diperkecil dengan mengurangi jumlah string
    // <- set angka yang sedang di rekrusif agar nanti ditambahkan
    var angka = angka.toString() //-> angka dikonversi ke string jadi bisa diitung lengthnya
    //console.log(angka.length)
    if(angka.length===1){
        var tambahkan = angka[0]
        return Number(tambahkan)
    } else {
        var modifAngka = angka.substr(1) //-> dihilangkan angka paling depan
        var tambahkan = angka[0] //-> angka paling depan untuk ditambahkan kemudian dikoversi ke number
        //console.log(angka[0])
        return Number(tambahkan) + totalDigitRekursif(modifAngka)
    }
    
}
  
  // TEST CASES
   console.log(totalDigitRekursif(512)); // 8
   console.log(totalDigitRekursif(1542)); // 12
   console.log(totalDigitRekursif(5)); // 5
   console.log(totalDigitRekursif(21)); // 3
   console.log(totalDigitRekursif(11111)); // 5