const mongoose=require('mongoose')
// const { default: handler } = require('../pages/api/addmenuitem')

const connectDb=async (handler)=>{

if(mongoose.connections[0].readyState)
{
    return handler(req,res);
}

await mongoose.connect('mongodb://localhost:27017/restaurent');
return handler(req,res);

}

export default connectDb;