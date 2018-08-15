function hitungHuruf(kata) {
    // pisahkan masing-masing kalimat ke dalam array, gunakan split saja, bisa juga dengan manual, ada di exercises week 3
    hurufKecil = kata.toLowerCase()
    pisahKata= hurufKecil.split(' ') //-> string kalo di split otomatis jadi array?
    var perHuruf=[]
    // pisahkan setiap huruf dalam kata, tetapi tetap jadikan di satu index perkata
    // console.log(pisahKata.length) -> tes
    // looping ke-1 untuk mengambil 1 kata
    for (a=0;a<pisahKata.length;a++){
        // looping ke-2 untuk mengambil setiap huruf dan meletakannya dalam array di kata yang sama
        perHuruf.push([]) //-> buat array baru buat dimasukkan array perkata
        //console.log(pisahKata[a].length) -> tes kata
        for(b=0;b<pisahKata[a].length;b++){
            //console.log(pisahKata[a][b]) -> tes huruf
            perHuruf[a].push(pisahKata[a][b]) //-> jangan lupa index array dituliskan juga agar bisa dimasukkan perindex
        }//console.log(perHuruf)
    } 
    //buat looping untuk sort lalu dibandingkan angka pertama sampai dengan angka terakhir, bila sama ditambahkan 1
    var jumlahHuruf=[]
    for (a=0; a<perHuruf.length; a++){
        //jumlahHuruf.push([])
        perHuruf[a].sort()
        //console.log(perHuruf[a])
        var hitungHuruf = 0
        var hurufSekarang = ''
        for (b=0;b<perHuruf[a].length;b++){
            if(perHuruf[a][b]===perHuruf[a][b+1]){
                //console.log(perHuruf[a][b],'sama dengan',perHuruf[a][b+1])
                //hurufSekarang=perHuruf[a][b]
                hitungHuruf=hitungHuruf+1
                
            } else {
                //console.log('sama')
                //hitungHuruf=hitungHuruf+1
                //jumlahHuruf[a].push([hitungHuruf])
            }
        }jumlahHuruf.push(hitungHuruf)
    }//console.log(jumlahHuruf)
    //Sudah dapat index lokasi kata yang banyak doublenya, bandingkan. 
    var hurufTerbanyak = 0
    var indexHurufTerbanyak =0
    for(a=0; a<jumlahHuruf.length; a++){
        if(hurufTerbanyak<jumlahHuruf[a]){
            hurufTerbanyak=jumlahHuruf[a]
            indexHurufTerbanyak=a
        }
    } 
    //Bila ada kata yang tidak dobule maka return -1
    if(hurufTerbanyak===0){
        return -1
    } else {
        return (pisahKata[indexHurufTerbanyak]) 
    }
  }
  
  // TEST CASES
 console.log(hitungHuruf('Today, is the greatest day ever' )); // greatest
 console.log(hitungHuruf('I am a passionate developer')); // passionate
 console.log(hitungHuruf('aku adalah anak gembala')); // adalah console.log(hitungHuruf('greatest day ever' )); // greatest
 console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
 console.log(hitungHuruf('mengayuh perahu di danau')); // danau