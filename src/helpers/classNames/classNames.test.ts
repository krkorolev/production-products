import { classNames } from "./classNames";

describe("classNames", () => {
  test("one argument", () => {
    expect(classNames("color")).toBe("color");
  });
  test("two argument", () => {
    const expert = 'color background absolute'
    expect(classNames("color", {}, ['background', 'absolute'])).toBe(expert);
  });
  test("three argument", () => {
    const expert = 'color background absolute position borderBox'
    expect(classNames("color", {position: true, borderBox: true}, ['background', 'absolute'])).toBe(expert);
  });
 
});
