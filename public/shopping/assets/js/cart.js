Vue.createApp({
    data() {
        return {
            items: {}
        }
    },
    async mounted() {
        let response = await fetch('assets/database/menu.json');
        let data = await response.json();
        this.items = data;
    }
}).mount('#header-menu')


Vue.createApp({
    data() {
        return {
            items: {},
            cart_key: 'david_shopping',
        }
    },
    methods: {
        getCart() {
            let cart = localStorage.getItem(this.cart_key);
            if (cart) {
                cart = JSON.parse(cart);
            } else {
                cart = {}
            }
            return cart;
        },
        setCart(cart) {
            localStorage.setItem(this.cart_key, JSON.stringify(cart));
        },
        calcTotal() {
            let total = 0;
            for (let k in this.items) {
                let item = this.items[k];
                total += item.price * item.qty
            }
            return total
        },
        addQty(item) {
            this.items[item.id].qty++;
            this.setCart(this.items);
        },
        minusQty(item) {
            this.items[item.id].qty--;
            if (this.items[item.id].qty <= 0) {
                delete this.items[item.id]
            }
            this.setCart(this.items);
        },
        remove(item) {
            delete this.items[item.id]
            this.setCart(this.items);
        }
    },
    async mounted() {
        this.items = this.getCart();
        if (Object.keys(this.items).length <= 0) {
            location.href = 'index.html'
        }
    }
}).mount('#cart-app')