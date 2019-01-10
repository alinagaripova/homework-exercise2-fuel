
export function sumCashBack(coffee, money) {

    // coffees = [30, 35, 40, 45];
    let result = 0;
    const limit = 100;
    if (money <= limit) {
        result = money - coffee;
    } else {
       result = 'Максимально можно внести 100';
    }
    return result;
}

console.log(sumCashBack(45, 100) + ' рублей');
console.log(sumCashBack(35, 200) + ' рублей');
