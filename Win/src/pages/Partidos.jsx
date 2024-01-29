import React from 'react'
import { SimpleGrid, Box } from "@chakra-ui/react";
import { Partidoslist } from '../components/partidos/Partidoslist';
import {PartidosForm} from "./partidos/PartidosForm";

export default function Partidos() {
  return (
    <SimpleGrid columns={2} spacing={10} minChildWidth='250px'>      
    <Box>
        <PartidosForm/>
        <Partidoslist/>
    </Box>

  </SimpleGrid>
  )
}
