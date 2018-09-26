const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const app = express();

app.get('/', (req,res) => {
	console.log("index route");
});

app.listen(3000, () => {
	console.log("listening at 3000");
})