const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./util/database');
const itemRout = require('./routes/item');

const app = express();

sequelize.sync()
    .then(() => {
        app.listen(3000);
        console.log("server is running at the 3000 port");
    })
    .catch((err) => {
        console.log(err);
    })


app.use(bodyParser.json());

app.use(itemRout);
app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});


