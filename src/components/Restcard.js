import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './RestCard.css'

function Restcard({ restdata }) {
  return (
    <>
      <Link to={`/view-restaurant/${restdata.id}`} style={{textDecoration:'none', color:"white"}}>
          <Card id="ca1" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={restdata.photograph} />
            <Card.Body>
              <Card.Title className="pt-1 pb-1">{restdata.name}</Card.Title>
              <Card.Text>
                <p>
                    <strong>Cuisine Type: </strong>{restdata.cuisine_type}
                </p>
                <p>
                <strong>Neighborhood: </strong>{restdata.neighborhood}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
      </Link>
    </>
  );
}

export default Restcard;
