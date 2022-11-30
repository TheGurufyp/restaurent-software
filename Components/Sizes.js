import React,{useState} from 'react'
import { Box, Heading, Input,Text,Select, HStack  } from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';


function Sizes({id,setsizes}) {
  
    const [size, setsize] = useState();

//     const handlechange=(e)=>{
//         if(e.target.value==='') return ;
        
// // console.log(id)
// //         console.log(e.target.value)

// let temp={
//    size:e.target.value
// }

// setsize(temp);

//     }





  return (
   <>
   
    <HStack>
 <Select placeholder='Select' onChange={handlechange}>
 <option value='N'>N</option>
  <option value='S'>S</option>
  <option value='M'>M</option>
  <option value='L'>L</option>
  <option value='XL'>XL</option>
  <option value='XXL'>XXL</option>
  <option value='Q'>Q</option>
  <option value='H'>H</option>
  <option value='F'>F</option>

</Select>
<Input type={"number"} placeholder="Price" />
</HStack>
</>
  )
}

export default Sizes