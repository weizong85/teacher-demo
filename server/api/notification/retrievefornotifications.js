const Router = require('express').Router();
const controller = require('./controller');

Router.route('/')
  .post(controller.retrievefornotifications);

module.exports = Router;
