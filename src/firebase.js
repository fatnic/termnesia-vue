import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBgM7ObDchVbAjs5KzFiXIinC-ZZZX1Wp8",
    authDomain: "termnesia.firebaseapp.com",
    databaseURL: "https://termnesia.firebaseio.com",
    projectId: "termnesia",
    storageBucket: "termnesia.appspot.com",
    messagingSenderId: "1046845019734"
})

export const db = firebaseApp.database()