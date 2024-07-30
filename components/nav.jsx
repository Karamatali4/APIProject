import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
function Navs() {
  return (
    <>
    
      <Navbar collapseOnSelect data-bs-theme="dark" expand="lg" className="bg-body-tertiary" style={{width:"100%"}}>
      <Container>
      <Navbar.Brand href="/" style={{fontWeight:"bolder",fontSize:"30px"}}>Fetching <span className='text-primary'>Data</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {/* <Nav.Link className='fw-bolder fs-5' href="/">Home</Nav.Link> */}
          <NavLink
  to="/"
  className="fw-bolder fs-5 me-3"
>
  Home
</NavLink>
          

            {/* <Nav.Link className='fw-bolder fs-5' href="/country">Countries</Nav.Link> */}
            <NavLink
  to="/country"
  className="fw-bolder fs-5"
>
  Country
</NavLink>
            
          </Nav>
          <Nav>
            {/* <Nav.Link href="/dish" className='fw-bolder fs-5'>Dishes Picture</Nav.Link> */}
            <NavLink
  to="/dish"
  className="fw-bolder fs-5 pe-3"
>
  Dishes picture
</NavLink>;
            {/* <Nav.Link href="/animal" className='fw-bolder fs-5'>Animal Picture</Nav.Link> */}

            <NavLink
  to="/animal"
  className="fw-bolder fs-5 me-3"
>
  Animal
</NavLink>;


            {/* <Nav.Link eventKey={2} href="/nature" className='fw-bolder fs-5'>
              Nature Pictures
            </Nav.Link> */}

<NavLink
  to="/nature"
  className="fw-bolder fs-5 me-3"
  eventKey={2}
>
  nature picture
</NavLink>;
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navs