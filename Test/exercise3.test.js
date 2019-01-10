import {sumCashBack} from "../js/exercise3";

test('should calculate sum cash back', () => {
    const result = sumCashBack(45,100);

    expect(result).toBe(55);
});
test('should calculate sum cash back', () => {
    const result = sumCashBack(35,200);

    expect(result).toBe('Максимально можно внести 100');
})