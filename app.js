const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');

var app = express();

app.use(body_parser.json());
app.use(cors());

app.listen('1638',()=>{
	console.log('Serve is started');
});