import {calculateDistance} from "../js/lib";

test('should calculate distance', () => {
    const result = calculateDistance(40,7);

    expect(result).toBe(571);
});

test('should calculate distance', () => {
    const result = calculateDistance(40,4);

    expect(result).toBe(1000);
});