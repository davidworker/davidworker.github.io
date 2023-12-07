let elInput = document.querySelector('#todo-in');
let elAddBtn = document.querySelector('#todo-add-btn');
let elItem = document.querySelector('#todo-item');

elAddBtn.addEventListener('click', (e) => {
    let value = elInput.value;
    if (!value) {
        elInput.focus();
        return;
    }

    elItem.innerHTML += `<li>
                            <div><input type="checkbox"></div>
                            <div>${value}</div>
                        </li>`

    elInput.value = '';
    elInput.focus();
})