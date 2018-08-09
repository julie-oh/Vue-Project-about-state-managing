import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        productList: [
            {
                productName: 'product1', 
                productPrice: '10000', 
                productAvailableCount: 5, 
                productImg: '../../img/product.jpg',
                isHeart: false
            },
            {
                productName: 'product2', 
                productPrice: '10000', 
                productAvailableCount: 100, 
                productImg: '../../img/product.jpg',
                isHeart: false
            },
            {
                productName: 'product3', 
                productPrice: '10000', 
                productAvailableCount: 100, 
                productImg: '../../img/product.jpg',
                isHeart: false
            }
        ],
        cart: [],  // {' ': 0, 'product2': 3}
        isLogin: true,
    },
    mutations: {
        loginChange(state) {
            state.isLogin = !state.isLogin;
        },
        dropJaego(state, productIndex) {
            // 재고 1개 감소
            if (state.productList[productIndex].productAvailableCount !== 0) {
                state.productList[productIndex].productAvailableCount--;
                this.dispatch('dropJaegoTimer', productIndex);
            }
        },
        addToCart(state, productIndex, isHeart) {
            const productName = state.productList[productIndex].productName;
            
            debugger;
            if (Boolean(isHeart)) {
                state.cart.push(productName);
            } else {
                const idx = state.cart.indexOf(productName);
                state.cart.splice(idx, 1);
            }
        },
        changeHeartStatus(state, idx) {
            state.productList[idx].isHeart = !state.productList[idx].isHeart;
        },
        jaego() {
            return 5;
        }
    },
    getters: {
        
    },
    actions: {
        dropJaegoTimer({ commit }, productIndex) {
            setTimeout(() => commit('dropJaego', productIndex), 1000);
        }
    }
})