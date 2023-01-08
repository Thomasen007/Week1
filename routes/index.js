
const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Thomas Nielson');
});

module.exports = routes;