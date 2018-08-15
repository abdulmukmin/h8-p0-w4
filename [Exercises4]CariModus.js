function cariModus(arr) {
    var sementara=arr
    var angkaDiCek=[]
    var susunAngka=[]
    //di sort
    sementara.sort(function(a,b){return a - b})
    //di push angka masing2nya
    for (a=0;a<sementara.length;a++) {
        if (sementara[a]!= sementara[a+1]){
            angkaDiCek.push(sementara[a])
        }
    }
    for (c=0; c<angkaDiCek.length; c++){
        //buat array baru untuk menampung setiap angka yang sama
        susunAngka.push([])
        for (a=0;a<arr.length; a++){
            //console.log(arr[a])
            if (angkaDiCek[c]===arr[a]){
               susunAngka[c].push(arr[a])
            }
        }
    }
    // console.log(susunAngka)
    // console.log(susunAngka.length)
    //hitung kondisi dalam kategori angka
    var indexTerbanyak = 0
    if (susunAngka.length===1){
        return - 1
    } else {
        var angkaTerbanyak = susunAngka[0].length
        for (a=0;a<susunAngka.length;a++){
            if (angkaTerbanyak < susunAngka[a].length){
                angkaTerbanyak = susunAngka[a].length
                indexTerbanyak = a
            }
        } 
        if (angkaTerbanyak===1){
            return -1
        } else {
            return (susunAngka[indexTerbanyak][0])
        }
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1