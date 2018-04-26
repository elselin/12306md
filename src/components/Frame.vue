<template>
  <div class="mobile-frame">
    <div class="status-bar">
      <span class="white--text">&nbsp;&nbsp;&nbsp;CHINA MOBILE</span>
      <img src="@/assets/images/status_bar@3x.png" alt="status" height="24px">
    </div>
    <iframe :src="'http://' + address + '/#'"></iframe>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        address: this.getHost()
      }
    },
    methods: {
      getHost: function () {
        return window.location.host
      }
    }
  }
</script>

<style scoped>
iframe{
  width:360px;
  height:616px;
  border-width:0px;
  border-radius:0 0 4px 4px;
}
.mobile-frame{
  display: block;
  box-sizing: content-box;
  width: 360px;
  height: 640px;
  border-top-width: 50px;
  border-bottom-width: 50px;
  border-right-width: 10px;
  border-left-width: 10px;
  border-color: black;
  border-style: solid;
  margin: 48px auto;
  border-radius: 32px;
  box-shadow: 0px 50px 100px -10px rgba(0, 0, 0, 0.6);
  background-color: black;
}
.status-bar{
  border-radius:4px 4px 0 0;
  height: 24px;
  background-color: #2060CC;
}
.status-bar>img{
  float: right;
}
.status-bar>span{
  opacity: 0.87;
  line-height: 24px;
  font-weight: 500;
  font-size: 12px;
}
.application.theme--light{
  background-color: #000;
}
</style>