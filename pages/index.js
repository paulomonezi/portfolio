import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm a front-end developer
      </Box>
      <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
            Paulo Monezi
        </Heading>
        <p>Infos legais aqui</p>
      </Box>
      </Box>
    </Container>
  )
}

export default Page
