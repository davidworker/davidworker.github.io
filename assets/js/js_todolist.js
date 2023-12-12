class TODO {
    #items
    #el

    constructor(el) {
        this.#items = [];
        this.#el = el;
        this.init();
    }

    add(text) {
        if (text) {
            this.#items.push({ checked: false, text: text })
        }
    }

    checkedToggle(index) {
        if (this.#items[index]) {
            this.#items[index].checked = !this.#items[index].checked
            this.render();
        }
    }

    render() {
        let html = '';
        this.#items.forEach((item, index) => {
            let checked = item.checked ? 'checked' : '';

            html += `<li data-index="${index}">
                        <input type="checkbox" ${checked}>
                        <span>${item.text}</span>
                    </li>`
        })
        this.#el.innerHTML = html;
    }

    init() {
        this.#el.addEventListener('click', (e) => {
            let el = e.target;
            let tag = el.tagName.toString().toUpperCase();

            if (tag == 'SPAN' || tag == 'INPUT') {
                el = el.parentNode;
            }

            if (el.tagName.toString().toUpperCase() == 'LI') {
                let index = el.dataset.index;
                this.checkedToggle(index);
            }
        })
    }
}

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
