function isPrime(num) {
     for (let i = 2; i < num; i++){
       if (num % i === 0) {
         return false
       }
      }
     return true
   };


function snapCrackle(maxValue) {

    let newArray = []

    for(let i = 1; i <= maxValue; i++) {

        if( isPrime(i) === true && i > 1) {
        newArray.push("Prime")
      } else if( i % 2 == 1 && i % 5 != 0) {
             newArray.push("Snap")
        } else if(i % 5 == 0 && i % 2 == 0) {
             newArray.push("Crackle")
        } else if(i % 2 != 0 && i % 5 == 0) {
             newArray.push("SnapCrackle")
        } else {
             newArray.push(i)
        }
    }
    return newArray.join([f = ", "])
}
