const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

mongoose.connect('mongodb://ryan:123@ds151917.mlab.com:51917/dolphins', {useMongoClient: true}).then(() => {
  console.log('db connected');
})

app.use(passport.initialize());

app.use(bodyParser.json());

require('./models/user');
require('./config/passport');
const users = require('./api/users')

app.get('/', (req, res) => {
  res.end();
})

app.use('/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('server connected');
})
