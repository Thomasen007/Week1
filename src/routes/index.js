
const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Thomas Nielson');
});
routes.get('/test', (req, res) => {
  res.send('This is a second page');
});

module.exports = routes;