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


function letterObj() {
    const alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const letterObj = {}
    
    for (let i = 0; i < alphabetArr.length; i++){
        letterObj[alphabetArr[i]] = i;
    }
    
    return letterObj;
}

function caesarCiper(string) {
    const newArr = [...string];
    const scramArr = [];
    const letObj = letterObj();

    for (let key in letObj) {
        // console.log(letObj[key]);
        for (let i = 0; i < newArr.length; i++){
            console.log(newArr[i]);
            if (key == newArr[i]) {
                console.log(letObj[key]);
                // console.log(key);
            }

        }
    }

    return scramArr.join(' ');
}

caesarCiper("Lemonz is the code.")

const myCalc = new Calc();

export { capFirst, revString, myCalc }