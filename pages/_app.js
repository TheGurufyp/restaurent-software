import Navbar from '../Components/Navbar'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return <>
  <ChakraProvider>
  <Navbar/>
  <Component {...pageProps} />
  </ChakraProvider>
  </>
}

export default MyApp
