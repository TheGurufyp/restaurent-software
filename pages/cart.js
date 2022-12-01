import { useState } from "react";
import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
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
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Product from "../Components/Product";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
          // direction="row"
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
            <Button onClick={onOpen} variant={"solid"} colorScheme="blue">
              CHECKOUT
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} size={"full"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Center
                    bg={"blue.400"}
                    width="80%"
                    marginInline={"auto"}
                    borderRadius="8px"
                  >
                    Invoice
                  </Center>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody
                  w={"100%"}
                  display="flex"
                  // justifyContent={"center"}
                  flexDirection={"column"}
                  justifyContent="center"
                  marginInline={"auto"}
                  // alignContent="auto"
                  alignItems="center"
                  // border="1px"
                >
                  <Flex
                    // border={"1px"}
                    // flexDir="column"
                    width={"70%"}
                    justify="space-between "
                    align="center"
                    direction={"column"}
                  >
                    <Center
                      fontWeight={"semibold"}
                      bg={"red.200"}
                      width="60%"
                      marginInline={"auto"}
                      borderRadius="8px"
                    >
                      For Customer
                    </Center>
                    <Flex
                      border={"1px"}
                      borderColor="gray"
                      direction="column"
                      width={"70%"}
                      my="1rem"
                      // justify={"center"}
                      // align="center"
                      marginInline={"auto"}
                      ref={componentRef}
                      // height="380px"
                    >
                      <Center>Wakhraa Sawaad</Center>
                      <Flex
                        // border={"1px"}
                        justify="space-between"
                        my={"1rem"}
                      >
                        <Box ml={"1rem"}>Invoice # 1</Box>
                        <Box mr={"1rem"}>Date : 16-Nov-2022</Box>
                      </Flex>
                      <Box>
                        <TableContainer>
                          <Table variant="simple" size="sm">
                            <TableCaption>Thanks For Order</TableCaption>
                            <Thead>
                              <Tr>
                                <Th>Item</Th>
                                <Th>price</Th>
                                <Th>QTY</Th>
                                <Th>Total</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td>Chicken Tikka Pizza</Td>
                                <Td>100</Td>
                                <Td>2</Td>
                                <Td>200</Td>
                              </Tr>

                              <Tr>
                                <Td>Sajji</Td>
                                <Td>50</Td>
                                <Td>Half</Td>
                                <Td>250</Td>
                              </Tr>
                            </Tbody>
                            <Tfoot>
                              <Tr>
                                <Th></Th>
                                <Th></Th>
                                <Th>Total :</Th>
                                <Th>Rs 2040</Th>
                              </Tr>
                            </Tfoot>
                          </Table>
                        </TableContainer>
                      </Box>
                    </Flex>
                    <Center
                      fontWeight={"semibold"}
                      bg={"red.200"}
                      width="60%"
                      marginInline={"auto"}
                      borderRadius="8px"
                    >
                      For Resturant
                    </Center>

                    <Flex
                      border={"1px"}
                      direction="column"
                      width={"70%"}
                      my="1rem"
                      borderColor="gray"
                      // ref={componentRef}
                    >
                      <Center>Wakhraa Sawaad</Center>
                      <Flex
                        // border={"1px"}
                        justify="space-between"
                        my={"1rem"}
                      >
                        <Box ml={"1rem"}>Invoice # 1</Box>
                        <Box mr={"1rem"}>Date : 16-Nov-2022</Box>
                      </Flex>
                      <Box>
                        <TableContainer>
                          <Table variant="simple" size="sm">
                            <TableCaption>Order List</TableCaption>
                            <Thead>
                              <Tr>
                                <Th>Item</Th>
                                <Th></Th>
                                <Th></Th>
                                <Th>QTY</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td>Chicken Tikka Pizza</Td>
                                <Td></Td>
                                <Td></Td>
                                <Td>2</Td>
                              </Tr>

                              <Tr>
                                <Td>Chicken vegita</Td>
                                <Td></Td>
                                <Td></Td>
                                <Td>250</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </Flex>
                    <Button onClick={handlePrint} colorScheme="blue">
                      {" "}
                      Print{" "}
                    </Button>
                  </Flex>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default cart;
