import React from "react";
import Card from 'react-bootstrap/Card';

function Commentary(props) {
  return (
    <Card style={{ width: '60rem', textAlign: 'start', marginBottom:"1rem"}}>
      <Card.Body>
        <Card.Title>{props.nameC}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.dateC}</Card.Subtitle>
        <Card.Text>
        {props.children}
        </Card.Text>
        <Card.Link href="#">Like</Card.Link>
        <Card.Link href="#">Dislike</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Commentary;