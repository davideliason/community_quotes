const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const logger = require('morgan');

const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;
const uri = process.env.DB_LOCAL_URI;

//middleware

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