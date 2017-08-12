<template>
    <div class="sidebar-container">

    <div class="ui stacked vertical menu fluid">

        <router-link class="link item icon" to="/snippets">
            <i class="list icon"></i>
            Snippets
        </router-link>

        <router-link class="link item" to="/snippets/new">
            <i class="add circle icon"></i>
            New Snippet
        </router-link>

    </div>

    <div class="ui segment piled fluid tiny center aligned">
        &copy; Dave Nicholson 2017
    </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.sidebar-container
    grid-column 1/2
    grid-row 1
</style>

