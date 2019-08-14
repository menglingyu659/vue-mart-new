<template>
  <div class="ball-wrap">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ball.show">+</div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "create",
  props: ["$event"],
  data() {
    return {
      ball: {
        show: false,
        $event: this.$event
      }
    };
  },
  methods: {
    start() {
      //   this.ball.$event = $event;
      this.ball.show = true;
    },
    beforeEnter(el) {
      console.log(this.$event);
      let x = this.ball.$event.clientX;
      let y = this.ball.$event.clientY;
      const windowW = window.innerWidth;
      const windowH = window.innerHeight;
      const _x = -(windowW / 2 - x + 8);
      const _y = -(windowH - y - 15);
      el.style.transform = `translate3d(${_x}px, ${_y}px, 0)`;
    },
    enter(el, done) {
      document.body.offsetHeight;
      el.style.transform = `translate3d(0, 0, 0)`;
      el.addEventListener("transitionend", done);

      console.log(done);
    },
    afterEnter(el) {
        this.ball.show = false;
        el.style.display = "none";
        this.$emit('transitionend')
      console.log(el);
    }
  }
};
</script>
<style scoped>
.ball {
  width: 16px;
  background-color: red;
  border-radius: 50%;
  position: fixed;
  left: 50%;
  bottom: 10px;
  z-index: 10000;
  transition: transform .5s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  color: #fff;
  text-align: center;
  line-height: 16px;
  font-size: 15px;
  font-weight: 700;
}
</style>
