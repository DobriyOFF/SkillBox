var firstNumber = + prompt('Введите начальное значение интервала');
var secondNumber = + prompt('Введите конечное значние интервала');
var numberPerson = + prompt('Введите число для начала игры');
var random;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

random = getRandomInt(firstNumber, secondNumber);

function checkNumber(number, random) {
  while (number != random && number != null) {
    if (number > random) {
      alert('Меньше');
      number = prompt('Введите другое число');
    } else if (number < random) {
      alert('Больше')
      number = prompt('Введите другое число');
    }
  }
  if (number == random) {
  alert('Вы выиграли');
  } else {
  alert('Конец игры, вы проиграли(');
  }
}

console.log(random);
getRandomInt(firstNumber, secondNumber);
checkNumber(numberPerson, random);
