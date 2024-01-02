import { App } from './Firebase/App.js';
import { Auth } from './Firebase/Auth.js';
import { Database } from './Firebase/Database.js'

Vue.createApp({
    data() {
        return {
            isAuth: false,
            auth: {
                account: '',
                secret: '',
            },
            firebase: {
                auth: '',
                database: ''
            }
        }
    },
    methods: {
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


            // isRegisterMode = false;

            let user = await this.firebase.auth.signIn(account, password);
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
        }
    },
    async mounted() {
        const app = await App.init();
        this.firebase.auth = new Auth(app);
        this.firebase.database = new Database(app);
        console.log('todo app is mounted.')
    }
}).mount('#todo-app')