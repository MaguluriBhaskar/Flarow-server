const express = require('express');
const connection = require('../connections/mysql-connection');
const user = require('../data-handle/user-data-handle');
var router = express.Router();

router.post('/login',(req,res)=>{
    user.login(req,res,connection);
})

router.post('/register',(req,res)=>{
    user.register(req,res,connection);
});

router.get('/:id',(req,res)=>{
    user.getUserData(req,res,connection);
});

module.exports = router;