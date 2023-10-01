const mongoose = require('mongoose')

let atlas='mongodb+srv://connecturbanspace:mf0iulH0anMrR4tQ@cluster0.ovesjpc.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(`${atlas}` ,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{ 
    console.log("Connection to Database Successfull")})
.catch((err)=>{ 
    console.log(`Error due to ${err}`)})