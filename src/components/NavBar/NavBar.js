import {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap'
import './NavBar.css'
import DivLogo from '../DivLogo/DivLogo'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
      <Navbar className="d-flex flex-column mb-3 fullnav" key='lg' expand='lg'>
        <Container fluid className='d-flex justify-content-center'>
        <Link to='/' className='text-decoration-none'><Navbar.Brand as={'div'} className='f-futurism'>TechWearClub AR</Navbar.Brand></Link>
        </Container>
        <Container fluid >
          <Link to='/cart' className='ms-auto d-lg-none text-dark'><DivLogo logoprops='fas fa-shopping-cart fa-2xl me-3' /></Link>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg '/>
          <Navbar.Offcanvas id='offcanvasNavbar-expand-lg' aria-labelledby='offcanvasNavbarLabel-expand-lg' placement="end" >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='f-futurism mx-auto' id='offcanvasNavbarLabel-expand-lg'>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pb-1">
                <NavLink to='/' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none text-dark f-futurismL px-3 underline'}>Home</NavLink>
                <NavLink to='/category/Sale' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none f-futurismL text-dark px-3 underline text-center'}>🔥Sale🔥</NavLink>
                <NavLink to='/category/Buzo' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none f-futurismL text-dark px-3 underline text-center'}>Buzos</NavLink>
                <NavLink to='/category/Remera' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none f-futurismL text-dark px-3 underline text-center'}>Remeras</NavLink>
                <NavLink to='/category/Pantalon' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none f-futurismL text-dark px-3 underline text-center'}>Pantalones</NavLink>
                <NavLink to='/category/Campera' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none f-futurismL text-dark px-3 underline text-center'}>Camperas</NavLink>
                <Link to='/cart' className='position-absolute end-0 align-items-center d-none d-lg-flex text-dark'><DivLogo logoprops='fas fa-shopping-cart fa-2xl me-3' /></Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}

export default NavBar;