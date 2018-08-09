<template>
    <button class="ui icon button" @click="showCart">
        <i class="shopping cart icon"></i>
        <cartModal></cartModal>
    </button>
</template>

<script>
import cartModal from '../modal/cartModal'
import MyMixin from '../../mixin.js'

export default {
    components: {
        'cartModal': cartModal
    },
    methods: {
        showCart() {
            alert(JSON.stringify(this.$store.state.cart));
        },
    },
    data() {
        return {
            showModal: true
        }
    },
    mixins: [MyMixin],
}
</script>

<style scoped>
</style>