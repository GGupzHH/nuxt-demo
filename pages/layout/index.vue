<template>
  <div>
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link active" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item" v-if="userInfo.username">
            <nuxt-link class="nav-link" to="/">
              <i class="ion-compose"></i>&nbsp;New Post
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="userInfo.username">
            <nuxt-link class="nav-link" to="/setting">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="!userInfo.username">
            <nuxt-link class="nav-link" to="/login">
              Sign in
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="!userInfo.username">
            <nuxt-link class="nav-link" to="/register">
              Sign up
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/" v-if="userInfo.username">
              {{ userInfo.username }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- / 顶部导航栏 -->

    <!-- 子路由 -->
    <nuxt-child />
    <!-- / 子路由 -->

    <!-- 底部导航栏 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
    <!-- / 底部导航栏 -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'LayoutIndex',
    data() {
        return {

        };
    },
    computed: {
      ...mapState({
        userInfo: 'userInfo'
      })
    },
    created() {

    },
    mounted() {
    },
    methods: {
      
    }
};
</script>

<style scoped lang="scss">

</style>
