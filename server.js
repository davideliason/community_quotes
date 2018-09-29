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

const port = process.env.PORT || 5000;
const uri = process.env.DB_MLAB;

// APP CONFIG
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
/* move from static index.html to CRA 
 app.use('/', express.static(path.join(__dirname, 'public')));
*/

app.use(express.static(path.join(__dirname, 'client/build')));

// ROUTES AFTER DB CONNECTION

MongoClient.connect(uri, (err, database) => {

	if(err) return console.log(err);
	console.log('mlab db connected');
	db = database.db('positivequotes2');

	app.get('/api/quotes', function(req, res, next) {
	  // console.log(process.env.DB_MLAB);
	  db.collection('quotes').find().toArray( (err,quotes)=>{
	  	// res.render('index.ejs', { quotes: quotes})

	  	// back to serving data as JSON as API
	  	res.json(quotes);
	  });

	  // PREVIOUS TEMPLATE ENGINE RENDERING
	  // res.render('index', { title: 'David' });
	  // res.end('hello');
	});

	app.get('/findQuote/:name', (req,res) => {
		db.collection('quotes').findOne({name : req.params.name}, function(err,result) {
			if(err) throw err;
			console.log(result.name);
		});
	});

	app.post('/newQuote', (req,res) => {
		db.collection('quotes').insertOne(
			{
			 "_id" : req.body.name + req.body.quote,
			 "name" : req.body.name,
			 "quote" : req.body.quote
			 });

		console.log("new quote posted" + req.body.name);
		res.send('name added successfully');
	});

	app.put('/updateQuote', (req,res) => {
		db.collection('quotes').updateOne({ _id : req.body.id }, { $set : { quote : req.body.quote } }, (err, res) => {
			if(err) throw err;
			console.log('one doc updated' + req.body.id);

		});

	})

	app.delete('/quotes/delete/:id', (req, res) => {
		db.collection('quotes').deleteOne({ "_id" : req.params.id}, function(err, result){
			if(err) throw err;
			console.log('1 doc deleted');
		});
	});

	// app.get('/quote/:id', (req,res) => {
	// 	console.log(req.params.id);
	// 	db.collection('quotes').findOne({ _id: req.params.id}, (err, doc) => {
	// 		console.log(doc.name);
	// 		// res.render('quote.ejs', { person : doc });
	// 		res.json({ _id : doc._id,
	// 				   name : doc.name,
	// 				   quote : doc.quote
	// 				})
	// 	});
	// });

	app.get('*', (req, res) => {
       res.sendFile(path.join(__dirname+'/client/build/index.html'));
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
