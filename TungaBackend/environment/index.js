const dotenv = require('dotenv')

dotenv.config();

module.exports = (env => {
    return {
        dbPassword: env.DB_PASSWORD,
        dbURI: env.DB_CONNECTION_STRING,
        jwtSecretKey: env.JWT_SECRET_KEY
    }
})(process.env)