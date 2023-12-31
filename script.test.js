import { capFirst, revString, myCalc, caesarCipher, analyzeArray } from "./script";

test('Capitalize first letter of a word', () => {
    expect(capFirst("bunny")).toBe("Bunny");
});

test('Reverse string', () => {
    expect(revString("Onomatopoeia")).toBe("aieopotamonO");
})

test('Does some form of Addition, Division, Subtraction, or Multiplication', () => {
    expect(myCalc.add(2, 5)).toEqual(7);
    expect(myCalc.divide(10, 2)).toEqual(5);
    expect(myCalc.subtract(10, 7)).toEqual(3);
    expect(myCalc.multiply(2, 20)).toEqual(40);
})

test('Returns a string scrambled by a Caesar Cipher', () => {
    expect(caesarCipher("Lemonz is the code.")).toBe("Ngoqpb ku vjg eqfg.");
})

test('Return an object with Min, Max, Avg, and Length fo given arr', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({"Average": 3, "Min": 1, "Max": 5, "Length": 5})
})