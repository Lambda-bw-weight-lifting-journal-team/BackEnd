const express = require('express').Router;
const router = express();

router.get('/register', (req, res) => {
   res.status(200).json({ message: 'Hello from register api!' });
});

router.get('/login', (req, res) => {
   res.status(200).json({ message: 'Hello from login api!' });
});

module.exports = router;
