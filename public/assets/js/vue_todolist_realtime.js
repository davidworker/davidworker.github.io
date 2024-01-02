Vue.createApp({
    data() {
        return {
            isAuth: false,
            auth: {
                account: 'aaaa',
                secret: 'bbbb',
            }
        }
    },
    methods: {},
    mounted() {
        console.log('todo app is mounted.')
    }
}).mount('#todo-app')