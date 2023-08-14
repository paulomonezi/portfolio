import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="github-searcher">
    <Container>
      <Title>
        Github Searcher <Badge>Github API</Badge>
      </Title>
      <P>
        A project using the Github API to render user info and lastest events
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link
            href="https://paulomonezi.github.io/github-searcher/"
            target="_blank"
          >
            https://paulomonezi.github.io/github-searcher/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Styled Components</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link
            href="https://github.com/paulomonezi/github-searcher"
            target="_blank"
          >
            /paulomonezi/github-searcher <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projects/github-searcher-1.png"
        alt="github app page"
      />
    </Container>
  </Layout>
)

export default Project
