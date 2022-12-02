import Navbar from '../Components/Navbar'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {CartState} from "../context/cart"
function MyApp({ Component, pageProps }) {
  return <>
  <ChakraProvider>
    <CartState>
  <Navbar/>
  <Component {...pageProps} />
  </CartState>
  </ChakraProvider>
  </>
}

export default MyApp
