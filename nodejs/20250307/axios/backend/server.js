

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended :false}));


app.post('/signup', (req, res) => {
    const {uid, upw} = req.body;
    console.log(req.body, uid, upw)
    res.send({message :'안녕'})
})

app.listen(4000, () => {
    console.log('backend server on~')
})