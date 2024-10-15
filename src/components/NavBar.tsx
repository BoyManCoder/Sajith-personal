import { Navbar, Nav, Container, Button } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">FIRST NAME</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                    </Nav>
                    <Button variant="outline-primary">Contact</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
