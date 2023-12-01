const server = require('./server')
require('dotenv').config();

const PORT = process.env.PORT;

server.listen(PORT, ()=> console.log(`Server listening in port ${PORT}`))