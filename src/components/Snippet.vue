<template>
     <div class="item">
            
            <div class="content">

                 <div class="header"> 
                    <router-link :to="`/snippet/${snippet['.key']}`">{{ snippet.title }}</router-link>
                 </div> 

                 <div class="meta">
                    <i class="tag icon small"></i>
                    <router-link :to="`/tag/${tag}`" :key="tag['.key']" v-for="tag in snippet.tags" class="snippet-tag">
                        {{tag}}
                    </router-link>
                </div> 

                <div class="description">
                    <div class="cmd">{{ snippet.command }}</div>
                </div>

                <router-link :to="`/profile/${snippet.user.uid}`" class="ui image label">
                    <img :src="snippet.user.photoURL">
                    {{ snippet.user.displayName}}
                </router-link>
                
                <a class="ui label mini green" @click="copyToClipboard(snippet.command)">
                    <i class="copy icon"></i>
                    clipboard
                </a>

                

                  <div class="meta">
                    <div class="ui mini label">
                        <i class="heart icon"></i> 23
                    </div>
                    <a class="ui mini label" data-tooltip="This snippet has edditable bits. Give it a try">
                        <i class="write icon"></i> editable
                    </a>
                </div>  

            </div>
        </div>
</template>

<script>
export default {
    props: ['snippet'],
    methods: {
        copyToClipboard(command) {
            this.$clipboard(command)
        }
    }
}
</script>

<style lang="stylus">
.header
    text-transform uppercase

.snippet-tag
    font-size 12px

.cmd
    background-color #111
    color white
    padding 4px 8px
    font-family monospace
    border-radius 3px
    margin-bottom 3px
    font-family 'Inconsolata', monospace    
    color #eee
</style>
