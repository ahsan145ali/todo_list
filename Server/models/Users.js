const moongose = require('mongoose');

const UsersSchema = new moongose.Schema({
   
    Email:{type:String , unique:true},
    Password:{type:String},
});

const users = moongose.model("Users" , UsersSchema ); // table name and schema name

module.exports = users;
