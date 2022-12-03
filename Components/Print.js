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
      <Modal onClose={onClose} isOpen={isOpen} size={"sm"}>
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
              width={"90%"}
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
                <Center border={"1px"} className="H-1">
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
                    width="30%"
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
                {item.map((item, i) => {
                  return (
                    <Flex
                      key={i}
                      // border={"1px"}
                      // width="420px"
                      width="100%"
                      justify={"space-around"}
                    >
                      <Box width="30%">
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
                  );
                })}

                <Flex
                  // border={"1px"}
                  // width="420px"
                  width="100%"
                  justify={"space-around"}
                >
                  <Box width="30%">
                    <Text></Text>
                  </Box>
                  <Box width={"5%"}></Box>
                  <Box width={"15%"} fontWeight="semibold" className="H-2">
                    Total Price :
                  </Box>
                  <Box width={"20%"} className="H-4">
                    {totalprice}
                  </Box>
                </Flex>
                <Flex
                  // border={"1px"}
                  // width="420px"
                  width="100%"
                  justify={"space-around"}
                >
                  <Box width="30%">
                    <Text></Text>
                  </Box>
                  <Box width={"5%"}></Box>
                  <Box width={"15%"} fontWeight="semibold" className="H-2">
                    Discount :
                  </Box>
                  <Box width={"20%"} className="H-4">
                    {discount}
                  </Box>
                </Flex>
                <Flex
                  // border={"1px"}
                  // width="420px"
                  width="100%"
                  justify={"space-around"}
                >
                  <Box width="45%">
                    <Text></Text>
                  </Box>
                  {/* <Box width={"1%"}></Box> */}
                  <Box
                    // border={"1px"}
                    width={"35%"}
                    fontWeight="semibold"
                    className="H-2"
                  >
                    Price After Discount :
                  </Box>
                  <Box width={"25%"} className="H-4">
                    {priceAfterdiscount}
                  </Box>
                </Flex>
                <Center border={"1px"}>
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
                <Center border={"1px"} className="H-1">
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
                    width="70%"
                    className="H-3"
                  >
                    Items
                  </Box>

                  <Box
                    // border={"1px"}
                    fontWeight="semibold"
                    width={"20%"}
                    className="H-3"
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
                      justify={"space-around"}
                    >
                      <Box width="70%">
                        <Text className="H-4">{item.name}</Text>
                      </Box>

                      <Box width={"20%"} className="H-4">
                        {item.quantity}
                      </Box>
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
