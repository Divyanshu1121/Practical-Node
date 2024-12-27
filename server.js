const bodyParser = require('body-parser');
const express = require('express');
const { db } = require('./config/database');
const cookieParser = require('cookie-parser');
const port = 8080;
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', require('./routers'));
app.listen(port, (err) => {
    if (!err) {
        console.log("Server Started on port \nhttp://localhost:" + port);
        db
    }
})