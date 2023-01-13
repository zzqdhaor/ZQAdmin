<template>
  <RenameModal :show="renameShow" :cancel-handler="renameCancelHandler" :confirm-handler="renameConfirmHandler"/>
  <ConfirmDeleteModal :filepath="ownPath" :show="confirm" :cancel-handler="cancelHandler" :confirm-handler="deleteConfirmHandler"/>
  <n-space @mouseover="setVis" @mouseleave="disVis" align="center">
    <n-icon size="40">
      <InsertDriveFileRound v-if="type === false"/>
      <FolderOpenRound v-else/>
    </n-icon>
    <span>{{filename}}</span>
    <n-button-group style="position:absolute; bottom: 10px; right: 10px; background-color: white; border-radius: 40px; box-shadow: #e5e5e5 0 0 10px 3px" v-show="vis">
      <n-button color="grey" circle quaternary @click.prevent="deleteHandler($event)">
        <template #icon>
          <n-icon size="21">
            <DeleteOutlineOutlined/>
          </n-icon>
        </template>
      </n-button>
      <n-button color="grey" circle quaternary @click.prevent="copyHandler($event, false)">
        <template #icon>
          <ContentCopyRound/>
        </template>
      </n-button>
      <n-button color="grey" circle quaternary @click.prevent="copyHandler($event, true)">
        <template #icon>
          <ContentCutRound/>
        </template>
      </n-button>
      <n-button color="grey" circle quaternary @click.prevent="renameHandler($event)">
        <template #icon>
          <n-icon size="22">
            <DriveFileRenameOutlineOutlined/>
          </n-icon>
        </template>
      </n-button>
    </n-button-group>
  </n-space>
</template>

<script>

import {FolderOpenRound, InsertDriveFileRound, DeleteOutlineOutlined, ContentCopyRound, ContentCutRound, DriveFileRenameOutlineOutlined} from "@vicons/material"
import axios from "axios";
import ConfirmDeleteModal from "@/components/manages/filemanager/modals/ConfirmDeleteModal";
import RenameModal from '@/components/manages/filemanager/modals/RenameModal';
export default {
  name: "singleEntry",
  props: {
    type: Boolean,
    filename: String,
  },
  components: {
    ConfirmDeleteModal,
    FolderOpenRound,
    InsertDriveFileRound,
    DeleteOutlineOutlined,
    ContentCopyRound,
    ContentCutRound,
    DriveFileRenameOutlineOutlined,
    RenameModal,
  },
  data() {
    const setVis = () => {
      if (this.filename === '..') return
      this.vis = true
    }
    const disVis = () => {
      this.vis = false
    }
    return {
      inCopyStatus: false,
      vis: false,
      setVis, disVis,
      confirm: false,
      renameShow: false,
      ownPath: this.path.join('') + this.filename
    }
  },
  setup() {
    return {
      FolderOpenRound,
    }
  },
  provide() {
    return {
      renameConfirmHandler: this.renameConfirmHandler
    }
  },
  inject:['reload', 'path', 'selectedCopyFile'],
  methods: {
    renameHandler(event) {
      event.stopPropagation();
      this.renameShow = true;
    },
    copyHandler(event, isCut) {
      event.stopPropagation()
      this.selectedCopyFile(this.ownPath, isCut)
    },
    cancelHandler() {
      this.confirm = false;
    },
    renameCancelHandler() {
      this.renameShow = false;
    },
    renameConfirmHandler(newName) {
      axios.post("api/file/rename", {from: this.ownPath, to: newName}).then(r => {
        if (r.data['success'] === true) this.reload()
        else this.renameShow = false
      })
    },
    deleteConfirmHandler() {
      axios.post("api/file/delete", {filePath: this.ownPath}).then(r => {
        if (r.data['success'] === true) this.reload()
        else {
          this.confirm = false
        }
      })
    },
    deleteHandler(event) {
      event.stopPropagation()
      this.confirm = true
    }
  }
}
</script>

<style scoped>

</style>