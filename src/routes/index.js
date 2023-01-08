const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Thomas Nielson');
});
routes.get('/test', (req, res) => {
  res.send('Briana Nielson');
});
routes.get('/test2', (req, res) => {
  res.send('Tobias Nielson');
});

module.exports = routes;