import React,{useRef,useState,useEffect} from 'react'
import { Box, Button, Divider, Flex, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
// import { BiSearchAlt } from "react-icons/bi";

function SideBar({setopenSidebar,openSidebar}) {

 
    // const [openSidebar, setopenSidebar] = useState(false)
 

let sideStyles={
    position: "fixed",
    left: "0px",
    top:"0px",
    zIndex:1100,
    backgroundColor: "#3182ce",
    width: "250px",
    height: "100vh",
    transition: "all 0.3s",
    transform:openSidebar? "translateX(0px)" :"translateX(-100%)"
}




  return (
    <>

   <Box style={sideStyles} >
       
<Flex direction={"column"} justify="center"  h="100%">

<Box  color="white"  textAlign={"center"} > 

<Link href={"/"}>
<Text cursor={"pointer"} transition={"all 0.2s"} _hover={{
    bg:"blue.600"
}} py="10px" w="80%" mx={"auto"}>Place Order</Text>
</Link>
<Divider w="80%" mx="auto" my="10px"/>

<Link href={"/addmenuitem"}> 
<Text cursor={"pointer"} transition={"all 0.2s"} _hover={{
    bg:"blue.600"
}} py="10px" w="70%" mx={"auto"}>Add Menu Item</Text>
</Link>
<Divider w="80%" mx="auto"  my="10px"/>

<Link href={"/stocks"}>
<Text cursor={"pointer"} transition={"all 0.2s"} _hover={{
    bg:"blue.600"
}} py="10px" w="70%" mx={"auto"}> Stocks</Text>
</Link>
<Divider w="80%" mx="auto" my="10px" />




</Box>

</Flex>




 


   </Box>
    
    </>
  )
}

export default SideBar