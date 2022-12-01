
import Category from '../../Backend/Modals/Category'
import connectDb from "../../Backend/connectDb"

const handler=async (req,res)=>{

  if (req.method === 'GET') {
   
   const categories=await Category.find({})
    
    res.send({success:true,payload:categories})
  
    } 
    else {
      res.send({success:false})
    }


}

export default connectDb(handler);
  