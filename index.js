const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})
app.post('/files',(req,res)=>{
    res.send("Hola mundo")
})
app.listen(4000,()=>console.log("El server se esta ejecutando en el puerto 4000"))