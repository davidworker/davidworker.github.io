import { LocalStorage } from "./LocalStorage.js";
import { TODO_API } from './TODO_API.js'

class TODO {
    #items
    #el
    #storage
    #uid

    constructor(el, uid = 'todo') {
        this.#items = [];
        this.#el = el;
        this.#storage = new LocalStorage(uid);
        this.#uid = uid;
        this.init();
    }

    add(text) {
        console.log(text);
        if (text) {
            this.#items.push({ checked: false, text: text })
        }
        this.write();
    }

    async write() {
        await TODO_API.update(this.#uid, this.#items);
    }

    async read() {
        return await TODO_API.get(this.#uid)
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

    async init() {
        this.#items = await this.read();
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