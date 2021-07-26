const router = require('express').Router();

//add any app.use('/urlpath', require('./fileName')) for router files created here

//404 handler - for any API mounted URL not accounted for
router.use(function (req, res, next) {
  const err = new Error('Not Found.');
  err.status = 404;
  next(err);
});

module.exports = router;
