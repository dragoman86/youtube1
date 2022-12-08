import React from "react";
import {Nav, Form, Button} from 'react-bootstrap';

function Navigation() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link variant="danger" href="/home">Youtube</Nav.Link>
      </Nav.Item>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Rechercher"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Rechercher</Button>
          </Form>
    </Nav>
  );
}

export default Navigation;