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
import { CartContext } from "../context/cart";
import { useReactToPrint } from "react-to-print";
import React, { useRef, useContext, useState, useEffect } from "react";
import {
  Heading,
  Center,
  Input,
  Box,
  Flex,
  Button,
  Divider,
  Text,
  HStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import nextId from "react-id-generator";

const Print = ({ children, item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const {
    cart,
    setcart,
    totalprice,
    priceAfterdiscount,
    discount,
    setdiscount,
    cartlength,
    settotalprice,
    setpriceAfterdiscount,
  } = useContext(CartContext);

  const [apiInProgress, setapiInProgress] = useState(false);
  const [orderStatus, setorderStatus] = useState("");
  const [order_id, setorder_id] = useState();
  const [date, setdate] = useState();
  const toast = useToast();

  const PlaceOrder = async () => {
    if (cartlength < 1) return;
    setapiInProgress(true);
    try {
      const id = parseInt(nextId().slice(2));
      setorder_id(id);
      console.log(typeof id);
      let d = new Date();
      d = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
      setdate(d);

      const res = await axios.post("http://localhost:3000/api/saveorder", {
        cart: item,
        order_id: id,
        discount,
        priceAfterdiscount,
        totalPrice: totalprice,
        orderDate: d,
      });

      if (res.data.success) {
        setapiInProgress(false);
        toast({
          title: "Order Saved",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setorderStatus("Order Placed Successfully");
        onOpen();
      } else {
        // console.log( res.data.payload);
        setapiInProgress(false);
        setorderStatus("Order not Saved");
        onOpen();
        toast({
          title: "Order not Saved",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      setorderStatus("Order not Saved");
      onOpen();
      setapiInProgress(false);
      toast({
        title: "Order not Saved",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <>
      <Button
        onClick={PlaceOrder}
        variant={"solid"}
        colorScheme="green"
        isLoading={apiInProgress}
        loadingText="Loading"
        spinnerPlacement="end"
      >
        Place Order
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} size={"sm"} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center
              bg={"blue.400"}
              width="50%"
              marginInline={"auto"}
              borderRadius="8px"
              textAlign={"center"}
              color="white"
              py="8px"
            >
              {orderStatus}
            </Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            w={"100%"}
            display="flex"
            // justifyContent={"center"}
            flexDirection={"column"}
            justifyContent="center"
            // marginInline={"auto"}
            alignContent="auto"
            alignItems="center"
            // border="1px"
          >
            <Flex
              // border={"1px"}
              // flexDir="column"
              width={"100%"}
              justify="space-between "
              align="center"
              direction={"column"}
              marginInline="auto"
              ref={componentRef}
            >
              <Flex
                // border={"1px"}
                // borderColor="gray.500"
                direction="column"
                width={"100%"}
                mt="0.3rem"
                mb={"2rem"}
                // justify={"center"}
                // align="center"
                marginInline={"auto"}
                // height="380px"
              >
                <Center  className="H-1">
                  Wakhraa Sawaad
                </Center>
                <Flex
                  // border={"1px"}
                  justify="space-between"
                  my={"1rem"}
                  w="100%"
                >
                  <Box className="H-2" ml={"1rem"}>
                    {`Order # ${order_id}`}
                  </Box>
                  <Box className="H-2" mr={"1rem"}>
                    Date: {date}
                  </Box>
                </Flex>
                <Flex
                  // border={"1px"}
                  // width="420px"
                  width="100%"
                  justify={"space-around"}
                >
                  <Box
                    // border={"1px"}
                    fontWeight="semibold"
                    width="40%"
                    className="H-3"
                  >
                    Items
                  </Box>
                  <Box
                    // border={"1px"}
                    fontWeight="semibold"
                    width={"10%"}
                    className="H-3"
                  >
                    Price
                  </Box>
                  <Box
                    // border={"1px"}
                    fontWeight="semibold"
                    width={"10%"}
                    className="H-3"
                  >
                    Qt
                  </Box>
                  <Box
                    // border={"1px"}
                    fontWeight="semibold"
                    width={"20%"}
                    className="H-3"
                  >
                    Total Price
                  </Box>
                </Flex>
                <Flex
                  // key={i}
                  // border={"1px"}
                  // width="420px"
                  flexDirection="column"
                  width="100%"
                  mt={"0.7rem"}
                  // justify={"space-around"}
                >
                  {item.map((item, i) => {
                    return (
                      <Box>
                        <Flex justify={"space-between"}>
                          <Box width="40%">
                            <Text className="H-4">{item.name}</Text>
                          </Box>
                          <Box width={"10%"} className="H-4">
                            {item.price}
                          </Box>
                          <Box width={"10%"} className="H-4">
                            {item.quantity}
                          </Box>
                          <Box width={"20%"} className="H-4">
                            {item.totalPrice}
                          </Box>
                        </Flex>
                        <Box
                          my={"0.2rem"}
                          width={"100%"}
                          borderBottom="1px dotted"
                        ></Box>
                      </Box>
                    );
                  })}
                </Flex>
                <Divider
                  my={"0.4rem"}
                  width="90%"
                  marginInline={"auto"}
                ></Divider>
                <Flex
                  // border={"1px"}
                  // width="420px"
                  width="100%"
                  justify={"end"}
                >
                  <Box
                    // width={"20%"}
                    // border="1px"
                    fontWeight="semibold"
                    className="H-2"
                    textAlign={"end"}
                  >
                    Total Price :
                  </Box>
                  <Box mx={"2rem"} width={"20%"} className="H-4">
                    {totalprice}
                  </Box>
                </Flex>
                <Flex
                  // border={"1px"}
                  // width="420px"
                  width="100%"
                  justify={"end"}
                >
                  <Box
                    // width={"20%"}
                    textAlign={"end"}
                    fontWeight="semibold"
                    className="H-2"
                  >
                    Discount %
                  </Box>
                  <Box mx={"2rem"} width={"20%"} className="H-4">
                    {discount}
                  </Box>
                </Flex>
                <Flex
                  // border={"1px"}
                  // width="420px"
                  width="100%"
                  justify={"end"}
                >
                  <Box
                    // border={"1px"}
                    // width={"30%"}
                    // textAlign={"end"}
                    fontWeight="semibold"
                    className="H-2"
                    // ml={"4rem"}
                    // pl={"0.5rem"}
                  >
                    Price After Discount :
                  </Box>
                  <Box mx={"2rem"} width={"20%"} className="H-4">
                    {priceAfterdiscount}
                  </Box>
                </Flex>
                <Center mt="10px" border={"1px dotted"} >
                  <Text>Thanks For order</Text>
                </Center>
              </Flex>
              <Divider my={"2rem"}></Divider>
              <Flex
                my="2rem"
                // border={"1px"}
                // borderColor="gray.500"
                direction="column"
                width={"100%"}
                // justify={"center"}
                // align="center"
                marginInline={"auto"}
                // height="380px"
              >
                <Center  className="H-1">
                  Wakhraa Sawaad
                </Center>
                <Flex
                  // border={"1px"}
                  justify="space-between"
                  my={"1rem"}
                  w="100%"
                >
                  <Box className="H-2" ml={"1rem"}>
                    {`Order # ${order_id}`}
                  </Box>
                  <Box className="H-2" mr={"1rem"}>
                    Date: {date}
                  </Box>
                </Flex>
                <Flex
                  // border={"1px"}
                  mb="5px"
                  // width="420px"
                  width="100%"
                  justify={"space-around"}
                >
                  <Box
                    // border={"1px"}
                    fontWeight="semibold"
                    width="70%"
                    className="H-3"
                    fontSize={"0.8rem"}
                  >
                    Items
                  </Box>

                  <Box
                    // border={"1px"}
                    fontWeight="semibold"
                    width={"30%"}
                    className="H-3"
                    fontSize={"0.8rem"}
                  >
                    QT.
                  </Box>
                </Flex>
                {item.map((item, i) => {
                  return (
                    <Flex
                      key={i}
                      // border={"1px"}
                      // width="420px"
                      
                      width="100%"
                      flexDirection={"column"}
                      justify={"space-around"}
                    >
                      <Flex>
                        <Box width="70%" >
                          <Text fontSize={"0.8rem"} className="H-4">{item.name}</Text>
                        </Box>

                        <Box width={"28%"} className="H-4" fontSize={"0.9rem"}>
                          {item.quantity}
                        </Box>
                      </Flex>
                      <Box
                        my={"0.2rem"}
                        width={"100%"}
                        borderBottom="1px dotted"
                      ></Box>
                    </Flex>
                  );
                })}

                <Center border={"1px"}>
                  <Text>Order List</Text>
                </Center>
                {/* <Center >
                  Invoice
                </Center> */}
              </Flex>
            </Flex>
            <Button onClick={handlePrint} colorScheme="blue">
              Print
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Print;
