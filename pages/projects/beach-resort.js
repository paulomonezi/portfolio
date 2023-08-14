import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="beach-resort">
    <Container>
      <Title>
        Beach Resort Hotel <Badge>room renting app</Badge>
      </Title>
      <P>
        The user can browse the page and filter the rooms based on his
        preferences, such as price range, room size, room type, guests number,
        breakfast included, and more. This is a room-renting app for an opulent
        resort. Pets are also accepted
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link
            href="https://beach-resort-react-lilac.vercel.app/"
            target="_blank"
          >
            https://beach-resort-react-lilac.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Styled Components, Context API, React-Router-Dom, Contentful
          </span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link
            href="https://github.com/paulomonezi/beach-resort-react"
            target="_blank"
          >
            /paulomonezi/beach-resort-react <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/beach-resort-1.png"
        alt="beach resort app page"
      />
      <WorkImage
        src="/images/projects/beach-resort-2.png"
        alt="beach resort app page"
      />
      <WorkImage
        src="/images/projects/beach-resort-3.png"
        alt="beach resort app page"
      />
    </Container>
  </Layout>
)

export default Project
