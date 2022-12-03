
import Order from '../../Backend/Modals/Order'
import connectDb from "../../Backend/connectDb"

const handler=async (req,res)=>{

  if (req.method === 'POST') {
      try {
      const {id}=req.body;
    await Order.findByIdAndDelete({_id:id});
    res.send({success:true,payload:"deleted"})

  } catch (error) {
    res.send({success:false,payload:"not deletd"})
  }
    
    
  
    } 
    else {
      res.send({success:false})
    }


}

export default connectDb(handler);
  