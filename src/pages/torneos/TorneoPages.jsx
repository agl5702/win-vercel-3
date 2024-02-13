import { Box, SimpleGrid } from "@chakra-ui/react"
import { TorneoList } from "../../components/Torneos/Torneolist.jsx"

export function TorneoPage(){

    return <SimpleGrid column={4}>
        <Box>
            <TorneoList/>
        </Box>
    </SimpleGrid>
}