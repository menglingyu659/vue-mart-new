<template>
  <div id="app1">
    <m-header title="小商城欢迎你"></m-header>

    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>

    <cube-tab-bar show-slider v-model="selectLabel" @change="changeHandler">
      <cube-tab v-for="(item, index) in tabs" :key="index" :icon="item.icon" :label="item.value">
        <span>{{item.label}}</span>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectLabel: "/", // 默认页签
      tabs: [
        { label: "Home", value: "/", icon: "cubeic-home" },
        { label: "Cart", value: "/cart", icon: "cubeic-mall" },
        { label: "Me", value: "/login", icon: "cubeic-person" }
      ],
      transitionName: "route-forward"
    };
  },
  watch: {
    $route(route) {
      this.selectLabel = route.path;
      this.transitionName = this.$router.transitionName;

      console.log('route')
    }
  },
  created() {
    // 初始化页签设置
    this.selectLabel = this.$route.path;
  },
  methods: {
    changeHandler(val) {
      console.log(val);
      console.log(this.$route.path)
      this.selectLabel = this.$route.path;
      this.$router.push(val);
      // this.$router.push(val);
    }
  }
};
</script>

<style>
body {
  cursor: pointer;
}
#app1 {
  padding-bottom: 35px;
}
.cube-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #aaa;
}

.route-forward-enter {
  transform: translateX(-100%)
}

.route-forward-leave-to {
  transform: translateX(100%)
}

.route-back-enter {
  transform: translateX(100%)
}

.route-back-leave-to {
  transform: translateX(-100%)
}

.route-back-enter-active,
.route-back-leave-active,
.route-forward-enter-active,
.route-forward-leave-active {
  transition: transform .3s
}

.child-view {
  width: 100%;
  position: absolute;
  /* left: 0;
  top: 0; */
}
</style>
