import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div>
        <Row>
            <Col className="text-center bg-dark">
            <p className='mt-3 p-3'>All rights reserved to <strong>FindBestRestaurants</strong></p>
            </Col>
        </Row>
    </div>
  )
}

export default Footer