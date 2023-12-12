import { TODO } from './class/TODO.js';

let elInput = document.querySelector('#todo-in');
let elAddBtn = document.querySelector('#todo-add-btn');
let elItem = document.querySelector('#todo-item');
let todo = new TODO(elItem);

const addTodo = () => {
    let value = elInput.value;
    if (!value) {
        elInput.focus();
        return; // void
    }

    elInput.value = '';
    elInput.focus();

    todo.add(value);
    todo.render();
}

elAddBtn.addEventListener('click', (e) => {
    addTodo();
})


elInput.addEventListener('keyup', (e) => {
    if (e.key.toString().toUpperCase() == 'ENTER') {
        addTodo();
    }
})
