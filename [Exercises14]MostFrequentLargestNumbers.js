function sorting(arrNumber) {
    return arrNumber.sort()
}
  
function getTotal(arrNumber) {
    //console.log('ini sudah di getTotal '+arrNumber)
    //console.log(arrNumber.length)
    //cari huruf2 yang ada, buat variabel baru 
    var numUtama=[]
    var terbesar=0
    var indexDicari=0
    for(i=0; i<arrNumber.length; i++){
        if (arrNumber[i]!==arrNumber[i+1]){
            numUtama.push(arrNumber[i])
        }
    }
    //ambil nomor terbesar di ujung kanan karena sudah di sort
    terbesar=numUtama[numUtama.length-1]
    indexTerbesar=numUtama.length-1

    //hitung banyak setiap hurufnya
    var numItung=[]
    for(i=0; i<numUtama.length; i++){
        var sementara=0 //-> agar nilainya tereset dari 0 setiap menghitung nomor yang lain
        for(j=0; j<arrNumber.length; j++){
            if(numUtama[i]===arrNumber[j]){
                //console.log(numUtama[i]+' '+arrNumber[j])    
                sementara = sementara + 1 
            }
        }
        numItung.push(sementara)
    }
    //tampilkan banyaknya jumlah huruf dalam 'numItung' dari huruf terbesar dalam 'numUtama'
    jumlahTerbesar=numItung[indexTerbesar]
    if (jumlahTerbesar===undefined){
        return '' //-> kenapa gak bisa difilter dari awal ya? pas ditaro di sorting dia gak mau ditambahin arrNumber.length
    } else {
        return 'angka paling besar adalah '+terbesar+' dan jumlah kemunculan sebanyak '+jumlahTerbesar+' kali'
    }
}
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''