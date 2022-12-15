import React from 'react';
import MCPsMap from './MCPsMap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function MCPSummary() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <MCPsMap />
        </Col>
        <Col sm={4}>
          <Row>Placeholder 1</Row>
          <Row>Placeholder 2</Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MCPSummary;