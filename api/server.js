const express = require('express');
const server = express();
const userRoute = require('../users/users-router');
const authRoute = require('../auth/auth-router');
const exerciseRoute = require('../exercises/exercise-router');

server.use(express.json());
server.use('/api/users', userRoute);
server.use('/api/auth', authRoute);
server.use('/api/exercises', exerciseRoute);

server.get('/', (req, res) => {
   res.send(`It's alive!!`);
});

module.exports = server;