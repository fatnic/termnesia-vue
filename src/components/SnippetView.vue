<template>
    <div class="ui segment">
        <div v-if="snippet">
            <h1>{{ snippet.title }}</h1>
            <ul>
                <li v-for="tag in snippet.tags">{{ tag }}</li>
            </ul>
            <p>{{ snippet.command }}</p>
        </div>

        <div v-else>
            <p>Not a valid snippet... <router-link to="/snippets">return to list</router-link></p>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase'

export default {
    beforeMount() {
        db.ref('/snippets').child(this.snippetid).once('value')
            .then( snapshot => this.snippet = snapshot.val() )
    },
    props: ['snippetid'],
    data() {
        return {
            snippet: {}
        }
    }
}
</script>
