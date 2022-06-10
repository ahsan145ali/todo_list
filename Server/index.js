const express = require('express');
const moongose = require('mongoose');
const ToDoModel = require('./models/ToDo');
const cors = require('cors');
const app = express();

app.use(express.json()) // allows to receive information from front end in json format
app.use(cors()) // allows us to communicate with APIs we create on frontend

// first parameter is address of MongoDB database, second is an object
moongose.connect('mongodb+srv://ahsan145ali:Sherry!32@tasks.rgwve1y.mongodb.net/ToDo?retryWrites=true&w=majority' , 
                {
                    useNewUrlParser:true

                }
);

app.post("/insert" , async (req,res) =>{ // checks if a user reaches route "/" then performs an action

    const newTask = req.body.newTask;
    const Task_Data = new ToDoModel({
        ID : newTask.id,
        TaskName : newTask.task,
        Task_Description: newTask.desc,
        Date_Added: newTask.date

    })

    try{
        await Task_Data.save();
        console.log("Success");
        res.send("Data Inserted");
    }catch(error){
        console.log("ERROR In Insert: " + error);
    }
})

// 3000 here is the port of localhost which is running on 3000
app.listen(3001 , ()=>{
    console.log("Server running on Port 3001...");
}) 