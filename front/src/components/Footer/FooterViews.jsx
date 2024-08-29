import { Container, Row, Col, Stack, Image, Nav} from "react-bootstrap";
import Logo from "../../assets/miLogo.png"
import linkedin from "../../assets/linkedin.png"
import gitHub from "../../assets/github.png"
const FooterViews = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="bg-light text-black p-4">
                    <Col className="mx-5 fs-5">
                        <Stack>
                            <Image
                                src={Logo}
                                alt="Logo café y código"
                                rounded
                                width={100}
                                height={100}

                            />
                            <h2 className="text-start m-2" style={{ fontSize: "1rem"}}>Melisa Peano</h2>
                            <h2 className="text-start m-2" style={{ fontSize: "1rem"}}>Developer</h2>
                        </Stack>
                    </Col>
                    <Col className="text-start m-2" style={{ fontSize: "1rem", color: "black"}}>
                        <Nav className="flex-column fs-5">
                            <Nav.Link href="https://www.linkedin.com/in/melisa-peano-b264822b9/">
                                <img src={linkedin} alt="Logo" style={{ width: '30px', height: '30px' }} />
                            🌟Linkedin
                            </Nav.Link>
                            <Nav.Link href="https://github.com/MelisaPeano?tab=repositories">
                                <img src={gitHub} alt="Logo" style={{ width: '30px', height: '30px' }} />
                            🌟GitHub
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <h4 className="text-start m-2" style={{ fontSize: "1rem", color: "black"}}> Contactamé || Contact us!</h4>
                        <p className="text-start m-2" style={{ fontSize: "1rem", color: "black"}}>melisa.peano@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterViews;