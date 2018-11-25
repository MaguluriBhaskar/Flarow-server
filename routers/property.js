const express = require('express');
const connection = require('../connections/mysql-connection');
const property = require('../data-handle/property-data-handle');
var router = express.Router();

router.post('/create',(req,res)=>{
    property.create(req,res,connection);
})

router.get('/list/:id',(req,res)=>{
    property.getList(req,res,connection);
});

router.get('/list',(req,res)=>{
    property.getAllList(req,res,connection);
});


module.exports = router;