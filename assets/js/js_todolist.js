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
                            <input type="checkbox">
                            <span>${value}</span>
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

elItem.addEventListener('click', (e) => {
    let el = e.target;
    let tag = el.tagName.toString().toUpperCase();
    let isCheckbox = false;

    if (tag == 'INPUT') {
        isCheckbox = true;
    }

    if (tag == 'SPAN' || tag == 'INPUT') {
        el = el.parentNode
    }

    if (el.tagName.toString().toUpperCase() == 'LI') {
        let checkbox = el.querySelector('input[type=checkbox]');
        if (!isCheckbox) {
            checkbox.checked = !checkbox.checked;
        }
    }
})