<template>
    <div class="ui segment">
    
        <h3>Add a new snippet</h3>
    
        <div class="ui form" ref="snippetform">
    
            <div :class="{ 'field' : true, 'required': true, 'error': errors.has('title') }">
                <label>Snippet Title</label>
                <input type="text" v-model="title" name="title" placeholder="Title" v-validate="'required'">
            </div>
    
            <div :class="{ 'field' : true, 'required': true, 'error': errors.has('command') }">
                <label>Command</label>
                <input class="snippet" v-model="command" type="text" name="command" placeholder="Command" v-validate="'required'">
            </div>
            <!-- 
                            <div class="ui toggle checkbox">
                                <input type="checkbox" v-model="editable">
                                <label>Editable</label>
                            </div> -->
    
            <div v-show="editable" class="field">
                <div class="editable" v-html="cmdVars"></div>
            </div>
    
            <div class="field">
                <label>Tags</label>
    
                <div class="two fields">
    
                    <div class="field">
                        <input ref="tagq" type="text" v-model="tagquery" @keyup.enter="addNewTagToList">
    
                        <div class="ui middle aligned selection list">
    
                            <div :key="tag" v-for="tag in foundTags" class="item" @click="addTagToList(tag)">
                                <i class="tag icon"></i> {{tag}}
                            </div>
    
                        </div>
    
                    </div>
    
                    <div class="field">
                        <div v-if="tags.length > 0">
                            <div class="ui label" v-for="tag in tags" :key="tag">
                                {{ tag }}
                                <i class="delete icon" @click="removeTagFromList(tag)"></i>
                            </div>
                        </div>
                    </div>
    
                </div>

                <div class="field">
                    <input class="ui button" type="submit" value="Add Snippet" @click="addSnippet">
                </div>

            </div>
    
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../firebase'

import { mapState } from 'vuex'

export default {
    data() {
        return {
            title: '',
            command: '',
            editable: false,
            tags: [],
            allTags: [ 'aac', 'cli', 'cmd', 'heroku', 'aaa', 'ghostbusters', 'git', 'gitty', 'aab', 'gitterino', 'github'],
            tagquery: '',
        }
    },
    firebase: {
        snippets: db.ref('/snippets')
    },
    computed: {
        ...mapState(['user']),
        cmdVars() {
            let cmdArray = this.command.trim().split(' ')
            return cmdArray.reduce((str, word, idx) => str + `<span data-idx="${idx}">${word}</span>`, "")
        },
        foundTags() {
            if (this.tagquery === '') return []
            return this.allTags.sort().filter(tag => tag.indexOf(this.tagquery) !== -1).slice(0, 3)
        }
    },
    methods: {
        addSnippet() {
            let { uid, displayName, photoURL, ...userInfo} = this.user
            let newSnippet = { title: this.title, command: this.command, tags: this.tags, user: {uid, displayName, photoURL} }
            this.$firebaseRefs.snippets.push(newSnippet)

            this.title = ''
            this.command = ''
        },
        addTagToList(tag) {
            if (this.tags.indexOf(tag) < 0) { this.tags.push(tag) }
            this.tagquery = ''
            this.$refs.tagq.focus()
        },
        addNewTagToList() {
            if (this.tagquery.length > 0) {
                if (this.allTags.indexOf(this.tagquery) < 0) { this.allTags.push(this.tagquery) }
                this.addTagToList(this.tagquery)
            }
        },
        removeTagFromList(tag) {
            let idx = this.tags.indexOf(tag)
            if (idx > -1) { this.tags.splice(idx, 1) }
            this.$refs.tagq.focus()
        }
    }
}
</script>

<style lang="stylus">
.editable
    background-color black
    color white
    font-family 'Inconsolata', monospace
    padding 2px 10px
    border-radius 3px

    span
        margin-left 1px
        padding 2px
        border-radius 2px

        &:hover
            cursor pointer
            background-color yellow
            color black
</style>


