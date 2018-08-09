<template>
    <div>
        <div class="ui grid productlist">
            <span v-for="(productInfo, index) in getProductList" class="five wide column">
                <h2> {{ productInfo.productName}} </h2>
                <img v-bind:src="productInfo.productImg" />
                <p>
                    재고: {{ productInfo.productAvailableCount }}
                </p>
                <productDeadline v-bind:productIndex="index"></productDeadline>
                <addCartButton v-bind:productIndex="index"></addCartButton>
            </span>
        </div>
    </div>
</template>

<script>
import productDeadline from './button/productDeadline';
import addCartButton from './button/addCartButton';
import MyMixin from '../mixin.js';

export default {
    components: {
        'productDeadline': productDeadline,
        'addCartButton': addCartButton,
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        getProductList() {
            return this.$store.state.productList;
        }
    },
    created() {
        this.getMessage('Welcome, Vue World : )');
    },
    mixins: [MyMixin]
}
</script>

<style scoped>
img {
    width: 30%;
    height: auto;
}
.productlist {
    margin-left: 15%;
}
</style>