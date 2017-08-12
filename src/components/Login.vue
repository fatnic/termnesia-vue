<template>

    <div v-if="!user" class="ui segment">
    
            <div class="ui center aligned basic segment">
                <h3>Login</h3>
            </div>
    
            <form class="ui form">
    
                <div class="field">
                    <div class="two fields">
    
                        <div class="field">
                            <div class="ui left icon input">
                                <input type="text" placeholder="name@example.com">
                                <i class="icon users"></i>
                            </div>
                        </div>
    
                        <div class="field">
                            <div class="ui left icon input">
                                <input type="password" placeholder="password">
                                <i class="icon unlock alternate"></i>
                            </div>
                        </div>
    
                    </div>
                </div>
    
                <button class="fluid ui button" type="submit">Login</button>
    
            </form>
    
            <div class="ui horizontal divider"> Or </div>
    
            <div class="ui basic center aligned segment">
                <img class="google-button" @click="loginUserWithGoogle" src="/src/assets/images/google-signin.png" />
            </div>

            <div class="ui basic center aligned segment">
                <p>Not registered yet?
                    <router-link to="/register">Sign up</router-link>
                </p>
            </div>
    
        </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return { user: null }
    },
    methods: {
        ...mapActions(['loginUserWithGoogle'])
    }
}
</script>

