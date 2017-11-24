var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

//connetion to DB
mongoose.connect('mongodb://localhost/users', function(err, res) {
                 if(err) throw err;
                 console.log('Connected to Database');
                 });

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Import models and controllers
var models = require('./models/user')(app, mongoose);
var UserCtrl = require('./controllers/user');

var router = express.Router();

// Index
router.get('/', function(req, res) { 
res.send("Hola Mundo");
});

app.use(router);

//API routes
var api = express.Router();

api.route('/users')
.get(UserCtrl.findAll)
.post(UserCtrl.add);

api.route('/users/:id')
.get(UserCtrl.findById)
.put(UserCtrl.update)
.delete(UserCtrl.delete);

app.use('/api', api);

// Start server
app.listen(3000, function() {
console.log("Node server running on http://localhost:3000");
});


