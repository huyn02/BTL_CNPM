import React from 'react';
import VehicleList from './vehicleList';
import EmployeeList from './employeeList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function resourceSummary() {
  return /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    sm: 4
  }, /*#__PURE__*/React.createElement(VehicleList, null)), /*#__PURE__*/React.createElement(Col, {
    sm: 8
  }, /*#__PURE__*/React.createElement(EmployeeList, null)));
}
export default resourceSummary;