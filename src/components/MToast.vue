<template>
  <div class="totast">
    <div v-for="item in alerts" :key="item.id">
      <div class="content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MToast",
  data() {
    return {
      alerts: [],
      idArr: []
    };
  },
  created() {
    this.id = 0;
  },
  methods: {
    add(options) {
      options = options || { content: "至少设置content" };
      this.id++;
      const option = { ...options, id: this.id };
      this.alerts.push(option);
      console.log(option);
      this.idArr.push(this.id);
      const duration = options.duration || 3000;
      setTimeout(() => {
        this.del(this.id);
      }, duration);
    },
    del(id) {
      console.log(this.idArr.indexOf(id));
      this.idArr.splice(this.idArr.indexOf(id), 1);
      this.alerts.splice(this.idArr.indexOf(id), 1);
    }
  }
};
</script>

<style scoped>
.totast {
  position: fixed;
  width: 100%;
  top: 50%;
  z-index: 999;
  text-align: center;
}

.content {
  display: inline-block;
  padding: 25px 35px;
  margin: auto;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
