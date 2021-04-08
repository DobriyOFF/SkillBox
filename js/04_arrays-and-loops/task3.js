let roadMines = [false, false, false, true, false, false, true, false, false, false];
let tank = 0;
let position = 1;
let i = 0;

while (tank != 2) {
    if (roadMines[i] === false) {
        console.log(`танк переместился на ${position}`);
        position += 1;
    } else {
        console.log(`танк переместился на ${position}`);
        position += 1;
        tank += 1;
        if (tank === 2)
            console.log('танк уничтожен')
        else
            console.log('танк повреждён')
    }
    if (i === 9) {
        break;
    } else 
        i++;
}