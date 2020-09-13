const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');

const { loginFormValidator, registerFormValidator } = require('./config');

router.post('/login', loginFormValidator, (req, res) => {
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

    users.find({ username, password })
    .then(results => {
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
    .catch(() => {
        res.status(400).json({
            type: 'UnknownError',
            message: 'Unknown rrror'
        });
    })
});

router.post('/register', registerFormValidator, (req, res) => {
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

    users.find({ username })
    .then(results => {
        if (results.length) {
            return res.status(400).json({
                type: 'UserExists',
                message: 'User already exists'
            });
        } else {
            users.insert({ username, password })
            return res.status(200).send('ok');
        }
    })
    .catch(() => {
        res.status(400).json({
            type: 'UnknownError',
            message: 'Unknown rrror'
        });
    })
})

module.exports = router;