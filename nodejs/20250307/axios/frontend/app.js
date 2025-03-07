






const express = require('express');
const cors = require('cors');
const axios = require('axios');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended : false}))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/'))



app.get('/', (req, res) => {
    res.render('main')
})

app.post('/signup', async (req, res) => {
    const {uid, upw} = req.body;
    const data = await axios.post('http://127.0.0.1:4000/signup', {uid, upw})
    // console.log('data1',  {data});
})




app.listen(3000, () => {
    console.log('frontend server on~')
})