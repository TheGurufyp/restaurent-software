const mongoose=require('mongoose');

const MenuitemsSchema = new mongoose.Schema({
 
    name:String,
    sizes:[{
        size:{type:String,default:"N"},
        price:{type:Number,default:0}
    }]


   
  });

  module.exports=  mongoose.model("menuitem", MenuitemsSchema);
