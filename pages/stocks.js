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
import Actions from '../Components/Actions'
import axios from "axios"

function Stocks() {
  
const [newQuantity, setnewQuantity] = useState(0)
// const [showinput, setshowinput] = useState(false)

// const handleclick=()=>{

//   setshowinput(true);


// }

// const handleclickoutside=(e)=>{

//   let value=document.getElementById("inputfield").value;
//   if(value==='')
//   {value=0}
//   setnewQuantity(parseInt(value)); 
//   setshowinput(false); 

// }

// const handlePlus=()=>{

//   setnewQuantity(newQuantity+1);
// }

// const handleMinus=()=>{

//   setnewQuantity(newQuantity-1)
// }

  return (
    <>
    <Box mt="20px" maxW={"1500px"} mx="auto" px="20px">
    <Heading mb="20px" textAlign={"center"} position="relative">Stocks
    <Button colorScheme={"blue"} position={"absolute"} right="10px" bottom={"0px"}>Save All</Button>
    </Heading>
    
   
    <TableContainer>
  <Table variant='striped' colorScheme='blue'>
    
    <Thead>
      <Tr>
        <Th>Item Name</Th>
        <Th textAlign={"center"}>Current Quantity</Th>
        <Th textAlign={"center"}>Actions</Th>
        <Th isNumeric pr="35px">Save</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Chicken </Td>
        <Td textAlign={"center"}>20</Td>
        <Td  >
          <Actions newQuantity={newQuantity} setnewQuantity={setnewQuantity}/>
         {/* <HStack  justify="center" spacing={4}>

        
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

       

         </HStack> */}
          </Td>
          <Td isNumeric > <Button size={"sm"} colorScheme={"blue"}>Save</Button></Td>
      </Tr>
      
    </Tbody>
    <Tfoot>
     
    </Tfoot>
  </Table>
</TableContainer>



    </Box>
    </>
  )
}

export default Stocks;

export async function getServerSideProps(context) {
  const postData = async () => {
  
    const response = await fetch("/api/hello", {
      method: "POST"
    });
    return response.json();
  };
  postData().then((data) => {
    alert(data);
  });
// const res=await axios.get("/api/hello");
// console.log(res);

  return {
    props: {}, 
  }
}

