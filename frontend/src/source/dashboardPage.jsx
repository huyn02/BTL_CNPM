import React from 'react';
import NavigationBar from './components/navigationBar';
import Content from './components/dashboardContent';
import ResourceSummary from './components/resourcesSummary';
class Dashboard extends React.Component {
  render() {
    return (
      <div className="NaviBar">    
        <NavigationBar />
        <Content />
        <ResourceSummary/>
      </div>
    );
  }
}

export default Dashboard;