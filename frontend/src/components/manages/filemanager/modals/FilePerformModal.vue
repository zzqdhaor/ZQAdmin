<template>
  <template>
    <n-modal :show="this.show" hoverable style="padding: 20px">
      <n-card style="max-width: 600px; min-height: 180px;">
        <n-space align="center" vertical>
          "{{this.name}}" is a file, do you mean downloading it?
          <n-space size="large" style="margin-top: 30px">
            <n-button @click="downHandler" color="green">Download</n-button>
            <n-button @click="cancelHandler">Cancel</n-button>
          </n-space>
        </n-space>
      </n-card>
    </n-modal>
  </template>
</template>
<script>
export default {
  name: "FilePerformModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    cancelHandler: Function
  },
  inject: ['path'],
  methods: {
    downHandler() {
      window.open("api/file/get-file?path=" + encodeURI(this.path.join('') + this.name))
    }
  }
}
</script>

<style scoped>

</style>