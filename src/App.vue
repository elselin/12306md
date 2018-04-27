<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      disable-resize-watcher
      fixed
      app
    >
      <div class="drawer-profile">
       <img src="@/assets/images/profile_bg.jpg" alt="bg" width="100%" height="100%">
       <div class="profile-avatar">E</div>
       <v-list-tile class="">
          <v-list-tile-content>
            <v-list-tile-title>Else Lin</v-list-tile-title>
          </v-list-tile-content>
            <v-list-tile-action>
            <v-icon color="white">arrow_drop_down</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </div>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          v-model="item.active"
          @click="routeTo(item)"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      :prominent="isSearchPage"
      :extended="isSearchPage"
      :tabs="isHistoryPage"
      dark
      app
      :clipped-left="clipped"
      v-if="hideIndexNav"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>
          textsms
        </v-icon>
      </v-btn>
      <v-layout row text-xs-center slot="extension" v-if="isSearchPage">
        <v-flex xs3>
           <v-icon>timer</v-icon>
           <div class="caption">Timetable</div>
        </v-flex>
        <v-flex xs3>
          <v-icon>room_service</v-icon>
          <div class="caption">Services</div>
        </v-flex>
        <v-flex xs3>
          <v-icon>restaurant</v-icon>
          <div class="caption">Meals</div>
        </v-flex>
         <v-flex xs3>
          <v-icon>card_giftcard</v-icon>
          <div class="caption">VIP</div>
        </v-flex>
      </v-layout>
      <v-tabs
        color="primary"
        slot="extension"
        grow
        v-if="isHistoryPage"
      >
        <v-tab>
          Compeleted
        </v-tab>
         <v-tab>
          Uncompeleted
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      isSearchPage: false,
      isHistoryPage: false,
      hideIndexNav: true,
      items: [{
        icon: 'directions_transit',
        title: '12306 Tickets',
        active: true,
        to: 'search'
      }, {
        icon: 'room_service',
        title: 'Services',
        to: 'services'
      }, {
        icon: 'assignment',
        title: 'History',
        to: 'history'
      }, {
        icon: 'account_circle',
        title: 'My 12306',
        to: 'myprofile'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '12306 Tickets'
    }
  },
  methods: {
    routeTo: function (item) {
      this.$router.push(item.to)
      this.title = item.title
      this.currentCheck(item)
    },
    currentCheck: function (item) {
      this.items.forEach((item) => {
        if (this.$router.currentRoute.path === '/' + item.to) {
          item.active = true
        } else {
          item.active = false
        }
        this.pageCheck()
      })
    },
    pageCheck: function () {
      let path = this.$router.currentRoute.path
      if (path === '/search' || path === '/') {
        this.isSearchPage = true
        this.isHistoryPage = false
      } else if (path === '/history') {
        this.isHistoryPage = true
        this.isSearchPage = false
      } else {
        this.isHistoryPage = false
        this.isSearchPage = false
      }
      let existInMenu = this.items.some((item) => {
        return this.$router.currentRoute.path === ('/' + item.to)
      })
      this.hideIndexNav = existInMenu || (this.$router.currentRoute.path === '/')
    }
  },
  mounted: function () {
    this.items.forEach((item) => {
      let path = this.$router.currentRoute.path
      if (path === '/' + item.tow) {
        item.active = true
        this.title = item.title
      } else {
        item.active = false
      }
      this.pageCheck()
    })
  },
  beforeCreate: function () {
    this.$router.afterEach((to, from, next) => {
      this.pageCheck()
    })
  },
  name: 'App'
}
</script>

<style lang="stylus" >

.drawer-profile{
  height: 171px;
  position: relative;
  color: #fff;
}
.drawer-profile>img{
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -2;
}
.drawer-profile:before{
  content: '';
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 120, 255, 0.7);
  z-index: -1;
}
.profile-avatar{
  position: relative;
  top:16px;
  border-radius: 50%;
  text-align: center;
  font-size:36px;
  line-height: 64px;
  width: 64px;
  height: 64px;
  margin-left: 16px;
  margin-bottom:56px;
  background-color: #FF867F;
}
body::-webkit-scrollbar{
  display: none
}
</style>
