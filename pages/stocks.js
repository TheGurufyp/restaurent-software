import { Box, Heading, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react'
import React from 'react'

function Stocks() {
  return (
    <>
    <Box mt="20px" maxW={"1500px"} mx="auto">
    <Heading textAlign={"center"} >Stocks</Heading>
    
   
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    
    <Thead>
      <Tr>
        <Th>Item Name</Th>
        <Th>Current Quantity</Th>
        <Th isNumeric>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
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