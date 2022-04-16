<template>
  <div class="cart_list">
    <scroll ref="scroll" class="content">
      <cart-list-item
        v-for="(item, index) in $store.state.cartList"
        :key="index"
        :item-info="item"
        ref="item"
        @click="click"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "views/cart/childComps/CartListItem";
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"]),
  },
  components: {
    CartListItem,
    Scroll,
  },
  activated() {
    this.$refs.scroll.refresh();
    // console.log("----") ;
  },
  methods: {
    click() {
      this.$router.push("/detail/" + this.$refs.item.iteminfo.iid);
    },
  },
};
</script>

<style scoped>
.cart_list {
  /* height: calc(100% - 44px - 49px - 40px); */
  height: 100vh;
  /* position: relative;
  height: 100vh; */
}
/**
* scroll
*/
.content {
  /* height: 100vh; */
  /* overflow: hidden; */
  height: calc(100% - 44px - 49px - 40px);
}
</style>