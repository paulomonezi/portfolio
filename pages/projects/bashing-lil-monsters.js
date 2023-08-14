import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="bashing-lil-monsters">
    <Container>
      <Title>
        Bashing Li'l Monsters <Badge>web game</Badge>
      </Title>
      <P>
        This is a 2d top-down game pokemon-like (gb/gba) with turn-based fights.
        In the game you control your character on tiny town and your goal here
        is to fight wild monsters, you can find them on the higher grass and
        battle using your powerful li'l monster abilities. (Yes, you're right,
        you hear victory fanfare when you win haha)
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link
            href="https://paulomonezi.github.io/bashing-lil-monsters/"
            target="_blank"
          >
            https://paulomonezi.github.io/bashing-lil-monsters/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Tiled, Sass, GSAPjs, HowlerJS</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link
            href="https://github.com/paulomonezi/bashing-lil-monsters"
            target="_blank"
          >
            /paulomonezi/bashing-lil-monsters <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/bashing-1.gif"
        alt="beach resort app page"
      />
      <WorkImage
        src="/images/projects/bashing-2.gif"
        alt="beach resort app page"
      />
    </Container>
  </Layout>
)

export default Project
