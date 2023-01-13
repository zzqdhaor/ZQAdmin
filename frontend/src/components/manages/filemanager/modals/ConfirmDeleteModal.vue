<template>
<n-modal :show="show" hoverable style="padding: 20px">
  <n-card style="max-width: 600px; min-height: 180px;">
    <n-space align="center" vertical>
      <n-icon size="60">
        <DeleteOutlined/>
      </n-icon>
      Delete "{{filepath}}" ?
      <n-space size="large">
        <n-button @click="confirmHandler" color="red">
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
import { DeleteOutlined } from "@vicons/material"
export default {
  name: "ConfirmDeleteModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    filepath: {
      type: String
    },
    cancelHandler: Function,
    confirmHandler: Function
  },
  components: {
    DeleteOutlined
  },
  setup() {
    return {
      DeleteOutlined
    }
  }
}

</script>

<style scoped>

</style>