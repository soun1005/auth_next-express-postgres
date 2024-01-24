const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const routes = require('./src/routes/index.js');

const app = express();
const port = 4000;

// middleware
app.use(cors());
// give an access to request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use('/api', routes);

app.listen(port, () => {
  console.log('server has started on port 4000');
});
