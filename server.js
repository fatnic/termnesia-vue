const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

var whitelist = [
    'http://0.0.0.0:3000',
    'http://localhost:8080'
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

mongoose.connect('mongodb://fatnic:tobie2003@ds143542.mlab.com:43542/squibbles')
const db = mongoose.connection

db.on('error', err => console.log(err))

const SnippetSchema = mongoose.Schema({
    title: { type: String, required: true },
    command: { type: String, required: true },
    tags: { type: [String], required: true },
    created_at: { type: Date, default: Date.now()},
    user: {
        uid: { type: String, required: true },
        displayName: { type: String, required: true },
        photoURL: { type: String, required: true },
    }
})
const Snippet = mongoose.model('Squib', SnippetSchema)

const UserSchema = mongoose.Schema({
    uid: { type: String },
    displayName: { type: String },
    photoURL: { type: String }
})
const User = mongoose.model('User', UserSchema)

app.get('/snippets', (req, res) => {
    Snippet.find({}).then(s => res.json(s)).catch(err => console.log(err))
})

app.post('/users', (req, res) => {
    let user = new User()
    user.uid = req.body.uid
    user.displayName = req.body.displayName
    user.photoURL = req.body.photoURL
    User.findOne( {uid: user.uid }, 'uid', (err, u) => {
        if (u === null) {
            user.save( err => {
                if (err) { res.send(err) }
                res.send(user)
            })
        }
    })
})

app.post('/snippet/new', (req, res) => {
    let snip = new Snippet()
    snip.title = req.body.title
    snip.command = req.body.command
    snip.tags = req.body.tags
    snip.user = req.body.user
    snip.save( err => {
        if (err) { res.send(null) }
        res.send(snip)
    })
})

app.listen(3000, () => console.log('listening on 3000'))
