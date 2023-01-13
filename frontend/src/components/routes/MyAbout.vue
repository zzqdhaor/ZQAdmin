<template>
  <div id="about-div">
    <n-card id="about-card">
      <img :src="require('../../assets/about_logo.png')" style="max-width: min(80%, 400px)">
      <br/>
      <span style="font-size: 40px">ZQ Admin</span>
      <br/>
      <span style="font-style: italic">Manage your service easily!</span>
      <br/><br/>
      <n-a>
        <a href="https://github.com">Github</a>
      </n-a>
    </n-card>
  </div>
</template>
<script setup>
</script>
<script>

export default {
  name: "MyAbout"
}
</script>

<style scoped>
#about-div {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
  text-align: center;
}
#about-card {
  display: inline-block;
}
</style>