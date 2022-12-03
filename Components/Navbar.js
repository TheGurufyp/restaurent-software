import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import SideBar from "./Sidebar";
import HamburgerSign from "./hamburgerSign";

function Navbar() {
  const [openSidebar, setopenSidebar] = useState(false);

  return (
    <>
      <Flex
        direction="column"
        justify={"center"}
        align="center"
        bg={"black"}
        p="0.5rem"
        borderColor={"white"}
      >
        <SideBar setopenSidebar={setopenSidebar} openSidebar={openSidebar} />
        <Box
          ml="20px"
          position={"absolute"}
          left="0px"
          zIndex="2000"
          top={"25px"}
        >
          <HamburgerSign
            setopenSidebar={setopenSidebar}
            openSidebar={openSidebar}
          />
        </Box>
        <Flex justify={"center"} align="center">
          <Box
            // border={"1px"}
            color="orange"
            fontSize={"2rem"}
            fontWeight="semibold"
            fontStyle={"italic"}
          >
            Wakhra Swaad
          </Box>
          <Box>
            <Image
              src="/pics/fire3.png"
              // border={"1px"}
              // boxSize="100px"
              objectFit="cover"
              height={"50px"}
            ></Image>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
