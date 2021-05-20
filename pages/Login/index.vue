<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages" v-if="apiError">
            <li v-for="(errorTitle, key) in apiErrorData" :key="key">
              {{ key + ' ' +errorTitle }}
            </li>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!currentRouter">
              <input v-model="userInfo.userName" class="form-control form-control-lg" type="text" placeholder="Username">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="userInfo.email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="userInfo.passWord" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ currentRouter ? 'Sign in' : 'Sign up' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from 'request'
export default {
  name: 'Login',
  data() {
    return {
      apiError: false,
      apiErrorData: '',
      userInfo: {
        email: '',
        userName: '',
        passWord: ''
      }
    };
  },
  computed: {
    currentRouter () {
      return this.$route.name === 'Login'
    }
  },
  created() {
  },
  mounted() {
    
  },
  methods: {
    async onSubmit () {
      this.currentRouter ? this.login() : this.register()
    },
    async login () {
      const res = await request.post('/users/login', {
        "user":{
          "email": this.userInfo.email,
          "password": this.userInfo.passWord
        }
      })
      if (res.status === 422) {
        this.apiError = true
        this.apiErrorData = res.data.errors
        console.log(res)
      } else {
        this.apiError = false
        this.apiErrorData = {}
        // 登录成功 保存状态
        console.log(this.$store)
        this.$store.commit('upDataUserInfo', res.user)
        this.$router.push({
          path: '/'
        })
      }
      console.log(this.$store)
      console.log(this.$store.state.userInfo)
    },
    async register () {
      const res = await request.post('/users', {
        "user":{
          "username": this.userInfo.userName,
          "email": this.userInfo.email,
          "password": this.userInfo.passWord
        }
      })
      if (res.status === 422) {
        this.apiError = true
        this.apiErrorData = res.data.errors
      } else {
        this.apiError = false
        this.apiErrorMsg = {}
        // 注册成功直接登录 并且重定向到 /
        this.$store.commit('upDataUserInfo', res.user)
        this.$router.push({
          path: '/'
        })
      }
    }
  },
  
};
</script>

<style scoped lang="scss">

</style>
