//core modules
const http = require('http');

// files
const app = require('./app')

const server = http.createServer((app))

const port = process.env.PORT || 4000;
// srerver listener 
server.listen((port), console.log(`listening on port ${port}`))