const express = require('express').Router;
const router = express();

router.get('/users', (req, res) => {
   res.status(200).json({ message: 'Hello from users api!' });
});

module.exports = router;
