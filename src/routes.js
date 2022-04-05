const routes = require('express').Router();
const UserController = require('./controllers/UserController');

routes.post('/users', UserController.registerNewUser);
routes.get('/users', UserController.index);

module.exports = routes;