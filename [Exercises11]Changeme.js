function changeMe(arr) {
    if(arr.length===0){
        return ''
    }
    var obj={}
    var numb = 0
    for(a=0;a<arr.length;a++){
        numb=numb+1
        console.log(numb+'. '+arr[a][0]+' '+arr[a][1])
        obj.fristname=arr[a][0]
        obj.lastname=arr[a][1]
        obj.gender=arr[a][2]
        if (arr[a][3]===undefined){
            obj.age="invalid Birth Year"
        } else {
            obj.age=new Date().getFullYear() - arr[a][3]
        }

        console.log(obj)
    } 
    //console.log(obj)
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""