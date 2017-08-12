<template>
  <div class="ui container">
  
    <header-bar />
  
    <div id="page-contents">
      <side-bar />
      <div class="main-contents">

          <router-view></router-view>
  
      </div>
    </div>
  
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapState, mapActions } from 'vuex'

import HeaderBar from './components/HeaderBar.vue'
import SideBar from './components/SideBar.vue'

import SnippetList from './components/SnippetList.vue'

export default {
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.updateUser(user)
      } else {
        this.updateUser(null)
      }
    })
  },
  methods: {
    ...mapActions(['updateUser'])
  },
  computed: { ...mapState(['user']) },
  components: { HeaderBar, SideBar, SnippetList }
}
</script>

<style lang="stylus">
body
  margin 10px 0px
  background-color #f1f1f1

.v--modal-overlay
  background-color rgba(0, 0, 0, 0.8)

.modal-container
  padding 10px

#page-contents
  display grid
  grid-template-columns 260px auto
  grid-column-gap 10px

.main-contents
  grid-column 2/3
  grid-row 1
</style>
