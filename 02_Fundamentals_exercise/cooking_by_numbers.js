function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let number = parseInt(num)
    let arrOp = [];
    arrOp.push(op1);
    arrOp.push(op2);
    arrOp.push(op3);
    arrOp.push(op4);
    arrOp.push(op5);
    for( i = 0; i < arrOp.length; i++){
        if ( arrOp[i] == "chop"){
            number /= 2
        } else if ( arrOp[i] == "dice") {
            number = Math.sqrt(number)
        } else if ( arrOp[i] == "spice") {
            number += 1
        } else if ( arrOp[i] == "bake") {
            number = 3 * number
        } else if ( arrOp[i] == "fillet") {
            number = 0.8 * number
        }
        console.log(number)
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet')
