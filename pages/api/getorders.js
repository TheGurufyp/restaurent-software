
import Order from '../../Backend/Modals/Order'
import connectDb from "../../Backend/connectDb"

const handler=async (req,res)=>{

  if (req.method === 'GET') {
   
   const orders=await Order.find({})
    
    res.send({success:true,payload:orders})
  
    } 
    else {
      res.send({success:false})
    }


}

export default connectDb(handler);
  