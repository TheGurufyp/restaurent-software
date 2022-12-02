import { React, useState,useEffect,useContext } from "react";
import { Heading, Center, Box, Flex, Button, Divider,CloseButton  } from "@chakra-ui/react";
import Actions from "./Actions";
import { CartContext } from "../context/cart"

const Product = ({item,index}) => {
 
  const [newQuantity, setnewQuantity] = useState(0);
  const {cart,setcart}=useContext(CartContext);
  useEffect(() => {
    
    setnewQuantity(item.quantity);
  
  }, []);
  // useEffect(() => {
    
  //   console.log(index)
  
  // }, );

  useEffect(() => {
    
  let tempCart=cart.map((obj,i)=>{

     if(i===index)
     {
      return {...obj,quantity:newQuantity,totalPrice:(obj.price*newQuantity)};
     }

       return obj;
  });

  setcart(tempCart);
  
  }, [newQuantity])
  


  const removefromcart=()=>{
    let tempCart=cart.map((i)=>{
       return i;
    })
    tempCart.splice(index, 1);
    setcart(tempCart);
  }
  
  return (
    <>
      <Flex
        //    border={"1px"}
        justify="space-between"
        align={"center"}
        my="1rem"
      >
        <Box w={"20%"}>{item?.name}</Box>
        <Box w={"15%"} mr={"2rem"}  ml="15px">
          <Actions newQuantity={newQuantity} setnewQuantity={setnewQuantity} />
        </Box>
        <Box w={"20%"}>{item?.price} </Box>
        <Box w={"20%"}>{item?.totalPrice}</Box>
        <Box w={"5%"}>
        <CloseButton size='md' onClick={removefromcart}/>
        </Box>
      </Flex>
    </>
  );
};

export default Product;
