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
            order_key: 'david_order',
            buyer: {
                name: '',
                phone: '',
                address: '',
            }
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
        async doCheckout() {
            for (let f in this.buyer) {
                if (!this.buyer[f]) {
                    Swal.fire({
                        title: '成立失敗',
                        html: '欄位未填寫',
                        icon: 'error'
                    })
                    return;
                }
            }

            let data = {
                no: this.uuid(),
                items: this.items,
                buyer: this.buyer,
                total: this.calcTotal(),
            }

            let order = this.getOrder();
            order[data.no] = data;
            this.setOrder(order);


            await Swal.fire({
                title: '訂單成立中',
                html: '正在進行第三方交易...',
                timer: 3000,
                didOpen() {
                    Swal.showLoading()
                }
            })

            this.setCart({});
            await Swal.fire({
                title: '訂單已成立',
                html: `交易序號: ${data.no}`,
                icon: 'success'
            })
            location.href = 'index.html'
        },
        uuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8; return v.toString(16); });
        },
        getOrder() {
            let order = localStorage.getItem(this.order_key);
            if (order) {
                order = JSON.parse(order);
            } else {
                order = {}
            }
            return order;
        },
        setOrder(order) {
            localStorage.setItem(this.order_key, JSON.stringify(order));
        },
    },
    async mounted() {
        this.items = this.getCart();
        if (Object.keys(this.items).length <= 0) {
            location.href = 'index.html'
        }
    }
}).mount('#checkout-app')