import { formatPrice } from "util/formatters"

describe('formatPrice for positive numbers', () => {

    test('formatPrice should format number eng when give 10.1', () => {
        //Arrange:
        const value = 10.1;
        //Act:
        const result = formatPrice(value);
        //Assert:
        expect(result).toEqual("10.10")
    });

    test('formatPrice should format number eng when give 0.1', () => {
        const result = formatPrice(0.1);
        expect(result).toEqual("0.10")
    });
});

describe('formatPrice for non-positive numbers', () => {

    test('formatPrice should format number eng when give 0', () => {
        //Arrange:
        const value = 0.0;
        //Act:
        const result = formatPrice(value);
        //Assert:
        expect(result).toEqual("0.00")
    });

    test('formatPrice should format number eng when give -5.1', () => {
        const result = formatPrice(-5.1);
        expect(result).toEqual("-5.10")
    });
});

