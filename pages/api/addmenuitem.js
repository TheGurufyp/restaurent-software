
import Menuitem from '../../Backend/Modals/Menuitem'
import connectDb from "../../Backend/connectDb"

const handler=async (req,res)=>{

  if (req.method === 'POST') {
   
    const {sizes,name,category}=req.body;
    
    const newitem= new Menuitem({
      name:name,
      category:category,
      sizes:sizes
    })
    await newitem.save();

    res.send({success:true})
  
    } else {
      res.send({success:false})
    }


}

export default connectDb(handler);
  