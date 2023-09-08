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

export { capFirst, revString }