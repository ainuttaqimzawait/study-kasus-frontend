import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "../../components/TopBar"
import { Header } from '../../components/Carousel';
import CardProduct from '../../components/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { addItem } from '../../app/features/Cart/actions';
import { useEffect, useState } from 'react';
import { fetchProducts, setPage, toggleTags } from '../../app/features/Product/actions';
import { getTagsByCategory } from '../../app/api/product';
import Tag from '../../components/Tag';
import CardProductPlaceholder from '../../components/CardProductPlaceholder';
import Paginate from '../../components/Paginate';

export const Home = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [tags, setTags] = useState([]);


    useEffect(() => {
        dispatch(fetchProducts());
        getTagsByCategory(products.category)
            .then(({ data }) => setTags(data));
    }, [dispatch, products.currentPage, products.category, products.tags, products.keyword]);


    return (
        <div>
            <TopBar />
            <div
                style={{
                    width: '100w',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginTop: '0px',
                    backgroundColor: '#f5f7f6'
                }}>
                <Header />
                <div style={{ marginLeft: "-50vw" }}>
                    <strong>Tags: </strong> <Tag items={tags} onClick={tag => dispatch(toggleTags(tag))} />
                </div>
                <div
                    className="cardContainer"
                    style={{
                        display: "flex",
                        width: '100vw',
                        justifyContent: 'center'
                    }}>
                    <Row style={{
                        display: "flex",
                        width: '1190px'
                    }}>
                        {
                            products.status === 'proccess' ?
                                Array.from({ length: 8 }).map((_, idx) => (
                                    <Col key={idx} md={3}>
                                        <CardProductPlaceholder />
                                    </Col>
                                ))
                                :
                                products.data.map((product, i) => {
                                    return (
                                        <Col key={i} md={3}>
                                            <CardProduct item={product} onAddToCart={() => dispatch(addItem(product))} />
                                        </Col>
                                    )
                                })
                        }
                    </Row>
                </div>
                <Paginate
                    total={Math.ceil(products.totalItems / products.perPage)}
                    active={products.currentPage}
                    onSetPage={page => dispatch(setPage(page))}
                />
            </div>
        </div>
    )
}