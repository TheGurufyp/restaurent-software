
import Order from '../../Backend/Modals/Order'
import connectDb from "../../Backend/connectDb"

const handler=async (req,res)=>{

  if (req.method === 'POST') {

    try {
        
        const {cart,order_id}=req.body;
        // console.log(cart)
        const newOrder=new Order({
         order:cart,
         order_id:order_id
        })
     
       await newOrder.save() ;
         
         res.send({success:true,payload:"Order saved"})
    } catch (error) {
      // console.log(error)
        res.send({success:false})
    }
  
    } 
    else {
      res.send({success:false})
    }


}

export default connectDb(handler);
  