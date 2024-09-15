import { Container, Nav, Navbar, NavDropdown, Badge, Form, DropdownButton, Dropdown, Button, InputGroup} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand href="/">BuySome</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <InputGroup>
            <DropdownButton id="dropdown-basic-button" title="All">
            <Dropdown.Item>Electronics</Dropdown.Item>
            <Dropdown.Item>Clothes</Dropdown.Item>
            <Dropdown.Item>Books</Dropdown.Item>
            </DropdownButton>
            <Form.Control type="text" placeholder="Search" />
            <Button variant="warning">
              <i className="bi bi-search"></i>
            </Button>
            </InputGroup>
            </Nav>
            <Nav>
                <LinkContainer to="/admin/orders">
                    <Nav.Link>Admin</Nav.Link>
                </LinkContainer>
    
            <NavDropdown title="Roma Shirodkar" id="collapsible-nav-dropdown">
              <NavDropdown.Item eventKey="/user/myorders" as={Link} to="/user/myorders">
              My Orders
              </NavDropdown.Item>
              

              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
              My Profile
              </NavDropdown.Item>

              <NavDropdown.Item>
              Logout
              </NavDropdown.Item>
            
            </NavDropdown>

            <LinkContainer to="/cart">
                <Nav.Link>    
                       
                        <Badge pill bg="danger">
                            1
                        </Badge>
                        <i className="bi bi-cart"></i>
                        <span className="ms-1">Cart</span>
                </Nav.Link>
            </LinkContainer>
 

            <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default HeaderComponent;