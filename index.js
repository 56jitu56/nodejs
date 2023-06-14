var express = require ('express');
var app = express();
const storage =require('node-persist');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
storage.init();

app.get('/student/:id', async(req,res)=>{
    res.send(await storage.getItem (req.params.id));
});

app.post("student",jsonParser,async(req,res)=>{
const {student_id, student_name, student_gpa} = req.body;
await storage.setItem(student_id, student_name, student_gpa);
res.send("added stundent");
})


app.listen(5000,() => {
    console.log("server has started!")
});