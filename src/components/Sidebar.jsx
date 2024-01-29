import {EditIcon,ViewIcon} from '@chakra-ui/icons'
import { FaTrophy,FaUser, FaPeopleArrows, FaTable, FaGamepad} from 'react-icons/fa';
import { List, ListIcon, ListItem} from '@chakra-ui/react'
import { FaPersonRunning } from "react-icons/fa6";
import { GiPerspectiveDiceSixFacesTwo } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom'


export default function Sidebar() {
  return (
    <List color='white' fontSize='1.2em' spacing={0} p={10} 
    display='Flex' flexWrap='wrap' flexDirection={{base:'row', lg:'column'}}
    position={{lg:'fixed'}}
    fontWeight='700'
    >
        <ListItem mx={{base:'10px', lg:'0'}} my={{base:'0', lg:'20px'}}  _hover={{color: 'black'}} >
            <NavLink to='/'>
                <ListIcon as={FaTrophy} color='yellow.300'  my='1px'/>
                Torneos
            </NavLink>
        </ListItem>
        <ListItem mx={{base:'10px', lg:'0'}} my={{base:'0', lg:'20px'}}  _hover={{color: 'black'}}>
            <NavLink to='/equipos'>
                <ListIcon  as={RiTeamFill} color='orange.500'  my='1px' />
                Equipos
            </NavLink>
        </ListItem>
        <ListItem mx={{base:'10px', lg:'0'}} my={{base:'0', lg:'20px'}}  _hover={{color: 'black'}}>
            <NavLink to='/profile'>
                <ListIcon  as={FaPersonRunning} color='blue.500'  my='1px' />
                Jugadores
            </NavLink>
        </ListItem>
        <ListItem mx={{base:'10px', lg:'0'}} my={{base:'0', lg:'20px'}}  _hover={{color: 'black'}}>
            <NavLink to='/horario'>
                <ListIcon  as={FaTable} color='purple.600'  my='1px' />
                Horarios
            </NavLink>
        </ListItem>
        <ListItem mx={{base:'10px', lg:'0'}} my={{base:'0', lg:'20px'}}  _hover={{color: 'black'}}>
            <NavLink to='/partidos'>
                <ListIcon  as={FaGamepad} color='green'  my='1px' />
                Partidos
            </NavLink>
        </ListItem>
        <ListItem mx={{base:'10px', lg:'0'}} my={{base:'0', lg:'20px'}}  _hover={{color: 'black'}}>
            <NavLink to='/partidos'>
                <ListIcon  as={GiPerspectiveDiceSixFacesTwo} color='black'  my='1px' />
                Sortear
            </NavLink>
        </ListItem>
    </List>
  )
}
