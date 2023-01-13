<template>
<n-grid id="grid-s" :item-responsive="true" x-gap="30" y-gap="30" cols="200:1 800:2 1200:3 4">
  <n-gi class="center-gi">
    <DiskInfo :percentage="(1.0 - availableDisk / totalDisk) * 100" :total_size="totalDisk" :used="totalDisk - availableDisk"/>
  </n-gi>
  <n-gi class="center-gi">
    <MemInfo :percentage="(1.0 - availableMem / totalMem) * 100" :total_size="totalMem" :used="totalMem - availableMem"/>
  </n-gi>
</n-grid>
</template>

<script>
import axios from "axios";
import MemInfo from "@/components/infos/MemInfo";
import DiskInfo from "@/components/infos/DiskInfo";
export default {
  name: "MyStatus",
  mounted() {
    let handler = () => {
      axios.get("api/info").then(r => {
        this.totalMem = r.data['totalMem']
        this.totalDisk = r.data['totalDisk']
        this.availableMem = r.data['availableMem']
        this.availableDisk = r.data['availableDisk']
      })
      return handler;
    };
    this.timer = setInterval(handler(), 3000)
  },
  unmounted() {
    clearInterval(this.timer)
  },
  components: {MemInfo, DiskInfo},
  data() {
    let timer;
    return {
      timer,
      totalMem: NaN,
      availableMem: NaN,
      totalDisk: NaN,
      availableDisk: NaN
    }
  }
}
</script>

<style>
#grid-s {
  margin-top: 50px;
  margin-bottom: 20px;
}
.center-gi {
  text-align: center;
}

</style>