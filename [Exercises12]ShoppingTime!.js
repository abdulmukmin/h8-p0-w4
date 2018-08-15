function shoppingTime(memberId, money) {
    /* 1.Bila memberIDnya tidak ada, tampilkan 'Mohon maaf, toko X hanya berlaku untuk member saja'
       2.Bandingkan dulu jumlah uang yang dimiliki dengan 50000, bila lebih kecil maka tampilkan 'Mohon maaf, uang tidak cukup'
    */ 
    if (memberId===''||memberId===undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money<50000){
        return 'Mohon maaf, uang tidak cukup'
    }
    var listPurchase=[['Sepatu Stacattu',1500000],['Baju Zoro',500000],['Baju H&N',250000],['Sweater Uniklooh',175000],['Casing Handphone',50000]]
    var listPurchased=[]
    var changeMoney=money
    var output={}
    //hitung jumlah uang - jumlah barang dari yang termahal sisanya nanti ditampilkan kembali
    for (i=0;i<listPurchase.length;i++){
        //kalau harga barang saat ini lebih murah dari harga uang, maka tambahkan barang ke dalam list yang dibeli dan kurangi uang
        if(changeMoney >= listPurchase[i][1]){
            listPurchased.push(listPurchase[i][0])
            changeMoney=changeMoney-listPurchase[i][1]
        }
    } 
    // console.log (listPurchased)
    // console.log (changeMoney)
    //Tampilkan semuanya
    output.memberId=memberId
    output.money=money
    output.listPurchased=listPurchased
    output.changeMoney=changeMoney
    return output
}
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja 