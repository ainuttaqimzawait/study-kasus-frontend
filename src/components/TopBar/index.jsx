import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { getCategories } from '../../app/api/product';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../app/features/Product/actions';
import { LinkContainer } from 'react-router-bootstrap';
import { totalItemCart } from '../../utils';

function TopBar() {
    const [categories, setCategories] = useState([]);
    const products = useSelector(state => state.products);
    const auth = useSelector(state => state.auth);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        getCategories()
            .then(({ data }) => {
                setCategories(data)
            })
    }, [])

    const renderCategories = () => {
        return categories.map((category, i) => {
            return <Nav.Link key={i} active={category.name === products.category}
                onClick={() => dispatch(setCategory(category.name))}>{category.name}</Nav.Link>
        })
    }

    const authStatus = () => {
        return auth.user ? <LinkContainer to={'/account'}>
            <Nav.Link title="Profil">
                <p>wes login</p>
            </Nav.Link>
        </LinkContainer>
            :
            <div style={{ display: "flex" }}>
                <LinkContainer to={'/register'}>
                    <Nav.Link >Register</Nav.Link>
                </LinkContainer>
                <div style={{ marginTop: "6px" }}>|</div>
                <LinkContainer to={'/login'}>
                    <Nav.Link >Log in</Nav.Link>
                </LinkContainer>
            </div>
    }

    return (
        <Navbar style={{
            height: "120px",
            backgroundColor: "yellow",
            position: "fixed",
            width: "100vw",
            top: "0px",
            zIndex: "900"
        }} expand="lg" >
            <Container fluid>
                <Navbar.Brand style={{ marginLeft: "70px" }} href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div style={{ display: "flex", flexDirection: 'column' }}>
                        <Form className="d-flex ms-4 me-4 mt-5">
                            <Form.Control
                                style={{ width: "53vw" }}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "9px", marginRight: "50px", marginBottom: "5px" }}>
                            {renderCategories()}
                        </div>
                    </div>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ display: "flex", alignItems: "center", maxHeight: '100px', marginRight: "70px" }}
                        navbarScroll
                    >

                        <LinkContainer to="/cart" style={{ marginRight: '20px' }}>
                            <Nav.Link className="position-relative" title="Keranjang belanja" >
                                <img src="keranjang-belanja.png" alt="" style={{ height: "50px" }} />
                                <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                                    {totalItemCart(cart)}
                                    <span className="visually-hidden">Total item</span>
                                </span>
                            </Nav.Link>
                        </LinkContainer>


                        {authStatus()}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;