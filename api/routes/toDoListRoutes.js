'use strict';

module.exports = function (app) {
  var toDoList = require('../controllers/toDoListControllers');

  //to do list routes
  app.route('/tasks').get(toDoList.listAllTasks).post(toDoList.createATask);

  app
    .route('/tasks/:taskId')
    .get(toDoList.readATask)
    .put(toDoList.updateATask)
    .delete(toDoList.deleteATask);
};
