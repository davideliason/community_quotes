const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const logger = require('morgan');

const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
// TEMPLATE ENGINE
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
const uri = process.env.DB_LOCAL_URI;

// APP CONFIG
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES AFTER DB CONNECTION

MongoClient.connect(process.env.DB_MLAB, (err, database) => {

	app.get('/', function(req, res, next) {
	  console.log(process.env.DB_MLAB);
	  // res.render('index', { title: 'David' });
	  res.end('hello');
	});

	app.listen(port);
});





/*LOCAL MONGODB CONNECTION
MongoClient.connect(uri, function(err, client) {

	db = client.db('todos2');

app.get('/', (req,res) => {
   db.collection('mytodos').find().toArray((err,data) => {
   	// added data object to collection and this is rendered in view
   	res.send(data);
   })
});

app.listen(port, () => {
	console.log("listening at 3000");
})

});
*/
