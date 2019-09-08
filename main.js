Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
                <div class="product-image">
                    <img v-bind:src="image"/>
                </div>

                <div class="product-info">
                    <h1> {{ title }} </h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{ shipping }}</p>
                    <h2>Details</h2>
                    <ul>
                        <li v-for="d in details"> {{ d }} </li>
                    </ul>
                    <h3>Colors available:</h3>
                    <div class="color-box"
                         v-for="variant,index in variants"
                         :key = "variant.variantId"
                         :style = "{backgroundColor: variant.variantColor}"
                         @mouseover = "updateProduct(index)"
                         >

                    </div>
                    <button v-on:click="addToCart" 
                            :disabled = "!inStock" 
                            :class = "{ disabledButton: !inStock}">Add to Cart</button>

                </div>

            </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Adidas',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
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
            ]
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            else {
                return "$2.99"
            }
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
});