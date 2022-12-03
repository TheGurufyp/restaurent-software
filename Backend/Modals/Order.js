const mongoose=require('mongoose');

const OrderSchema = new mongoose.Schema({
 
  order:[],
  order_id:{type:Number },
  discount:Number,
         priceAfterdiscount:Number,
         totalPrice:Number,
         orderDate:String
   


   
  });
mongoose.models={};
  module.exports=  mongoose.model("order", OrderSchema);
