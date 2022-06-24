const express = require('express');
const moongose = require('mongoose');
const ToDoModel = require('./models/ToDo');
const UsersModel = require('./models/Users');
const cors = require('cors');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const saltRounds = 10;

const app = express();
app.use(express.json()) // allows to receive information from front end in json format
const corsOptions = {
    exposedHeaders: "Authorization"
  };
app.use(cors(corsOptions)) // allows us to communicate with APIs we create on frontend


// first parameter is address of MongoDB database, second is an object
moongose.connect('mongodb+srv://ahsan145ali:Sherry!32@tasks.rgwve1y.mongodb.net/ToDo?retryWrites=true&w=majority' , 
                {
                    useNewUrlParser:true

                }
);

app.post("/insert" , async (req,res) =>{ // checks if a user reaches route "/insert" then performs an action

    const newTask = req.body.newTask;
    //const Token = req.body.headers["Authorization"];
    //console.log(Token);
    const Task_Data = new ToDoModel({
        ID : newTask.id,
        TaskName : newTask.task,
        Task_Description: newTask.desc,
        Date_Added: newTask.date,
        User:newTask.user

    })

    try{
        await Task_Data.save();
        
        res.send("Data Inserted");
        
    }catch(error){
        
    }
})

app.put("/update" , async (req,res) =>{ // checks if a user reaches route "/insert" then performs an action

    const newTaskName = req.body.newTaskName;
    const ID = req.body.id;
    //const Token = req.body.headers["Authorization"];
    //console.log(Token);
    
   
    try{
        await ToDoModel.findById(ID , (err,updatedTaskName)=>{
            updatedTaskName.TaskName = newTaskName;
            updatedTaskName.save();
           
        })
        res.send("Updated");
        
    }catch(error){
        res.send(error);
    }
})

app.get("/read" , async (req,res) =>{ // checks if a user reaches route "/read" then performs an action
    
    const email = req.query.useremail;
    
    // we want to read everything from DB so passing {} empty object as 1 param
    ToDoModel.find({'User' : email},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    }) 
}) 
app.post("/delete" , async(req,res) => {

    const del_id =  req.body.id;
       ToDoModel.findByIdAndRemove(del_id , (err,result) => {
        if(err){
            res.send(err);
        }
        res.send(result);
      })  
})
app.post("/signup" , async(req,res)=>{
    const email =  req.body.Email;
    const pass = req.body.Password;

    const password = await bcrypt.hash(pass,saltRounds);

    const user_data = new UsersModel({
        Email : email,
        Password: password,
    })
    
    try{
        await user_data.save();
        
        res.send("Data Inserted");
    }catch(error){
        res.send("err");
    }
})


app.post("/login" , async(req , res) => {
    const email =  req.body.Email;
    const pass = req.body.Password;

    let status = '';
   // const result  = await VerifyUserLogin(email,pass);
   try{
        const user = await UsersModel.findOne({Email: email}).lean();
        if(!user)
        {
            res.send({status: false , msg:'User Not Found'});
        }
        else
        {
            // User Found
            

            if(await bcrypt.compare(pass,user.Password)){
                token = jwt.sign({id:user._id,username:user.Email},'secret',{expiresIn : '1h'});
                
                var decoded = jwt.verify(token,'secret');
                res.send({status: true , msg:'Login Successs' , token: token , dec: decoded});
            }else{
                res.send({status: false , msg:'Invalid Password'});
            }
        }
    }catch(err){

    }
})
// 3000 here is the port of localhost which is running on 3000
app.listen(3001 , ()=>{
    console.log("Server running on Port 3001...");
}) 
