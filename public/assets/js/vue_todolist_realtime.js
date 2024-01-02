Vue.createApp({
    data() {
        return {
            isAuth: false,
            auth: {
                account: '',
                secret: '',
            }
        }
    },
    methods: {
        async login() {
            console.log(this.$refs)
            this.$refs.auth_account.focus();
            return;


            if (!this.auth.account) {
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


            return;

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
        }
    },
    mounted() {
        console.log('todo app is mounted.')
    }
}).mount('#todo-app')