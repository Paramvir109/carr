let jwt = require('jsonwebtoken')
let jwtSecret = sails.config.secrets.jwtSecret

module.exports = {
    issue: (payload) => jwt.sign(payload, jwtSecret, { expiresIn: 180 * 60 }),

    verify: (token, callback) => jwt.verify(token, jwtSecret, callback)
};