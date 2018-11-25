const validators = require('express-validator');

var  user = {};

user.login = function(req,res,connector){
      let user_name = req.body.user_name;
      let password = req.body.password;
      req.checkBody('user_name','email  can\'t be empty').notEmpty();
      req.checkBody('user_name','please enter valid email').isEmail();
      let errors = req.validationErrors();
      if(errors){
            res.send({msg:errors && errors[0]?errors[0]['msg']:'Provide correct information',status:false});
     }
     else{
            let query = 'select * from users where email=? && password=?';
          connector.connection.query(query,[user_name,password],(err,result,fields)=>{
              if(err){
                        res.send({msg:'Please provide correct Details',status:false,err:err});
                    }
              else{
                  if(result && result.length == 0){
                        res.send({msg:'Please provide correct Details',status:false});
                  }
                  else{
                        res.send({ msg:'Successfully Login',data:result[0],status:true });
                  }
              }
          });

     }

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
      let pincode = req.body.pincode;
      let image = req.body.image;
      let address = req.body.address;

      req.checkBody('full_name','Full name can\' be empty').notEmpty();
     // req.checkBody('full_name','Full name must be alphabets').isAlpha();
     // req.checkBody('full_name','Full name must be 3 Characters ').isAlpha();
      req.checkBody('email','Email can\'t be empty').notEmpty();
      req.checkBody('email','Enter Valid email').isEmail();
      req.checkBody('mobile','Mobile can\'t be empty').notEmpty();
      req.checkBody('type','Type can\'t be empty').notEmpty();
      req.checkBody('city','City can\'t be empty').notEmpty();
      req.checkBody('country','Country can\'t be empty').notEmpty();
      req.checkBody('gender','Gender can\'t be empty').notEmpty();
      req.checkBody('password','Password length must be 5 characters').len(5);

      let errors = req.validationErrors();
      if(errors){
      	 res.send({msg:errors && errors[0]?errors[0]['msg']:'Provide correct information',status:false});
      }
      else{
      	 let query = 'INSERT INTO users (fullname,email,password,mobile,type,gender,city,country,pincode,image,address) values (?,?,?,?,?,?,?,?,?,?,?)';
	     connector.connection.query(query,[full_name,email,password,mobile,type,gender,city,country,pincode,image,address],(err,result,fields)=>{
	         if(err){
  			    res.send({msg:'This email already register',status:false,err:err});
		  	 }
		  	 else{
	  		    res.send({msg:'Successfully register',status:true});
		  	 }
	     });

      }
}

user.getUserData = function(req,res,connector){
       
      let id = req.params.id;
      let query = 'select * from users where id=?';
      connector.connection.query(query,[id],(err,result,fields)=>{
        if(err){
                res.send({msg:'Please provide correct Details',status:false,err:err});
        }
        else{
            if(result && result.length == 0){
                res.send({msg:'No Data Available',status:false});
            }
            else{
                res.send({data:result[0]});
            }
        }
       });
}

module.exports = user;
