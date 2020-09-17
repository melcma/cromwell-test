const express = require('express');
const bodyParser = require('body-parser');
const monk = require('monk');
require('dotenv').config();

const router = require('./router');

const port = process.env.PORT || 3000;

const {
    DB_PROTOCOL,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_CLUSTER
} = process.env;

const database = monk(`${DB_PROTOCOL}${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_CLUSTER}?retryWrites=true&w=majority`);


const app = express();
const allowedDomains = [
    'localhost',
    'http://localhost:8014',
    'http://www.adrianpiwowarczyk.com',
    'http://www.adrianpiwowarczyk.com:8015',
    'http://www.adrianpiwowarczyk.com:8016'
];

app.use(bodyParser.urlencoded({ extended: true }),);

app.use((req, res, next) => {
    req.database = database;
    next();
})

app.use((req, res, next) => {
    if (allowedDomains.includes(req.headers.origin)) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    };
    next();
});

app.use('/api', router);

app.listen(port, () => { console.log(`Server listening on port ${port}`) });