import { capFirst, revString } from "./script";

test('Capitalize first letter of a word', () => {
    expect(capFirst("bunny")).toBe("Bunny");
});

test('Reverse string', () => {
    expect(revString("Onomatopoeia")).toBe("aieopotamonO");
})