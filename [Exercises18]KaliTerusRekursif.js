function kaliTerusRekursif(angka) {
    //1.konversi ke string agar bisa dihitung lengthnya
    //2.jika length = 1 maka berikan return sesuai angka dan konversi ke number
    //3.jika length >1 maka substring 1 karakter, masukkan kembali ke fungsi
    //4.angka yang berada pada posisi rekursif dirubah dan dikalikan dengan return dari rekursif selanjutnya
    var angka = angka.toString() //-> ubah angka ke string
    //console.log(angka)
    if (angka.length===1){
        //console.log(angka[0])
        return Number(angka[0])
    }
    else {
        ngotrekAngka = angka.substr(1)
        var kalikan = angka[0]
        console.log(Number(kalikan), " * ")
        var kaliTerusRekrusif = Number(kalikan) * kaliTerusRekursif(ngotrekAngka) //-> returnnya dimasukkan ke variabel dulu untuk dikondisikan lagi || jadi hasilnya sudah dilihat meski belum ditampilkan
        //console.log('hasil kaliTerusRekrusif', kaliTerusRekrusif)
        var panjang = String(kaliTerusRekrusif).length;
        if( panjang > 1){
            console.log(kaliTerusRekrusif)
            return kaliTerusRekursif(kaliTerusRekrusif);
        }
        else{
            console.log(ngotrekAngka)
            return kaliTerusRekrusif;
        }
    }
  }
  
  // TEST CASES
   console.log(kaliTerusRekursif(66)); // 8
//   console.log(kaliTerusRekursif(3)); // 3
//   console.log(kaliTerusRekursif(24)); // 8
//  console.log(kaliTerusRekursif(654)); // 0
//   console.log(kaliTerusRekursif(1231)); // 6