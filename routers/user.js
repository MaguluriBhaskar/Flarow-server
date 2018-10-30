const express = require('express');
var router = express.Router();

router.get('/login',(req,res)=>{
       res.send('Hi welcome to login');
})

module.exports = router;