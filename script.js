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
        letterObj[i] = alphabetArr[i];
    }

    return letterObj;
}

function caesarCipher(string) {
    const newArr = [...string];
    const scramArr = [];
    const letObj = letterObj();
    
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === " " || newArr[i] === "." || newArr[i] === "?" || newArr[i] === "!") {
            scramArr.push(newArr[i]);
        }

        for (let key in letObj){
            if (letObj[key] === newArr[i] || letObj[key].toUpperCase() === newArr[i]) {
                if (parseInt(key) + 2 > 25) {
                    let newKey = parseInt(key) - 26;
                    scramArr.push(letObj[parseInt(newKey) + 2])
                    console.log(scramArr);
                } else if (letObj[key].toUpperCase() === newArr[i]) {
                    let newKey = letObj[parseInt(key) + 2];
                    scramArr.push(newKey.toUpperCase());
                } else {
                    scramArr.push(letObj[parseInt(key) + 2]);     
                }             
                
            }
        }
    }
    console.log(scramArr.join(""));

    return scramArr.join("");
}

const myCalc = new Calc();

export { capFirst, revString, myCalc, caesarCipher }