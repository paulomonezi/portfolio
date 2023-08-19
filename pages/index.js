import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  List,
  ListItem,
  SimpleGrid,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'
import Footer from '../components/footer'

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="center" h={200}>
          PLACE HOLDER GRANDÃO
        </Box>
      </Container>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I'm a front-end developer
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Paulo Monezi
            </Heading>
            <p>Infos legais aqui</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Image
              w={100}
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              display="inline-block"
              borderRadius="full"
              src="/images/cybercapy.jpeg"
              alt="Profile Image"
            ></Image>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" pb={5}>
            Work
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <NextLink href="/projects/test">test</NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
        </Section>
        <BioSection>
          <BioYear>1992</BioYear>
          blebubuelbuelbulubebluebelub
        </BioSection>
        <BioSection>
          <BioYear>2000</BioYear>
          bljbeljbelb
        </BioSection>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-tite">
            Get in touch
          </Heading>
          <List>
            <ListItem>
              <NextLink href="https://github.com/paulomonezi" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  /paulomonezi
                </Button>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink
                href="https://www.linkedin.com/in/paulo-monezi"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  /paulo-monezi
                </Button>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink
                href="https://api.whatsapp.com/send?phone=5565996697438&text=Hi%2C%20I%20would%20like%20to%20get%20in%20touch!%3A)"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoWhatsapp} />}
                >
                  paulomonezi
                </Button>
              </NextLink>
            </ListItem>
          </List>
        </Section>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Home
