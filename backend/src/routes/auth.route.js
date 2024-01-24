const express = require('express');

const router = express.Router({ mergeParams: true });

const { registerUser, signInUser } = require('../controllers/auth.controller');

router.post('/signup', registerUser);
router.post('/login', signInUser);

module.exports = router;
