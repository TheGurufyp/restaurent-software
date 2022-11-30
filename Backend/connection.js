const mongoose=require('mongoose')

module.exports=()=>{

    mongoose.connect('mongodb://localhost:27017/zahoor-travels')
    .then(()=>{console.log("connected to database")})
    .catch((error)=>{console.log("Error connecting to database",error)});

}