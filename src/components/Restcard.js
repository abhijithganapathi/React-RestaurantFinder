import React from "react";
import Card from "react-bootstrap/Card";

function Restcard({ restdata }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
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
    </>
  );
}

export default Restcard;
