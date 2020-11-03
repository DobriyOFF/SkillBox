var firstNubmer = + prompt('Начальный год');

if (!Number.isInteger(firstNubmer) || firstNubmer == '') {
    while (!Number.isInteger(firstNubmer) || firstNubmer == '') {
      alert('Введите начальный год');
      firstNubmer = + prompt('Начальный год');
    }
}

var secondNumber = + prompt('Конечный год');

if (!Number.isInteger(secondNumber) || secondNumber == '') {
    while (!Number.isInteger(secondNumber) || secondNumber == '') {
      alert('Введите конечный год');
      secondNumber = + prompt('Конечный год');
    }
}

var between = secondNumber - firstNubmer;
if (secondNumber < firstNubmer) {
  alert('Ошибка');
}

var col = 0;

for (firstNubmer; firstNubmer <= secondNumber; firstNubmer++ ) {
  if (firstNubmer % 4 == 0) {
    col++;
    console.log(firstNubmer);
  }
}

alert('Общее количество годов: ' + col);
