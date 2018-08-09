<template>
    <div id="app">
        <div>
            <mainHeader></mainHeader>
            <loginSessionButton></loginSessionButton>
            <cartButton></cartButton>
        </div>
        <div>
            <productList></productList>
        </div>
        
    </div>
</template>

<script>
import mainHeader from './component/mainHeader'
import cartButton from './component/button/cartButton'
import loginSessionButton from './component/button/loginSessionButton'
import productInfo from './component/productInfo'
import productList from './component/productList'

export default {
    components: {
        'mainHeader': mainHeader,
        'cartButton': cartButton,
        'loginSessionButton': loginSessionButton,
        'productInfo': productInfo,
        'productList': productList
    },
    data() {
        
    }
}
</script>

<style scoped>

</style>
