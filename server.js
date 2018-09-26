const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.end('hello world' + process.env.TEST);
});

app.listen(port, () => {
	console.log("listening at 3000");
})