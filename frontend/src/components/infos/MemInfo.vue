<template>
  <n-spin :show="isNaN(percentage)">
    <n-card class="small-card inline-card" title="Memory Info">
      <n-progress id="progress" type="line" :percentage="parseInt(percentage.toString())" :color="percentage >= 90 ? 'red' : ''"/>
      <div id="align-left">
        <span>Total Memory: {{ total_size }}</span>
        <br/>
        <span>Used: {{ used }}</span>
        <br/>
        <span>Available: {{ total_size - used }}</span>
      </div>
    </n-card>
  </n-spin>
</template>

<script>
export default {
  name: "memInfo",
  props: {
    percentage: Number,
    total_size: Number,
    used: Number
  }
}
</script>

<style scoped>
#float-nav-to-folder-manage {
  position: relative;
  top: 120px;
  left: 230px;
}

#align-left {
  text-align: left;
}

#progress {
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