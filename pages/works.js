import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailTeste from '../public/images/projects/teste.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="test" title="TESTE1" thumbnail={thumbnailTeste}>
              Testingo 1
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="test2" title="teste2" thumbnail={thumbnailTeste}>
              Digdjoy popoy
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="test51"
              title="AUHGUAHE"
              thumbnail={thumbnailTeste}
            >
              tututupá
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="test51"
              title="AUHGUAHE"
              thumbnail={thumbnailTeste}
            >
              tututupá
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem id="test1" title="TESTE1" thumbnail={thumbnailTeste}>
              Testingo 1
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem id="test2" title="teste2" thumbnail={thumbnailTeste}>
              Digdjoy popoy
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="test51"
              title="AUHGUAHE"
              thumbnail={thumbnailTeste}
            >
              tututupá
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="test51"
              title="AUHGUAHE"
              thumbnail={thumbnailTeste}
            >
              tututupá
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={6} />
      </Container>
    </Layout>
  )
}

export default Works
