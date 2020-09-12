const { body } = require('express-validator');

const loginFormValidator = [
    body('username')
    .not().isEmpty()
    .trim()
    .escape(),
    body('password')
    .not().isEmpty()
    .trim()
    .escape(),
]

module.exports = {
    loginFormValidator,
}