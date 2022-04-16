<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>

    <cart-list class="cart-list"></cart-list>

    <cart-bottom-bar class="bottom"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "views/cart/childComps/CartList";
import CartBottomBar from "views/cart/childComps/CartBottomBar";
import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Scroll,
  },

  computed: {
    //两种语法
    // ...mapGetters(["cartLength"]),
    ...mapGetters({
      length: "cartLength",
    }),
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
  position: relative;
}
.bottom {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
