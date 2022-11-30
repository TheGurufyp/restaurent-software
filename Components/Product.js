import { React, useState } from "react";
import { Heading, Center, Box, Flex, Button, Divider } from "@chakra-ui/react";
import Actions from "./Actions";
import { CloseIcon } from "@chakra-ui/icons";

const Product = () => {
  const [newQuantity, setnewQuantity] = useState(0);
  return (
    <>
      <Flex
        //    border={"1px"}
        justify="space-between"
        align={"center"}
        my="1rem"
      >
        <Box w={"20%"}>Chicken Tikka Pizza</Box>
        <Box w={"15%"} mr={"2rem"}>
          <Actions newQuantity={newQuantity} setnewQuantity={setnewQuantity} />
        </Box>
        <Box w={"20%"}>100</Box>
        <Box w={"20%"}>200</Box>
        <Box w={"5%"}>
          <CloseIcon></CloseIcon>
        </Box>
      </Flex>
    </>
  );
};

export default Product;
