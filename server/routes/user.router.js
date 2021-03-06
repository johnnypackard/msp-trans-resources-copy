const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from database
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const type = "user";
  const email = req.body.email;
  const validated = true;
  const bio = req.body.bio;
  const contact_info = req.body.contact_info;
  const queryText = `INSERT INTO users (username, hash, type, email, validated) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
  pool.query(queryText, [username, password, type, email, validated])
    .then((result) => { 
      const user_id = result.rows[0].id;
      const profileQueryText = `INSERT INTO profiles (user_id, bio, contact_info) VALUES ($1, $2, $3)`
      pool.query(profileQueryText, [user_id, bio, contact_info]).then(() => {
        console.log('user profile created');
        res.sendStatus(201);
      }).catch((error) => {
        console.log('error creating user profile', error);
        res.sendStatus(500);
      })
    })
    .catch((err) => { 
      next(err); 
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
