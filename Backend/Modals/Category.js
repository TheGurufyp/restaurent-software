const mongoose=require('mongoose');

const CategorySchema = new mongoose.Schema({
 
    name:String,

  });
mongoose.models={};
  module.exports=  mongoose.model("category", CategorySchema);
