const mongoose=require('mongoose');

const MenuitemsSchema = new mongoose.Schema({
 
    name:String,
    category:String,
    sizes:[{
        size:{type:String,default:"N"},
        price:{type:Number,default:0}
    }]


   
  });
mongoose.models={};
  module.exports=  mongoose.model("menuitem", MenuitemsSchema);
