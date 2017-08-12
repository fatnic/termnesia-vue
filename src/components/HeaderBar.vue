<template>
    <div class="ui stackable inverted menu">
    
        <router-link to="/" class="ui header item">
            TERMnesia
        </router-link>
    
        <div v-if="!user" class="right menu">
            <router-link to="/login" class="item">Login</router-link>
            <router-link to="/register" class="item">Register</router-link>
        </div>

        <div v-else class="right menu">
            <div class="ui simple dropdown item">
                <img class="ui avatar image" :src="profilePic"/> <span class="profile-name">{{ profileName }}</span>
                <i class="dropdown icon"></i>
                <div class="menu">
                    <a class="link item icon" @click="logout"><i class="sign out icon"></i>Logout</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed: { 
        ...mapState(['user']),
        ...mapGetters(['profileName', 'profilePic'])
    },
    methods: {
        ...mapActions(['logout'])
    },
}
</script>

<style lang="stylus">
.google-button:hover
    cursor pointer

.profile-name
    font-weight 700
    margin-left 10px
</style>


