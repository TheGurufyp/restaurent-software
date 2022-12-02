const mongoose=require('mongoose');

const OrderSchema = new mongoose.Schema({
 
  order:[],
  order_id:{type:Number }
   


   
  });
mongoose.models={};
  module.exports=  mongoose.model("order", OrderSchema);
