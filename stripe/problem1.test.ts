
import { parse_accept_language } from "./problem1"


describe("parse_accept_language", () => {

    it('should return only the language tag that is in the supported language set', () => {
        expect(parse_accept_language("en-US", new Set(["en-US", "fr-CA"])) ).toStrictEqual(["en-US"] )
    });

    it('should return only the language tag that is in the supported language set even if they are both the same language', () => {
        expect(parse_accept_language("fr-CA, fr-FR", new Set(["en-US", "fr-FR"]))).toStrictEqual(["fr-FR"] )
    });

    it('should return the language tags in the order that they are received in the header', () => {
      expect(parse_accept_language("en-US, fr-CA, fr-FR", new Set(["fr-FR", "en-US"]))).toStrictEqual(["en-US", "fr-FR"] )
    });
    it('should return an empty array if the header does not contain any supportedLanguages', ()=>{
        expect(parse_accept_language("en-US, fr-CA", new Set(["fr-FR", "sp-MX"]))).toStrictEqual([])
    })
    it('should return an empty array if header does not exist', ()=>{
        expect(parse_accept_language("", new Set(["fr-FR", "sp-MX"]))).toStrictEqual([])
    })
    it('should return empty array if supportedLangage set does not have a size', ()=>{
        expect(parse_accept_language("en-US, fr-CA", new Set())).toStrictEqual([])
    })


});