import { LocalStorage } from "./LocalStorage.js";

class TODO {
    #items
    #el
    #storage

    constructor(el, uid = 'todo') {
        this.#items = [];
        this.#el = el;
        this.#storage = new LocalStorage(uid);
        this.init();
    }

    add(text) {
        if (text) {
            this.#items.push({ checked: false, text: text })
        }
        this.write();
    }

    write() {
        this.#storage.write('todo', this.#items)
    }

    read() {
        return this.#storage.read('todo', []);
    }

    checkedToggle(index) {
        if (this.#items[index]) {
            this.#items[index].checked = !this.#items[index].checked
            this.write();
            this.render();
        }
    }

    render() {
        let html = '';
        this.#items.forEach((item, index) => {
            let checked = item.checked ? 'checked' : '';

            html += `<li data-index="${index}" draggable="true">
                        <input type="checkbox" ${checked}>
                        <span>${item.text}</span>
                    </li>`
        })
        this.#el.innerHTML = html;
    }

    init() {
        this.#items = this.read();
        this.render();
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

    dragAndDrop() {
        this.#el.addEventListener('dragstart', (e) => {
            let data = { index: e.target.dataset.index, type: 'pending' };
            e.dataTransfer.setData('text', JSON.stringify(data));
        })

        let aa = document.querySelector('#aa');

        aa.addEventListener('dragover', (e) => {
            e.preventDefault();

        })

        aa.addEventListener('drop', (e) => {
            console.log(e);
            let data = JSON.parse(e.dataTransfer.getData('text'))
            console.log(data);
        })
    }
}

export { TODO }