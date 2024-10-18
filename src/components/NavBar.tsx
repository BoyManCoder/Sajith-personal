import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useState } from "react";

function NavBar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar bg="light" expand="md" expanded={expanded}>
            <Container>
                <Navbar.Brand href="#">FIRST NAME</Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="navbar-nav" 
                    onClick={() => setExpanded(prev => !prev)}
                />
                <Navbar.Collapse 
                    id="navbar-nav" 
                    className={expanded ? 'collapse-padding' : ''}
                >
                    <Nav className="me-auto">
                        <div className="navCol">
                            <Nav.Link href="#home">Education</Nav.Link>
                            <div className="navSocial d-md-none"> {/* Show only on small screens */}
                                {expanded && <Button>Github</Button>}
                            </div>
                        </div>
                        <div className="navCol">
                            <Nav.Link href="#home">Projects</Nav.Link>
                            <div className="navSocial d-md-none"> {/* Show only on small screens */}
                                {expanded && <Button>Email</Button>}
                            </div>
                        </div>
                        <div className="navCol">
                            <Nav.Link href="#home">Gallery</Nav.Link>
                            <div className="navSocial d-md-none"> {/* Show only on small screens */}
                                {expanded && <Button>Instagram</Button>}
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
