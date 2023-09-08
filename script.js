function capFirst(string) {
    const newArr = [...string];

    newArr[0] = newArr[0].toUpperCase()

    return newArr.join('')
}

function revString(string) {
    const newArr = [...string]
    const revStringArr = [];

    for (let i = string.length - 1; i >= 0; i--){
        revStringArr.push(string[i]);
    }

    return revStringArr.join('');
}

class Calc {
    constructor() {       
    }

    add(x, y) {
        return x + y;
    }

    divide(x, y) {
        return x / y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }
}

const myCalc = new Calc();

export { capFirst, revString, myCalc }