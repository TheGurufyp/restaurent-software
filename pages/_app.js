import Navbar from '../Components/Navbar'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {CartState} from "../context/cart"
import {MenuitemsState} from "../context/Menuitems"
function MyApp({ Component, pageProps }) {
  return <>
  <ChakraProvider>
    <MenuitemsState>
    <CartState>
  <Navbar/>
  <Component {...pageProps} />
  </CartState>
  </MenuitemsState>
  </ChakraProvider>
  </>
}

export default MyApp
