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
            items: [],
            cart_key: 'david_shopping',
        }
    },
    methods: {
        addToCart(item) {
            let cart = this.getCart();
            if (cart[item.id]) {
                cart[item.id].qty++;
            } else {
                cart[item.id] = item;
                cart[item.id].qty = 1;
            }

            this.setCart(cart);
            Swal.fire({
                title: '已加入購物車',
                html: `${item.name} 已加入購物車，目前數量 ${cart[item.id].qty}`,
                icon: 'success'
            })
        },
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
        }
    },
    async mounted() {
        let response = await fetch('assets/database/product.json');
        let data = await response.json();
        this.items = data;

    }
}).mount('#product-app')