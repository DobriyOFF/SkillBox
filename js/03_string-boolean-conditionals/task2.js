let myName = 'Sergey';
let mySurname = 'dorOfeEV';
let nameEnd;
let surnameEnd;

// Имя
nameEnd = myName.substr(0, 1).toUpperCase() + myName.substr(1, myName.length).toLowerCase();

//Фамилия
surnameEnd = mySurname.substr(0, 1).toUpperCase() + mySurname.substr(1, mySurname.length).toLowerCase();

if (myName != nameEnd) {
    console.log('Имя было преобразовано: ' + nameEnd);
} else {
    console.log('Имя осталось без изменений: ' + nameEnd);
}
if (mySurname != surnameEnd) {
    console.log('Фамилия была преобразована: ' + surnameEnd);
} else {
    console.log('Фамилия осталось без изменений: ' + surnameEnd);
}
