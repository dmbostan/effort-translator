import translate from "../src/translate";

describe('Test the translation from characters to valid time periods', () => {
    it('should translate "d" as 0.5 working day', () => {
        expect(translate('d')).toEqual({'Development': 0.5});
    });

    it('should translate "D" as 1 working days', () => {
        expect(translate('D')).toEqual({'Development': 1});
    });

    it('should translate "dD" as 1.5 working days', () => {
        expect(translate('dD')).toEqual({'Development': 1.5});
    });

    it('should translate "DDD" as 3 working days', () => {
        expect(translate('DDD')).toEqual({'Development': 3});
    });

    it('should translate "dDqQ" as 3 working days', () => {
        expect(translate('dDqQ')).toEqual({'Development': 1.5, 'QA' : 1.5});
    });
});