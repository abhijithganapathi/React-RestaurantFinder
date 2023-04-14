import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './RestCard.css'
import Review from "./Review";
import OperatingHours from "./OperatingHours";

function RestView() {
    const params = useParams();
    //   console.log(params.id);

    var [Allrestaurants, setRestaurants] = useState([]);

    const fetchData = async () => {
        const result = await fetch("/restaurants.json");
        result.json().then((data) => {
            setRestaurants(data.restaurants);
        });
    };

    console.log(Allrestaurants);
    const restaurant = Allrestaurants.find(item => item.id == params.id)
    console.log(restaurant);
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {
                restaurant ? (
                    < Row >
                        <Col id="ca1" lg={6} md={6} className='ps-5 pt-5 pb-5 ms-5 text-center'>
                            <img className="rounded border border-warning" style={{ height: '600px' }} src={restaurant.photograph} />
                        </Col>
                        <Col id='ca1' className='me-5 mt-5'>
                            <ListGroup variant='flush'>
                                <ListGroup.Item><h1 className='text-warning pb-1'>{restaurant.name}</h1></ListGroup.Item>
                                <ListGroup.Item><p>Neighborhood: <strong className="fs-5">{restaurant.neighborhood}</strong></p></ListGroup.Item>
                                <ListGroup.Item><p>Cuisine: <strong className="fs-5">{restaurant.cuisine_type}</strong></p></ListGroup.Item>
                                <ListGroup.Item><p>Address: <strong className="fs-6">{restaurant.address}</strong></p></ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="mt-4"><OperatingHours hours={restaurant.operating_hours}></OperatingHours></div>
                                    <div className="mt-3 pb-3"><Review review={restaurant.reviews}></Review></div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row >) : ""
            }
        </>
    )
}

export default RestView;
