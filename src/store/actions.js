import firebase from 'firebase'
import { db } from '../firebase'
import router from '../router'

export const updateUser = ({ commit }, user) => commit('setUser', user)

export const loginUserWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth()
            .signInWithPopup(provider)
            .then( (result) => {
                const user = result.user
                const userRef = db.ref('/users').child(user.uid)
                userRef.once('value', (snapshot) => {
                    if (snapshot.val() === null) {
                        const { displayName, email, photoURL } = user
                        userRef.update({ displayName, email, photoURL, joinDate: Date.now() }) 
                    }
                })
                router.push('/')
            })
            .catch( (error) => console.log(error) )
            
}

export const logout = () => {
    firebase.auth().signOut()
    router.push('/')
}
