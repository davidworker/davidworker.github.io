let name = document.querySelector('#fname');
let btn = document.querySelector('#run-btn');
let result = document.querySelector('#result');

btn.addEventListener('click', (e) => {
    let value = name.value;
    if (value) {
        name.value = '';
        result.innerHTML = `Hi!, ${value}`;
        // result.innerHTML = 'Hi!, ' + value;
    }
    name.focus();
})