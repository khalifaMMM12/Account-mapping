import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

function NavigationBar() {
  return (
    <>
        <Navbar>

          <Navbar.Brand style={{ paddingLeft: "20px" }}>
            <h3>Premium Pension</h3>
          </Navbar.Brand>
          <Navbar.Collapse className='justify-content-end mx-5 '>
            <Button className='btn-primary'><i className="bi bi-box-arrow-in-left"></i>Logout</Button>
          </Navbar.Collapse>
        </Navbar>
    </>
  );
}

export default NavigationBar;
