import {calculateWallpapers} from "../js/exercise4";

test('should calculate wallpapers', () => {
    const result = calculateWallpapers(5, 6,2.85,1.06,10);

    expect(result).toBe(7);
})