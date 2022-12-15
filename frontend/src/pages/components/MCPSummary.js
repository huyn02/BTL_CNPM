import React from 'react';
import MCPsMap from './MCPsMap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function MCPSummary() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    sm: 8
  }, /*#__PURE__*/React.createElement(MCPsMap, null)), /*#__PURE__*/React.createElement(Col, {
    sm: 4
  }, /*#__PURE__*/React.createElement(Row, null, "Placeholder 1"), /*#__PURE__*/React.createElement(Row, null, "Placeholder 2"))));
}
export default MCPSummary;