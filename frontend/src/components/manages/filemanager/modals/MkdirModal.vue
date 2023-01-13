<template>
  <n-modal :show="this.show" hoverable style="padding: 20px">
    <n-card style="max-width: 600px; min-height: 180px;">
      <n-space align="center" vertical>
        Folder name:
        <n-input placeholder="" v-model:value="dirName"></n-input>
        <n-space size="large">
          <n-button @click="confirmHandler" color="green">
            Confirm
          </n-button>
          <n-button @click="cancelHandler">
            Cancel
          </n-button>
        </n-space>

      </n-space>
    </n-card>
  </n-modal>
</template>

<script>

export default {
  name: "MkdirModal",
  data() {
    return {
      dirName: null
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    cancelHandler: Function
  },
  inject: ['mkdirHandler'],
  methods: {
    confirmHandler() {
      this.mkdirHandler(this.dirName)
    }
  }
}
</script>

<style scoped>

</style>