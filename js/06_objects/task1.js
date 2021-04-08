let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Василий', surname: 'Васек' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

function getFilterProp(objects, value, prop) {
    let temp = [];
    for (let i = 0; i <= objects.length - 1; i++) {
        if (objects[i].name === prop) {
            temp.push(objects[i]);
        }
    }
    if (temp[0] != null ) {
        console.log(temp);
    } else {
        console.log('Совпадений нет');
    }
    
}
export default {
    getFilterProp(objects, 'name', 'Василий');
}