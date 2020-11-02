// npm modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')

// file
const v1Routes = require('./api/routes/v1Router');
const { dbURI } = require('./environment')

// connect mongodb
require('./dbase')(dbURI)


const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1/', v1Routes)

module.exports = app