const express = require('express');
const server = express();
const userRoute = require('../users/users-router');
const authRoute = require('../auth/auth-router');

server.use(express.json());
server.use('/api/', userRoute);
server.use('/api/auth', authRoute);

server.get('/', (req, res) => {
   res.send(`It's alive!!`);
});

module.exports = server;