import { capFirst } from "./script";

test('Capitalize first letter of a word', () => {
    expect(capFirst("bunny")).toBe("Bunny");
});