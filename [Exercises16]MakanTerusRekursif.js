function makanTerusRekursif(waktu) {
    // batasi sampai ketemu 0 atau < 15, stiap 15 maka  tambahkan 1
    if (waktu<=0) { //->kondisi batas akhir yang ditentukan / base case
        return 0
        
    }   else {
        var modifWaktu = waktu - 15 //-> pengurangan yang ditentukan
        return 1 + makanTerusRekursif(modifWaktu) //-> akumulasi hasil yang diinginkan
    }
}
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0

/*Contoh
function countDistanceLetterRecursive(str,letter){
//batasi sampe ketemu huruf a, lalu hitung posisinya ada di string ke berapa (bisa dikurangkan string sisa dari string awal)
    var huruf = str[0]
    if (huruf===letter){ //<- base case
        return 1
    } else {
        var modifStr = str.substring(1)                             //<- paramenter yang diperkecil
        return 1 + countDistanceLetterRecursive(modifStr,letter)    //<- untuk menghitung angka2 yang dilewati
    }
}

console.log(countDistanceLetterRecursive('hahaha','a'))//2
console.log(countDistanceLetterRecursive('the quick brown fox','o'))//13 
*/