<template>
    <button v-if="getIsLogin" class="ui secondary button" @click="reverseIsLogin">
      log-out
    </button>
    <button v-else="getIsLogin" class="ui secondary button" @click="reverseIsLogin">
      log-in
    </button>
</template>

<script>
export default {
    // data() {
    //     return {
    //         isLogin: true
    //     }
    // },
    created() {
        // this.getIsLogin();
    },
    computed: {
        getIsLogin() {
            return this.$store.state.isLogin;
        }
    },
    methods: {
        reverseIsLogin() {
            this.$store.commit('loginChange');
        }
    },
}
</script>

<style scoped>
</style>