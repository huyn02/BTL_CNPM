import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function KPISummary() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Row>
              Total collected garbage (in kilo-tonnes)
            </Row>
            <Row>
              56/180
            </Row>
          </Card>
        </Col>
        <Col>Total remaining waste at MCPs</Col>
        <Col>Average Fill level</Col>
        <Col>Currently active routes</Col>
      </Row>
    </Container>
  )
}

export default KPISummary;