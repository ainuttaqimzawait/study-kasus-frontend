import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

function TopBar() {
    const navbarBrand = {
        marginLeft: "70px"
    }
    const formControl = {
        width: "53vw"
    }
    return (
        <Navbar style={{
            height: "120px",
            backgroundColor: "yellow",
            position: "fixed",
            width: "100%",
            zIndex: "900"
        }} expand="lg" >
            <Container fluid>
                <Navbar.Brand style={navbarBrand} href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex ms-4 me-4">
                        <Form.Control
                            style={formControl}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ display: "flex", alignItems: "center", maxHeight: '100px', marginRight: "70px" }}
                        navbarScroll
                    >
                        <Nav.Link style={{ display: "flex" }} href="#action2">
                            <img src="keranjang-belanja.png" alt="" style={{ height: "50px" }} />
                        </Nav.Link>
                        <div style={{ display: "flex" }}>
                            <Nav.Link href="#action1">Daftar</Nav.Link>
                            <div style={{ marginTop: "6px" }}>|</div>
                            <Nav.Link href="#action2">Log in</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;