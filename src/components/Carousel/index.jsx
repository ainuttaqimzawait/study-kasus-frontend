import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export const Header = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: "white",
            width: "100vw"
        }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "1190px",
                    marginTop: "145px",
                    marginBottom: "25px"
                }}>
                <Carousel
                    style={{
                        backgroundColor: "lightblue",
                        marginRight: "10px"
                    }}>
                    <Carousel.Item
                        style={{
                            height: "267px",
                            width: "796px"
                        }}>
                        <img
                            src="corousel1.jpg"
                            alt="#"
                            style={{
                                height: "267px"
                            }} />
                    </Carousel.Item>
                    <Carousel.Item
                        style={{
                            height: "267px",
                            width: "796px"
                        }}>
                        <img
                            src="corousel2.jpg"
                            alt="#"
                            style={{
                                height: "267px"
                            }} />
                    </Carousel.Item>
                    <Carousel.Item
                        style={{
                            height: "267px",
                            width: "796px"
                        }}>
                        <img
                            src="corousel3.jpg"
                            alt="#"
                            style={{
                                height: "267px"
                            }} />
                    </Carousel.Item>
                    <Carousel.Item
                        style={{
                            height: "267px",
                            width: "796px"
                        }}>
                        <img
                            src="corousel4.jpg"
                            alt="#"
                            style={{
                                height: "267px"
                            }} />
                    </Carousel.Item>
                    <Carousel.Item
                        style={{
                            height: "267px",
                            width: "796px"
                        }}>
                        <img
                            src="corousel5.jpg"
                            alt="#"
                            style={{
                                height: "267px"
                            }} />
                    </Carousel.Item>
                </Carousel>
                <div
                    style={{
                        display: "flex"
                    }}>
                    <img
                        src="discount2.jpg"
                        alt="#"
                        style={{
                            height: "267px",
                            paddingRight: "10px"
                        }} />
                    <img
                        src="discount1.jpg"
                        alt="#"
                        style={{
                            height: "267px"
                        }} />
                </div>
            </div>
        </div>
    )
}