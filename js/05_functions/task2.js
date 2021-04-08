// let sum = 55000;
// let col = 10;
// let promo = null;

function discount(sum, col, promo) {
    if (promo === 'ДАРИМ300') {
        if (sum <= 300) {
            sum = 0;
        } else {
            sum -= 300;
        }
    }
    if (col >= 10) {
        sum *= 0.95;
    }
    if (sum > 50000) {
        sum = (sum - 50000) * 0.8 + 50000;
    }
    if (promo === 'СКИДКА15' && sum >= 20000) {
        sum *= 0.85;
    }
    return sum;
}

export default {
    discount(sum, col, promo);
}