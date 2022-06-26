// function snapCrackle(maxValue) {
     
//      let newArray = []
     
//      for(let i = 1; i <= maxValue; i++) {
          
//           if( i % 2 == 1 && i % 5 != 0) {
//                newArray.push("Snap")
//           } else if(i % 5 == 0 && i % 2 == 0) {
//                newArray.push("Crackle")
//           } else if(i % 2 != 0 && i % 5 == 0) {
//                newArray.push("SnapCrackle")
//           } else {
//                newArray.push(i)
//           }
//      }
//      return newArray.join([f = ", "])
// }

function isPrime(num) {
     for (let i = 2; i < num; i++){
       if (num % i === 0) {
         return false
       }
      }
     return true
   }


function snapCracklePrime(value) {
     let arr = []

     for(let i = 1; i <= value; i++) {

   
          if(isPrime(i) === true && i > 1 && i % 2 !== 0 && i % 5 !==0) {
               arr.push('SnapPrime')
          } else if(isPrime(i) === true && i > 1 && i % 2 != 0 && i % 5 == 0) {
               arr.push("SnapCracklePrime")
          } else if(isPrime(i) === true && i > 1 && i == 2){
               arr.push('Prime')
          }
          else if( i % 2 == 1 && i % 5 != 0) {
               arr.push("Snap")
          } else if(i % 5 == 0 && i % 2 == 0) {
               arr.push("Crackle")
          } else if(i % 2 != 0 && i % 5 == 0) {
               arr.push("SnapCrackle")
          } else {
               arr.push(i)
          }
     }
     return arr.join([f = ", "])
}

console.log(snapCracklePrime(30))