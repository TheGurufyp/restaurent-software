import { Box, Flex } from '@chakra-ui/react';
import React from 'react'

function HamburgerSign({setopenSidebar,openSidebar}) {


    const show = () => {
        if (openSidebar === false) {
    
          document.getElementById('one').style.transform = 'rotate(45deg) translate(8px)';
          document.getElementById('two').style.opacity = '0';
          document.getElementById('two').style.transform = 'translate(-20px)';
          document.getElementById('three').style.transform = 'rotate(-45deg) translate(9px)';
    
        //   setmenuOpened(true);
        }
        else {
    
          document.getElementById('one').style.transform = 'rotate(0deg) translate(0px)';
          document.getElementById('two').style.opacity = '1';
          document.getElementById('two').style.transform = 'translate(0px)';
          document.getElementById('three').style.transform = 'rotate(0deg) translate(0px)';
    
        //   setmenuOpened(false);
        }
      }
  return (
   <>
  
   <Flex onClick={()=>{setopenSidebar(!openSidebar),show()}}
                h={"20px"}
                w="24px"
                direction={"column"}
                justifyContent="space-between"

              >
                <Box className="sub" id="one" h="4px" bg="white" borderRadius={"8px"} style={{ transition: "transform 0.3s,background-color 0.3s" }}></Box>
                <Box className="sub" id="two" h="4px" bg="white" borderRadius={"8px"} style={{ transition: "opacity 0.3s, transform 0.3s,background-color 0.2s" }}></Box>
                <Box className="sub" id="three" h="4px" bg="white" borderRadius={"8px"} style={{ transition: "transform 0.3s,background-color 0.1s" }}></Box>
              </Flex>
   
   </>
  )
}

export default HamburgerSign