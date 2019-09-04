var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Adidas',
        selectedVariant: 0,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
                variantId: 2234, 
                variantColor: "#289762",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235, 
                variantColor: "	#40546D", 
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
        cart: 0    
    },

    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        }
    },

    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
});