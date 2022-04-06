const routes = require('express').Router();
const UserController = require('./controllers/UserController');

const SessionMiddleware = require('./middlewares/SessionMiddleware');
const FormValidatorMiddleware = require('./middlewares/FormMiddlewares');

routes.post('/users', FormValidatorMiddleware.registrationFormMiddleware, UserController.registerNewUser);
routes.get('/users', UserController.index);

routes.post('/logging', FormValidatorMiddleware.loggingFormMiddleware, UserController.logging);
routes.get('/session', SessionMiddleware.SessionExist);
module.exports = routes;