import React from 'react';
import NavigationBar from './components/navigationBar';
import Content from './components/dashboardContent';
import ResourceSummary from './components/resourcesSummary';
class Dashboard extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "NaviBar"
    }, /*#__PURE__*/React.createElement(NavigationBar, null), /*#__PURE__*/React.createElement(Content, null), /*#__PURE__*/React.createElement(ResourceSummary, null));
  }
}
export default Dashboard;