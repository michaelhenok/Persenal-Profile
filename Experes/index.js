const express = require('express')
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended:false,
})
);

app.listen(3000,()=>{
  console.log('port run on 3000');
})

let data ={};


app.get("/", (req,res) => {
   res.sendFile(__dirname + "/Experes" + "/index.html")
})

app.post("/Add", (req , res)=>{
    console.log(req.body);
    data=req.body;
    
    res.redirect("/view");
});

app.get("/view",(req,res) => {
  res.send(
   "<label>Input1: " +
     data.input1 +
     "</label>" +
     "<br>" +
     "<label>Radio: " +
     data.radio1 +
     "</label>" +
     "<br>" +
     "<label>Checkbox: " +
     data.checkbox1 +
     "</label>" +
     "<br>" +
     "<label>Selected Value: " +
     data.selectedValue +
     "</label>" +
     "<br>" +
     "<label>Text Area: " +
     data.textArea +
     "</label>"
 );
})


app.use((req, res) => {
   res.sendFile(__dirname + "/Experes" + "/err.html")
})

app.listen(3000, () => {
   console.log('Your Server is running on 3000');
   })
 

