import { useState, useContext, useEffect } from "react";
import {
   
    Box,
    Flex,
    Button,
    Divider,
    Text,
    HStack,
} from "@chakra-ui/react";

import {
   useToast
} from "@chakra-ui/react";
import { CartContext } from "../context/cart";
import axios from "axios";
function Orders() {
    const toast=useToast();
    const [orders, setorders] = useState([]);

    const deleteOrder=async(id)=>{
        try {
            const res = await axios.post("http://localhost:3000/api/deleteorder",{id});
            if (res.data.success) {
                toast({
                    title: "Order deleted",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position:"top"
                });
              

            } else {
                // console.log( res.data.payload);
                toast({
                    title: "Something went wronge",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            // console.log(error);
            toast({
                title: "Network error",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }

    }

    useEffect(() => {

        const fetchOrders = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/getorders");
                if (res.data.success) {
                    console.log( res.data.payload);
                    setorders(res.data.payload);

                } else {
                    // console.log( res.data.payload);
                    toast({
                        title: "Something went wronge",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                }
            } catch (error) {
                // console.log(error);
                toast({
                    title: "Network error",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        };

        fetchOrders();

    }, []);





    return (
        <Box w="85%" mx="auto">
            <Flex
                w={"100%"}
                // border={"1px"}
                justify="center"
                align={"center"}
            >
                <Box
                    // border={"1px"}
                    p="10px"
                    fontWeight={"semibold"}
                    fontSize="2rem"
                    
                >
                   Orders
                </Box>
                
            </Flex>
            

           {orders?.map((o,i)=>{
            return (
<Box key={i} border="1px" borderColor={"gray.400"} mt="30px" p="10px" bg="blue.50">
    <HStack justify={"space-between"}>
<Box>Order # {o.order_id}</Box>
    <Box>{o.orderDate}</Box>
    </HStack>
            <Flex 
                //  border={"1px"}
                
                justify="space-between"
                align={"center"}
              
            >
                <Box w={"20%"} fontWeight="semibold"
                >
                    Food Detail
                </Box>
                <Box textAlign="center"
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
            <Flex 
                //    border={"1px"}
                justify="space-between"
                align={"center"}
                my="1rem"
                direction={"column"}
                
            >
              
             { o.order.map((item,i)=>{
                return  <Flex w="100%" justify="space-between" key={i}>
                     <Box  w={"20%"}>{item?.name}</Box>
                <Box w={"20%"}   textAlign={"center"}>
                   
                    {item.quantity}
                </Box>
                <Box w={"20%"}>{item?.price} </Box>
                <Box w={"20%"}>{item?.totalPrice}</Box>
                <Box w={"5%"}></Box>
                </Flex>
             })}

            </Flex>
            <Flex
            // justify={"space-between"}
            // width="40%"
            justify={"right"}
            // marginInline={"auto"}
            direction="column"
           >
            <Flex>
              <Box fontWeight={"semibold"}>Total Price : </Box>
              <Box mx={"1rem"}>{o.totalPrice}</Box>
            </Flex>
            <Divider my={"0.2rem"} width="40%"></Divider>
            <Flex my={"0.7rem"} justify={"left"} align="center">
              <Text colorScheme={"blue"} fontWeight="semibold">
                Discount %{" "}{o.discount}
              </Text>
             
            </Flex>
            <Divider my={"0.2rem"} width="55%"></Divider>
            <Flex>
              <Box fontWeight={"semibold"}>Total Price After Discount : </Box>
              <Box mx={"1rem"}>{o.priceAfterdiscount}</Box>
              <Button ml="auto" size={"sm"} colorScheme="red" onClick={()=>deleteOrder(o._id)}>Delete</Button>
            </Flex>
          </Flex>
            </Box>
            )
           }) }
            




        </Box>
    )
}

export default Orders