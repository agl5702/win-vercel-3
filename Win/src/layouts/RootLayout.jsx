import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'
import { Grid, GridItem,Box } from '@chakra-ui/react'
// import Image from '../assets/fondo2.jpg' 
import Sidebar from '../components/Sidebar'


export default function RootLayout() {
  return (
    <Grid templateColumns='repeat(6, 1fr)' bg='gray.50'  px='0px' m='0px' maxWidth='100vw'>
      <GridItem as='aside' colSpan={{base: 6, lg:2, xl:1}} bg='green.200' minHeight={{lg:'100vh'}}  borderRight={{lg:'8px solid', base: 'none'}} borderRightColor={{base: 'none', lg: 'green.100'}} borderBottom={{base:'none', lg: 'none'}} borderBottomColor={{base: 'none', lg:'none'}}>
        <Box display={{base:'none',lg:'flex'}}>
        <Sidebar/>
        </Box>
      </GridItem>
      <GridItem as='main' colSpan={{base: 6, lg:4, xl:5}} px='0px' m='0px'>
        <Navbar/>
        <Outlet/>
      </GridItem>
    </Grid>
  )
}
