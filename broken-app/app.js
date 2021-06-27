const express = require('express');
const axios = require('axios');
const ExpressError = require('./expressError');
const app = express();

app.use(express.json());

app.post('/', async (req, res, next) => {
  try {
    let query = req.body.developers
      .map(d => axios.get(`https://api.github.com/users/${d}`));

    let result = await Promise.all(query);

    let out = result
      .map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.json(out);
  } catch (e) {
    return next(e);
  }
});

/** 404 handler */

app.use(function (req, res, next) {
  const err = new ExpressError('Not Found', 404);
  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  let status = err.status || 500;

  return res.status(status).json({
    status,
    message: err.message
  });
});

module.exports = app;
