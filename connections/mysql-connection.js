const mysql = require('mysql');

var connectionObj = {};

connectionObj.connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'bhaskarbas',
    database:'flarow'
});

connectionObj.connection.connect((err)=>{
      if(err){
           console.log(err);
      }
      else{
      	   console.log('Database connected successfully');
      }
});

module.exports = connectionObj;

