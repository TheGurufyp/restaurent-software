import { Box,Flex } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
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
      <Box
        // border={"1px"}
        color="orange"
        fontSize={"2rem"}
        fontWeight="semibold"
        fontStyle={"italic"}
      >
        Wakhra 
      </Box>
      <Box
        // border={"1px"}
        fontWeight="medium"
        color={"red.400"}
        borderColor="white"
        textDecoration="HighlightText"
      >
        Fast Food, B.B.Q, Sajji
      </Box>
    </Flex>
  </>
  )
}

export default Navbar