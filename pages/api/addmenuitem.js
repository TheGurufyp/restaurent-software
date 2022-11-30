
import Menuitem from '../../Backend/Modals/Menuitem'
import connectDb from "../../Backend/connectDb"

const handler=async (req,res)=>{
  if (req.method === 'POST') {
   
    const {data}=req.body;


    res.status(200).json({ data })
  
    } else {
      res.status(200).json({ name: 'get' })
    }


}

export default connectDb(handler);
  