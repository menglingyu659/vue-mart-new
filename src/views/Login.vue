<template>
  <div>
    {{model}}
    <cube-form :model="model" :schema="schema" @validate="validateHandler" @submit.prevent="submit"></cube-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "账号",
            props: {
              placeholder: "请输入账号"
            },
            rules: {
              required: true
            },
            trigger: "submit",
            messages: { required: "账号不可为空" }
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              type: "password",
              placeholder: "请输入密码",
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            },
            trigger: "submit",
            messages: { required: "密码不可为空" }
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    validateHandler(err) {
      console.log(err);
    },
    async submit() {
      let res = "";
      try {
        res = await this.$axios.get("/api/login", {
          params: {
            username: this.model.username,
            password: this.model.password
          }
        });
      } catch (error) {
        console.log(error);
      }
      const { token, code, msg } = res.data;
      if (code == 0 && res.status == 200) {
        localStorage.setItem("token", token);
        this.$store.commit("setToken", token);
        console.log('success')
      } else {
        const toast = this.$createToast({
          time: 2000,
          txt: msg || "登陆失败",
          type: "error"
        });
      }
    }
  }
};
</script>
<style scoped>
</style>
