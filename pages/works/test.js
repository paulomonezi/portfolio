import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Test">
    <Container>
      <Title>
        hueheuuhe title <Badge>optional badge/year</Badge>
      </Title>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        fringilla, lectus nec cursus consequat, ligula elit pretium justo, nec
        porta nulla mi egestas est. Curabitur massa sem, eleifend sed lacinia
        luctus, interdum ac turpis. Nullam consequat auctor turpis eu hendrerit.
        Vestibulum at nulla lectus. Etiam eget interdum metus, eu molestie
        ipsum. Etiam tempus hendrerit lectus, id sagittis augue. Nam ut neque
        ullamcorper, pulvinar ligula ut, rhoncus nisl. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Nullam justo neque, pretium eu ultrices vel, congue eget odio. Aliquam
        lorem orci, consequat ut tincidunt eu, mattis nec nisl.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://google.com/">
            https://google.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Chakra UI, Capivara Voadora</span>
        </ListItem>
        <ListItem>
          <Meta>Code</Meta>
          <Link href="github">
            www.github.bleu <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="alt img" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="alt img" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
