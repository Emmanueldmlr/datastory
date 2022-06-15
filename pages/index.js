import Head from 'next/head'
import {Container, Heading, Button} from "@chakra-ui/react"
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <Container mt="2rem">
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Heading>
          Example home page
        </Heading>
        <Button mt={6} onClick={()=>router.push('/data-explorer')} colorScheme='teal' variant='outline'>
            Go to Data Explorer 
        </Button>
    </Container>
  )
}
