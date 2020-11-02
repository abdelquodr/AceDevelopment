const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const { jwtSecretKey } = require('../environment')

module.exports = class AuthHelper {

    // token
    static async signInToken(payload) {
        return jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' });
    };

    static async verifyToken(payload) {
        return jwt.verify(payload, jwtSecretKey);
    }


    // password
    static async hashPassword(password) {
        return bcrypt.hash(password, 10);
    }

    static verifyPassword(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword);
    }

}

