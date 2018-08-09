<template>
    <span>
        <button v-if="heartStatus" v-bind:class="[ isLogin ? 'ui icon button' : 'ui icon button disabled' ]" @click="clickHeartIcon(false)">
          <i class="heart icon red"></i>
        </button>
        <button v-else="heartStatus" v-bind:class="[ isLogin ? 'ui icon button' : 'ui icon button disabled' ]" @click="clickHeartIcon(true)">
          <i class="heart outline icon red"></i>
        </button>
    </span>
</template>

<script>
export default {
    data() {
        return {
            isHeart: this.heartStatus(),
            isLogin: this.isLogin(),
            // iconEnabled: 'ui icon button',
            // iconDisabled: 'ui icon button disabled'
        }
    },
    props: {
        productIndex: Number,  // string 말고 숫자 타입이라고 정해주는 것!
    },
    methods: {
        clickHeartIcon(clickIsHeart) {
            this.$store.commit('addToCart', this.productIndex, clickIsHeart);
            this.getLoginSession(this.responseToMessage);
        },
        getLoginSession(callback) {
            callback(this.$store.state.isLogin);
        },
        responseToMessage(res) {
            if (res) {
                this.$store.commit('changeHeartStatus', this.productIndex);
            } else {
                alert('로그인 하고 눌러라잉');
            }
        },
    },
    computed: {
        heartStatus() {
            return this.$store.state.productList[this.productIndex].isHeart;
        },
        isLogin() {
            return this.$store.state.isLogin;
        }
    }
}
</script>

<style scoped>
</style>
