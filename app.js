const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const validator = require('express-validator');

const user_router = require('./routers/user');

var app = express();

app.use(body_parser.json());
app.use(cors());
app.use(validator());

app.use('/api/1/user',user_router);

app.listen('1638',()=>{
	console.log('Serve is started');
});