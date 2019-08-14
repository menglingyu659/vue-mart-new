<template>
  <div class="wrapper">
    <ul>
      <li v-for="item in cartGoods" :key="item.id">
        <div class="left">
          <img :src="item.img" />
        </div>
        <div class="right">
          <div class="title">
            课程名:
            <span>{{item.title}}</span>
          </div>
          <div class="count">
            购买人数:
            <span>{{item.count}}</span>
          </div>
          <i>+</i>
          <i>-</i>
          <div class="price">
            价格:
            <span>{{item.price}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div>总价：{{total}}</div>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['cartGoods']),
    ...mapGetters(['total'])
  }
}
</script>

<style scoped>
ul > li {
  display: flex;
  width: 100%;
  height: 10vh;
  border: 1px solid #f30;
  box-sizing: border-box;
  margin: 0.8% 0;
}

.left {
  height: 100%;
  flex: 0.3 1;
}

.left img {
  width: 100%;
  height: 100%;
}

.right {
  position: relative;
  /* text-align: center; */
  flex: 0.7;
}

.right .title {
  background-color: #f30;
  color: #fff;
  margin: 0.3vh 0 0 0;
  overflow: hidden;
  text-align: center;
}

.right .count {
  display: inline-block;
  background-color: aqua;
  margin: 1vh 0 1vh 1vh;
  padding: 0.3vh;
  border-radius: 0.3vh;
  color: #000;
}

.right .price {
  display: inline-block;
  color: #fff;
  background-color: #f10;
  padding: 0.3vh;
  font-weight: 700;
  position: absolute;
  bottom: 1vh;
  right: 1vh;
}

i {
  display: inline-block;
  font-size: 4vh;
  vertical-align: middle;
  color: red;
}
</style>