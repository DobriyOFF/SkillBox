// var firstNubmer = + prompt('Первое число');
// var fake = confirm('Дальше?');
// var col = 0;
// alert(fake);
// do {
//   firstNubmer = firstNubmer;
//   alert(col);
//  while (!Number.isInteger(firstNubmer) || firstNubmer == '' ) {
//   alert('Введите число');
//   firstNubmer = + prompt('Первое число');
// // }


// alert('Привет, ' + mySurname + ' ' + myName + '!');


// var number = + prompt('Введите число');
// var secondNumber;
// let number_ = confirm("На этом все?");
// if (!number_) {
//   alert(number);
// } else {
//   while ((!Number.isInteger(firstNubmer) || firstNubmer == '') && number_ == true) {
//   let twoNumber = + prompt('Введите число');
//   number = twoNumber + number;
// }
// alert(number);
// for (let i = 0; i §< 12; i ++)
//   if (!Number.isInteger(number) || number == '') {
//     secondNumber = promt('Введите число');
//     number += secondNumber;
//     let number_ = confirm("На этом все?");
//     if (!number_) {
//       break;
//     } else {
//       alert(number);
//     }
//   } else {
//     number
//   }


let number,
     sum = 0;
 while ((number = prompt('Введите число!')) !== null) {
     let number_ = +number;
     if (!isNaN(number_))
         sum += number_;
 }
 alert(sum);
