function hitungHuruf(kata) {
    //pecah kalimat menjadi kata
    var sementara=''
    var kalimatArr = []
    var penampungObj=[]
    // console.log(kata)
    for (i=0; i<kata.length; i++){
        if(kata[i]===' '){
            kalimatArr.push(sementara)
            sementara=''
            penampungObj.push({}) //-> buat persiapan nampung objek perkata nanti
        } else {
            sementara += kata[i]   
        }
    }
    kalimatArr.push(sementara)
    penampungObj.push({})
    // console.log(penampungObj)
    console.log(kalimatArr)
    //----------------------------------//
    //hitung huruf per kata
    for (i=0; i<kalimatArr.length; i++){
        for (j=0; j<kalimatArr[i].length; j++){
            //console.log(kalimatArr[i][j])
            //penampungObj[i][kalimatArr[i][j]] = 1 //-> contoh
            if(penampungObj[i][kalimatArr[i][j]]===undefined){
                penampungObj[i][kalimatArr[i][j]]=1 //->
            } else {
                penampungObj[i][kalimatArr[i][j]]+=1
            }
        }
    }
    //console.log(penampungObj)
    //----------------------------------//
    //console.log(Object.values(penampungObj[?])[??]) //-> melihat isi value dalam objek perindex array '?' dan index dari dalam array itu '??'
    //cek berapa huruf terbanyak yang dimiliki oleh kata tersebut
    //bila nilai pada huruf yang dilooping > 1 maka tambahkan 1
    var angkaTerbanyak = []
    
    for (i=0; i<penampungObj.length; i++){
        var terbanyakSementara =0
        angkaTerbanyak.push([])
        var objSekarang = penampungObj[i] //-> menghitung panjang objek di dalam array (1)
        for (j=0; j<Object.keys(objSekarang).length; j++){
            console.log(Object.values(penampungObj[i])[j])
            //bila terdapat huruf yang banyaknya lebih dari 1, masukkan dalam array angka terbanyak
            if (Object.values(penampungObj[i])[j]>1){
                terbanyakSementara+=Object.values(penampungObj[i])[j]
                
            } 
        }angkaTerbanyak[i].push(terbanyakSementara) //-> abis diitung baru di push
    } console.log(angkaTerbanyak)
    //----------------------------------//
    //cari index terbanyaknya-----------//
    var indexHurufTerbanyak=0
    for (i=0; i<angkaTerbanyak.length; i++){
        console.log(angkaTerbanyak[i])
        if(indexHurufTerbanyak<angkaTerbanyak[i]){
            indexHurufTerbanyak =angkaTerbanyak[i]
            console.log(indexHurufTerbanyak,' dan',angkaTerbanyak[i])
        }
    } console.log(indexHurufTerbanyak)

    //----------------------------------//
    //Bila ada kata yang tidak dobule maka return -1
    if (indexHurufTerbanyak === 0) {
        return -1
    } else {
            //cari isi kata dari 'indexHurufTerbanyak'
            for (i=0; i<angkaTerbanyak.length; i++){
                console.log(angkaTerbanyak[i])
                //looping nilai dalam 'angka terbanyak' sampai ditemukan nilai yang sama dengan indexterbanyak
                if (angkaTerbanyak[i]===indexHurufTerbanyak){
                    //tampilkan nilai dari posisi pertama ditemukan indexterbanyak
                    //console.log(angkaTerbanyak[i])
                    return kalimatArr[i]
                }
            }
    }
}

// TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah 
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau
  console.log(hitungHuruf('I am a developer passionate'))