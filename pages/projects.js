import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailTeste from '../public/images/projects/thumbnails/beach-thumb.png'
import ThumbBashingLilMonsters from '../public/images/projects/thumbnails/bashing-thumb.png'
import ThumbFinancialControl from '../public/images/projects/thumbnails/financial-thumb.png'
import ThumbGithubSearcher from '../public/images/projects/thumbnails/github-searcher-thumb.png'
import Layout from '../components/layouts/article'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Box display="flex" alignItems="center" justifyContent="center" h={200}>
          PLACE HOLDER GRANDÃO
        </Box>
      </Container>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="beach-resort"
              title="Beach Resort"
              thumbnail={thumbnailTeste}
            >
              A react-built room rental app
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="bashing-lil-monsters"
              title="Bashing Li'l Monsters"
              thumbnail={ThumbBashingLilMonsters}
            >
              Nostalgic web game
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="react-financial-control"
              title="React Financial Control"
              thumbnail={ThumbFinancialControl}
            >
              Financial web application
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="github-searcher"
              title="Github Seacher"
              thumbnail={ThumbGithubSearcher}
            >
              A searcher app built with GitHub API
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

export default Projects
