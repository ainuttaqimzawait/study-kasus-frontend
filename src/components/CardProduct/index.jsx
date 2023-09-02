import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Carousel } from 'react-bootstrap';

function CardProduct() {
    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", backgroundColor: "#f5f7f6" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ backgroundColor: "white", display: "flex", justifyContent: "center", width: "1190px", marginTop: "145px", marginBottom: "25px" }}>
                    <Carousel style={{ backgroundColor: "lightblue", marginRight: "10px" }}>
                        <Carousel.Item style={{ height: "267px", width: "796px" }}>
                            <img src="corousel1.jpg" alt="" style={{ height: "267px" }} />
                        </Carousel.Item>
                        <Carousel.Item style={{ height: "267px", width: "796px" }}>
                            <img src="corousel2.jpg" alt="" style={{ height: "267px" }} />
                        </Carousel.Item>
                        <Carousel.Item style={{ height: "267px", width: "796px" }}>
                            <img src="corousel3.jpg" alt="" style={{ height: "267px" }} />
                        </Carousel.Item>
                    </Carousel>
                    <div style={{ display: "flex" }}>
                        <img src="discount2.jpg" alt="" style={{ height: "267px", paddingRight: "10px" }} />
                        <img src="discount1.jpg" alt="" style={{ height: "267px" }} />
                    </div>
                </div>
                <div className="cardContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;