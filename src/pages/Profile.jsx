import { JugadoresList } from "../components/jugadores/JugadoresList.jsx";
import { SimpleGrid, Box } from "@chakra-ui/react";
import JugadoresForm from "./jugadores/JugadoresForm.jsx";
import img1 from '../assets/jugador1.png';
import img2 from '../assets/jugador2.png';

import Jugador from "../components/jugadores/jugadores";
const images = [img1, img2];
export default function Profile(){
    return (
      <SimpleGrid columns={2} spacing={10} minChildWidth='250px'>      
        <Box m='auto'>
          <Box boxShadow='2xl' mt='5px'>
          <Jugador images={images}/>
          </Box>
            <JugadoresForm />
            <JugadoresList/>
        </Box>
  
      </SimpleGrid>
    )
}

