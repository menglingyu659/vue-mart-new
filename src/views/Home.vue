<template>
  <div>
    <header>小商城</header>
    <cube-slide ref="slide" :data="slider">
      <cube-slide-item v-for="(item, index) in slider" :key="index">
        <router-link :to="'/'">
          <img :src="item.img" />
        </router-link>
      </cube-slide-item>
    </cube-slide>

    <cube-button @click="showDrawer">分类</cube-button>
    <cube-drawer ref="drawer" title="请选择" :data="[selectKey]" @select="filter"></cube-drawer>

    <good-list :goods="goods" :keys="selectKeys" @addCart="addCart"></good-list>
  </div>
</template>
<script>
import GoodList from "@/components/GoodList.vue";
import AddCartAnimation from "@/components/AddCartAnimation.vue";
import create from "../service/create.js";
export default {
  name: "Home",
  data() {
    return {
      slider: [],
      goods: {},
      keys: [],
      selectKeys: []
    };
  },
  computed: {
    selectKey() {
      return this.keys;
    }
  },
  components: {
    GoodList
  },
  methods: {
    addCart($event) {
      console.log($event);
      let animation = create(AddCartAnimation, { $event });
      animation.start();
      animation.$on('transitionend', function() {
        console.log()
        this.remove()
      })
      //   this.ball.$event = $event;
      //   this.ball.show = true;
    },
    showDrawer() {
      this.$refs.drawer.show();
      // const MToast = this.$createMToast();
      // MToast.add({content: 'woshishei'})
      this.$toast({ content: "woshishei" });
    },
    filter(value) {
      console.log(value);
      value = value[0] == "全部" ? this.keys.slice(1) : value;
      this.selectKeys = [...value];
    }
  },
  async created() {
    const {
      data: { data: goods, slider, keys }
    } = await this.$axios.get("/api/goods");
    this.slider = slider;
    this.goods = goods;
    this.keys = keys;
    console.log(keys.slice(1));
    this.selectKeys = keys.slice(1);
  }
};
</script>
<style scoped>
div header {
  width: 100%;
  background-color: #f50;
  text-align: center;
  color: #fff;
  font-size: 3.8vh;
  font-weight: 800;
  line-height: 5vh;
  font-family: "Courier New", Courier, monospace;
}
.cube-slide-item > a > img {
  width: 100%;
}


</style>
