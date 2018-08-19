//Mengunakan object  
    /*
    1.Buat variabel objek untuk menampung output
    2.Masukkan nilai dari 'arr' ke dalam key objek
    3.Hitung jumlah setiap key yang ada dalam 'arr' dan masukkan sebagai valuenya
    4.Lakukan perbandingan antara value dari key, cari yang paling banyak
    5.Tampilkan key dari nilai yang paling banyak tersebut.
    */
function cariModus(arr) {
   var output = {}
   for(i=0; i<arr.length; i++){
       //console.log(output[arr[i]]=i) -> ini buat ngecek aja, kalo buat objek, inget harus ada key & valuenya
       if (output[arr[i]]===undefined) {
            output[arr[i]]=1
       }
       else {
           output[arr[i]] += 1
       }
   }
   console.log(output)
   //console.log(output[Object.keys(output)[?]]) //-> melihat value dari index
   //console.log(Object.keys(output)[?]) //-> melihat keys dari index
   //console.log(output[?])//-> melihat value dari key
   //console.log(Object.keys(output).length) //->melihat jumlah data dalam output
   var valueTerbesar = 0
   var posisiIndexTerbesar = 0
   for (i=0; i<Object.keys(output).length; i++){
       if (output[Object.keys(output)[i]]>valueTerbesar){
           valueTerbesar = output[Object.keys(output)[i]]
           posisiIndexTerbesar = i
       }
   }
   
   if (Object.keys(output).length < 2 || valueTerbesar<2){
        return -1
   } else {
        //Looping dari nilai 'arr', bandingkan dengan setiap value key, bila ketemu yang  sama, langsung return 
        for (i=0; i<arr.length; i++){
            for (j=0; j<Object.keys(output).length; j++){
                if(output[arr[i]]===valueTerbesar){
                    return arr[i]
                }
            }
        }    
   }
}   

  // TEST CASES
   console.log(cariModus([10, 4, 5, 2, 4])); // 4
   console.log(cariModus([5, 10, 10, 6, 5])); // 5
   console.log(cariModus([10, 3, 1, 2, 5])); // -1
   console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
   console.log(cariModus([7, 7, 7, 7, 7])); // -1
   console.log(cariModus([4, 1, 2, 3, 3, 4, 5])) //