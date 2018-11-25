const validators = require('express-validator');

var  propertyObj = {};

propertyObj.create = function(req,res,connector){

     
      let title = req.body.title;
      let type = req.body.type;
      let location = req.body.location;
     // let image = req.body.image;
      let cost = req.body.cost;
      let description = req.body.description;
      let width =req.body.width;
      let length = req.body.length;
      let account_id = req.body.account_id;
      let address = req.body.address;
   
       let query = 'insert into properties (title,type,location,cost,description,width,length,account_id,address) values (?,?,?,?,?,?,?,?,?)';
       connector.connection.query(query,[title,type,location,cost,description,width,length,account_id,address],(err,result,fields)=>{
       if(err){
                    res.send({msg:'Please provide correct Details',status:false,err:err});
        }
        else{
            if(result && result.length == 0){
                res.send({msg:'Please provide correct Details',status:false});
            }
            else{
                res.send({msg:'Successfully Created',status:true});
            }
        }
        });

}

propertyObj.getList = function(req,res,connector){
       let id = req.params.id;
       let query = 'select * from properties where account_id=?';
       connector.connection.query(query,[id],(err,result,fields)=>{
         if(err){
                 res.send({msg:'Please provide correct Details',status:false,err:err});
         }
         else{
             if(result && result.length == 0){
                 res.send({msg:'No Data Available',status:false});
             }
             else{
                 res.send({result});
             }
         }
        });
}

propertyObj.getAllList = function(req,res,connector){
    let query = 'select u.fullname,u.id,p.location,p.type,p.cost,p.address,p.image,p.title,p.description,p.width,p.length from users as u inner join properties as p on  u.id=p.account_id';
    connector.connection.query(query,(err,result,fields)=>{
      if(err){
              res.send({msg:'Please provide correct Details',status:false,err:err});
      }
      else{
          if(result && result.length == 0){
              res.send({msg:'get Data Available',status:false});
          }
          else{
              res.send({result});
          }
      }
     });
}

module.exports = propertyObj;
