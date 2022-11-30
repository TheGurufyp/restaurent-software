
import Menuitem from '../../Backend/Modals/Menuitem'
import connectDb from "../../Backend/connectDb"

const handler=async (req,res)=>{

  if (req.method === 'POST') {
   
    const {sizes}=req.body;
    
    const newitem= new Menuitem({
      name:"pizza",
      sizes:sizes
    })
    await newitem.save();

    res.send({success:true})
  
    } else {
      res.status(200).json({ name: 'get' })
    }


}

export default connectDb(handler);
  