const jwt = require('jsonwebtoken');

module.exports = {
   authenticate,
   restricted
}
function authenticate(req, res, next) {
   const token = req.headers.authorization;
   const secret = process.env.JWT_SECRET;

   if (token) {
      jwt.verify(token, secret, (err, token) => {
         if (err) {
            res.status(401).json({ message: 'Invalid token!' });
         } else {
            req.token = token;
            next();
         }
      });
   } else {
      res.status(401).json({ message: 'Please try loggin in again!' });
   }

};

// Make sure user is accessing their own exercises.
function restricted(req, res, next) {
   const userId = parseInt(req.params.id);

   if (req.token && userId === req.token.id) {
      next();
   } else {
      res.status(403).json({ message: 'Permission denied to view this link.' });
   }
}