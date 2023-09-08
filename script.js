function capFirst(string) {
    const newArr = [...string];

    newArr[0] = newArr[0].toUpperCase()

    return newArr.join('')
}

export { capFirst }