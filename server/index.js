const express = require('express');
const morgan = require('morgan');
const path = require('path');
//const bodyParser = require('body-parser');
const app = express();

//morgan middleware
app.use(morgan('dev'));

//body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//main get to server index.html file
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

//router folder/directory
app.use('/api', require('./api'));

//static middleware to serve additional public files
app.use(express.static(path.join(__dirname, '..', 'public')));

//for any other page send index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

//error handler
app.use((err, req, res, next) => {
  console.log(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

//set up listening on port 3000
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server listening on port:', port);
});
