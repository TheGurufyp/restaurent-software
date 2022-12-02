import { Box,Flex } from '@chakra-ui/react'
import React,{useState} from 'react'
import SideBar from "./Sidebar";
import HamburgerSign from "./hamburgerSign";

function Navbar() {

  const [openSidebar, setopenSidebar] = useState(false)

  return (
    <>
    <Flex
      border={"1px"}
      direction="column"
      justify={"center"}
      align="center"
      bg={"black"}
      p="0.5rem"
    >
       <SideBar  setopenSidebar={setopenSidebar} openSidebar={openSidebar}/>
       <Box ml="20px" position={"absolute"} left="0px" zIndex="2000" top={"25px"}>
        <HamburgerSign setopenSidebar={setopenSidebar} openSidebar={openSidebar}/>
      </Box>


      <Box
        // border={"1px"}
        color="orange"
        fontSize={"2rem"}
        fontWeight="semibold"
        fontStyle={"italic"}
      >
        Wakhra Swaad
      </Box>
     
    </Flex>
  </>
  )
}

export default Navbar