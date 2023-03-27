const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
    console.log('listening on 8080')
});

app.use(expree.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'react_nodejs/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'react_nodejs/build/index.html'));
})

app.get('/product', function (req, res) {
    res.json({ name: 'black shoes' })
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'react_nodejs/build/index.html'));
})