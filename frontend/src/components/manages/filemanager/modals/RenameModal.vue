<template>
  <n-modal :show="this.show" hoverable style="padding: 20px">
    <n-card style="max-width: 600px; min-height: 180px;">
      <n-space align="center" vertical>
        New name:
        <n-input placeholder="" v-model:value="newName"></n-input>
        <n-space size="large">
          <n-button @click="confirmHandler" color="green">
            Rename
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
import {ref} from "vue";

export default {
  name: "RenameModal",
  data() {
    return {
      newName: ref(null)
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    cancelHandler: Function
  },
  inject: ['renameConfirmHandler'],
  methods: {
    confirmHandler() {
      this.renameConfirmHandler(this.newName)
    }
  }
}
</script>

<style scoped>

</style>