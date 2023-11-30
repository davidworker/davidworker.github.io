let num1 = document.querySelector('#calc-num-1');
let num2 = document.querySelector('#calc-num-2');
let btn = document.querySelector('#calc-btn');
let response = document.querySelector('#response');

btn.addEventListener('click', (e) => {
    initTable();

    let n1 = +num1.value;
    let n2 = +num2.value;
    if (isNaN(n1) || isNaN(n2) || n1 <= 0 || n2 <= 0) {
        return;
    }

    let thead = '<tr><th></th>';
    for (let i = 1; i <= n1; i++) {
        thead += `<th>${i}</th>`;
    }
    thead += '</tr>';

    let tbody = '';
    for (let j = 1; j <= n2; j++) {
        tbody += `<tr><td>${j}</td>`;
        for (let i = 1; i <= n1; i++) {
            tbody += `<td>${j * i}</td>`;
        }
        tbody += '</tr>';
    }

    response.querySelector('table thead').innerHTML = thead;
    response.querySelector('table tbody').innerHTML = tbody;
})

const initTable = () => {
    response.querySelector('table thead').innerHTML = ''
    response.querySelector('table tbody').innerHTML = ''
}

// let xtr = document.createElement('tr')
// let xth = document.createElement('th')
// xth.innerHTML = 1
// xtr.appendChild(xth);
