import React from 'react'
import{Navbar,Nav,Container} from 'react-bootstrap'

function NavBar() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/">MERN</Navbar.Brand>
            <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            </Nav>
            </Container>
        </Navbar>   
    </div>
  )
}

export default NavBar