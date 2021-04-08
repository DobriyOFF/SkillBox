let array = [];
let week = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье"
];
 
let day = "вторник";
let indexWeek = week.indexOf(day);
 
for (let i = 1; i < 32; i++) {
  array.push(i);
}

for (elem of array) {
    console.log(`${elem} января, ${week[indexWeek]}`);
    if (indexWeek === 6)
        indexWeek = 0;
    else
        indexWeek++;
}
