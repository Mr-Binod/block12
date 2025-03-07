


const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended : false}))
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'page'));
console.log(app)

app.listen(3000, () => {
    console.log('front server on~');
})