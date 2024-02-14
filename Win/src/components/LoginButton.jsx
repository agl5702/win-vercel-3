import {Button} from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'


export default function LoginButton() {


  const {loginWithRedirect}= useAuth0();


  return (
    <Button colorScheme='green' onClick={loginWithRedirect}>Log in</Button>
  )
}
