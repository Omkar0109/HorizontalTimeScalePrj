var exp= require("express")
var mysl=require("mysql2")
var cor=require("cors")
var bp=require("body-parser")

var con=mysl.createConnection({
    host:"localhost",
    database:"ridehub",
    password:"omkar",
    user:"root"
});

con.connect(function(err){
    if(!err)
    {
        console.log("Db connected");
    }
    else{
        console.log("db not connected");
    }
})

var app=exp()

app.use(cor())
app.use(bp.json())
app.listen(9000,function(){
    console.log("exp-Rest-server-900-started")
})