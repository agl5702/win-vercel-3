import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

import {

  Button,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Heading, 
  Flex,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isAuthenticated}=useAuth0();
  const navigate= useNavigate();

  return (
    <Flex as='nav' p='10px' justify='space-between' wrap='wrap' gap='2' margin='auto' alignItems='center' boxShadow='2xl' border='none'> 
        <Heading as='h1' textAlign='left' fontSize='50px'>Win</Heading>

      

        <Box display='flex' alignItems='center' alignContent='center'>
        {isAuthenticated ?<LogoutButton/>
        :<LoginButton/>}
       
        <Button display={{lg:'none', base:'flex'}} m='15px' leftIcon={<FaBars />} color='black' onClick={onOpen} alignItems='center'>
      </Button>
        <Drawer isOpen={isOpen} placement='right' onClose={() => { onClose(); navigate('/'); }}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bg='.200' />
          <DrawerHeader borderBottomWidth='1px' bg='green.100'>
            Menú
          </DrawerHeader>

          <DrawerBody bg='green.200' >
            <Box >
            <Sidebar onClose={onClose}/>
            </Box>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px' bg='green.100' colorScheme='teal'>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </Box>
        
       
        
        
      
    </Flex>
  )
}
