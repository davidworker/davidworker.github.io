let elInput = document.querySelector('#todo-in');
let elAddBtn = document.querySelector('#todo-add-btn');
let elItem = document.querySelector('#todo-item');

const addTodo = () => {
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
}

elAddBtn.addEventListener('click', (e) => {
    addTodo();
})


elInput.addEventListener('keyup', (e) => {
    if (e.key.toString().toUpperCase() == 'ENTER') {
        addTodo();
    }
})