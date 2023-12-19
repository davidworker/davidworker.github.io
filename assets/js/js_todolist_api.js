import { TODO } from './class/TODO.js';
import { UID } from './class/UID.js';

let todoApp = document.querySelector('#todo-app');
let uidApp = document.querySelector('#uid-app');
let uid = UID.read();

if (uid) {
    todoApp.classList.add('active');
    // TODO Application.
    let elInput = document.querySelector('#todo-in');
    let elAddBtn = document.querySelector('#todo-add-btn');
    let elItem = document.querySelector('#todo-item');
    let elChangeUid = document.querySelector('#change-uid-btn');
    let todo = new TODO(elItem, uid);

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

    elChangeUid.addEventListener('click', (e) => {
        e.preventDefault();
        UID.clear();
        location.reload();
    })
} else {
    uidApp.classList.add('active');

    let elUid = document.querySelector('#todo-uid');
    let elBtn = document.querySelector('#todo-uid-btn');
    elBtn.addEventListener('click', (e) => {
        let value = elUid.value;
        if (value) {
            UID.write(value);
            location.reload();
        }
    })
}

let r = await fetch('https://soa.tainan.gov.tw/Api/Service/Get/6c5be14e-25da-4b58-aa35-e0f6513537ae')
let json = await r.json();
console.log(json.data);