var bodyParser = require('body-parser');
var express = require('express');
app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');
Task = require('./api/models/toDoListModels');
var bodyParser = require('body-parser');

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/toDoListRoutes'); //importing route
routes(app); //register the route

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port);
console.log(`to do list RESTful API server started on ${port}`);
