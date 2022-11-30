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
    Input, } from '@chakra-ui/react'
import React, { useState } from 'react'

function Stocks() {

const [newQuantity, setnewQuantity] = useState(0)

const handlechange=(e)=>{
 
  if(e.target.value[0]==='0')
{
  e.target.value=e.target.value.slice(1);
  console.log(e.target.value)
}
  if(e.target.value=== '')
  {setnewQuantity(0);}
  else
 { setnewQuantity(parseInt(e.target.value))}
}

const handlePlus=()=>{

  setnewQuantity(newQuantity+1);
}

const handleMinus=()=>{

  setnewQuantity(newQuantity-1)
}

  return (
    <>
    <Box mt="20px" maxW={"1500px"} mx="auto" px="20px">
    <Heading mb="20px" textAlign={"center"} position="relative">Stocks
    <Button colorScheme={"blue"} position={"absolute"} right="10px">Save</Button>
    </Heading>
    
   
    <TableContainer>
  <Table variant='striped' colorScheme='blue'>
    
    <Thead>
      <Tr>
        <Th>Item Name</Th>
        <Th textAlign={"center"}>Current Quantity</Th>
        <Th isNumeric>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Chicken </Td>
        <Td textAlign={"center"}>20</Td>
        <Td  >
         <HStack  justify="end" spacing={4}>

         <Button size={"sm"} colorScheme="green" onClick={()=>{handleMinus()}}>-</Button>
         {/* <Text  display={"inline-block"}>{newQuantity}</Text> */}

         <Input  w="50px" size={"sm"} borderColor="black" _hover={{borderColor:"black"}} type={"number"} fontWeight={"semibold"} value={newQuantity} onChange={(e)=>{handlechange(e)}} />

         <Button size={"sm"} colorScheme="red"  onClick={()=>{handlePlus()}}>+</Button>

         </HStack>
          </Td>
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

export default Stocks