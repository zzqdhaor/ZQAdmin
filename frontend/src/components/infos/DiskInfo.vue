<template>
  <n-spin :show="isNaN(percentage)">
    <n-card class="small-card inline-card" title="Disk Info">
      <n-progress id="progress" type="line" :percentage="parseInt(percentage.toString())" :color="percentage >= 90 ? 'red' : ''"/>
      <div id="align-left">
        <span>Total Size: {{total_size}}</span>
        <br/>
        <span>Used: {{used}}</span>
        <br/>
        <span>Available: {{total_size - used}}</span>
      </div>
    </n-card>
  </n-spin>

</template>

<script>
export default {
  name: "diskInfo",
  props: {
    percentage: Number,
    total_size: Number,
    used: Number
  }
}
</script>

<style scoped>
#float-nav-to-folder-manage {
  position: absolute;
  top: 120px;
  left: 230px;
}
#align-left {
  text-align: left;
}
#progress {
  display: block;
  margin-bottom: 25px;
}
.inline-card {
  display: inline-block;
}
.small-card {
  height: 200px;
  max-width: 400px;
}
</style>