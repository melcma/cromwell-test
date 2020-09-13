const express = require('express');
const bodyParser = require('body-parser');
const { validationResult } = require('express-validator');
const monk = require('monk');

require('dotenv').config();

const {
    DB_PROTOCOL,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_CLUSTER
} = process.env;

const database = monk(`${DB_PROTOCOL}${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_CLUSTER}?retryWrites=true&w=majority`);

const { loginFormValidator } = require('./config');

const app = express();
const allowedDomains = ['localhost', 'http://localhost:8014'];

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

app.post('/api/login', loginFormValidator, (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            type: 'UserDataError',
            message: 'Invalid user data'
        })
    }

    const { username, password } = req.body;
    const { database } = req;
    const users = database.get('users');

    users.find({ username, password }).then(results => {
        if (results.length) {
            return res.status(200).send('ok');
        }

        users.find({ username }).then(userFindResult => {
            if (userFindResult.length) {
                res.status(400).json({
                    type: 'PasswordError',
                    message: 'Incorrect Password'
                });
            } else {
                res.status(400).json({
                    type: 'LoginError',
                    message: 'User has not been found'
                });
            }
        })
    })
});

app.listen(8015, () => { console.log('Server listening on port 8015') });