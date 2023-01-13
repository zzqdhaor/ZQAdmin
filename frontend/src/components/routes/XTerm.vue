<template>
  <div id="terminal-box">
    <div id="terminal" ref="terminal"></div>
  </div>

</template>

<script>
import {Terminal} from "xterm";
import "xterm/css/xterm.css";
import "xterm/lib/xterm.js";
import {FitAddon} from "xterm-addon-fit";
import {AttachAddon} from "xterm-addon-attach";

export default {
  name: "XTerm",
  mounted() {
    let term = new Terminal({
      renderType: "canvas",
      convertEol: true,
      cursorBlink: false,
      lineHeight: 1,
    })
    term.open(this.$refs['terminal'])
    let fit = new FitAddon();
    term.loadAddon(fit);
    let url = (window.location.protocol === 'https:' ? "wss://" : "ws://") + window.location.host + "/term-ws";
    let ws = new WebSocket(url)
    ws.onopen = () => {
      ws.send("##$$RSZ " + fit.proposeDimensions().cols + ' ' + fit.proposeDimensions().rows)
    }
    term.loadAddon(new AttachAddon(ws))
    fit.fit()
    term.write("Connecting...\n\r")
    window.addEventListener("resize", () => {
      ws.send("##$$RSZ " + fit.proposeDimensions().cols + ' ' + fit.proposeDimensions().rows)
      fit.fit()
    })
  },
}
</script>

<style scoped>
#terminal-box {
  background-color: black;
  width: 100%;
  height: calc(100vh - 60px);
}

#terminal {
  width: 100%;
  height: calc(100vh - 60px);
}
</style>