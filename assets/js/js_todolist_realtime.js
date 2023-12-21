import { TodoRealtime } from './class/TodoRealtime.js';
// import { UID } from './class/UID.js';
import { App } from './Firebase/App.js';
import { Auth } from './Firebase/Auth.js';

const app = await App.init();
const auth = new Auth(app);

let todoApp = document.querySelector('#todo-app');
let uidApp = document.querySelector('#uid-app');
let isRegisterMode = false;

// let user = await auth.register(email, password);
// let user = await auth.signIn(email, password);
// console.log(user);

const authed = async (user) => {
    if (isRegisterMode) {
        await Swal.fire({
            title: '註冊成功',
            html: `已註冊，請登入`,
            icon: 'success'
        })
        location.reload();
        return;
    }
    let uid = user.uid;
    todoApp.classList.add('active');
    // TODO Application.
    let elInput = document.querySelector('#todo-in');
    let elAddBtn = document.querySelector('#todo-add-btn');
    let elItem = document.querySelector('#todo-item');
    let elChangeUid = document.querySelector('#change-uid-btn');
    let todo = new TodoRealtime(elItem, uid);

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

    elChangeUid.addEventListener('click', async (e) => {
        e.preventDefault();
        await auth.signOut()
        location.reload();
    })


    let elCurentUid = document.querySelector('#current-uid');
    elCurentUid.innerHTML = uid
}

const unauthed = () => {
    uidApp.classList.add('active');
    let elAccount = document.querySelector('#todo-account');
    let elPassword = document.querySelector('#todo-password');

    let elSignInBtn = document.querySelector('#todo-signin-btn')
    elSignInBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        let account = elAccount.value;
        let password = elPassword.value;
        if (!account) {
            await Swal.fire({
                title: '登入失敗',
                html: '帳號未填寫',
                icon: 'error'
            })
            setTimeout(() => {
                elAccount.focus();
            }, 500)
            return
        }

        if (!password) {
            await Swal.fire({
                title: '登入失敗',
                html: '密碼未填寫',
                icon: 'error'
            })
            setTimeout(() => {
                elPassword.focus();
            }, 500)
            return
        }

        isRegisterMode = false;

        let user = await auth.signIn(account, password);
        if (user) {
            uidApp.classList.remove('active');
            Swal.fire({
                title: '登入成功',
                html: `已登入: ${account}`,
                icon: 'success'
            })
        } else {
            Swal.fire({
                title: '登入失敗',
                html: '帳號密碼錯誤',
                icon: 'error'
            })
        }
    })

    let elRegisterBtn = document.querySelector('#todo-register-btn')

    elRegisterBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        let account = elAccount.value;
        let password = elPassword.value;
        if (!account) {
            await Swal.fire({
                title: '註冊失敗',
                html: '帳號未填寫',
                icon: 'error'
            })
            setTimeout(() => {
                elAccount.focus();
            }, 500)
            return
        }

        if (!password) {
            await Swal.fire({
                title: '註冊失敗',
                html: '密碼未填寫',
                icon: 'error'
            })
            setTimeout(() => {
                elPassword.focus();
            }, 500)
            return
        }

        isRegisterMode = true;
        let user = await auth.register(account, password);
        if (user) {
            await auth.signOut();
            elAccount.value = ''
            elPassword.value = ''
        } else {
            Swal.fire({
                title: '註冊失敗',
                html: '請稍後再試',
                icon: 'error'
            })
        }
    })

    // let elUid = document.querySelector('#todo-uid');
    // let elBtn = document.querySelector('#todo-uid-btn');
    // elBtn.addEventListener('click', (e) => {
    //     let value = elUid.value;
    //     if (value) {
    //         location.reload();
    //     }
    // })
}

auth.onChange(authed, unauthed);