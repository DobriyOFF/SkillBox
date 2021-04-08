let x1 = 13.890123;
let x2 = 2.901564;
let n = 2;

x1 = (x1 % 1) * Math.pow(10, n);
x1 = Math.trunc(x1);
console.log('x1 = ' + x1);

x2 = (x2 % 1) * Math.pow(10, n);
x2 = Math.trunc(x2);
console.log('x2 = ' + x2);

if (x1 > x2) {
    console.log('x1 > x2');
    console.log(x1);
} else if (x1 < x2) {
    console.log('x2 > x1');
    console.log(x2);
} else if (x1 === x2) {
    console.log('x1 = x2');
    console.log(x1);
}