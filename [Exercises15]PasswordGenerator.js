function changeVocals (str) {
    var tampung =''
    //ubah yang hanya huruf vokal
    for (var i=0; i<str.length; i++){
        if (str[i]==='A'){
            tampung = tampung + 'B'
        }
        else if (str[i]==='I'){
            tampung = tampung + 'J'
        }
        else if (str[i]==='U'){
            tampung = tampung + 'V'
        } 
        else if (str[i]==='E'){
            tampung = tampung + 'F'
        }
        else if (str[i]==='O'){
            tampung = tampung + 'P'
        }
        else if (str[i]==='a'){
            tampung = tampung + 'b'
        }
        else if (str[i]==='i'){
            tampung = tampung + 'j'
        }
        else if (str[i]==='u'){
            tampung = tampung + 'v'
        } 
        else if (str[i]==='e'){
            tampung = tampung + 'f'
        }
        else if (str[i]==='o'){
            tampung = tampung + 'p'
        } else {
            tampung = tampung + str[i]
        }
    }
    return tampung
  }
  
function reverseWord (str) {
    var result = ''
    //membalikkan nilai, disesuaikan 
    for (i=str.length-1;i>=0;i--){
        result = result + str[i]
    }
    return result
}

function setLowerUpperCase (str) {
    var tampung =''
    var hurufKecil = 'abcdefghijklmnopqrstuvwxyz'
    var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //looping setiap angkanya, bandingkan dengan hurufbesar/hurufkecil, nanti index hasilnya di tambahkan 1, terus tampilkan hasilnya
    for (i=0; i<str.length; i++){
        for (j=0;j<hurufBesar.length; j++){
            if(str[i]===hurufBesar[j]){
                 tampung = tampung + hurufKecil[j]
            } else if (str[i]===hurufKecil[j]) {
                 tampung = tampung + hurufBesar[j]
            }
        }
        if (str[i]===' '){
            tampung = tampung + ' '
        }
    }
    return tampung
}
  
function removeSpaces (str) {
    var result =''
    for (i=0; i<str.length; i++){
        if(str[i] !== ' '){
            result = result + str[i]
        }
    }
    return result
}
  
function passwordGenerator (name) {
    if (name.length <= 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    //1.ambil dari changevocals
    //2.ambil dari reveseWord
    //3.amibl dari setLowerUpperCase
    //4.ambil dari removeSpaces
    var changedVocals = changeVocals(name)
    var reversedWord = reverseWord(changedVocals)
    var settedLowerUpperCase =  setLowerUpperCase(reversedWord)
    var removedSpaces = removeSpaces(settedLowerUpperCase)
    return removedSpaces
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'