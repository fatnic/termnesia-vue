<template>
    <div class="ui segment">
        <div class="ui card">
            <div class="image">
                <img :src="profile.photoURL">
            </div>
            <div class="content">
                <h2 class="header">{{ profile.displayName }}</h2>
                <div class="meta">
                    <span class="date">Joined in {{ profile.joinDate | year }}</span>
                </div>
                <div class="description">
                    Kristy is an art director living in New York.
                </div>
            </div>
            <div class="extra content">
                <a>
                    <i class="user icon"></i>
                    22 Friends
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase'

export default {
    beforeMount() {
        db.ref('/users').child(this.userid).once('value')
            .then(snapshot => this.profile = snapshot.val())
    },
    props: ['userid'],
    data() {
        return {
            profile: {}
        }
    }
}
</script>

