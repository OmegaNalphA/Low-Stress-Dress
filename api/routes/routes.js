'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller');

  // todoList Routes

  app.route('/')
  	.get(controller.main);
  app.route('/test')
  	.get(controller.test);
  app.route('/temp')
    .get(controller.send_temp);
  // app.route('/config')
  // 	.get(controller.config);
};