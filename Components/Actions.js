import { Box, Heading, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Text,
    HStack,
    Input,IconButton  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CheckIcon } from '@chakra-ui/icons'


function Actions({newQuantity,setnewQuantity}) {


    const [showinput, setshowinput] = useState(false)

const handleclick=()=>{
  setshowinput(true);
}

const handleclickoutside=(e)=>{

  let value=document.getElementById("inputfield").value;
  if(value==='')
  {value=0}
  setnewQuantity(parseInt(value)); 
  setshowinput(false); 

}

const handlePlus=()=>{

    setnewQuantity(newQuantity+1);
  }
  
  const handleMinus=()=>{
  
    setnewQuantity(newQuantity-1)
  }


  return (
    <>
     <HStack  justify="center" spacing={4}>

        
{ 
showinput?
<>
 <Input  w="60px" size={"sm"} borderColor="black" _hover={{borderColor:"black"}} type="number" fontWeight={"semibold"} id="inputfield"  /> 
 <IconButton onClick={(e)=>{ handleclickoutside(e)}} 
  colorScheme={"green"} size='sm' icon={<CheckIcon />} />
 </>
 :
 <>
  <Button size={"sm"} colorScheme="green" onClick={()=>{handleMinus()}}>-</Button>
<Text onClick={handleclick} display={"inline-block"}>{newQuantity}</Text>
<Button size={"sm"} colorScheme="red"  onClick={()=>{handlePlus()}}>+</Button>
</>
 }



 </HStack>
    
    
    </>
  )
}

export default Actions