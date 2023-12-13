import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// const expand = ['xxl'];

function NavigationBar() {
  return (
    <>
      {/* {expand.map((expandValue) => ( */}
        <Navbar style={{ backgroundColor: "blue" }}>
          {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expandValue}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expandValue}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expandValue}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expandValue}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expandValue}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas> */}

          <Navbar.Brand style={{ color: "white", paddingLeft: "20px" }}>
            <h3>Premium Pension</h3>
          </Navbar.Brand>
          <Navbar.Collapse className='justify-content-end mx-5 '>
            <Button className='btn-primary'><i className="bi bi-box-arrow-in-left"></i>Logout</Button>
          </Navbar.Collapse>
        </Navbar>
      {/* ))} */}
    </>
  );
}

export default NavigationBar;
