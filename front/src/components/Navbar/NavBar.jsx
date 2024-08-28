import { Navbar, Nav} from 'react-bootstrap'


const NavBar = () => {
    return (
        <>
        
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Cinema Page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/peliculas">Agregar Peliculas</Nav.Link>
                        <Nav.Link href="/delete">Eliminar Peliculas</Nav.Link>
                        <Nav.Link href="/update">Modificar Peliculas</Nav.Link>
                        <Nav.Link href="/sobremi">Sobre Mi</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar;