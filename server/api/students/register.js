const Router = require('express').Router();
const controller = require('./controller');

Router.route('/')
  .post(controller.saveStudent);

module.exports = Router;
