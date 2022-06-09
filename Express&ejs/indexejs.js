const express = require ('express');
const app = express();
const ejs = require('ejs');
const path = require("path");


let data = {};


app.use(express.json());
app.use(bodyperser.urlencoded({extended: true}))

app.get('/add' , function (req , res , next){

    res.sendFile(path.join(__dirname ,  '/' , 'index.html'));

});
app.post("/add" , function(req ,res ,next){
    console.log(req.body);
    date = req.body;
    res.redirect("/viwe");

});
app.get("/viwe" , function (req , res , next){
    let temp = "";
    temp += creatspan ("Full-Name", data ["name"]);
    temp += creatspan ("Gender", data ["Gender"]);
    temp += creatspan ("Abilty", data ["Abilty"]);
    
    res.send(temp);
});

function creatspan(label , data) {
    return "<span>" + label + ":" + data + "</span><br>"
};

app.listen(205 , ()=> console.log("Server is on 205"));

