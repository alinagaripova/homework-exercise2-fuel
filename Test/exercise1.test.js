import {findHoroscope} from "../js/exercise1";

test('should say horoscope', () =>{
    const result = findHoroscope('Сентябрь',25);

    expect(result).toBe('Весы');
});

test('should say horoscope', () =>{
    const result = findHoroscope('Январь',15);
    expect(result).toBe('Козерог');
});

test('should say horoscope', () =>{
    const result = findHoroscope('Апрель',6);
    expect(result).toBe('Овен');
});

test('should say horoscope', () =>{
    const result = findHoroscope('Май',24);
    expect(result).toBe('Близнецы');
});

test('should say horoscope', () =>{
    const result = findHoroscope('Август',9);
    expect(result).toBe('Лев');
});

test('should say horoscope', () =>{
    const result = findHoroscope('Октябрь',28);
    expect(result).toBe('Скорпион');
});

test('should say horoscope', () =>{
    const result = findHoroscope('Январь',15);
    expect(result).toBe('Козерог');
});

test('should say horoscope', () =>{
    const result = findHoroscope('Январь',15);
    expect(result).toBe('Козерог');
});

test('should say horoscope', () =>{
    const result = findHoroscope('Январь',15);
    expect(result).toBe('Козерог');
});

