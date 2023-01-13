<template>
  <n-message-provider>
    <n-layout>
      <n-layout-header style="height: 60px" bordered>

        <n-grid id="grid">
          <n-gi :span="width > 800 ? 4 : 0" style=" height: 60px">
            <div style=" display: flex; height: 60px; align-items: center;">
                <span style="font-family: 'system-ui',serif; font-size: 25px; margin-left: 20px">ZQAdmin</span>
            </div>
          </n-gi>
          <n-gi id="route-tag" :span="width > 800 ? 14 : 18">
            <div id="routes">
              <router-link to="/status">
                Status
              </router-link>
              <router-link to="/file">
                Files
              </router-link>
              <router-link to="/xterm">
                Term
              </router-link>
              <router-link to="/about">
                About
              </router-link>
            </div>
          </n-gi>
          <n-gi span="6" id="other-links">
            <n-button tag="a" href="logout" quaternary>Logout</n-button>
            <n-button tag="a" href="https://github.com" quaternary>GitHub</n-button>
          </n-gi>
        </n-grid>
      </n-layout-header>
      <n-layout-content>
        <router-view/>
      </n-layout-content>
    </n-layout>
  </n-message-provider>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      width: window.innerWidth
    }
  },
  mounted() {

    window.addEventListener("resize",() => {
      this.width = window.innerWidth
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  text-align: center;
  text-decoration: none;
  color:#333;
  font-family:sans-serif;
  font-size: 15px;
}
#routes {
  margin-left: 50px;
  gap: 30px;
  display: flex;
  height: 60px;
  text-align: start;
  align-items: center;
  vertical-align: center;
}
#other-links {
  gap: 5px;
  float: right;
  display: flex;
  flex-direction: row-reverse;
  height: 60px;
  margin-right: 10px;
  align-items: center;
  vertical-align: center;

}
</style>
<style scoped>
a.router-link-active {
  color: #00a100;
}
</style>
