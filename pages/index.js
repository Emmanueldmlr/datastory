import Head from 'next/head'
import {Container, Heading} from "@chakra-ui/react"

export default function Home() {
  return (
    <Container mt="2rem">
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Heading>
          Example home page
        </Heading>
    </Container>
  )
}
