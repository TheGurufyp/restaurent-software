
import Menuitem from '../../Backend/Modals/Menuitem'
import connectDb from "../../Backend/connectDb"

const handler=async (req,res)=>{

  if (req.method === 'GET') {
   
   const items=await Menuitem.find({})
    
    res.send({success:true,payload:items})
  
    } 
    else {
      res.send({success:false})
    }


}

export default connectDb(handler);
  