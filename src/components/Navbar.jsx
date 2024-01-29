import {Box, Flex, Heading} from '@chakra-ui/react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

export default function Navbar() {

  const {isAuthenticated}=useAuth0();


  return (
    <Flex as='nav' p='10px' justify='space-between' wrap='wrap' gap='2' margin='auto' alignItems='center' boxShadow='2xl' border='none'> 
        <Heading as='h1' textAlign='center' m='auto' fontSize='50px'>Win</Heading>

        
        <Box margin='auto' w='150px' h='50px' flexGrow='2' bg='red.200'></Box>
        <Box margin='auto' w='150px' h='50px' bg='yellow.200'></Box>
        <Box margin='auto' w='150px' h='50px' bg='blue.400'></Box>
        <Box margin='auto' w='150px' h='50px' bg='green.200'></Box>
        {isAuthenticated ?<LogoutButton/>
        :<LoginButton/>}
        
        
      
    </Flex>
  )
}
