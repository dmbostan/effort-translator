import getLetterDetails from "../src/getLetterDetails";

describe('Test the parsing of the letter', () => {
    it('should parse a development value of 0.5', () => {
        expect(getLetterDetails('d')).toMatchObject({status: 'Development', effort: 0.5});
    });

    it('should parse a development value of 1', () => {
        expect(getLetterDetails('D')).toMatchObject({status: 'Development', effort: 1});
    });

    it('should parse a QA value of 0.5', () => {
        expect(getLetterDetails('q')).toMatchObject({status: 'QA', effort: 0.5});
    });

    it('should parse a QA value of 1', () => {
        expect(getLetterDetails('Q')).toMatchObject({status: 'QA', effort: 1});
    });
});
