//key: kalo kedetek huruf besar dibalik jadi huruf kecil. pake upperloower didalem if, dicek 1-1 
function tukarBesarKecil(kalimat) {
    var tampungPerubahan =''
    for (a=0; a<kalimat.length; a++){
        //console.log(kalimat[a].toUpperCase())
        //cek itu huruf besar bukan, kalo huruf besar langsung rubah ke kecil
        if(kalimat[a]===kalimat[a].toUpperCase()){
            tampungPerubahan = tampungPerubahan + kalimat[a].toLowerCase()
        } else {
            tampungPerubahan = tampungPerubahan + kalimat[a].toUpperCase()        
        }
    }
    return tampungPerubahan
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"