import { App } from '../Firebase/App.js'
import { Database } from '../Firebase/Database.js'

class TodoRealtime {
    #items
    #el
    #uid
    #database

    constructor(el, uid = 'todo') {
        this.#items = [];
        this.#el = el;
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
        this.#database.write(this.#savePath(), this.#items);
        // await TODO_API.update(this.#uid, this.#items);
    }

    async read() {
        // return await TODO_API.get(this.#uid)
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


    #savePath() {
        return `todo/${this.#uid}`;
    }

    async init() {
        const app = await App.init();
        this.#database = new Database(app);

        this.#database.listen(this.#savePath(), (data) => {
            // S1
            // if (!data) {
            //     this.#items = [];
            // } else {
            //     this.#items = data;
            // }

            // S2
            // if (!data) {
            //     data = [];
            // }
            // this.#items = data;

            this.#items = data || []; // equal S1 and S2
            this.render();
        })

        // this.#items = await this.read();
        // this.render();
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

export { TodoRealtime }