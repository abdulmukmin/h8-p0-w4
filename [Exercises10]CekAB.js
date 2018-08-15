//key: cari index posisi a & b dengan looping ke indexnya, kemudian kurangi sehingga keliatan jaraknya
function checkAB(num) {
    //cari posisi a & b
    var posisiA = []
    var posisiB = []
    for (a=0;a<num.length;a++){
        if(num[a]==='a'){
            posisiA.push(a)
        } else if (num[a]==='b'){
            posisiB.push(a)
            
        }
    }//console.log(posisiB.length)
    // console.log('Posisi B di '+posisiB)
    // console.log('Posisi A di '+posisiA)
    //cek posisi B, kalo ada lebih dari 1 B, cek semua jarak B dengan a
    //bandingkan posisi a&b
    //cek apakah ada angka B atau tidak, kalo gak ada maka langsung false
    if (posisiB.length===0){
        return false
    } 
//saat angka A lebih banyak dari angka B tentu lebih banyak angka A yang dikurangkan dengan angka B
    else if (posisiA.length>0 ||posisiB.length>0){
        for(b=0;b<posisiB.length;b++){
            for (a=0;a<posisiA.length;a++){
                //console.log(Math.abs(posisiB[b]-posisiA[a])-1)
                //console.log(posisiB[b],' di kurang ',posisiA[a])
                if (Math.abs(posisiB[b]-posisiA[a])-1 === 3){
                    return true
                }
            }
        }
    }
    // else {
    //     //console.log('masuk else')
    //     if (posisiB-posisiA-1===3){
    //        return true
    //     } //else {
    //     //     return false
    //     // }
    // }
    return false
}
  // TEST CASES
   console.log(checkAB('lane borrowed')); // true
   console.log(checkAB('i am sick')); // false
   console.log(checkAB('you are boring')); // true
   console.log(checkAB('barbarian')); // true
   console.log(checkAB('bacon and meat')); // false