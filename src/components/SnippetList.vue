<template>
    <div class="ui segment">
    
        <!-- <div class="ui stacked section">
            <div class="ui icon fluid input">
                <input type="text" placeholder="Search...">
                <i class="inverted circular search link icon"></i>
            </div>
        </div> -->
    
        <div class="ui divided items">
            <snippet :key="snippet['.key']" v-for="snippet in snippets" :snippet="snippet" />
        </div>
    
    </div>
</template>

<script>
import { db } from '../firebase'
import Snippet from './Snippet.vue'

export default {
    components: { Snippet },
    firebase: {
        snippets: db.ref('/snippets')
    },
    data() {
        return {
            snippets: []
        }
    }
}
</script>
