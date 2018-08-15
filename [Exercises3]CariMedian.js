/*
1.Buat variabel 'arr' dan masukkan nilai berapapun.
2.Buat variabel 'median', akan kita isi nanti.
2.Hitung pangjang data dalam 'arr',
3.Bila 

*/

function cariMedian(arr) {
    //console.log(arr.length)
    var indexTengah=0
    var indexTengah1=0
    var median = 0
    if( arr.length%2 !== 0 ){
        indexTengah = Math.round(arr.length/2)
        return arr[indexTengah-1]
    } else {
        indexTengah = Math.round(arr.length/2)
        indexTengah1 = indexTengah-1
        median = arr[indexTengah] + arr[indexTengah1]
        return median/2
    }
  }
  
  // TEST CASES
   console.log(cariMedian([1, 2, 3, 4, 5])); // 3
   console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
   console.log(cariMedian([3, 4, 7, 6, 10])); // 7
   console.log(cariMedian([1, 3, 3])); // 3
   console.log(cariMedian([7, 7, 8, 8])); // 7.5