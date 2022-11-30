import React, { useState } from 'react'
import axios from "axios"
import { Box, Heading, Input,Text,Select, HStack  } from '@chakra-ui/react';
import Sizes from '../Components/Sizes';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';



function Addmenuitem() {

const [sizes, setsizes] = useState([])
const [count, setcount] = useState([])
const initialValues = {
  friends: [
    {
      name: '',
      email: '',
    },
  ],
};
const handlechange=(e)=>{
  if(e.target.value==='')
  {
    setcount();
    return 
  }

let arr=[];

for (let i = 0; i < parseInt(e.target.value); i++) {
         arr.push( 0 )
  
}
setcount(arr);

}

  return (
   <>
   
   <Heading mb="50px" mt="40px" textAlign={"center"} >Add Menu item</Heading>
   
<Box mx="auto" w="500px">

<Input placeholder='Enter Name'/>
<Text mt="20px">Select Sizes</Text>

<Select mb="30px" placeholder='Select option' onChange={handlechange}>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
  <option value='4'>4</option>
  <option value='5'>5</option>
  <option value='6'>6</option>

</Select>


<Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
{({ values }) => (
        <Form>
          <FieldArray name="friends">
            {({ insert, remove, push }) => (
              <div>
                {values.friends.length > 0 &&
                  values.friends.map((friend, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`friends.${index}.name`}>Size</label>
                        <Field
                          name={`friends.${index}.name`}
                          placeholder="Enter size"
                          type="text"
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`friends.${index}.email`}>Price</label>
                        <Field
                          name={`friends.${index}.email`}
                          placeholder="Enter price"
                          type="number"
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: '', email: '' })}
                >
                  Add Friend
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Invite</button>
        </Form>
      )}





    </Formik>



{/* {
  count?.map((d,i)=>{
return(
<Box key={i} mt="10px">
 <Sizes id={i} setsizes={setsizes}/>
</Box>
)
  })
} */}


</Box>

   </>
  )
}

export default Addmenuitem;



export async function getServerSideProps(context) {

    try {
      const res=await axios.post("http://localhost:3000/api/addmenuitem");
      const data=res.data;
      return {
        props: {data}, 
      }
      
    } 
    catch (error) {
      
    return {
      notFound: true,
    }
    }
  
  }