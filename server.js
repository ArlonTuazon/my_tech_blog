const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

const db = require('./config/connection')
db.authenticate()
    .then(() => console.log ('Database connected...'))
    .catch(err => console.log('Error:' + err))
const app = express();

app.get('/', (req, res)=> res.send('Index'))
const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log (`Server started on PORT ${PORT}`));