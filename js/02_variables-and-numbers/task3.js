let a = 10;
let b = 20;
let x;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    x = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (x %2 != 0) {
    return x;
    } else {
        return (getRandomIntInclusive(a, b));
    }
}


console.log(getRandomIntInclusive(a, b));