const moongose = require('mongoose');

const ToDoSchema = new moongose.Schema({
    ID:{type: String , required:true},
    TaskName:{type:String},
    Task_Description:{type:String},
    Date_Added:{type:Date},
    User: {type: String}
});

const ToDo = moongose.model("Tasks" , ToDoSchema ); // table name and schema name

module.exports = ToDo;
