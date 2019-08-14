<template>
  <div>
    <div class="defau">
      <i v-if="canB" @click="back">&lt;</i>
      <header>{{title}}</header>
    </div>
    <div class="expent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "请输入title"
    }
  },
  watch: {
    $route() {
        console.log(111111)
        this.canB = this.$routerHistory.canBack()
    }
  },
  data() {
    return {
      H: this.$routerHistory._history,
      canB: false
    };
  },
  methods: {
    back() {
      this.$router.goBack();
    }
  }
};
</script>

<style scoped>
.defau {
  display: flex;
  line-height: 4vh;
  background-color: #000;
  color: #fff;
  font-weight: 700;
  width: 100%;
}

.defau header {
  font-family: "Courier New", Courier, monospace;
  margin: auto;
  /* transform: translateX(-10px); */
}

.defau i {
  margin-left: 10px;
  color: #f40;
  font-size: 20px;
  /* padding-left: 10px;  */
}
</style>
