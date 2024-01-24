// combine all routes here and export to app.js (the main file)

const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route.js');

router.use(authRoute);

module.exports = router;
