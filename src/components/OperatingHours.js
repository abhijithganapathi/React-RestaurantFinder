import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingHours({hours}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Operating Hours 
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <ListGroup>
                        <ListGroup.Item>Monday: {hours.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday: {hours.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday: {hours.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday: {hours.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Friday: {hours.Friday}</ListGroup.Item>
                        <ListGroup.Item>Saturday: {hours.Saturday}</ListGroup.Item>
                        <ListGroup.Item>Sunday: {hours.Sunday}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default OperatingHours