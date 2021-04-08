document.addEventListener('DOMContentLoaded', function() {
    let arr = ['1', '2', '3', 'd', 's'];
    
    function createSelectEl(arr, str) {
        let body = document.body;
        let select = body.appendChild(document.createElement('select'));

        arr.forEach(el => {
            let option = document.createElement('option');
            option.value = el.value;
            option.innerHTML = el.label;

            select.appendChild(option);
            if (option.value === str) {
                option.setAttribute('selected', true);
            }
        })
      return select;
    }

    function createSelect(arr, str) {
        if (typeof arr[0] === 'string') {
            arr = arr.map(str => ({
                value: str,
                label: str
            }))
        } else if (typeof arr[o] === 'number') {
            arr = arr.map(num => ({
                value: String(num),
                label: String(num)
            }))
        }
        createSelectEl(arr, str);
    }
    
    createSelect(arr, '3');
});