import React from 'react';
import VehicleList from './vehicleList';
import EmployeeList from './employeeList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function resourceSummary() {
  return (
    <Row>
      <Col sm={4}>
        <VehicleList />
      </Col>
      <Col sm={8}>
        <EmployeeList />
      </Col>
    </Row>
  )
}

export default resourceSummary;