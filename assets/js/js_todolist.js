let elInput = document.querySelector('#todo-in');
let elAddBtn = document.querySelector('#todo-add-btn');
let elItem = document.querySelector('#todo-item');
let items = [];

// item = {checked: false, text: ''}

/**
 * 將 items 資料使用迴圈組成 HTML 並顯示
 */
const render = () => {
    let html = '';
    items.forEach((item, index) => {
        let checked = item.checked ? 'checked' : '';

        html += `<li data-index="${index}">
                    <input type="checkbox" ${checked}>
                    <span>${item.text}</span>
                </li>`
    })

    elItem.innerHTML = html;
}

const addTodo = () => {
    let value = elInput.value;
    if (!value) {
        elInput.focus();
        return; // void
    }

    elInput.value = '';
    elInput.focus();

    items.push({ checked: false, text: value });
    render();
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

    if (tag == 'SPAN' || tag == 'INPUT') {
        el = el.parentNode;
    }

    if (el.tagName.toString().toUpperCase() == 'LI') {
        let index = el.dataset.index;
        items[index].checked = !items[index].checked;
        render();
    }
})