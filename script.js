function snapCrackle(maxValue) {

    let newArray = []

    for(let i = 1; i <= maxValue; i++) {

        if( i % 2 == 1 && i % 5 != 0) {
             newArray.push("Snap")
        } else if(i % 5 == 0 && i % 2 == 0) {
             newArray.push("Crackle")
        } else if(i % 2 != 0 && i % 5 == 0) {
             newArray.push("SnapCrackle")
        } else {
             newArray.push(i)
        }
    }
    return newArray
}
console.log(snapCrackle(40))