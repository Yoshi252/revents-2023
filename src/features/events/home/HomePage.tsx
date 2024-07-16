import { Link } from "react-router-dom";
import { Container, Segment, Header, Image, Button, Icon } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
       <Header as={'h1'} inverted>
        <Image size='massive' src='/logo.png' style={{marginButton: 12}}/>
       </Header>
       <Button size='huge' inverted as={Link} to='/Events'>
        Get Started
        <Icon name='caret right' inverted/>
       </Button>
      </Container>
    </Segment>
  )
}