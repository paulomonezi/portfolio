import ContactForm from '../components/contact-form'
import Layout from '../components/layouts/article'
import {Container, Box} from '@chakra-ui/react'

const Contact = () => (
  <Layout title="contact">
    <Container>
      <Box align="center" opacity={0.4} py={20} fontSize="sm">
        <ContactForm/>
      </Box>
    </Container>
  </Layout>
)

export default Contact
