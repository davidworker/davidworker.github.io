Vue.createApp({
    data() {
        return {
            isAuth: false,
        }
    },
    methods: {},
    mounted() {
        console.log('todo app is mounted.')
    }
}).mount('#todo-app')