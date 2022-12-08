import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function BadgeHaut(props) {
  return (
    <Button variant="dark">
      {props.nameB} <Badge bg="secondary">{props.nbreB}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default BadgeHaut;