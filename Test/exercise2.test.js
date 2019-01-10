import {calculateDistance} from "../js/exercise2";

test('should calculate distance', () => {
    const result = calculateDistance(40,7);

    expect(result).toBe(571);
});