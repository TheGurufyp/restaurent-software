const mongoose=require('mongoose')
// const { default: handler } = require('../pages/api/addmenuitem')

const connectDb= handler=> async (req,res)=>{

if(mongoose.connections[0].readyState)
{
    return handler(req,res);
}

await mongoose.connect('mongodb://127.0.0.1:27017/restaurant');
return handler(req,res);

}

export default connectDb;