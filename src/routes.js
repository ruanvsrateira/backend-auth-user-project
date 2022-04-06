const routes = require('express').Router();
const UserController = require('./controllers/UserController');

const FormValidatorMiddleware = require('./middlewares/FormMiddlewares');

routes.post('/users', FormValidatorMiddleware.registrationFormMiddleware, UserController.registerNewUser);
routes.get('/users', UserController.index);

module.exports = routes;