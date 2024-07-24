import { caesarCipher } from "./index";

describe("caesarCipher", () => {
  it("should return the correct cipher if k< 26", () => {
    expect(caesarCipher("middle-Outz", 2)).toEqual("okffng-Qwvb");
  });
  it("should return the correct cipher if k > 26", () => {
    expect(caesarCipher("www.abc.xy", 87)).toEqual("fff.jkl.gh");
  });
  it("should return the correct cipher if string has multiple capital letters", () => {
    expect(caesarCipher("www.ABC.xy", 87)).toEqual("fff.JKL.gh");
  });
  it("should return the the same character if it does not exist in the alphabet", () => {
    expect(caesarCipher("..---!!!@@@", 2)).toEqual("..---!!!@@@");
  });
});
