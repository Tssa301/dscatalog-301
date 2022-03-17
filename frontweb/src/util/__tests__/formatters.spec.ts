import {formatPrice} from "util/formatters"

test('formatPrice should format number eng when give 10.1', () => {

    //Arrange:
    const value = 10.1;

    //Act:
    const result = formatPrice(value);

    //Assert:
    expect(result).toEqual("10.10")
})