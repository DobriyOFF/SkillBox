var firstNubmer = + prompt('Первое число');

if (!Number.isInteger(firstNubmer) || firstNubmer == '') {
    alert('Конец программы');
} else {
  alert('Введите число');
  firstNubmer = + prompt('Первое число');
}

var secondNumber = + prompt('Второе число');

if (!Number.isInteger(secondNumber) || secondNumber == '') {
    ;
} else {
  alert('Введите число');
  secondNumber = + prompt('Второе число');
}

if (firstNubmer > secondNumber) {
  alert('Первое число больше второго');
} else if (firstNubmer < secondNumber) {
  alert('Второе число больше первого');
} else if (firstNubmer == secondNumber) {
  alert('Числа равны');
}


// alert('Привет, ' + mySurname + ' ' + myName + '!');
