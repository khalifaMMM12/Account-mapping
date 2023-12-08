// import Container from  'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavigationBar(){
    return(
        <Navbar style={{backgroundColor:"blue"}}>
            <Navbar.Brand style={{color:"white", paddingLeft:"20px"}}>
                <h3>Premium Pension</h3>
            </Navbar.Brand>
            <Navbar.Collapse className='justify-content-end mx-5 '> 
                <Button className='btn-primary'><i className="bi bi-box-arrow-in-left"></i>Logout</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;