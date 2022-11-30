import { React, useState } from "react";
import {
  Heading,
  Center,
  Input,
  Box,
  Flex,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import Product from "../Components/Product";

const cart = () => {
  return (
    <>
      <Flex
        border={"1px"}
        borderColor="gray.200"
        borderRadius={"8px"}
        width="50%"
        marginInline={"auto"}
        direction="column"
        my="0.5rem"
        p={"1rem"}
      >
        <Flex
          w={"100%"}
          // border={"1px"}
          justify="space-between"
          align={"center"}
        >
          <Box
            // border={"1px"}
            p="10px"
            fontWeight={"semibold"}
            fontSize="1.5rem"
          >
            Cart
          </Box>
          <Box
            // border={"1px"}
            p="10px"
            fontWeight={"semibold"}
            fontSize="1.5rem"
          >
            3 Items
          </Box>
        </Flex>
        <Divider my={"1rem"} />
        <Flex
          //  border={"1px"}
          justify="space-between"
          align={"center"}
        >
          <Box
            w={"20%"}
            //    border={"1px"}
            fontWeight="semibold"
          >
            Food Detail
          </Box>
          <Box
            w={"20%"}
            //    border={"1px"}
            fontWeight="semibold"
          >
            Quantity
          </Box>
          <Box
            w={"20%"}
            //    border={"1px"}
            fontWeight="semibold"
          >
            Price
          </Box>
          <Box
            w={"20%"}
            //    border={"1px"}
            fontWeight="semibold"
          >
            Total Price
          </Box>
          <Box width={"5%"}></Box>
        </Flex>
        <Product />
        <Product />
        <Product />
        <Product />

        <Divider my={"0.6rem"}></Divider>

        <Flex
          //   border={"1px"}
          direction="row"
          align={"center"}
          justify="space-between"
        >
          <Flex
            // justify={"space-between"}
            // width="40%"
            justify={"right"}
            // marginInline={"auto"}
            direction="column"
          >
            <Flex>
              <Box fontWeight={"semibold"}>Total Price : </Box>
              <Box mx={"1rem"}>800</Box>
            </Flex>
            <Divider my={"0.2rem"} width="40%"></Divider>
            <Flex my={"0.7rem"} justify={"left"} align="center">
              <Text colorScheme={"blue"} fontWeight="semibold">
                Discount %{" "}
              </Text>
              <Input mx="1rem" type={"number"} size="sm" width={"20%"}></Input>
            </Flex>
            <Divider my={"0.2rem"} width="55%"></Divider>
            <Flex>
              <Box fontWeight={"semibold"}>Total Price After Discount : </Box>
              <Box mx={"1rem"}>800</Box>
            </Flex>
          </Flex>
          <Flex justify={"right"} mr="2rem">
            <Button variant={"solid"} colorScheme="blue">
              CHECKOUT
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default cart;
