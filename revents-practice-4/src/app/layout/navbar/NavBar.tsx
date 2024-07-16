import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

type Props = {
    setFormOpen: (value: boolean) => void
}

export default function NavBar({setFormOpen}: Props) {
  return (
    <Menu inverted fixed="top" >
        <Container>
            <MenuItem Header>
                <img src="/logo.png"/>
                Revents
            </MenuItem>
            <MenuItem content="Events"/>
            <MenuItem>
                <Button onClick={()=> setFormOpen(true)} color="green" content="Create Event"/>
            </MenuItem>
            <MenuItem position="right">
                <Button basic floated="right" inverted content="Login"/>
                <Button basic floated="right" inverted content="register" style={{marginLeft: '0.5rem'}} />
            </MenuItem>
        </Container>
    </Menu>
  )
}
