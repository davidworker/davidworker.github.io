let num1 = document.querySelector('#calc-num-1');
let num2 = document.querySelector('#calc-num-2');
let type = document.querySelector('#calc-type');
let btn = document.querySelector('#calc-btn');
let response = document.querySelector('#response');

btn.addEventListener('click', (e) => {
    let n1 = +num1.value;
    let n2 = +num2.value;
    let tid = type.value;

    if (isNaN(n1) || isNaN(n2) || !tid) {
        return; // void
    }

    let symbol = '';
    let total = 0;

    if (tid == 'add') {
        total = n1 + n2;
        symbol = '+';
    }

    if (tid == 'sub') {
        total = n1 - n2;
        symbol = '-';
    }

    if (tid == 'mul') {
        total = n1 * n2;
        symbol = 'x';
    }

    if (tid == 'div') {
        total = n1 / n2;
        symbol = '/';
    }

    response.innerHTML = `${n1} ${symbol} ${n2} = ${total}`;
})