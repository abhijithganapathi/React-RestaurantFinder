import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://icon-library.com/images/restaurant-icon-png/restaurant-icon-png-8.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            FindBestRestaurants
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
