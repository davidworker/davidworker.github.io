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


const doGet = () => {
    let request = new XMLHttpRequest()

    request.addEventListener('load', () => {
        console.log('loaded')
        console.log(request.responseText)
    })

    request.open('GET', 'https://book.niceinfos.com/frontend/api/?action=sleep')
    request.send()
    console.log('doGet run.')
}

// doGet();

const doFetch = () => {
    let api = 'https://book.niceinfos.com/frontend/api/?action=sleep'

    fetch(api)
        .then((response) => {
            return response.text()
            // return response.json()
        })
        .then((data) => {
            console.log(data)
        })

    console.log('doFetch run.')
}

// doFetch();


const doFetchPost = () => {
    let api = 'https://book.niceinfos.com/frontend/api/'

    let params = {
        action: 'demo',
        data: { a: 1, b: 2 },
    }

    let options = {
        method: 'POST',
        body: JSON.stringify(params),
    }

    fetch(api, options)
        .then((response) => {
            return response.text()
            // return response.json()
        })
        .then((data) => {
            console.log(data)
        })
}

// doFetchPost();

const doUploadFile = (file) => {
    if (!file) {
        return
    }

    let api = 'https://book.niceinfos.com/frontend/api/'

    let form = new FormData()
    form.append('action', 'upload')
    form.append('file', file)

    let options = {
        method: 'POST',
        body: form,
    }

    fetch(api, options)
        .then((response) => {
            return response.text()
            // return response.json()
        })
        .then((data) => {
            console.log(data)
        })
}

let elUpload = {
    file: document.querySelector('#upload-file'),
    button: document.querySelector('#do-upload'),
    preview: document.querySelector('#preview')
}

elUpload.button.addEventListener('click', (e) => {
    let file = elUpload.file.files[0]

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
        elUpload.preview.src = reader.result;
    }
    doUploadFile(file)
})