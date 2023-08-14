import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="react-financial-control">
    <Container>
      <Title>
        React Financial Control <Badge>Financial Application</Badge>
      </Title>
      <P>
        a website application that organizes basic financial information for
        individuals, such as income, expenses, and balance.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link
            href="https://paulomonezi.github.io/react-financial-control/"
            target="_blank"
          >
            https://paulomonezi.github.io/react-financial-control/
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
            href="https://github.com/paulomonezi/react-financial-control"
            target="_blank"
          >
            /paulomonezi/react-financial-control <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projects/react-financial-2.gif"
        alt="financial app gif"
      />
      <WorkImage
        src="/images/projects/react-financial-1.png"
        alt="financial app page"
      />
    </Container>
  </Layout>
)

export default Project
