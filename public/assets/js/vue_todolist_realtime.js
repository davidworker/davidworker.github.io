import { App } from './Firebase/App.js';
import { Auth } from './Firebase/Auth.js';
import { Database } from './Firebase/Database.js'

const app = await App.init();
const auth = new Auth(app);
const db = new Database(app);

Vue.createApp({
    data() {
        return {
            isAuth: false,
            auth: {
                account: '',
                secret: '',
            },
            user: {},
        }
    },
    methods: {
        initAuth() {
            this.auth.account = '';
            this.auth.secret = '';
        },
        async login() {
            let account = this.auth.account
            let password = this.auth.secret

            if (!account) {
                await Swal.fire({
                    title: '登入失敗',
                    html: '帳號未填寫',
                    icon: 'error'
                })
                setTimeout(() => {
                    this.$refs.auth_account.focus();
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
                    this.$refs.auth_secret.focus();
                }, 500)
                return
            }

            let user = await auth.signIn(account, password);
            if (user) {
                await Swal.fire({
                    title: '登入成功',
                    html: `已登入: ${account}`,
                    icon: 'success'
                })
                this.initAuth();
            } else {
                Swal.fire({
                    title: '登入失敗',
                    html: '帳號密碼錯誤',
                    icon: 'error'
                })
            }
        },
        async logout() {
            await auth.signOut()
            await Swal.fire({
                title: '登出成功',
                html: `已登出，請重新登入`,
                icon: 'success'
            })
            this.isAuth = false
        },
        async register() {
            let account = this.auth.account
            let password = this.auth.secret

            if (!account) {
                await Swal.fire({
                    title: '註冊失敗',
                    html: '帳號未填寫',
                    icon: 'error'
                })
                setTimeout(() => {
                    this.$refs.auth_account.focus();
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
                    this.$refs.auth_secret.focus();
                }, 500)
                return
            }

            let user = await auth.register(account, password);
            if (user) {
                Swal.fire({
                    title: '註冊成功',
                    html: '請登入',
                    icon: 'success'
                })
                await auth.signOut();
                this.initAuth();
            } else {
                Swal.fire({
                    title: '註冊失敗',
                    html: '請稍後再試',
                    icon: 'error'
                })
            }
        },
        authed(user) {
            console.log('authed')
            this.user = user;
            this.isAuth = true;
        },
        unauthed() {
            console.log('unauthed')
            this.user = {};
            this.isAuth = false;
        }
    },
    mounted() {
        auth.onChange(this.authed, this.unauthed);
        console.log('todo app is mounted.')

    }
}).mount('#todo-app')