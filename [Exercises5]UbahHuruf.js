function ubahHuruf(kata) {
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    var kataBaru = ''
    //ketahui posisi index huruf yang ada di kata sekarang, gampangnya pake findindex tapi manualnya :
    for (a=0;a<kata.length;a++){
        for (b=0;b<huruf.length;b++){
            if (huruf[b]===kata[a]){
                //tambahkan index huruf saat ini dengan 1 agar mendapatkan huruf setelahnya
                kataBaru += huruf[b+1]
            }
        }
    //tampilkan, jadi deh coco crunch
    }return kataBaru
}
  
   // TEST CASES
   console.log(ubahHuruf('wow')); // xpx
   console.log(ubahHuruf('developer')); // efwfmpqfs
   console.log(ubahHuruf('javascript')); // kbwbtdsjqu
   console.log(ubahHuruf('keren')); // lfsfo
   console.log(ubahHuruf('semangat')); // tfnbohbu