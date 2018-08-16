function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  var output=[
    {
    product:'Sepatu Stacattu',
    shoppers:[],
    leftOver:10,
    totalProfit:0
    },
    {
    product:'Baju Zoro',
    shoppers:[],
    leftOver:2,
    totalProfit:0 
    },
    {
    product:'Sweater Uniklooh',
    shoppers:[],
    leftOver:1,
    totalProfit:0     
    }
  ]
  //cek kondisi 'shoppers', bila kosong maka tidak usah tampilkan apa2, return '' saja
  if (shoppers.length === 0){
      return ''
  }
  //buat looping, cek data 'product' yang diinginkan shooper dengan 'leftover' yang tersedia di output
  for (i=0; i<shoppers.length;i++){
    for (j=0; j<output.length; j++){
        //cek data produk yang sama
        if(shoppers[i].product === output[j].product) {
            //console.log(shoppers[i].product+' sama dengan '+output[j].product)
            //cek stok produk yang akan dibeli
            if(shoppers[i].amount <= output[j].leftOver) {
                //console.log(shoppers[i].amount+' lebih kecil dari '+output[j].leftOver)
                //tambahkan nama pembeli dari shoppers ke data nama pembeli di output
                //kurangi jumlah stok awal dengan amount pembelian, update sisanya ke leftover
                //cari hargabarang dari listBarang untuk produk yang sama (lakukan looping), kalikan dengan amount pembelian, masukkan ke total profit di output
                output[j].shoppers.push(shoppers[i].name)
                output[j].leftOver = output[j].leftOver - shoppers[i].amount
                for(k=0; k<listBarang.length; k++){
                    if (shoppers[i].product===listBarang[k][0]){
                        //console.log(shoppers[i].amount+' dikalikan dengan '+listBarang[k][1])
                        output[j].totalProfit = output[j].totalProfit + ( shoppers[i].amount * listBarang[k][1] )
                    }
                }
            }
        }
    }
  }


  return output
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([]));