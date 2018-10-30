const validators = require('express-validator');

var  user = {};

user.login = function(req,res,connector){
      res.send('user login');
}

user.register = function(req,res,connector){
	  let full_name = req.body.full_name;
	  let email = req.body.email;
	  let password = req.body.password;
	  let mobile = req.body.mobile;
	  let type = req.body.type;
	  let city = req.body.city;
	  let country = req.body.country;
	  let gender = req.body.gender;

      req.checkBody('full_name','Full name can\' be empty').notEmpty();
      req.checkBody('full_name','Full name must be alphabets').isAlpha();
      req.checkBody('email','Email can\'t be empty').notEmpty();
      req.checkBody('email','Enter Valid email').isEmail();
      req.checkBody('mobile','Mobile can\'t be empty').notEmpty();
      req.checkBody('type','Type can\'t be empty').notEmpty();
      req.checkBody('city','City can\'t be empty').notEmpty();
      req.checkBody('country','Country can\'t be empty').notEmpty();
      req.checkBody('gender','Gender can\'t be empty').notEmpty();
      req.checkBody('password','Password length must be 8 characters').len(8);

      let errors = req.validationErrors();
      if(errors){
      	 res.send({msg:errors && errors[0]?errors[0]['msg']:'Provide correct information',status:false});
      }
      else{
      	 let query = 'INSERT INTO users (fullname,email,password,mobile,type,gender,city,country) values (?,?,?,?,?,?,?,?)';
	     connector.connection.query(query,[full_name,email,password,mobile,type,gender,city,country],(err,result,fields)=>{
	         if(err){
		  		res.send({msg:'This email already register',status:false});
		  	 }
		  	 else{
		  		res.send({msg:'Successfully register',status:true});
		  	 }
	     });

      }
}

module.exports = user;