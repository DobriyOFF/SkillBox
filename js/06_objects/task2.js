document.addEventListener('DOMContentLoaded', function() {
    let arr = [{
        value: "Russia",
        label: 'Russia',
      },
      {
        value: "Germany",
        label: "Germany",
      },
      {
        value: "France",
        label: "France",
      }
    ]
    
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
        });
      return select;
    }
    
    createSelectEl(arr, 'Germany');
});