<template>
  <n-spin :show="waitFor">
    <MkdirModal :show="mkdirShow" :cancel-handler="mkdirCancelHandler"/>
    <FilePerformModal :show="filePerform" :name="name" :cancel-handler="cancelHandler"/>
    <n-space justify="start" align="start" style="margin-top: 10px; height: 35px; margin-left: 10px; margin-right: 10px">
      <n-layout :native-scrollbar="false" style="max-width: 50vw; height: 35px">
        <n-layout-content>
          <n-tag v-for="t in path.length" :key="t" @click="posHandler(t)">{{path[t - 1]}}</n-tag>
        </n-layout-content>
      </n-layout>
    <n-space>
      <n-upload :show-file-list="false" action="/admin/api/file/upload" :data="{to: path.join('')}" @finish="reload">
        <n-button size="small">
          Upload File
        </n-button>
      </n-upload>
      <n-button size="small" @click="mkdir">
        New Folder
      </n-button>
      <n-button v-show="inCopyStatus" size="small" @click="confirmDistance" quaternary>
        <template #icon>
          <n-icon size="20">
            <ContentPasteFilled/>
          </n-icon>
        </template>
        <template #default>
          Paste
        </template>
      </n-button>
    </n-space>
    </n-space>
    <n-layout id="list" :native-scrollbar="false">
      <n-list ref="fileList" clickable hoverable>
        <n-list-item @click="open(entry)" v-for="entry in files" :key="entry" style="cursor: default; padding-left: 5px; padding-bottom: 3px; padding-top: 3px">
          <SingleEntry :filename="entry['filename']" :type="entry['directory']"/>
        </n-list-item>
      </n-list>
    </n-layout>
  </n-spin>
</template>

<script>
import {ContentPasteFilled} from "@vicons/material";
import axios from "axios";
import SingleEntry from "@/components/manages/filemanager/SingleEntry.vue";
import FilePerformModal from "@/components/manages/filemanager/modals/FilePerformModal.vue";
import MkdirModal from "@/components/manages/filemanager/modals/MkdirModal.vue";
export default {
  name: "fileManage",
  components: {MkdirModal, FilePerformModal, SingleEntry, ContentPasteFilled},
  setup() {
    return {
      ContentPasteFilled
    }
  },
  data() {
    return {
      path: [],
      files: [
          //{filename: 'folder', directory: true}, {filename: 'file', directory: false}
      ],
      mkdirShow: false,
      waitFor: false,
      confirmDialog: false,
      inCopyStatus: false,
      cpPath: null,
      isCut: false,
      filePerform: false,
      name
    }
  },
  provide() {
    return {
      reload: this.reload,
      path: this.path,
      selectedCopyFile: this.selectedCopyFile,
      mkdirHandler: this.mkdirHandler,
    }
  },
  methods: {
    mkdir() {
      this.mkdirShow = true;
    },
    mkdirCancelHandler() {
      this.mkdirShow = false
    },
    mkdirHandler(name) {
      axios.get("api/file/mkdir?to=" + encodeURI(this.path.join('')) + '&name=' + name);
      this.mkdirShow = false;
      this.reload();
    },
    posHandler(index) {
      if (index === this.path.length) return
      let times = this.path.length - index
      for (let i=0; i<times; i++) {
        this.path.pop()
      }
      this.reload();
    },
    cancelHandler() {
      this.filePerform = false;
    },
    selectedCopyFile(cpPath, isCut) {
      this.inCopyStatus = true;
      this.cpPath = cpPath;
      this.isCut = isCut;
    },
    confirmDistance() {
      this.waitFor = true;
      if (!this.isCut)
        axios.post("api/file/copy", {from: this.cpPath, to: this.path.join('')}).then(() => {
          this.reload()
          this.waitFor = false
        })
      else
        axios.post("api/file/cut", {from: this.cpPath, to: this.path.join('')}).then(() => {
          this.reload()
          this.waitFor = false
        })
      this.isCut = false;
      this.inCopyStatus = false;
    },
    reload() {
      this.waitFor = true;
      axios.post("api/file/list", {filePath: this.path.join('')}).then(r => {
        this.files = r.data['files']
        this.waitFor = false;
        if (this.path.length !== 1) {
          this.files.unshift({filename: "..", directory: true})
        }
      })
    },
    open(entry) {
      if (entry.directory) {
        this.openFolder(entry)
      } else {
        this.filePerform = true;
        this.name = entry.filename;
      }
    },
    openFolder(entry) {
      this.waitFor = true
      if (entry.filename === '..') {
        this.path.pop();
        axios.post("api/file/list", {filePath: this.path.join("")}).then(r => {
          if (r.data['success'] === false) {
            alert("error")
          } else {
            this.files = r.data['files']
            if (this.path.length !== 1) {
              this.files.unshift({filename: "..", directory: true})
            }
          }
        }).finally(()=>this.waitFor = false)
      } else {
        this.path.push(entry.filename + "/");
        axios.post("api/file/list", {filePath: this.path.join("")}).then(r => {
          if (r.data['success'] === false) {
            alert("error")
            this.path.pop();
          } else {
            this.files = r.data['files']
            if (this.path.length !== 1) {
              this.files.unshift({filename: "..", directory: true})
            }
          }
        }).finally(()=>this.waitFor = false)
      }

    }
  },
  mounted() {
    axios.post("api/file/list", {filePath: "/"}).then(r => {
      this.files = r.data['files']
      this.path.push("/")
    })
  },
}
</script>

<style lang="css" scoped>
#list {
  height: calc(100vh - 105px);
}
</style>