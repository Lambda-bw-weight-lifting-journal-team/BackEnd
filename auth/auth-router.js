const express = require('express').Router;
const router = express();
const User = require('../users/users-model');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
   const newUser = req.body;

   // username and password must be entered
   if (newUser.username && newUser.password) {
      const hash = bcrypt.hashSync(newUser.password, 8);
      newUser.password = hash; // bcrypt password

      User.addUser(newUser)
         .then(user => {
            res.status(200).json(user);
         })
         .catch(error => {
            res.status(500).json({ message: 'Problems adding user to database. Try again later.' });
         });
   } else {
      res.status(400).json({ message: 'Must enter a username and password.' });
   }
});

router.get('/login', (req, res) => {
   res.status(200).json({ message: 'Hello from login api!' });
});

module.exports = router;
