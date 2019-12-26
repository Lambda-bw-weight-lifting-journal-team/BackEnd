const express = require('express').Router;
const router = express();
const User = require('../users/users-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
   const newUser = req.body;

   // username and password must be entered
   if (newUser.username && newUser.password) {
      const hash = bcrypt.hashSync(newUser.password, 8);
      newUser.password = hash; // bcrypt password

      User.addUser(newUser)
         .then(user => {
            res.status(201).json(user);
         })
         .catch(error => {
            res.status(500).json({ message: 'Problems adding user to database. Try again later.' });
         });
   } else {
      res.status(400).json({ message: 'Must enter a username and password.' });
   }
});

router.post('/login', (req, res) => {
   const { username, password } = req.body;

   if (username && password) {
      User.findBy(username)
         .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
               const token = asignToken(user);
               res.status(200).json({
                  token,
                  message: `Welcome ${username}`
               });
            } else {
               res.status(401).json({message: 'Username or password is invalid.'});
            }
         })
         .catch(error => {
            res.status(500).json({ message: 'Problems logging user in. Try again later.' });
         })
   } else {
      res.status(400).json({ message: 'Must enter a username and password.' });
   }
});


function asignToken(user) {
   const payload = {
      id: user.id
   }

   const secret = process.env.JWT_SECRET;

   const options = {
      expiresIn: '1hr'
   }

   return jwt.sign(payload, secret, options);
}
module.exports = router;
