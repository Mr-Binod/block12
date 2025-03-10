

let user = [];


const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended :false}));

app.post('/login', (req, res) => {
    console.log('back')
    const {uid, upw} = req.body;
    const checkuser = user.filter((el) => (el.uid === uid) && (el.upw === upw))
    if(checkuser) {

        res.send({state : 200, token : `${uid}`})
    }
    else {
        res.send({state : 400, message : "user not found"})
    }
    
})

app.post('/signup', (req, res) => {
    const index = user.length;
    const {uid, upw} = req.body;
    user.push({index, uid, upw})
    console.log(req.body, uid, upw, user)
    res.send({state : 200, message :'안녕'})
})
app.put('/edit', (req, res) => {
    const {uid, upw} = req.body;
    console.log(req.body)
    const Index = user.indexOf(uid);
    // user.filter((el, index) => {
    //     el.uid === uid;
    //     return user.indexOf(uid);
    // })
    console.log(Index, 'index')
})
app.listen(4000, () => {
    console.log('backend server on~')
})