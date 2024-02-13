import { SimpleGrid, Box } from "@chakra-ui/react";
import { PartidosList } from '../components/partidos/PartidosList.jsx';
import {PartidosForm} from "./partidos/PartidosForm.jsx";

export default function Partidos() {
  return (
    <SimpleGrid columns={2} spacing={10} minChildWidth='250px'>      
    <Box>
        <PartidosForm/>
        <PartidosList/>
    </Box>

  </SimpleGrid>
  )
}
