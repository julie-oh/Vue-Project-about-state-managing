<template>
    <button class="negative ui button" @click="onPoomjulImbakClick">
        {{ buttonMessage }}
    </button>
</template>

<script>
import MyMixin from '../../mixin.js';

export default {
    data() {
        return {
            buttonMessage: "품절임박",
        };
    },
    props: {
        productIndex: Number, 
    },
    methods: {
        // 버튼을 누르면 store의 dropJaegoTimer를 호출
        onPoomjulImbakClick() {
            this.$store.dispatch('dropJaegoTimer', this.productIndex);
            const checkAvailableAndChangeMessage = () => {
                setTimeout(() => {
                    // 재고가 있는지 보고
                    if (this.$store.state.productList[this.productIndex].productAvailableCount == 0) {
                        this.changeMessageSoldOut();  // 없으면 '품절'로 고친다
                        this.getMessage('품절되었습니다.')
                    } else {
                        // 재고가 있으면, 500ms 있다가 다시 체크한다
                        checkAvailableAndChangeMessage();
                    }
                }, 500);
            };
            checkAvailableAndChangeMessage();
        },
        changeMessageSoldOut() {
            this.buttonMessage = "품절";
        },
    },
    mixins: [MyMixin]
}
</script>

<style scoped>
</style>